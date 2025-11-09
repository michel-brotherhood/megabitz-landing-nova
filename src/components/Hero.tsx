import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/85" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center pb-20 sm:pb-8">
        {/* Main Content */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed sm:leading-tight">
            <span className="block text-white mb-3 sm:mb-4">Outsourcing de TI com Alocação de</span>
            <span className="block text-white">Profissionais Especialistas para sua empresa.</span>
          </h1>
          
          <div className="w-full max-w-3xl mx-auto">
            <div className="h-px bg-white/50 mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg text-white/90 leading-relaxed px-2 sm:px-4">
              Contamos com profissionais experientes e prontos para atuar imediatamente, proporcionando o suporte necessário para que sua empresa alcance melhores resultados de forma ágil e eficiente.
            </p>
          </div>
          
          <div className="pt-4 sm:pt-6">
            <button 
              className="relative px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase"
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
        <div className="absolute bottom-8 right-4 sm:right-8 flex gap-2 sm:gap-3">
          <a href="https://www.instagram.com/megabitztecnologia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://www.facebook.com/megabitztecnologia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://www.google.com/search?q=megabitz+tecnologia&sourceid=chrome&ie=UTF-8#lrd=0x997e75742ac2a9:0x7eadf9bd117d7cb,1,,,," target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </section>
  );
};

export default Hero;
