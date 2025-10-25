import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
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

          <div className="pt-4 md:pt-8 flex justify-center">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth cursor-pointer"
            >
{t("common.viewProjects")}
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
