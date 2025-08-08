import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="healing-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Informations pratiques
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <a href="tel:0689655669" className="text-muted-foreground hover:text-primary transition-colors">
                          06 89 65 56 69
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:flavie.arnou@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          flavie.arnou@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Lieux de consultation</h4>
                        <div className="text-muted-foreground space-y-2">
                          <p>📍 49 Rue de la Gourmette, 44300 Nantes<br/>
                          <span className="text-sm">Mercredis matins et vendredis</span></p>
                          <p>📍 39 Rue de la Massonnière, 44120 Vertou<br/>
                          <span className="text-sm">Mercredis à La Maison des Trois Colibris</span></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Horaires</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Mercredi : 9h00 - 12h00 (Nantes)</p>
                          <p>Mercredi : 14h00 - 18h00 (Vertou)</p>
                          <p>Vendredi : 9h00 - 18h00 (Nantes)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <Button className="btn-primary w-full mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      Prendre rendez-vous en ligne
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Réservation via Calendly pour votre commodité
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div>
              <Card className="healing-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Envoyez-moi un message
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="06 00 00 00 00" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Objet de votre message" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez votre demande, vos questions ou besoins spécifiques..."
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Button type="submit" className="btn-secondary w-full">
                        Envoyer le message
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Je vous répondrai dans les plus brefs délais
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;