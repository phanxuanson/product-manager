import AddModalForm from '../components/AddModalForm.js';
import DeleteModal from '../components/DeleteModal.js';
import ConfirmModal from '../components/ConfirmModal.js';
class Layout {
  constructor(rootId = 'product-manager') {
    this.root = document.getElementById(rootId);
  }

  renderHeader() {
    // const header = headerTitle('Product Manager');
    // this.root.appendChild(header);
  }

  renderAddModalForm() {
    const modalForm = AddModalForm();
    this.root.appendChild(modalForm);
  }

  renderDeleteModal() {
    const modalDeleteProduct = DeleteModal();
    this.root.appendChild(modalDeleteProduct);
  }

  renderConfirmModal() {
    const confirmModal = ConfirmModal(); 
    this.root.appendChild(confirmModal);
  }

  renderAll() {
    this.renderHeader();
    this.renderAddModalForm();
    this.renderDeleteModal();
    this.renderConfirmModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const appLayout = new Layout();
  appLayout.renderAll();
});
