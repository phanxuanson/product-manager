class ActionModalToggle {
  constructor() {
    this.actionButton = null;
    this.actionMenu = null;
    this.init();
  }

  // Init event listener
  init() {
    document.addEventListener("click", (e) => this.handleClickShowAction(e));
  }

  // Handle click show Action modal
  handleClickShowAction(e) {
    this.actionButton = e.target.closest(".btn-action-modal");
    this.actionMenu = e.target.closest(".action-menu");

    if (this.actionButton) {
      this.toggleMenu(this.actionButton);
    } else if (!this.actionMenu) {
      this.closeActionModal();
    }
  }

  // Toggles the visibility of the Action modal
  toggleMenu() {
    const menu = this.actionButton.parentElement.querySelector(".action-menu");
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
