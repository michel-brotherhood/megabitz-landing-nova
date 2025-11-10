import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Avaliação Inicial",
      description: "Fazemos uma análise da sua infraestrutura de TI, identificando pontos críticos e melhorias necessárias."
    },
    {
      number: "2",
      title: "Monitoramento",
      description: "Acompanhamos continuamente seus sistemas, detectando e corrigindo problemas antes que eles impactem o seu negócio."
    },
    {
      number: "3",
      title: "Manutenção Preventiva",
      description: "Executamos atualizações, revisões e otimizações regulares para garantir que tudo funcione da melhor maneira possível."
    },
    {
      number: "4",
      title: "Suporte Imediato",
      description: "Em caso de emergências, nossa equipe está pronta para resolver incidentes de forma remota ou presencial."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Como Funciona o</span>
            <br />
            <span className="gradient-text">processo de Manutenção?</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Um processo simples e eficiente para manter sua empresa sempre protegida
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animation: 'fade-in 0.6s ease-out forwards, float 3s ease-in-out infinite'
              }}
            >
              <div className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-2xl p-8 h-full card-glow hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-[0_0_30px_rgba(107,228,228,0.4)]">
                <div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-3xl font-bold text-background shadow-lg animate-pulse"
                  style={{
                    boxShadow: '0 0 20px rgba(107, 228, 228, 0.5)',
                    animationDuration: '2s'
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary transition-colors duration-300 group-hover:text-[#6BE4E4]">{step.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connecting line with animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent animate-pulse" />
              )}
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
        
        <div className="text-center">
          <a 
            href="https://wa.me/552136497932?text=Olá,%20gostaria%20de%20iniciar%20um%20diagnóstico%20de%20TI"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
            style={{
              color: '#6BE4E4',
              backgroundColor: 'rgb(30, 80, 80)',
              border: '.25em solid #6BE4E4',
              boxShadow: '0 0 1em .25em #6BE4E4, 0 0 4em 1em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4',
              textShadow: '0 0 .5em #6BE4E4'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgb(30, 80, 80)';
              e.currentTarget.style.backgroundColor = '#6BE4E4';
              e.currentTarget.style.boxShadow = '0 0 1em .25em #6BE4E4, 0 0 4em 2em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6BE4E4';
              e.currentTarget.style.backgroundColor = 'rgb(30, 80, 80)';
              e.currentTarget.style.boxShadow = '0 0 1em .25em #6BE4E4, 0 0 4em 1em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0.6em .25em #6BE4E4, 0 0 2.5em 2em rgba(107, 228, 228, 0.6), inset 0 0 .5em .25em #6BE4E4';
            }}
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Falar com um especialista
            <span 
              className="absolute top-[120%] left-0 h-full w-full opacity-70 pointer-events-none"
              style={{
                backgroundColor: 'rgba(107, 228, 228, 0.6)',
                filter: 'blur(2em)',
                transform: 'perspective(1.5em) rotateX(35deg) scale(1, .6)'
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
