import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering dealerships to never miss an opportunity by automating what matters most.",
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "Delivering enterprise-grade AI solutions with the simplicity dealers demand.",
    },
    {
      icon: Users,
      title: "Partnership Focused",
      description: "We succeed when our clients succeed. Your growth is our success metric.",
    },
    {
      icon: Zap,
      title: "Innovation Led",
      description: "Constantly evolving our platform with the latest AI breakthroughs.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Former automotive sales manager with 15 years in dealership operations.",
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "AI researcher and ex-Google engineer specializing in conversational AI.",
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Customer Success",
      bio: "20 years in automotive technology, champion of dealer success.",
    },
    {
      name: "Emily Chen",
      role: "VP of Engineering",
      bio: "Led AI teams at Meta and Amazon, now building for automotive.",
    },
  ];

  return (
    <PageLayout>
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-xs sm:text-sm text-muted-foreground">Our story</span>
              <div className="w-px h-4 sm:h-6 bg-accent/30" />
              <span className="font-semibold text-xs sm:text-sm">Your success</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4">
              About ReadyReserve
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We're building the future of automotive lead management, one dealership at a time.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
            <Card className="p-6 sm:p-12 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  ReadyReserve was born from a simple observation: while working at a top dealership in Phoenix, 
                  we watched countless leads slip through the cracks. Not because the sales team wasn't talented, but because 
                  following up on 500+ leads a month simply wasn't humanly possible.
                </p>
                <p>
                  We asked ourselves: <em>What if there was a way to never miss a lead? What if your team could focus on 
                  closing deals while AI handled the busywork of follow-up?</em>
                </p>
                <p>
                  That question led us to build ReadyReserve™—an intelligent automation platform that works 24/7 to engage every 
                  lead, follow up persistently, and book appointments automatically. No new hires. No CRM swap. Just results.
                </p>
                <p>
                  Today, we serve hundreds of dealerships across the country, from single-location independents to multi-state 
                  enterprise groups. Our mission remains the same: make sure no dealer ever leaves money on the table.
                </p>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-4">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-5 sm:p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300"
                >
                  <value.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-accent" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-4">The Team</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className="p-5 sm:p-6 bg-card/50 backdrop-blur-sm border-border"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-accent">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">{member.name}</h3>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {member.role}
                      </Badge>
                      <p className="text-xs sm:text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <Card className="p-6 sm:p-12 bg-gradient-to-br from-accent/10 to-secondary/20 border-accent/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Dealerships</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">2M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Leads Managed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">$50M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Revenue Impact</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

