import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Avaliação Inicial",
      description: "Fazemos uma análise completa da sua infraestrutura de TI, identificando vulnerabilidades e pontos críticos que precisam de atenção."
    },
    {
      number: "2",
      title: "Implementação",
      description: "Instalamos e configuramos todas as camadas de segurança necessárias, desde firewalls até sistemas de detecção de intrusão."
    },
    {
      number: "3",
      title: "Monitoramento Contínuo",
      description: "Acompanhamos 24/7 todos os seus sistemas, detectando e neutralizando ameaças antes que causem danos ao seu negócio."
    },
    {
      number: "4",
      title: "Manutenção Preventiva",
      description: "Executamos atualizações, revisões e otimizações regulares para garantir proteção máxima e desempenho ideal."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Como Funciona</span>
            <br />
            <span className="gradient-text">Nossa Proteção?</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Um processo simples e eficiente para manter sua empresa sempre protegida
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-2xl p-8 h-full card-glow hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-3xl font-bold text-background shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connecting line - hidden on mobile and last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="hover:scale-105 transition-all duration-300">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Solicitar Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
