import { Shield, Award, FileCheck } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      quote: "Saímos do caos para zero paradas críticas.",
      author: "Roberto Silva",
      role: "Diretor de TI"
    },
    {
      quote: "Backups testados e restauração em minutos.",
      author: "Maria Santos",
      role: "Gerente de Operações"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-foreground/80">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">SLA contratual</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">Ferramentas reconhecidas</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <FileCheck className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-medium">Processos auditáveis (LGPD)</span>
            </div>
          </div>

          <p className="text-center text-sm md:text-base text-foreground/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Atendendo empresas de serviços, varejo e escritórios com excelência em TI
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-xl p-6 md:p-8 card-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-base md:text-lg text-foreground/90 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm md:text-base">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-foreground/60">{testimonial.role}</p>
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

export default TrustSection;
