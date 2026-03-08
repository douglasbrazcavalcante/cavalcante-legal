import { motion } from "framer-motion";
import { Scale, Landmark, ShieldCheck, Briefcase } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Atuação em contratos, responsabilidade civil, direito de família, sucessões e demandas cíveis em geral, com foco em soluções eficientes e estratégicas.",
  },
  {
    icon: Landmark,
    title: "Direito Tributário",
    description: "Planejamento tributário, defesa em execuções fiscais, recuperação de créditos e orientação sobre obrigações tributárias para pessoas físicas e jurídicas.",
  },
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    description: "Aposentadorias, benefícios por incapacidade, pensão por morte, revisões de benefícios e planejamento previdenciário personalizado.",
  },
  {
    icon: Briefcase,
    title: "Consultoria Jurídica",
    description: "Orientação jurídica preventiva e estratégica para pessoas físicas e empresas, com análise detalhada e atendimento online em todo o Brasil.",
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Atuação jurídica especializada nas principais áreas do Direito, com dedicação e estratégia em cada caso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <area.icon className="w-10 h-10 text-gold mb-6 group-hover:text-gold-light transition-colors duration-300" />
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">{area.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
