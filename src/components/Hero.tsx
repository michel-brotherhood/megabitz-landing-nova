import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroVideo from "@/assets/hero-video.mp4";
import professionalPhoto from "@/assets/professional-photo.webp";

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
          company: formData.empresa,
          employees: formData.tamanhoEmpresa,
          challenges: formData.desafio,
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
          <div className="space-y-2 sm:space-y-3 lg:space-y-6 text-center lg:text-left">
            {/* Mobile - Foto acima do título */}
            <div className="lg:hidden flex justify-center animate-fade-in relative mb-1">
              <img 
                src={professionalPhoto} 
                alt="Especialista Megabitz" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(107,228,228,0.4)]"
              />
              <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-2 sm:w-28 sm:h-2.5 bg-black/50 rounded-full blur-md opacity-70" />
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="block text-white mb-1">Seu parceiro de</span>
              <span className="block text-white mb-1">Outsourcing de TI</span>
              <span className="block text-white">no Rio</span>
            </h1>
            
            {/* Desktop - Foto junto ao texto descritivo e botão */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="lg:flex lg:flex-col lg:gap-1 lg:items-start">
                <div className="lg:flex lg:items-center lg:gap-4">
                  <div className="hidden lg:block relative flex-shrink-0">
                    <img 
                      src={professionalPhoto} 
                      alt="Especialista Megabitz" 
                      className="w-40 h-40 lg:w-48 lg:h-48 object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(107,228,228,0.4)]"
                    />
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-28 h-2.5 bg-black/50 rounded-full blur-md opacity-70" />
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Times dedicados com Especialistas que resolvem seus desafios de TI, que aceleram seus projetos e apagam incêndios.
                  </p>
                </div>
                
                {/* Botão no desktop */}
                <div className="hidden lg:flex animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=552136497932&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
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
                    <MessageCircle className="w-5 h-5" />
                    Dúvidas? Vamos Conversar
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
            </div>
            
            {/* Botão no mobile */}
            <div className="pt-4 sm:pt-6 lg:hidden animate-fade-in flex justify-center" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://api.whatsapp.com/send/?phone=552136497932&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-[15px] font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
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
                <MessageCircle className="w-5 h-5" />
                Dúvidas? Vamos Conversar
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="flex items-start gap-2">
                <Checkbox 
                  id="aceitaPolitica"
                  checked={formData.aceitaPolitica}
                  onCheckedChange={handleCheckboxChange}
                  className={`mt-0.5 ${errors.aceitaPolitica && touched.aceitaPolitica ? 'border-red-500' : ''}`}
                />
                <div className="flex-1">
                  <Label htmlFor="aceitaPolitica" className="text-xs text-white/80 leading-tight cursor-pointer">
                    Aceito a <a href="/privacidade" className="text-primary hover:underline" onClick={(e) => { e.preventDefault(); window.open('/privacidade', '_blank'); }}>política de privacidade</a> e autorizo o contato da Megabitz Tecnologia
                  </Label>
                  {errors.aceitaPolitica && touched.aceitaPolitica && (
                    <p className="text-red-500 text-xs mt-1">{errors.aceitaPolitica}</p>
                  )}
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative w-full px-8 py-3 text-sm font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
};

export default Hero;
