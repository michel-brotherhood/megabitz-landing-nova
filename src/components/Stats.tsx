import { useEffect, useRef, useState } from "react";
import { Users, Award, Shield, TrendingUp } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Anos de Experiência",
      description: "No mercado de TI"
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Clientes Atendidos",
      description: "Empresas confiam em nós"
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: "%",
      label: "Disponibilidade",
      description: "SLA garantido"
    },
    {
      icon: TrendingUp,
      value: 1000,
      suffix: "+",
      label: "Projetos Concluídos",
      description: "Com sucesso"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpAnimation = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;
      const isDecimal = end % 1 !== 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = startValue + (end - startValue) * easeOutQuart;

        setCount(isDecimal ? Math.round(currentCount * 10) / 10 : Math.floor(currentCount));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-[#6be4e4]">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#0a1f3d] via-[#0d2847] to-[#0a1f3d]">
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#6be4e4]/20 border-2 border-[#6be4e4] flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#6be4e4]" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-white/70">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
