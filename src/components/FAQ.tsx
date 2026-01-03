import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the algae prevention system work?",
    answer:
      "Our tanks feature a patented UV-C light system combined with a specialized anti-microbial coating. The UV-C light eliminates algae spores and bacteria, while the coating prevents any organic matter from adhering to the tank walls. This dual-layer protection ensures your water stays crystal clear.",
  },
  {
    question: "What types of contamination can the sensor detect?",
    answer:
      "Our advanced sensors can detect sediment, suspended particles, chemical contaminants, pH imbalances, and microbial presence. The AI-powered system analyzes multiple parameters in real-time and alerts you via the mobile app if any abnormality is detected.",
  },
  {
    question: "How does the automatic cleaning work?",
    answer:
      "When contamination is detected, the system activates a high-pressure water jet system that scrubs the tank interior. The dislodged dirt is then drained through a dedicated outlet. The entire process is automated and takes about 15-30 minutes depending on the tank size.",
  },
  {
    question: "Is installation complicated?",
    answer:
      "Not at all! Our professional team handles the entire installation process, typically completed within 2-3 hours. We ensure proper connection to your existing plumbing and set up the smart features for you. No structural modifications are required.",
  },
  {
    question: "What warranty and support do you offer?",
    answer:
      "All Liminox tanks come with a 2-year comprehensive warranty covering parts and labor. Premium plans include annual maintenance visits. Our support team is available via phone, email, and in-app chat for any assistance you need.",
  },
  {
    question: "Can I monitor multiple tanks from one app?",
    answer:
      "Yes! Our Premium plan supports multi-tank connectivity. You can monitor and control all your tanks from a single dashboard in the Liminox app, making it perfect for large properties or commercial installations.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-water">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're 
            looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
