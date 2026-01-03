import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import liminoxLogo from "@/assets/liminox-logo.png";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={liminoxLogo} 
              alt="Liminox" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Button className="bg-gradient-water shadow-water hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-gradient-water shadow-water hover:opacity-90 transition-opacity w-full mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};