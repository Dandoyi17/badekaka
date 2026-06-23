// ===== UPDATE PROFILE PAGE SCRIPT =====

// Change Password Form Handler
document.getElementById('changePasswordForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (newPassword !== confirmPassword) {
        alert('❌ New passwords do not match. Please try again.');
        return;
    }

    // Validate password strength
    if (!validatePasswordStrength(newPassword)) {
        alert('❌ Password is too weak. Use uppercase, lowercase, numbers, and special characters.');
        return;
    }

    // In production, send to backend
    console.log('Password change submitted:', {
        currentPassword,
        newPassword,
        timestamp: new Date().toISOString()
    });

    alert('✅ Password updated successfully!');
    Modal.closeModal('changePasswordModal');
    this.reset();
});

// Deactivate Account Form Handler
document.getElementById('deactivateAccountForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const reason = document.getElementById('deactivateReason').value;
    const confirmed = document.getElementById('deactivateConfirm').checked;

    if (!confirmed) {
        alert('❌ Please confirm that you understand this action is permanent.');
        return;
    }

    // In production, send to backend
    console.log('Account deactivation submitted:', {
        reason,
        timestamp: new Date().toISOString(),
        email: 'user@example.com' // This would come from session/backend
    });

    alert('✅ Account deactivation initiated. You will receive a confirmation email shortly.');
    Modal.closeModal('deactivateModal');
    
    // In production, redirect to login page after short delay
    setTimeout(() => {
        // window.location.href = '/login';
    }, 2000);
});

// Password strength validator
function validatePasswordStrength(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const isLongEnough = password.length >= 8;

    return hasUppercase && hasLowercase && hasNumbers && hasSpecialChar && isLongEnough;
}

// Main profile form handler
document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName')?.value,
        lastName: document.getElementById('lastName')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        businessName: document.getElementById('businessName')?.value,
        businessType: document.getElementById('businessType')?.value,
        street: document.getElementById('street')?.value,
        city: document.getElementById('city')?.value,
        state: document.getElementById('state')?.value,
        zipCode: document.getElementById('zipCode')?.value,
        bankName: document.getElementById('bankName')?.value,
        accountNumber: document.getElementById('accountNumber')?.value,
        accountHolder: document.getElementById('accountHolder')?.value,
        investmentFocus: document.getElementById('investmentFocus')?.value,
        riskTolerance: document.getElementById('riskTolerance')?.value,
        investmentAmount: document.getElementById('investmentAmount')?.value
    };

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const isValid = requiredFields.every(field => {
        const value = document.getElementById(field)?.value;
        return value && value.trim().length > 0;
    });

    if (!isValid) {
        alert('❌ Please fill in all required fields.');
        return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
        alert('❌ Please enter a valid email address.');
        return;
    }

    // Validate phone format
    if (!isValidPhone(formData.phone)) {
        alert('❌ Please enter a valid phone number.');
        return;
    }

    // In production, send to backend
    console.log('Profile update submitted:', {
        ...formData,
        timestamp: new Date().toISOString()
    });

    alert('✅ Profile updated successfully!');
    // Form submission would normally redirect or show success message
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-+()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}
