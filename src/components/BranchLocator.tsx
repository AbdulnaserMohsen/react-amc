
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const branches = [
  {
    id: 1,
    name: 'Amman Headquarters',
    address: '23 King Hussein Street, Amman',
    phone: '+962 6 500 1234',
    hours: '9:00 AM - 5:00 PM',
    location: { lat: 31.9539, lng: 35.9106 },
    region: 'Amman',
    services: ['Personal Loans', 'Business Loans', 'MSE Services', 'Digital Banking']
  },
  {
    id: 2,
    name: 'Irbid Branch',
    address: '15 University Street, Irbid',
    phone: '+962 2 700 5678',
    hours: '9:00 AM - 4:30 PM',
    location: { lat: 32.5568, lng: 35.8469 },
    region: 'North',
    services: ['Personal Loans', 'Business Loans', 'Digital Banking']
  },
  {
    id: 3,
    name: 'Aqaba Branch',
    address: '45 Corniche Road, Aqaba',
    phone: '+962 3 200 9876',
    hours: '9:00 AM - 4:00 PM',
    location: { lat: 29.5321, lng: 35.0063 },
    region: 'South',
    services: ['Personal Loans', 'MSE Services', 'Digital Banking']
  },
  {
    id: 4,
    name: 'Zarqa Branch',
    address: '12 Main Street, Zarqa',
    phone: '+962 5 300 4567',
    hours: '9:00 AM - 4:30 PM',
    location: { lat: 32.0650, lng: 36.0886 },
    region: 'Central',
    services: ['Personal Loans', 'Business Loans', 'Digital Banking']
  }
];

const BranchLocator = () => {
  const [region, setRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [service, setService] = useState('all');
  
  const filteredBranches = branches.filter(branch => {
    // Filter by region
    const regionMatch = region === 'all' || branch.region === region;
    
    // Filter by service
    const serviceMatch = service === 'all' || branch.services.includes(service);
    
    // Filter by search query
    const searchMatch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       branch.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    return regionMatch && serviceMatch && searchMatch;
  });
  
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="section-title">Find a Branch Near You</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Visit one of our branches across Jordan for personalized financial services and expert advice
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="glass-card p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block text-gray-700">Search Branches</label>
              <Input 
                placeholder="Search by name or address" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border-gray-200"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block text-gray-700">Filter by Region</label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Amman">Amman</SelectItem>
                  <SelectItem value="North">Northern Region</SelectItem>
                  <SelectItem value="South">Southern Region</SelectItem>
                  <SelectItem value="Central">Central Region</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block text-gray-700">Filter by Service</label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="Personal Loans">Personal Loans</SelectItem>
                  <SelectItem value="Business Loans">Business Loans</SelectItem>
                  <SelectItem value="MSE Services">MSE Services</SelectItem>
                  <SelectItem value="Digital Banking">Digital Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Map View (Placeholder) */}
        <div className="glass-card overflow-hidden mb-10 h-[400px] relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">Map integration would display branch locations here</p>
            </div>
          </div>
        </div>
        
        {/* Branch List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBranches.map((branch) => (
            <Card key={branch.id} className="glass-card overflow-hidden hover:shadow-2xl transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{branch.name}</h3>
                
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{branch.address}</p>
                </div>
                
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{branch.phone}</p>
                </div>
                
                <div className="flex items-center mb-5">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{branch.hours}</p>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-primary border-primary hover:bg-primary hover:text-white"
                  >
                    Get Directions
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex items-center bg-primary hover:bg-primary/90"
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* No Results */}
        {filteredBranches.length === 0 && (
          <div className="text-center py-10">
            <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No branches found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center mt-10 pt-6">
          <p className="text-gray-600 mb-4">Can't find a branch near you?</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white">
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;
