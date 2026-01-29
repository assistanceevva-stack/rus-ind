import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building2, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroEquipment from "@/assets/hero-equipment.jpg";
import softwareInterface from "@/assets/software-interface.jpg";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Logo background layer - fixed on scroll */}
        <div 
          className="fixed inset-0 flex items-center justify-center opacity-50 pointer-events-none z-[5]"
          style={{
            backgroundImage: `url(/rus-logo3.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto 60vh'
          }}
        ></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, hsl(var(--grid-line)) 25%, hsl(var(--grid-line)) 26%, transparent 27%, transparent 74%, hsl(var(--grid-line)) 75%, hsl(var(--grid-line)) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--grid-line)) 25%, hsl(var(--grid-line)) 26%, transparent 27%, transparent 74%, hsl(var(--grid-line)) 75%, hsl(var(--grid-line)) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Оборудование и{" "}
              <span className="text-primary">отечественное ПО</span>
              <br />
              для цифровых пищевых производств
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Производим весовое и маркировочное оборудование и внедряем MES/WMS-системы,
              которые берут под контроль сырьё, выпуск и отгрузку продукции на уровне
              всего мясо- или птицеперерабатывающего комбината.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" asChild className="hover:shadow-glow-lime hover:border hover:border-lime/50">
              <Link to="/equipment">Каталог оборудования</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="hover:shadow-glow-lime hover:border-lime">
              <a href="#software">Программное обеспечение</a>
            </Button>
          </div>

            {/* Secondary CTA */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-tech-glow transition-colors group"
            >
              Запросить коммерческое предложение
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-lime/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Award className="text-lime" size={24} />
                  <div>
                    <div className="text-xl font-bold text-foreground">20+ лет</div>
                    <div className="text-xs text-muted-foreground">в отрасли</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-lime/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Building2 className="text-lime" size={24} />
                  <div>
                    <div className="text-sm font-bold text-foreground">Собственное</div>
                    <div className="text-xs text-muted-foreground">производство в РФ</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-lime/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Code2 className="text-lime" size={24} />
                  <div>
                    <div className="text-sm font-bold text-foreground">Отечественное</div>
                    <div className="text-xs text-muted-foreground">ПО MES/WMS/ERP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in lg:-translate-y-6" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Equipment Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
                <img 
                  src={heroEquipment} 
                  alt="Промышленное оборудование для пищевого производства" 
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Software Interface Card */}
              <div className="absolute -bottom-8 -left-8 w-64 md:w-80 rounded-xl overflow-hidden border border-lime/50 shadow-glow-lime bg-card/95 backdrop-blur-sm">
                <img 
                  src={softwareInterface} 
                  alt="Интерфейс MES/WMS системы" 
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gradient-card">
                  <div className="text-xs text-muted-foreground mb-1">Отечественное ПО</div>
                  <div className="text-sm font-semibold text-foreground">MES/WMS системы</div>
                </div>
              </div>

              {/* Data Points */}
              <div className="absolute top-8 -right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-card animate-pulse-glow">
                <div className="text-xs text-muted-foreground">Производительность</div>
                <div className="text-2xl font-bold text-primary">+35%</div>
              </div>

              <div className="absolute bottom-1/3 -right-8 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-card animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <div className="text-xs text-muted-foreground">Точность учёта</div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/honest-mark" className="block">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full uppercase tracking-[0.08em] font-semibold hover:shadow-glow-lime hover:border hover:border-lime/50"
                >
                  Честный знак
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
