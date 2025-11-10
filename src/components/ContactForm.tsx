import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    tamanhoEmpresa: "",
    telefone: "",
    email: "",
    desafio: "",
    aceitaPolitica: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
      case "empresa":
        if (!value) error = "Nome da empresa é obrigatório";
        break;
      case "tamanhoEmpresa":
        if (!value) error = "Selecione o tamanho da empresa";
        break;
      case "desafio":
        if (!value) error = "Descreva seu desafio";
        else if (typeof value === "string" && value.length < 10) error = "Descreva melhor seu desafio (mín. 10 caracteres)";
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

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, tamanhoEmpresa: value });
    if (touched.tamanhoEmpresa) {
      const error = validateField("tamanhoEmpresa", value);
      setErrors({ ...errors, tamanhoEmpresa: error });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, aceitaPolitica: checked });
    if (touched.aceitaPolitica) {
      const error = validateField("aceitaPolitica", checked);
      setErrors({ ...errors, aceitaPolitica: error });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.nome}.
Empresa: ${formData.empresa}
Tamanho da empresa: ${formData.tamanhoEmpresa}
Telefone: ${formData.telefone}
Email: ${formData.email}
Desafio: ${formData.desafio}

Para: smtp@idlab.art.br

Gostaria de falar com um especialista sobre os serviços da Megabitz.`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=552136497932&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será conectado com um especialista.",
    });

    // Reset form
    setFormData({
      nome: "",
      empresa: "",
      tamanhoEmpresa: "",
      telefone: "",
      email: "",
      desafio: "",
      aceitaPolitica: false
    });
    setErrors({});
    setTouched({});
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
              <Label htmlFor="empresa-contact">Nome da Empresa *</Label>
              <Input 
                id="empresa-contact" 
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                onBlur={() => handleBlur("empresa")}
                placeholder="Nome da empresa"
                required
                className={errors.empresa && touched.empresa ? 'border-red-500' : ''}
              />
              {errors.empresa && touched.empresa && (
                <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tamanhoEmpresa-contact">Tamanho da Empresa *</Label>
              <Select value={formData.tamanhoEmpresa} onValueChange={handleSelectChange}>
                <SelectTrigger 
                  className={errors.tamanhoEmpresa && touched.tamanhoEmpresa ? 'border-red-500' : ''}
                  onBlur={() => handleBlur("tamanhoEmpresa")}
                >
                  <SelectValue placeholder="Selecione o tamanho" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/20 z-50">
                  <SelectItem value="5-11">5-11 funcionários</SelectItem>
                  <SelectItem value="50-200">50-200 funcionários</SelectItem>
                  <SelectItem value="300-500">300-500 funcionários</SelectItem>
                  <SelectItem value="500+">Acima de 500 funcionários</SelectItem>
                </SelectContent>
              </Select>
              {errors.tamanhoEmpresa && touched.tamanhoEmpresa && (
                <p className="text-red-500 text-xs mt-1">{errors.tamanhoEmpresa}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="desafio-contact">Qual seu problema/desafio? *</Label>
              <Textarea 
                id="desafio-contact" 
                name="desafio"
                value={formData.desafio}
                onChange={handleChange}
                onBlur={() => handleBlur("desafio")}
                placeholder="Descreva seu desafio ou problema de TI..."
                required
                rows={4}
                className={errors.desafio && touched.desafio ? 'border-red-500' : ''}
              />
              {errors.desafio && touched.desafio && (
                <p className="text-red-500 text-xs mt-1">{errors.desafio}</p>
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
                Aceito a <a href="/privacidade" className="text-primary hover:underline" target="_blank">política de privacidade</a> e autorizo o contato da Megabitz Tecnologia
              </Label>
            </div>
            {errors.aceitaPolitica && touched.aceitaPolitica && (
              <p className="text-red-500 text-xs mt-1">{errors.aceitaPolitica}</p>
            )}

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
