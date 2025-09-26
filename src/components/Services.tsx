import { Camera, Heart, Briefcase, Package, User, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Portrait Photography",
      price: "From KES 100",
      description: "Professional headshots and personal portraits with studio-quality lighting and editing.",
      features: ["Professional lighting", "Multiple outfit changes", "High-resolution images", "Basic retouching"],
      popular: false
    },
    {
      icon: Heart,
      title: "Wedding Packages",
      price: "From KES 40,000",
      description: "Complete wedding coverage from preparation to reception with cinematic storytelling.",
      features: ["Pre-wedding consultation", "Full day coverage", "Professional editing", "Online gallery", "Print package"],
      popular: true
    },
    {
      icon: Briefcase,
      title: "Event Photography",
      price: "From KES 30,000 Based on the type of event",
      description: "Corporate events, parties, and special occasions captured with professional precision.",
      features: ["Event coverage", "Candid moments", "Group photos", "Same-day preview"],
      popular: false
    },
    {
      icon: Package,
      title: "Product Photography",
      price: "From KES 500",
      description: "Commercial product photography for e-commerce, catalogs, and marketing materials.",
      features: ["Multiple angles", "Clean backgrounds", "Lifestyle shots", "Quick turnaround"],
      popular: false
    },
    {
      icon: Camera,
      title: "Studio Shoots",
      price: "From KES 100",
      description: "Professional studio sessions with complete lighting setup and backdrop options.",
      features: ["Studio rental", "Professional lighting", "Multiple backdrops", "Outfit changes"],
      popular: false
    },
    {
      icon: Crown,
      title: "Custom Packages",
      price: "On Request",
      description: "Tailored photography solutions designed specifically for your unique requirements.",
      features: ["Consultation", "Custom planning", "Flexible pricing", "Personalized service"],
      popular: false
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-luxury rounded-full mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Premium <span className="text-transparent bg-gradient-gold bg-clip-text">Photography</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional photography services tailored to capture your most important moments 
              with the luxury and attention to detail you deserve.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-card rounded-2xl p-8 shadow-soft hover-lift transition-all duration-300 border ${
                    service.popular 
                      ? 'border-accent shadow-gold' 
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-gold text-primary text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    service.popular 
                      ? 'bg-gradient-gold' 
                      : 'bg-gradient-luxury'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      service.popular ? 'text-primary' : 'text-white'
                    }`} />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-accent mb-4">
                    {service.price}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToBooking}
                    className={`w-full ${
                      service.popular 
                        ? 'btn-luxury' 
                        : 'btn-royal'
                    }`}
                  >
                    {service.title === "Custom Packages" ? "Get Quote" : "Book Now"}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-luxury">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Not Sure Which Package is Right for You?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Our team is here to help you choose the perfect photography package that 
              fits your needs and budget. Get in touch for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToBooking}
                className="btn-luxury text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/254782662427', '_blank')}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-lg px-8 py-4"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
