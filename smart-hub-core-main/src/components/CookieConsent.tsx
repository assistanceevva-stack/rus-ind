import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Показываем баннер через небольшую задержку для лучшего UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="h-5 w-5 text-lime" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Мы используем cookies для улучшения работы сайта и анализа трафика. 
                  Продолжая использовать сайт, вы соглашаетесь на{" "}
                  <a 
                    href="/personal-data-consent" 
                    className="text-lime hover:text-lime/80 underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    обработку персональных данных
                  </a>
                  {" "}и{" "}
                  <a 
                    href="/cookie-policy" 
                    className="text-lime hover:text-lime/80 underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    политику использования cookies
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                onClick={handleAccept}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-lime transition-all duration-300"
              >
                Я согласен
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

