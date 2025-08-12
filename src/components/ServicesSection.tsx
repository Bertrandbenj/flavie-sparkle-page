import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flower, Hand, Sparkles, Clock, Users2, Baby, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import soinCombineImage from "@/assets/soin-combine-image.jpg";
import chiNeiTsangImage from "@/assets/chi-nei-tsang-image.jpg";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const testimonials = [
    {
      text: "Flavie travaille de manière très minutieuse et sait exactement où exercer pour soulager des maux parfois anciens, oubliés. Sa douceur et son intuition font de ses massages un moment de vrai détente, nettoyage en très grande profondeur. Je recommande vivement les soins de Flavie qui est très professionnelle, à l'écoute et bienveillante !",
      author: "Anne-Sophie Dubreuil",
      service: "Séance combinée (Reiki, Chi nei tsang et autres associés)"
    },
    {
      text: "Recevoir les massages de Flavie a été pour moi une expérience très riche. Je me suis sentie en confiance et bien accompagnée. L'écoute et la connexion bien présentes chez Flavie m'ont permis de vivre des libérations émotionnelles en confiance. Merci pour cet accompagnement du coeur !",
      author: "Céline B.",
      service: "Séance combinée (Reiki, Chi nei tsang et autres associés)"
    },
    {
      text: "Merci Flavie pour ces séances qui m'ont fait beaucoup de bien et ont été le déclencheur de changements dans ma vie, pour le meilleur ! Vous avez une belle énergie et des doigts de fée !",
      author: "Aurore",
      service: "Séance combinée (Reiki, Chi nei tsang et autres associés)"
    },
    {
      text: "C'est chaleureusement recommandée par une personne de mon entourage que j'ai pris rendez-vous avec Flavie Arnou pour un massage Chi Nei Tsang il y a quelques mois. J'ai été ravie de cette première séance qui m'a procuré un vrai mieux être au niveau digestif et aussi émotionnel.",
      author: "Anne-Sophie",
      service: "Chi nei tsang"
    },
    {
      text: "J'ai passé un moment de douceur, hors du temps. Merci pour tes mots justes, ton écoute attentive et ta bienveillance tout au long du soin, qui m'ont vraiment permis de me sentir libre d'être ce que je suis. Mais aussi plus légère, ancrée à la Terre.",
      author: "Emma",
      service: "Séance d'éclairage"
    }
  ];

  const services = [
    {
      icon: Hand,
      title: "Soin combiné",
      description: "Un massage métissé : Chi Nei Tsang, Reiki et autres pratiques... associées !",
      duration: "60-90 min",
      audience: "Tous",
      price: "70€",
      image: soinCombineImage,
      expandedContent: {
        subtitle: "L'association du Reiki et du Chi nei tsang",
        content: "Je prône une approche douce (mais pas moins profonde), d'autant plus du ventre, zone sensible et intime.\n\nAllier le reiki au chi nei tsang a été pour moi très naturel.\n\nPrendre le temps d'accompagner la personne à se déposer et à se ré-approprier son corps en douceur.\n\nA l'accompagner vers une relation aimante, fidèle et respectueuse d'elle-même.\n\nAinsi, petit à petit, les noeuds se défont, le ventre se relâche, le corps dans sa globalité, aussi.\n\nFruit du métissage entre les différentes approches de soins énergétiques, de thérapie, de relaxation auxquelles je suis formée (Reiki, massage Chi Nei Tsang, Yoga Nidra et PNL) et de mes apprentissages personnels, je vous propose ce soin et ce massage personnalisé.",
        bienfaits: [
          "Apaisement, relaxation",
          "Plus grande présence à soi, centrage",
          "Reprendre contact avec son intuition",
          "Retrouver une clarté d'esprit",
          "Amélioration de l'estime de soi",
          "Action sur les douleurs somatiques",
          "Dissipation des tensions musculaires",
          "Libérer les émotions",
          "Retrouver de l'énergie",
          "Améliorer le sommeil"
        ],
        cas: [
          "Stress, anxiété, nervosité, agitation mentale, fatigue",
          "Mal-être, désordre émotionnel",
          "Tensions, douleurs, blocages",
          "Changement de vie",
          "Période difficile personnellement ou professionnellement",
          "Accompagnement pré et post-opératoire",
          "Mauvaise estime de soi"
        ]
      }
    },
    {
      icon: Sparkles,
      title: "Reiki",
      description: "Soin énergétique par apposition des mains. Une occasion de se déposer, de se relâcher profondément, de s'alléger et de relancer le processus d'auto-guérison de son corps.",
      duration: "60 min",
      audience: "Tous",
      price: "65€",
      expandedContent: {
        subtitle: "Qu'est-ce que le Reiki ?",
        content: "Le Reiki une méthode de soins énergétiques japonaise par apposition des mains. Cet art ancestral initie le processus d'auto-guérison du corps et son rééquilibrage. Ses bienfaits se placent aussi bien sur les plans physiques et mentaux qu'émotionnels. Le Reiki agit sur l'homme, les animaux et même sur les plantes.\n\nLe Reiki accompagne et accélère le processus de guérison de nombreuses pathologies. Il apporte un apaisement et une détente profonde. Les effets du stress se retrouvent atténués voire supprimés.",
        bienfaits: [
          "Accélère le processus de guérison",
          "Apaisement et détente profonde",
          "Atténuation des effets du stress",
          "Stimulation du système immunitaire",
          "Aide à retrouver tonus et vitalité",
          "Diminue voire supprime les douleurs",
          "Améliore l'équilibre général",
          "Aide lors de traumatismes physiques et psychiques"
        ]
      }
    },
    {
      icon: Flower,
      title: "Chi Nei Tsang",
      description: "Issu de la médecine chinoise, c'est un massage énergétique du ventre au toucher doux qui agit en profondeur.",
      duration: "60 min", 
      audience: "Tous",
      price: "70€",
      image: chiNeiTsangImage,
      expandedContent: {
        subtitle: "Qu'est-ce que le Chi Nei Tsang ?",
        content: "Issu de la médecine chinoise, des pratiques taoïstes – il constitue une branche du Qi Gong -, le Chi Nei Tsang (CNT) est un massage énergétique du ventre.\n\nChi Nei Tsang signifie « travailler l'énergie des organes internes ».\n\nC'est un massage doux qui agit en profondeur.\n\nUn toucher qui écoute et qui respecte.\n\nL'approche somato-émotionnelle et énergétique viscérale du massage Chi Nei Tsang consiste à dénouer les tensions des organes et à déceler les tensions viscérales anormales des tissus superficiels et profonds.\n\nC'est au cœur de notre ventre, en notre centre, au niveau du nombril, qu'est le siège de notre énergie vitale.",
        bienfaits: [
          "Évacuer les douleurs abdominales, les crampes intestinales",
          "Favoriser la digestion, l'assimilation et l'élimination",
          "Stimuler le système immunitaire",
          "Améliorer la circulation sanguine",
          "Soulager les douleurs du dos",
          "Stimuler, détoxifier et consolider les organes",
          "Mieux respirer",
          "Rééquilibrer l'équilibre du corps et de son énergie",
          "Libérer les émotions et les mémoires",
          "Se ré-approprier son corps"
        ],
        problematiques: [
          "Stress, angoisses, inquiétudes, peurs",
          "Digestion difficile, constipation",
          "Maux d'estomac, ventre gonflé",
          "Syndrome du colon irritable",
          "Tensions, nœuds et douleurs abdominales",
          "Syndrome prémenstruel, endométriose",
          "Crampes, douleurs ovariennes",
          "Difficultés à concevoir"
        ]
      }
    },
    {
      icon: MessageSquare,
      title: "Eclairage - Coaching",
      description: "Un temps pour déposer ses mots/maux, être éclairé et guidé sur une situation. Élargir son angle de vue, se recentrer, s'écouter.",
      duration: "60 min",
      audience: "Tous",
      price: "65€",
      expandedContent: {
        subtitle: "Un temps pour déposer ses mots/maux",
        content: "Face à certaines situations ou moments de sa vie, parler, se confier, déposer ce que l'on ressent auprès d'une personne disposée et disponible pour nous écouter, nous accueillir et nous comprendre, peut être très libérateur et bienfaisant.\n\nDéposer sa parole et ses ressentis, tout en s'ouvrant à la possibilité de recevoir un éclairage sur sa situation.\n\nSe sentir ouvert et disponible à recevoir mes ressentis, mon éclairage, et une/des proposition(s) d'angle(s) de vue différents, afin de faire bouger une situation.\n\nEt si cela semble se présenter durant l'échange, comme piste supplémentaire de déblocage, il est possible que je vous propose une méditation/soin guidé par ma voix. Également, des « exercices » écrits par exemple… En somme, des propositions qui pourraient vous aider à avancer dans votre situation.\n\nVoici l'espace que je vous propose 🙂\n\nVous offrir mon écoute, mon attention, mon accueil et ma guidance.",
        modalites: "Pour ceux qui ne peuvent recevoir de soin en présentiel, ces séances vous permettent d'être reçu par téléphone ou visio."
      }
    },
    {
      icon: Baby,
      title: "Accompagnement de la femme",
      description: "Il me tient à coeur d'accompagner la femme sur son parcours de vie. Douleurs abdominales, endométriose, parcours de grossesse / de maternité, rapport à son corps…",
      duration: "60-90 min",
      audience: "Femmes",
      price: "70€",
      expandedContent: {
        subtitle: "Un accompagnement énergétique doux, profond et respectueux de la femme quelque soit son parcours de vie.",
        sections: [
          {
            title: "Projet bébé – Parcours de grossesse",
            content: "Que vous vous sentiez en attente d'une grossesse, que vous soyez en parcours PMA, ayez vécu une fausse-couche, un avortement, un deuil périnatal… quelque soit votre histoire autour de la maternité, je me propose de vous aider et de vous accompagner sur votre chemin.\n\nA travers l'écoute, le reiki, le massage du ventre, les soins énergétiques combinés, la présence, l'échange… je fais de mon mieux pour vous accueillir, vous et votre histoire."
          },
          {
            title: "Endométriose",
            content: "On vous a diagnostiqué une endométriose, récemment ou depuis longtemps et vous avez besoin de prendre soin de vous à ce sujet ?\n\nEn complément de votre suivi médical, je me propose de vous accueillir et de vous accompagner.\n\nMembre des soins supports du Centre Endométriose de la Polyclinique de l'Atlantique à St Herblain (44), je vous reçois et vous accueille à mon cabinet pour prendre soin ensemble, dans la douceur, de votre corps et de ce que vous vivez dans votre vie de femme."
          },
          {
            title: "Douleurs, inconfort, trouble abdominal",
            content: "Douleurs à l'estomac, transit perturbé, irritations, sensation de pesanteur, sensation de ventre noué…\n\nEn complément d'un suivi médical, je vous reçois et vous accompagne à travers le massage du ventre (chi nei tsang), ou bien une combinaison de soin énergétique, massage du ventre, ainsi que toute la boîte à outils dont je dispose au besoin pour vous aider au mieux."
          },
          {
            title: "Besoin d'une pause, besoin de douceur",
            content: "Quelque soit ce que vous vivez en ce moment, si vous ressentez un besoin de douceur, le besoin de vous déposer, de relâcher les tensions du quotidien, le stress, de souffler et de prendre un vrai temps pour vous retrouver…\n\nDe prendre le temps de prendre soin de vous en y étant accompagnée, je me propose de vous recevoir et de vous y aider."
          }
        ]
      }
    },
  ];

  return (
    <section id="soins" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Les Soins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes différentes approches thérapeutiques pour votre bien-être
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === index;
            
            return (
              <Card key={index} className="healing-card group w-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {service.title}
                        </h3>
                        {service.price && (
                          <p className="text-secondary font-medium">{service.price}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users2 className="w-4 h-4" />
                        {service.audience}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => setExpandedService(isExpanded ? null : index)}
                    >
                      <div className="flex items-center gap-2">
                        En savoir plus
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </Button>
                    <Button 
                      className="btn-primary"
                      onClick={() => window.open('https://calendly.com/flavie-arnou', '_blank')}
                    >
                      Prendre rendez-vous
                    </Button>
                  </div>
                </CardContent>
                
                {/* Expanded content */}
                {isExpanded && service.expandedContent && (
                  <CardContent className="pt-0 pb-8 px-8">
                    <div className="border-t pt-6">
                      {service.image && (
                        <div className="mb-6">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <h4 className="text-lg font-semibold text-secondary mb-4">
                        {service.expandedContent.subtitle}
                      </h4>
                      
                      <div className="text-muted-foreground leading-relaxed mb-6">
                        {service.expandedContent.content.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Special sections for "Accompagnement de la femme" */}
                      {service.expandedContent.sections && (
                        <div className="space-y-6 mb-6">
                          {service.expandedContent.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h5 className="text-lg font-semibold text-primary mb-3">
                                {section.title}
                              </h5>
                              <div className="text-muted-foreground leading-relaxed">
                                {section.content.split('\n\n').map((paragraph, pIndex) => (
                                  <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bienfaits list */}
                      {service.expandedContent.bienfaits && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-primary mb-3">Bienfaits</h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.expandedContent.bienfaits.map((bienfait, bIndex) => (
                              <li key={bIndex} className="text-muted-foreground flex items-start gap-2">
                                <span className="text-secondary">►</span>
                                {bienfait}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Dans quels cas */}
                      {service.expandedContent.cas && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-primary mb-3">Dans quels cas ?</h5>
                          <ul className="space-y-2">
                            {service.expandedContent.cas.map((cas, cIndex) => (
                              <li key={cIndex} className="text-muted-foreground flex items-start gap-2">
                                <span className="text-secondary">►</span>
                                {cas}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Problématiques */}
                      {service.expandedContent.problematiques && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-primary mb-3">Problématiques traitées</h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.expandedContent.problematiques.map((prob, pIndex) => (
                              <li key={pIndex} className="text-muted-foreground flex items-start gap-2">
                                <span className="text-secondary">►</span>
                                {prob}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Modalités for Eclairage */}
                      {service.expandedContent.modalites && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-primary mb-3">Modalités</h5>
                          <p className="text-muted-foreground">{service.expandedContent.modalites}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-4 pt-4 border-t">
                        <Button 
                          className="btn-primary"
                          onClick={() => window.open('https://calendly.com/flavie-arnou', '_blank')}
                        >
                          Prendre rendez-vous
                        </Button>
                        <Button variant="outline">
                          Poser une question
                        </Button>
                      </div>

                      {service.title === "Accompagnement de la femme" && (
                        <div className="mt-6 pt-4 border-t">
                          <p className="text-sm text-muted-foreground italic">
                            Important : Les soins énergétiques ne se substituent pas à un suivi gynécologique et médical, ils en sont un complément.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Une approche personnalisée */}
          <Card className="healing-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Une approche personnalisée
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Chaque séance est unique et adaptée à vos besoins spécifiques. 
                Je prends le temps de vous écouter pour comprendre vos attentes et 
                vous proposer l'accompagnement le plus approprié.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-primary"
                  onClick={() => window.open('https://calendly.com/flavie-arnou', '_blank')}
                >
                  Réserver une consultation
                </Button>
                <Button variant="outline">
                  Poser une question
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Témoignages */}
          <Card className="healing-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Témoignages
              </h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="space-y-4">
                        <p className="text-muted-foreground italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t pt-4">
                          <p className="font-semibold text-primary">{testimonial.author}</p>
                          <p className="text-sm text-secondary">{testimonial.service}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;