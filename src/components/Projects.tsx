import ProjectCard from "./ProjectCard";
import tastedApp from "@/assets/tasted-app.png";
import jogatinaApp from "@/assets/jogatina-app.png";

const Projects = () => {
  const projects = [
    {
      title: "Tasted: Drink Notes",
      description:
        "Um app elegante para registrar e explorar suas experiências com drinks. Capture sabores, aromas e momentos especiais com um design sofisticado e intuitivo.",
      image: tastedApp,
      appStoreUrl: "https://apps.apple.com",
    },
    {
      title: "Jogatina",
      description:
        "Organize suas noites de jogos de tabuleiro com estilo. Gerencie coleções, agende partidas e mantenha um histórico das suas aventuras lúdicas.",
      image: jogatinaApp,
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Nossos <span className="text-primary">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Apps criativos desenvolvidos com paixão, cuidado e atenção aos detalhes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
