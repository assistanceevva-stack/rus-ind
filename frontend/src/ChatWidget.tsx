import { useState, useRef, useEffect, useMemo } from "react";

type Message = { id: string; role: string; text: string };

type Role = "engineer" | "tech" | "consultant";
type AvatarState = "idle" | "typing" | "answering";
type MenuLevel =
  | "root"
  | "equipment"
  | "equipment_marking"
  | "equipment_weight"
  | "equipment_packaging"
  | "software"
  | "service"
  | "design";

type TechSpec = {
  product?: string;
  speed?: string;
  marking?: boolean;
  mes?: boolean;
  equipmentType?: string;
  problem?: string;
  packaging?: string;
  weightRange?: string;
  linesCount?: string;
  erpExists?: boolean;
};

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

function getAvatar(role: Role, state: AvatarState) {
  return `/avatars/${role}-${state}.png`;
}

const roleSpeech: Record<Role, { start: string }> = {
  engineer: {
    start:
      "Принял. Перехожу в инженерный режим.\nРазберём задачу по технической логике.",
  },
  tech: {
    start:
      "Ок, включаю режим технической поддержки.\nПопробуем локализовать проблему максимально быстро.",
  },
  consultant: {
    start:
      "Хорошо, перейдём в режим подбора решений.\nСначала уточним ключевые параметры задачи.",
  },
};

// ===== OFFLINE AI (базовый ответ) =====
function offlineAI(text: string, role: Role) {
  const t = text.toLowerCase();

  if (t.includes("маркиров")) {
    return (
      "Маркировку подбираем под скорость и тип упаковки.\n" +
      "Если скажете продукт + скорость + формат упаковки — я уже смогу дать типовую конфигурацию."
    );
  }

  if (t.includes("вес") || t.includes("чеквейер")) {
    return (
      "Весовое оборудование зависит от диапазона веса и требуемой точности.\n" +
      "Скажите: минимальный/максимальный вес и целевая точность."
    );
  }

  if (t.includes("упаков")) {
    return (
      "Упаковка зависит от продукта и формата.\n" +
      "Скажите: продукт, тип упаковки (лоток/вакуум/flow-pack/термоформ) и производительность."
    );
  }

  if (t.includes("mes") || t.includes("wms") || t.includes("erp")) {
    return (
      "IT-контур строим от текущей архитектуры.\n" +
      "Скажите: есть ли ERP, сколько линий, и нужно ли подключать оборудование (весы/принтеры/сканеры)."
    );
  }

  if (
    t.includes("не работает") ||
    t.includes("ошибка") ||
    t.includes("встала") ||
    t.includes("слом")
  ) {
    return (
      "Похоже на аварийный кейс.\n" +
      "Скажите: что именно остановилось, есть ли код ошибки и что было перед сбоем."
    );
  }

  if (role === "engineer")
    return "Ок. Дайте 2–3 параметра — я соберу конфигурацию.";
  if (role === "consultant")
    return "Ок. Уточним масштабы и сроки — предложу варианты.";
  return "Ок. Давайте быстро уточним симптомы и код ошибки.";
}

// ===== helper: типизация “печатания” =====
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [role, setRole] = useState<Role>("engineer");
  const [roleSelected, setRoleSelected] = useState(false);
  const [avatarState, setAvatarState] = useState<AvatarState>("idle");
  const [menu, setMenu] = useState<MenuLevel>("root");

  // активная ветка диалога (для “умных вопросов”)
  const [topic, setTopic] = useState<
    "unknown" | "equipment" | "software" | "service" | "design"
  >("unknown");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "Ассистент",
      text:
        "Вас приветствует цифровой ассистент АО «РУС-ИНДУСТРИЯ».\n\n" +
        "Я могу работать в разных режимах — как инженер, техподдержка или консультант по решениям.\n" +
        "Выберите формат, и я подстроюсь под вашу задачу.",
    },
  ]);

  const [input, setInput] = useState("");

  const [techSpec, setTechSpec] = useState<TechSpec>({});

  // visitorId/sessionId (память)
  const visitorIdRef = useRef<string>("");
  const sessionIdRef = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    const key = "ri_visitorId";
    const saved = localStorage.getItem(key);
    if (saved) {
      visitorIdRef.current = saved;
    } else {
      const id = crypto.randomUUID();
      visitorIdRef.current = id;
      localStorage.setItem(key, id);
    }
  }, []);

  // автоскролл
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // лид-форма
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [leadCity, setLeadCity] = useState("");
  const [sendingLead, setSendingLead] = useState(false);

  // ===== MESSAGES helpers =====
  function addMessage(role: string, text: string) {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role, text }]);
  }

  function setMessageText(id: string, text: string) {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, text } : m)));
  }

  // typewriter для ассистента
  function addAssistantTyping(
    fullText: string,
    opts?: { speedMs?: number; initialDelayMs?: number }
  ) {
    const speedMs = clamp(opts?.speedMs ?? 14, 6, 30);
    const initialDelayMs = clamp(opts?.initialDelayMs ?? 120, 0, 800);

    const id = crypto.randomUUID();
    setMessages((prev) => [...prev, { id, role: "Ассистент", text: "" }]);

    setAvatarState("answering");

    let i = 0;
    const start = () => {
      const timer = window.setInterval(() => {
        i += 1;
        setMessageText(id, fullText.slice(0, i));
        if (i >= fullText.length) {
          window.clearInterval(timer);
          window.setTimeout(() => setAvatarState("idle"), 220);
        }
      }, speedMs);
    };

    window.setTimeout(start, initialDelayMs);
  }

  // ===== TechSpec extraction =====
  function updateTechSpec(text: string) {
    const t = text.toLowerCase();

    setTechSpec((prev) => {
      const updated: TechSpec = { ...prev };

      // продукт
      if (t.includes("мясо")) updated.product = "мясо";
      if (t.includes("рыб")) updated.product = "рыба";
      if (t.includes("сыр")) updated.product = "сыр";
      if (t.includes("птиц") || t.includes("кур")) updated.product = "птица";

      // скорость: "120 уп/мин"
      const speedMatch = t.match(
        /(\d+)\s?(уп\/мин|уп\/м|уп в мин|уп\/minute|шт\/мин|шт\/м|pcs\/min|pack\/min)/
      );
      if (speedMatch) updated.speed = speedMatch[0];

      // маркировка + MES
      if (t.includes("без маркиров")) updated.marking = false;
      else if (t.includes("маркиров")) updated.marking = true;

      if (t.includes("без mes")) updated.mes = false;
      else if (t.includes("mes")) updated.mes = true;

      // ERP
      if (t.includes("есть erp") || t.includes("erp есть"))
        updated.erpExists = true;
      if (t.includes("без erp") || t.includes("нет erp"))
        updated.erpExists = false;

      // линии
      const linesMatch = t.match(/(\d+)\s?(линий|линии|line)/);
      if (linesMatch) updated.linesCount = linesMatch[0];

      // формат упаковки
      if (t.includes("лоток") || t.includes("лотков"))
        updated.packaging = "лоток";
      if (t.includes("вакуум")) updated.packaging = "вакуум";
      if (t.includes("flow")) updated.packaging = "flow-pack";
      if (t.includes("термоформ")) updated.packaging = "термоформование";

      // диапазон веса
      const w = t.match(
        /(\d+(\.\d+)?)\s?(г|кг)\s?(-|до)\s?(\d+(\.\d+)?)\s?(г|кг)/
      );
      if (w) updated.weightRange = w[0];

      // тип оборудования (по словам)
      if (t.includes("маркиров")) updated.equipmentType = "маркировка";
      if (t.includes("вес") || t.includes("чеквейер"))
        updated.equipmentType = "весовое оборудование";
      if (t.includes("упаков")) updated.equipmentType = "упаковка";

      // проблема (авария)
      if (
        t.includes("ошибка") ||
        t.includes("не работает") ||
        t.includes("встала") ||
        t.includes("слом") ||
        t.includes("stop")
      ) {
        updated.problem = text;
      }

      return updated;
    });
  }

  function techSpecSummaryString(ts: TechSpec) {
    const lines: string[] = [];
    if (ts.product) lines.push(`• продукт: ${ts.product}`);
    if (ts.speed) lines.push(`• скорость: ${ts.speed}`);
    if (ts.equipmentType) lines.push(`• тип: ${ts.equipmentType}`);
    if (ts.packaging) lines.push(`• упаковка: ${ts.packaging}`);
    if (ts.weightRange) lines.push(`• диапазон веса: ${ts.weightRange}`);
    if (ts.linesCount) lines.push(`• линии: ${ts.linesCount}`);
    if (ts.erpExists !== undefined)
      lines.push(`• ERP: ${ts.erpExists ? "есть" : "нет"}`);
    if (ts.marking !== undefined)
      lines.push(`• маркировка: ${ts.marking ? "да" : "нет"}`);
    if (ts.mes !== undefined)
      lines.push(`• интеграция MES: ${ts.mes ? "да" : "нет"}`);
    if (ts.problem) lines.push(`• проблема: ${ts.problem}`);
    return lines.length
      ? lines.join("\n")
      : "Пока мало данных — напишите пару параметров (продукт/скорость/маркировка).";
  }

  function showTechSpec() {
    addAssistantTyping(
      `📋 Я собрал предварительное ТЗ:\n\n${techSpecSummaryString(techSpec)}\n\nХотите, отправлю менеджеру? Нажмите “📨 Менеджеру”.`
    );
  }

  // ===== УМНЫЕ вопросы (ветки) =====
  function buildNextQuestions(
    ts: TechSpec,
    currentTopic: typeof topic,
    currentMenu: MenuLevel
  ) {
    const q: string[] = [];

    // если тема не выбрана — аккуратно спросим
    if (currentTopic === "unknown") {
      q.push(
        "Ок. Это про оборудование, IT/ПО, техподдержку (авария) или проектирование?"
      );
      return q;
    }

    // SERVICE (авария)
    if (currentTopic === "service") {
      if (!ts.problem)
        q.push(
          "Что именно остановилось (линия/весы/принтер/сканер/контроллер)?"
        );
      q.push("Есть код ошибки на экране? (если да — напишите как есть)");
      q.push("Что было перед сбоем: обновление, смена партии, смена настроек?");
      return q.slice(0, 4);
    }

    // SOFTWARE
    if (currentTopic === "software") {
      if (ts.erpExists === undefined) q.push("ERP уже есть? (да/нет)");
      if (!ts.linesCount) q.push("Сколько линий/участков нужно подключить?");
      if (ts.mes === undefined)
        q.push(
          "Нужна MES-надстройка (учёт производства в реальном времени)? (да/нет)"
        );
      q.push(
        "Нужно подключать оборудование (весы/маркировка/сканеры) к системе? (да/нет)"
      );
      return q.slice(0, 4);
    }

    // DESIGN
    if (currentTopic === "design") {
      if (!ts.product) q.push("Какой продукт/категория производства?");
      q.push("Какая целевая производительность (примерно)?");
      q.push("Новая площадка или модернизация существующей?");
      q.push("Какие ограничения: площадь/персонал/бюджет/сроки?");
      return q.slice(0, 4);
    }

    // EQUIPMENT
    if (currentTopic === "equipment") {
      if (!ts.equipmentType && currentMenu === "equipment")
        q.push("Какой тип оборудования: маркировка / весы / упаковка?");
      if (!ts.product) q.push("Какой продукт (мясо/птица/рыба/сыр/другое)?");
      if (!ts.speed)
        q.push("Скорость/производительность линии? (например 120 уп/мин)");
      if (
        ts.marking === undefined &&
        (ts.equipmentType === "маркировка" ||
          currentMenu === "equipment_marking")
      )
        q.push("Маркировка нужна? (да/нет)");
      if (ts.mes === undefined) q.push("Интеграция с MES/ERP нужна? (да/нет)");

      // уточнения по подветкам
      if (
        (currentMenu === "equipment_marking" ||
          ts.equipmentType === "маркировка") &&
        !ts.packaging
      ) {
        q.push("Какой формат упаковки (лоток/вакуум/flow-pack/термоформ)?");
      }
      if (
        (currentMenu === "equipment_weight" ||
          ts.equipmentType === "весовое оборудование") &&
        !ts.weightRange
      ) {
        q.push(
          "Диапазон веса (пример: 0.2–1.2 кг) и нужна ли контрольная точность?"
        );
      }

      return q.slice(0, 4);
    }

    return q.slice(0, 4);
  }

  function isSpecReady(ts: TechSpec, currentTopic: typeof topic) {
    if (currentTopic === "service") {
      // для аварии достаточно симптомов + уточнений
      return !!ts.problem;
    }
    if (currentTopic === "software") {
      return ts.erpExists !== undefined && !!ts.linesCount;
    }
    if (currentTopic === "design") {
      return !!ts.product; // для MVP — минимум
    }
    if (currentTopic === "equipment") {
      // минимум для пресейла
      const base = !!ts.product && !!ts.speed && !!ts.equipmentType;
      return base;
    }
    return false;
  }

  // “чипы” быстрых ответов под текущие вопросы
  const quickChips = useMemo(() => {
    const chips: string[] = [];

    if (topic === "software" && techSpec.erpExists === undefined)
      chips.push("ERP есть", "ERP нет");
    if (
      techSpec.mes === undefined &&
      (topic === "equipment" || topic === "software")
    )
      chips.push("MES да", "MES нет");
    if (techSpec.marking === undefined && topic === "equipment")
      chips.push("Маркировка да", "Маркировка нет");

    if (topic === "equipment" && !techSpec.equipmentType)
      chips.push("Маркировка", "Весы", "Упаковка");
    if (
      (menu === "equipment_marking" ||
        techSpec.equipmentType === "маркировка") &&
      !techSpec.packaging
    ) {
      chips.push("Лоток", "Вакуум", "Flow-pack", "Термоформ");
    }

    if (topic === "service") chips.push("Есть код ошибки", "Кода ошибки нет");

    // не плодим кнопки
    return chips.slice(0, 6);
  }, [topic, techSpec, menu]);

  function applyChip(chip: string) {
    // просто вставим как сообщение от пользователя (и запустим send)
    setInput(chip);
    // отправим в следующий тик, чтобы input успел обновиться
    setTimeout(() => sendMessage(chip), 0);
  }

  // ===== CONTEXT =====
  async function checkContext() {
    try {
      if (!visitorIdRef.current) return;
      const res = await fetch(
        `${API_BASE}/api/context?visitorId=${encodeURIComponent(visitorIdRef.current)}`
      );
      const data = await res.json();
      if (data?.found && data?.message) {
        addAssistantTyping(data.message);
      }
    } catch {
      // молчим
    }
  }

  useEffect(() => {
    if (!open) return;
    checkContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ===== ROLE + MENU =====
  function selectRole(r: Role) {
    setRole(r);
    setAvatarState("idle");
    setRoleSelected(true);

    addAssistantTyping(roleSpeech[r].start);
    showRootMenu(true);
  }

  function showRootMenu(animate = false) {
    setMenu("root");
    setTopic("unknown");
    const msg = "Выберите направление — так я быстрее дам точный ответ:";
    if (animate) addAssistantTyping(msg);
    else addMessage("Ассистент", msg);
  }

  function selectMenu(level: MenuLevel) {
    setMenu(level);

    if (level === "equipment") setTopic("equipment");
    if (level === "software") setTopic("software");
    if (level === "service") setTopic("service");
    if (level === "design") setTopic("design");

    if (level === "equipment")
      addAssistantTyping("🏭 Оборудование:\n• Маркировка\n• Весы\n• Упаковка");
    if (level === "software")
      addAssistantTyping("💻 IT/ПО:\n• MES\n• WMS\n• ERP\n• Интеграции");
    if (level === "service")
      addAssistantTyping("🛠️ Авария/техподдержка.\nЧто перестало работать?");
    if (level === "design")
      addAssistantTyping("🏗️ Проектирование.\nОпишите задачу и масштабы.");

    if (level === "equipment_marking") {
      setTopic("equipment");
      setTechSpec((p) => ({ ...p, equipmentType: "маркировка" }));
      addAssistantTyping(
        "🔖 Маркировка. Скажите: продукт, скорость линии и формат упаковки."
      );
    }
    if (level === "equipment_weight") {
      setTopic("equipment");
      setTechSpec((p) => ({ ...p, equipmentType: "весовое оборудование" }));
      addAssistantTyping(
        "⚖️ Весы/чеквейер. Скажите диапазон веса и требуемую точность."
      );
    }
    if (level === "equipment_packaging") {
      setTopic("equipment");
      setTechSpec((p) => ({ ...p, equipmentType: "упаковка" }));
      addAssistantTyping(
        "📦 Упаковка. Скажите продукт, формат упаковки и производительность."
      );
    }
  }

  function goBack() {
    if (menu.startsWith("equipment_")) {
      setMenu("equipment");
      addAssistantTyping("Ок, возвращаемся к разделу оборудования.");
    } else {
      showRootMenu(true);
    }
  }

  // ===== LEAD =====
  function buildTranscript(limit = 25) {
    const last = messages.slice(-limit);
    return last.map((m) => `${m.role}: ${m.text}`).join("\n\n");
  }

  async function sendLeadToManager() {
    setSendingLead(true);
    try {
      const res = await fetch(`${API_BASE}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId: visitorIdRef.current,
          sessionId: sessionIdRef.current,
          role,
          menu,
          topic,
          name: leadName,
          contact: leadContact,
          city: leadCity,
          techSpec,
          transcript: buildTranscript(25),
        }),
      });

      const data = await res.json();

      if (data?.ok) {
        addAssistantTyping(
          "✅ Принял. Я отправил менеджеру ваше ТЗ и контекст.\nЕсли хотите — продолжим уточнять детали, чтобы ускорить расчёт."
        );
      } else {
        addAssistantTyping(
          "⚠️ Не получилось отправить менеджеру. Попробуйте ещё раз."
        );
      }

      setLeadOpen(false);
      setLeadName("");
      setLeadContact("");
      setLeadCity("");
    } catch {
      addAssistantTyping(
        "⚠️ Сервер недоступен. Запустите backend и попробуйте снова."
      );
    } finally {
      setSendingLead(false);
    }
  }

  // ===== CHAT =====
  async function sendMessage(forcedText?: string) {
    const text = (forcedText ?? input).trim();
    if (!text) return;

    addMessage("Вы", text);
    updateTechSpec(text);
    setInput("");
    setAvatarState("typing");

    // локально посчитаем “следующие вопросы”
    const nextQ = buildNextQuestions(techSpec, topic, menu);
    const tzReady = isSpecReady(techSpec, topic);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          role,
          visitorId: visitorIdRef.current,
          sessionId: sessionIdRef.current,
          menu,
          topic,
          techSpec,
        }),
      });

      const data = await res.json();

      // 1) основной ответ
      setAvatarState("answering");
      addAssistantTyping(data.reply || offlineAI(text, role));

      // 2) умные вопросы (если backend не прислал — используем локальные)
      const questions: string[] = Array.isArray(data?.nextQuestions)
        ? data.nextQuestions
        : nextQ;

      // чуть пауза, чтобы не “втыкать” в один момент
      if (questions.length) {
        setTimeout(() => {
          addAssistantTyping(
            "Чтобы предложить точное решение, уточню:\n• " +
              questions.slice(0, 4).join("\n• "),
            {
              speedMs: 11,
              initialDelayMs: 120,
            }
          );
        }, 600);
      }

      // 3) если ТЗ готово — предложим показать/отправить
      const ready = data?.tzReady ?? tzReady;
      if (ready) {
        setTimeout(() => {
          addAssistantTyping(
            "Я уже собрал основу ТЗ. Нажмите “📋 ТЗ” — покажу, и “📨 Менеджеру” — отправлю."
          );
        }, 1100);
      }
    } catch {
      setAvatarState("idle");

      // офлайн: ответ + вопросы
      addAssistantTyping(
        "⚠️ Сейчас я работаю в автономном режиме.\n\n" + offlineAI(text, role)
      );

      if (nextQ.length) {
        setTimeout(() => {
          addAssistantTyping(
            "Чтобы предложить точное решение, уточню:\n• " +
              nextQ.slice(0, 4).join("\n• ")
          );
        }, 700);
      }

      if (tzReady) {
        setTimeout(() => {
          addAssistantTyping(
            "Я уже собрал основу ТЗ. Нажмите “📋 ТЗ” — покажу, и “📨 Менеджеру” — отправлю."
          );
        }, 1200);
      }
    }
  }

  return (
    <div className="fixed right-5 bottom-5 z-[99999]">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:border-lime/50 transition-all"
        >
          💬 Чат
        </button>
      ) : (
        <div className="w-[390px] h-[560px] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden flex flex-col">
          {/* HEADER */}
          <div className="px-4 py-3 backdrop-blur-xl bg-white/5 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={getAvatar(role, avatarState)}
                className="w-10 h-10 rounded-full border border-white/20 object-cover"
                alt="avatar"
              />
              <div className="font-semibold text-white">
                AI ассистент РУС-ИНДУСТРИИ
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-xl"
            >
              ×
            </button>
          </div>

          {/* ЭКРАН ВЫБОРА РОЛИ */}
          {!roleSelected && (
            <div className="p-4 flex flex-col gap-2 border-b border-white/10">
              <button
                onClick={() => selectRole("engineer")}
                className="px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-lime/40 text-white text-sm"
              >
                🧠 Инженер
              </button>
              <button
                onClick={() => selectRole("tech")}
                className="px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-lime/40 text-white text-sm"
              >
                🛠️ Техподдержка
              </button>
              <button
                onClick={() => selectRole("consultant")}
                className="px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-lime/40 text-white text-sm"
              >
                💼 Консультант
              </button>
            </div>
          )}

          {/* МЕНЮ */}
          {roleSelected && menu === "root" && (
            <div className="px-4 py-2 flex gap-2 flex-wrap border-b border-white/10 text-sm text-white/90">
              <button onClick={() => selectMenu("equipment")}>
                🏭 Оборудование
              </button>
              <button onClick={() => selectMenu("software")}>
                💻 ПО / MES / ERP
              </button>
              <button onClick={() => selectMenu("service")}>🛠️ Авария</button>
              <button onClick={() => selectMenu("design")}>
                🏗️ Проектирование
              </button>
            </div>
          )}

          {roleSelected && menu === "equipment" && (
            <div className="px-4 py-2 flex gap-2 flex-wrap border-b border-white/10 text-sm text-white/90">
              <button onClick={() => selectMenu("equipment_marking")}>
                🔖 Маркировка
              </button>
              <button onClick={() => selectMenu("equipment_weight")}>
                ⚖️ Весы
              </button>
              <button onClick={() => selectMenu("equipment_packaging")}>
                📦 Упаковка
              </button>
              <button onClick={goBack}>← Назад</button>
            </div>
          )}

          {/* СООБЩЕНИЯ */}
          <div className="flex-1 px-4 py-3 overflow-y-auto text-sm text-white/90">
            {messages.map((m) => (
              <div key={m.id} className="mb-3">
                <span className="font-semibold text-lime">{m.role}:</span>{" "}
                <span className="whitespace-pre-line">{m.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* ЧИПЫ быстрых ответов */}
          {roleSelected && quickChips.length > 0 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickChips.map((c) => (
                <button
                  key={c}
                  onClick={() => applyChip(c)}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 hover:border-lime/40"
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* ВНИЗ: ТЗ + Менеджеру + ввод */}
          <div className="px-4 py-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                onClick={showTechSpec}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:border-lime/40 text-white"
              >
                📋 ТЗ
              </button>

              <button
                onClick={() => setLeadOpen((v) => !v)}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:border-lime/40 text-white"
              >
                📨 Менеджеру
              </button>
            </div>

            {leadOpen && (
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs">
                <div className="mb-2 text-white/80">
                  Оставьте контакт — менеджер быстро ответит и пришлёт
                  расчёт/КП.
                </div>

                <div className="flex gap-2 mb-2">
                  <input
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Имя"
                    className="flex-1 px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-lime/50"
                  />
                  <input
                    value={leadCity}
                    onChange={(e) => setLeadCity(e.target.value)}
                    placeholder="Город"
                    className="flex-1 px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-lime/50"
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    value={leadContact}
                    onChange={(e) => setLeadContact(e.target.value)}
                    placeholder="Телефон / Email / Telegram"
                    className="flex-1 px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-lime/50"
                  />
                  <button
                    disabled={sendingLead || !leadContact.trim()}
                    onClick={sendLeadToManager}
                    className="px-3 py-2 rounded-lg bg-lime/20 border border-lime/30 hover:bg-lime/30 disabled:opacity-50 text-white"
                  >
                    {sendingLead ? "..." : "Отправить"}
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Если коротко — в чём задача?"
                className="flex-1 px-3 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-lime/50"
              />
              <button
                onClick={() => sendMessage()}
                className="px-4 py-2 rounded-lg backdrop-blur-xl bg-lime/20 border border-lime/30 hover:bg-lime/30 text-white"
              >
                Отпр.
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
