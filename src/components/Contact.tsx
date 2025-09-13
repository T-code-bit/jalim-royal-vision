import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["Eldoret, Kenya", "University of Eldoret", "Opposite Sarova Hotel"],
      action: () => window.open('https://maps.google.com/?q=Eldoret,Kenya', '_blank')
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+254 782662427", "Available 9AM - 9PM", "Quick Response Guaranteed"],
      action: () => window.open('tel:+254782662427', '_self')
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["khoolkheed@gmail.com", "Inquiries & Bookings", "24-hour Response Time"],
      action: () => window.open('khoolkheed@gmail.com', '_self')
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Sunday", "9:00 AM - 9:00 PM", "Flexible Scheduling Available"],
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@jalimkingsstudio",
      url: "https://instagram.com/jalimkingsstudiospa123",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Jalim Kings Studio",
      url: "https://facebook.com/jalimkingsstudiospa123",
      color: "hover:text-blue-600"
    },
    {
      icon: MessageSquare,
      name: "WhatsApp",
      handle: "Chat Instantly",
      url: "https://wa.me/254782662427",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Get In <span className="text-transparent bg-gradient-gold bg-clip-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to book your session or have questions about our services? 
              We're here to help make your photography dreams come true.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-card rounded-2xl p-6 shadow-soft hover-lift border border-border ${
                        info.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className={`text-sm ${
                                detailIndex === 0 
                                  ? 'text-foreground font-semibold' 
                                  : 'text-muted-foreground'
                              } ${detailIndex > 0 ? 'mt-1' : ''}`}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                  Find Our Studio
                </h3>
                <div className="bg-secondary/50 rounded-lg h-64 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Interactive Map</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      University of Eldoret, Opposite Sarova Hotel, Eldoret
                    </p>
                    <Button
                      onClick={() => window.open('https://maps.google.com/?q=University Of Eldoret,Kenya', '_blank')}
                      className="mt-4 btn-luxury"
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Actions */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h3 className="text-lg font-playfair font-bold text-primary mb-6">
                  Follow Our Work
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => window.open(social.url, '_blank')}
                        className={`w-full flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-all duration-300 group ${social.color}`}
                      >
                        <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-foreground">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.handle}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-luxury rounded-2xl p-6 shadow-luxury text-center">
                <h3 className="text-xl font-playfair font-bold text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 mb-6 text-sm">
                  Our team is available to answer your questions and help you 
                  plan the perfect photography session.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => window.open('https://wa.me/254782662427', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Now
                  </Button>
                  <Button
                    onClick={() => window.open('tel:+254782662427', '_self')}
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/20"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Direct
                  </Button>
                </div>
              </div>

              {/* Business Hours Detail */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-semibold">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-4">
                    <p className="text-accent text-xs font-semibold">
                      Emergency sessions available by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
