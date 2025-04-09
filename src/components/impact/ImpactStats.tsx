
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Counter from './ImpactCounter';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

export interface ImpactItem {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ElementType;
  description: string;
}

interface ImpactStatsProps {
  impactData: ImpactItem[];
}

const ImpactStats = ({ impactData }: ImpactStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
      {impactData.map((item) => (
        <Card 
          key={item.id} 
          className={`${item.color} border-none shadow-xl overflow-hidden transform transition-all 
            hover:-translate-y-2 hover:shadow-2xl group rounded-xl`}
        >
          <CardContent className="p-8 flex flex-col items-center justify-center min-h-[240px] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <item.icon className="h-40 w-40 text-white" />
            </div>
            
            <div className="z-10 text-center">
              <span className="text-6xl md:text-7xl font-bold text-white mb-2 block">
                <Counter end={item.number} />
              </span>
              <h3 className="text-2xl font-medium text-white mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-white/90 mb-4">{item.subtitle}</p>
              )}
              <p className="text-white/80 text-sm mt-2 px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                {item.description}
              </p>
            </div>
            
            {/* Animated overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImpactStats;
