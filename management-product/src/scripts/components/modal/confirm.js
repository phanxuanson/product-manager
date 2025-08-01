import { AddModalHandle } from './add-modal-handle.js';

class HandleConfirm {
  constructor() {
    this.container = document.querySelector('.container');
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
    // Get data from instance AddModalHandle
    const name = AddModalHandle.inputName.value.trim();
    console.log(name);
    const quantity = AddModalHandle.inputQuantity.value.trim();
    const price = AddModalHandle.inputPrice.value.trim();
    const status = AddModalHandle.selectStatus.value;
    const types = AddModalHandle.selectTypes.value;
    const brand = AddModalHandle.inputBrand.value.trim();

    // Validate input fields
    if (!name || !quantity || !price || !brand) {
      alert('Please fill in all fields.');
      return;
    }

    // If the product table is hidden, show it
    if (this.productTable.classList.contains('hidden')) {
      this.productTable.classList.remove('hidden');
    }

    // 
    const row = this.productTable.createElement('tr');
    row.innerHTML = `
      <td class="flex items-center space-x-3">
        <img src="${AddModalHandle.uploadedImage || '../assets/images/avatar-icon.svg'}" 
             alt="${name}" class="w-10 h-10 rounded-md object-cover">
        <span>${name}</span>
      </td>
      <td>
        <span class="px-2 py-1 rounded-full text-xs font-semibold ${
          status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }">${status}</span>
      </td>
      <td>${types}</td>
      <td>
        <span class="px-2 py-1 rounded bg-gray-100 text-sm">${quantity}</span>
      </td>
      <td class="flex items-center space-x-2">
        <img src="../assets/images/avatar-icon.svg" alt="${brand}" class="w-6 h-6 rounded-full">
        <span>${brand}</span>
      </td>
      <td>$${parseFloat(price).toFixed(2)}</td>
      <td>
        <button class="action-menu text-gray-500 hover:text-gray-800">
          <img src="../assets/images/icons-dote-three.svg alt="Actions" class="w-6 h-6">
        </button>
      </td>
    `;

    // Add the new row to the product table body
    this.productTableBody.appendChild(row);

    // Reset modal and close
    AddModalHandle.resetModal();
    this.container.querySelector('.modal-overlay').classList.remove('active');
    this.addModal.classList.remove('block');
  }
}
new HandleConfirm();