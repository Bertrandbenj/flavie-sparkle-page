import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flower, Hand, Sparkles, Clock, Users2, Baby } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Hand,
      title: "Toucher Qi",
      description: "Une approche douce qui combine l'écoute du corps et l'harmonisation énergétique",
      duration: "60-90 min",
      audience: "Adultes",
    },
    {
      icon: Flower,
      title: "Massage Bien-être",
      description: "Techniques de relaxation profonde pour libérer les tensions physiques et émotionnelles",
      duration: "60 min",
      audience: "Tous âges",
    },
    {
      icon: Sparkles,
      title: "Harmonisation Énergétique",
      description: "Rééquilibrage des énergies pour retrouver vitalité et sérénité intérieure",
      duration: "45-60 min",
      audience: "Adultes",
    },
    {
      icon: Users2,
      title: "Accompagnement Feminin",
      description: "Soutien spécialisé pour les transitions de vie et le cycle féminin",
      duration: "60-90 min",
      audience: "Femmes",
    },
    {
      icon: Baby,
      title: "Accompagnement Périnatal",
      description: "Soin adapté pendant la grossesse et en post-partum",
      duration: "60 min",
      audience: "Futures et jeunes mamans",
    },
    {
      icon: Clock,
      title: "Séances Découverte",
      description: "Première approche pour découvrir les bienfaits du toucher thérapeutique",
      duration: "45 min",
      audience: "Tous",
    },
  ];

  return (
    <section id="soins" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Les Soins
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes différentes approches thérapeutiques pour votre bien-être
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="healing-card group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users2 className="w-4 h-4" />
                        {service.audience}
                      </span>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Card className="healing-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Une approche personnalisée
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Chaque séance est unique et adaptée à vos besoins spécifiques. 
                  Je prends le temps de vous écouter pour comprendre vos attentes et 
                  vous proposer l'accompagnement le plus approprié.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    Réserver une consultation
                  </Button>
                  <Button variant="outline">
                    Poser une question
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;