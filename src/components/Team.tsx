import { Camera, Award, Star, Heart, Trophy, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "James Kiprotich",
      position: "Lead Photographer & Creative Director",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      speciality: "Wedding & Portrait Photography",
      experience: "8+ Years",
      icon: <Camera className="w-5 h-5" />,
      description: "James founded Jalim Kings Studio with a vision to capture life's most precious moments. His artistic eye and technical expertise have made him Eldoret's most sought-after wedding photographer.",
      achievements: ["Over 200 weddings captured", "Featured in Kenyan Wedding Magazine", "Award-winning portrait artist"]
    },
    {
      name: "Sarah Cherotich",
      position: "Senior Portrait Photographer",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      speciality: "Fashion & Beauty Photography",
      experience: "6+ Years",
      icon: <Star className="w-5 h-5" />,
      description: "Sarah's keen eye for detail and passion for fashion photography brings out the best in every subject. She specializes in creating stunning portraits that tell compelling stories.",
      achievements: ["1000+ portrait sessions", "Fashion week photographer", "Beauty brand collaborations"]
    },
    {
      name: "David Kiplagat",
      position: "Event & Corporate Photographer",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      speciality: "Corporate Events & Conferences",
      experience: "7+ Years",
      icon: <Trophy className="w-5 h-5" />,
      description: "David's expertise in event photography ensures no moment goes unnoticed. His ability to blend into crowds while capturing key moments makes him invaluable for corporate events.",
      achievements: ["500+ corporate events", "Government event photographer", "International conference coverage"]
    },
    {
      name: "Grace Wanjiku",
      position: "Product & Commercial Photographer",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      speciality: "E-commerce & Brand Photography",
      experience: "5+ Years",
      icon: <Zap className="w-5 h-5" />,
      description: "Grace transforms ordinary products into extraordinary visual stories. Her commercial photography helps brands stand out in competitive markets with stunning product imagery.",
      achievements: ["300+ product campaigns", "Top e-commerce photographer", "Brand partnerships across Kenya"]
    },
    {
      name: "Michael Rotich",
      position: "Wedding Cinematographer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      speciality: "Wedding Films & Music Videos",
      experience: "4+ Years",
      icon: <Heart className="w-5 h-5" />,
      description: "Michael brings cinematic magic to wedding films, creating emotional stories that couples treasure forever. His background in film production adds a professional touch to every project.",
      achievements: ["150+ wedding films", "Music video director", "Cinematic storytelling expert"]
    },
    {
      name: "Lucy Akinyi",
      position: "Studio Manager & Client Relations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      speciality: "Client Experience & Operations",
      experience: "3+ Years",
      icon: <Award className="w-5 h-5" />,
      description: "Lucy ensures every client receives the royal treatment they deserve. Her attention to detail and warm personality make the studio experience memorable from booking to delivery.",
      achievements: ["98% client satisfaction rate", "Luxury service specialist", "Operations excellence award"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Meet The <span className="text-transparent bg-gradient-gold bg-clip-text">Royal Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Behind every perfect shot is a team of passionate professionals dedicated to making 
              your vision come to life. Meet the artists who bring the magic to Jalim Kings Studio.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group bg-card border-border hover:shadow-luxury hover-lift transition-all duration-500 overflow-hidden">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-gold rounded-full p-2 shadow-soft">
                    {member.icon}
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                    <span className="text-sm font-medium text-primary">{member.experience}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Name & Position */}
                  <div className="mb-4">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground">{member.speciality}</p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed mb-4 text-sm">
                    {member.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <Star className="w-3 h-3 text-accent flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-luxury rounded-2xl p-8 shadow-luxury">
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Ready to Work with Our Expert Team?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Each team member brings unique skills and perspectives to ensure your photography 
                experience exceeds expectations. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-soft"
                >
                  Book Your Session
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;