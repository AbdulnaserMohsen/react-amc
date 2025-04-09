
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import TopBar from './nav/TopBar';
import Logo from './nav/Logo';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "w-full sticky top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
    )}>
      {/* Top bar with social links, phone and language */}
      <TopBar />
      
      {/* Main navigation */}
      <nav className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-amc-light p-2 rounded-full text-amc-dark hover:text-amc-turquoise"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop navigation */}
          <DesktopNav />
        </div>

        {/* Mobile menu */}
        <MobileNav isOpen={isMenuOpen} onClose={toggleMenu} />
      </nav>
    </header>
  );
};

export default Navbar;
