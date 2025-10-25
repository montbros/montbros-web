import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import PrivacyEmbed from "./PrivacyEmbed";
import CookiesEmbed from "./CookiesEmbed";

const TastedPrivacyPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Tasted: <span className="text-primary">{t("common.privacy")}</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-foreground/90 leading-relaxed">
                <PrivacyEmbed />
                <CookiesEmbed />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TastedPrivacyPage;
