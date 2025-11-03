import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, CheckCircle2, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "Every lead followed up automatically, 24/7.",
    description: "Your team sleeps. ReadyReserve™ doesn't. Spark instant conversations via SMS, email, DMs, and chats—without lifting a finger.",
  },
  {
    icon: CheckCircle2,
    title: "No more \"I forgot\" or \"I didn't see it.\"",
    description: "Every call, task, and follow-up is tracked. Reps stay on task. Managers know who's slipping, without hovering.",
  },
  {
    icon: RefreshCw,
    title: "Dead leads revived. No chase required.",
    description: "Most leads don't vanish. They just get ignored. We bring them back.",
  },
];

export const Features = () => {
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
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto">
        {/* Target Section */}
        <div className="mb-12 sm:mb-20 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/30 bg-accent/5">
            <span className="text-xs sm:text-sm text-muted-foreground">Built for</span>
            <div className="w-px h-4 sm:h-6 bg-accent/30" />
            <span className="font-semibold text-xs sm:text-sm">Top dealers</span>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            500+ leads a month? ReadyReserve™ follows up—automatically, persistently, and without excuses. 
            So you never leave money on the table.
          </p>
        </div>

        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold px-4">
            One simple system.{" "}
            <span className="block mt-2">Three big problems, gone.</span>
          </h2>
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto"
            onClick={handleBookDemo}
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            BOOK A DEMO
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-accent" strokeWidth={1.5} />
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
