import { Droplets } from "lucide-react";
import liminoxLogo from "@/assets/liminox-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-water-dark text-water-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={liminoxLogo} alt="Liminox" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-water-medium max-w-md mb-6">
              Where Water Speaks, We Listen. Revolutionizing water storage with 
              smart technology for cleaner, safer water in every home.
            </p>
            <div className="flex items-center gap-2 text-water-medium">
              <Droplets size={20} className="text-primary" />
              <span>Smart Water Technology</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-water-light mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Features", "How It Works", "Benefits", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-water-medium hover:text-water-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-water-light mb-4">Contact</h4>
            <ul className="space-y-3 text-water-medium">
              <li>hello@liminox.in</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-water-medium/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-water-medium text-sm">
            © 2025 Liminox Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-water-medium">
            <a href="#" className="hover:text-water-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-water-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
