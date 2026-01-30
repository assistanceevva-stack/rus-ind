import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Layers3, Zap, TrendingUp, Shield, Network, CheckCircle2, Factory, Package, BarChart3, Target, Building2, ArrowRight, Database, Link2, Award } from "lucide-react";

const MesWmsIntegration = () => {
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-sm font-medium mb-6">
                  <Layers3 className="h-4 w-4" />
                  Интеграция с MES/WMS
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Единый цифровой контур <span className="text-lime">производства и логистики</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Интеграция с системами MES и WMS объединяет производство и склад в единую управляемую экосистему
                </p>
              </div>
            </div>
          </section>

          {/* Описание */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8">
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    Интеграция с системами MES и WMS объединяет производство и склад в единую управляемую экосистему.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    Она обеспечивает непрерывный обмен данными между цехами, складом и бизнес-системами, создавая прозрачную, предсказуемую и эффективную модель управления предприятием.
                  </p>
                  <p className="text-foreground leading-relaxed text-base font-medium">
                    Это не просто интеграция систем — это переход от разрозненных процессов к единому цифровому управлению производством и логистикой.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Что дает интеграция MES/WMS бизнесу */}
          <section className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                  Что дает интеграция <span className="text-lime">MES/WMS</span> бизнесу
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      number: "1",
                      icon: Shield,
                      title: "Полный контроль над производством и складом",
                      items: [
                        "Единые данные о сырье, полуфабрикатах и готовой продукции",
                        "Контроль движения материалов на всех этапах",
                        "Актуальная информация в режиме реального времени"
                      ]
                    },
                    {
                      number: "2",
                      icon: TrendingUp,
                      title: "Рост эффективности производства",
                      items: [
                        "Снижение потерь сырья и перерасхода",
                        "Сокращение простоев и ручных операций",
                        "Ускорение производственных и складских процессов"
                      ]
                    },
                    {
                      number: "3",
                      icon: Target,
                      title: "Управляемость цепочки создания продукта",
                      items: [
                        "Прослеживаемость партий и технологических операций",
                        "Контроль качества и соответствия стандартам",
                        "Прозрачность всей цепочки от сырья до отгрузки"
                      ]
                    },
                    {
                      number: "4",
                      icon: Zap,
                      title: "Основа для цифровой трансформации",
                      items: [
                        "Единый источник данных для ERP, BI и аналитики",
                        "Автоматизация бизнес-процессов",
                        "Готовность к масштабированию и росту"
                      ]
                    }
                  ].map((benefit, idx) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 hover:border-lime/50 transition-all"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-lime">{benefit.number}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className="h-6 w-6 text-lime" />
                              <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {benefit.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Как работает интеграция MES/WMS */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                  Как работает интеграция <span className="text-lime">MES/WMS</span>
                </h2>
                
                <div className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8 mb-6">
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">
                    Интеграция обеспечивает двусторонний обмен данными между производством и складом:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <Factory className="h-6 w-6 text-lime" />
                        <h3 className="text-lg font-bold text-foreground">Со стороны MES:</h3>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Производственные задания и планы",
                          "Фактический выпуск продукции",
                          "Потребление сырья и статус операций"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <Package className="h-6 w-6 text-lime" />
                        <h3 className="text-lg font-bold text-foreground">Со стороны WMS:</h3>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Складские остатки и размещение",
                          "Движение партий и сроков годности",
                          "Операции приемки, хранения и отгрузки"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl backdrop-blur-xl bg-primary/10 border border-lime/20 p-5">
                  <p className="text-foreground leading-relaxed text-base">
                    В результате предприятие получает единый поток данных, на основе которого принимаются точные управленческие решения.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ключевые возможности интеграции */}
          <section className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                  Ключевые возможности <span className="text-lime">интеграции</span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Синхронизация данных о сырье, полуфабрикатах и готовой продукции",
                    "Автоматизация передачи данных между цехами и складом",
                    "Контроль партий, серий и сроков годности",
                    "Поддержка принципов FIFO / FEFO",
                    "Формирование единой отчетности и аналитики",
                    "Интеграция с ERP, BI и другими корпоративными системами",
                    "Масштабируемая архитектура и API"
                  ].map((capability, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl p-4 hover:border-lime/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{capability}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Ценность для производственных компаний */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                  Ценность для <span className="text-lime">производственных компаний</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Экономика",
                      items: [
                        "Снижение операционных затрат",
                        "Уменьшение потерь и списаний",
                        "Повышение точности планирования"
                      ]
                    },
                    {
                      icon: Factory,
                      title: "Производство",
                      items: [
                        "Повышение производительности цехов",
                        "Контроль технологических процессов",
                        "Снижение человеческого фактора"
                      ]
                    },
                    {
                      icon: BarChart3,
                      title: "Управление",
                      items: [
                        "Прозрачные KPI производства и логистики",
                        "Быстрые управленческие решения",
                        "Стратегическое управление ресурсами"
                      ]
                    }
                  ].map((value, idx) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 hover:border-lime/50 transition-all"
                      >
                        <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center mb-4">
                          <Icon className="h-7 w-7 text-lime" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                        <ul className="space-y-2">
                          {value.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Для каких предприятий подходит */}
          <section className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                  Для каких <span className="text-lime">предприятий</span> подходит
                </h2>
                
                <div className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8">
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">
                    Интеграция MES/WMS особенно эффективна для:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Пищевой промышленности",
                      "Производственных предприятий",
                      "Логистических центров и складов",
                      "Компаний с высоким оборотом продукции",
                      "Предприятий с требованиями к прослеживаемости и качеству"
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4"
                      >
                        <Building2 className="h-5 w-5 text-lime flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Итоговая идея */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl backdrop-blur-xl bg-primary/10 border border-lime/20 shadow-2xl shadow-black/20 p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-lime flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Итоговая идея:</h3>
                      <p className="text-foreground leading-relaxed text-lg">
                        <strong className="text-lime">Интеграция с MES/WMS</strong> — это фундамент цифрового производства.
                      </p>
                      <p className="text-foreground leading-relaxed text-lg mt-4">
                        Она превращает разрозненные процессы в единую систему управления, повышает эффективность бизнеса и создает устойчивую основу для роста.
                      </p>
                    </div>
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

export default MesWmsIntegration;

