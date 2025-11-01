import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    dealership: "Liberty Toyota",
    location: "Phoenix, AZ",
    industry: "Automotive",
    challenge: "Managing 800+ leads per month with a team of 8 sales reps. Lost 40% of leads due to slow follow-up.",
    solution: "Implemented ReadyReserve™ for 24/7 automated follow-up across SMS, email, and phone.",
    results: [
      { metric: "Response Rate", value: "+180%", icon: TrendingUp },
      { metric: "Appointments Booked", value: "+250%", icon: CheckCircle2 },
      { metric: "Follow-up Time", value: "< 60 sec", icon: Clock },
      { metric: "Revenue Increase", value: "+$2.4M", icon: ArrowUpRight },
    ],
    quote: "ReadyReserve™ transformed our lead management. We never miss a lead, and our team can focus on closing deals.",
    author: "Sarah Martinez",
    role: "General Manager",
  },
  {
    id: 2,
    dealership: "Premier Honda",
    location: "Austin, TX",
    industry: "Automotive",
    challenge: "Competing with 15+ dealerships in the area. Needed to respond faster than competitors.",
    solution: "Deployed ReadyReserve™ with custom workflows aligned to their sales process and CRM.",
    results: [
      { metric: "First Response", value: "12 seconds", icon: Clock },
      { metric: "Lead Conversion", value: "+156%", icon: TrendingUp },
      { metric: "Dead Lead Revival", value: "420 revived", icon: CheckCircle2 },
      { metric: "Time Saved", value: "320 hrs/month", icon: Clock },
    ],
    quote: "The system pays for itself. We're now the fastest-responding dealership in Austin.",
    author: "Mike Chen",
    role: "Sales Director",
  },
  {
    id: 3,
    dealership: "Elite Motors Group",
    location: "Miami, FL",
    industry: "Luxury Automotive",
    challenge: "High-end clientele expected personalized, immediate attention. Manual follow-up couldn't scale.",
    solution: "Enterprise plan with custom AI training to match their brand voice and personalized approach.",
    results: [
      { metric: "Client Satisfaction", value: "+190%", icon: CheckCircle2 },
      { metric: "Response Quality", value: "98% approval", icon: TrendingUp },
      { metric: "After-hours Engagement", value: "+340%", icon: Clock },
      { metric: "ROI", value: "1,200%", icon: ArrowUpRight },
    ],
    quote: "Our clients can't tell it's AI. They just know we're always there, always responsive.",
    author: "Elena Rodriguez",
    role: "Owner & CEO",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout>
      <section className="py-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-4 mb-8 px-6 py-3 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-sm text-muted-foreground">Real results</span>
              <div className="w-px h-6 bg-accent/30" />
              <span className="font-semibold">Real dealers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how top dealerships are transforming their lead management with ReadyReserve™.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-16 mb-20">
            {caseStudies.map((study) => (
              <Card 
                key={study.id}
                className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column - Context */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-accent border-accent/50">
                        {study.industry}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{study.location}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{study.dealership}</h3>
                      <p className="text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-accent">The Solution</h4>
                      <p className="text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="space-y-6">
                    <h4 className="font-semibold mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <Card 
                          key={idx}
                          className="p-4 bg-secondary/20 border-border text-center"
                        >
                          <result.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                          <div className="text-2xl font-bold mb-1">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="p-6 bg-accent/10 border-accent/30">
                      <p className="text-sm italic mb-4">"{study.quote}"</p>
                      <div>
                        <div className="font-semibold">{study.author}</div>
                        <div className="text-xs text-muted-foreground">{study.role}</div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-12 bg-gradient-to-br from-accent/10 to-secondary/20 border-accent/30 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of dealerships already using ReadyReserve™ to transform their lead management.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.offsetTop;
                  const offsetPosition = elementPosition - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  navigate('/contact');
                }
              }}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-wider rounded-md hover:bg-accent/90 transition-colors"
            >
              Start Your Free Trial
            </button>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;

