import { Shield, Zap, BarChart3, Link2 } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Отечественное ПО",
    description: "Независимость от зарубежных вендоров, соответствие требованиям импортозамещения и полная поддержка на русском языке",
  },
  {
    icon: Zap,
    title: "Автоматизация учёта",
    description: "Полный контроль движения сырья и готовой продукции в режиме реального времени без ручного ввода данных",
  },
  {
    icon: BarChart3,
    title: "Прозрачность производства",
    description: "Онлайн-мониторинг всех этапов производственного процесса с детальной аналитикой и отчётностью",
  },
  {
    icon: Link2,
    title: "Интеграция с ERP: 1С, CSB, INNOVA",
    description: "Бесшовная интеграция с корпоративными системами управления предприятием на всех уровнях",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-industrial-darker"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Почему выбирают <span className="text-primary">нас</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Комбинируем промышленное оборудование и программное обеспечение для максимальной эффективности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative bg-gradient-card border border-border rounded-xl p-8 hover:border-lime/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-lime" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
