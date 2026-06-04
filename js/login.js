// login.js - Modern JS for login form handling with dynamic password toggle

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (!form) return;

  // ==== Password Toggle Setup ====
  const passwordInput = form.querySelector('input[type="password"]');
  if (passwordInput) {
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'password-wrapper';
    
    // Insert wrapper before the password input
    passwordInput.parentNode.insertBefore(wrapper, passwordInput);
    
    // Move password input inside wrapper
    wrapper.appendChild(passwordInput);
    
    // Create eye toggle element
    const eye = document.createElement('span');
    eye.className = 'toggle-eye';
    eye.textContent = '👁️'; // Initial visible eye icon
    wrapper.appendChild(eye);
    
    // Toggle functionality
    eye.addEventListener('click', () => {
      const isPwd = passwordInput.type === 'password';
      passwordInput.type = isPwd ? 'text' : 'password';
      eye.textContent = isPwd ? '🙈' : '👁️';
    });
  }

  // ==== Form submission handling ====
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = form.querySelector('input[type="text"]');
    const username = usernameInput?.value.trim() ?? '';
    // Pull current value directly from modern state
    const password = passwordInput?.value ?? '';

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Placeholder for real authentication logic
    console.log('Attempting login for:', username);
    alert(`Welcome, ${username}!`);
  });
});