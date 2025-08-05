class ModalManager {
	constructor() {
		this.container = document.querySelector('.container');
		this.overlay = this.container.querySelector('.modal-overlay');

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
		this.overlay.classList.add('active');
		modal.classList.add('block');
	};

	// Close modal upload form
	closeModal = (modalName) => {
		const modal = this.modals[modalName];

		// Reset form if Upload Modal
		if (modalName === 'add') {
			const form = modal.querySelector('form');
			form?.reset();
		}

		if (modalName === 'delete' || modalName === 'confirm') {
			modal.classList.add('hidden');
		}

		modal.classList.remove('block');
		this.overlay.classList.remove('active');
	};


	// Initialize event listeners for modals
	initializeEvents = () => {

		// Event listener for show the modal upload form
		const showAddBtn = this.container.querySelector('.btn-show-modal-form');
		showAddBtn?.addEventListener('click', () => this.showModal('add'));

		// Event listener for close the modal upload form
		const closeConfig = [
			{ modal: 'add', selectors: ['.btn-close-modal', '.btn-cancel'] },
			{ modal: 'delete', selectors: ['.btn-close-delete-modal', '.btn-cancel-deleteModal'] },
			{ modal: 'confirm', selectors: ['.btn-close-delete-modal', '.btn-close-confirm-modal'] }
		];

		closeConfig.forEach(({ modal: modalName, selectors }) => {
			const modal = this.modals[modalName]; 
			selectors.forEach(selector => {
				modal.querySelector(selector)
					?.addEventListener('click', () => this.closeModal(modalName));
			});
		});

		const confirmBtn = this.modals.add.querySelector('.btn-confirm');
		confirmBtn?.addEventListener('click', () => {
			const form = this.modals.add.querySelector('form');
			form?.reset();
			this.closeModal('add');
		});
	}
}

new ModalManager();