import React from 'react';
import { BookOpen, Video, FileText, Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const resources = [
  {
    id: 1,
    title: 'Understanding Personal Loans',
    type: 'article',
    icon: FileText,
    description: 'Learn the basics of personal loans, interest rates, and how to manage repayments effectively.',
    link: '#'
  },
  {
    id: 2,
    title: 'Business Growth Strategies',
    type: 'video',
    icon: Video,
    description: 'Expert tips on utilizing business loans to accelerate growth and maximize returns.',
    link: '#'
  },
  {
    id: 3,
    title: 'Financial Planning Toolkit',
    type: 'download',
    icon: FileText,
    description: 'Free downloadable templates to help you plan your finances and track your goals.',
    link: '#'
  },
  {
    id: 4,
    title: 'Saving vs Investing',
    type: 'video',
    icon: Video,
    description: 'Understanding the difference between saving and investing, and when to do each.',
    link: '#'
  },
  {
    id: 5,
    title: 'Debt Management Guide',
    type: 'article',
    icon: BookOpen,
    description: 'Practical strategies to manage and reduce debt while building financial security.',
    link: '#'
  },
  {
    id: 6,
    title: 'Tax Planning for SMEs',
    type: 'download',
    icon: Calculator,
    description: 'Essential tax planning strategies for small and medium enterprises in Jordan.',
    link: '#'
  }
];

const EducationHub = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-secondary rounded-full text-sm font-medium mb-3">
            Financial Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="section-title">Financial Knowledge Hub</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Access free resources to improve your financial literacy and make informed decisions
            about your personal and business finances.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="calculators">Calculators</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <Card key={resource.id} className="glass-card overflow-hidden hover:shadow-2xl group h-full">
                  <CardContent className="p-0">
                    <div className="p-1">
                      <div className={`h-3 w-full ${
                        resource.type === 'article' ? 'bg-blue-500' :
                        resource.type === 'video' ? 'bg-red-500' :
                        resource.type === 'download' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className={`p-3 rounded-lg mr-4 ${
                            resource.type === 'article' ? 'bg-blue-100 text-blue-600' :
                            resource.type === 'video' ? 'bg-red-100 text-red-600' :
                            resource.type === 'download' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                          }`}>
                            <resource.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded bg-gray-100">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{resource.description}</p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-secondary flex items-center"
                          asChild
                        >
                          <a href={resource.link}>
                            {resource.type === 'download' ? 'Download Now' : 
                             resource.type === 'video' ? 'Watch Video' : 
                             'Read Article'}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(r => r.type === 'article').map((resource) => (
                <Card key={resource.id} className="glass-card overflow-hidden hover:shadow-2xl group h-full">
                  <CardContent className="p-0">
                    <div className="p-1">
                      <div className="h-3 w-full bg-blue-500"></div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="p-3 rounded-lg mr-4 bg-blue-100 text-blue-600">
                            <resource.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded bg-gray-100">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{resource.description}</p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-secondary flex items-center"
                          asChild
                        >
                          <a href={resource.link}>Read Article</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(r => r.type === 'video').map((resource) => (
                <Card key={resource.id} className="glass-card overflow-hidden hover:shadow-2xl group h-full">
                  <CardContent className="p-0">
                    <div className="p-1">
                      <div className="h-3 w-full bg-red-500"></div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="p-3 rounded-lg mr-4 bg-red-100 text-red-600">
                            <resource.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded bg-gray-100">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{resource.description}</p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-secondary flex items-center"
                          asChild
                        >
                          <a href={resource.link}>Watch Video</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="downloads" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(r => r.type === 'download').map((resource) => (
                <Card key={resource.id} className="glass-card overflow-hidden hover:shadow-2xl group h-full">
                  <CardContent className="p-0">
                    <div className="p-1">
                      <div className="h-3 w-full bg-green-500"></div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="p-3 rounded-lg mr-4 bg-green-100 text-green-600">
                            <resource.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded bg-gray-100">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{resource.description}</p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-secondary flex items-center"
                          asChild
                        >
                          <a href={resource.link}>Download Now</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calculators" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(r => r.type === 'calculator').map((resource) => (
                <Card key={resource.id} className="glass-card overflow-hidden hover:shadow-2xl group h-full">
                  <CardContent className="p-0">
                    <div className="p-1">
                      <div className="h-3 w-full bg-purple-500"></div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="p-3 rounded-lg mr-4 bg-purple-100 text-purple-600">
                            <resource.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <span className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded bg-gray-100">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{resource.description}</p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-secondary flex items-center"
                          asChild
                        >
                          <a href={resource.link}>Use Calculator</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Looking for personalized financial advice?</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-6 rounded-xl shadow-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationHub;
