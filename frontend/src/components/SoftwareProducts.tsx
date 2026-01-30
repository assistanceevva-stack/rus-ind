import { useState } from "react";
import { FileText, Warehouse, Factory, Tag, X, Shield, Zap, BarChart3, Network, CheckCircle2, Award, Package, TrendingUp, Clock, Database } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const products = [
  {
    icon: FileText,
    name: "СУПРИМ BACK",
    description:
      "Инструмент для настройки отчётов и автоматического резервного копирования данных диспетчера и оператора",
    popupId: "suprem-back",
  },
  {
    icon: Warehouse,
    name: "WMS FOODTECH",
    description: "Учёт и контроль движения готовой продукции",
    popupId: "wms-foodtech",
  },
  {
    icon: Factory,
    name: "MES FOODTECH",
    description: "Управление сырьём и производством в цехах",
    popupId: "mes-foodtech",
  },
  {
    icon: Tag,
    name: "Сервер производителя",
    description: "Управление этикетками и данными о товарах",
    popupId: "server-producer",
  },
];

const SoftwareProducts = () => {
  const [isSupremBackOpen, setIsSupremBackOpen] = useState(false);
  const [isWmsFoodtechOpen, setIsWmsFoodtechOpen] = useState(false);
  const [isMesFoodtechOpen, setIsMesFoodtechOpen] = useState(false);
  const [isServerProducerOpen, setIsServerProducerOpen] = useState(false);

  return (
    <section id="software" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-industrial-darker to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Отечественные решения для <span className="text-primary">цифрового цеха</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Комплексные программные продукты для полной автоматизации пищевого производства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const popupId = product.popupId;
            
            const handleClick = () => {
              if (popupId === "suprem-back") {
                setIsSupremBackOpen(true);
              } else if (popupId === "wms-foodtech") {
                setIsWmsFoodtechOpen(true);
              } else if (popupId === "mes-foodtech") {
                setIsMesFoodtechOpen(true);
              } else if (popupId === "server-producer") {
                setIsServerProducerOpen(true);
              }
            };
            
            if (popupId) {
              return (
                <div
                  key={product.name}
                  onClick={handleClick}
                  className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-lime/50 hover:shadow-glow-lime transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Логотип при наведении */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-10">
                    <img
                      src="/rus-logo3.png"
                      alt="RUS Industry"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-lime" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-lime transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-lime transition-colors">{product.description}</p>
                </div>
              );
            }
            
            return (
              <a
                key={product.name}
                href="#software"
                className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-lime/50 hover:shadow-glow-lime transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-lime" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Popup для СУПРИМ BACK */}
      <Dialog open={isSupremBackOpen} onOpenChange={setIsSupremBackOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-transparent border-none [&>button]:hidden">
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 p-6 lg:p-8 border-b border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-lime" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">Suprem Back</h2>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Программный инструмент для централизованной настройки отчетности и автоматизации процессов резервного копирования
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSupremBackOpen(false)}
                  className="rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition-colors flex-shrink-0"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8 space-y-8">
              {/* Описание */}
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Suprem Back — это программный инструмент для централизованной настройки отчетности и автоматизации процессов 
                  резервного копирования данных в корпоративных системах.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base mt-4">
                  Решение объединяет функции формирования отчетов, мониторинга процессов и управления резервными копиями, 
                  обеспечивая надежность хранения данных и прозрачность IT-процессов.
                </p>
              </div>

              {/* Основные возможности */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-lime" />
                  Основные возможности
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Shield,
                      title: "Автоматизация резервного копирования",
                      desc: "Настройка расписаний, сценариев и политик бэкапа для различных систем и источников данных"
                    },
                    {
                      icon: BarChart3,
                      title: "Гибкая система отчетности",
                      desc: "Формирование технических и аналитических отчетов о состоянии данных, результатах копирования и работе системы"
                    },
                    {
                      icon: Network,
                      title: "Централизованное управление",
                      desc: "Единая панель управления для контроля процессов резервного копирования и отчетности"
                    },
                    {
                      icon: Shield,
                      title: "Безопасность данных",
                      desc: "Поддержка шифрования, контроля доступа и хранения версий резервных копий"
                    },
                    {
                      icon: Network,
                      title: "Масштабируемость и интеграция",
                      desc: "Возможность интеграции с корпоративными системами, базами данных и облачными хранилищами",
                      span: "md:col-span-2"
                    }
                  ].map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className={`rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:border-lime/50 transition-all ${feature.span || ''}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="text-lime" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Преимущества для бизнеса */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="h-6 w-6 text-lime" />
                  Преимущества для бизнеса
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Снижение рисков потери данных и простоев",
                    "Повышение прозрачности IT-процессов",
                    "Сокращение времени на администрирование и контроль",
                    "Повышение надежности и управляемости инфраструктуры"
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Заключение */}
              <div className="rounded-2xl backdrop-blur-xl bg-primary/10 border border-lime/20 p-6">
                <p className="text-foreground leading-relaxed text-base">
                  <strong className="text-lime">Suprem Back</strong> подходит для компаний, которым важно обеспечить стабильную работу IT-систем, 
                  защиту данных и эффективное управление отчетностью.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup для WMS FOODTECH */}
      <Dialog open={isWmsFoodtechOpen} onOpenChange={setIsWmsFoodtechOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-transparent border-none [&>button]:hidden">
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 p-6 lg:p-8 border-b border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Warehouse className="text-lime" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">WMS FOODTECH</h2>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Система управления складской логистикой для учета, контроля и оптимизации движения готовой продукции
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWmsFoodtechOpen(false)}
                  className="rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition-colors flex-shrink-0"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8 space-y-8">
              {/* Описание */}
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  <strong className="text-lime">WMS FOODTECH</strong> — это специализированная система управления складской логистикой, 
                  предназначенная для учета, контроля и оптимизации движения готовой продукции на всех этапах — от выпуска на производстве 
                  до отгрузки потребителю.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base mt-4">
                  Решение обеспечивает полную прозрачность процессов хранения, перемещения и отгрузки продукции, повышая управляемость 
                  складских операций и эффективность логистики.
                </p>
              </div>

              {/* Функциональные возможности */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-lime" />
                  Функциональные возможности
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Package,
                      title: "Управление движением готовой продукции",
                      items: [
                        "учет выпуска, приемки, хранения и отгрузки продукции",
                        "контроль перемещений между складами и зонами хранения",
                        "отслеживание партий, сроков годности и статусов продукции"
                      ]
                    },
                    {
                      icon: Network,
                      title: "Складская автоматизация и контроль процессов",
                      items: [
                        "централизованное управление складскими операциями",
                        "автоматизация процессов приемки, размещения, комплектации и отгрузки",
                        "интеграция с производственными и ERP-системами"
                      ]
                    },
                    {
                      icon: BarChart3,
                      title: "Прослеживаемость и аналитика",
                      items: [
                        "полная трассируемость движения продукции",
                        "формирование отчетов и аналитики в режиме реального времени",
                        "контроль ключевых показателей эффективности складских процессов"
                      ],
                      span: "md:col-span-2"
                    }
                  ].map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className={`rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:border-lime/50 transition-all ${feature.span || ''}`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="text-lime" size={20} />
                          </div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        </div>
                        <ul className="space-y-2 ml-16">
                          {feature.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-lime mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-muted-foreground italic">
                    Современные WMS-системы обеспечивают контроль всех операций склада — от поступления товара до его отправки, 
                    оптимизируя процессы и повышая точность учета.
                  </p>
                </div>
              </div>

              {/* Особенности для пищевой промышленности */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-lime" />
                  Особенности для пищевой промышленности
                </h3>
                <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    <strong className="text-lime">WMS FOODTECH</strong> учитывает специфику работы с готовой пищевой продукцией:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Управление партиями и сроками годности",
                      "Поддержка принципов FIFO / FEFO",
                      "Соблюдение требований безопасности и прослеживаемости",
                      "Контроль качества и условий хранения"
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg backdrop-blur-xl bg-primary/5 border border-lime/10 p-3">
                    <p className="text-xs text-muted-foreground italic">
                      Для пищевой отрасли WMS-решения особенно важны из-за строгих требований к безопасности, прослеживаемости 
                      и контролю качества продукции.
                    </p>
                  </div>
                </div>
              </div>

              {/* Бизнес-эффекты внедрения */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-lime" />
                  Бизнес-эффекты внедрения
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Повышение точности учета и снижение ошибок",
                    "Ускорение складских операций и логистических процессов",
                    "Снижение потерь и рисков списаний",
                    "Повышение прозрачности и управляемости цепочки поставок",
                    "Рост эффективности использования складских ресурсов"
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Заключение */}
              <div className="rounded-2xl backdrop-blur-xl bg-primary/10 border border-lime/20 p-6">
                <p className="text-foreground leading-relaxed text-base">
                  WMS-системы автоматизируют складские процессы и обеспечивают централизованный контроль операций, 
                  что повышает эффективность и снижает операционные затраты.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup для MES FOODTECH */}
      <Dialog open={isMesFoodtechOpen} onOpenChange={setIsMesFoodtechOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-transparent border-none [&>button]:hidden">
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 p-6 lg:p-8 border-b border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Factory className="text-lime" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">MES FOODTECH</h2>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Система управления производственными процессами и учета сырья в цехах
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMesFoodtechOpen(false)}
                  className="rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition-colors flex-shrink-0"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8 space-y-8">
              {/* Описание */}
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  <strong className="text-lime">MES FOODTECH</strong> — это система класса MES для управления производственными процессами 
                  и учета сырья в цехах, обеспечивающая цифровой контроль производства, ресурсов и технологических операций в режиме реального времени.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base mt-4">
                  Решение объединяет данные о сырье, производственных заданиях и технологических этапах, обеспечивая прозрачность 
                  производственного цикла и точность управленческих решений.
                </p>
              </div>

              {/* Функциональные возможности */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-lime" />
                  Функциональные возможности
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Package,
                      title: "Учет сырья",
                      desc: "Учет поступления, расхода и остатков сырья"
                    },
                    {
                      icon: Factory,
                      title: "Управление производством",
                      desc: "Управление производственными заданиями и технологическими маршрутами"
                    },
                    {
                      icon: Shield,
                      title: "Контроль операций",
                      desc: "Контроль выполнения операций на уровне цехов и рабочих центров"
                    },
                    {
                      icon: Database,
                      title: "Отслеживание партий",
                      desc: "Отслеживание партий сырья и готовой продукции"
                    },
                    {
                      icon: BarChart3,
                      title: "Мониторинг и аналитика",
                      desc: "Мониторинг отклонений от норм и планов; формирование производственной аналитики и отчетности"
                    },
                    {
                      icon: Network,
                      title: "Интеграция",
                      desc: "Интеграция с ERP, WMS и оборудованием"
                    }
                  ].map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:border-lime/50 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="text-lime" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Бизнес-эффект */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-lime" />
                  Бизнес-эффект
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Снижение потерь сырья и перерасхода",
                    "Повышение точности планирования и учета",
                    "Ускорение производственных процессов",
                    "Повышение прозрачности и управляемости производства",
                    "Снижение операционных рисков"
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Заключение */}
              <div className="rounded-2xl backdrop-blur-xl bg-primary/10 border border-lime/20 p-6">
                <p className="text-foreground leading-relaxed text-base">
                  <strong className="text-lime">MES FOODTECH</strong> позволяет выстроить единый цифровой контур управления производством 
                  и повысить эффективность использования ресурсов.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup для Сервер производителя */}
      <Dialog open={isServerProducerOpen} onOpenChange={setIsServerProducerOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-transparent border-none [&>button]:hidden">
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 p-6 lg:p-8 border-b border-white/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Tag className="text-lime" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">Сервер производителя</h2>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Централизованная система управления данными о товарах и формированием этикеток
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsServerProducerOpen(false)}
                  className="rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition-colors flex-shrink-0"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8 space-y-8">
              {/* Описание */}
              <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  <strong className="text-lime">Сервер производителя</strong> — это централизованная система управления данными о товарах 
                  и формированием этикеток, обеспечивающая единый источник достоверной информации для производства, маркировки и логистики.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base mt-4">
                  Решение позволяет управлять атрибутами продукции, шаблонами этикеток и правилами маркировки, обеспечивая точность данных 
                  и соответствие требованиям производства и регуляторов.
                </p>
              </div>

              {/* Ключевые функции */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-lime" />
                  Ключевые функции
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Database,
                      title: "Централизованное управление данными",
                      desc: "Централизованное хранение и управление данными о товарах (наименования, состав, характеристики, коды)"
                    },
                    {
                      icon: FileText,
                      title: "Управление шаблонами этикеток",
                      desc: "Управление шаблонами и версиями этикеток"
                    },
                    {
                      icon: Zap,
                      title: "Автоматизация печати",
                      desc: "Автоматизация формирования и печати этикеток"
                    },
                    {
                      icon: Shield,
                      title: "Контроль данных",
                      desc: "Контроль актуальности и согласованности данных"
                    },
                    {
                      icon: Package,
                      title: "Поддержка маркировки",
                      desc: "Поддержка серий, партий и кодов маркировки"
                    },
                    {
                      icon: Network,
                      title: "Интеграция с системами",
                      desc: "Интеграция с MES, WMS, ERP и системами маркировки"
                    }
                  ].map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:border-lime/50 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="text-lime" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Бизнес-эффект */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-lime" />
                  Бизнес-эффект
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Снижение ошибок в маркировке и данных о продукции",
                    "Ускорение подготовки и обновления этикеток",
                    "Единый стандарт данных для всех подразделений",
                    "Повышение прозрачности и управляемости продуктовой информации"
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Заключение */}
              <div className="rounded-2xl backdrop-blur-xl bg-primary/10 border border-lime/20 p-6">
                <p className="text-foreground leading-relaxed text-base">
                  <strong className="text-lime">Сервер производителя</strong> формирует единый цифровой контур управления товарными данными 
                  и маркировкой.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SoftwareProducts;
