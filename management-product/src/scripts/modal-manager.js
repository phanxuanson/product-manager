class ModalManager {
	constructor() {
		this.container = document.querySelector('.container');

		// Variables to the Modals
		this.modals = {
			add: this.container.querySelector('.upload-form-modal'),
			delete: this.container.querySelector('.delete-modal'),
			confirm: this.container.querySelector('.confirm-modal-deletion'),
		};

		this.initializeEvents();
	}

	// Show modal upload form
	showModal = (modalName) => {
		const modal = this.modals[modalName];
		modal.classList.add('block');
	};

	// Close modal upload form
	closeAddBtn = (modalName) => {
		this.modals[modalName].classList.remove('block');
	}


	// Initialize event listeners for modals
	initializeEvents = () => {

		// Event listener for show the modal upload form
		const showAddBtn = this.container.querySelector('.btn-show-modal-form');
		showAddBtn?.addEventListener('click', () => this.showModal('add'));

		// Event listener for close the modal upload form
		['.btn-close-modal', '.btn-cancel'].forEach(selector => {
			this.modals.add.querySelector(selector)
				?.addEventListener('click', () => this.closeAddBtn('add'));
		});

		// Event listener for Close Delete & Confirm Modal
		const closeDeleteModal = this.container.querySelector('.btn-close-delete-modal');
		closeDeleteModal?.addEventListener('click', () => this.closeAddBtn('delete', 'confirm'));
		console.log('closeModal',closeDeleteModal);
	}
}

new ModalManager();