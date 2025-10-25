import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import tastedApp from "@/assets/tasted-app.png";
import tasted_1 from "@/assets/tasted_1.png";
import tasted_2 from "@/assets/tasted_2.png";
import tasted_3 from "@/assets/tasted_3.png";
import tasted_4 from "@/assets/tasted_4.png";
import tasted_5 from "@/assets/tasted_5.png";

const TastedPage = () => {
  const { t } = useLanguage();
  const screenshots = [tasted_1, tasted_2, tasted_3, tasted_4, tasted_5];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <img
                src={tastedApp}
                alt="Tasted app icon"
                className="w-24 h-24 mx-auto rounded-2xl shadow-elegant"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {t("projects.tasted.title")}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t("projects.tasted.description")}
                <br/>
                <br/>
                {t("projects.tasted.details")}
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              >
                <a
                  href={t("projects.tasted.appStoreUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
{t("projects.tasted.appStore")}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Screenshots Carousel */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t("projects.tasted.screenshots")}
              </h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {screenshots.map((screenshot, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-4">
                        <img
                          src={screenshot}
                          alt={`${t("projects.tasted.screenshotAlt")} ${index + 1}`}
                          className="w-full rounded-2xl shadow-elegant"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Legal Links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex justify-center gap-8 text-sm">
              <a
                href="/projects/tasted/privacy"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {t("common.privacy")}
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/projects/tasted/tos"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {t("common.tos")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TastedPage;
