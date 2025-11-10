import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Atendem remoto e presencial?",
      answer: "Sim. Remoto para velocidade e presencial quando precisa de mãos."
    },
    {
      question: "Projetos entram no contrato?",
      answer: "Suporte, preventivas, monitoramento e segurança entram. Projetos (migração, servidores novos, cabeamento etc.) são à parte."
    },
    {
      question: "Qual o SLA?",
      answer: "Tempos de resposta/solução por criticidade definidos em contrato."
    },
    {
      question: "Trabalham com Windows, macOS e Linux?",
      answer: "Sim, oferecemos suporte completo para os três sistemas operacionais."
    },
    {
      question: "Qual a cobertura geográfica?",
      answer: "Atuamos em todo território nacional. Filiais via remoto + parceiros locais quando necessário."
    },
    {
      question: "LGPD, o que cobrem?",
      answer: "Políticas, controle de acesso, inventário e registro de incidentes (não substitui parecer jurídico)."
    },
    {
      question: "Tenho 'um cara de TI'. Faz sentido?",
      answer: "Sim. A Megabitz opera NOC/monitoramento, segurança e padrões; o seu técnico foca no core."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="glow-text">Perguntas</span>
              <br />
              <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              Respostas rápidas e diretas para suas dúvidas
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 border border-primary/20 rounded-lg px-4 md:px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary text-sm md:text-base py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
