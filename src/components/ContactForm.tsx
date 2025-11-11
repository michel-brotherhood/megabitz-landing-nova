import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    desafio: "",
    melhorHorario: "",
    preferenciaContato: "",
    aceitaPolitica: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string | boolean) => {
    let error = "";
    
    switch (name) {
      case "nome":
        if (!value) error = "Nome é obrigatório";
        else if (typeof value === "string" && value.length < 3) error = "Nome deve ter pelo menos 3 caracteres";
        break;
      case "email":
        if (!value) error = "E-mail é obrigatório";
        else if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "E-mail inválido";
        break;
      case "telefone":
        if (!value) error = "Telefone é obrigatório";
        else if (typeof value === "string" && value.replace(/\D/g, "").length < 10) error = "Telefone inválido";
        break;
      case "desafio":
        if (!value) error = "Descreva seu desafio";
        else if (typeof value === "string" && value.length < 10) error = "Descreva melhor seu desafio (mín. 10 caracteres)";
        break;
      case "melhorHorario":
        if (!value) error = "Selecione o melhor horário";
        break;
      case "preferenciaContato":
        if (!value) error = "Selecione sua preferência de contato";
        break;
      case "aceitaPolitica":
        if (!value) error = "Você deve aceitar a política de privacidade";
        break;
    }
    
    return error;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    
    if (name === "telefone") {
      newValue = formatPhone(value);
    }
    
    setFormData({ ...formData, [name]: newValue });
    
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, aceitaPolitica: checked });
    if (touched.aceitaPolitica) {
      const error = validateField("aceitaPolitica", checked);
      setErrors({ ...errors, aceitaPolitica: error });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    
    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    setTouched(newTouched);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.nome,
          email: formData.email,
          phone: formData.telefone,
          position: formData.cargo,
          challenges: formData.desafio,
          bestTime: formData.melhorHorario,
          contactPreference: formData.preferenciaContato,
        }
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Redirecionando...",
      });

      // Redirect to thank you page
      window.location.href = '/obrigado';
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 px-4 relative overflow-hidden">
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
            <div className="space-y-2">
              <Label htmlFor="nome-contact">Nome *</Label>
              <Input 
                id="nome-contact" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={() => handleBlur("nome")}
                placeholder="Seu nome completo"
                required
                className={errors.nome && touched.nome ? 'border-red-500' : ''}
              />
              {errors.nome && touched.nome && (
                <p className="text-red-500 text-xs mt-1">{errors.nome}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-contact">E-mail *</Label>
              <Input 
                id="email-contact" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                type="email"
                placeholder="seu@email.com"
                required
                className={errors.email && touched.email ? 'border-red-500' : ''}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone-contact">Telefone/WhatsApp *</Label>
              <Input 
                id="telefone-contact" 
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                onBlur={() => handleBlur("telefone")}
                type="tel"
                placeholder="(11) 99999-9999"
                required
                maxLength={15}
                className={errors.telefone && touched.telefone ? 'border-red-500' : ''}
              />
              {errors.telefone && touched.telefone && (
                <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo-contact">Cargo (opcional)</Label>
              <Input 
                id="cargo-contact" 
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                placeholder="Seu cargo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desafio-contact">Descreva seu desafio de TI *</Label>
              <Textarea 
                id="desafio-contact" 
                name="desafio"
                value={formData.desafio}
                onChange={handleChange}
                onBlur={() => handleBlur("desafio")}
                placeholder="Conte-nos sobre o desafio que você enfrenta..."
                required
                rows={4}
                className={errors.desafio && touched.desafio ? 'border-red-500' : ''}
              />
              {errors.desafio && touched.desafio && (
                <p className="text-red-500 text-xs mt-1">{errors.desafio}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="melhorHorario-contact">Melhor horário para contato *</Label>
              <Select value={formData.melhorHorario} onValueChange={(value) => handleSelectChange("melhorHorario", value)}>
                <SelectTrigger 
                  className={errors.melhorHorario && touched.melhorHorario ? 'border-red-500' : ''}
                  onBlur={() => handleBlur("melhorHorario")}
                >
                  <SelectValue placeholder="Selecione o melhor horário" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/20 z-50">
                  <SelectItem value="manha">Manhã (8h-12h)</SelectItem>
                  <SelectItem value="tarde">Tarde (12h-18h)</SelectItem>
                  <SelectItem value="noite">Noite (18h-20h)</SelectItem>
                </SelectContent>
              </Select>
              {errors.melhorHorario && touched.melhorHorario && (
                <p className="text-red-500 text-xs mt-1">{errors.melhorHorario}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Preferência de contato *</Label>
              <RadioGroup
                value={formData.preferenciaContato}
                onValueChange={(value) => handleSelectChange("preferenciaContato", value)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="telefone" id="telefone" />
                  <Label htmlFor="telefone" className="cursor-pointer">Telefone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="whatsapp" />
                  <Label htmlFor="whatsapp" className="cursor-pointer">WhatsApp</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-radio" />
                  <Label htmlFor="email-radio" className="cursor-pointer">E-mail</Label>
                </div>
              </RadioGroup>
              {errors.preferenciaContato && touched.preferenciaContato && (
                <p className="text-red-500 text-xs mt-1">{errors.preferenciaContato}</p>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="aceitaPolitica-contact"
                checked={formData.aceitaPolitica}
                onCheckedChange={handleCheckboxChange}
                className={errors.aceitaPolitica && touched.aceitaPolitica ? 'border-red-500' : ''}
              />
              <Label htmlFor="aceitaPolitica-contact" className="text-xs text-foreground/80 leading-tight cursor-pointer">
                Aceito a <a href="/privacidade" className="text-primary hover:underline" onClick={(e) => { e.preventDefault(); window.open('/privacidade', '_blank'); }}>política de privacidade</a> e autorizo o contato da Megabitz Tecnologia
              </Label>
            </div>
            {errors.aceitaPolitica && touched.aceitaPolitica && (
              <p className="text-red-500 text-xs mt-1">{errors.aceitaPolitica}</p>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative w-full px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
              {isSubmitting ? "Enviando..." : "Falar agora com um especialista"}
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
