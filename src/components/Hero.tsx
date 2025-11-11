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
    email: "",
    telefone: "",
    cargo: "",
    desafioTI: "",
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
      case "desafioTI":
        if (!value) error = "Descreva seu desafio de TI";
        else if (typeof value === "string" && value.length < 10) error = "Descreva melhor seu desafio (mín. 10 caracteres)";
        break;
      case "melhorHorario":
        if (!value) error = "Selecione o melhor horário";
        break;
      case "preferenciaContato":
        if (!value) error = "Selecione a preferência de contato";
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
          cargo: formData.cargo,
          challenges: formData.desafioTI,
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
            <div className="lg:hidden flex justify-center animate-fade-in relative -mb-4">
              <img 
                src={professionalPhoto} 
                alt="Especialista Megabitz" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(107,228,228,0.4)]"
              />
              <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-2 sm:w-28 sm:h-2.5 bg-black/50 rounded-full blur-md opacity-70" />
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="block text-white mb-1">Um Time Inteiro</span>
              <span className="block text-white mb-1"><span className="gradient-text">Megabitz</span> assumindo</span>
              <span className="block text-white">a gestão da sua TI.</span>
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
                    Tranquilidade total para o seu negócio — especialistas que aceleram projetos, resolvem desafios e apagam incêndios, sem burocracia.
                  </p>
                </div>
                
                {/* Botão no desktop */}
                <div className="hidden lg:flex animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=552136497932&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-[15px] font-semibold rounded-xl outline-none transition-all duration-300 uppercase border-2 border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(107,228,228,0.3)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar conversa
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
                className="relative inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-[15px] font-semibold rounded-xl outline-none transition-all duration-300 uppercase border-2 border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(107,228,228,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar conversa
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

              {/* Nome - full width */}
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

              {/* E-mail e Telefone - lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              {/* Cargo e Desafio TI - lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cargo" className="text-white">Cargo (opcional)</Label>
                  <Input 
                    id="cargo" 
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    placeholder="Seu cargo"
                    className="bg-background/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desafioTI" className="text-white">Descreva seu desafio de TI *</Label>
                  <Textarea 
                    id="desafioTI" 
                    name="desafioTI"
                    value={formData.desafioTI}
                    onChange={handleChange}
                    onBlur={() => handleBlur("desafioTI")}
                    placeholder="Descreva brevemente..."
                    required
                    rows={1}
                    className={`bg-background/50 border-primary/20 resize-none ${errors.desafioTI && touched.desafioTI ? 'border-red-500' : ''}`}
                  />
                  {errors.desafioTI && touched.desafioTI && (
                    <p className="text-red-500 text-xs mt-1">{errors.desafioTI}</p>
                  )}
                </div>
              </div>

              {/* Melhor horário e Preferência de contato - lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="melhorHorario" className="text-white">Melhor horário *</Label>
                  <Select value={formData.melhorHorario} onValueChange={(value) => handleSelectChange("melhorHorario", value)}>
                    <SelectTrigger 
                      className={`bg-background/50 border-primary/20 text-white ${errors.melhorHorario && touched.melhorHorario ? 'border-red-500' : ''}`}
                      onBlur={() => handleBlur("melhorHorario")}
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/20 z-50">
                      <SelectItem value="manha">Manhã (8h - 12h)</SelectItem>
                      <SelectItem value="tarde">Tarde (12h - 18h)</SelectItem>
                      <SelectItem value="noite">Noite (18h - 20h)</SelectItem>
                      <SelectItem value="qualquer">Qualquer horário</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.melhorHorario && touched.melhorHorario && (
                    <p className="text-red-500 text-xs mt-1">{errors.melhorHorario}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferenciaContato" className="text-white">Preferência de contato *</Label>
                  <Select value={formData.preferenciaContato} onValueChange={(value) => handleSelectChange("preferenciaContato", value)}>
                    <SelectTrigger 
                      className={`bg-background/50 border-primary/20 text-white ${errors.preferenciaContato && touched.preferenciaContato ? 'border-red-500' : ''}`}
                      onBlur={() => handleBlur("preferenciaContato")}
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/20 z-50">
                      <SelectItem value="telefone">Telefone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">E-mail</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferenciaContato && touched.preferenciaContato && (
                    <p className="text-red-500 text-xs mt-1">{errors.preferenciaContato}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="aceitaPolitica"
                  checked={formData.aceitaPolitica}
                  onCheckedChange={handleCheckboxChange}
                  className={`bg-background/50 border-primary/20 ${errors.aceitaPolitica && touched.aceitaPolitica ? 'border-red-500' : ''}`}
                />
                <Label htmlFor="aceitaPolitica" className="text-xs text-white/80 leading-tight cursor-pointer">
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
                {isSubmitting ? "Enviando..." : "Falar com consultor"}
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
