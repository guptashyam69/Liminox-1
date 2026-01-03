import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTank from "@/assets/hero-tank.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
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
              <Button
                size="lg"
                className="bg-gradient-water shadow-water hover:opacity-90 transition-all text-lg px-8 py-6"
              >
                Get Your Smart Tank
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
              >
                Watch Demo
              </Button>
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

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
