import AddModalForm from '../components/AddModalForm.js';

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
    // const modal = ModalDelete();
    // this.root.appendChild(modal);
  }

  renderAll() {
    this.renderHeader();
    this.renderAddModalForm();
    this.renderDeleteModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const appLayout = new Layout();
  appLayout.renderAll();
});
