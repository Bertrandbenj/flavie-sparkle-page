import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healing.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="hero-section relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl mb-6">
          Flavie Arnou
        </h1>
        
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-light text-primary">
            Le toucher Qi écoute
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-medium">
            Le soin par l'amour
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-primary px-8 py-6 text-lg">
            Prendre rendez-vous
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-background/80 backdrop-blur-sm">
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;