import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background logo layer */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url(/rus-logo3.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'auto 60vh',
          opacity: 0.5
        }}
      ></div>

      <div className="relative z-10">
        <Header />
        <main className="pt-20 lg:pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Документ в стиле бумаги */}
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-8 lg:p-12">
                {/* Эффект бумаги */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    {/* Заголовок документа */}
                    <div className="text-center mb-8 pb-6 border-b border-white/20">
                      <h1 className="text-3xl lg:text-4xl font-bold mb-2">Политика использования файлов cookies</h1>
                    </div>

                    {/* Содержание документа */}
                    <div className="space-y-6 text-sm lg:text-base leading-relaxed">
                      <p className="text-muted-foreground">
                        Настоящая Политика использования файлов cookies определяет порядок применения файлов cookies на сайте https://foodtech.su (далее — Сайт), принадлежащем АО «Рус-Индустрия».
                      </p>

                      <section>
                        <h2 className="text-xl font-bold mb-3">1. Что такое cookies</h2>
                        <p className="text-muted-foreground">
                          Cookies — это небольшие текстовые файлы, сохраняемые на устройстве пользователя при посещении Сайта.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">2. Какие cookies используются</h2>
                        <p className="text-muted-foreground mb-2">
                          Сайт использует следующие виды cookies:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li><strong className="text-foreground">технические cookies</strong> — для обеспечения работы Сайта;</li>
                          <li><strong className="text-foreground">аналитические cookies</strong> — для анализа поведения пользователей (в том числе с использованием сторонних сервисов аналитики);</li>
                          <li><strong className="text-foreground">функциональные cookies</strong> — для сохранения пользовательских настроек;</li>
                          <li><strong className="text-foreground">рекламные cookies</strong> — для показа релевантной информации.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">3. Цели использования cookies</h2>
                        <p className="text-muted-foreground mb-2">
                          Cookies используются для:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>корректной работы Сайта;</li>
                          <li>улучшения пользовательского опыта;</li>
                          <li>анализа посещаемости;</li>
                          <li>повышения качества услуг Оператора.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">4. Управление cookies</h2>
                        <p className="text-muted-foreground mb-2">
                          Пользователь может отказаться от использования cookies, изменив настройки браузера.
                        </p>
                        <p className="text-muted-foreground">
                          Отключение cookies может повлиять на работу отдельных функций Сайта.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">5. Заключительные положения</h2>
                        <p className="text-muted-foreground">
                          АО «Рус-Индустрия» вправе изменять настоящую Политику использования cookies.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;

