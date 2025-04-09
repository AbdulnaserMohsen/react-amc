
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import ImpactSection from '../components/impact/ImpactSection';
import LoanCalculator from '../components/LoanCalculator';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EducationHub from '../components/EducationHub';
import CommunityImpact from '../components/CommunityImpact';
import BranchLocator from '../components/BranchLocator';
import Footer from '../components/Footer';
import AccessibilityWidget from '../components/AccessibilityWidget';
import { Toaster } from '../components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Accessibility Widget */}
      <AccessibilityWidget />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Impact Section */}
      <ImpactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Financial Education Hub - New Section */}
      <EducationHub />
      
      {/* Community Impact Dashboard - New Section */}
      <CommunityImpact />
      
      {/* Loan Calculator Section */}
      <LoanCalculator />
      
      {/* Interactive Branch Locator - New Section */}
      <BranchLocator />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
