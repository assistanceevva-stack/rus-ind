import { useEffect, useState } from "react";

const OfflineHandler = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Проверка при загрузке
    if (!navigator.onLine) {
      setIsOffline(true);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="/404русиндус.png"
              alt="Нет подключения к интернету"
              className="w-full max-w-md mx-auto mb-8"
            />
            <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-foreground">
              Нет подключения к интернету
            </h1>
            <p className="mb-6 text-xl text-muted-foreground">
              Проверьте подключение к интернету и попробуйте обновить страницу.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-lime transition-all duration-300 font-medium"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default OfflineHandler;

