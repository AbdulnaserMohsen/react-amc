
/**
 * Animations module
 */

/**
 * Initialize testimonials carousel
 */
export function initTestimonialsCarousel() {
  const carousel = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  
  if (carousel && prevButton && nextButton) {
    const cards = carousel.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    // Function to get card width including gap
    function getCardWidth() {
      const card = cards[0];
      if (!card) return 0;
      
      const cardStyle = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth;
      const marginRight = parseInt(cardStyle.marginRight) || 0;
      const gap = parseInt(window.getComputedStyle(carousel).columnGap) || 24;
      
      return cardWidth + (marginRight || gap);
    }
    
    // Set up click handlers
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToIndex();
      }
    });
    
    nextButton.addEventListener('click', () => {
      const maxIndex = cards.length - 1;
      const visibleCards = window.innerWidth >= 768 ? 2 : 1;
      
      if (currentIndex < maxIndex - visibleCards + 1) {
        currentIndex++;
        scrollToIndex();
      }
    });
    
    function scrollToIndex() {
      const cardWidth = getCardWidth();
      carousel.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
    
    // Reset scroll position when window resizes
    window.addEventListener('resize', () => {
      const cardWidth = getCardWidth();
      carousel.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'auto'
      });
    });
    
    // Initialize carousel position
    if (cards.length > 0) {
      scrollToIndex();
    }
  }
}

/**
 * Initialize counters with animation
 */
export function initCounters() {
  const impactNumbers = document.querySelectorAll('.stat-number');
  
  if (impactNumbers.length > 0) {
    // Check if we should start animation (only when elements are in viewport)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetValue = parseInt(target.getAttribute('data-count'));
          
          if (!isNaN(targetValue)) {
            animateCounter(target, targetValue);
            observer.unobserve(target);
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all counter elements
    impactNumbers.forEach(number => {
      observer.observe(number);
    });
  }
  
  function animateCounter(element, targetValue) {
    if (!element) return;
    
    const duration = 2000; // Animation duration in milliseconds
    const frameDuration = 16; // Duration of each frame (60fps)
    const totalFrames = duration / frameDuration;
    let frame = 0;
    
    // Start value
    let currentValue = 0;
    
    // Animation function
    function animate() {
      frame++;
      const progress = frame / totalFrames;
      const currentNumber = Math.round(targetValue * progress);
      
      if (currentNumber !== currentValue) {
        currentValue = currentNumber;
        element.textContent = currentValue.toLocaleString();
      }
      
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = targetValue.toLocaleString();
      }
    }
    
    animate();
  }
}
