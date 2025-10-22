import { Heart, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sobre o <span className="text-primary">Estúdio</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Story */}
          <div className="prose prose-lg md:prose-xl prose-invert max-w-none animate-fade-in-up">
            <p className="text-foreground/90 leading-relaxed text-center">
              Dois irmãos. Um designer e um desenvolvedor criando apps iOS com propósito e alma autoral.
            </p>
          </div>

          {/* Values */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-semibold">Valores</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-foreground/90">Criatividade</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full text-foreground/90">Simplicidade</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full text-foreground/90">Emoção</span>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-secondary/50 border border-border rounded-xl p-6 md:p-8 hover:shadow-card transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">Design com Propósito</h4>
              </div>
              <p className="text-foreground/70">
                Cada pixel conta uma história. Cada interação deve ser memorável e significativa.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border rounded-xl p-6 md:p-8 hover:shadow-card transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">Tecnologia com Sentimento</h4>
              </div>
              <p className="text-foreground/70">
                Código bem escrito é código que respira. Construímos com cuidado, atenção e muito carinho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
