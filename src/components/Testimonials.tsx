import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import googleBadge from "@/assets/google-reviews-badge.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    { name: "Carlos Eduardo Silva", time: "Há 2 semanas", rating: 5, text: "Excelente suporte técnico! Resolveram nosso problema de rede rapidamente. A equipe é muito profissional e sempre disponível." },
    { name: "Mariana Costa", time: "Há 1 mês", rating: 5, text: "Implementaram toda a infraestrutura de TI da nossa empresa. Projeto executado com perfeição, dentro do prazo e orçamento." },
    { name: "Roberto Almeida", time: "Há 3 semanas", rating: 5, text: "Serviço de segurança da informação impecável. Nos sentimos muito mais seguros após a consultoria. Equipe técnica de alto nível!" },
    { name: "Ana Paula Rodrigues", time: "Há 1 semana", rating: 5, text: "Contratamos a consultoria de TI e foi uma das melhores decisões. Otimizaram todos os processos e aumentaram produtividade." },
    { name: "Fernando Santos", time: "Há 4 dias", rating: 5, text: "Profissionais extremamente competentes! O atendimento é rápido e sempre resolvem tudo com muita agilidade." },
    { name: "Juliana Pereira", time: "Há 2 meses", rating: 5, text: "A Megabitz transformou nossa infraestrutura de TI. Sistema estável, seguro e com suporte sempre presente." },
    { name: "Ricardo Mendes", time: "Há 5 dias", rating: 5, text: "Atendimento excepcional! Resolveram problemas críticos que tínhamos há meses. Recomendo muito!" },
    { name: "Patrícia Lima", time: "Há 3 dias", rating: 5, text: "Equipe qualificada e sempre atenciosa. Migração de servidores foi perfeita, sem nenhuma intercorrência." },
    { name: "André Souza", time: "Há 1 semana", rating: 5, text: "Melhor empresa de TI que já contratamos. Profissionalismo e competência em cada atendimento." },
    { name: "Camila Rocha", time: "Há 2 semanas", rating: 5, text: "Implementação de firewall e segurança foram impecáveis. Dormimos tranquilos sabendo que estamos protegidos." },
    { name: "Thiago Barbosa", time: "Há 10 dias", rating: 5, text: "Suporte remoto funciona perfeitamente. Resolvem nossos problemas em minutos. Muito satisfeito!" },
    { name: "Daniela Martins", time: "Há 1 mês", rating: 5, text: "Consultoria em cloud computing foi excelente. Economizamos muito com a migração que eles fizeram." },
    { name: "Paulo Henrique", time: "Há 2 dias", rating: 5, text: "Profissionais capacitados e sempre disponíveis. Nunca ficamos sem suporte quando precisamos." },
    { name: "Fernanda Oliveira", time: "Há 1 semana", rating: 5, text: "Infraestrutura de rede totalmente renovada. Tudo funcionando perfeitamente desde a implementação." },
    { name: "Marcos Vinicius", time: "Há 3 semanas", rating: 5, text: "Excelente custo-benefício. Serviços de alta qualidade com preço justo. Super recomendo!" },
    { name: "Beatriz Ferreira", time: "Há 5 dias", rating: 5, text: "Backup e disaster recovery configurados com maestria. Sentimos segurança total nos nossos dados." },
    { name: "Lucas Araújo", time: "Há 2 semanas", rating: 5, text: "Manutenção preventiva evitou diversos problemas. Investimento que vale muito a pena!" },
    { name: "Gabriela Santos", time: "Há 1 mês", rating: 5, text: "Equipe sempre atualizada com as melhores tecnologias do mercado. Isso faz toda diferença!" },
    { name: "Rafael Costa", time: "Há 4 dias", rating: 5, text: "Resolveram problema crítico de servidor em tempo recorde. Profissionalismo exemplar!" },
    { name: "Amanda Silva", time: "Há 1 semana", rating: 5, text: "Monitoramento 24/7 nos dá tranquilidade total. Sempre identificam problemas antes deles acontecerem." },
    { name: "Bruno Alves", time: "Há 3 dias", rating: 5, text: "Migração de e-mails para nuvem foi perfeita. Processo transparente e sem dor de cabeça." },
    { name: "Carolina Melo", time: "Há 2 semanas", rating: 5, text: "Treinamento da equipe foi excelente. Todos aprenderam rapidamente os novos sistemas." },
    { name: "Diego Ribeiro", time: "Há 5 dias", rating: 5, text: "Suporte técnico sempre gentil e paciente. Explicam tudo de forma clara e objetiva." },
    { name: "Larissa Pinto", time: "Há 1 mês", rating: 5, text: "Implementação de VPN corporativa funcionou perfeitamente. Trabalho remoto agora é seguro." },
    { name: "Gustavo Nunes", time: "Há 1 semana", rating: 5, text: "Consultoria em segurança identificou várias vulnerabilidades. Correções foram feitas rapidamente." },
    { name: "Renata Dias", time: "Há 3 semanas", rating: 5, text: "Upgrade de servidores foi executado com perfeição. Performance melhorou drasticamente!" },
    { name: "Felipe Cardoso", time: "Há 2 dias", rating: 5, text: "Atendimento humanizado e técnico ao mesmo tempo. Equipe muito preparada e educada." },
    { name: "Bianca Moreira", time: "Há 1 semana", rating: 5, text: "Sistema de tickets funciona muito bem. Sempre temos visibilidade do andamento das solicitações." },
    { name: "Rodrigo Freitas", time: "Há 4 dias", rating: 5, text: "Implementação de antivírus corporativo foi rápida e eficiente. Máquinas todas protegidas." },
    { name: "Tatiana Gomes", time: "Há 2 semanas", rating: 5, text: "Parceria de longo prazo que só traz benefícios. Confiamos totalmente no trabalho deles." },
    { name: "Vitor Santos", time: "Há 5 dias", rating: 5, text: "Resolveram problema de lentidão na rede que ninguém mais conseguia. Expertise impressionante!" },
    { name: "Isabela Cunha", time: "Há 1 mês", rating: 5, text: "Projeto de cabeamento estruturado foi impecável. Organização e qualidade em cada detalhe." },
    { name: "Matheus Barros", time: "Há 1 semana", rating: 5, text: "Suporte via WhatsApp é muito conveniente. Respostas rápidas e soluções efetivas." },
    { name: "Priscila Ramos", time: "Há 3 dias", rating: 5, text: "Gestão de ativos de TI agora está organizada. Sabemos exatamente o que temos e onde está." },
    { name: "Eduardo Campos", time: "Há 2 semanas", rating: 5, text: "Implementação de sistema de câmeras integrado com TI foi perfeita. Tudo funcionando em harmonia." },
    { name: "Vanessa Torres", time: "Há 4 dias", rating: 5, text: "Relatórios mensais são muito detalhados. Transparência total em todos os serviços prestados." },
    { name: "Gabriel Monteiro", time: "Há 1 semana", rating: 5, text: "Recuperação de dados salvou nossa empresa. Profissionalismo e agilidade foram fundamentais!" },
    { name: "Adriana Sousa", time: "Há 5 dias", rating: 5, text: "Configuração de impressoras em rede resolvida rapidamente. Produtividade aumentou muito!" },
    { name: "Leandro Vieira", time: "Há 3 semanas", rating: 5, text: "Política de segurança implementada protege todos os nossos processos. Muito bem estruturada!" },
    { name: "Cristina Lopes", time: "Há 2 dias", rating: 5, text: "Suporte durante migração de sistema crítico foi impecável. Zero downtime!" },
    { name: "Fábio Azevedo", time: "Há 1 semana", rating: 5, text: "Monitoramento proativo evita problemas antes deles afetarem operação. Excelente serviço!" },
    { name: "Aline Castro", time: "Há 4 dias", rating: 5, text: "Treinamento em cibersegurança para equipe foi muito esclarecedor. Todos mais conscientes agora." },
    { name: "Márcio Teixeira", time: "Há 2 semanas", rating: 5, text: "Implementação de certificado digital SSL foi rápida. Site agora transmite confiança total." },
    { name: "Simone Duarte", time: "Há 1 mês", rating: 5, text: "Auditoria de TI identificou pontos de melhoria importantes. Relatório muito completo!" },
    { name: "Henrique Reis", time: "Há 5 dias", rating: 5, text: "Atualização de sistemas foi feita sem impacto na operação. Planejamento perfeito!" },
    { name: "Letícia Farias", time: "Há 1 semana", rating: 5, text: "Suporte para Microsoft 365 é excepcional. Sempre resolvem nossas dúvidas rapidamente." },
    { name: "César Nogueira", time: "Há 3 dias", rating: 5, text: "Instalação de novo servidor foi executada perfeitamente. Tudo documentado e organizado." },
    { name: "Mônica Pereira", time: "Há 2 semanas", rating: 5, text: "Gestão de licenças de software agora está sob controle. Economia e conformidade garantidas." },
    { name: "Alexandre Lima", time: "Há 4 dias", rating: 5, text: "Suporte técnico presencial quando necessário. Flexibilidade que faz toda diferença!" },
    { name: "Luciana Machado", time: "Há 1 semana", rating: 5, text: "Configuração de telefonia VoIP funcionou perfeitamente. Comunicação mais eficiente agora." },
    { name: "Sérgio Marques", time: "Há 5 dias", rating: 5, text: "Plano de continuidade de negócios bem estruturado. Dormimos tranquilos sabendo que temos backup." },
    { name: "Paula Braga", time: "Há 3 semanas", rating: 5, text: "Migração para ambiente virtualizado foi tranquila. Performance melhorou muito!" },
    { name: "Antônio Correia", time: "Há 2 dias", rating: 5, text: "Implementação de controle de acesso foi essencial. Segurança física e lógica integradas." },
    { name: "Eliane Batista", time: "Há 1 semana", rating: 5, text: "Consultoria em LGPD nos ajudou a regularizar tudo. Profissionais muito bem informados!" },
    { name: "Roberto Siqueira", time: "Há 4 dias", rating: 5, text: "Upgrade de storage resolveu problema de espaço. Solução escalável e bem planejada." },
    { name: "Andréa Moura", time: "Há 2 semanas", rating: 5, text: "Suporte multilíngue para filial internacional foi perfeito. Atendimento sem barreiras!" },
    { name: "Wagner Silva", time: "Há 1 mês", rating: 5, text: "Implementação de helpdesk interno melhorou muito nosso atendimento. Sistema excelente!" },
    { name: "Cláudia Fernandes", time: "Há 5 dias", rating: 5, text: "Backup automático funcionando perfeitamente. Nunca mais perdemos dados importantes." },
    { name: "Marcelo Cruz", time: "Há 1 semana", rating: 5, text: "Auditoria de segurança periódica mantém tudo sob controle. Investimento que vale a pena!" },
    { name: "Sandra Oliveira", time: "Há 3 dias", rating: 5, text: "Migração de banco de dados foi executada com perfeição. Zero problemas no processo!" },
    { name: "José Carlos", time: "Há 2 semanas", rating: 5, text: "Suporte para softwares específicos da nossa área é diferencial. Conhecem bem o mercado!" },
    { name: "Raquel Tavares", time: "Há 4 dias", rating: 5, text: "Implementação de antispam reduziu drasticamente emails indesejados. Produtividade aumentou!" },
    { name: "Pedro Paulo", time: "Há 1 semana", rating: 5, text: "Consultoria em automação de processos trouxe muita eficiência. ROI muito rápido!" },
    { name: "Silvia Nascimento", time: "Há 5 dias", rating: 5, text: "Treinamento para novos colaboradores em TI é muito completo. Integração facilitada!" },
    { name: "Fábio Henrique", time: "Há 3 semanas", rating: 5, text: "Implementação de Wi-Fi corporativo com cobertura total. Sinal excelente em todos os ambientes!" },
    { name: "Márcia Regina", time: "Há 2 dias", rating: 5, text: "Gestão de patches e atualizações agora é automática. Segurança sempre em dia!" },
    { name: "Daniel Augusto", time: "Há 1 semana", rating: 5, text: "Suporte 24/7 é fundamental para nossa operação. Sempre podemos contar com eles!" },
    { name: "Carla Cristina", time: "Há 4 dias", rating: 5, text: "Implementação de DLP protege informações sensíveis. Conformidade garantida!" },
    { name: "Renato César", time: "Há 2 semanas", rating: 5, text: "Consultoria em transformação digital foi estratégica. Empresa mais moderna e competitiva!" },
    { name: "Vera Lúcia", time: "Há 1 mês", rating: 5, text: "Sistema de monitoramento de ativos em tempo real. Controle total do parque tecnológico!" },
    { name: "Alberto Cunha", time: "Há 5 dias", rating: 5, text: "Suporte para home office funcionou perfeitamente. Infraestrutura robusta e segura!" },
    { name: "Cristiane Alves", time: "Há 1 semana", rating: 5, text: "Implementação de sistema de backup em nuvem foi excelente. Dados sempre seguros!" },
    { name: "Júlio Mendes", time: "Há 3 dias", rating: 5, text: "Migração de sistemas legados para plataformas modernas. Processo muito bem conduzido!" },
    { name: "Marta Silva", time: "Há 2 semanas", rating: 5, text: "Auditoria de compliance identificou e corrigiu não conformidades. Trabalho impecável!" },
    { name: "Wilson Rocha", time: "Há 4 dias", rating: 5, text: "Implementação de controles de acesso biométrico integrado. Tecnologia de ponta!" },
    { name: "Solange Costa", time: "Há 1 semana", rating: 5, text: "Consultoria em otimização de custos de TI gerou economia significativa. Muito satisfeitos!" },
    { name: "Edson Ferreira", time: "Há 5 dias", rating: 5, text: "Suporte técnico resolve problemas complexos com facilidade. Expertise impressionante!" },
    { name: "Regina Pinto", time: "Há 3 semanas", rating: 5, text: "Implementação de sistema de gestão documental eletrônico. Organização total!" },
    { name: "Marcos André", time: "Há 2 dias", rating: 5, text: "Migração para Microsoft Azure foi tranquila. Infraestrutura cloud perfeitamente configurada!" },
    { name: "Neusa Santos", time: "Há 1 semana", rating: 5, text: "Treinamento em ferramentas colaborativas aumentou produtividade. Equipe trabalha melhor!" },
    { name: "Oswaldo Lima", time: "Há 4 dias", rating: 5, text: "Implementação de redundância em sistemas críticos. Alta disponibilidade garantida!" },
    { name: "Terezinha Souza", time: "Há 2 semanas", rating: 5, text: "Suporte preventivo evita surpresas desagradáveis. Manutenção sempre em dia!" },
    { name: "Valter Ramos", time: "Há 1 mês", rating: 5, text: "Consultoria estratégica em TI alinhada com objetivos do negócio. Parceria verdadeira!" }
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
