// FAQ Page - Expandable Q&A Functionality

document.addEventListener('DOMContentLoaded', function() {
  initializeFAQ();
  setupSearch();
});

// Initialize FAQ Functionality
function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');

    // Add click event to toggle active state
    question.addEventListener('click', function(e) {
      e.preventDefault();

      // Close other items if needed (for single open at a time effect)
      // Uncomment the section below if you want only one item open at a time
      /*
      faqItems.forEach((otherItem, otherIndex) => {
        if (otherIndex !== index) {
          otherItem.classList.remove('active');
        }
      });
      */

      // Toggle current item
      item.classList.toggle('active');

      // Smooth scroll to question if opening
      if (item.classList.contains('active')) {
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });

    // Add keyboard support (Enter or Space to open)
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Add keyboard tab support
  faqItems.forEach(item => {
    item.querySelector('.faq-question').setAttribute('tabindex', '0');
  });

  console.log('FAQ initialized with', faqItems.length, 'items');
}

// Search Functionality
function setupSearch() {
  const searchInput = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('.faq-item');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();

      faqItems.forEach(item => {
        const question = item.querySelector('.question-text').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();

        // Check if search term matches question or answer
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
          item.classList.remove('hidden');
          
          // Automatically open matching items
          if (searchTerm.length > 0) {
            item.classList.add('active');
          }
        } else {
          item.classList.add('hidden');
          item.classList.remove('active');
        }
      });

      // Show all items if search is empty
      if (searchTerm.length === 0) {
        faqItems.forEach(item => {
          item.classList.remove('hidden');
          item.classList.remove('active');
        });
      }
    });

    // Clear search on escape key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.value = '';
        this.dispatchEvent(new Event('input'));
      }
    });
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Get started button interaction
document.addEventListener('DOMContentLoaded', function() {
  const backButton = document.querySelector('.faq-back-btn');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = this.getAttribute('href');
    });
  }
});

// Analytics - Track FAQ views (optional)
function trackFAQView(questionIndex) {
  console.log('FAQ Item viewed:', questionIndex);
  // In production, send this to analytics service
}

// Expand all / Collapse all buttons (optional enhancement)
function expandAllFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.classList.add('active');
  });
}

function collapseAllFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.classList.remove('active');
  });
}

// Export functions for external use
window.faqFunctions = {
  expandAll: expandAllFAQ,
  collapseAll: collapseAllFAQ,
  scrollToTop: scrollToTop,
  trackView: trackFAQView
};

console.log('FAQ Page loaded successfully');
