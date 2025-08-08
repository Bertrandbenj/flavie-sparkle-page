import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Les soins", href: "#soins" },
    { label: "Accompagnement", href: "#accompagnement" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <a href="tel:0689655669" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" />
              06 89 65 56 69
            </a>
            <a href="mailto:flavie.arnou@gmail.com" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" />
              flavie.arnou@gmail.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="hero-title text-2xl font-bold">Flavie Arnou</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" className="btn-secondary">
              Prendre RDV
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="secondary" className="btn-secondary mt-4">
                Prendre RDV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;