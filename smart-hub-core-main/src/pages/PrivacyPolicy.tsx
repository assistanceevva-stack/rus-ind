import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                      <h1 className="text-3xl lg:text-4xl font-bold mb-2">Политика конфиденциальности</h1>
                      <p className="text-muted-foreground text-sm">АО «Рус-Индустрия»</p>
                    </div>

                    {/* Содержание документа */}
                    <div className="space-y-6 text-sm lg:text-base leading-relaxed">
                      <section>
                        <h2 className="text-xl font-bold mb-3">1. Общие положения</h2>
                        <p className="text-muted-foreground mb-3">
                          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта https://foodtech.su (далее — Сайт), осуществляемой Акционерным обществом «Рус-Индустрия» (далее — Оператор).
                        </p>
                        <p className="text-muted-foreground mb-3">
                          Оператор обеспечивает защиту прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиту права на неприкосновенность частной жизни, личную и семейную тайну.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          Использование Сайта означает согласие пользователя с настоящей Политикой конфиденциальности и условиями обработки его персональных данных.
                        </p>
                        <p className="text-muted-foreground">
                          Если пользователь не согласен с условиями настоящей Политики, он должен прекратить использование Сайта.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">2. Сведения об Операторе</h2>
                        <div className="space-y-2 text-muted-foreground">
                          <p><strong className="text-foreground">Оператор:</strong> Акционерное общество «Рус-Индустрия»</p>
                          <p><strong className="text-foreground">Юридический адрес:</strong> 308519, Белгородская область, Белгородский район, территория Промышленный Парк Фабрика, здание 1, корпус 16</p>
                          <p><strong className="text-foreground">ИНН:</strong> 3102040544</p>
                          <p><strong className="text-foreground">ОГРН:</strong> 1173123023017 от 26 июня 2017 г.</p>
                          <p><strong className="text-foreground">Адрес электронной почты:</strong> info@foodtech.su</p>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">3. Персональные данные пользователей</h2>
                        <p className="text-muted-foreground mb-3">
                          Оператор может обрабатывать следующие персональные данные пользователей:
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">3.1. Данные, предоставляемые пользователем:</h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                              <li>фамилия, имя, отчество;</li>
                              <li>номер телефона;</li>
                              <li>адрес электронной почты;</li>
                              <li>сведения о компании и должности;</li>
                              <li>текст сообщения;</li>
                              <li>иные сведения, предоставленные пользователем добровольно.</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">3.2. Данные, собираемые автоматически:</h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                              <li>IP-адрес;</li>
                              <li>данные файлов cookies;</li>
                              <li>сведения о браузере и устройстве пользователя;</li>
                              <li>сведения о местоположении (геолокация в обобщённом виде);</li>
                              <li>информация о действиях пользователя на Сайте.</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-3">
                          Оператор не осуществляет обработку специальных категорий персональных данных без законных оснований.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">4. Цели обработки персональных данных</h2>
                        <p className="text-muted-foreground mb-2">
                          Персональные данные пользователей обрабатываются Оператором в целях:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>обработки запросов и обращений пользователей;</li>
                          <li>предоставления информации о деятельности, товарах и услугах Оператора;</li>
                          <li>заключения и исполнения договоров;</li>
                          <li>улучшения качества работы Сайта;</li>
                          <li>обеспечения безопасности и предотвращения мошенничества;</li>
                          <li>выполнения требований законодательства Российской Федерации;</li>
                          <li>направления информационных и рекламных материалов при наличии согласия пользователя.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">5. Правовые основания обработки персональных данных</h2>
                        <p className="text-muted-foreground mb-2">
                          Оператор обрабатывает персональные данные на основании:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>согласия субъекта персональных данных;</li>
                          <li>необходимости исполнения договора;</li>
                          <li>требований законодательства Российской Федерации;</li>
                          <li>законных интересов Оператора.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">6. Условия обработки персональных данных</h2>
                        <div className="space-y-2 text-muted-foreground">
                          <p><strong className="text-foreground">6.1.</strong> Обработка персональных данных осуществляется с использованием средств автоматизации и без их использования.</p>
                          <p><strong className="text-foreground">6.2.</strong> Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения и иных неправомерных действий.</p>
                          <p><strong className="text-foreground">6.3.</strong> Персональные данные обрабатываются и хранятся в течение срока, необходимого для достижения целей обработки, либо в течение срока, установленного законодательством Российской Федерации.</p>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">7. Передача персональных данных третьим лицам</h2>
                        <div className="space-y-2 text-muted-foreground">
                          <p><strong className="text-foreground">7.1.</strong> Оператор вправе передавать персональные данные третьим лицам в следующих случаях:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>при наличии согласия пользователя;</li>
                            <li>если передача необходима для исполнения договора;</li>
                            <li>если передача предусмотрена законодательством Российской Федерации;</li>
                            <li>при привлечении подрядчиков и сервисов, обеспечивающих функционирование Сайта (хостинг, аналитические сервисы, CRM-системы, средства коммуникации и иные).</li>
                          </ul>
                          <p className="mt-2"><strong className="text-foreground">7.2.</strong> Оператор обеспечивает соблюдение конфиденциальности персональных данных третьими лицами.</p>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">8. Трансграничная передача персональных данных</h2>
                        <p className="text-muted-foreground">
                          Оператор вправе осуществлять трансграничную передачу персональных данных при условии соблюдения требований законодательства Российской Федерации и законодательства иных государств, включая положения Общего регламента по защите данных (GDPR), при наличии законных оснований и согласия пользователя.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">9. Использование файлов cookies</h2>
                        <div className="space-y-2 text-muted-foreground">
                          <p><strong className="text-foreground">9.1.</strong> Сайт использует файлы cookies и аналогичные технологии для обеспечения корректной работы Сайта, анализа пользовательской активности и улучшения качества предоставляемых услуг.</p>
                          <p><strong className="text-foreground">9.2.</strong> Пользователь вправе изменить настройки использования cookies в настройках браузера.</p>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">10. Права субъекта персональных данных</h2>
                        <p className="text-muted-foreground mb-2">
                          Пользователь имеет право:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>получать информацию об обработке его персональных данных;</li>
                          <li>требовать уточнения, блокирования или уничтожения персональных данных;</li>
                          <li>отозвать согласие на обработку персональных данных;</li>
                          <li>обжаловать действия Оператора в уполномоченные органы или в судебном порядке.</li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                          Запросы направляются по адресу электронной почты: info@foodtech.su.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-xl font-bold mb-3">11. Заключительные положения</h2>
                        <div className="space-y-2 text-muted-foreground">
                          <p><strong className="text-foreground">11.1.</strong> Оператор вправе вносить изменения в настоящую Политику конфиденциальности в одностороннем порядке.</p>
                          <p><strong className="text-foreground">11.2.</strong> Актуальная редакция Политики конфиденциальности размещается на Сайте и вступает в силу с момента публикации.</p>
                        </div>
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

export default PrivacyPolicy;

