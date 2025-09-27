import { Camera, Heart, Instagram, Facebook, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Book Session', id: 'booking' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Wedding Photography',
    'Portrait Sessions',
    'Event Coverage',
    'Product Photography',
    'Studio Shoots'
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/jalimkingstudioke/',
      hoverColor: 'hover:text-pink-400'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/jalimkingsstudio',
      hoverColor: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      url: 'https://wa.me/254782662427',
      hoverColor: 'hover:text-green-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-luxury text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Jalim Kings Studio" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-playfair font-bold">Jalim Kings Studio</h3>
                <p className="text-white/70 text-sm">Premium Photography</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Capturing life's most precious moments with premium photography services. 
              Where every shot is royalty.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90">Jalim KIngs Studio, Opposite Sarova</p>
                  <p className="text-white/70 text-sm">Eldoret, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+254782662427"
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  +254 782662427
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:khoolkheed@gmail.com"
                  className="text-white/90 hover:text-accent transition-colors"
                >
                 khoolkheed@gmail.com
                </a>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm mb-2">Business Hours:</p>
                <p className="text-white/90 text-sm">Mon-Sun: 9AM-9PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                © {currentYear} Jalim Kings Studio. All Rights Reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Crafted with <Heart className="w-3 h-3 inline text-accent" /> for creating memories
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/70 hover:text-accent transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3">
            <Camera className="w-5 h-5 text-accent" />
            <span className="text-white/90 font-medium">Ready to capture your story?</span>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-accent hover:text-white transition-colors font-semibold ml-2"
            >
              Book Now →
            </button>
          </div>
        </div>
      </div>

      {/* Logo Watermark */}
      <div className="absolute bottom-4 right-4 opacity-5">
        <img src={logo} alt="" className="h-24 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
