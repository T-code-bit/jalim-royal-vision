import { useEffect, useState } from 'react';
import { Camera, Eye, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-studio.jpg';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium Photography Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-luxury/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
            Where Every Shot is{' '}
            <span className="text-transparent bg-gradient-gold bg-clip-text animate-glow">
              Royalty
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Capturing life's most precious moments with premium photography services 
            that transform ordinary occasions into extraordinary memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('booking')}
              className="btn-luxury text-lg px-8 py-4 group"
            >
              <Camera className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Book a Session
            </Button>
            
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-royal text-lg px-8 py-4 group"
            >
              <Eye className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-white">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-accent">500+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-accent">3+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-accent">100%</div>
              <div className="text-sm text-white/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-accent transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-luxury/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;