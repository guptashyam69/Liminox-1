import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install Your Smart Tank",
    description:
      "Easy installation with our compact, modular design. Our team handles setup and connects to your water system.",
  },
  {
    number: "02",
    title: "Connect & Monitor",
    description:
      "Download the Liminox app and pair your tank. Get instant access to water quality metrics and tank status.",
  },
  {
    number: "03",
    title: "Automatic Protection",
    description:
      "Our AI system continuously monitors, detects issues, and triggers cleaning cycles automatically.",
  },
  {
    number: "04",
    title: "Enjoy Pure Water",
    description:
      "Relax knowing your water is always clean, fresh, and safe for your family — without lifting a finger.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-water-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clean Water in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-water">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Liminox is effortless. Our smart system 
            takes care of everything, so you can focus on what matters most.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-8 items-start group"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-water flex items-center justify-center shadow-water group-hover:scale-110 transition-transform z-10">
                  <span className="text-xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-card group-hover:-translate-y-1 transition-transform">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                    <Check size={16} />
                    <span>Included in every plan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
