import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    addOns: [] as string[]
  });

  const services = [
    'Portrait Photography',
    'Wedding Package',
    'Event Photography',
    'Product Photography',
    'Studio Shoot',
    'Custom Package'
  ];

  const addOns = [
    { id: 'makeup', label: 'Professional Makeup', price: 'KES 2,000' },
    { id: 'video', label: 'Video Recording', price: 'KES 5,000' },
    { id: 'prints', label: 'Premium Prints Package', price: 'KES 3,000' },
    { id: 'rush', label: 'Rush Delivery (24hrs)', price: 'KES 1,500' }
  ];

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      addOns: checked 
        ? [...prev.addOns, addOnId]
        : prev.addOns.filter(id => id !== addOnId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const selectedAddOns = addOns
      .filter(addOn => formData.addOns.includes(addOn.id))
      .map(addOn => `${addOn.label} (${addOn.price})`)
      .join(', ');

    const message = `Hi! I'd like to book a photography session with Jalim Kings Studio.

*Details:*
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Preferred Date: ${formData.date}
${selectedAddOns ? `- Add-ons: ${selectedAddOns}` : ''}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/254782662427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Book Your <span className="text-transparent bg-gradient-luxury bg-clip-text">Royal</span> Session
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to capture your special moments? Fill out the form below and we'll get back to you 
              within 24 hours to discuss your photography needs.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl p-8 shadow-luxury border border-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center">
                    <User className="w-4 h-4 mr-2 text-accent" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-secondary/50 border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-accent" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com     "
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="bg-secondary/50 border-border focus:border-accent"
                  />
                </div>
              </div>

              {/* Contact & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-accent" />
                    WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="bg-secondary/50 border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-accent" />
                    Select Service *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border focus:border-accent">
                      <SelectValue placeholder="Choose your photography service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-accent" />
                  Preferred Date
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="bg-secondary/50 border-border focus:border-accent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-foreground">
                  Optional Add-ons
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg border border-border">
                      <Checkbox
                        id={addOn.id}
                        checked={formData.addOns.includes(addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <label htmlFor={addOn.id} className="text-sm font-medium text-foreground cursor-pointer">
                          {addOn.label}
                        </label>
                        <div className="text-xs text-accent font-semibold">
                          {addOn.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-accent" />
                  Additional Details
                </label>
                <Textarea
                  placeholder="Tell us more about your vision, specific requirements, or any questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="bg-secondary/50 border-border focus:border-accent min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="btn-luxury text-lg px-12 py-4 w-full md:w-auto"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.service}
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Send WhatsApp Message
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  This will open WhatsApp with your booking details pre-filled. 
                  We'll respond within 24 hours to confirm your session.
                </p>
              </div>
            </form>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
              Prefer to Call or Chat Directly?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('tel:+254782662427', '_self')}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us: +254 782 662 427
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/254782662427', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
