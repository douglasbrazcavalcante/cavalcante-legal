import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AreasSection />
        <ServicesSection />
        <DifferentialsSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
