import { Button } from "./ui/button";
import teamVideo from "@/assets/team-video.mp4";

const AboutMegabitz = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=552136497932&text=Olá,%20gostaria%20de%20agendar%20uma%20conversa&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="sobre" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            {/* Text Content - Left */}
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="glow-text">Quem Somos:</span>
                <br />
                <span className="gradient-text">A Megabitz e o Seu Negócio</span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                A Megabitz existe para garantir que a tecnologia seja sua aliada, não sua dor de cabeça.
              </p>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Soluções completas e sem burocracia</h3>
                  <p>Nossa equipe entra em campo para assumir toda a gestão de TI, destravar problemas e evitar que você perca tempo com o técnico.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Qualidade e custo sob controle</h3>
                  <p>Com nossos contratos de manutenção, você garante entrega consistente e o melhor custo-benefício.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Compromisso</h3>
                  <p>Nossa prioridade é a tranquilidade da sua gestão.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">+16 anos de experiência</h3>
                  <p>Histórico sólido atendendo operações que não podem parar.</p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="mt-4 md:mt-6 w-full sm:w-auto text-sm sm:text-base whitespace-normal h-auto py-3 px-4"
              >
                Agende uma conversa com os nossos Consultores
              </Button>
            </div>

            {/* Video - Right */}
            <div className="relative rounded-lg overflow-hidden w-full order-1 md:order-2">
              <div className="aspect-video w-full">
                <video 
                  src={teamVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMegabitz;
