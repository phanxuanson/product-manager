export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidName(name) {
  const regex = /^[A-Za-zÀ-ỹ\s]{2,}$/u;
  return regex.test(name.trim());
}
