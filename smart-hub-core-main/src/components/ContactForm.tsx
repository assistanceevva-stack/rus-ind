import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-darker to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Запросите <span className="text-primary">коммерческое предложение</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения задач вашего предприятия
                и подготовки индивидуального коммерческого предложения.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-lime" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                    <a href="tel:+78001234567" className="text-foreground hover:text-primary transition-colors font-medium">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-lime" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@foodtech.su" className="text-foreground hover:text-primary transition-colors font-medium">
                      info@foodtech.su
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-lime" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                    <div className="text-foreground font-medium">
                      Россия, Москва<br />
                      ул. Промышленная, д. 1
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="bg-gradient-card border border-border rounded-2xl p-6 lg:p-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 focus-visible:border-lime focus-visible:ring-lime/20"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Название компании *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-background/50 focus-visible:border-lime focus-visible:ring-lime/20"
                      placeholder="ООО «Пример»"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 focus-visible:border-lime focus-visible:ring-lime/20"
                      placeholder="ivan@example.ru"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 focus-visible:border-lime focus-visible:ring-lime/20"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Комментарий
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background/50 resize-none focus-visible:border-lime focus-visible:ring-lime/20"
                      placeholder="Расскажите о вашем предприятии и задачах..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full hover:shadow-glow-lime hover:border hover:border-lime/50">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
