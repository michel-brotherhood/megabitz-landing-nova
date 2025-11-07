import { CheckCircle2 } from "lucide-react";

const WhatsIncluded = () => {
  const features = [
    "Suporte remoto e presencial com tempos de resposta definidos",
    "Manutenção preventiva (patches, atualizações, limpeza lógica)",
    "Monitoramento 24/7 de servidores, rede e endpoints",
    "Segurança gerenciada: EDR/antivírus, firewall/UTM, antispam, hardening, MFA",
    "Backup & DR: 3-2-1, cópia externa, testes de restauração, runbook",
    "Gestão de ativos: inventário, licenças e ciclo de vida",
    "Rede & Wi-Fi corporativo: segmentação, VLAN, QoS, saúde da infra",
    "Documentação de TI: topologia, acessos e procedimentos",
    "Relatórios mensais com KPIs e roadmap técnico"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">O Que Está Incluso</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Cobertura completa para sua infraestrutura de TI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
