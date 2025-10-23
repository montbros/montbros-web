import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import jogatinaApp from "@/assets/jogatina-app.png";

const JogatinaPage = () => {
  const features = [
    "Sessões com amigos e histórico",
    "Anotações rápidas e regras à mão",
    "Foco em experiência social",
  ];

  const screenshots = [jogatinaApp, jogatinaApp, jogatinaApp];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Jogatina
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Companheiro de mesa para suas noites de jogos.
              </p>
              <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold">Em Breve na App Store</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-lg text-foreground/80">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <Link to="/">Ver projetos</Link>
                  </Button>
                </div>

                <div className="relative">
                  <img
                    src={jogatinaApp}
                    alt="Jogatina app mockup"
                    className="w-full rounded-2xl shadow-elegant"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Carousel */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Screenshots
              </h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {screenshots.map((screenshot, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-4">
                        <img
                          src={screenshot}
                          alt={`Jogatina screenshot ${index + 1}`}
                          className="w-full rounded-2xl shadow-elegant"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Legal Links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex justify-center gap-8 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Política de Privacidade
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JogatinaPage;
