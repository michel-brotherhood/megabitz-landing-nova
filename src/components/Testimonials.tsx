import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import googleBadge from "@/assets/google-reviews-badge.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      time: "Há 2 semanas",
      rating: 5,
      text: "Excelente suporte técnico! Resolveram nosso problema de rede rapidamente. A equipe é muito profissional e sempre disponível para ajudar."
    },
    {
      name: "Mariana Costa",
      time: "Há 1 mês",
      rating: 5,
      text: "Implementaram toda a infraestrutura de TI da nossa empresa. Projeto executado com perfeição, dentro do prazo e orçamento. Recomendo demais!"
    },
    {
      name: "Roberto Almeida",
      time: "Há 3 semanas",
      rating: 5,
      text: "Serviço de segurança da informação impecável. Nos sentimos muito mais seguros após a consultoria e implementação das soluções. Equipe técnica de alto nível!"
    },
    {
      name: "Ana Paula Rodrigues",
      time: "Há 1 semana",
      rating: 5,
      text: "Contratamos a consultoria de TI e foi uma das melhores decisões que tomamos. Otimizaram todos os nossos processos e aumentaram nossa produtividade."
    },
    {
      name: "Fernando Santos",
      time: "Há 4 dias",
      rating: 5,
      text: "Profissionais extremamente competentes! O atendimento é rápido e sempre resolvem tudo com muita agilidade. Confiamos totalmente no trabalho deles."
    },
    {
      name: "Juliana Pereira",
      time: "Há 2 meses",
      rating: 5,
      text: "A Megabitz transformou nossa infraestrutura de TI. Sistema estável, seguro e com suporte sempre presente. Parceria de confiança!"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with Badge */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img 
                src={googleBadge} 
                alt="Avaliações Verificadas Google" 
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Nossos <span style={{ color: '#6be4e4' }}>Clientes Dizem</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Avaliações reais de clientes satisfeitos com nossos serviços
            </p>
          </div>

          {/* Testimonials Grid */}
          <div 
            className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in transition-all duration-500" 
            style={{ animationDelay: '0.2s' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.slice(currentIndex * 3, currentIndex * 3 + 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Name and Rating */}
                <div className="mb-4">
                  <h3 className="font-bold text-foreground mb-2">{testimonial.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#6be4e4] text-[#6be4e4]" />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">{testimonial.time}</span>
                  </div>
                </div>
                
                {/* Quote and Text */}
                <div className="relative">
                  <span className="text-6xl text-[#6be4e4]/20 absolute -top-4 -left-2 font-serif leading-none">"</span>
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
              className="w-10 h-10 rounded-lg border-2 border-[#6be4e4]/30 text-[#6be4e4] hover:bg-[#6be4e4]/10 transition-all duration-300 flex items-center justify-center"
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
                      ? 'w-8 bg-[#6be4e4]' 
                      : 'w-2 bg-[#6be4e4]/30'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-lg border-2 border-[#6be4e4]/30 text-[#6be4e4] hover:bg-[#6be4e4]/10 transition-all duration-300 flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Statistics */}
          <div 
            className="flex items-center justify-center gap-8 p-6 rounded-2xl border-2 max-w-md mx-auto animate-fade-in"
            style={{ 
              borderColor: '#6be4e4',
              backgroundColor: 'rgba(107, 228, 228, 0.05)',
              animationDelay: '0.6s'
            }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#6be4e4' }}>
                5.0
              </div>
              <p className="text-xs text-foreground/70">Nota no Google</p>
            </div>
            <div className="h-12 w-px bg-[#6be4e4]/30" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#6be4e4' }}>
                86
              </div>
              <p className="text-xs text-foreground/70">Avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
