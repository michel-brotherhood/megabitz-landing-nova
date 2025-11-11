import { Button } from "./ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=552136497932&text=Olá,%20gostaria%20de%20agendar%20uma%20conversa&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-white">
              Um Time Inteiro <span className="gradient-text">Megabitz</span> assumindo a gestão da sua TI.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Tranquilidade total para o seu negócio — especialistas que aceleram projetos, resolvem desafios e apagam incêndios, sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
              >
                Agendar conversa
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
              >
                Falar com consultor
              </Button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
