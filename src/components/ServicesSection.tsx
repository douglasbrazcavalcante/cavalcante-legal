import { motion } from "framer-motion";
import { FileText, Search, Gavel, Calculator, Heart, Shield } from "lucide-react";

const services = [
  { icon: FileText, title: "Consultoria Jurídica", description: "Orientação especializada para tomada de decisões seguras e embasadas juridicamente." },
  { icon: Search, title: "Análise e Elaboração de Contratos", description: "Revisão, elaboração e análise de contratos civis e empresariais." },
  { icon: Gavel, title: "Atuação em Processos Judiciais", description: "Representação judicial em todas as instâncias com estratégia e dedicação." },
  { icon: Calculator, title: "Planejamento Tributário", description: "Estruturação fiscal eficiente para redução legal da carga tributária." },
  { icon: Heart, title: "Orientação Previdenciária", description: "Análise de direitos previdenciários e planejamento para aposentadoria." },
  { icon: Shield, title: "Análise Jurídica Preventiva", description: "Identificação e prevenção de riscos jurídicos para proteção patrimonial." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            Serviços Jurídicos
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Soluções jurídicas completas e personalizadas para cada necessidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-5 p-6 rounded border border-border hover:border-gold/30 transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
