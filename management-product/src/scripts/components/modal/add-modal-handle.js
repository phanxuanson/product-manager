class AddModalHandle {
  constructor() {
    this.container = document.querySelector('.container');
    this.uploadModal = this.container.querySelector('.upload-form-modal');

    // Input elements for the modal
    this.inputUpload = this.uploadModal.querySelector('.upload');
    this.avatarPreview = this.uploadModal.querySelector('.image-product img');

    // Text "Click to upload"
    this.clickUploadText = this.uploadModal.querySelector('.form-modal-upload');

    this.inputName = this.uploadModal.querySelector('.name');
    this.inputQuantity = this.uploadModal.querySelector('.quantity');
    this.inputPrice = this.uploadModal.querySelector('.price');
    this.selectStatus = this.uploadModal.querySelector('.status-product-select');
    this.selectTypes = this.uploadModal.querySelector('.types-product-select');
    this.inputBrand = this.uploadModal.querySelector('.brand');

    this.initializeEvents();
  }

  // Initialize events related to the modal handle
  initializeEvents() {
    
    // When click into "Click to upload" text, trigger the file input
    this.clickUploadText.addEventListener('click', () => {
      this.inputUpload.click();
    });

    // When choose a file to upload
    this.inputUpload.addEventListener('change', (e) => this.handleUpload(e));
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
}

new AddModalHandle();