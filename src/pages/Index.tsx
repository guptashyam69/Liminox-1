import { ArrowRight, Droplets, Shield, Gauge, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import heroTank from "@/assets/hero-tank.jpg";

const highlights = [
  {
    icon: Shield,
    title: "Algae Prevention",
    description: "UV-C technology keeps water crystal clear",
  },
  {
    icon: Gauge,
    title: "Smart Detection",
    description: "Real-time contamination monitoring",
  },
  {
    icon: Zap,
    title: "Auto-Cleaning",
    description: "Self-cleaning when dirt is detected",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden flex items-center">
        {/* Animated water ripple effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 animate-ripple" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent/10 animate-ripple delay-700" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-water-light rounded-full text-primary text-sm font-medium">
                <Droplets size={16} />
                <span>Smart Water Technology</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Pure Water,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-water">
                  Zero Effort
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Experience the future of water storage with Liminox smart tanks. 
                Our AI-powered system prevents algae growth, detects contamination, 
                and auto-cleans your tank — so you never worry about water quality again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-water shadow-water hover:opacity-90 transition-all text-lg px-8 py-6"
                  >
                    Get Your Smart Tank
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">Pure Water</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">Monitoring</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">0%</p>
                  <p className="text-sm text-muted-foreground">Algae Growth</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-water opacity-20 blur-3xl rounded-full" />
              <img
                src={heroTank}
                alt="Liminox Smart Water Tank"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-water"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-water transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                View All Features
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
