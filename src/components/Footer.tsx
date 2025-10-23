import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Brand */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">
              Mont<span className="text-primary">Bros</span>
            </h3>
            <p className="text-sm text-muted-foreground">Small Studio, Big Soul.</p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MontBros Studio. Todos os direitos reservados.</p>
            
            <p className="flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-primary fill-current" /> por dois irmãos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
