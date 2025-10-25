import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TosPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Termos de <span className="text-primary">Serviço</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-foreground/90 leading-relaxed">
                Ao utilizar os aplicativos e serviços da MontBros, você concorda com os seguintes termos de serviço.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Aceitação dos Termos</h2>
              <p className="text-foreground/80">
                Ao acessar e usar nossos aplicativos, você aceita estar vinculado a estes termos de serviço.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Uso dos Serviços</h2>
              <p className="text-foreground/80">
                Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Propriedade Intelectual</h2>
              <p className="text-foreground/80">
                Todo o conteúdo dos aplicativos MontBros é protegido por direitos autorais e propriedade intelectual.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Modificações</h2>
              <p className="text-foreground/80">
                Reservamos o direito de modificar estes termos a qualquer momento. O uso continuado após modificações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Contato</h2>
              <p className="text-foreground/80">
                Para dúvidas sobre estes termos, entre em contato através da página de contato.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TosPage;
