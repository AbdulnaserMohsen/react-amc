
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Globe, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 pt-16">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-amc-light text-amc-dark hover:text-amc-turquoise"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="container p-4">
        <div className="flex flex-col space-y-4">
          <Link to="/about" className="px-4 py-3 border-b border-gray-100 text-amc-dark hover:text-amc-teal font-medium" onClick={onClose}>
            About Us
          </Link>
          <div className="px-4 py-3 border-b border-gray-100">
            <button className="flex items-center justify-between w-full text-left text-amc-dark hover:text-amc-teal font-medium">
              <span>Products & Services</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="mt-3 pl-4 space-y-3">
              <Link to="/products/individual" className="block py-2 text-amc-dark hover:text-amc-teal" onClick={onClose}>
                Individual Loans
              </Link>
              <Link to="/products/mses" className="block py-2 text-amc-dark hover:text-amc-teal" onClick={onClose}>
                MSEs Loans
              </Link>
              <Link to="/products/calculator" className="block py-2 text-amc-dark hover:text-amc-teal" onClick={onClose}>
                Loan Calculator
              </Link>
            </div>
          </div>
          <Link to="/digital" className="px-4 py-3 border-b border-gray-100 text-amc-dark hover:text-amc-teal font-medium" onClick={onClose}>
            Digital Services
          </Link>
          <Link to="/contact" className="px-4 py-3 border-b border-gray-100 text-amc-dark hover:text-amc-teal font-medium" onClick={onClose}>
            Contact Us
          </Link>
          <Link to="/branches" className="px-4 py-3 border-b border-gray-100 text-amc-dark hover:text-amc-teal font-medium" onClick={onClose}>
            Branches
          </Link>
        </div>
        
        <div className="mt-8">
          <Button className="w-full bg-gradient-to-r from-amc-teal to-amc-turquoise hover:from-amc-turquoise hover:to-amc-teal text-white">
            Apply Online
          </Button>
          
          <div className="mt-6 flex justify-center space-x-6">
            <Link to="/login" className="flex items-center text-amc-dark hover:text-amc-teal" onClick={onClose}>
              <User className="h-5 w-5 mr-2" />
              <span>Login</span>
            </Link>
            <button className="flex items-center text-amc-dark hover:text-amc-teal">
              <Globe className="h-5 w-5 mr-2" />
              <span>Language</span>
            </button>
          </div>
          
          <div className="mt-6">
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="search" 
                placeholder="Search..." 
                className="w-full bg-gray-50 pl-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amc-teal/20 focus:border-amc-teal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
