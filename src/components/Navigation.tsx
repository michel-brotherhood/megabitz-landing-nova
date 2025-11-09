import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import megabitzLogo from "@/assets/megabitz-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Recursos", href: "#recursos" },
    { label: "Contato", href: "#contato" }
  ];

  return (
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
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-full">
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
