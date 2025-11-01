import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "500+",
    label: "Leads per month",
    description: "Automated follow-up",
  },
  {
    value: "24/7",
    label: "Active monitoring",
    description: "Never miss a lead",
  },
  {
    value: "85%",
    label: "Response rate",
    description: "Higher engagement",
  },
  {
    value: "3x",
    label: "More appointments",
    description: "Booked automatically",
  },
];

export const Stats = () => {
  return (
    <section id="results" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Results that speak
            <span className="block mt-2 text-accent">for themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top dealers see measurable improvements from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl font-bold text-accent mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
