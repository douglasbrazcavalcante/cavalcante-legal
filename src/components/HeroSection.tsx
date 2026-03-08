import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_LINK, WHATSAPP_LINK_AGENDAR } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt="Escritório de advocacia moderno"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-line mb-8" />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Advocacia Estratégica e Consultoria Jurídica
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light leading-relaxed mb-10 max-w-2xl">
            Atuação especializada em Direito Civil, Tributário e Previdenciário, oferecendo consultoria jurídica personalizada e atendimento online em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded font-body font-semibold text-sm tracking-wide hover:bg-primary-foreground/90 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o Advogado
            </a>
            <a
              href={WHATSAPP_LINK_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded font-body font-medium text-sm tracking-wide hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <CalendarCheck className="w-5 h-5" />
              Agendar Consultoria
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
