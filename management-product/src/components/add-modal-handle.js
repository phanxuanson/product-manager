import { ProductStore } from '../constants/product-store.js';
class AddModalHandle {
  constructor() {
    this.container = document.querySelector('.container');
    this.uploadModal = this.container.querySelector('.upload-form-modal');

    // Input elements for the modal
    this.inputUpload = this.uploadModal.querySelector('.upload');
    this.avatarPreview = this.uploadModal.querySelector('.image-product img');
    console.log('avatarPreview ====>', this.avatarPreview);

    // Text "Click to upload"
    this.clickUploadText = this.uploadModal.querySelector('.form-modal-upload');
    console.log('clickUploadText ====>', this.clickUploadText);

    this.inputName = this.uploadModal.querySelector('.name');
    this.inputQuantity = this.uploadModal.querySelector('.quantity');
    this.inputPrice = this.uploadModal.querySelector('.price');
    this.selectStatus = this.uploadModal.querySelector('.status-product-select');
    this.selectTypes = this.uploadModal.querySelector('.types-product-select');
    this.inputBrand = this.uploadModal.querySelector('.brand');
    this.btnConfirm = this.uploadModal.querySelector('.btn-confirm');


    this.initializeEvents();
  }

  // Initialize events related to the modal handle
  initializeEvents() {
    
    // When click into "Click to upload" text, trigger the file input
    this.clickUploadText.addEventListener('click', () => {
      this.inputUpload.click();
      console.log("Click to upload text clicked");
    });

    // When choose a file to upload
    this.inputUpload.addEventListener('change', (e) => this.handleUpload(e));

    // When click the confirm button
    this.btnConfirm.addEventListener('click', (e) => this.handleConfirm(e));
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

  handleConfirm(e) {
    // Handle the confirm event
    e.preventDefault();

    const product = {
      name: this.inputName.value.trim(),
      quantity: Number(this.inputQuantity.value),
      price: Number(this.inputPrice.value),
      status: this.selectStatus.value,
      types: this.selectTypes.value,
      brand: this.inputBrand.value.trim(),
      image: this.uploadedImage || null,
    };
    ProductStore.addProduct(product);

    console.log("Confirm event handled");
  }
}

new AddModalHandle();