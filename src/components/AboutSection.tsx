import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin } from "lucide-react";
import portraitImage from "@/assets/flavie-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Présentation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pour celles et ceux qui préfèrent écouter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="healing-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Bienvenue dans mon espace de soin !
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Je m'appelle Flavie Arnou et j'ai le plaisir de vous recevoir.
                  </p>
                  
                  <p>
                    Ma pratique du toucher thérapeutique s'inspire de différentes approches 
                    complémentaires qui permettent d'accompagner la personne dans sa globalité.
                  </p>
                  
                  <p>
                    Mon approche privilégie l'écoute bienveillante et le respect de votre rythme. 
                    Chaque séance est unique et adaptée à vos besoins du moment.
                  </p>
                  
                  <p>
                    Dans un cadre sécurisant et apaisant, je vous accompagne avec douceur 
                    vers un mieux-être durable.
                  </p>
                </div>

                <Button className="btn-primary mt-8">
                  Découvrir mon parcours
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={portraitImage} 
                  alt="Flavie Arnou - Praticienne en toucher thérapeutique"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Notice importante */}
          <Card className="healing-card border-secondary/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">
                    Changement de cabinet !
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Le cabinet du 30 avenue Pierre Loti 44400 Rezé a fermé ses portes le 27 juin.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Cet été, je vous reçois :
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• les mercredis matins et les vendredis au 49 Rue de la Gourmette, 44300 Nantes</li>
                    <li>• les mercredis à La Maison des Trois Colibris au 39 Rue de la Massonnière, 44120 Vertou</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary">
                      Prendre rendez-vous
                    </Button>
                    <Button variant="outline">
                      Plus d'informations
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Valeurs */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="healing-card text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-primary">Écoute Bienveillante</h3>
                <p className="text-muted-foreground">
                  Un accompagnement respectueux de votre rythme et de vos besoins
                </p>
              </CardContent>
            </Card>

            <Card className="healing-card text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-primary">Approche Globale</h3>
                <p className="text-muted-foreground">
                  Prise en compte de la personne dans sa totalité corps-esprit
                </p>
              </CardContent>
            </Card>

            <Card className="healing-card text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-primary">Cadre Sécurisant</h3>
                <p className="text-muted-foreground">
                  Un environnement apaisant propice à la détente et au lâcher-prise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;