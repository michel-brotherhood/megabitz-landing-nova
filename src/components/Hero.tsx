import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
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

Gostaria de falar com um consultor sobre os serviços da Megabitz.`;

    const whatsappUrl = `https://wa.me/552136497932?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será conectado com um consultor.",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="block text-white mb-3 sm:mb-4">Seu parceiro de</span>
              <span className="block text-white">Outsourcing de TI no Rio</span>
            </h1>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Times dedicados que aceleram seus projetos e apagam incêndios.
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6 animate-fade-in flex justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/552136497932"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
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
                Falar com um especialista
                <span 
                  className="absolute top-[120%] left-0 h-full w-full opacity-70 pointer-events-none"
                  style={{
                    backgroundColor: 'rgba(107, 228, 228, 0.6)',
                    filter: 'blur(2em)',
                    transform: 'perspective(1.5em) rotateX(35deg) scale(1, .6)'
                  }}
                />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-card via-card/90 to-card border border-primary/20 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 card-glow">
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Solicite uma conversa com Consultor
                </h3>
                <p className="text-sm text-white/70">
                  Preencha o formulário e fale com um especialista
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white">Nome *</Label>
                <Input 
                  id="nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  onBlur={() => handleBlur("nome")}
                  placeholder="Seu nome completo"
                  required
                  className={`bg-background/50 border-primary/20 ${errors.nome && touched.nome ? 'border-red-500' : ''}`}
                />
                {errors.nome && touched.nome && (
                  <p className="text-red-500 text-xs mt-1">{errors.nome}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">E-mail *</Label>
                <Input 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className={`bg-background/50 border-primary/20 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-white">Telefone/WhatsApp *</Label>
                <Input 
                  id="telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("telefone")}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                  maxLength={15}
                  className={`bg-background/50 border-primary/20 ${errors.telefone && touched.telefone ? 'border-red-500' : ''}`}
                />
                {errors.telefone && touched.telefone && (
                  <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-white">Nome da Empresa *</Label>
                <Input 
                  id="empresa" 
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  onBlur={() => handleBlur("empresa")}
                  placeholder="Nome da empresa"
                  required
                  className={`bg-background/50 border-primary/20 ${errors.empresa && touched.empresa ? 'border-red-500' : ''}`}
                />
                {errors.empresa && touched.empresa && (
                  <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tamanhoEmpresa" className="text-white">Tamanho da Empresa *</Label>
                <Select value={formData.tamanhoEmpresa} onValueChange={handleSelectChange}>
                  <SelectTrigger 
                    className={`bg-background/50 border-primary/20 text-white ${errors.tamanhoEmpresa && touched.tamanhoEmpresa ? 'border-red-500' : ''}`}
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
                <Label htmlFor="desafio" className="text-white">Qual seu problema/desafio? *</Label>
                <Textarea 
                  id="desafio" 
                  name="desafio"
                  value={formData.desafio}
                  onChange={handleChange}
                  onBlur={() => handleBlur("desafio")}
                  placeholder="Descreva seu desafio ou problema de TI..."
                  required
                  rows={4}
                  className={`bg-background/50 border-primary/20 ${errors.desafio && touched.desafio ? 'border-red-500' : ''}`}
                />
                {errors.desafio && touched.desafio && (
                  <p className="text-red-500 text-xs mt-1">{errors.desafio}</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="aceitaPolitica"
                  checked={formData.aceitaPolitica}
                  onCheckedChange={handleCheckboxChange}
                  className={`mt-1 ${errors.aceitaPolitica && touched.aceitaPolitica ? 'border-red-500' : ''}`}
                />
                <Label htmlFor="aceitaPolitica" className="text-xs text-white/80 leading-tight cursor-pointer">
                  Aceito a <a href="/privacidade" className="text-primary hover:underline" target="_blank">política de privacidade</a> e autorizo o contato da Megabitz Tecnologia
                </Label>
              </div>
              {errors.aceitaPolitica && touched.aceitaPolitica && (
                <p className="text-red-500 text-xs mt-1">{errors.aceitaPolitica}</p>
              )}

              <button 
                type="submit"
                className="relative w-full px-8 py-3 text-sm font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
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
        
        {/* Social Media Icons - Bottom Right */}
        <div className="absolute bottom-8 right-4 sm:right-8 flex gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="https://www.instagram.com/megabitztecnologia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://www.facebook.com/megabitztecnologia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://www.google.com/search?q=megabitz+tecnologia&sourceid=chrome&ie=UTF-8#lrd=0x997e75742ac2a9:0x7eadf9bd117d7cb,1,,,," target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/552136497932" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </section>
  );
};

export default Hero;
