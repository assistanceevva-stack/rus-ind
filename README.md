# РУС-Индустрия

Сайт компании: оборудование и отечественное ПО для цифровых пищевых производств. Маркировка «Честный знак», весовое и маркировочное оборудование, MES/WMS-интеграция.

## Стек

- **Фронтенд**: Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Router
- **Бэкенд**: Node.js, Express 5 (чат, лиды, Google Sheets)

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

## Команды

| Команда | Где | Описание |
|---------|-----|----------|
| `npm start` | корень | Запуск backend + frontend |
| `npm run dev` | frontend | Dev-сервер Vite |
| `npm run build` | frontend | Сборка для продакшена |
| `npm run preview` | frontend | Просмотр собранного билда |
| `npm run lint` | frontend | ESLint |

## Бэкенд

- Требуется `.env` в `backend/` с переменными: `SHEET_ID`, `GS_CLIENT_EMAIL`, `GS_PRIVATE_KEY` (для Google Sheets).
- Без них бэкенд запустится, но логи/лиды в таблицу не пишутся.

## Документация

- `ИНСТРУКЦИЯ-НАСТРОЙКА-CURSOR.md` — настройка Cursor IDE для автозапуска команд.
