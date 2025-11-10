import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground">
              A Megabitz Tecnologia coleta informações fornecidas diretamente por você, como nome, e-mail, telefone e empresa quando você preenche nossos formulários de contato ou solicita nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-muted-foreground">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Responder às suas solicitações e fornecer suporte</li>
              <li>Enviar informações sobre nossos serviços</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Proteção de Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground">
              Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais a qualquer momento. Entre em contato conosco através do e-mail comercial@megabitz.com.br.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
            <p className="text-muted-foreground">
              Para questões sobre esta Política de Privacidade, entre em contato:<br />
              E-mail: comercial@megabitz.com.br<br />
              Telefone: (21) 3649-7932<br />
              Endereço: Rua Barão de São Francisco, 373 - Sala 312, Vila Isabel, Rio de Janeiro
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
