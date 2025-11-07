import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-dealership.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToConfigurator = () => {
    const element = document.getElementById('configurator');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSeeDemo = () => {
    navigate('/contact');
  };

  const scrollToWhiteLabel = () => {
    const element = document.getElementById('whitelabel');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 sm:py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight px-4">
            Own the Future of Your Dealership —{" "}
            <span className="block mt-2 text-accent">Secure, Offline, and 100% Yours.</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Meet <span className="text-accent font-semibold">Genesis v3</span> — the dealer-owned AI infrastructure that automates sales, service, and profit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={scrollToConfigurator}>
              <Building2 className="mr-2 h-5 w-5" />
              Build Your System
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto" onClick={handleSeeDemo}>
              <Play className="mr-2 h-5 w-5" />
              See Full Demo
            </Button>
          </div>

          <div className="pt-4">
            <Button variant="ghost" size="lg" className="text-accent hover:text-accent/80" onClick={scrollToWhiteLabel}>
              <ArrowRight className="mr-2 h-4 w-4" />
              Partner & White-Label Program
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-16 sm:h-16 border-l-2 border-t-2 border-accent/30 z-20" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-8 h-8 sm:w-16 sm:h-16 border-r-2 border-b-2 border-accent/30 z-20" />
    </section>
  );
};
