// Auth Pages - Login and Register JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initializeAuthPages();
});

function initializeAuthPages() {
  const loginForm = document.getElementById('loginFormPage');
  const registerForm = document.getElementById('registerFormPage');
  const socialBtns = document.querySelectorAll('.social-btn-page');

  // Login Form Handler
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value.trim();
      const rememberMe = document.getElementById('remember-me').checked;

      // Validate inputs
      if (!username || !password) {
        alert('Please fill in all fields');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
      }

      // Show success message
      const btn = loginForm.querySelector('.auth-btn-standalone');
      const originalText = btn.textContent;
      btn.textContent = '✓ Logging in...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', { username, rememberMe });
        
        // Store remember me preference
        if (rememberMe) {
          localStorage.setItem('badekaka_remember_email', username);
        }

        alert('✓ Login successful! (Demo Mode)');
        
        // Reset form
        loginForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;

        // In a real app, redirect to dashboard
        // window.location.href = 'dashboard.html';
      }, 1500);
    });

    // Pre-fill remembered email
    const rememberedEmail = localStorage.getItem('badekaka_remember_email');
    if (rememberedEmail) {
      document.getElementById('login-username').value = rememberedEmail;
      document.getElementById('remember-me').checked = true;
    }
  }

  // Register Form Handler
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('register-name').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const username = document.getElementById('register-username').value.trim();
      const password = document.getElementById('register-password').value.trim();
      const confirmPassword = document.getElementById('register-confirm').value.trim();
      const agreeTerms = document.getElementById('agree-terms').checked;

      // Validate inputs
      if (!name || !email || !username || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }

      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }

      if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (!agreeTerms) {
        alert('Please agree to the Terms of Service and Privacy Policy');
        return;
      }

      // Show success message
      const btn = registerForm.querySelector('.auth-btn-standalone');
      const originalText = btn.textContent;
      btn.textContent = '✓ Creating account...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Registration attempt:', { name, email, username });
        
        alert('✓ Account created successfully! (Demo Mode)\n\nWelcome to Badekaka!');
        
        // Reset form
        registerForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;

        // In a real app, redirect to login or dashboard
        // window.location.href = 'login.html';
      }, 1500);
    });
  }

  // Social Login Handlers
  if (socialBtns.length > 0) {
    socialBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.dataset.provider;
        
        const originalText = btn.textContent;
        btn.textContent = '🔄 Redirecting...';
        btn.disabled = true;

        setTimeout(() => {
          console.log(`Social login with ${provider}`);
          alert(`Redirecting to ${provider.toUpperCase()} login...\n\n(Demo Mode - Would redirect in production)`);
          
          btn.textContent = originalText;
          btn.disabled = false;
        }, 1000);
      });
    });
  }

  console.log('Auth pages initialized successfully');
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password strength indicator (optional enhancement)
function getPasswordStrength(password) {
  let strength = 0;
  
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  
  return ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][strength - 1] || 'Invalid';
}

// Enhanced input validation with real-time feedback
document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('login-username');
  const registerEmail = document.getElementById('register-email');

  if (usernameInput) {
    usernameInput.addEventListener('blur', function() {
      if (this.value && !isValidEmail(this.value) && this.value.length < 3) {
        this.style.borderColor = '#f44336';
      } else if (this.value) {
        this.style.borderColor = '#2e7d32';
      }
    });
  }

  if (registerEmail) {
    registerEmail.addEventListener('blur', function() {
      if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = '#f44336';
      } else if (this.value) {
        this.style.borderColor = '#2e7d32';
      }
    });
  }
});
