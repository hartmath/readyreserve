import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-dealership.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    // Scroll to contact section if on home page, otherwise navigate to contact page
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 100;
        const elementPosition = contactSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // If no contact section, scroll to footer
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  const handleVideoClick = () => {
    // Navigate to case studies page to see it in action
    navigate('/case-studies');
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
      <div className="container relative z-10 px-4 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            You're Not{" "}
            <span className="block">
              Short on Leads
            </span>
            <span className="block">Just Follow-Up</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-accent font-semibold">ReadyReserve™</span> works every lead—engaging, following up,
            <br className="hidden md:block" />
            and booking appointments, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" onClick={handleBookDemo}>
              <ArrowRight className="mr-2 h-5 w-5" />
              BOOK A DEMO
            </Button>
          </div>

          {/* Video CTA */}
          <div className="pt-12">
            <div className="inline-flex items-center gap-6 px-8 py-6 rounded-lg bg-secondary/60 backdrop-blur-md border border-border">
              <p className="text-sm text-muted-foreground max-w-md text-left">
                Finally, a system that runs tight without running you ragged, no new hires, no CRM swap.
              </p>
              <Button variant="video" size="default" className="flex-shrink-0" onClick={handleVideoClick}>
                <Play className="mr-2 h-4 w-4 fill-current" />
                SEE IT IN ACTION
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/30 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/30 z-20" />
    </section>
  );
};
