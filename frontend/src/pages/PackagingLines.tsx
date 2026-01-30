import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Boxes, Move, Scale, Tag, Shield, Zap, Ruler, Activity, Package, Settings, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PackagingLines = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background logo layer */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url(/rus-logo3.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'auto 60vh',
          opacity: 0.5
        }}
      ></div>

      <div className="relative z-10">
        <Header />
        <main className="pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-industrial-darker/40 to-background" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 text-lime text-sm font-medium mb-6">
                  <Boxes className="h-4 w-4" />
                  Линии упаковки
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-lime">Линии упаковки</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Автоматизированные конвейерные системы для взвешивания, маркировки и упаковки продукции
                </p>
              </div>
            </div>
          </section>

          {/* Конвейер подачи */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center">
                        <Move className="h-6 w-6 text-lime" />
                      </div>
                      <h2 className="text-3xl font-bold">Конвейер подачи</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Ruler className="h-5 w-5 text-lime" />
                            Направляющие платформы
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">Из нержавеющей стали</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Package className="h-5 w-5 text-lime" />
                            Размер платформы
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground font-semibold text-xl">700×400 мм (Д×Ш)</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Move className="h-5 w-5 text-lime" />
                            Лента конвейера
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">На п/у основе с высоким коэффициентом трения</p>
                          <p className="text-muted-foreground text-sm mt-2">Возможно исполнение с двумя лентами</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="h-5 w-5 text-lime" />
                            Корпус
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">IP65, из нержавеющей стали (AISI 304)</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl md:col-span-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Settings className="h-5 w-5 text-lime" />
                            Датчик продукта
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">Оптоволоконный с ресивер/приемником</p>
                          <p className="text-muted-foreground text-sm mt-2">Измерение длины продукта</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Весовой конвейер */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center">
                        <Scale className="h-6 w-6 text-lime" />
                      </div>
                      <h2 className="text-3xl font-bold">Весовой конвейер</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Package className="h-5 w-5 text-lime" />
                            Размер платформы
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground font-semibold text-xl">700×400 мм (Д×Ш)</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Move className="h-5 w-5 text-lime" />
                            Лента конвейера
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">На п/у основе с высоким коэффициентом трения</p>
                          <p className="text-muted-foreground text-sm mt-2">Возможно исполнение с двумя лентами</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="h-5 w-5 text-lime" />
                            Корпус
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">IP65, из нержавеющей стали (AISI 304)</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Settings className="h-5 w-5 text-lime" />
                            Датчик продукта
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">Оптоволоконный с ресивер/приемником</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Диапазон взвешивания */}
                    <Card className="border-border bg-white/5 backdrop-blur-xl mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Activity className="h-5 w-5 text-lime" />
                          Диапазон взвешивания
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground text-lg font-semibold mb-2">От 0,1 кг до 6 кг</p>
                        <p className="text-foreground">e = 0,002 кг. 4 тензодатчика</p>
                      </CardContent>
                    </Card>

                    {/* Класс точности */}
                    <Card className="border-border bg-white/5 backdrop-blur-xl mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <CheckCircle2 className="h-5 w-5 text-lime" />
                          Класс точности весов
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">ГОСТ OIML R76-1-2011 III</p>
                        <p className="text-foreground">МОЗМ Р 76 (OIML R 76) III</p>
                      </CardContent>
                    </Card>

                    {/* Максимальный размер продукта */}
                    <Card className="border-border bg-white/5 backdrop-blur-xl mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Ruler className="h-5 w-5 text-lime" />
                          Максимальный размер продукта
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground font-semibold text-xl mb-2">500×320×120 мм (Д×Ш×В)</p>
                        <p className="text-muted-foreground text-sm">Ширина 320 мм по низу, по верху до 420 мм</p>
                      </CardContent>
                    </Card>

                    {/* Производительность */}
                    <Card className="border-border bg-white/5 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Zap className="h-5 w-5 text-lime" />
                          Производительность
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-foreground font-semibold">до 100 ед./мин</p>
                              <p className="text-muted-foreground text-sm">для 220×320×120 мм до 0,5 кг</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-foreground font-semibold">до 70 ед./мин</p>
                              <p className="text-muted-foreground text-sm">для 300×320×200 мм до 1,5 кг</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-foreground font-semibold">до 50 ед./мин</p>
                              <p className="text-muted-foreground text-sm">для 500×320×200 мм более 2,5 кг</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Конвейер аппликатора */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 p-6 lg:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lime/10 rounded-lg flex items-center justify-center">
                        <Tag className="h-6 w-6 text-lime" />
                      </div>
                      <h2 className="text-3xl font-bold">Конвейер аппликатора</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Package className="h-5 w-5 text-lime" />
                            Размер платформы
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground font-semibold text-xl">900×400 мм (Д×Ш)</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Move className="h-5 w-5 text-lime" />
                            Лента конвейера
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">На п/у основе с высоким коэффициентом трения</p>
                          <p className="text-muted-foreground text-sm mt-2">Возможно исполнение с двумя лентами</p>
                        </CardContent>
                      </Card>

                      <Card className="border-border bg-white/5 backdrop-blur-xl md:col-span-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Shield className="h-5 w-5 text-lime" />
                            Корпус
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground">IP65, закрытый, из нержавеющей стали (AISI 304)</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PackagingLines;

