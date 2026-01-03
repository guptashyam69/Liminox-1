import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Essential",
    price: "₹24,999",
    description: "Perfect for small households",
    features: [
      "500L Smart Tank",
      "Algae Prevention System",
      "Basic Contamination Detection",
      "Mobile App Access",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹44,999",
    description: "Ideal for most families",
    features: [
      "1000L Smart Tank",
      "Advanced Algae Prevention",
      "Full Contamination Detection",
      "Auto-Cleaning System",
      "Real-time Monitoring",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹74,999",
    description: "For large homes & villas",
    features: [
      "2000L Smart Tank",
      "Premium Algae Prevention",
      "AI-Powered Detection",
      "Advanced Auto-Cleaning",
      "Multi-tank Support",
      "24/7 Dedicated Support",
      "Annual Maintenance",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-water-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-water">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your home. All plans include installation 
            and a 2-year warranty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-water"
                  : "shadow-card hover:shadow-water"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-water text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                <p className="text-lg font-medium text-foreground mb-2">{plan.name}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-water-light flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-water shadow-water hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  } transition-all`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
