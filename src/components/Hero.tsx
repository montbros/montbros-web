import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            Mont<span className="text-primary">Bros</span>
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-light text-foreground/90 tracking-wide">
            Small Studio, Big Soul.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estúdio independente que cria apps iOS com design emocional e atenção obsessiva aos detalhes.
          </p>

          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            >
              <Link to="/contact">Fale com a MontBros</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
            >
              <Link to="/projects">Ver projetos</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
