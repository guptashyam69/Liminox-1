import { Heart, Clock, Banknote, Shield } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const benefits = [
  {
    icon: Heart,
    title: "Healthier Living",
    description: "Protect your family from waterborne diseases and contaminants with consistently pure water.",
    stat: "100%",
    statLabel: "Safe to drink",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Eliminate manual tank cleaning forever. Our auto-clean system does the work for you.",
    stat: "10+ hrs",
    statLabel: "Saved per month",
  },
  {
    icon: Banknote,
    title: "Cost Effective",
    description: "No more hiring cleaning services or buying water purifiers. One solution for all your needs.",
    stat: "40%",
    statLabel: "Cost savings",
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Real-time monitoring and instant alerts ensure you're always in control of your water quality.",
    stat: "24/7",
    statLabel: "Protection",
  },
];

const BenefitsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Benefits</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-water">
                Liminox?
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the difference that smart water technology makes 
              in your daily life, health, and wallet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-water transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-water opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-water-light flex items-center justify-center group-hover:bg-gradient-water transition-all">
                    <benefit.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-water">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BenefitsPage;
