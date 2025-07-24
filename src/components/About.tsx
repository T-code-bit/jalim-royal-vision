import { Crown, Award, Users, Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              The Story Behind <span className="text-transparent bg-gradient-gold bg-clip-text">Jalim Kings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a passion for capturing life's most precious moments, Jalim Kings Studio 
              has been Eldoret's premier photography destination, transforming ordinary occasions 
              into extraordinary visual stories.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                Our Philosophy
              </h3>
              <p className="text-foreground leading-relaxed">
                At Jalim Kings Studio, we believe that every moment deserves to be captured with 
                the same care and artistry as royalty. Our approach combines technical excellence 
                with creative vision to deliver photographs that don't just document—they enchant.
              </p>
              <p className="text-foreground leading-relaxed">
                From intimate portraits to grand celebrations, we bring a luxury touch to every 
                project, ensuring that your memories are preserved with the elegance they deserve.
              </p>
              
              {/* Mission Statement */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
                <h4 className="font-playfair font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground italic">
                  "To elevate photography from a service to an art form, creating timeless images 
                  that celebrate the beauty and significance of life's most important moments."
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg shadow-soft hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-playfair font-semibold text-primary mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Uncompromising quality in every shot
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-lg shadow-soft hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury/20 rounded-full mb-4">
                    <Users className="w-6 h-6 text-luxury" />
                  </div>
                  <h4 className="font-playfair font-semibold text-primary mb-2">Personal Touch</h4>
                  <p className="text-sm text-muted-foreground">
                    Tailored service for every client
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-lg shadow-soft hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-playfair font-semibold text-primary mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Latest techniques and equipment
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-lg shadow-soft hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury/20 rounded-full mb-4">
                    <Crown className="w-6 h-6 text-luxury" />
                  </div>
                  <h4 className="font-playfair font-semibold text-primary mb-2">Luxury</h4>
                  <p className="text-sm text-muted-foreground">
                    Premium experience from start to finish
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Recognition */}
          <div className="text-center bg-gradient-luxury rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Recognized Excellence
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Proud recipient of multiple photography awards and featured in regional publications 
              for our innovative approach to luxury photography services.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">2024</div>
                <div className="text-sm">Best Studio Award</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">500+</div>
                <div className="text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;