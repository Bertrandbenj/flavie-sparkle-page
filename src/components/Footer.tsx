import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo et description */}
            <div className="md:col-span-1">
              <h3 className="hero-title text-3xl font-bold mb-4 text-accent">
                Flavie Arnou
              </h3>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Praticienne en toucher thérapeutique, je vous accompagne avec bienveillance 
                sur le chemin de votre bien-être et de votre épanouissement personnel.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Le soin par l'amour</span>
              </div>
            </div>

            {/* Contact rapide */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:0689655669" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                  06 89 65 56 69
                </a>
                <a href="mailto:flavie.arnou@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4" />
                  flavie.arnou@gmail.com
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p>Nantes & Vertou</p>
                    <p>Loire-Atlantique (44)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <nav className="space-y-2">
                <a href="#accueil" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Accueil
                </a>
                <a href="#apropos" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  À propos
                </a>
                <a href="#soins" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Les soins
                </a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {new Date().getFullYear()} Flavie Arnou. Tous droits réservés.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;