import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Essencial",
      features: [
        "Suporte remoto 8x5",
        "Preventivas mensais",
        "Monitoramento endpoints",
        "Backup local",
        "Relatório mensal"
      ],
      cta: "Receber proposta",
      popular: false
    },
    {
      name: "Profissional",
      badge: "Mais escolhido",
      features: [
        "Remoto 8x5 + presencial programado",
        "Preventivas quinzenais",
        "Monitoramento 24/7 (servidores/rede/endpoints)",
        "Backup 3-2-1 (inclui nuvem) + testes",
        "Segurança: EDR + antispam + políticas",
        "Relatório executivo + técnico"
      ],
      cta: "Quero esse plano",
      popular: true
    },
    {
      name: "Avançado",
      features: [
        "Suporte estendido [12x6/24x7] + plantão crítico",
        "Preventivas semanais + hardening contínuo",
        "SOC/EDR avançado + firewall/UTM gerenciado",
        "Backup imutável + DR playbook",
        "Gestão de vulnerabilidades + simulações",
        "Comitê técnico com KPIs"
      ],
      cta: "Falar com especialista",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Planos que se</span>
            <br />
            <span className="gradient-text">ajustam ao seu negócio</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Preços sob consulta, conforme parque, criticidade e filiais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-card via-card/90 to-card border rounded-2xl p-8 animate-fade-in-up ${
                plan.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary to-secondary text-background text-sm font-semibold rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-primary mb-6">{plan.name}</h3>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full hover:scale-105 transition-all duration-300"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
