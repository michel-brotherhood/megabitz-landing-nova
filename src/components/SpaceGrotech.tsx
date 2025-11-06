import tabletInterface from "@/assets/tablet-interface.jpg";

const SpaceGrotech = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <img 
                src={tabletInterface} 
                alt="Space Grotech Interface" 
                className="w-full rounded-2xl card-glow transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">Inovação Digital</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Space</span>
                <br />
                <span className="glow-text">Grotech</span>
              </h2>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Uma plataforma revolucionária que integra inteligência artificial e blockchain para criar 
                um ecossistema de segurança digital sem precedentes. Tecnologia de ponta para proteção 
                máxima dos seus ativos digitais.
              </p>
              
              <div className="pt-4">
                <ul className="space-y-3">
                  {[
                    "Integração com IA avançada",
                    "Blockchain para máxima segurança",
                    "Interface intuitiva e moderna",
                    "Suporte 24/7 especializado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceGrotech;
