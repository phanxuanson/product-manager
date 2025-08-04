import { addModalHandle } from './add-modal-handle.js';
import { MESSAGES } from '../../constants/messages.js';

class HandleConfirm {
  constructor() {
    this.container = document.querySelector('.container');
    this.overlay = this.container.querySelector('.modal-overlay');
    this.addModal = this.container.querySelector('.upload-form-modal');
    this.productTable = this.container.querySelector('.product-table');
    this.productTableBody = this.productTable.querySelector('.product-table-body');
    this.confirmBtn = this.addModal.querySelector('.btn-confirm');

    this.initializeEvents();
  }

  initializeEvents() {
    this.confirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.addProduct();
    });
  }

  addProduct() {
    // Get data from instance addModalHandle
    const name = addModalHandle.inputName.value.trim();
    const quantity = addModalHandle.inputQuantity.value.trim();
    const price = addModalHandle.inputPrice.value.trim();
    const status = addModalHandle.selectStatus.value;
    const types = addModalHandle.selectTypes.value;
    const brand = addModalHandle.inputBrand.value.trim();

    // Validate input fields
    if (!name || !quantity || !price || !brand) {
      const errorMessage = MESSAGES.INPUT_FIELDS_REQUIRED;
      const errorElement = this.addModal.querySelectorAll('.error-message');
      errorElement.forEach((el) => {
        el.textContent = errorMessage;
      });
      return;
    }

    // Render the new product in the table
    const row = document.createElement('tr');
    row.classList.add('product-item-table-row');
    row.innerHTML = `
      <td class="px-4 py-3 whitespace-nowrap flex items-center space-x-3">
        <img src="${addModalHandle.uploadedImage || '../assets/images/avatar-icon.svg'}" 
             alt="${name}" class="w-10 h-10 rounded-md object-cover">
        <span>${name}</span>
      </td>
      <td>
        <span class="border px-2 py-1 rounded-sm text-sm font-semibold ${status === 'Available' ? 'bg-white text-secondary border' : 'text-warning'}">${status}</span>
      </td>
      <td>${types}</td>
      <td>
        <span class="border border-[#DFE2E9] px-2 py-1 rounded-lg bg-white text-sm">${quantity}</span>
      </td>
      <td>
        <span>${brand}</span>
      </td>
      <td>$${parseFloat(price).toFixed(2)}</td>
      <td>
        <button>
          <i class="fas fa-ellipsis-h text-2xl text-[#B0BAC9]"></i>
        </button>
        <div class="hidden flex flex-col items-center justify-center w-28 h-20 rounded-lg border border-gray-300 shadow-sm bg-white">
          <button class="text-sm font-semibold font-primary text-primary mb-2">Edit</button>
          <button class="text-sm font-semibold font-primary text-warning">Delete</button>
        </div>
      </td>
      
    `;

    // Add the new row to the product table body
    this.productTableBody.appendChild(row);
    this.productTable.classList.add('table');

    // Close the Add Modal
    this.addModal.classList.remove('block');
    this.overlay.classList.remove('active');
    
    // Reset the form fields
    
  }
}
new HandleConfirm();