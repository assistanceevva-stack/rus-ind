import heroEquipment from "@/assets/hero-equipment.jpg";
import { BadgeCheck, Boxes, Layers3, Scale, ScanLine, CheckCircle2, Zap, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const equipment = [
  {
    icon: Scale,
    title: "Весовые линии",
    description: "Автоматическое взвешивание сырья и готовой продукции с записью в MES.",
    features: ["Приёмка сырья", "Контроль веса в цехах", "Передача данных в систему"],
    route: "/equipment/weight-lines",
  },
  {
    icon: ScanLine,
    title: "Маркировочные станции",
    description: "Автоматическая маркировка продукции с весовым контролем, печатью этикеток и валидацией кодов «Честный знак».",
    features: ["До 100 уп./мин", "DataMatrix/QR", "Валидация кодов"],
    route: "/equipment/marking-stations",
    details: {
      overview: "Комплексная система маркировки ЦЕТЖ-2402 ЧВПА-6-ПРО для автоматической печати и наклейки этикеток с кодами маркировки. Включает весовой контроль (Чеквейер ЧВ-6-ПРО), принтер-аппликатор (ПА-6-ПРО), аппликатор рекламной этикетки и систему валидации кодов «Честный знак» на конвейерной базе. Полностью интегрируется с MES/WMS-системами через Ethernet и XML-команды.",
      capabilities: [
        "Автоматическое взвешивание и маркировка до 100 упаковок в минуту (до 70 уп./мин для продукции до 1,5 кг, до 50 уп./мин для продукции более 2,5 кг)",
        "Печать этикеток шириной до 104 мм с разрешением 300 dpi (DataMatrix, QR, штрихкоды)",
        "Валидация и верификация кодов «Честный знак» на конвейерной базе с автоматической отбраковкой в корзину",
        "Работа с этикетками любых размеров и произвольного формата (положение и размер всех полей программируется)",
        "Интеграция через Ethernet (TCP/IP) и XML-команды для связи с MES/WMS, прямая работа с БД через ODBC",
        "Поддержка русского, казахского, китайского, арабского шрифтов",
        "Сенсорный цветной дисплей 15,6\" (1920x1080) с интуитивным интерфейсом управления",
        "Возможность установки итогового принтера, беспроводная связь Wi-Fi, удаленный сервис"
      ],
      benefits: [
        "Полное соответствие требованиям системы «Честный знак» с автоматической валидацией кодов",
        "Автоматизация процессов маркировки и упаковки с минимальным участием оператора",
        "Высокая производительность до 100 уп./мин с точным весовым контролем",
        "Пищевая нержавеющая сталь AISI 304, защита IP65, устойчивость к ежедневной мойке щелочами и химией",
        "Отечественная разработка с бесплатными обновлениями ПО и квалифицированной поддержкой",
        "Удаленное управление системой, передача данных на оборудование и получение информации",
        "Антивандальная станина, простота заправки расходных материалов, удобный доступ к термоголовке"
      ],
      technical: [
        "Чеквейер ЧВ-6-ПРО: размеры 1400×870×1700 мм, весовой диапазон 0,1-6 кг, точность 0,002 кг (e=0,002 кг), класс III по ГОСТ OIML R76-1-2011, платформа 700×400 мм, 4 тензодатчика",
        "Принтер-аппликатор ПА-6-ПРО: размеры 900×740×1840 мм, термо/термотрансферная печать, разрешение 300 dpi, скорость печати 350 мм/сек, ширина печати 104 мм, аппликатор выдувной 140×120 мм, производительность до 120 уп./мин",
        "Система валидации «Честный знак»: камера технического зрения HIK ROBOT, конвейер 900×400 мм, автоматическая отбраковка невалидных кодов в корзину",
        "Базовое ПО: FRONT (САП СУПРИМ - создание этикеток) и BACK (отчеты, автоматическое резервное копирование ежедневное/еженедельное/ежемесячное)",
        "Интеграция: Ethernet (TCP/IP), RS232, RS485, USB Host, RTC, поддержка ODBC для прямой работы с базами данных",
        "Дополнительные опции: итоговый принтер, Wi-Fi, повышенная пыле- и влагозащита, сканер, направляющие упаковок, отводящий рольганг"
      ]
    }
  },
  {
    icon: Layers3,
    title: "Интеграция с MES/WMS",
    description: "Связка оборудования с программными продуктами для полной прослеживаемости.",
    features: ["MES FOODTECH", "WMS FOODTECH", "Экспорт в ERP"],
    route: "/equipment/mes-wms-integration",
  },
  {
    icon: Boxes,
    title: "Линии упаковки",
    description: "Контроль комплектации, упаковки и подготовки к складу или отгрузке.",
    features: ["Контроль комплектности", "Сканирование партии", "Передача на склад"],
    route: "/equipment/packaging-lines",
  },
];

const EquipmentCatalog = () => {
  return (
    <section id="equipment" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-industrial-darker/40 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BadgeCheck size={16} />
              Каталог оборудования
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Оборудование для цифровых пищевых производств
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Всё, что нужно для контроля сырья, выпуска и отгрузки: весовое и маркировочное оборудование,
              связанное с отечественными MES/WMS-системами.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {equipment.map((item, index) => {
                const Icon = item.icon;
                const hasDetails = 'details' in item;
                const hasRoute = 'route' in item;
                
                const topSection = (
                  <>
                    {hasRoute ? (
                      <Link to={item.route} className="block">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="text-lime" size={22} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-lime transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="text-lime" size={22} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{(item as typeof equipment[number]).title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{(item as typeof equipment[number]).description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(item as typeof equipment[number]).features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs text-primary bg-primary/10 rounded-full px-3 py-1"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
                
                return (
                  <div
                    key={item.title}
                    className={`group bg-card border border-border rounded-xl p-5 hover:border-lime/50 hover:shadow-card transition-all relative overflow-hidden ${hasDetails ? 'sm:col-span-2' : ''}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Логотип при наведении */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-10">
                      <img
                        src="/rus-logo3.png"
                        alt="RUS Industry"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    
                    {topSection}
                    
                    {hasDetails && item.details && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm text-foreground mb-4">{item.details.overview}</p>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="capabilities" className="border-none">
                            <AccordionTrigger 
                              className="text-sm font-medium text-foreground py-2 hover:no-underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center gap-2">
                                <Zap className="h-4 w-4 text-lime" />
                                Возможности
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 mt-2">
                                {item.details.capabilities.map((cap, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                                    <span>{cap}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="benefits" className="border-none">
                            <AccordionTrigger 
                              className="text-sm font-medium text-foreground py-2 hover:no-underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-lime" />
                                Преимущества
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 mt-2">
                                {item.details.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="technical" className="border-none">
                            <AccordionTrigger 
                              className="text-sm font-medium text-foreground py-2 hover:no-underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center gap-2">
                                <BadgeCheck className="h-4 w-4 text-lime" />
                                Технические характеристики
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 mt-2">
                                {item.details.technical.map((tech, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                                    <span>{tech}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={heroEquipment}
                alt="Промышленное оборудование"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-lime/40 rounded-xl px-4 py-3 shadow-glow-lime">
              <div className="text-xs text-muted-foreground">Связка</div>
              <div className="text-sm font-semibold text-foreground">Оборудование + MES/WMS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCatalog;


