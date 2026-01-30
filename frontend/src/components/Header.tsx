import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ContactDialog from "@/components/ContactDialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "О компании", to: "/#about" },
    { label: "Каталог оборудования", to: "/equipment#equipment" },
    { label: "Программное обеспечение", to: "/#software" },
    { label: "Преимущества", to: "/#advantages" },
    { label: "Контакты", to: "/#contact" },
  ];

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-white/10 via-white/8 to-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/10"
          : "bg-gradient-to-r from-white/5 via-white/3 to-white/5 backdrop-blur-lg border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMobile}
              className="flex items-center"
            >
              <img 
                src="/rus-logo-2.2.png" 
                alt="АО «РУС-Индустрия»" 
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ContactDialog
              trigger={
                <Button variant="outline" size="sm">
                  Запрос КП
                </Button>
              }
            />
            <div className="flex items-center gap-2 text-sm">
              <button className="text-primary font-medium">RU</button>
              <span className="text-muted-foreground">/</span>
              <button className="text-muted-foreground hover:text-foreground transition-colors">EN</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white/10 via-white/8 to-white/10 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/10 animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <ContactDialog
              trigger={
                <Button variant="outline" size="sm" className="w-full mt-2" onClick={closeMobile}>
                  Запрос КП
                </Button>
              }
            />
            <div className="flex items-center justify-center gap-2 text-sm mt-2">
              <button className="text-primary font-medium">RU</button>
              <span className="text-muted-foreground">/</span>
              <button className="text-muted-foreground">EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
