const AboutMegabitz = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Sobre a Megabitz</span>
          </h2>
          <p className="text-xl text-foreground/90 leading-relaxed mb-6">
            A <strong className="text-primary">Megabitz Tecnologia</strong> organiza e protege a TI de empresas 
            que precisam trabalhar sem interrupção.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Entregamos contratos de manutenção com segurança gerenciada, backup testado e 
            relatórios que fazem sentido para negócio — não só para técnico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMegabitz;
