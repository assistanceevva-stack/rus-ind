import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, CheckCircle2, ArrowRight, Shield, Zap, Award, Settings, Wrench, RotateCcw, Monitor, Network, Package, Cpu, Printer, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import weightPrincipleImage from "@/assets/весовойбезфона.png";
import weightConstructionImage from "@/assets/Конструкция оборудованиябезфона.png";
import weightComponentsImage from "@/assets/Компонентная база.png";
import weightFeaturesImage from "@/assets/Уникальные особенности.png";
import weightDrawingImage from "@/assets/Чертежоборудования.png";
import rekImage from "@/assets/РЭК.png";
import pvImage from "@/assets/ПВ.png";

const WeightLines = () => {

  const components = [
    "Влагозащитная платформа",
    "Блок управления",
    "Весовая платформа",
    "Принтер этикеток",
    "Аппликатор"
  ];

  const additionalOptions = [
    "Возможность установки итогового принтера",
    "Беспроводная связь с сервером (Wi-Fi)",
    "Повышенная пыле и влагозащита",
    "Подключение сканера",
    "Удаленный сервис",
    "Направляющие упаковок",
    "Отводящий рольганг"
  ];

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
        <main className="pt-20 lg:pt-24">
        {/* Hero Section with Glassmorphism */}
        <section className="py-10 lg:py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-industrial-darker/40 to-background" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, hsl(var(--grid-line)) 25%, hsl(var(--grid-line)) 26%, transparent 27%, transparent 74%, hsl(var(--grid-line)) 75%, hsl(var(--grid-line)) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--grid-line)) 25%, hsl(var(--grid-line)) 26%, transparent 27%, transparent 74%, hsl(var(--grid-line)) 75%, hsl(var(--grid-line)) 76%, transparent 77%, transparent)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-xl border border-lime/20 text-lime text-sm font-medium mb-6 shadow-glow-lime">
                <Scale className="h-4 w-4" />
                Весовые линии
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Автоматическое весоизмерительное<br />
                <span className="text-lime">оборудование</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Российское оборудование для измерения массы, сортировки и маркировки фасованных товаров
              </p>
            </div>
          </div>
        </section>

        {/* Описание и Принцип действия - Большое изображение */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                    <Scale className="h-7 w-7 text-lime" />
                    Описание оборудования
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Устройство автоматическое весоизмерительное <strong className="text-foreground">ЦЕТЖ-2402-ЧВ</strong> (далее по тексту – Оборудование) 
                    предназначено для измерения массы, сортировки и маркировки фасованных товаров.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Принцип действия Оборудования основан на преобразовании деформации тензорезисторного датчика в аналоговый 
                    электрический сигнал и преобразовании его в цифровой вид с помощью аналого-цифрового преобразователя. 
                    Преобразованный сигнал обрабатывается компьютерным терминалом и значение массы груза индицируется на 
                    цифровом дисплее терминала.
                  </p>
                </div>
              </div>

              {/* Большое фото для принципа действия */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-center">Принцип действия оборудования</h3>
                  <div className="rounded-xl border border-white/20 bg-muted/30 p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={weightPrincipleImage}
                      alt="Принцип действия весового оборудования"
                      className="max-w-full h-auto max-h-[500px] object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Объединенная секция: Конструкция, Компонентная база, Уникальные особенности */}
        <section className="py-10 lg:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Конструкция */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-lime" />
                      Конструкция
                    </h3>
                    <div className="rounded-lg border border-white/20 bg-muted/30 p-3 mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={weightConstructionImage}
                        alt="Конструкция весового оборудования"
                        className="max-w-full h-auto max-h-[200px] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Единая конструктивная основа с грузоприемным устройством, платформа-конвейер с электроприводом. 
                      Быстросъемные конвейеры с серводвигателями.
                    </p>
                  </div>
                </div>

                {/* Компонентная база */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-lime" />
                      Компонентная база
                    </h3>
                    <div className="rounded-lg border border-white/20 bg-muted/30 p-3 mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={weightComponentsImage}
                        alt="Компонентная база весового оборудования"
                        className="max-w-full h-auto max-h-[200px] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Открытая компонентная база позволяет без труда найти запасные части. Действующее производство 
                      и постоянный запас комплектующих на складе.
                    </p>
                  </div>
                </div>

                {/* Уникальные особенности */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <RotateCcw className="h-5 w-5 text-lime" />
                      Уникальные особенности
                    </h3>
                    <div className="rounded-lg border border-white/20 bg-muted/30 p-3 mb-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={weightFeaturesImage}
                        alt="Уникальные особенности весового оборудования"
                        className="max-w-full h-auto max-h-[200px] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Устройства взаимозаменяемые и могут использоваться по отдельности. Возможность оснащения 
                      автоматическим или ручным суммирующим устройством.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Состав, Дополнительные опции и Чертеж - Объединенная секция */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Состав оборудования */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Package className="h-6 w-6 text-lime" />
                      Состоит из
                    </h2>
                    <ul className="space-y-2">
                      {components.map((component, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Дополнительные опции */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Zap className="h-6 w-6 text-lime" />
                      Дополнительные опции
                    </h2>
                    <ul className="space-y-2">
                      {additionalOptions.map((option, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Чертеж */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-4 text-center">Чертеж оборудования</h3>
                    <div className="rounded-lg border border-white/20 bg-muted/30 p-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={weightDrawingImage}
                        alt="Чертеж весового оборудования"
                        className="max-w-full h-auto max-h-[300px] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* РЭК и ПВ под чертежом */}
              <div className="mt-6 relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-3">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-2 items-start">
                    {/* Ручной весовой этикетировочный комплекс (РЭК) */}
                    <div className="flex flex-col h-full">
                      <div className="mb-2 min-h-[60px]">
                        <h2 className="text-lg font-bold mb-1">РУЧНОЙ ВЕСОВОЙ ЭТИКЕТИРОВОЧНЫЙ КОМПЛЕКС (РЭК)</h2>
                        <p className="text-lime font-semibold text-xs">(РОССИЯ)</p>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-muted/30 flex items-center justify-center overflow-hidden flex-1" style={{ padding: '0.8cm 1cm' }}>
                        <img
                          src={rekImage}
                          alt="Ручной весовой этикетировочный комплекс (РЭК)"
                          className="max-w-full h-auto max-h-[300px] object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Промышленные весы (ПВ) */}
                    <div className="flex flex-col h-full">
                      <div className="mb-2 min-h-[60px]">
                        <h2 className="text-lg font-bold mb-1">ПРОМЫШЛЕННЫЕ ВЕСЫ (ПВ)</h2>
                        <p className="text-lime font-semibold text-xs">№ в госреестре 93981-24</p>
                        <p className="text-lime font-semibold text-xs">(РОССИЯ)</p>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-muted/30 flex items-center justify-center overflow-hidden flex-1" style={{ padding: '0.8cm 1cm' }}>
                        <img
                          src={pvImage}
                          alt="Промышленные весы (ПВ)"
                          className="max-w-full h-auto max-h-[300px] object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Готовы внедрить весовые линии на вашем производстве?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами для получения подробной информации, технических характеристик и коммерческого предложения
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/equipment#equipment">
                    <Button variant="outline" className="w-full sm:w-auto hover:border-lime">
                      Вернуться к каталогу
                    </Button>
                  </Link>
                  <Link to="/#contact">
                    <Button className="w-full sm:w-auto">
                      Связаться с нами
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default WeightLines;
