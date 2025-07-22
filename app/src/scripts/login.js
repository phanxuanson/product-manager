import { isValidName, isValidEmail } from "../constants/regex.js";
import { showErrorMessage, clearErrors } from "../utils/messenger.js";
import { saveUser } from "../constants/localStorage.js";
import { MESSAGES_ERROR } from "../constants/messenger.js";
import { userData } from "../constants/user-data.js";

class LoginForm {
  constructor() {
    this.form = document.querySelector("form");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.confirmPasswordInput = document.getElementById("confirm-password");
    this.firstNameInput = document.getElementById("first-name");
    this.lastNameInput = document.getElementById("last-name");
    this.submitBtn = document.getElementById("btn-submit");

    this.submitBtn.addEventListener("click", (e) => this.handleSubmit(e));
    document.addEventListener("mousedown", (event) => this.handleOutsideClick(event));
  }

  // Clear all error messages in the form
  clearFormErrors() {
    clearErrors([
      "error-email",
      "error-password",
      "error-confirm",
      "error-firstname",
      "error-lastname",
    ]);
  }

  // Validate the form inputs
  validate(email, password, confirmPassword, firstName, lastName) {
    let isValid = true;
    this.clearFormErrors();

    if (!isValidEmail(email)) {
      showErrorMessage("error-email", MESSAGES_ERROR.EMAIL_NOT_FORMAT);
      isValid = false;
    }
    if (!isValidName(firstName)) {
      showErrorMessage("error-firstname", MESSAGES_ERROR.FIRSTNAME_INVALID);
      isValid = false;
    }
    if (!isValidName(lastName)) {
      showErrorMessage("error-lastname", MESSAGES_ERROR.LASTNAME_INVALID);
      isValid = false;
    }
    if (password !== confirmPassword) {
      showErrorMessage("error-confirm", MESSAGES_ERROR.CONFIRM_PASSWORD_NOT_MATCH);
      isValid = false;
    }
    return isValid;
  }

  // Check if the user exists in the user data
  checkUser(email, password, firstName, lastName) {
    return userData.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.firstName.toLowerCase() === firstName.toLowerCase() &&
        u.lastName.toLowerCase() === lastName.toLowerCase()
    );
  }

  // Handle the form submission
  handleSubmit(e) {
    e.preventDefault();
    const email = this.emailInput.value.trim();
    const password = this.passwordInput.value.trim();
    const confirmPassword = this.confirmPasswordInput.value.trim();
    const firstName = this.firstNameInput.value.trim();
    const lastName = this.lastNameInput.value.trim();

    let isValid = this.validate(email, password, confirmPassword, firstName, lastName);

    if (isValid) {
      const user = this.checkUser(email, password, firstName, lastName);
      if (!user) {
        showErrorMessage("error-email", MESSAGES_ERROR.LOGIN_FAILED);
        showErrorMessage("error-password", MESSAGES_ERROR.LOGIN_FAILED);
        isValid = false;
      }
    }

    if (isValid) {
      saveUser({
        email,
        firstName,
        lastName,
        isLoggedIn: true,
      });
      window.location.href = "./index.html";
    }
  }
  
  // Handle clicks outside the form to clear errors
  handleOutsideClick(event) {
    if (this.form && !this.form.contains(event.target)) {
      this.clearFormErrors();
    }
  }
}

// Initialize the LoginForm class when the script is loaded
new LoginForm();
