import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. O que são Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência e entender como você interage com nosso conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Tipos de Cookies que Usamos</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Cookies Essenciais</h3>
            <p className="text-muted-foreground">
              Necessários para o funcionamento básico do site, incluindo navegação e acesso a áreas seguras.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Cookies de Desempenho</h3>
            <p className="text-muted-foreground">
              Coletam informações sobre como os visitantes usam nosso site, ajudando-nos a melhorar seu funcionamento.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Cookies de Funcionalidade</h3>
            <p className="text-muted-foreground">
              Permitem que o site se lembre de suas escolhas e forneça recursos aprimorados e personalizados.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Cookies de Marketing</h3>
            <p className="text-muted-foreground">
              Usados para rastrear visitantes em sites para exibir anúncios relevantes e envolventes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Como Gerenciar Cookies</h2>
            <p className="text-muted-foreground">
              Você pode controlar e gerenciar cookies através das configurações do seu navegador. Note que a remoção ou bloqueio de cookies pode afetar sua experiência no site e algumas funcionalidades podem não estar disponíveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies de Terceiros</h2>
            <p className="text-muted-foreground">
              Alguns cookies podem ser colocados por serviços de terceiros que aparecem em nossas páginas, como ferramentas de análise e mídias sociais. Não temos controle sobre esses cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Atualizações desta Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como usamos cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:<br />
              E-mail: comercial@megabitz.com.br<br />
              Telefone: (21) 3649-7932
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
