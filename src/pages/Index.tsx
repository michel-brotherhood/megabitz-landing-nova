import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechSpecs from "@/components/TechSpecs";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import SpaceGrotech from "@/components/SpaceGrotech";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import securityShield from "@/assets/security-shield.jpg";
import networkVisualization from "@/assets/network-visualization.jpg";
import mobileSecurity from "@/assets/mobile-security.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <TechSpecs />
      
      <FeatureSection
        badge="Proteção Total"
        title="Sua operação está segura contra ameaças digitais?"
        description="Nossa plataforma oferece monitoramento contínuo e proteção em tempo real contra todas as formas de ameaças cibernéticas. Com inteligência artificial avançada, detectamos e neutralizamos ataques antes que eles impactem seu negócio."
        features={[
          "Monitoramento 24/7 com IA avançada",
          "Firewall de última geração e anti-malware",
          "Sistema de detecção de intrusão em tempo real",
          "Resposta automática a incidentes críticos"
        ]}
        image={securityShield}
        imageAlt="Security Shield Protection"
      />
      
      <HowItWorks />
      
      <SpaceGrotech />
      
      <FeatureSection
        subtitle="Blindagem de Dados"
        title="Protegendo seus dados em cada etapa do processo"
        description="Implementamos criptografia de ponta a ponta e múltiplas camadas de segurança para garantir que seus dados críticos permaneçam privados e protegidos, independente de onde estejam armazenados ou transmitidos."
        features={[
          "Criptografia AES-256 de nível militar",
          "Backup automático com redundância geográfica",
          "Conformidade total com LGPD e GDPR",
          "Auditoria e logs detalhados de acesso"
        ]}
        image={networkVisualization}
        imageAlt="Network Security Infrastructure"
        reverse
      />
      
      <FeatureSection
        subtitle="Mobilidade Segura"
        title="Segurança de classe empresarial para todos os dispositivos"
        description="Proteja todos os dispositivos da sua organização com nossa solução completa de segurança mobile. Gerenciamento centralizado, políticas customizáveis e proteção avançada contra malware móvel."
        features={[
          "Gerenciamento centralizado de dispositivos",
          "Proteção contra malware e phishing mobile",
          "Políticas de segurança personalizadas por setor",
          "Limpeza remota e bloqueio de dispositivos"
        ]}
        image={mobileSecurity}
        imageAlt="Mobile Security Solution"
      />
      
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
