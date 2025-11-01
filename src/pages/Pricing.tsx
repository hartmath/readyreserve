import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,997",
    period: "/month",
    description: "Perfect for smaller dealerships getting started with AI.",
    features: [
      "Up to 300 leads/month",
      "24/7 automated follow-up",
      "SMS & Email automation",
      "Basic reporting dashboard",
      "Email support",
      "14-day setup period",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,997",
    period: "/month",
    description: "Ideal for growing dealerships handling high lead volume.",
    features: [
      "Up to 1,000 leads/month",
      "24/7 automated follow-up",
      "SMS, Email & Social DMs",
      "Advanced analytics & reports",
      "Priority support",
      "7-day setup period",
      "CRM integration",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large dealerships with complex requirements.",
    features: [
      "Unlimited leads",
      "24/7 automated follow-up",
      "All channel support",
      "Custom dashboards",
      "Dedicated account manager",
      "Custom setup timeline",
      "All CRM integrations",
      "Custom AI training",
      "White-label options",
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
      <section className="py-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-4 mb-8 px-6 py-3 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-sm text-muted-foreground">Transparent pricing</span>
              <div className="w-px h-6 bg-accent/30" />
              <span className="font-semibold">No hidden fees</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with a free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 ${
                  plan.popular ? 'border-accent border-2 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
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

