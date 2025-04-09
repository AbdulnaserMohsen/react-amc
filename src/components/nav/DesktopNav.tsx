
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent 
} from '@/components/ui/navigation-menu';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList className="space-x-1">
          <NavigationMenuItem>
            <Link to="/about" className="flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-amc-light hover:text-amc-teal">
              About Us
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-foreground hover:text-amc-teal">Products & Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4 grid grid-cols-2 gap-3">
                <Link to="/products/individual" className="block p-3 space-y-1 rounded-md hover:bg-amc-light">
                  <div className="font-medium">Individual Loans</div>
                  <div className="text-xs text-muted-foreground">Personal financing solutions for individuals</div>
                </Link>
                <Link to="/products/mses" className="block p-3 space-y-1 rounded-md hover:bg-amc-light">
                  <div className="font-medium">MSEs Loans</div>
                  <div className="text-xs text-muted-foreground">Business financing for micro and small enterprises</div>
                </Link>
                <Link to="/products/calculator" className="block p-3 space-y-1 rounded-md hover:bg-amc-light">
                  <div className="font-medium">Loan Calculator</div>
                  <div className="text-xs text-muted-foreground">Plan your loan with our easy calculator</div>
                </Link>
                <Link to="/products" className="block p-3 space-y-1 rounded-md hover:bg-amc-light">
                  <div className="font-medium">All Products</div>
                  <div className="text-xs text-muted-foreground">View our full range of financial products</div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/digital" className="flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-amc-light hover:text-amc-teal">
              Digital Services
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/contact" className="flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-amc-light hover:text-amc-teal">
              Contact Us
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/branches" className="flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-amc-light hover:text-amc-teal">
              Branches
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="ml-4 flex items-center space-x-3">
        <Button variant="default" size="sm" className="bg-gradient-to-r from-amc-teal to-amc-turquoise hover:from-amc-turquoise hover:to-amc-teal text-white transition-all duration-300 shadow-md hover:shadow-lg">
          Apply Online
        </Button>
        <button className="p-2 bg-amc-light rounded-full text-amc-dark hover:text-amc-teal transition-colors" aria-label="Search">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;
