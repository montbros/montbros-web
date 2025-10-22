import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            Dois irmãos. Um designer e um desenvolvedor. Criando apps iOS com design emocional e alma.
          </p>

          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth group"
            >
              Ver Projetos
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-smooth" />
            </Button>

            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
            >
              Conheça o Estúdio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
