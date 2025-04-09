
/**
 * Utility functions for general purposes
 */

/**
 * Initializes all event listeners when the DOM is loaded
 */
export function initializeEventListeners() {
  document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    initTabsSystem();
    
    // Flip card functionality
    initFlipCards();

    // Mobile menu functionality
    initMobileMenu();
    
    // Mobile dropdown functionality
    initMobileDropdowns();
    
    // Loan calculator functionality
    initLoanCalculator();
    
    // Impact section counter animations
    initCounters();
    
    // Testimonials carousel
    initTestimonialsCarousel();
    
    // Partners filter functionality
    initPartnersFilter();
  });
}

/**
 * Initialize the tabs system for filtering content
 */
export function initTabsSystem() {
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const flipCards = document.querySelectorAll('.flip-card');
  
  tabTriggers.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabTriggers.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Handle filtering based on tab
      const tabId = tab.getAttribute('data-tab');
      console.log(`Selected tab: ${tabId}`);
      
      // Implement actual filtering based on categories
      if (tabId === 'all') {
        flipCards.forEach(card => {
          card.style.display = 'block';
        });
      } else {
        flipCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (cardCategory === tabId) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
}

/**
 * Initialize flip card functionality
 */
export function initFlipCards() {
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach(card => {
    card.addEventListener('click', (event) => {
      // Only flip if clicking on the card itself or the flip button
      const target = event.target;
      const isLink = target.tagName === 'A';
      const isFormButton = target.classList.contains('btn-solid') || 
                         target.classList.contains('btn-outline');
                         
      if (!isLink && !isFormButton) {
        card.classList.toggle('flipped');
      }
    });
  });
}

/**
 * Initialize mobile menu functionality
 */
export function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMenuButton = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if(mobileMenuButton && mobileMenu && closeMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
    
    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
}

/**
 * Initialize mobile dropdown functionality
 */
export function initMobileDropdowns() {
  const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
  
  mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behavior
      e.stopPropagation(); // Stop event bubbling
      const content = trigger.nextElementSibling;
      
      // Toggle the active class properly
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        content.style.maxHeight = '0px';
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Partners filter functionality
 */
export function initPartnersFilter() {
  const filterButtons = document.querySelectorAll('.partner-filter-btn');
  const partnerLogos = document.querySelectorAll('.partner-logo');
  
  if (filterButtons.length > 0 && partnerLogos.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter category
        const filterCategory = button.getAttribute('data-filter');
        
        // Filter partners
        if (filterCategory === 'all') {
          partnerLogos.forEach(logo => {
            logo.style.display = 'flex';
          });
        } else {
          partnerLogos.forEach(logo => {
            const logoCategory = logo.querySelector('img').getAttribute('data-category');
            if (logoCategory === filterCategory) {
              logo.style.display = 'flex';
            } else {
              logo.style.display = 'none';
            }
          });
        }
      });
    });
    
    // Initialize with the first filter (usually "all")
    if (filterButtons[0]) {
      filterButtons[0].click();
    }
  }
}
