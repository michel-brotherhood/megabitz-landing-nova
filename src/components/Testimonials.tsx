import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Fernanda Oliveira",
      avatar: "FO",
      time: "Há 3 dias",
      rating: 5,
      text: "Comprei cortinas e pisos vinílicos. Ficou perfeito! A instalação foi rápida e muito bem feita. Super recomendo!"
    },
    {
      name: "Pedro Henrique",
      avatar: "PH",
      time: "Há 2 semanas",
      rating: 5,
      text: "Loja completa com tudo que você precisa para decorar sua casa. Preços competitivos e qualidade excepcional."
    },
    {
      name: "Juliana Martins",
      avatar: "JM",
      time: "Há 1 semana",
      rating: 5,
      text: "Adorei os tecidos! Variedade incrível de estampas e cores. O atendimento foi super atencioso e me ajudaram a escolher o melhor para minha sala."
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with Stars */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#FF6B35] text-[#FF6B35]" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Nossos <span style={{ color: '#FF6B35' }}>Clientes Dizem</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Avaliações reais de clientes satisfeitos com nossos produtos e serviços
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Avatar and Name */}
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: '#FF6B35' }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1">{testimonial.name}</h3>
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/60">{testimonial.time}</p>
                  </div>
                </div>
                
                {/* Quote and Text */}
                <div className="relative">
                  <span className="text-6xl text-[#FF6B35]/20 absolute -top-4 -left-2 font-serif leading-none">"</span>
                  <p className="text-foreground/80 leading-relaxed relative z-10 pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-lg border-2 border-[#FF6B35]/30 text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-300 flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#FF6B35]' 
                      : 'w-2 bg-[#FF6B35]/30'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-lg border-2 border-[#FF6B35]/30 text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-300 flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Statistics */}
          <div 
            className="flex items-center justify-center gap-8 p-8 rounded-2xl border-2 max-w-2xl mx-auto animate-fade-in"
            style={{ 
              borderColor: '#FF6B35',
              backgroundColor: 'rgba(255, 107, 53, 0.05)',
              animationDelay: '0.6s'
            }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#FF6B35' }}>
                4.9/5.0
              </div>
              <p className="text-sm text-foreground/70">Média de avaliações</p>
            </div>
            <div className="h-16 w-px bg-[#FF6B35]/30" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#FF6B35' }}>
                500+
              </div>
              <p className="text-sm text-foreground/70">Avaliações no Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
