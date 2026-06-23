// ===== INVESTOR DASHBOARD FUNCTIONALITY =====

// ===== MODAL MANAGEMENT =====
const Modal = {
  openModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
  },

  closeModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Allow background scroll
    }
  },

  closeAllModals: function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.classList.remove('show');
      modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
  }
};

// Modal Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking on X button
  const closeButtons = document.querySelectorAll('.modal-close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        Modal.closeModal(modal.id);
      }
    });
  });

  // Close modal when clicking outside (on backdrop)
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        Modal.closeModal(this.id);
      }
    });
  });

  // Handle Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      Modal.closeAllModals();
    }
  });
});

// ===== UPDATE BUTTON MODALS =====
document.addEventListener('DOMContentLoaded', function() {
  // Change Password Modal
  const changePasswordBtn = document.querySelector('[data-modal="changePasswordModal"]');
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', function(e) {
      e.preventDefault();
      Modal.openModal('changePasswordModal');
    });
  }

  // Deactivate Account Modal
  const deactivateBtn = document.querySelector('[data-modal="deactivateModal"]');
  if (deactivateBtn) {
    deactivateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      Modal.openModal('deactivateModal');
    });
  }

  // Edit Profile Modal (if on dashboard)
  const editProfileBtn = document.querySelector('[data-modal="editProfileModal"]');
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', function(e) {
      e.preventDefault();
      Modal.openModal('editProfileModal');
    });
  }
});

// Modal Form Submissions
document.addEventListener('DOMContentLoaded', function() {
  // Change Password Form
  const changePasswordForm = document.getElementById('changePasswordForm');
  if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Password changed successfully!');
      Modal.closeModal('changePasswordModal');
      this.reset();
    });
  }

  // Deactivate Account Form
  const deactivateForm = document.getElementById('deactivateAccountForm');
  if (deactivateForm) {
    deactivateForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (confirm('Are you absolutely sure? This action cannot be undone. All your investments will be frozen.')) {
        alert('Account deactivation initiated. You will receive a confirmation email.');
        Modal.closeModal('deactivateModal');
      }
    });
  }
});

// Active Link Management
document.addEventListener('DOMContentLoaded', function() {
  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'investor-dashboard.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'investor-dashboard.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Button interactions
document.addEventListener('DOMContentLoaded', function() {
  const primaryBtn = document.querySelector('.btn-primary');
  if (primaryBtn) {
    primaryBtn.addEventListener('click', function() {
      alert('Redirecting to Investment Form...');
      // window.location.href = 'investments.html#new-investment';
    });
  }
});

// View button interactions in table
document.addEventListener('DOMContentLoaded', function() {
  const viewButtons = document.querySelectorAll('.btn-small');
  viewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const investmentId = this.closest('tr').querySelector('td').textContent;
      console.log('Viewing investment:', investmentId);
      // Could expand row or open modal
    });
  });
});

// Quick link cards animation
document.addEventListener('DOMContentLoaded', function() {
  const quickLinks = document.querySelectorAll('.quick-link-card');
  quickLinks.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Profile image hover effect
document.addEventListener('DOMContentLoaded', function() {
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('click', function() {
      // Could open profile modal or redirect to profile page
      window.location.href = 'update-profile.html';
    });
  }
});

console.log('Investor Dashboard loaded successfully with Modal functionality');
