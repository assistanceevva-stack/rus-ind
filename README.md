# РУС-Индустрия

Сайт компании: оборудование и отечественное ПО для цифровых пищевых производств. Маркировка «Честный знак», весовое и маркировочное оборудование, MES/WMS-интеграция.

## Стек

- **Фронтенд**: Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Router
- **Бэкенд**: Node.js, Express 5 (чат, лиды, Google Sheets)

**Node**: >=20 (см. `.nvmrc`)

## Структура проекта

```
rus-ind111/
├── backend/          # API-сервер (порт 3001)
│   ├── server.mjs    # Точка входа
│   └── .env          # Переменные окружения (не в git)
│
├── frontend/         # SPA (порт 8080)
│   ├── src/
│   │   ├── pages/    # Страницы (Index, Equipment, HonestMark и др.)
│   │   ├── components/  # Компоненты (Header, Footer, Hero и др.)
│   │   │   └── ui/   # shadcn/ui примитивы
│   │   ├── hooks/    # React-хуки
│   │   ├── lib/      # Утилиты (cn)
│   │   └── assets/   # Изображения
│   └── public/       # Статика
│
├── package.json      # Корневой: запуск обоих сервисов
└── start.sh          # Альтернативный запуск
```

## Запуск

### Вариант 1: Оба сервера одной командой

```bash
npm install   # один раз
npm start
```

- Сайт: http://localhost:8080
- API: http://localhost:3001

### Вариант 2: По отдельности

**Терминал 1 — бэкенд:**
```bash
cd backend && npm install && npm start
```

**Терминал 2 — фронтенд:**
```bash
cd frontend && npm install && npm run dev
```

### Вариант 3: Shell-скрипт

```bash
./start.sh
```

### Вариант 4: Docker Compose

```bash
# Перед первым запуском: создать backend/.env из шаблона
cp backend/.env.example backend/.env

# Сборка и запуск
docker compose build && docker compose up -d
```

- Сайт: http://localhost (порт 80)
- Чат ходит в backend через nginx proxy `/api` → backend:3001
- Backend не публикуется наружу

**Переменные:** `backend/.env` — для backend (Sheets и др.). Фронт собирается с `VITE_API_URL=""` (относительные URL, nginx проксирует `/api`).

**Проверка:** `npm run verify:docker` — автоматизированная проверка (curl /, /api/health, /api/context). Или вручную: откройте фронт в браузере, чат — запросы `/api/chat` идут через nginx. Логи: `docker compose logs -f backend`.

**Остановка:** `docker compose down`

## Команды

| Команда | Где | Описание |
|---------|-----|----------|
| `npm start` | корень | Запуск backend + frontend |
| `npm run dev` | frontend | Dev-сервер Vite |
| `npm run build` | frontend | Сборка для продакшена |
| `npm run preview` | frontend | Просмотр собранного билда |
| `npm run lint` | frontend, backend | ESLint |
| `npm run format` | frontend | Prettier |
| `docker compose build` | корень | Сборка образов |
| `docker compose up -d` | корень | Запуск контейнеров |
| `docker compose down` | корень | Остановка контейнеров |
| `npm run verify:docker` | корень | Проверка Docker (после up -d) |

## Проверки (CI и pre-commit)

- **GitHub Actions** — на каждый push и pull_request в main запускаются:
  - frontend: `npm ci`, `npm run lint`, `npm run build`
  - backend: `npm ci`, `npm run lint`
  - e2e: `npm ci`, `playwright install`, `npm run test:e2e` (см. [docs/phase2-lite-report.md](docs/phase2-lite-report.md))
- **Pre-commit** (husky + lint-staged) — перед каждым коммитом по изменённым файлам:
  - frontend: ESLint --fix, Prettier
  - backend: ESLint --fix

## Фронтенд

- Опционально `.env` в `frontend/` с переменной `VITE_API_URL` (URL бэкенда для ChatWidget).
- Без неё используется `http://localhost:3001`. Шаблон: `frontend/.env.example`
- **Docker:** используется `VITE_API_URL=""` — nginx проксирует `/api` в backend, URL не нужен.

## Бэкенд

- Требуется `.env` в `backend/` с переменными: `SHEET_ID`, `GS_CLIENT_EMAIL`, `GS_PRIVATE_KEY` (для Google Sheets).
- Без них бэкенд запустится, но логи/лиды в таблицу не пишутся.
- Шаблон: `backend/.env.example`

**GS_PRIVATE_KEY** (ключ из Google Cloud Console): храните в одну строку с литералом `\n` вместо переносов, например:
`GS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"`

## Branch protection (GitHub)

Рекомендуемые настройки для ветки `main` (Settings → Branches → Add rule):

- [ ] **Require a pull request before merging** — запрет прямого push в main
- [ ] **Require status checks to pass before merging** — CI должен пройти
  - Добавить в список: `frontend`, `backend`, `e2e` (названия jobs из `.github/workflows/ci.yml`)
- [ ] **Require branches to be up to date before merging** — PR должен быть актуален
- [ ] **Do not allow bypassing the above settings** — для админов тоже

## Документация

- `ИНСТРУКЦИЯ-НАСТРОЙКА-CURSOR.md` — настройка Cursor IDE для автозапуска команд.
- `docs/phase2-lite-report.md` — отчёт по E2E тестам Playwright и CI.
- `docs/docker-decisions.md` — решения по Docker Compose.
- `docs/docker-verification-report.md` — проверка nginx proxy и Docker.
