import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para o site</span>
        </button>
        
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar os serviços da Megabitz Tecnologia, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="text-muted-foreground">
              A Megabitz Tecnologia oferece serviços de TI incluindo consultoria, suporte técnico, segurança da informação e infraestrutura tecnológica para empresas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso Aceitável</h2>
            <p className="text-muted-foreground">
              Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes Termos. Você não deve:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Usar os serviços de maneira que viole qualquer lei aplicável</li>
              <li>Tentar acessar sistemas ou dados não autorizados</li>
              <li>Interferir ou interromper os serviços</li>
              <li>Transmitir material malicioso ou prejudicial</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo, marcas registradas e propriedade intelectual relacionados aos nossos serviços são de propriedade da Megabitz Tecnologia e protegidos por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              A Megabitz Tecnologia não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modificações</h2>
            <p className="text-muted-foreground">
              Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Para questões sobre estes Termos de Uso, entre em contato:<br />
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

export default Terms;
