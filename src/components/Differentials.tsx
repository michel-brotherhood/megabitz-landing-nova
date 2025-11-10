import { Shield, FileText, Wrench, Target } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "SLA contratual de verdade",
      description: "Comunicação transparente e tempos de resposta garantidos"
    },
    {
      icon: FileText,
      title: "Playbooks prontos",
      description: "Procedimentos documentados para incidentes e restauração"
    },
    {
      icon: Wrench,
      title: "Ferramentas de mercado",
      description: "EDR/UTM/backup reconhecidos — nada 'caseiro'"
    },
    {
      icon: Target,
      title: "Foco em resultado",
      description: "Prioridade por impacto no negócio, não em ticket"
    }
  ];

  return (
    <section id="diferenciais" className="py-24 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Diferenciais Megabitz</span>
            </h2>
            <p className="text-lg text-foreground/80">
              O que nos torna diferentes dos demais fornecedores de TI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-xl p-8 hover:scale-105 transition-all duration-300 card-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
