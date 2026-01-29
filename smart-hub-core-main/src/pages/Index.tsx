import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SoftwareProducts from "@/components/SoftwareProducts";
import TargetAudience from "@/components/TargetAudience";
import Advantages from "@/components/Advantages";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background logo layer */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url(/rus-logo3.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'auto 80vh',
          opacity: 0.5
        }}
      ></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SoftwareProducts />
          <TargetAudience />
          <Advantages />
          <WorkflowDiagram />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
