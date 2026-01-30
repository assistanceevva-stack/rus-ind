# Решения по Docker Compose

**Дата:** 30 января 2026

---

## 1) Фронт в контейнере: build + nginx или node serve?

**Выбор: build → nginx**

| Вариант | Плюсы | Минусы |
|---------|-------|--------|
| **nginx** | Лёгкий образ, стандарт для SPA, кэширование, try_files для SPA fallback, не нужен Node в runtime | Нужна конфигурация nginx |
| **node serve** | Проще, всё в Node | Тяжелее, Node только для статики, менее типично для прода |

**Почему nginx:** типичная схема для SPA, меньший образ, быстрее, лучше для продакшена.

---

## 2) API URL для чата в Docker/проде

**Вариант A:** build-time `VITE_API_URL` — просто, но меняется только при пересборке.  
**Вариант B:** nginx proxy `/api` → backend — не зависит от `VITE_API_URL`, можно менять бэк без пересборки фронта.

**По умолчанию: B) nginx proxy**

- Бэкенд не публикуется наружу — один вход (frontend)
- Смена backend без пересборки фронта
- ChatWidget: при пустом `VITE_API_URL` использовать относительные URL (`/api/...`)
- nginx: `location /api { proxy_pass http://backend:3001; }`

**Альтернатива A:** если нужна минимальная конфигурация — `VITE_API_URL=http://localhost:3001` при сборке, backend публикуется на 3001. Подходит для локального docker compose.

---

## 3) Порты наружу

| Сервис | Дефолт | Аргументация |
|--------|--------|--------------|
| **frontend** | 80 | Обычный порт для веба, URL без порта (http://localhost) |
| **backend** | только внутри compose | При nginx proxy браузер ходит на frontend, nginx проксирует в backend. Публикация backend не нужна. |

**Альтернатива frontend:** 8080 — если 80 занят или хочется совпадения с dev.

---

## Итог для реализации

- Frontend: multi-stage (build + nginx), порт 80
- Backend: только внутри compose
- nginx proxy `/api` → `http://backend:3001`
- ChatWidget: при `VITE_API_URL` пустом/отсутствует — использовать `""` (относительные URL)
