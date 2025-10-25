import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Brand */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-bold">
              Mont<span className="text-primary">Bros</span>
            </h3>
          </div> */}

          {/* Language Switcher */}
          <div className="flex justify-start">
            <LanguageSwitcher />
          </div>

          {/* Divider */}
          {/* <div className="w-full h-px bg-border" /> */}

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MontBros. {t("footer.rights")}</p>
            
            <p className="flex items-center gap-2">
              {t("footer.madeWith")} <Heart className="w-4 h-4 text-primary fill-current" /> {t("footer.byBrothers")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
