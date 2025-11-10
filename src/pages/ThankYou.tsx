import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "https://api.whatsapp.com/send/?phone=552136497932&text=Olá,%20gostaria%20de%20agendar%20uma%20conversa&type=phone_number&app_absent=0";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
          <CheckCircle className="w-12 h-12 text-primary animate-pulse" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Obrigado!
          </h1>
          <p className="text-lg text-foreground/80">
            Recebemos sua mensagem com sucesso.
          </p>
          <p className="text-base text-foreground/70">
            Em breve um de nossos consultores entrará em contato.
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-sm text-foreground/60">
            Redirecionando para o WhatsApp em
          </p>
          <div className="text-6xl font-bold text-primary animate-pulse">
            {countdown}
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-primary hover:underline"
          >
            Voltar para o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
