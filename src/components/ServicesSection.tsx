
import React, { useState } from 'react';
import { services } from './services/services-data';
import ServiceCard from './services/ServiceCard';
import ServiceTabs from './services/ServiceTabs';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amc-light rounded-bl-full opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amc-light rounded-tr-full opacity-50 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-amc-turquoise font-medium">What We Offer</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amc-turquoise mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Discover our range of financial solutions designed to meet your personal 
            and business needs with flexible terms and competitive rates.
          </p>
        </div>
        
        <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isFlipped={flippedCards.includes(service.id)}
              onToggleFlip={() => toggleFlip(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
