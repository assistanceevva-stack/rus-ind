import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const app = express();
app.use(cors());
app.use(express.json({ limit: "256kb" }));

const PORT = 3001;

// ==============================
// 1) ENV
// ==============================
const SHEET_ID = process.env.SHEET_ID;
const GS_CLIENT_EMAIL = process.env.GS_CLIENT_EMAIL;
const GS_PRIVATE_KEY = process.env.GS_PRIVATE_KEY?.replace(/\\n/g, "\n");

// ==============================
// 2) Headers (RU)
// ==============================
const LOGS_HEADERS_RU = [
  "время",
  "visitorId",
  "sessionId",
  "роль",
  "раздел",
  "сообщение_клиента",
  "ответ_ассистента",
  "тз",
  "userAgent",
  "ip",
];

const LEADS_HEADERS_RU = [
  "время",
  "visitorId",
  "sessionId",
  "роль",
  "раздел",
  "имя",
  "контакт",
  "город",
  "сообщение_клиента",
  "тз",
  "диалог",
  "userAgent",
  "ip",
];

// ==============================
// 3) Google Sheets handles
// ==============================
let sheetLogs = null;
let sheetLeads = null;

// ==============================
// 4) Helpers
// ==============================
function normalizeTitle(s) {
  return String(s || "").trim().toLowerCase();
}

function findSheetByTitleCI(doc, title) {
  const wanted = normalizeTitle(title);
  return (
    Object.values(doc.sheetsById).find((s) => normalizeTitle(s.title) === wanted) ||
    null
  );
}

async function safeLoadHeaders(ws) {
  try {
    await ws.loadHeaderRow(); // важно: без аргументов
    return ws.headerValues || [];
  } catch {
    return [];
  }
}

async function ensureHeaders(ws, headers) {
  const current = await safeLoadHeaders(ws);

  if (!current.length) {
    await ws.setHeaderRow(headers);
    console.log(`✅ Sheets: заголовки установлены → ${ws.title}`);
    return true;
  }

  const ok = headers.every((h) => current.includes(h));
  if (!ok) {
    console.log(
      `⚠️ Sheets: заголовки не совпадают (НЕ трогаю)\nЛист: ${ws.title}\nФакт: ${JSON.stringify(
        current
      )}`
    );
  }
  return ok;
}

function getIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length) return xff.split(",")[0].trim();
  return req.socket?.remoteAddress || "";
}

function nowIso() {
  return new Date().toISOString();
}

function clampString(s, max = 2000) {
  const str = String(s ?? "");
  return str.length > max ? str.slice(0, max) : str;
}

// ==============================
// 5) Anti-spam / rate limit (in-memory)
// ==============================
const RATE = {
  chat: { limit: 30, windowMs: 60_000 }, // 30/мин
  lead: { limit: 8, windowMs: 60_000 }, // 8/мин
  context: { limit: 60, windowMs: 60_000 }, // 60/мин
};

const buckets = new Map(); // key -> {count, resetAt}
const lastMessages = new Map(); // key -> {text, at}

function rateKey(req, visitorId = "") {
  return `${visitorId || "anon"}|${getIp(req)}`;
}

function rateLimit(kind) {
  const { limit, windowMs } = RATE[kind];
  return (req, res, next) => {
    const visitorId = String(req.body?.visitorId || req.query?.visitorId || "");
    const key = `${kind}:${rateKey(req, visitorId)}`;

    const t = Date.now();
    const b = buckets.get(key);

    if (!b || t > b.resetAt) {
      buckets.set(key, { count: 1, resetAt: t + windowMs });
      return next();
    }

    b.count += 1;
    if (b.count > limit) {
      const retrySec = Math.ceil((b.resetAt - t) / 1000);
      return res.status(429).json({
        ok: false,
        error: "rate_limited",
        message: `Слишком много запросов. Попробуйте через ${retrySec} сек.`,
      });
    }

    next();
  };
}

function spamGuard(req, res, next) {
  const message = String(req.body?.message || "");
  const visitorId = String(req.body?.visitorId || "");
  const key = `msg:${rateKey(req, visitorId)}`;
  const t = Date.now();

  if (message.length > 1500) {
    return res.status(400).json({
      ok: false,
      error: "message_too_long",
      message: "Слишком длинное сообщение. Сократите до 1–2 абзацев.",
    });
  }

  const prev = lastMessages.get(key);
  if (prev && prev.text === message && t - prev.at < 10_000) {
    return res.status(429).json({
      ok: false,
      error: "duplicate",
      message: "Похоже, вы отправили одно и то же сообщение несколько раз подряд 🙂",
    });
  }
  lastMessages.set(key, { text: message, at: t });

  const links = (message.match(/https?:\/\//g) || []).length;
  if (links >= 5) {
    return res.status(400).json({
      ok: false,
      error: "too_many_links",
      message: "Слишком много ссылок в одном сообщении.",
    });
  }

  next();
}

// ==============================
// 6) Sheets init
// ==============================
async function initSheet() {
  if (!SHEET_ID || !GS_CLIENT_EMAIL || !GS_PRIVATE_KEY) {
    console.log("⚠️ Sheets: не найдены ENV (SHEET_ID / GS_CLIENT_EMAIL / GS_PRIVATE_KEY)");
    return;
  }

  const auth = new JWT({
    email: GS_CLIENT_EMAIL,
    key: GS_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(SHEET_ID, auth);
  await doc.loadInfo();

  sheetLogs = findSheetByTitleCI(doc, "Логи");
  if (!sheetLogs) sheetLogs = await doc.addSheet({ title: "Логи" });
  await ensureHeaders(sheetLogs, LOGS_HEADERS_RU);

  sheetLeads = findSheetByTitleCI(doc, "Заявки");
  if (!sheetLeads) sheetLeads = await doc.addSheet({ title: "Заявки" });
  await ensureHeaders(sheetLeads, LEADS_HEADERS_RU);

  console.log(
    "✅ Sheets подключены:",
    doc.title,
    "→",
    sheetLogs.title,
    "+",
    sheetLeads.title
  );
}

// ==============================
// 7) Logging
// ==============================
async function logTurn({
  visitorId,
  sessionId,
  role,
  menu,
  userMessage,
  assistantReply,
  techSpec,
  userAgent,
  ip,
}) {
  if (!sheetLogs) return;
  try {
    await sheetLogs.addRow({
      время: nowIso(),
      visitorId: visitorId || "",
      sessionId: sessionId || "",
      роль: role || "",
      раздел: menu || "",
      сообщение_клиента: clampString(userMessage, 1500),
      ответ_ассистента: clampString(assistantReply, 3000),
      тз: techSpec ? JSON.stringify(techSpec) : "",
      userAgent: clampString(userAgent, 400),
      ip: ip || "",
    });
  } catch (e) {
    console.log("⚠️ Sheets log error:", e?.message || e);
  }
}

async function logLead({
  visitorId,
  sessionId,
  role,
  menu,
  name,
  contact,
  city,
  userMessage,
  techSpec,
  transcript,
  userAgent,
  ip,
}) {
  if (!sheetLeads) return;
  try {
    await sheetLeads.addRow({
      время: nowIso(),
      visitorId: visitorId || "",
      sessionId: sessionId || "",
      роль: role || "",
      раздел: menu || "",
      имя: clampString(name, 120),
      контакт: clampString(contact, 200),
      город: clampString(city, 120),
      сообщение_клиента: clampString(userMessage, 1500),
      тз: techSpec ? JSON.stringify(techSpec) : "",
      диалог: clampString(transcript, 12_000),
      userAgent: clampString(userAgent, 400),
      ip: ip || "",
    });
  } catch (e) {
    console.log("⚠️ Sheets lead error:", e?.message || e);
  }
}

// ==============================
// 8) Context (last turn by visitorId)
// ==============================
async function getLastContext(visitorId) {
  if (!sheetLogs) return null;

  const wanted = String(visitorId || "").trim();
  if (!wanted) return null;

  try {
    await sheetLogs.loadHeaderRow().catch(() => {});
    const rows = await sheetLogs.getRows({ limit: 2000 });

    for (let i = rows.length - 1; i >= 0; i--) {
      const r = rows[i];
      const vid = String(r.get("visitorId") || "").trim();

      if (vid === wanted) {
        return {
          timestamp: String(r.get("время") || ""),
          role: String(r.get("роль") || ""),
          menu: String(r.get("раздел") || ""),
          userMessage: String(r.get("сообщение_клиента") || ""),
          assistantReply: String(r.get("ответ_ассистента") || ""),
          techSpec: String(r.get("тз") || ""),
        };
      }
    }
    return null;
  } catch (e) {
    console.log("⚠️ Sheets context error:", e?.message || e);
    return null;
  }
}

// ==============================
// 9) Reply (offline базовый)
// ==============================
function offlineReply(text, role) {
  const t = (text || "").toLowerCase();

  if (t.includes("привет") || t.includes("здрав") || t.includes("hello")) {
    return "Привет! 👋 Чем помочь по РУС-ИНДУСТРИИ?";
  }
  if (t.includes("как дела") || t.includes("как ты")) {
    return "У меня всё отлично 🙂 Спасибо! А у вас как дела?";
  }

  if (role === "tech") return "Ок. Что именно перестало работать и есть ли код ошибки?";
  if (role === "consultant") return "Понял. Что подбираем и какие сроки/объёмы?";

  return "Принял. Уточните: продукт, скорость линии, нужна ли маркировка/интеграция MES?";
}

// ==============================
// 10) Routes
// ==============================
app.get("/health", (req, res) => {
  res.json({ ok: true, sheets: Boolean(sheetLogs && sheetLeads), time: nowIso() });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// 🔎 Debug: какие листы подключены и какие заголовки у “Логи”
app.get("/api/debug/sheets", async (req, res) => {
  try {
    const headers = sheetLogs ? await safeLoadHeaders(sheetLogs) : [];
    res.json({
      ok: true,
      sheetLogs: sheetLogs?.title || null,
      sheetLeads: sheetLeads?.title || null,
      logsHeaders: headers,
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
});

// 🔎 Debug: показать последние 5 строк для visitorId (НА ДАННЫХ ЧИТАЕМ ЧЕРЕЗ get())
app.get("/api/debug/peek", async (req, res) => {
  if (!sheetLogs) return res.json({ ok: false, error: "no_sheetLogs" });

  const visitorId = String(req.query.visitorId || "").trim();

  try {
    await sheetLogs.loadHeaderRow().catch(() => {});
    const rows = await sheetLogs.getRows({ limit: 2000 });

    const arr = rows.map((r) => ({
      время: String(r.get("время") || ""),
      visitorId: String(r.get("visitorId") || ""),
      sessionId: String(r.get("sessionId") || ""),
      роль: String(r.get("роль") || ""),
      раздел: String(r.get("раздел") || ""),
      сообщение_клиента: String(r.get("сообщение_клиента") || ""),
      ответ_ассистента: String(r.get("ответ_ассистента") || ""),
      тз: String(r.get("тз") || ""),
    }));

    const filtered = visitorId
      ? arr.filter((x) => String(x.visitorId).trim() === visitorId)
      : arr;

    res.json({
      ok: true,
      totalRows: arr.length,
      matched: filtered.length,
      last5: filtered.slice(-5),
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
});

// ===== context =====
app.get("/api/context", rateLimit("context"), async (req, res) => {
  const visitorId = String(req.query.visitorId || "");
  const ctx = await getLastContext(visitorId);

  if (!ctx) return res.json({ found: false });

  const msg =
    `Похоже, вы уже обращались ранее.\n` +
    `Последний контакт: ${ctx.timestamp}\n` +
    (ctx.menu ? `Тема: ${ctx.menu}\n` : "") +
    `Хотите продолжить с этого места? 🙂`;

  res.json({ found: true, message: msg, ctx });
});

// ===== chat =====
app.post("/api/chat", rateLimit("chat"), spamGuard, async (req, res) => {
  const message = String(req.body?.message || "");
  const role = String(req.body?.role || "engineer");
  const visitorId = String(req.body?.visitorId || "");
  const sessionId = String(req.body?.sessionId || "");
  const menu = String(req.body?.menu || "");
  const techSpec = req.body?.techSpec || null;

  const reply = offlineReply(message, role);

  await logTurn({
    visitorId,
    sessionId,
    role,
    menu,
    userMessage: message,
    assistantReply: reply,
    techSpec,
    userAgent: req.headers["user-agent"] || "",
    ip: getIp(req),
  });

  res.json({ reply });
});

// ===== lead =====
app.post("/api/lead", rateLimit("lead"), async (req, res) => {
  const visitorId = String(req.body?.visitorId || "");
  const sessionId = String(req.body?.sessionId || "");
  const role = String(req.body?.role || "");
  const menu = String(req.body?.menu || "");

  const name = String(req.body?.name || "");
  const contact = String(req.body?.contact || "");
  const city = String(req.body?.city || "");

  const userMessage = String(req.body?.userMessage || "");
  const techSpec = req.body?.techSpec || null;
  const transcript = String(req.body?.transcript || "");

  await logLead({
    visitorId,
    sessionId,
    role,
    menu,
    name,
    contact,
    city,
    userMessage,
    techSpec,
    transcript,
    userAgent: req.headers["user-agent"] || "",
    ip: getIp(req),
  });

  res.json({ ok: true });
});

// ==============================
// 11) Boot
// ==============================
initSheet()
  .then(() => {
    app.listen(PORT, () => console.log("✅ Backend запущен: http://localhost:" + PORT));
  })
  .catch((e) => {
    console.log("⚠️ initSheet error:", e?.message || e);
    app.listen(PORT, () =>
      console.log("✅ Backend запущен (без Sheets): http://localhost:" + PORT)
    );
  });
