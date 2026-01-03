import { useState } from "react";
import { Droplets, Phone, MapPin, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
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
    <footer className="bg-water-dark text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-water-medium max-w-xl mx-auto">
            Ready to upgrade to smarter water storage? Have questions? We're here to help!
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
                <h3 className="font-display font-semibold text-white mb-1">
                  Email Us
                </h3>
                <p className="text-water-medium">hello@liminox.in</p>
                <p className="text-water-medium">support@liminox.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white mb-1">
                  Call Us
                </h3>
                <p className="text-water-medium">+91 98765 43210</p>
                <p className="text-water-medium">Mon - Sat, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white mb-1">
                  Visit Us
                </h3>
                <p className="text-water-medium">
                  Liminox Technologies Pvt. Ltd.
                </p>
                <p className="text-water-medium">
                  Tech Park, Bangalore - 560001
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Name
                </label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-water-medium"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Phone
                </label>
                <Input
                  placeholder="Your phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-water-medium"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-water-medium"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-water-medium"
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

      {/* Links Section */}
      <div className="border-t border-water-medium/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-water flex items-center justify-center">
                  <Droplets size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Liminox
                </h3>
              </div>
              <p className="text-water-medium leading-relaxed">
                Where Water Speaks, We Listen. Experience the future of water 
                storage with our smart tanks that prevent algae, detect 
                contamination, and auto-clean for pure water always.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-display font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/features" className="text-water-medium hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-water-medium hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="text-water-medium hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-water-medium hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-water-medium hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/achievements" className="text-water-medium hover:text-white transition-colors">
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h4 className="text-lg font-display font-semibold text-white mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-water-medium">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-water-medium">hello@liminox.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-water-medium">
                    Liminox Technologies, Tech Park, Bangalore - 560001
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-water-medium/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-water-medium text-sm">
            © 2025 Liminox Technologies. All rights reserved. | Smart Water Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
