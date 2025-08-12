class ActionModalToggle {
  constructor() {
    this.actionButton = null;
    this.actionMenu = null;
    this.init();
  }

  // Init event listener
  init() {
    document.addEventListener("click", (e) => this.handleDocumentClick(e));
  }

  // Handle click show Action modal
  handleDocumentClick(e) {
    this.actionButton = e.target.closest(".btn-action-modal");
    this.actionMenu = e.target.closest(".action-modal");

    if (this.actionButton) {
      this.toggleMenu(this.actionButton);
    } else if (!this.actionMenu) {
      this.closeActionModal();
    }
  }

  // Toggles the visibility of the Action modal
  toggleMenu() {
    const productRow = this.actionButton.closest(".product-item-table-row");
    const menu = productRow?.querySelector(".action-modal");

    if (!menu) return;

    const isMenuOpen = menu.classList.contains("show");

    // Toggle menu
    if (!isMenuOpen) {
      menu.classList.add("show");
    } else {
      menu.classList.remove("show");
    }
  }

  // Close Action modal
  closeActionModal() {
    if (this.actionMenu) {
      this.actionMenu.classList.remove("show");
      this.actionMenu = null;
    }
  }
}

new ActionModalToggle();
