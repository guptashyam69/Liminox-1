import { Shield, Droplets, Zap, Wifi, Gauge, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/PageLayout";

const features = [
  {
    icon: Shield,
    title: "Algae Prevention",
    description:
      "Advanced UV-C technology and specialized coating prevent algae formation, keeping your water crystal clear.",
  },
  {
    icon: Gauge,
    title: "Contamination Detection",
    description:
      "Built-in sensors continuously monitor water quality, detecting impurities and contaminants in real-time.",
  },
  {
    icon: Zap,
    title: "Auto-Cleaning",
    description:
      "Automated cleaning mechanism activates when dirt is detected, ensuring your tank stays spotless without manual intervention.",
  },
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description:
      "Connect to our mobile app for real-time monitoring, alerts, and control from anywhere in the world.",
  },
  {
    icon: Droplets,
    title: "Water Level Tracking",
    description:
      "Precise sensors track water levels and usage patterns, helping you optimize consumption and prevent shortages.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    description:
      "Energy-efficient operation with sustainable materials, reducing your environmental footprint.",
  },
];

const FeaturesPage = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Features</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Smart Technology for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-water">
                Pure Water
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our intelligent water tank system combines cutting-edge sensors, 
              AI-powered analysis, and automated cleaning to deliver the purest 
              water for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group border-border bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FeaturesPage;
