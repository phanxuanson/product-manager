import { AddProductValidator } from './addModalValidate.js';

class AddModalForm {
  constructor() {
    this.container = document.querySelector('.container');
    this.overlay = this.container.querySelector('.modal-overlay');
    this.addModal = this.container.querySelector('.upload-form-modal');
    this.productTable = this.container.querySelector('.product-table');
    this.productTableBody = this.productTable.querySelector('.product-table-body');
    this.confirmBtn = this.addModal.querySelector('.btn-confirm');

    // Input elements
    this.clickUploadText = this.addModal.querySelector('.form-modal-upload');
    this.inputUpload = this.addModal.querySelector('.upload');
    this.inputUpload.addEventListener('change', (e) => this.handleUpload(e));
    this.avatarPreview = this.addModal.querySelector('.image-product img');

    this.inputName = this.addModal.querySelector('.name');
    this.inputQuantity = this.addModal.querySelector('.quantity');
    this.inputPrice = this.addModal.querySelector('.price');
    this.selectStatus = this.addModal.querySelector('.status-product-select');
    this.selectTypes = this.addModal.querySelector('.types-product-select');
    this.inputBrand = this.addModal.querySelector('.brand');

    this.uploadedImage = null;
    this.validator = new AddProductValidator(this.addModal);
    this.initializeEvents();
  }

  initializeEvents() {

    this.clickUploadText.addEventListener('click', () => {
      this.inputUpload.click();
    });

    this.inputUpload.addEventListener('change', (e) => this.handleUpload(e));
    this.confirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.addProduct();
    });
  }

  handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.avatarPreview.src = event.target.result;
        this.uploadedImage = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    const isValid = this.validator.validate(this.uploadedImage);
    if (!isValid) return;
    
    const name = this.inputName.value.trim();
    const quantity = this.inputQuantity.value.trim();
    const price = this.inputPrice.value.trim();
    const status = this.selectStatus.value;
    const types = this.selectTypes.value;
    const brand = this.inputBrand.value.trim();

    const row = document.createElement('tr');
    row.classList.add('product-item-table-row');
    row.innerHTML = `
      <td class="px-4 py-3 whitespace-nowrap flex items-center space-x-3">
        <img src="${this.uploadedImage || '../assets/images/avatar-icon.svg'}" 
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

    this.productTableBody.appendChild(row);
    this.productTable.classList.add('table');

    // Close modal
    this.addModal.classList.remove('block');
    this.overlay.classList.remove('active');
    this.resetForm();

  }

  resetForm() {
    const form = this.addModal.querySelector('form');
    form?.reset();
    this.avatarPreview.src = '../assets/images/avatar-icon.svg';
    this.uploadedImage = null;
  }
}

export const addModalInstance = new AddModalForm();