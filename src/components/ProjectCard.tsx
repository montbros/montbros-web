import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, details, image, link }: ProjectCardProps) => {
  const CardContent = () => (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-smooth animate-scale-in cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={`${title} app icon`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth p-[10%]"
        />
      </div>

      {/* Content */}
      <div className="pt-2 px-4 pb-4 md:pt-3 md:px-5 md:pb-5 space-y-3">
        <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <div className="space-y-1">
          <p className="text-sm text-foreground/70 leading-relaxed">
            {description}
          </p>

          <p className="text-xs text-foreground/60 leading-relaxed">
            {details}
          </p>
        </div>

      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default ProjectCard;
