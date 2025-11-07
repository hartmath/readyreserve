import { Card } from "@/components/ui/card";
import { Shield, Zap, Layers, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const features = [
    {
      icon: Shield,
      title: "Dealer-owned",
      description: "No vendor lock-in. You own the infrastructure.",
    },
    {
      icon: Zap,
      title: "Secure",
      description: "Air-gapped offline AI mesh for maximum security.",
    },
    {
      icon: Layers,
      title: "Scalable",
      description: "Modular agents, plug-and-play architecture.",
    },
    {
      icon: TrendingUp,
      title: "Profitable",
      description: "ROI in under 12 months guaranteed.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            The Perfect-Ten Stack: Linux + n8n + HITL guardrails
          </p>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mb-12 sm:mb-16">
          <Card className="p-8 sm:p-12 bg-card/50 backdrop-blur-sm border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-accent">Linux</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Foundation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-accent">n8n</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Automation Engine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-accent">HITL</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Guardrails</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
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

