import { AddProductValidator } from './validateModal.js';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/localStorage.js';
import { modalManager } from './toggleModal.js';


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
    this.avatarPreview = this.addModal.querySelector('.image-product img');

    this.inputName = this.addModal.querySelector('.name');
    this.inputQuantity = this.addModal.querySelector('.quantity');
    this.inputPrice = this.addModal.querySelector('.price');
    this.selectStatus = this.addModal.querySelector('.status-product-select');
    this.selectTypes = this.addModal.querySelector('.types-product-select');
    this.inputBrand = this.addModal.querySelector('.brand');

    this.uploadedImage = null;
    this.validator = new AddProductValidator(this.addModal);
    
    // Initialize products data
    this.products = getDataFromLocalStorage('products') || [];
    
    // Load existing products when initializing
    this.loadExistingProducts();
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
    const isValid = this.validator.validateAllFields(this.uploadedImage);
    if (!isValid) return;

    const name = this.inputName.value.trim();
    const quantity = Number(this.inputQuantity.value.trim());
    const price = Number(this.inputPrice.value.trim());
    const status = this.selectStatus.value;
    const types = this.selectTypes.value;
    const brand = this.inputBrand.value.trim();

    const product = {
      image: this.uploadedImage || '../assets/images/avatar-icon.svg',
      name,
      quantity,
      price,
      status,
      types,
      brand
    };

    // Add to local products array
    this.products.push(product);

    // Render the new product row
    const row = this.renderProductRow(product);
    this.productTableBody.appendChild(row);

    // Save to localStorage
    saveDataToLocalStorage('products', this.products);
    if (!this.productTable.classList.contains('table')) {
      this.productTable.classList.add('table');
    }

    // Close modal using modal manager
    modalManager.closeModal('add');

  }

  resetForm() {
    const form = this.addModal.querySelector('form');
    form?.reset();

    // Reset image input
    this.avatarPreview.src = '/avatar-icon.94c918de.svg';
    this.uploadedImage = null;
    this.validator?.clearErrors();
  }

  renderProductRow(product) {
    const row = document.createElement('tr');
    row.classList.add('product-item-table-row');
    row.innerHTML = `
      <td class="px-4 py-3 whitespace-nowrap sm:flex items-center space-x-3">
        <img src="${product.image}" 
             alt="${product.name}" class="w-10 h-10 rounded-md object-cover" />
        <span>${product.name}</span>
      </td>
      <td>
        <span class="border px-2 py-1 rounded-sm text-sm ${product.status === 'Available' ? 'bg-white text-secondary border' : 'text-warning'}">${product.status}</span>
      </td>
      <td>${product.types}</td>
      <td>
        <span class="border border-[#DFE2E9] px-2 py-1 rounded-lg bg-white text-sm">${product.quantity}</span>
      </td>
      <td>
        <span>${product.brand}</span>
      </td>
      <td>$${parseFloat(product.price).toFixed(2)}</td>
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
    return row;
  }

  loadExistingProducts() {
    // Clear existing table content
    this.productTableBody.innerHTML = '';
    
    // Add products to table using the common render method
    this.products.forEach(product => {
      const row = this.renderProductRow(product);
      this.productTableBody.appendChild(row);
    });

    // Show table if there are products
    if (this.products.length > 0) {
      this.productTable.classList.add('table');
    }
  }
}

export const addModalInstance = new AddModalForm();