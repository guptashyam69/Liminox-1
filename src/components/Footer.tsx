import { Droplets, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-water-dark text-white">
      {/* Main Footer */}
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

          {/* Contact Us Column */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-6">
              Contact Us
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
                <Link to="/contact" className="text-water-medium hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
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
