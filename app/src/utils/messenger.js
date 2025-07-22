export function showErrorMessage(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }
  
  export function clearErrors(errorIds) {
    errorIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
  }