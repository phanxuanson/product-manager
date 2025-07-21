import { isValidName, isValidEmail } from "../constants/regex.js";
import { showErrorMessage, clearErrors } from "../utils/messenger.js";
import { saveUser } from "../constants/localStorage.js";
import { MESSAGES_ERROR } from "../constants/messenger.js";
import { userData } from "../constants/user-data.js";

document.getElementById("btn-submit").addEventListener("click", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();

  clearErrors([
    "error-email",
    "error-password",
    "error-confirm",
    "error-firstname",
    "error-lastname",
  ]);

  let isValid = true;

  // Validate email format
  if (!isValidEmail(email)) {
    showErrorMessage("error-email", MESSAGES_ERROR.EMAIL_NOT_FORMAT);
    isValid = false;
      
  }

  // Validate first name
  if (!isValidName(firstName)) {
    showErrorMessage("error-firstname", MESSAGES_ERROR.FIRSTNAME_INVALID);
    isValid = false;
  }

  // Validate last name
  if (!isValidName(lastName)) {
    showErrorMessage("error-lastname", MESSAGES_ERROR.LASTNAME_INVALID);
    isValid = false;
  }

  // Only check userData if all above are valid
  if (isValid) {
    const user = userData.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.firstName.toLowerCase() === firstName.toLowerCase() &&
        u.lastName.toLowerCase() === lastName.toLowerCase()
    );

    if (!user) {
      showErrorMessage("error-email", MESSAGES_ERROR.LOGIN_FAILED);
      showErrorMessage("error-password", MESSAGES_ERROR.LOGIN_FAILED);
      isValid = false;
    }
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    showErrorMessage("error-confirm", MESSAGES_ERROR.CONFIRM_PASSWORD_NOT_MATCH);
    isValid = false;
  }

  // Navigate to the home page if all validations pass
  if (isValid) {
    saveUser({
      email,
      firstName,
      lastName,
      isLoggedIn: true,
    });
    window.location.href = "./index.html";
  }
});

// Hide error messages when clicking outside the form
const form = document.querySelector("form");
document.addEventListener("mousedown", function (event) {
  if (form && !form.contains(event.target)) {
    clearErrors([
      "error-email",
      "error-password",
      "error-confirm",
      "error-firstname",
      "error-lastname",
    ]);
  }
});
