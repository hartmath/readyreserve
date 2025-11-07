import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Wrench, 
  Package, 
  CreditCard, 
  BarChart3, 
  Gift, 
  Truck, 
  Shield,
  Info,
  Sparkles
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Agent {
  id: string;
  name: string;
  icon: React.ElementType;
  benefit: string;
  roi: string;
  price: number;
}

const agents: Agent[] = [
  {
    id: "sales",
    name: "Sales Agent",
    icon: ShoppingCart,
    benefit: "Converts 3× more leads",
    roi: "+$120k / yr",
    price: 25000,
  },
  {
    id: "service",
    name: "Service Agent",
    icon: Wrench,
    benefit: "Predictive maintenance & retention",
    roi: "+$80k / yr",
    price: 20000,
  },
  {
    id: "parts",
    name: "Parts & Inventory",
    icon: Package,
    benefit: "Smart supplier sync",
    roi: "+$40k / yr",
    price: 15000,
  },
  {
    id: "finance",
    name: "Finance Agent",
    icon: CreditCard,
    benefit: "Instant pre-qual + lender match",
    roi: "+$60k / yr",
    price: 18000,
  },
  {
    id: "marketing",
    name: "Marketing & CRM",
    icon: BarChart3,
    benefit: "DashClicks automation",
    roi: "+$50k / yr",
    price: 22000,
  },
  {
    id: "loyalty",
    name: "Loyalty Agent",
    icon: Gift,
    benefit: "Rewards & referrals",
    roi: "+$25k / yr",
    price: 12000,
  },
  {
    id: "fleet",
    name: "Fleet Agent",
    icon: Truck,
    benefit: "Route & delivery optimization",
    roi: "+$30k / yr",
    price: 16000,
  },
  {
    id: "security",
    name: "Truth + Security",
    icon: Shield,
    benefit: "AI verifier + SOC2-lite",
    roi: "priceless",
    price: 30000,
  },
];

export const Configurator = () => {
  const [selectedAgents, setSelectedAgents] = useState<Set<string>>(new Set());
  const [showDiscount, setShowDiscount] = useState(false);

  const toggleAgent = (agentId: string) => {
    const newSelected = new Set(selectedAgents);
    if (newSelected.has(agentId)) {
      newSelected.delete(agentId);
    } else {
      newSelected.add(agentId);
    }
    setSelectedAgents(newSelected);

    // Check if all agents selected
    if (newSelected.size === agents.length) {
      setShowDiscount(true);
      setTimeout(() => setShowDiscount(false), 5000);
    }
  };

  const selectedAgentsList = agents.filter(agent => selectedAgents.has(agent.id));
  const subtotal = selectedAgentsList.reduce((sum, agent) => sum + agent.price, 0);
  const discount = selectedAgents.length === agents.length ? subtotal * 0.3 : 0;
  const total = subtotal - discount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="configurator" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Select the AI Agents You Want
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Build your custom AI infrastructure. Each agent adds powerful automation to your dealership.
          </p>
        </div>

        {/* Discount Popup */}
        {showDiscount && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
            <Card className="p-6 bg-gold/20 border-gold border-2 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-bold text-gold">Full System Discount!</h3>
                  <p className="text-sm text-muted-foreground">
                    Save 30% and unlock white-label eligibility when you choose all agents.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Agents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isSelected = selectedAgents.has(agent.id);
            
            return (
              <Card
                key={agent.id}
                className={`p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  isSelected ? 'border-accent bg-accent/10' : 'border-border hover:border-accent/50'
                }`}
                onClick={() => toggleAgent(agent.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">{agent.name}</h3>
                    </div>
                  </div>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleAgent(agent.id)}
                    className="mt-1"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{agent.benefit}</p>
                
                <div className="flex items-center justify-between">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className="cursor-help">
                          {agent.roi}
                          <Info className="w-3 h-3 ml-1" />
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Annual ROI estimate</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-sm font-semibold text-accent">
                    {formatCurrency(agent.price)}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pricing Calculator */}
        {selectedAgents.size > 0 && (
          <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Your System Estimate</h3>
            
            <div className="space-y-4 mb-6">
              {selectedAgentsList.map((agent) => (
                <div key={agent.id} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{agent.name}</span>
                  <span className="font-semibold">{formatCurrency(agent.price)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{formatCurrency(subtotal)}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex items-center justify-between text-gold">
                  <span>Full System Discount (30%)</span>
                  <span className="font-bold">-{formatCurrency(discount)}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between text-lg sm:text-xl pt-3 border-t border-border">
                <span className="font-bold">Total</span>
                <span className="font-bold text-accent">{formatCurrency(total)}</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full mt-6"
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
              Request Quote
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
};

