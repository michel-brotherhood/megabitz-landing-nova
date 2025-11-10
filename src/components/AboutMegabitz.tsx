import { Button } from "./ui/button";
import teamHands from "@/assets/team-hands.png";

const AboutMegabitz = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20conversa', '_blank');
  };

  return (
    <section id="sobre" className="py-24 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="glow-text">Sobre a</span>
                <br />
                <span className="gradient-text">Megabitz</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  A MEGABITZ Tecnologia tem a Solução para diversas barreiras que limitam o resultado da sua empresa.
                </p>
                <p>
                  Especialistas dedicados, prontos para entrar em campo e destravar seu roadmap.
                  Menos burocracia, mais entrega: alocação ágil, qualidade consistente e custos sob controle.
                </p>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="mt-6"
              >
                Agende uma conversa com os nossos Consultores
              </Button>
            </div>

            {/* Image - Right */}
            <div className="relative">
              <img 
                src={teamHands} 
                alt="Equipe Megabitz trabalhando em conjunto" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMegabitz;
