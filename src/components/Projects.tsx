import ProjectCard from "./ProjectCard";
import tastedApp from "@/assets/tasted-app.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t("projects.tasted.title"),
      description: t("projects.tasted.description"),
      details: t("projects.tasted.details"),
      image: tastedApp,
      link: "/projects/tasted",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("projects.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
                {projects.map((project) => (
                  <div key={project.title} className="justify-self-center w-full max-w-lg">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;