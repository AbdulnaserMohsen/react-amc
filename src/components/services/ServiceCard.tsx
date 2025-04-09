
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Service } from './services-data';

interface ServiceCardProps {
  service: Service;
  isFlipped: boolean;
  onToggleFlip: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isFlipped, onToggleFlip }) => {
  return (
    <div 
      className="perspective-1000 h-[450px] cursor-pointer"
      onClick={onToggleFlip}
    >
      <div 
        className={`preserve-3d transition-all duration-500 h-full w-full relative ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of Card */}
        <Card className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="h-52 relative">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-amc-turquoise mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4">
              <HoverCard>
                <HoverCardTrigger>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full bg-amc-light hover:bg-amc-turquoise hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto px-3 py-1">
                  <span className="text-xs">Flip for more</span>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </Card>
        
        {/* Back of Card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden border-none shadow-lg bg-gradient-to-br from-amc-turquoise to-amc-teal">
          <div className="p-6 flex flex-col justify-between h-full text-white">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{service.title} Details</h3>
              <p className="mb-6">{service.description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-medium">Key Benefits:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-amc-turquoise"
                asChild
              >
                <a href={service.link}>Learn More</a>
              </Button>
              
              <Button 
                variant="default" 
                className="w-full bg-white text-amc-teal hover:bg-gray-100"
                asChild
              >
                <a href={service.applyLink}>Apply Now</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;
