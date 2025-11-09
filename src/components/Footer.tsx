import { Shield, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    produto: [
      { label: "Recursos", href: "#" },
      { label: "Segurança", href: "#" },
      { label: "Preços", href: "#" },
      { label: "Casos de Uso", href: "#" }
    ],
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" }
    ],
    suporte: [
      { label: "Documentação", href: "#" },
      { label: "Central de Ajuda", href: "#" },
      { label: "Status", href: "#" },
      { label: "API", href: "#" }
    ]
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg glow-text">Megabitz Tecnologia</span>
            </div>
            <p className="text-sm text-muted-foreground">
              TI sem drama. Segurança de verdade para sua empresa.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium">CNPJ: 10.610.465/0001-18</p>
              <p>Rua Barão de São Francisco, 373</p>
              <p>Sala 312 – Vila Isabel, Rio de Janeiro</p>
              <p className="text-primary">comercial@megabitz.com.br</p>
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
              <a 
                href="https://www.google.com/search?q=megabitz+tecnologia&sourceid=chrome&ie=UTF-8#lrd=0x997e75742ac2a9:0x7eadf9bd117d7cb,1,,,," 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                Avaliações
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
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

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Megabitz Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
