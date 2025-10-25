import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Política de <span className="text-primary">Privacidade</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-foreground/90 leading-relaxed">
                Esta Política de Privacidade descreve como a MontBros coleta, usa e protege suas informações pessoais.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Coleta de Informações</h2>
              <p className="text-foreground/80">
                Coletamos apenas as informações necessárias para oferecer nossos serviços e melhorar a experiência do usuário.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Uso de Informações</h2>
              <p className="text-foreground/80">
                As informações coletadas são utilizadas exclusivamente para melhorar nossos produtos e serviços.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Proteção de Dados</h2>
              <p className="text-foreground/80">
                Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Contato</h2>
              <p className="text-foreground/80">
                Para questões sobre privacidade, entre em contato através da página de contato.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
