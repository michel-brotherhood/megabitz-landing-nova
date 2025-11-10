import { Shield, Settings, TrendingUp, CheckCircle2 } from "lucide-react";

const TechSpecs = () => {
  const benefits = [
    {
      title: "Segurança de Dados",
      description: "Proteção contínua dos seus dados com backups automatizados e controle de acesso, garantindo a integridade e a confidencialidade das informações.",
      icon: Shield
    },
    {
      title: "Aumento de Desempenho",
      description: "Manutenção preventiva e sistemas otimizados para garantir que seus equipamentos funcionem de maneira ágil e sem falhas.",
      icon: Settings
    },
    {
      title: "Suporte Técnico Rápido e Confiável",
      description: "Atendimento remoto e presencial para resolver problemas de TI de forma eficiente, minimizando interrupções.",
      icon: TrendingUp
    },
    {
      title: "Redução de custos e riscos",
      description: "Soluções de TI personalizadas que aumentam a produtividade, evitam perdas e garantem maior controle sobre seus investimentos em tecnologia.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="beneficios" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3d3d] via-[#0d2626] to-[#042020]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6be4e4]/10 via-transparent to-[#6be4e4]/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title with icon */}
          <div className="flex items-center gap-4 mb-16 animate-fade-in">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#6be4e4" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Principais<br />Benefícios
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-[#1a2d4d]/80 backdrop-blur-sm border border-[#6be4e4]/20 rounded-2xl p-8 hover:border-[#6be4e4]/40 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="absolute -top-6 right-8 w-16 h-16 rounded-2xl bg-[#6be4e4]/20 border-2 border-[#6be4e4] flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#6be4e4]" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#6be4e4] mb-4 mt-6">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
