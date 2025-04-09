
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center relative z-10">
      <img 
        src="/placeholder.svg" 
        alt="AMC Logo" 
        className="h-12 w-auto transition-all duration-300"
        aria-label="AMC Logo, click to go home" 
      />
    </Link>
  );
};

export default Logo;
