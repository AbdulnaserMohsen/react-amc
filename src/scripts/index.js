
/**
 * Utility functions that can be imported by React components
 * This file exports utility functions but doesn't auto-initialize anything
 */
import { initializeEventListeners } from './utils.js';
import { initLoanCalculator } from './calculator.js';
import { initTestimonialsCarousel, initCounters } from './animations.js';

// Export these functions so React components can call them when needed
export {
  initializeEventListeners,
  initLoanCalculator,
  initTestimonialsCarousel,
  initCounters
};

// No automatic initialization here - React components will call these functions
// in their useEffect hooks when needed
