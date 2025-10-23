import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tastedApp from "@/assets/tasted-app.png";
import jogatinaApp from "@/assets/jogatina-app.png";

const Projects = () => {
  const projects = [
    {
      title: "Tasted: Drink Notes",
      description: "Jornal sensorial de drinks. Simples, elegante e pessoal.",
      image: tastedApp,
      link: "/projects/tasted",
    },
    {
      title: "Jogatina",
      description: "Companheiro para suas noites de board games com amigos.",
      image: jogatinaApp,
      link: "/projects/jogatina",
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

          {/* CTA */}
          <div className="text-center pt-8 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Explore os projetos
              </h3>
              <p className="text-foreground/70 mb-6">
                Produtos autorais, foco em experiência.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                <Link to="/projects">Abrir Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
