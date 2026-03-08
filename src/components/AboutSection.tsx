import { motion } from "framer-motion";
import advogadoImg from "@/assets/advogado.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={advogadoImg}
                alt="Dr. Douglas Braz Cavalcante - Advogado OAB/SP 539817"
                className="w-full max-w-md rounded shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border-2 border-gold/30 rounded -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6">
              Sobre o Advogado
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Douglas Braz Cavalcante é advogado inscrito na OAB/SP sob o nº 539817, com atuação especializada em Direito Civil, Tributário e Previdenciário. Sua trajetória profissional é marcada pelo compromisso com soluções jurídicas estratégicas e pela dedicação a cada caso atendido.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Com atendimento personalizado e consultoria jurídica online, o escritório presta serviços a clientes em todo o Brasil, sempre com foco na excelência técnica, transparência e resultados concretos para cada situação jurídica.
            </p>
            <div className="border-l-2 border-gold pl-6">
              <p className="font-heading text-xl font-semibold text-primary">Douglas Braz Cavalcante</p>
              <p className="text-muted-foreground font-body text-sm mt-1">Advogado — OAB/SP 539817</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
