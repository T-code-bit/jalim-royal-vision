import { useState, useEffect } from 'react';
import { Menu, X, Camera, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img src={logo} alt="Jalim Kings Studio" className="h-12 w-auto" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-bold text-primary">
                Jalim Kings Studio
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Premium Photography</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('booking')}
              className="hidden sm:flex btn-luxury"
            >
              <Camera className="w-4 h-4 mr-2" />
              Book Session
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
            <nav className="container mx-auto px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="w-full btn-luxury mt-4"
              >
                <Camera className="w-4 h-4 mr-2" />
                Book Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;