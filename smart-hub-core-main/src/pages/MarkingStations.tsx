import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScanLine, CheckCircle2, ArrowRight, Shield, Zap, Award, Settings, Wrench, RotateCcw, X, Monitor, Network, Package, Cpu, Printer, Layers, Wifi, Database, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import markiratorImage from "@/assets/без фона1.png";
import assemblyImage1 from "@/assets/сборка1фон.png";
import assemblyImage2 from "@/assets/сборка2фон.png";
import assemblyImage3 from "@/assets/сборка3фон.png";
import kchauImage from "@/assets/кчау.jpeg";

const MarkingStations = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const features = [
    {
      icon: Award,
      title: "Отечественное производство",
      description: "Российское оборудование с номером в госреестре 95028-25. Полное соответствие российским стандартам качества."
    },
    {
      icon: Zap,
      title: "Высокая скорость",
      description: "Скорость печати до 350 мм/сек. Быстросъемные конвейеры с серводвигателями для максимальной производительности."
    },
    {
      icon: Shield,
      title: "Надежность и доступность",
      description: "Открытая компонентная база позволяет легко найти запасные части. Действующее производство и постоянный запас комплектующих на складе."
    },
    {
      icon: Settings,
      title: "Гибкая конфигурация",
      description: "Устройства взаимозаменяемые и могут использоваться по отдельности. Возможность оснащения автоматическим или ручным суммирующим устройством."
    }
  ];

  const advantages = [
    "Полное соответствие российским стандартам и требованиям",
    "Открытая компонентная база для легкого обслуживания",
    "Быстрая поставка запчастей благодаря действующему производству",
    "Взаимозаменяемые устройства для гибкой конфигурации",
    "Высокая производительность и точность измерений",
    "Устойчивость к вибрациям и промышленным условиям",
    "Простота мойки и обслуживания",
    "Возможность расширения функционала"
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
        {/* Hero Section */}
        <section className="py-12 lg:py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-industrial-darker/40 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-lime text-sm font-medium mb-6">
                <ScanLine className="h-4 w-4" />
                Маркировочные станции
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Автоматическое весовое устройство<br />
                <span className="text-lime">ЦЕТЖ-2402-ЧВПА</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Российское оборудование для измерения массы, сортировки и маркировки фасованных товаров
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border mb-8">
                <Award className="h-5 w-5 text-lime" />
                <span className="text-sm font-medium">Номер в госреестре: 95028-25</span>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden p-6 lg:p-8 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <img
                    src={markiratorImage}
                    alt="Автоматическое весовое устройство ЦЕТЖ-2402-ЧВПА"
                    className="relative max-w-full h-auto max-h-[500px] object-contain mx-auto drop-shadow-2xl z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Описание и Технические характеристики - Объединенная секция */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Левая колонка - Описание */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Описание оборудования</CardTitle>
                    <CardDescription>Устройство автоматическое весоизмерительное ЦЕТЖ-2402-ЧВ</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Оборудование предназначено для измерения массы, сортировки и маркировки фасованных товаров. 
                      Принцип действия основан на преобразовании деформации тензорезисторного датчика в аналоговый 
                      электрический сигнал и преобразовании его в цифровой вид с помощью аналого-цифрового преобразователя.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Оборудование выполнено на единой конструктивной основе и состоит из грузоприемного устройства, 
                      платформа которого выполнена в виде конвейера с электроприводом и терминала, закрепленного на стойке 
                      или на корпусе Оборудования. Быстросъемные конвейеры приводятся в движение с помощью серводвигателей.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <RotateCcw className="h-5 w-5 text-lime" />
                        Уникальные особенности
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span><strong className="text-foreground">Блок принтера</strong> — влагозащитный корпус, поворот на 360°, регулировка по высоте с электроприводом</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span><strong className="text-foreground">Открытая компонентная база</strong> — легко найти запасные части, быстрая поставка</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span><strong className="text-foreground">Монолитная конвейерная база</strong> — устойчива к вибрациям, легкая мойка</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span><strong className="text-foreground">Взаимозаменяемые устройства</strong> — могут использоваться по отдельности</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Правая колонка - Технические характеристики */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Settings className="h-6 w-6 text-lime" />
                      Технические характеристики
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Основные характеристики</h3>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Автоматическое весоизмерительное устройство ЦЕТЖ-2402-ЧВПА</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Номер в госреестре: 95028-25</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Тензорезисторные датчики с АЦП</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <h3 className="font-semibold text-sm mb-2">Конструктивные особенности</h3>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Единая конструктивная основа с грузоприемным устройством</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Платформа-конвейер с электроприводом</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Быстросъемные конвейеры с серводвигателями</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <h3 className="font-semibold text-sm mb-2">Блок принтера</h3>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Влагозащитный корпус, поворот на 360°</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Скорость печати: 350 мм/сек</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Защитная прозрачная крышка</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <h3 className="font-semibold text-sm mb-2">Конвейерная база</h3>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Монолитная конструкция, устойчивая к вибрациям</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Виброгасящие опоры</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span>Круглая форма рамы, легкая мойка</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества и Особенности - Объединенная секция */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ключевые преимущества</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-border hover:border-lime/50 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="text-lime" size={20} />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-3 hover:border-lime/50 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Программное обеспечение, Область применения, Управление - Объединенная секция */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-lime text-sm font-medium mb-4">
                  <Monitor className="h-4 w-4" />
                  Программное обеспечение и управление
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Программный модуль САП СУПРИМ
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Printer className="h-5 w-5 text-lime" />
                      Создание этикеток
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Создание и редактирование макетов этикеток, включая текст, изображения, штрихкоды, логотипы и другие элементы.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Scale className="h-5 w-5 text-lime" />
                      Расчет веса
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Автоматическое считывание веса товаров с весового оборудования и составление этикеток с информацией о товаре.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Network className="h-5 w-5 text-lime" />
                      Удаленное управление
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Обмен XML-командами, прямая работа с БД через ODBC. Индивидуальная поддержка и доработка под ваши требования.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Package className="h-5 w-5 text-lime" />
                      Область применения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Пищевые производства</strong> — автоматизация маркировки и упаковки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Фасовочные участки гипермаркетов</strong> — быстрая маркировка товаров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Распределительные центры</strong> — обработка больших объемов</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Monitor className="h-5 w-5 text-lime" />
                      Удобство управления
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Оборудование оснащено <strong className="text-foreground">сенсорным дисплеем</strong> для удобства работы оператора. 
                      Интуитивный интерфейс делает управление простым и понятным.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                        <Shield className="h-5 w-5 text-lime mx-auto mb-1" />
                        <p className="text-xs font-semibold">Автономная работа</p>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                        <Zap className="h-5 w-5 text-lime mx-auto mb-1" />
                        <p className="text-xs font-semibold">Бесплатные обновления</p>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                        <Settings className="h-5 w-5 text-lime mx-auto mb-1" />
                        <p className="text-xs font-semibold">Индивидуальная настройка</p>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                        <Award className="h-5 w-5 text-lime mx-auto mb-1" />
                        <p className="text-xs font-semibold">Отечественная разработка</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Основные особенности и Состав оборудования - Объединенная секция */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Основные особенности и состав</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Zap, title: "Скорость до 100 упаковок/мин", desc: "Высокая производительность", hasImage: true },
                  { icon: Scale, title: "Весовые платформы", desc: "НПВ=3/6/30/60 кг" },
                  { icon: Printer, title: "Гибкая печать этикеток", desc: "Любые размеры, произвольный формат" },
                  { icon: Monitor, title: "Удобное управление", desc: "Сенсорный экран, передняя панель" },
                  { icon: Network, title: "Интерфейс Ethernet", desc: "TCP-IP, быстрая интеграция" },
                  { icon: ScanLine, title: "Печать штрихкодов", desc: "Datamatrix, QR-Code и другие" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  const hasImage = item.hasImage;
                  return (
                    <Card key={index} className={`border-border hover:border-lime/50 transition-all duration-300 relative overflow-hidden ${hasImage ? 'group' : ''}`}>
                      {hasImage && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                          <img
                            src={kchauImage}
                            alt="Скорость до 100 упаковок/мин"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-3 relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-lime" />
                        </div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: Shield, title: "Влагозащитная платформа", desc: "Защита от влаги и агрессивных сред" },
                  { icon: Cpu, title: "Блок управления", desc: "Сенсорный дисплей, контроль процессов" },
                  { icon: Scale, title: "Весовая платформа", desc: "Точное измерение массы" },
                  { icon: Printer, title: "Принтер этикеток", desc: "До 4\", разрешение 300 dpi" },
                  { icon: Layers, title: "Аппликатор", desc: "Автоматическая наклейка этикеток" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="border-border hover:border-lime/50 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                          <Icon className="h-5 w-5 text-lime" />
                        </div>
                        <CardTitle className="text-sm text-center">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground text-center">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Дополнительные опции и Достоинства - Объединенная секция */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Дополнительные опции</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Итоговый принтер",
                        "Wi-Fi связь",
                        "Повышенная защита",
                        "Подключение сканера",
                        "Удаленный сервис",
                        "Направляющие упаковок",
                        "Отводящий рольганг"
                      ].map((option, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-lime" />
                      Дополнительные достоинства
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Антивандальная станина",
                        "Печать до 4\"",
                        "ЖК-дисплей с меню",
                        "Простая заправка",
                        "Удобный доступ к термоголовке",
                        "Многоязычные шрифты"
                      ].map((advantage, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Автоматический сумматор и ЗИП - Компактная секция */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Package className="h-5 w-5 text-lime" />
                      Автоматический сумматор потоков
                    </CardTitle>
                    <CardDescription>Группировка и оптимизация упаковки</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Используется в конце линии для группировки маркированных товаров. Состоит из приводного конвейерного модуля. 
                      Упаковки группируются сортирующей стрелкой с электропневматическим приводом.
                    </p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-lime" />
                        <span className="text-sm font-semibold text-foreground">Скорость: до 100 упаковок в минуту</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg border border-border bg-muted/50 p-6 flex items-center justify-center min-h-[200px]">
                      <p className="text-muted-foreground text-center text-sm">
                        <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        Изображение автоматического сумматора
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-lime" />
                      ЗИП комплект
                    </CardTitle>
                    <CardDescription>Комплект запасных частей и расходных материалов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Лента весового конвейера",
                        "Лента подающего конвейера",
                        "Ремень привода конвейера",
                        "Вал конвейера",
                        "Шестерни натяжки",
                        "Пассивные шестерни",
                        "Термоголовка",
                        "Силиконовый валик",
                        "Шкив привода"
                      ].map((part, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Wrench className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{part}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Комплексные проекты */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Возможны комплексные проекты
                </h2>
                <p className="text-xl text-muted-foreground">
                  Блок схема для линии упаковки
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div 
                  onClick={() => setSelectedImage(assemblyImage1)}
                  className="relative rounded-3xl overflow-hidden p-4 lg:p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 group cursor-pointer transition-all duration-300 hover:scale-[1.25] hover:z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <img
                    src={assemblyImage1}
                    alt="Блок схема для линии упаковки - вариант 1"
                    className="relative w-full h-auto object-contain mx-auto z-10 transition-transform duration-300"
                  />
                </div>
                
                <div 
                  onClick={() => setSelectedImage(assemblyImage2)}
                  className="relative rounded-3xl overflow-hidden p-4 lg:p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 group cursor-pointer transition-all duration-300 hover:scale-[1.25] hover:z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <img
                    src={assemblyImage2}
                    alt="Блок схема для линии упаковки - вариант 2"
                    className="relative w-full h-auto object-contain mx-auto z-10 transition-transform duration-300"
                  />
                </div>
                
                <div 
                  onClick={() => setSelectedImage(assemblyImage3)}
                  className="relative rounded-3xl overflow-hidden p-4 lg:p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 group cursor-pointer transition-all duration-300 hover:scale-[1.25] hover:z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <img
                    src={assemblyImage3}
                    alt="Блок схема для линии упаковки - вариант 3"
                    className="relative w-full h-auto object-contain mx-auto z-10 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-auto p-0 bg-transparent border-none shadow-none [&>button]:hidden">
                  <div className="relative w-full min-h-[80vh] flex items-center justify-center p-8">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 z-50 rounded-full bg-black/70 hover:bg-black/90 text-white p-2 transition-colors shadow-lg"
                      aria-label="Закрыть"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Блок схема для линии упаковки"
                        className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Готовы внедрить маркировочные станции на вашем производстве?
              </h2>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами для получения подробной информации, технических характеристик и коммерческого предложения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/equipment#equipment">
                  <Button variant="outline" className="w-full sm:w-auto">
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
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default MarkingStations;
