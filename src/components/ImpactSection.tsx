
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Building, Award, ChartBar } from 'lucide-react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const growthData = [
  { year: '2005', clients: 5 },
  { year: '2010', clients: 50 },
  { year: '2015', clients: 150 },
  { year: '2020', clients: 250 },
  { year: '2023', clients: 304 }
];

const impactData = [
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

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const step = end / (duration / 16);
    let animationFrame;
    
    const animate = () => {
      start += step;
      setCount(Math.min(start, end));
      
      if (start < end) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{Math.floor(count)}</span>;
};

const ImpactSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amc-light rounded-full opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amc-light rounded-full opacity-40"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-amc-turquoise/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-amc-purple/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-amc-yellow/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="inline-block px-3 py-1 text-amc-turquoise font-medium bg-amc-turquoise/10 rounded-full text-sm mb-3">
            Our Growth Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amc-teal to-amc-turquoise inline-block">
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-amc-turquoise mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            For over a decade, AMC has been dedicated to empowering individuals and businesses 
            across Jordan through accessible financial services.
          </p>
        </div>
        
        {/* Stats Grid */}
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
        
        {/* Growth Chart */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-16">
          <h3 className="text-xl font-semibold mb-4 text-amc-teal">Client Growth Over Time</h3>
          <div className="h-64">
            <ChartContainer
              config={{
                clients: { theme: { light: "#00878a", dark: "#00b8bd" } },
              }}
            >
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00b8bd" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00b8bd" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) => `${value}K`}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-4 border rounded shadow">
                          <p className="text-sm font-medium">Year: {payload[0].payload.year}</p>
                          <p className="text-sm font-medium text-amc-teal">
                            {payload[0].value}K Clients
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="clients"
                  stroke="#00878a"
                  strokeWidth={3}
                  fill="url(#colorClients)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
        
        {/* Journey Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="h-1 bg-gray-200 absolute top-6 left-0 right-0 z-0"></div>
            
            <div className="flex justify-between relative z-10">
              <div className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amc-turquoise text-white flex items-center justify-center font-medium mb-3 shadow-lg">
                  2005
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
                  <p className="text-sm font-medium">Founded</p>
                  <p className="text-xs text-gray-500">Our journey began</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amc-teal text-white flex items-center justify-center font-medium mb-3 shadow-lg">
                  2010
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
                  <p className="text-sm font-medium">10K Clients</p>
                  <p className="text-xs text-gray-500">First milestone</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amc-purple text-white flex items-center justify-center font-medium mb-3 shadow-lg">
                  2015
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
                  <p className="text-sm font-medium">100K Clients</p>
                  <p className="text-xs text-gray-500">Rapid growth</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amc-yellow text-white flex items-center justify-center font-medium mb-3 shadow-lg animate-pulse">
                  2023
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-100 w-32">
                  <p className="text-sm font-medium">300K+ Clients</p>
                  <p className="text-xs text-gray-500">Market leader</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional context */}
          <div className="text-center mt-16">
            <p className="text-gray-600 max-w-2xl mx-auto">
              As we continue to grow, our commitment remains the same: providing accessible 
              financial solutions that empower Jordanians to achieve their goals.
            </p>
            <button className="mt-6 px-6 py-2 bg-amc-teal text-white rounded-full hover:bg-amc-turquoise transition-colors shadow-md">
              Learn More About Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
