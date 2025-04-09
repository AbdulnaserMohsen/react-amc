
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Create intersection observer to start animation when in viewport
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        animateCount();
        hasAnimated.current = true;
      }
    }, { threshold: 0.1 });

    // Start observing
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const animateCount = () => {
    const startTime = performance.now();
    const animateFrame = () => {
      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animateFrame);
  };

  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return <span ref={countRef}>{formattedCount}+</span>;
};

export default Counter;
