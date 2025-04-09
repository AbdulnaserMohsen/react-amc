
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categoryTabs } from './services-data';

interface ServiceTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs defaultValue={activeTab} className="mb-8 flex justify-center">
      <TabsList className="bg-amc-light">
        {categoryTabs.map((tab) => (
          <TabsTrigger 
            key={tab.id}
            value={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="data-[state=active]:bg-amc-turquoise data-[state=active]:text-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ServiceTabs;
