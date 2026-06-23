// Gallery Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  initializeGallery();
});

function initializeGallery() {
  // Lightbox functionality for images
  const expandButtons = document.querySelectorAll('.expand-btn');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const imageUrl = this.getAttribute('href');
      openLightbox(imageUrl);
    });
  });

  // Add touch support for mobile
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('touchend', function() {
      // Trigger hover-like effects on touch
      this.style.opacity = '0.8';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });
  });

  // Smooth scroll for back buttons
  const backButtons = document.querySelectorAll('.back-button, .footer-back-link');
  
  backButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Allow normal navigation
      e.preventDefault();
      window.location.href = this.getAttribute('href');
    });
  });

  console.log('Gallery initialized successfully');
}

// Simple Lightbox Implementation
function openLightbox(imageUrl) {
  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="${imageUrl}" alt="Enlarged image" class="lightbox-image">
    </div>
  `;

  // Add lightbox styles dynamically if not already present
  if (!document.querySelector('style[data-lightbox]')) {
    const style = document.createElement('style');
    style.setAttribute('data-lightbox', 'true');
    style.textContent = `
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        animation: zoomIn 0.3s ease;
      }

      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .lightbox-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }

      .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid #ffffff;
        color: #ffffff;
        font-size: 2rem;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      .lightbox-close:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.1);
      }

      @media (max-width: 600px) {
        .lightbox-close {
          top: 10px;
          right: 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';

  // Close lightbox
  const closeBtn = lightbox.querySelector('.lightbox-close');
  closeBtn.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close on Escape key
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      document.removeEventListener('keydown', handleEscape);
    }
  }

  document.addEventListener('keydown', handleEscape);

  function closeLightbox() {
    lightbox.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      lightbox.remove();
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Log gallery items count
console.log('Total gallery items loaded');
