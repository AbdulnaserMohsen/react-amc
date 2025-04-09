
import { TrendingUp, Users, Building, Award } from 'lucide-react';
import type { ImpactItem } from './ImpactStats';
import type { GrowthDataItem } from './GrowthChart';

export const growthData: GrowthDataItem[] = [
  { year: '2005', clients: 5 },
  { year: '2010', clients: 50 },
  { year: '2015', clients: 150 },
  { year: '2020', clients: 250 },
  { year: '2023', clients: 304 }
];

export const impactData: ImpactItem[] = [
  { 
    id: 1,
    number: 254,
    title: 'Million JODs',
    subtitle: 'Loans Disbursed',
    color: 'bg-gradient-to-r from-amc-teal to-amc-turquoise',
    icon: TrendingUp,
    description: 'Supporting businesses and individuals across Jordan'
  },
  { 
    id: 2,
    number: 24,
    title: 'Branches',
    subtitle: 'Nationwide Coverage',
    color: 'bg-gradient-to-br from-amc-purple to-purple-700',
    icon: Building,
    description: 'Serving communities in every governorate'
  },
  { 
    id: 3,
    number: 304,
    title: 'Thousand Clients',
    subtitle: 'Served and Growing',
    color: 'bg-gradient-to-r from-amc-yellow to-amber-400',
    icon: Users,
    description: 'Empowering Jordanians with financial solutions'
  },
  { 
    id: 4,
    number: 18,
    title: 'Years',
    subtitle: 'Of Trusted Service',
    color: 'bg-gradient-to-br from-amc-turquoise to-cyan-500',
    icon: Award,
    description: 'Building a legacy of financial inclusion'
  }
];
