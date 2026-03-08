import { motion } from "framer-motion";
import { UserCheck, Target, Headphones, Globe, FileSearch } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Atendimento Direto com Advogado", text: "Seu caso é tratado pessoalmente pelo advogado responsável, sem intermediários." },
  { icon: Target, title: "Atuação Estratégica", text: "Cada caso recebe análise aprofundada para definição da melhor estratégia jurídica." },
  { icon: Headphones, title: "Consultoria Personalizada", text: "Orientação jurídica sob medida, adaptada à realidade de cada cliente." },
  { icon: Globe, title: "Atendimento Online em Todo o Brasil", text: "Consultoria jurídica sem barreiras geográficas, com total comodidade." },
  { icon: FileSearch, title: "Análise Detalhada de Cada Caso", text: "Estudo minucioso dos fatos e documentos para garantir segurança jurídica." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
           <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Diferenciais do Atendimento
          </h2>
          <p className="font-body opacity-80 max-w-2xl mx-auto">
            Compromisso com excelência, transparência e resultados em cada atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <item.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm opacity-75 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
