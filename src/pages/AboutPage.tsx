import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Code } from "lucide-react";

const AboutPage = () => {
  const values = ["Criatividade", "Simplicidade", "Emoção"];
  
  const timeline = [
    { year: "2024", event: "Fundação da MontBros" },
    { year: "2024", event: "Primeiro app publicado: Tasted" },
    { year: "2025", event: "Em desenvolvimento: Jogatina" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Dois irmãos. Um estúdio.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Um designer e um desenvolvedor criando apps iOS com propósito e alma autoral.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-3 mb-8">
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

              {/* Timeline */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Jornada</h2>
                </div>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{item.year}</span>
                        </div>
                      </div>
                      <div className="pt-3">
                        <p className="text-lg text-foreground/80">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-3 mb-8">
                  <Code className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Missão</h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed text-center">
                  Criar apps com design e tecnologia com alma. Acreditamos que a melhor tecnologia é aquela que você
                  não percebe — ela simplesmente funciona, encanta e se torna parte do seu dia a dia.
                </p>
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
