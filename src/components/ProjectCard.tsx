import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  comingSoon?: boolean;
}

const ProjectCard = ({ title, description, image, link, comingSoon }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-smooth animate-scale-in">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={`${title} app icon`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        {comingSoon && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">Em Breve</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>

        {link && (
          <Button
            asChild
            variant={comingSoon ? "outline" : "default"}
            className={comingSoon ? "" : "w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth group/btn"}
          >
            <Link to={link} className="flex items-center justify-center gap-2">
              {comingSoon ? "Em Breve" : "Saiba mais"}
              {!comingSoon && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
