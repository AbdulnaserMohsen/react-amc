
export const services = [
  {
    id: 1,
    title: 'Individual Loans',
    description: 'Easy access personal loans to fulfill your needs',
    image: '/placeholder.svg', 
    link: '/products/individual',
    applyLink: '/apply/individual',
    features: [
      'Competitive interest rates', 
      'Flexible payment terms', 
      'Quick approval process'
    ]
  },
  {
    id: 2,
    title: 'MSEs Loans',
    description: 'Supporting small businesses and entrepreneurs',
    image: '/placeholder.svg',
    link: '/products/mses',
    applyLink: '/apply/mses',
    features: [
      'Business expansion financing', 
      'Equipment & inventory loans', 
      'Tailored repayment schedules'
    ]
  },
  {
    id: 3,
    title: 'Digital Services',
    description: 'Access our services anytime, anywhere',
    image: '/placeholder.svg',
    link: '/digital',
    applyLink: '/digital',
    features: [
      'Mobile app accessibility', 
      'Online loan applications', 
      'Secure payment options'
    ]
  }
];

export const categoryTabs = [
  { id: 'all', label: 'All Services' },
  { id: 'loans', label: 'Loans' },
  { id: 'digital', label: 'Digital Services' }
];

export type Service = typeof services[0];
