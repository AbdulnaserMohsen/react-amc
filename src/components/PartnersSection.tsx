
import React, { useState } from 'react';

const partners = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/placeholder.svg',
    category: 'financial'
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: '/placeholder.svg',
    category: 'technology'
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: '/placeholder.svg',
    category: 'government'
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: '/placeholder.svg',
    category: 'financial'
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: '/placeholder.svg',
    category: 'technology'
  },
  {
    id: 6,
    name: 'Partner 6',
    logo: '/placeholder.svg',
    category: 'government'
  },
  {
    id: 7,
    name: 'Partner 7',
    logo: '/placeholder.svg',
    category: 'financial'
  },
  {
    id: 8,
    name: 'Partner 8',
    logo: '/placeholder.svg',
    category: 'technology'
  },
];

const PartnersSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPartners = activeFilter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeFilter);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-amc-turquoise font-medium">Collaborations</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-amc-turquoise mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We work with leading organizations to provide the best financial solutions for our clients.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-amc-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setActiveFilter('all')}
          >
            All Partners
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'financial' ? 'bg-amc-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setActiveFilter('financial')}
          >
            Financial
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'technology' ? 'bg-amc-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setActiveFilter('technology')}
          >
            Technology
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${activeFilter === 'government' ? 'bg-amc-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setActiveFilter('government')}
          >
            Government
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredPartners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative w-full h-24 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-16 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                  data-category={partner.category}
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <span className="font-medium text-amc-teal">{partner.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
