import { isValidEmail, isValidPassword } from './utils/authValidators.js';
import { MESSAGES } from './constants/messages.js';
import { USER_DATA } from './constants/user-data.js';

class LoginForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);

    // Initialize the corresponding inputs and errors
    this.fields = {
      email: {
        input: this.form.querySelector('.email'),
        error: this.form.querySelector('.email-message-error')
      },
      password: {
        input: this.form.querySelector('.password'),
        error: this.form.querySelector('.password-message-error')
      }
    };

    this.init();
  }

  // Returns the entered, trimmed data 
  get formData() {
    return {
      email: this.fields.email.input.value.trim(),
      password: this.fields.password.input.value.trim()
    };
  }

  // Initialize the event listeners 
  init = () => {
    this.form.addEventListener('submit', this.handleSubmit);

    // Clear error messages on input and focus events
    Object.values(this.fields).forEach(({ input, error }) => {
      input.addEventListener('input', () => (error.textContent = ''));
      input.addEventListener('focus', () => (error.textContent = ''));
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.formData;

    const isEmailValid = this.showErrorMessagesEmail(email);
    const isPasswordValid = this.showErrorMessagesPass(password);

    if (!isEmailValid || !isPasswordValid) return;

    const user = this.verifyUser(email);
    if (!user) {
      this.fields.email.error.textContent = MESSAGES.EMAIL_NOT_FOUND;
      return;
    }

    if (user.password !== password) {
      this.fields.password.error.textContent = MESSAGES.PASSWORD_INCORRECT;
      return;
    }

    this.redirectToDashboard();
  };

  showErrorMessagesEmail = (email) => {
    if (!email) {
      this.fields.email.error.textContent = MESSAGES.EMAIL_REQUIRED;
      return false;
    }

    const valid = isValidEmail(email);
    if (!valid) {
      this.fields.email.error.textContent = MESSAGES.EMAIL_INVALID;
    }

    return valid;
  };

  showErrorMessagesPass = (password) => {
    if (!password) {
      this.fields.password.error.textContent = MESSAGES.PASSWORD_REQUIRED;
      return false;
    }

    const valid = isValidPassword(password);
    if (!valid) {
      this.fields.password.error.textContent = MESSAGES.PASSWORD_INVALID;
    }

    return valid;
  };

  verifyUser = (email) => {
    return USER_DATA.find((user) => user.email === email);
  };

  redirectToDashboard = () => {
    window.location.href = '../management-product.html';
  };
}

new LoginForm('form');
