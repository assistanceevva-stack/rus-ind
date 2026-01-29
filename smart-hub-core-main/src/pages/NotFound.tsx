import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Фоновое изображение на весь экран с прозрачностью 80% */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(/404русиндус.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          opacity: 0.8
        }}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-foreground">Страница не найдена</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-lime transition-all duration-300 font-medium"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
