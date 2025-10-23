import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const AboutPage = () => {
  const values = ["Criatividade", "Simplicidade", "Emoção"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Sobre a MontBros
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Estúdio independente criando apps iOS com design emocional e identidade autoral.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Valores</h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-lg text-foreground/90"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
