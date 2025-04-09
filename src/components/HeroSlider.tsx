
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/lovable-uploads/380b3a51-d334-410d-9681-d928ac81b780.png",
    title: "A convenient channel to pay your installments",
    description: "Pay through EFAWATEER.com for a seamless experience",
    ctaText: "Read More",
    ctaLink: "/digital-services",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Fast & Simple Financing Solutions",
    description: "Get quick access to the financial support you need",
    ctaText: "Apply Now",
    ctaLink: "/apply",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Supporting Small Businesses",
    description: "Specialized loans for MSEs to help your business grow",
    ctaText: "Learn More",
    ctaLink: "/products/mses",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative overflow-hidden h-[80vh] min-h-[600px]">
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-hidden={index !== currentSlide}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          <div className="relative h-full container-custom flex flex-col justify-center items-start">
            <div className="max-w-xl space-y-6">
              <div className="w-20 h-1 bg-amc-turquoise"></div>
              <h1 className={cn(
                "text-3xl md:text-5xl lg:text-6xl text-white font-bold",
                index === currentSlide && "animate-fade-in"
              )}>
                {slide.title}
              </h1>
              <p className={cn(
                "text-white/90 text-lg md:text-xl",
                index === currentSlide && "animate-fade-in"
              )}>
                {slide.description}
              </p>
              <div className={cn(
                "flex space-x-4 items-center pt-4",
                index === currentSlide && "animate-fade-in"
              )}>
                <Button 
                  asChild
                  variant="default" 
                  className="bg-amc-turquoise hover:bg-amc-teal text-white px-8 py-6 text-lg rounded-md"
                >
                  <a href={slide.ctaLink}>
                    {slide.ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amc-teal"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full z-10 transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full z-10 transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'w-10 bg-amc-turquoise' : 'w-3 bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
