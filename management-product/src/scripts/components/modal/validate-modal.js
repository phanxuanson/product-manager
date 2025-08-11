import { MESSAGES_ERROR } from '../../constants/messages.js';

const { NAMES, QUANTITY, PRICE, BRAND, IMAGE } = MESSAGES_ERROR;

export class AddProductValidator {
  constructor(formElement) {
    this.form = formElement;

    this.fields = {
      name: {
        input: this.form.querySelector('.name'),
        error: this.form.querySelector('.form-input-name .error-message'),
        validate: (val) => val.trim() !== '',
        message: NAMES
      },
      quantity: {
        input: this.form.querySelector('.quantity'),
        error: this.form.querySelector('.form-input-quantity .error-message'),
        validate: (val) => Number(val) > 0,
        message: QUANTITY
      },
      price: {
        input: this.form.querySelector('.price'),
        error: this.form.querySelector('.form-input-price .error-message'),
        validate: (val) => Number(val) >= 100,
        message: PRICE
      },
      brand: {
        input: this.form.querySelector('.brand'),
        error: this.form.querySelector('.form-input-brand .error-message'),
        validate: (val) => val.trim() !== '',
        message: BRAND
      },
      image: {
        container: this.form.querySelector('.form-input-image'),
        error: this.form.querySelector('.error-message'),
        validate: (uploadedImage) => Boolean(uploadedImage),
        message: IMAGE 
      }
    };

    this.attachFieldEvents(); 
  }

  attachFieldEvents() {
    Object.values(this.fields).forEach(({ input, error }) => {
      if (!input || !error) return; 

      input.addEventListener('input', () => (error.textContent = ''));
      input.addEventListener('focus', () => (error.textContent = ''));
    });
  }

  clearErrors() {
    Object.values(this.fields).forEach(({ error }) => {
      if (error) error.textContent = '';
    });
  }

  validateAllFields(uploadedImage) {
    this.clearErrors();
    let isValid = true;

    Object.entries(this.fields).forEach(([key, field]) => {
      const value = key === 'image' ? uploadedImage : field.input.value.trim();
      const isFieldValid = field.validate(value);

      if (!isFieldValid) {  
        field.error.textContent = field.message;
        isValid = false;
      }
    });

    return isValid;
  }
}

