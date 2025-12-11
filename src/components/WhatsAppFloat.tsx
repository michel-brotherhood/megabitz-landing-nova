import whatsappIcon from "@/assets/whatsapp-icon.webp";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=552136497932&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleWhatsAppClick}
            data-gtm-element="whatsapp-cta"
            data-gtm-location="floating-button"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-fade-in animate-gentle-pulse"
            aria-label="Falar no WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full group-hover:scale-110 transition-transform" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground">
          <p>Fale conosco</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppFloat;
