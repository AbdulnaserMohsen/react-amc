
import React, { useEffect } from 'react';
import { initCounters } from '../../scripts/index.js';
import ImpactStats from './ImpactStats';
import GrowthChart from './GrowthChart';
import JourneyTimeline from './JourneyTimeline';
import { impactData, growthData } from './data';

const ImpactSection = () => {
  useEffect(() => {
    // Initialize counters when the component mounts
    initCounters();
    
    // Clean up function if needed
    return () => {
      // Any cleanup code if necessary
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <span className="text-amc-turquoise font-medium">Our Impact</span>
        <h2 className="text-4xl font-bold mt-2 mb-8">
          Transforming Lives and Communities
        </h2>
        <div className="w-20 h-1 bg-amc-turquoise mx-auto mb-12"></div>

        {/* Impact Statistics */}
        <ImpactStats impactData={impactData} />

        {/* Growth Chart */}
        <GrowthChart growthData={growthData} />

        {/* Journey Timeline */}
        <JourneyTimeline />
      </div>
    </section>
  );
};

export default ImpactSection;
