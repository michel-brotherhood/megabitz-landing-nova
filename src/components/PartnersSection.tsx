const PartnersSection = () => {
  // Placeholder partner names - replace with actual logos if needed
  const partners = [
    "ISO Certified",
    "Tech Security",
    "Global Trust",
    "Cyber Shield",
    "Data Safe",
    "Secure Net",
    "Privacy Plus",
    "Guardian"
  ];

  return (
    <section className="py-24 px-4 bg-card/50 border-y border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Parceiros e certificações
          </p>
          <h3 className="text-2xl font-semibold">Por que confiar na Space 10?</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors group"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
