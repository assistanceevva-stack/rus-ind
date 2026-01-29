import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PersonalDataConsent = () => {
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
                      <h1 className="text-3xl lg:text-4xl font-bold mb-2">Согласие на обработку персональных данных</h1>
                    </div>

                    {/* Содержание документа */}
                    <div className="space-y-6 text-sm lg:text-base leading-relaxed">
                      <p className="text-muted-foreground">
                        Настоящим я, субъект персональных данных, свободно, своей волей и в своём интересе выражаю согласие Акционерному обществу «Рус-Индустрия» (ИНН 3102040544, ОГРН 1173123023017, адрес: 308519, Белгородская область, Белгородский район, территория Промышленный Парк Фабрика, здание 1, корпус 16, email: info@foodtech.su) (далее — Оператор) на обработку моих персональных данных.
                      </p>

                      <section>
                        <h2 className="text-xl font-bold mb-3">Согласие предоставляется на обработку следующих персональных данных:</h2>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>фамилия, имя, отчество;</li>
                          <li>номер телефона;</li>
                          <li>адрес электронной почты;</li>
                          <li>сведения о компании и должности;</li>
                          <li>иные сведения, предоставленные через формы сайта;</li>
                          <li>технические данные (IP-адрес, cookies, данные браузера и устройства, геолокация в обобщённом виде).</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">Обработка персональных данных осуществляется в целях:</h2>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>обработки обращений и запросов;</li>
                          <li>предоставления информации о деятельности, товарах и услугах Оператора;</li>
                          <li>заключения и исполнения договоров;</li>
                          <li>улучшения качества работы сайта;</li>
                          <li>направления информационных и рекламных материалов (при наличии согласия).</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">Оператор вправе осуществлять следующие действия с персональными данными:</h2>
                        <p className="text-muted-foreground">
                          сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача (в случаях, предусмотренных законодательством), обезличивание, блокирование, удаление и уничтожение.
                        </p>
                      </section>

                      <section>
                        <p className="text-muted-foreground mb-3">
                          Согласие действует до момента его отзыва субъектом персональных данных.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          Отзыв согласия осуществляется путём направления письменного уведомления на адрес электронной почты: info@foodtech.su.
                        </p>
                        <p className="text-muted-foreground">
                          Я подтверждаю, что ознакомлен(а) с Политикой конфиденциальности и условиями обработки персональных данных.
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

export default PersonalDataConsent;

