
import React from 'react';
import { useToast } from '@/hooks/use-toast';

const JourneyTimeline = () => {
  const { toast } = useToast();

  const showMilestoneDetails = (year: string) => {
    const milestoneDetails: Record<string, string> = {
      "2005": "AMC was founded with a mission to provide financial services to underserved communities in Jordan.",
      "2010": "Reached our first milestone of 10,000 clients and expanded to 5 branches across the country.",
      "2015": "Surpassed 100,000 clients and launched digital banking services to reach rural communities.",
      "2023": "Serving over 300,000 clients with 25+ branches and recognized as a market leader in microfinance."
    };

    toast({
      title: `Milestone: ${year}`,
      description: milestoneDetails[year] || "Additional milestone details coming soon.",
      variant: "default",
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <h3 className="text-center text-2xl font-semibold mb-12 text-amc-teal">Our Journey Through the Years</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="h-1 bg-gray-200 absolute top-6 left-0 right-0 z-0"></div>
        
        <div className="flex justify-between relative z-10">
          <div className="text-center flex flex-col items-center">
            <div 
              className="w-12 h-12 rounded-full bg-amc-turquoise text-white flex items-center justify-center font-medium mb-3 shadow-lg cursor-pointer hover:scale-110 transition-transform"
              onClick={() => showMilestoneDetails("2005")}
            >
              2005
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
              <p className="text-sm font-medium">Founded</p>
              <p className="text-xs text-gray-500">Our journey began</p>
            </div>
          </div>
          
          <div className="text-center flex flex-col items-center">
            <div 
              className="w-12 h-12 rounded-full bg-amc-teal text-white flex items-center justify-center font-medium mb-3 shadow-lg cursor-pointer hover:scale-110 transition-transform"
              onClick={() => showMilestoneDetails("2010")}
            >
              2010
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
              <p className="text-sm font-medium">10K Clients</p>
              <p className="text-xs text-gray-500">First milestone</p>
            </div>
          </div>
          
          <div className="text-center flex flex-col items-center">
            <div 
              className="w-12 h-12 rounded-full bg-amc-purple text-white flex items-center justify-center font-medium mb-3 shadow-lg cursor-pointer hover:scale-110 transition-transform"
              onClick={() => showMilestoneDetails("2015")}
            >
              2015
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
              <p className="text-sm font-medium">100K Clients</p>
              <p className="text-xs text-gray-500">Rapid growth</p>
            </div>
          </div>
          
          <div className="text-center flex flex-col items-center">
            <div 
              className="w-12 h-12 rounded-full bg-amc-yellow text-amc-dark flex items-center justify-center font-medium mb-3 shadow-lg animate-pulse cursor-pointer hover:scale-110 transition-transform"
              onClick={() => showMilestoneDetails("2023")}
            >
              2023
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
              <p className="text-sm font-medium">300K+ Clients</p>
              <p className="text-xs text-gray-500">Market leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
