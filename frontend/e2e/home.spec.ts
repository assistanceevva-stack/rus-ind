import { test, expect } from "@playwright/test";

test.describe("Главная страница", () => {
  test("главная страница открывается", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Оборудование/ })
    ).toBeVisible();
  });

  test("форма обратной связи отправляется и показывает toast", async ({
    page,
  }) => {
    await page.goto("/");
    const form = page.getByTestId("contact-form");
    await form.getByLabel(/Ваше имя/).fill("Тест Тестов");
    await form.getByLabel(/Название компании/).fill("ООО Тест");
    await form.getByLabel(/Email/).fill("test@example.ru");
    await form.getByRole("button", { name: "Отправить заявку" }).click();

    await expect(
      page.getByTestId("toast").getByText("Заявка отправлена")
    ).toBeVisible();
  });
});
