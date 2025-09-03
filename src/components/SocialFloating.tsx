import { Instagram, Facebook, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const SocialFloating = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/jalimkingsstudio',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.tiktok.com/@jalimkingstudiospa23?_t=ZM-8zPlUN6zwla&_r=1',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      url: 'https://wa.me/254700000000',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Social Media Icons */}
      <div className={`flex flex-col space-y-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <button
              key={social.name}
              onClick={() => window.open(social.url, '_blank')}
              className={`w-12 h-12 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 text-white group`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={social.name}
            >
              <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          );
        })}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-gold hover:shadow-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
        title="Social Media"
      >
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
          {isExpanded ? (
            <div className="w-6 h-0.5 bg-primary relative">
              <div className="w-6 h-0.5 bg-primary absolute top-0 left-0 rotate-90" />
            </div>
          ) : (
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-primary" />
              <div className="w-5 h-0.5 bg-primary" />
              <div className="w-5 h-0.5 bg-primary" />
            </div>
          )}
        </div>
      </button>

      {/* Pulse Effect */}
      <div className="absolute bottom-0 right-0 w-14 h-14 bg-accent/30 rounded-full animate-ping pointer-events-none" />
    </div>
  );
};

export default SocialFloating;
