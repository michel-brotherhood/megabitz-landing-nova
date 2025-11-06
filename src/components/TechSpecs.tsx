const TechSpecs = () => {
  const specs = [
    { label: "Disponibilidade", value: "99.9%", sublabel: "Uptime Garantido" },
    { label: "Monitoramento", value: "24/7", sublabel: "Proteção Contínua" },
    { label: "Tempo Resposta", value: "< 5min", sublabel: "Suporte Ágil" },
    { label: "Criptografia", value: "AES-256", sublabel: "Nível Militar" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300 card-glow animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {spec.value}
                </div>
                <div className="text-sm md:text-base text-foreground font-semibold mb-1">
                  {spec.label}
                </div>
                <div className="text-xs text-foreground/60">
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
