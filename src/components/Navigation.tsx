import { Menu, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import megabitzLogo from "@/assets/megabitz-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para efeito glass
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Detectar seção ativa ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#sobre', '#beneficios', '#diferenciais', '#contato'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.querySelector(section);
        
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave ao clicar nos links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura do menu fixo
      const elementPosition = (element as HTMLElement).offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "A Megabitz", href: "#sobre" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      }`}>
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-semibold hover:text-primary transition-all duration-300 tracking-wider uppercase relative ${
                    activeSection === item.href ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-fade-in" />
                  )}
                </a>
              ))}
            </div>

            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <a 
                href="https://www.instagram.com/megabitztecnologia/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center border border-white text-white hover:bg-white hover:text-background transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/megabitztecnologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center border border-white text-white hover:bg-white hover:text-background transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.google.com/search?q=megabitz+tecnologia&sourceid=chrome&ie=UTF-8#lrd=0x997e75742ac2a9:0x7eadf9bd117d7cb,1,,,," 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center border border-white text-white hover:bg-white hover:text-background transition-all duration-300"
                aria-label="Google"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>

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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors text-center py-3"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/552136497932?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block w-full text-center px-8 py-4 text-base font-bold rounded-2xl outline-none transition-all duration-300 uppercase cursor-pointer"
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
                onClick={() => setIsOpen(false)}
              >
                Falar com Especialista
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
      )}
    </>
  );
};

export default Navigation;
