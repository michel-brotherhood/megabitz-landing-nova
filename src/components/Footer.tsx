import { Instagram, Facebook, Phone } from "lucide-react";
import megabitzLogo from "@/assets/megabitz-logo-white.png";
import googleStars from "@/assets/google-5-stars.png";

const Footer = () => {
  const footerLinks = {
    servicos: [
      { 
        label: "Suporte Técnico", 
        href: "https://wa.me/552136497932?text=Olá,%20tenho%20interesse%20em%20Suporte%20Técnico" 
      },
      { 
        label: "Segurança da Informação", 
        href: "https://wa.me/552136497932?text=Olá,%20tenho%20interesse%20em%20Segurança%20da%20Informação" 
      },
      { 
        label: "Infraestrutura de TI", 
        href: "https://wa.me/552136497932?text=Olá,%20tenho%20interesse%20em%20Infraestrutura%20de%20TI" 
      },
      { 
        label: "Consultoria", 
        href: "https://wa.me/552136497932?text=Olá,%20tenho%20interesse%20em%20Consultoria" 
      }
    ],
    empresa: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Recursos", href: "#recursos" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "FAQ", href: "#faq" }
    ]
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img 
              src={megabitzLogo} 
              alt="Megabitz Tecnologia" 
              className="h-12 w-auto md:-ml-2"
            />
            <p className="text-sm text-muted-foreground">
              TI sem drama. Segurança de verdade para sua empresa.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground w-full">
              <p className="font-medium">CNPJ: 10.610.465/0001-18</p>
              <p>Rua Barão de São Francisco, 373</p>
              <p>Sala 312 – Vila Isabel, Rio de Janeiro</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/megabitztecnologia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/megabitztecnologia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:comercial@megabitz.com.br"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <span>comercial@megabitz.com.br</span>
              </a>
              <a 
                href="tel:+552136497932"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <Phone className="h-4 w-4" />
                <span>(21) 3649-7932</span>
              </a>
            </div>
            <div className="mt-6">
              <a 
                href="https://www.google.com/search?q=megabitz+tecnologia&sourceid=chrome&ie=UTF-8#lrd=0x997e75742ac2a9:0x7eadf9bd117d7cb,1,,,," 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={googleStars} 
                  alt="Google 5 Estrelas - 86 avaliações" 
                  className="h-20 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Megabitz Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos
              </a>
              <a href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
