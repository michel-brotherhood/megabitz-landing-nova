import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
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
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        {/* Main Content */}
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-white">Outsourcing de TI com Alocação de Profissionais Especialistas para sua empresa.</span>
          </h1>
          
          <div className="w-full max-w-3xl mx-auto">
            <div className="h-px bg-white/50 mb-8" />
            <p className="text-lg text-white/90 leading-relaxed px-4">
              Contamos com profissionais experientes e prontos para atuar imediatamente, proporcionando o suporte necessário para que sua empresa alcance melhores resultados de forma ágil e eficiente.
            </p>
          </div>
          
          <div className="pt-4">
            <button 
              className="relative px-12 py-4 text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase"
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
              Falar com um especialista
              <span 
                className="absolute top-[120%] left-0 h-full w-full opacity-70 pointer-events-none"
                style={{
                  backgroundColor: 'rgba(107, 228, 228, 0.6)',
                  filter: 'blur(2em)',
                  transform: 'perspective(1.5em) rotateX(35deg) scale(1, .6)'
                }}
              />
            </button>
          </div>
        </div>
        
        {/* Social Media Icons - Bottom Right */}
        <div className="absolute bottom-8 right-8 flex gap-4">
          <a href="https://www.facebook.com/megabitztecnologia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/megabitztecnologia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  );
};

export default Hero;
