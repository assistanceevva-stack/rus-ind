const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  const text = (req.body?.message || "").toLowerCase();

  let reply = "Я пока pre-MVP 🤖 Умею поздороваться и ответить «как дела» 🙂";

  if (text.includes("привет") || text.includes("здрав") || text.includes("hello")) {
    reply = "Привет! 👋 Как дела?";
  } else if (text.includes("как дела") || text.includes("как ты")) {
    reply = "У меня всё отлично 🙂 Спасибо! А у тебя как дела?";
  }

  res.json({ reply });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("✅ Backend запущен: http://localhost:" + PORT);
});