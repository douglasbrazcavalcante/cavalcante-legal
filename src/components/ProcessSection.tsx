import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Contato Inicial", description: "Entre em contato pelo WhatsApp ou telefone e descreva brevemente sua situação." },
  { number: "02", title: "Análise do Caso", description: "O advogado realiza uma análise detalhada dos fatos e documentos apresentados." },
  { number: "03", title: "Orientação Jurídica", description: "Receba orientação clara sobre os caminhos jurídicos e a estratégia recomendada." },
  { number: "04", title: "Acompanhamento", description: "Acompanhamento contínuo do seu caso com atualizações e suporte dedicado." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            Como Funciona o Atendimento
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Um processo simples e transparente para cuidar do seu caso jurídico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="text-center"
            >
              <span className="font-heading text-5xl font-bold text-gold/30">{step.number}</span>
              <h3 className="font-heading text-lg font-semibold text-primary mt-3 mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
