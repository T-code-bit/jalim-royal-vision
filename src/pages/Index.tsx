import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialFloating from '@/components/SocialFloating';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Booking Section */}
        <Booking />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Social Media */}
      <SocialFloating />
    </div>
  );
};

export default Index;
