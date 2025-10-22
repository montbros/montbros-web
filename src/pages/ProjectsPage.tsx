import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import tastedApp from "@/assets/tasted-app.png";
import jogatinaApp from "@/assets/jogatina-app.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Tasted: Drink Notes",
      description: "App de anotações sensoriais para drinks.",
      image: tastedApp,
      link: "/projects/tasted",
    },
    {
      title: "Jogatina",
      description: "App para organizar noites de board games.",
      image: jogatinaApp,
      link: "/projects/jogatina",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
              {/* Header */}
              <div className="text-center space-y-4 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Projects
                </h1>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
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
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
