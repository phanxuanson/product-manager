export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
}
