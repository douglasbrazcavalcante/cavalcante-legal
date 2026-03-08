import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const CtaSection = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6">
            Precisa de orientação jurídica?
          </h2>
           <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            Entre em contato para análise do seu caso e receba orientação jurídica especializada. Atendimento online para todo o Brasil.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded font-body font-semibold text-base hover:bg-navy-light transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
