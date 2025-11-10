import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    colaboradores: "",
    computadores: "",
    telefone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e telefone.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message with form data
    const message = `Olá! Meu nome é ${formData.nome}.
${formData.empresa ? `Empresa: ${formData.empresa}` : ''}
${formData.colaboradores ? `Número de colaboradores: ${formData.colaboradores}` : ''}
${formData.computadores ? `Número de computadores: ${formData.computadores}` : ''}
Telefone: ${formData.telefone}
Email: ${formData.email}

Gostaria de falar com um especialista sobre os serviços da Megabitz.`;

    const whatsappUrl = `https://wa.me/552136497932?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success toast
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será conectado com um especialista.",
    });

    // Reset form
    setFormData({
      nome: "",
      empresa: "",
      colaboradores: "",
      computadores: "",
      telefone: "",
      email: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="glow-text">Precisa parar de</span>
              <br />
              <span className="gradient-text">apagar incêndio com TI?</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Rodamos um diagnóstico rápido e sem custo para mapear riscos, 
              custo total de propriedade e ganhos imediatos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-2xl p-8 space-y-6 card-glow">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input 
                  id="nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input 
                  id="empresa" 
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="colaboradores">Nº de colaboradores</Label>
                <Input 
                  id="colaboradores" 
                  name="colaboradores"
                  value={formData.colaboradores}
                  onChange={handleChange}
                  type="number"
                  placeholder="Ex: 50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="computadores">Nº de computadores</Label>
                <Input 
                  id="computadores" 
                  name="computadores"
                  value={formData.computadores}
                  onChange={handleChange}
                  type="number"
                  placeholder="Ex: 40"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input 
                  id="telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="relative w-full px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
              style={{
                color: '#6BE4E4',
                backgroundColor: 'rgb(30, 80, 80)',
                border: '.25em solid #6BE4E4',
                boxShadow: '0 0 1em .25em #6BE4E4, 0 0 4em 1em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4',
                textShadow: '0 0 .5em #6BE4E4'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgb(30, 80, 80)';
                e.currentTarget.style.backgroundColor = '#6BE4E4';
                e.currentTarget.style.boxShadow = '0 0 1em .25em #6BE4E4, 0 0 4em 2em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6BE4E4';
                e.currentTarget.style.backgroundColor = 'rgb(30, 80, 80)';
                e.currentTarget.style.boxShadow = '0 0 1em .25em #6BE4E4, 0 0 4em 1em rgba(107, 228, 228, 0.6), inset 0 0 .75em .25em #6BE4E4';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0.6em .25em #6BE4E4, 0 0 2.5em 2em rgba(107, 228, 228, 0.6), inset 0 0 .5em .25em #6BE4E4';
              }}
            >
              Falar agora com um especialista
              <span 
                className="absolute top-[120%] left-0 h-full w-full opacity-70 pointer-events-none"
                style={{
                  backgroundColor: 'rgba(107, 228, 228, 0.6)',
                  filter: 'blur(2em)',
                  transform: 'perspective(1.5em) rotateX(35deg) scale(1, .6)'
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
