# Отчёт: Фаза 2-lite — E2E тесты Playwright и CI

**Дата:** 30 января 2026  
**Цель:** Минимальные E2E тесты Playwright + подключение к CI

---

## Содержание

1. [Часть 0 — Анализ проекта](#часть-0--анализ-проекта)
2. [Часть 1 — Playwright](#часть-1--playwright)
3. [Часть 2 — CI](#часть-2--ci)
4. [Известные риски и решения](#известные-риски-и-решения)
5. [Коммиты](#коммиты)
6. [Инструкции по запуску](#инструкции-по-запуску)

---

## Часть 0 — Анализ проекта

Перед реализацией проведён анализ кодовой базы для ответов на вопросы тимлида.

### 1) Базовый URL фронта

| Режим | Порт | Base path | URL |
|-------|------|-----------|-----|
| **dev** (`npm run dev`) | 8080 | `/` | `http://localhost:8080/` |
| **preview** (`npm run preview`) | 4173 (дефолт Vite) | `/` | `http://localhost:4173/` |

Источник: `frontend/vite.config.ts` — `server.port: 8080`.

### 2) Форма обратной связи

| Компонент | Расположение | Обязательные поля | Куда отправляет |
|-----------|--------------|-------------------|-----------------|
| **ContactForm** | Главная (`/`), секция `#contact` | `name`, `company`, `email` | Только toast (mock) |
| **ContactDialog** | Header (кнопка «Запрос КП») | `name`, `company`, `email` | localStorage + JSON + toast |

Обе формы **не обращаются к бэкенду** — стабильны для E2E без внешних зависимостей.

### 3) Связь фронта с бэком

- **ChatWidget:** прямой URL `http://localhost:3001` (захардкожено в `ChatWidget.tsx:30`)
- **Формы:** не используют бэк
- **Vite proxy:** нет
- **Env-переменные для API:** нет

### 4) Успешная отправка формы

- Toast (Radix UI): `title: "Заявка отправлена"`, `description: "Мы свяжемся с вами в ближайшее время"`
- Проверка успеха: появление текста «Заявка отправлена» в DOM

### 5) Секреты для E2E

**Не требуются.** Форма не использует бэк. Чат при недоступном бэке работает в offline-режиме.

### 6) Альтернативные сценарии

Форма стабильна. Запасные варианты: навигация по страницам или открытие чата + отправка сообщения (работает без бэка).

---

## Часть 1 — Playwright

### A) Установка и конфигурация

**Зависимости:**
- `@playwright/test` — devDependency

**Скрипты в `frontend/package.json`:**
```json
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui"
```

**Конфигурация `frontend/playwright.config.ts`:**

| Параметр | Значение |
|----------|----------|
| `testDir` | `./e2e` |
| `baseURL` | `http://localhost:8080` |
| `webServer.command` | `npm run dev` |
| `webServer.url` | `http://localhost:8080` |
| `webServer.reuseExistingServer` | `!process.env.CI` (локально переиспользует, в CI — новый) |
| `webServer.timeout` | 120 000 мс |
| `projects` | Chromium (Desktop Chrome) |
| `retries` | 2 в CI, 0 локально |
| `workers` | 1 в CI |
| `reporter` | HTML в CI, list локально |
| `trace` | on-first-retry |

### B) E2E тесты

**Файл:** `frontend/e2e/home.spec.ts`

| № | Тест | Что проверяет |
|---|------|---------------|
| 1 | **главная страница открывается** | Наличие заголовка с текстом «Оборудование» (`getByRole("heading", { name: /Оборудование/ })`) |
| 2 | **форма обратной связи отправляется и показывает toast** | Заполнение name, company, email → submit → появление toast «Заявка отправлена» |

### C) Стабильные селекторы

**data-testid (минимально):**
- `data-testid="contact-form"` — форма в `ContactForm.tsx`
- `data-testid="toast"` — toast в `Toaster` (`ui/toaster.tsx`)

**Остальные селекторы:**
- `getByRole("heading", { name: /Оборудование/ })` — главная страница
- `getByLabelText(/Ваше имя/)`, `getByLabelText(/Название компании/)`, `getByLabelText(/Email/)` — поля формы
- `getByRole("button", { name: "Отправить заявку" })` — кнопка отправки
- `page.getByTestId("toast").getByText("Заявка отправлена")` — проверка toast

### D) Локальный запуск

- **webServer** поднимает `npm run dev` перед тестами
- Порт 8080 должен быть свободен
- Локально можно переиспользовать уже запущенный dev-сервер (`reuseExistingServer: true`)

---

## Часть 2 — CI

### Job `e2e` в `.github/workflows/ci.yml`

| Шаг | Действие |
|-----|----------|
| 1 | Checkout репозитория |
| 2 | Setup Node.js (версия из `.nvmrc`) |
| 3 | npm cache (frontend/package-lock.json) |
| 4 | `npm ci` в `frontend/` |
| 5 | `npx playwright install --with-deps chromium` |
| 6 | `npm run test:e2e` |
| 7 | **Upload Playwright report** — артефакт `playwright-report` при падении (`if: failure()`) |

### Артефакты при падении

- Папка `frontend/playwright-report/` загружается как артефакт `playwright-report`
- В Actions можно скачать и открыть HTML-отчёт для разбора падений

---

## Известные риски и решения

### Порт 8080

**Проблема:** Если порт 8080 занят, Vite по умолчанию выбирает другой (8081, 8082…). Playwright ожидает `http://localhost:8080`, тесты падают с неочевидной ошибкой.

**Рекомендуемое решение — strictPort (сейчас не включён):**

В `frontend/vite.config.ts` в объекте `server` добавить `strictPort: true`:
```ts
server: {
  host: "0.0.0.0",
  port: 8080,
  strictPort: true,  // рекомендуется включить
},
```
Тогда при занятом порте Vite завершится с явной ошибкой *"Port 8080 is in use"* вместо тихого переключения на другой порт.

**Опциональный вариант — скрипт dev:e2e (не реализован в проекте):**

Если нужен отдельный порт для E2E (без конфликта с `npm run dev` на 8080), можно добавить в `frontend/package.json` скрипт `"dev:e2e": "vite --port 5180"` и в `playwright.config.ts` изменить webServer на `command: "npm run dev:e2e"`, `url: "http://localhost:5180"`, а также `baseURL: "http://localhost:5180"`. **Текущие настройки проекта — порт 8080.**

---

## Коммиты

| № | Коммит | Описание |
|---|--------|----------|
| 1 | `test(e2e): add Playwright deps and config with webServer on 8080` | @playwright/test, playwright.config.ts, скрипты test:e2e, test:e2e:ui |
| 2 | `test(e2e): add data-testid to ContactForm and toast for stable selectors` | data-testid в ContactForm и Toaster |
| 3 | `test(e2e): add homepage and ContactForm toast tests` | 2 теста в e2e/home.spec.ts |
| 4 | `ci: add e2e job with playwright install and report artifact on failure` | Job e2e в CI, gitignore для playwright |
| 5 | `docs: add Phase 2-lite Part 0 analysis answers` | docs/phase2-lite-part0-answers.md |

---

## Инструкции по запуску

### Локальный запуск E2E

```bash
cd frontend

# Один раз — установка браузеров
npx playwright install chromium

# Запуск тестов (поднимает dev-сервер на 8080)
npm run test:e2e

# UI-режим (интерактивный)
npm run test:e2e:ui
```

**Важно:** порт 8080 должен быть свободен. Если занят, Vite возьмёт другой порт, и тесты упадут.

**Dev-сервер уже запущен на 8080?** Playwright использует `reuseExistingServer: true` локально — если `http://localhost:8080` отвечает, новый сервер не поднимается, тесты идут против уже запущенного dev.

**В CI:** `reuseExistingServer` отключён (`process.env.CI`), порт 8080 свободен — Playwright каждый раз поднимает новый dev-сервер для изолированного прогона.

### CI

- Job `e2e` запускается при push/PR в `main`
- Параллельно с jobs `frontend` и `backend`
- При падении — артефакт `playwright-report` в разделе Artifacts

---

## Изменённые и добавленные файлы

| Файл | Действие |
|------|----------|
| `frontend/package.json` | Добавлены @playwright/test, скрипты test:e2e, test:e2e:ui |
| `frontend/playwright.config.ts` | **Создан** — конфиг Playwright |
| `frontend/e2e/home.spec.ts` | **Создан** — 2 E2E теста |
| `frontend/src/components/ContactForm.tsx` | Добавлен data-testid="contact-form" |
| `frontend/src/components/ui/toaster.tsx` | Добавлен data-testid="toast" |
| `frontend/.gitignore` | Добавлены test-results/, playwright-report/, playwright/.cache/ |
| `.github/workflows/ci.yml` | Добавлен job e2e |
| `docs/phase2-lite-part0-answers.md` | **Создан** — ответы на вопросы Части 0 |
| `docs/phase2-lite-report.md` | **Создан** — этот отчёт |

---

## Следующий шаг

После успешного прохождения CI можно переходить к **Docker compose** (основа для деплоя).
