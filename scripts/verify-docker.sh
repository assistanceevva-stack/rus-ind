#!/usr/bin/env bash
# Проверка Docker Compose + nginx proxy
# Запуск: ./scripts/verify-docker.sh (после docker compose up -d)

set -e

BASE_URL="${BASE_URL:-http://localhost}"
FAILED=0

echo "=== Docker verification ==="
echo "BASE_URL=$BASE_URL"
echo ""

# 1) Frontend HTML
echo "1) GET $BASE_URL/ → HTML (200)"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/" 2>/dev/null || echo "000")
if [ "$STATUS" = "200" ]; then
  echo "   OK: $STATUS"
else
  echo "   FAIL: expected 200, got $STATUS"
  FAILED=1
fi

# 2) API health (через nginx proxy)
echo "2) GET $BASE_URL/api/health → JSON (200)"
RESP=$(curl -s -w "\n%{http_code}" "$BASE_URL/api/health" 2>/dev/null || echo -e "\n000")
STATUS=$(echo "$RESP" | tail -1)
BODY=$(echo "$RESP" | head -n -1)
if [ "$STATUS" = "200" ] && echo "$BODY" | grep -q '"ok"'; then
  echo "   OK: $STATUS, body contains ok"
else
  echo "   FAIL: status=$STATUS, body=$BODY"
  FAILED=1
fi

# 3) API context (ожидаем 200 или 400 — не 404/502)
echo "3) GET $BASE_URL/api/context?visitorId=test → не 404/502"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/context?visitorId=test" 2>/dev/null || echo "000")
if [ "$STATUS" != "404" ] && [ "$STATUS" != "502" ] && [ "$STATUS" != "000" ]; then
  echo "   OK: $STATUS (proxy works)"
else
  echo "   FAIL: got $STATUS (proxy or backend issue)"
  FAILED=1
fi

# 4) Backend logs (если docker compose доступен)
if command -v docker >/dev/null 2>&1; then
  echo "4) Backend logs (tail 20)"
  docker compose logs --tail=20 backend 2>/dev/null || true
fi

echo ""
if [ $FAILED -eq 0 ]; then
  echo "=== All checks passed ==="
  exit 0
else
  echo "=== Some checks failed ==="
  exit 1
fi
