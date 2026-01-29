import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EquipmentCatalog from "@/components/EquipmentCatalog";

const Equipment = () => {
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
        <main>
          <EquipmentCatalog />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Equipment;







