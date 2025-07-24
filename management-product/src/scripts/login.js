import { isValidEmail, isValidPassword } from '../constants/regex.js';
import { MESSAGES } from '../constants/messages.js';
import { USER_DATA } from '../constants/user-data.js';

class LoginForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.emailInput = this.form.querySelector('.email');
    this.passwordInput = this.form.querySelector('.password');

    this.emailError = this.form.querySelector('.email-message-error');
    this.passwordError = this.form.querySelector('.password-message-error');

    this.init();
  }

  // Getter to access trimmed email and password
  get formData() {
    return {
      email: this.emailInput.value.trim(),
      password: this.passwordInput.value.trim(),
    };
  }

  // Delete error messages When input or focus
  get fields() {
    return [
      [this.emailInput, this.emailError],
      [this.passwordInput, this.passwordError],
    ];
  }

  // Initialize event listeners
  init = () => {
    this.form.addEventListener('submit', this.handleSubmit);

    // Event listeners for input and focus to clear error messages
    this.fields.forEach(([input, error]) => {
      input.addEventListener('input', () => (error.textContent = ''));
      input.addEventListener('focus', () => (error.textContent = ''));
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.formData;

    const isEmailValid = this.validateEmail(email);
    const isPasswordValid = this.validatePassword(password);

    if (!isEmailValid || !isPasswordValid) return;

    const user = this.verifyUser(email);
    if (!user) {
      this.emailError.textContent = MESSAGES.EMAIL_NOT_FOUND;
      return;
    }

    if (user.password !== password) {
      this.passwordError.textContent = MESSAGES.PASSWORD_INCORRECT;
      return;
    }

    this.redirectToDashboard();
  };

  // Validate email
  validateEmail = (email) => {
    if (!email) {
      this.emailError.textContent = MESSAGES.EMAIL_REQUIRED;
      return false;
    }

    const valid = isValidEmail(email);
    if (!valid) {
      this.emailError.textContent = MESSAGES.EMAIL_INVALID;
    }

    return valid;
  };

  // Validate password
  validatePassword = (password) => {
    if (!password) {
      this.passwordError.textContent = MESSAGES.PASSWORD_REQUIRED;
      return false;
    }

    const valid = isValidPassword(password);
    if (!valid) {
      this.passwordError.textContent = MESSAGES.PASSWORD_INVALID;
    }

    return valid;
  };

  // Verify user by email
  verifyUser = (email) => {
    return USER_DATA.find((user) => user.email === email);
  };

  // Navigate to dashboard
  redirectToDashboard = () => {
    window.location.href = '../management-product.html';
  };
}

  new LoginForm('form');

