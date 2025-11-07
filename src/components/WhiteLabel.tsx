import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, TrendingUp, Users } from "lucide-react";

export const WhiteLabel = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Co-branding Kit",
      description: "Dashboard access + white-label branding tools",
    },
    {
      icon: Shield,
      title: "Territory Protection",
      description: "Exclusive rights in your market area",
    },
    {
      icon: TrendingUp,
      title: "Recurring Revenue",
      description: "Earn 15–20% on every store you onboard",
    },
    {
      icon: Users,
      title: "Network Equity",
      description: "Early adopters get equity in the network",
    },
  ];

  return (
    <section id="whitelabel" className="py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <Badge className="mb-4 bg-gold/20 text-gold border-gold">
            Partner Program
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Turn Your Advantage into a Business
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Approved Genesis v3 dealers can license and resell our AI under their own brand. Earn 15–20% recurring revenue on every store you onboard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-accent" strokeWidth={1.5} />
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Become a Partner Dealer
          </Button>
        </div>
      </div>
    </section>
  );
};

