import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const FullSystemOffer = () => {
  const features = [
    { feature: "Cross-agent synergy", aLaCarte: false, fullSystem: true },
    { feature: "Dealer branding", aLaCarte: false, fullSystem: true },
    { feature: "Dedicated Linux node", aLaCarte: false, fullSystem: true },
    { feature: "24/7 AI monitoring", aLaCarte: "Optional", fullSystem: true },
    { feature: "ROI payback", aLaCarte: "18 mo +", fullSystem: "< 12 mo" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Full Genesis v3 System
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Get everything. Save 30%. Unlock white-label eligibility.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-accent/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">à la carte</th>
                  <th className="text-center py-4 px-4 font-semibold text-accent">Full System</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm sm:text-base">{item.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {item.aLaCarte === true ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : item.aLaCarte === false ? (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.aLaCarte}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.fullSystem === true ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <span className="text-sm font-semibold text-accent">{item.fullSystem}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <div className="text-center mt-8">
            <Button 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => {
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
              }}
            >
              Upgrade to Full System – Save 30%
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

