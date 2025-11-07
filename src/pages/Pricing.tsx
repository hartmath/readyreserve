import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Standard",
    upfront: "$120k",
    monthly: "$2.5k",
    period: "/month",
    description: "Full ownership. Dealer-owned infrastructure.",
    features: [
      "Complete system ownership",
      "All AI agents included",
      "Offline mesh architecture",
      "24/7 monitoring",
      "Dedicated Linux node",
      "White-label eligible",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    upfront: "$75k",
    monthly: "$1.5k",
    period: "/month",
    description: "Lower upfront cost with revenue share option.",
    features: [
      "Reduced upfront investment",
      "Revenue share model available",
      "All AI agents included",
      "Scalable architecture",
      "Priority support",
      "Growth-focused pricing",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "OEM License",
    upfront: "$1.5M+",
    monthly: "—",
    period: "",
    description: "Enterprise rollout for manufacturers and large groups.",
    features: [
      "Multi-location deployment",
      "Custom integration",
      "Enterprise support",
      "Volume pricing",
      "Dedicated team",
      "Custom development",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    // Always navigate to contact page from pricing page
      navigate('/contact');
  };

  return (
    <PageLayout>
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-xs sm:text-sm text-muted-foreground">Transparent pricing</span>
              <div className="w-px h-4 sm:h-6 bg-accent/30" />
              <span className="font-semibold text-xs sm:text-sm">No hidden fees</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4">
              Choose Your Plan
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Start with a free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </div>

          {/* ROI Widget */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-accent/10 to-secondary/20 border-accent/30 mb-12 sm:mb-20 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-accent">Average ROI</h3>
              <p className="text-4xl sm:text-5xl font-bold mb-2">$250k / yr</p>
              <p className="text-sm sm:text-base text-muted-foreground">Profit increase per dealership</p>
            </div>
          </Card>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 ${
                  plan.popular ? 'border-accent border-2 relative sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gold text-gold-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="space-y-2 mb-3">
                    <div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Upfront: </span>
                      <span className="text-2xl sm:text-3xl font-bold">{plan.upfront}</span>
                    </div>
                    {plan.monthly !== "—" && (
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Monthly: </span>
                        <span className="text-xl sm:text-2xl font-bold">{plan.monthly}</span>
                        <span className="text-muted-foreground text-sm sm:text-base">{plan.period}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground">
                  Everything! Full access to all features for 14 days. No credit card required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Absolutely. You can upgrade, downgrade, or cancel at any time with no penalties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I exceed my lead limit?</h3>
                <p className="text-muted-foreground">
                  We'll reach out to discuss upgrading. Your leads will continue to be processed without interruption.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you integrate with my CRM?</h3>
                <p className="text-muted-foreground">
                  Yes! We integrate with all major CRMs including Salesforce, HubSpot, DealerSocket, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;

