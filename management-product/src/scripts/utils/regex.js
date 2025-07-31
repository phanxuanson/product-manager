export const checkEmailFormat = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const checkPassword = (password) => password.length >= 6;
