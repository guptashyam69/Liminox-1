import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PageLayout } from "@/components/PageLayout";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-water-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Contact</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-water">
                Touch
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to upgrade to smarter water storage? Have questions? 
              We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">hello@liminox.in</p>
                  <p className="text-muted-foreground">support@liminox.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Call Us
                  </h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">Mon - Sat, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    Liminox Technologies Pvt. Ltd.
                  </p>
                  <p className="text-muted-foreground">
                    Tech Park, Bangalore - 560001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-water shadow-water hover:opacity-90 transition-all py-6"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
