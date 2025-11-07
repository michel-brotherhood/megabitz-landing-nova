const TechSpecs = () => {
  const benefits = [
    { 
      title: "Menos paradas, mais receita", 
      description: "Prevenção + resposta dentro do SLA",
      icon: "📈"
    },
    { 
      title: "Custo previsível", 
      description: "Contrato mensal sem sustos",
      icon: "💰"
    },
    { 
      title: "Segurança na prática", 
      description: "EDR/Firewall, MFA e políticas ativas",
      icon: "🛡️"
    },
    { 
      title: "Backup que volta", 
      description: "3-2-1 com testes e playbook de restauração",
      icon: "💾"
    },
    { 
      title: "Time produtivo", 
      description: "Máquinas e rede padronizadas, sem gargalo bobo",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Principais Benefícios</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 card-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-2">{benefit.title}</h4>
                <p className="text-foreground/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
