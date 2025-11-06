import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroShield from "@/assets/hero-shield.jpg";
import laptopMockup from "@/assets/laptop-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:border-primary/50 transition-all duration-300">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Portfólio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Proteja Sua Empresa</span>
              <span className="glow-text block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>com Segurança de Ponta</span>
            </h1>
            
            <p className="text-lg text-foreground/90 max-w-lg animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
              Mantenha seus dados e sistemas protegidos com nossa solução completa de cibersegurança. 
              <strong className="text-primary"> Evite ataques e garanta continuidade</strong> com monitoramento 24/7 e tecnologia avançada.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button variant="hero" size="lg" className="group hover:scale-105 transition-all duration-300">
                Solicitar Proposta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button variant="outline" size="lg" className="glass-effect hover:scale-105 transition-all duration-300">
                Conhecer Soluções
              </Button>
            </div>
          </div>
          
          {/* Right content - Device mockups */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10">
              <img 
                src={laptopMockup} 
                alt="Security Dashboard" 
                className="w-full rounded-lg card-glow transform hover:scale-105 hover:rotate-1 transition-all duration-500"
              />
            </div>
            
            {/* Floating shield */}
            <div className="absolute -top-20 -right-20 w-64 h-64 opacity-50 animate-float">
              <img src={heroShield} alt="Security Shield" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
