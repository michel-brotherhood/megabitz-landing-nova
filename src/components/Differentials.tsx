import { Play } from "lucide-react";

const Differentials = () => {
  const reasons = [
    {
      title: "Suporte Técnico:",
      description: "Nossa equipe resolve problemas de TI com agilidade, garantindo operações sem interrupções."
    },
    {
      title: "Manutenção Preventiva:",
      description: "Sua empresa com desempenho otimizado, maior segurança e sem interrupções, mantendo a continuidade dos negócios com eficiência."
    },
    {
      title: "Monitoramento Proativo:",
      description: "Identificamos e corrigimos falhas antes que afetem o seu negócio."
    },
    {
      title: "Segurança de Dados:",
      description: "Protegemos seus dados com controle de acesso, backups automatizados e em nuvem, garantindo a segurança contínua do seu negócio."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3d] via-[#0d2847] to-[#0a1f3d]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title section with icon */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <div className="flex items-start gap-3 mb-4 md:mb-6">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-[#6be4e4] fill-[#6be4e4] flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Por que escolher a Megabitz?
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl">
              Oferecemos suporte remoto e presencial que <strong>protege seus dados, previne interrupções e prejuízos</strong>, e mantém sua empresa funcionando com <strong>segurança e eficiência</strong>.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((item, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-[#1e3a5f]/90 to-[#2a4a7c]/90 backdrop-blur-sm border border-[#6be4e4]/30 rounded-2xl p-6 md:p-8 hover:border-[#6be4e4]/50 transition-all duration-300 h-full">
                  {/* Play icon */}
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-[#6be4e4] fill-[#6be4e4] group-hover:drop-shadow-[0_0_8px_rgba(107,228,228,0.8)]" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#6be4e4] mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
