import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JogatinaPrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Jogatina: <span className="text-primary">Política de Privacidade</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-foreground/90 leading-relaxed">
                Esta Política de Privacidade descreve como o Jogatina coleta, usa e protege suas informações pessoais.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Coleta de Informações</h2>
              <p className="text-foreground/80">
                O Jogatina coleta apenas as informações necessárias para organizar suas sessões de jogos, incluindo nomes de jogos, jogadores e anotações.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Uso de Informações</h2>
              <p className="text-foreground/80">
                As informações coletadas são armazenadas localmente no seu dispositivo e utilizadas exclusivamente para melhorar sua experiência de jogo.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Proteção de Dados</h2>
              <p className="text-foreground/80">
                Seus dados são armazenados de forma segura em seu dispositivo. O Jogatina não compartilha suas informações com terceiros.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Contato</h2>
              <p className="text-foreground/80">
                Para questões sobre privacidade, entre em contato através da página de contato da MontBros.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JogatinaPrivacyPage;
