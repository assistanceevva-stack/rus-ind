#!/bin/bash
# Запуск сайта на локалке — бэкенд + фронтенд

cd "$(dirname "$0")"

echo "🚀 Запуск бэкенда (порт 3001)..."
cd ai-chat-backend && npm start &
BACKEND_PID=$!

echo "🚀 Запуск фронтенда (порт 8080)..."
cd ../smart-hub-core-main && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Серверы запущены!"
echo "   Сайт: http://localhost:8080"
echo "   API:  http://localhost:3001"
echo ""
echo "Нажмите Ctrl+C для остановки"

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT TERM
wait
