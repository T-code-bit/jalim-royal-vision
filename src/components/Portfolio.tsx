import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import weddingImage from '@/assets/portfolio-wedding.jpg';
import portraitImage from '@/assets/portfolio-portrait.jpg';
import productImage from '@/assets/portfolio-product.jpg';
import eventImage from '@/assets/portfolio-event.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Products', 'Studio'];

  const portfolioItems = [
    {
      id: 1,
      image: weddingImage,
      title: "Elegant Wedding Ceremony",
      category: "Weddings",
      description: "Romantic outdoor wedding with stunning natural lighting"
    },
    {
      id: 2,
      image: portraitImage,
      title: "Professional Portrait",
      category: "Portraits",
      description: "Studio portrait with dramatic lighting and professional styling"
    },
    {
      id: 3,
      image: productImage,
      title: "Luxury Product Showcase",
      category: "Products",
      description: "High-end product photography with artistic composition"
    },
    {
      id: 4,
      image: eventImage,
      title: "Corporate Event",
      category: "Events",
      description: "Professional event photography capturing key moments"
    },
    {
      id: 5,
      image: weddingImage,
      title: "Wedding Reception",
      category: "Weddings",
      description: "Candid moments from an elegant wedding reception"
    },
    {
      id: 6,
      image: portraitImage,
      title: "Fashion Portrait",
      category: "Studio",
      description: "Creative studio session with dynamic lighting"
    },
    {
      id: 7,
      image: productImage,
      title: "Commercial Photography",
      category: "Products",
      description: "Clean, professional product shots for e-commerce"
    },
    {
      id: 8,
      image: eventImage,
      title: "Conference Photography",
      category: "Events",
      description: "Professional business event documentation"
    },
    {
      id: 9,
      image: portraitImage,
      title: "Executive Headshots",
      category: "Portraits",
      description: "Professional headshots for business executives"
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      : (lightboxIndex + 1) % filteredItems.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredItems[newIndex].image);
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our <span className="text-transparent bg-gradient-gold bg-clip-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our gallery of stunning photography work that showcases our commitment 
              to excellence and artistic vision.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-gold text-primary shadow-gold'
                    : 'hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover-lift cursor-pointer"
                onClick={() => openLightbox(item.image, index)}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-playfair font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-2">
                    {item.description}
                  </p>
                  <span className="inline-block bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxImage && (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <img
                src={lightboxImage}
                alt="Portfolio item"
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
                <p className="text-white/80">
                  {filteredItems[lightboxIndex]?.description}
                </p>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Ready to Create Your Own Masterpiece?
            </h3>
            <Button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury text-lg px-8 py-4"
            >
              Book Your Session Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;