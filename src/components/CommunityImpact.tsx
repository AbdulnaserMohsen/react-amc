
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Users, TreePine, Briefcase, Home } from 'lucide-react';

const impactData = [
  {
    id: 1,
    title: 'Jobs Created',
    value: 15600,
    icon: Briefcase,
    color: '#00878a',
    change: '+12%'
  },
  {
    id: 2,
    title: 'Families Supported',
    value: 42000,
    icon: Home,
    color: '#00b8bd',
    change: '+8%'
  },
  {
    id: 3,
    title: 'Environmental Projects',
    value: 320,
    icon: TreePine,
    color: '#ffd100',
    change: '+27%'
  },
  {
    id: 4,
    title: 'Community Programs',
    value: 186,
    icon: Users,
    color: '#542c5a',
    change: '+15%'
  }
];

const regionData = [
  { name: 'Amman', loans: 12500, businesses: 4200 },
  { name: 'Irbid', loans: 7800, businesses: 2600 },
  { name: 'Zarqa', loans: 6200, businesses: 1900 },
  { name: 'Aqaba', loans: 4100, businesses: 1300 },
  { name: 'Madaba', loans: 2800, businesses: 950 },
  { name: 'Others', loans: 5600, businesses: 1850 }
];

const sectorData = [
  { name: 'Retail', value: 35 },
  { name: 'Services', value: 25 },
  { name: 'Manufacturing', value: 20 },
  { name: 'Agriculture', value: 12 },
  { name: 'Tech', value: 8 }
];

const COLORS = ['#00878a', '#00b8bd', '#ffd100', '#542c5a', '#3a86ff'];

const CommunityImpact = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-3">
            Making A Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="section-title">Our Community Impact</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Beyond providing financial services, we're committed to creating positive change
            in communities across Jordan through sustainable initiatives.
          </p>
        </div>
        
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactData.map((item) => (
            <div 
              key={item.id}
              className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden group"
              style={{
                backgroundImage: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
                borderLeft: `4px solid ${item.color}`
              }}
            >
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon size={100} />
              </div>
              
              <div className="mb-4 p-3 rounded-full" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                <item.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                {item.value.toLocaleString()}
              </h3>
              
              <p className="text-gray-600 mb-2">{item.title}</p>
              
              <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                {item.change} from last year
              </span>
            </div>
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Regional Impact */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Regional Impact</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eaeaea" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Legend />
                  <Bar name="Loans Provided" dataKey="loans" fill="#00878a" radius={[4, 4, 0, 0]} />
                  <Bar name="Businesses Supported" dataKey="businesses" fill="#ffd100" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Sector Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Sector Distribution</h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Initiatives */}
        <div className="glass-card p-8 bg-gradient-to-r from-primary/10 to-secondary/5">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Recent Community Initiatives</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Women Entrepreneurship Program</h4>
              <p className="text-gray-600 text-sm mb-4">Providing training and financial support to women entrepreneurs across Jordan.</p>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">350+ Participants</span>
                <span className="text-gray-500">Since 2022</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Youth Financial Literacy</h4>
              <p className="text-gray-600 text-sm mb-4">Educational programs in schools teaching basic financial concepts to students.</p>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">5,200+ Students</span>
                <span className="text-gray-500">40+ Schools</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Rural Development Fund</h4>
              <p className="text-gray-600 text-sm mb-4">Special financing options for rural businesses to promote economic growth outside urban centers.</p>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-primary">JOD 2.5M Disbursed</span>
                <span className="text-gray-500">12 Communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
