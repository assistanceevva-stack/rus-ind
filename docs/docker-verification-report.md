# Отчёт: Проверка Docker Compose + nginx proxy

## A) Статический анализ

### 1. frontend/nginx.conf

| Проверка | Результат |
|----------|-----------|
| **SPA fallback** | ✅ `try_files $uri $uri/ /index.html` — есть |
| **location /api** | ✅ `proxy_pass http://backend:3001` — путь сохраняется (нет trailing slash) |
| **proxy_set_header** | ✅ Host, X-Real-IP, X-Forwarded-For, X-Forwarded-Proto |
| **proxy_pass слэш** | ✅ Без trailing slash — `/api/context` → backend получает `/api/context` |

**Проблема:** Backend имеет `/health` (не под `/api`). Запрос `GET /health` попадает в `location /` → try_files → `/index.html` (HTML вместо JSON). Для проверки нужен endpoint под `/api`.

### 2. docker-compose.yml

| Проверка | Результат |
|----------|-----------|
| **backend ports** | ✅ Нет — не публикуется наружу |
| **frontend ports** | ✅ `80:80` |
| **backend env_file** | ✅ `backend/.env` |
| **depends_on** | ✅ frontend зависит от backend |
| **сеть** | ✅ default network — backend и frontend в одной сети |

### 3. backend/server.mjs — endpoints

| Endpoint | Метод |
|----------|-------|
| `/health` | GET |
| `/api/context` | GET |
| `/api/chat` | POST |
| `/api/lead` | POST |
| `/api/debug/sheets` | GET |
| `/api/debug/peek` | GET |

### 4. ChatWidget — вызовы

| Вызов | URL при API_BASE="" |
|-------|---------------------|
| context | `/api/context?visitorId=...` |
| lead | `/api/lead` |
| chat | `/api/chat` |

**Совпадение:** ✅ ChatWidget вызывает `/api/*`, backend имеет `/api/*`, nginx проксирует `/api` → backend. Пути совпадают.

### 5. Выполненные правки

1. **Добавлен GET /api/health** в backend — для проверки proxy (curl http://localhost/api/health → 200).
2. **Добавлен scripts/verify-docker.sh** — автоматизированная проверка после `docker compose up -d`.

---

## B) Динамическая проверка

**Запуск (локально):**

```bash
cp backend/.env.example backend/.env
docker compose build && docker compose up -d
npm run verify:docker
```

**Проверки в скрипте:**
1. `GET /` → 200 (HTML фронта)
2. `GET /api/health` → 200 (JSON с `"ok"`)
3. `GET /api/context?visitorId=test` → не 404/502 (proxy работает)
4. Вывод `docker compose logs backend` (tail)

---

## C) Итог

| Что проверено | Результат |
|---------------|-----------|
| nginx SPA fallback | ✅ try_files |
| nginx /api proxy | ✅ путь сохраняется, headers выставлены |
| docker-compose | ✅ backend без ports, frontend 80, env_file |
| ChatWidget ↔ backend | ✅ пути совпадают |
| /api/health | ✅ добавлен для проверки |
| verify-docker.sh | ✅ автоматизированная проверка |
