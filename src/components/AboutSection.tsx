import { Shield, Lock, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Monitoramento 24/7",
      description: "Acompanhamento contínuo de todos os sistemas e redes da sua empresa com alertas instantâneos"
    },
    {
      icon: Lock,
      title: "Backup e Recuperação",
      description: "Seus dados sempre seguros com backup automático e plano de recuperação rápida"
    },
    {
      icon: Zap,
      title: "Suporte Imediato",
      description: "Equipe especializada pronta para resolver qualquer incidente de forma remota ou presencial"
    },
    {
      icon: Award,
      title: "Conformidade Legal",
      description: "Adequação às normas LGPD e certificações internacionais de segurança"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-background">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            <span className="gradient-text">Sua Empresa Está Protegida?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="p-4 md:p-6 rounded-xl bg-destructive/10 border border-destructive/30">
              <p className="text-sm md:text-base text-foreground/90 font-medium">Sua empresa sofre com paradas inesperadas nos sistemas?</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-destructive/10 border border-destructive/30">
              <p className="text-sm md:text-base text-foreground/90 font-medium">Preocupado com ataques cibernéticos e vazamento de dados?</p>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-destructive/10 border border-destructive/30">
              <p className="text-sm md:text-base text-foreground/90 font-medium">Precisa de suporte técnico confiável e imediato?</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Como Podemos Ajudar?</h3>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 md:mb-8">
              Com nossa plataforma de segurança cibernética, <strong>sua empresa terá proteção contínua e especializada</strong>, 
              monitoramento de sistemas em tempo real e a garantia de que seus dados estão protegidos contra ameaças. 
              Nossa solução mantém seu negócio funcionando com máxima segurança e eficiência.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 card-glow hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                    <p className="text-foreground/80 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
