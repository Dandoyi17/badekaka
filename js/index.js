const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const carouselImages = Array.from(document.querySelectorAll('.carousel-image'));
const heroLogos = Array.from(document.querySelectorAll('.hero-logo'));

// ===== SCROLL-BASED LOGO SWITCHING =====
const headerLogo = document.getElementById('headerLogo');
const scrollThreshold = 100; // Change logo after scrolling 100px
let isScrolledDown = false; // Track scroll state

if (headerLogo) {
  window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > scrollThreshold;
    
    // Only update if state has changed
    if (shouldBeScrolled && !isScrolledDown) {
      // Scrolling down - animate out current, then change, then animate in new
      isScrolledDown = true;
      
      // Remove any existing animation classes
      headerLogo.classList.remove('animate-in-up', 'animate-in-down', 'animate-out-up', 'animate-out-down');
      
      // Start fade out & down animation
      headerLogo.classList.add('animate-out-down');
      
      // Change image halfway through animation
      setTimeout(() => {
        headerLogo.src = 'images/logoscrol.png';
        headerLogo.classList.remove('animate-out-down');
        headerLogo.classList.add('animate-in-up');
      }, 200);
      
    } else if (!shouldBeScrolled && isScrolledDown) {
      // Scrolling back up - animate out current, then change, then animate in new
      isScrolledDown = false;
      
      // Remove any existing animation classes
      headerLogo.classList.remove('animate-in-up', 'animate-in-down', 'animate-out-up', 'animate-out-down');
      
      // Start fade out & up animation
      headerLogo.classList.add('animate-out-up');
      
      // Change image halfway through animation
      setTimeout(() => {
        headerLogo.src = 'images/growthtrans1.png';
        headerLogo.classList.remove('animate-out-up');
        headerLogo.classList.add('animate-in-down');
      }, 200);
    }
  });
}

// ===== SCROLL-BASED NAV LINKS COLOR ANIMATION =====
const navLinksElements = document.querySelectorAll('.nav-links a');

if (navLinksElements.length > 0) {
  window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > scrollThreshold;
    
    navLinksElements.forEach(link => {
      if (shouldBeScrolled) {
        // Scrolling down - add color animation
        if (!link.classList.contains('color-animate')) {
          link.classList.add('color-animate');
        }
      } else {
        // Scrolling back up - remove color animation, return to normal color
        link.classList.remove('color-animate');
      }
    });
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  });
}

// Services Modal Handler
const servicesLink = document.querySelector('.services-link');
const servicesModal = document.getElementById('servicesModal');
const closeServicesModal = document.getElementById('closeServicesModal');
const modalOverlay = document.querySelector('.modal-overlay');

if (servicesLink && servicesModal) {
  // Open modal on Services link click
  servicesLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    servicesModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    console.log('Services modal opened');
  });

  // Close modal on close button click
  if (closeServicesModal) {
    closeServicesModal.addEventListener('click', (e) => {
      e.preventDefault();
      servicesModal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scroll
      console.log('Services modal closed');
    });
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        servicesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Services modal closed (overlay click)');
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && servicesModal.classList.contains('active')) {
      servicesModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      console.log('Services modal closed (Escape key)');
    }
  });

  // Close modal when a menu item is clicked (allow navigation)
  const modalItems = document.querySelectorAll('.modal-item');
  modalItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Navigation will happen, close modal
      servicesModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      console.log('Services modal closed (item selected)');
    });
  });
}

if (carouselImages.length > 1) {
  let currentSlide = 0;

  setInterval(() => {
    carouselImages.forEach((image) => image.classList.remove('active'));
    currentSlide = (currentSlide + 1) % carouselImages.length;
    carouselImages[currentSlide].classList.add('active');
  }, 5000);
}

if (heroLogos.length > 1) {
  let currentLogo = 0;

  setInterval(() => {
    heroLogos.forEach((logo) => logo.classList.remove('active'));
    currentLogo = (currentLogo + 1) % heroLogos.length;
    heroLogos[currentLogo].classList.add('active');
  }, 5000);
}

const storyTabs = Array.from(document.querySelectorAll('.tab-btn'));
const storyPanels = Array.from(document.querySelectorAll('.story-panel'));

storyTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');

    storyTabs.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    storyPanels.forEach((panel) => {
      panel.classList.remove('active');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const activePanel = document.getElementById(target);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  });
});

// Work Steps Carousel Animation
const workSteps = Array.from(document.querySelectorAll('.work-step'));
const carouselDots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
let currentStep = 0;

function showStep(index) {
  workSteps.forEach((step) => step.classList.remove('active'));
  carouselDots.forEach((dot) => dot.classList.remove('active'));

  workSteps[index].classList.add('active');
  carouselDots[index].classList.add('active');
}

// Auto-rotate steps every 10 seconds
let stepInterval = setInterval(() => {
  currentStep = (currentStep + 1) % workSteps.length;
  showStep(currentStep);
}, 10000);

// Allow manual navigation via dots
carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentStep = index;
    showStep(currentStep);
    clearInterval(stepInterval);
    stepInterval = setInterval(() => {
      currentStep = (currentStep + 1) % workSteps.length;
      showStep(currentStep);
    }, 10000);
  });
});

// Fifth Section - Performance Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
      
      // Initialize charts when charts tab is opened
      if (tabName === 'charts') {
        setTimeout(initializeCharts, 100);
      }
    });
  });
}

// Initialize Charts
let chartsInitialized = false;

function initializeCharts() {
  if (chartsInitialized) return;
  chartsInitialized = true;

  const chartColor = '#2e7d32';
  const chartColor2 = '#66bb6a';

  // 1. Investment vs Harvest Bar Chart
  const investmentCtx = document.getElementById('investmentChart');
  if (investmentCtx) {
    new Chart(investmentCtx, {
      type: 'bar',
      data: {
        labels: ['2023 Pilot', '2024 Growth', '2025 Scale'],
        datasets: [
          {
            label: 'Investment (₦)',
            data: [120000, 750000, 4500000],
            backgroundColor: 'rgba(46, 125, 50, 0.7)',
            borderColor: chartColor,
            borderWidth: 2,
            borderRadius: 8,
          },
          {
            label: 'Harvest Value (₦)',
            data: [330000, 2450000, 7500000],
            backgroundColor: 'rgba(102, 187, 106, 0.7)',
            borderColor: chartColor2,
            borderWidth: 2,
            borderRadius: 8,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            labels: { color: '#223126', font: { size: 12, weight: 'bold' } }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#223126' },
            grid: { color: 'rgba(46, 125, 50, 0.1)' }
          },
          x: {
            ticks: { color: '#223126' },
            grid: { display: false }
          }
        }
      }
    });
  }

  // 2. Profit Margin Line Chart
  const profitCtx = document.getElementById('profitChart');
  if (profitCtx) {
    new Chart(profitCtx, {
      type: 'line',
      data: {
        labels: ['2023 Pilot', '2024 Growth', '2025 Scale'],
        datasets: [{
          label: 'Profit Margin %',
          data: [175, 227, 67],
          borderColor: chartColor,
          backgroundColor: 'rgba(46, 125, 50, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: chartColor2,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: true, labels: { color: '#223126', font: { size: 12, weight: 'bold' } } }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#223126' },
            grid: { color: 'rgba(46, 125, 50, 0.1)' }
          },
          x: {
            ticks: { color: '#223126' },
            grid: { display: false }
          }
        }
      }
    });
  }

  // 3. Recovery Success Rate Pie Chart
  const successCtx = document.getElementById('successChart');
  if (successCtx) {
    new Chart(successCtx, {
      type: 'doughnut',
      data: {
        labels: ['2023 (100%)', '2024 (92%)', '2025 (96.7%)'],
        datasets: [{
          data: [100, 92, 96.7],
          backgroundColor: ['#2e7d32', '#66bb6a', '#81c784'],
          borderColor: '#fff',
          borderWidth: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: true, labels: { color: '#223126', font: { size: 12, weight: 'bold' } } }
        }
      }
    });
  }

  // 4. Investment Distribution Pie Chart
  const distributionCtx = document.getElementById('distributionChart');
  if (distributionCtx) {
    new Chart(distributionCtx, {
      type: 'pie',
      data: {
        labels: ['2023 (3.3%)', '2024 (13.8%)', '2025 (82.9%)'],
        datasets: [{
          data: [3.3, 13.8, 82.9],
          backgroundColor: ['rgba(46, 125, 50, 0.6)', 'rgba(102, 187, 106, 0.6)', 'rgba(129, 199, 132, 0.8)'],
          borderColor: '#fff',
          borderWidth: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: true, labels: { color: '#223126', font: { size: 12, weight: 'bold' } } }
        }
      }
    });
  }
}

// Sixth Section - Background Carousel with smooth fading
const carouselSlides = document.querySelectorAll('.carousel-slide');

let currentCarouselIndex = 0;
let carouselInterval;

function rotateBackgroundCarousel() {
  if (carouselSlides.length === 0) return;
  
  // Remove active from all slides
  carouselSlides.forEach(slide => slide.classList.remove('active'));
  
  // Move to next slide
  currentCarouselIndex = (currentCarouselIndex + 1) % carouselSlides.length;
  
  // Add active to current slide
  carouselSlides[currentCarouselIndex].classList.add('active');
}

// Initialize carousel - start first image immediately
if (carouselSlides.length > 0) {
  carouselSlides[0].classList.add('active');
  
  // Start rotation after 5 seconds
  carouselInterval = setInterval(rotateBackgroundCarousel, 5000);
}

// Newsletter Subscription Handler
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email) {
      // Show success feedback
      const btn = this.querySelector('.newsletter-btn');
      const originalText = btn.textContent;
      
      btn.textContent = '✓ Subscribed!';
      btn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';
      
      // Reset form
      emailInput.value = '';
      
      // Restore button after 3 seconds
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'linear-gradient(135deg, #66bb6a, #4caf50)';
      }, 3000);
      
      // In a real application, you would send this to a server
      console.log('Newsletter subscription:', email);
    }
  });
}

// Auth Modal Handler
const authModal = document.getElementById('authModal');
const authModalOverlay = document.querySelector('.auth-modal-overlay');
const closeAuthModal = document.getElementById('closeAuthModal');
const getStartedButtons = document.querySelectorAll('.btn.mobile-btn, .btn.desktop-btn');

// Get Started button - Open Auth Modal
if (getStartedButtons.length > 0) {
  getStartedButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Auth modal opened');
      }
    });
  });
}

// Close auth modal
if (closeAuthModal && authModal) {
  closeAuthModal.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    console.log('Auth modal closed');
  });
}

// Close modal when clicking overlay
if (authModalOverlay && authModal) {
  authModalOverlay.addEventListener('click', () => {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

// Close modal with Escape key
if (authModal) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal.classList.contains('active')) {
      authModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Tab switching between login and register
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');

if (switchToRegister) {
  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginFormContainer) loginFormContainer.classList.remove('active');
    if (registerFormContainer) registerFormContainer.classList.add('active');
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (registerFormContainer) registerFormContainer.classList.remove('active');
    if (loginFormContainer) loginFormContainer.classList.add('active');
  });
}

// Form submission handlers
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    console.log('Login attempt:', { username, rememberMe });
    alert('Login successful! (Demo)');
    
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Registration attempt:', { name, email, username });
    alert('Account created successfully! (Demo)');
    
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Social login handlers
const socialBtns = document.querySelectorAll('.social-btn');
if (socialBtns.length > 0) {
  socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = btn.dataset.provider;
      console.log(`Social login with ${provider}`);
      alert(`Redirecting to ${provider} login... (Demo)`);
    });
  });
}
