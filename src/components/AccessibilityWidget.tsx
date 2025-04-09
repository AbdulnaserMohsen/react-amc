
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  
  const increaseFontSize = () => {
    if (fontSize < 130) {
      setFontSize(fontSize + 10);
      document.documentElement.style.fontSize = `${fontSize + 10}%`;
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
      document.documentElement.style.fontSize = `${fontSize - 10}%`;
    }
  };
  
  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          className="accessibility-widget bg-amc-teal hover:bg-amc-turquoise text-white rounded-full p-3"
          aria-label="Accessibility options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-4">
        <h3 className="font-medium mb-2">Accessibility Options</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-2">Text Size</label>
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={decreaseFontSize}
                disabled={fontSize <= 80}
                aria-label="Decrease text size"
              >
                A-
              </Button>
              <span>{fontSize}%</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={increaseFontSize}
                disabled={fontSize >= 130}
                aria-label="Increase text size"
              >
                A+
              </Button>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={resetFontSize}
          >
            Reset Settings
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
