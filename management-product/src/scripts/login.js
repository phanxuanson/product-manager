import { isValidEmail, isValidPassword } from '../constants/regex.js';
import { MESSAGES_ERROR } from '../constants/messenger.js';
import { userData } from '../constants/user-data.js';

class LoginForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.emailInput = this.form.querySelector('.email');
    this.passwordInput = this.form.querySelector('.password');
    this.emailError = this.emailInput.nextElementSibling;
    this.passwordError = this.passwordInput.nextElementSibling;
    this.submitButton = this.form.querySelector('.btn-submit');

    this.init();
  }

  // Getter to get the array of inputs and corresponding errors
  get fields() {
    return [
      [this.emailInput, this.emailError],
      [this.passwordInput, this.passwordError],
    ];
  }

  // Initialize event listeners
  init = () => {
    this.form.addEventListener('submit', this.handleSubmit);

    // Clear error messages on input and focus
    this.fields.forEach(([input, error]) => {
      input.addEventListener('input', () => error.textContent = '');
      input.addEventListener('focus', () => error.textContent = '');
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.emailInput.value.trim();
    const password = this.passwordInput.value.trim();

    const isEmailValid = this.validateEmail(email);
    const isPasswordValid = this.validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) return;

    const user = this.verifyUser(email);
    if (!user) {
      this.emailError.textContent = MESSAGES_ERROR.EMAIL_NOT_EXIST;
      return;
    }

    if (user.password !== password) {
      this.passwordError.textContent = MESSAGES_ERROR.PASSWORD_INCORRECT;
      return;
    }

    this.redirectToDashboard();
  };

  // Validate email
  validateEmail = (email) => {
    if (!isValidEmail(email)) {
      this.emailError.textContent = MESSAGES_ERROR.EMAIL_NOT_FORMAT;
      return false;
    }
    return true;
  };
  
  // Validate password
  validatePassword = (password) => {
    if (!isValidPassword(password)) {
      this.passwordError.textContent = MESSAGES_ERROR.PASSWORD_NOT_FORMAT;
      return false;
    }
    return true;
  };

  // Verify user credentials
  verifyUser = (email, password) => {
    return userData.find(user => user.email === email);
  };

  // Redirect to dashboard
  redirectToDashboard = () => {
    window.location.href = '../management-product.html';
  };

}

// Initialize the login form when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new LoginForm('form');
});
