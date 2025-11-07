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

    // In a real app, you would send this to your backend
    toast({
      title: "Proposta solicitada!",
      description: "Entraremos em contato em breve.",
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

            <Button type="submit" variant="hero" size="lg" className="w-full hover:scale-105 transition-all duration-300">
              Receber proposta em 2 minutos
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
