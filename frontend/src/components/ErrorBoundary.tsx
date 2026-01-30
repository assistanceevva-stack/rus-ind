import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <img
                src="/404русиндус.png"
                alt="Ошибка загрузки"
                className="w-full max-w-md mx-auto mb-8"
              />
              <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-foreground">
                Произошла ошибка
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                К сожалению, произошла ошибка при загрузке страницы. Пожалуйста, попробуйте обновить страницу.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-lime transition-all duration-300 font-medium mb-4"
              >
                Обновить страницу
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 font-medium ml-4"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

