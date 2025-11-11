import { CheckCircle2 } from "lucide-react";

const WhatsIncluded = () => {
  const features = [
    "Gestão de Infraestrutura: administração e gerenciamento completo de redes e servidores",
    "Manutenção de Equipamentos: preventiva e corretiva de computadores e notebooks",
    "Suporte Ilimitado: helpdesk e suporte remoto para toda a equipe",
    "Atendimento Presencial: técnico no local quando necessário",
    "Segurança Física: manutenção de CFTV (câmeras e DVR)",
    "Visão de Futuro: consultoria estratégica em infraestrutura de TI"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Seu Contrato de Manutenção Megabitz</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Uma garantia de produtividade: assumimos a complexidade técnica para que seu negócio não sofra com paradas e prejuízos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
