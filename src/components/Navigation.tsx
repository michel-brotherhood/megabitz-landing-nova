import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import megabitzLogo from "@/assets/megabitz-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Recursos", href: "#recursos" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <img 
                src={megabitzLogo} 
                alt="Megabitz Tecnologia" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-primary transition-all duration-300 tracking-wider uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Empty space for layout balance */}
            <div className="hidden md:block w-20" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 relative z-[60]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[55] bg-background md:hidden"
          style={{ overflow: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="flex flex-col gap-8 w-full max-w-sm">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors text-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/552136497932?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button variant="hero" size="lg" className="w-full text-lg">
                  Falar com Especialista
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
