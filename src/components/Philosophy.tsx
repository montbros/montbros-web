import { Lightbulb, Target, Users, Sparkles } from "lucide-react";

const Philosophy = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Design com Propósito",
      description: "Cada elemento visual tem uma razão de existir. Nada é aleatório.",
    },
    {
      icon: Target,
      title: "Foco em Nichos",
      description: "Preferimos criar para comunidades específicas que amamos e entendemos.",
    },
    {
      icon: Sparkles,
      title: "Tecnologia com Sentimento",
      description: "Código bem escrito e experiências que emocionam andam juntos.",
    },
    {
      icon: Users,
      title: "Proximidade com Usuários",
      description: "Ouvimos, aprendemos e evoluímos com feedback real de quem usa nossos apps.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Nossa <span className="text-primary">Filosofia</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Os valores que guiam cada linha de código e cada pixel desenhado
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-card hover:border-primary/50 transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-smooth">
                        {value.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="text-center mt-12 md:mt-16 animate-fade-in">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 italic max-w-3xl mx-auto">
              "Pequeno o suficiente para cuidar de cada detalhe. Grande o suficiente para fazer diferença."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
