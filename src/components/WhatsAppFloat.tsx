import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=552136497932&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-fade-in"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
};

export default WhatsAppFloat;
