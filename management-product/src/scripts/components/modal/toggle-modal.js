import { addModalInstance } from './form-modal.js';
import { MODAL_NAMES } from '../../constants/modal-names.js';

class ModalManager {
	constructor() {
		this.container = document.querySelector('.container');
		this.overlay = this.container.querySelector('.modal-overlay');

		// Variables to the Modals
		this.modals = {
			[MODAL_NAMES.ADD]: this.container.querySelector('.upload-form-modal'),
			[MODAL_NAMES.DELETE]: this.container.querySelector('.delete-modal'),
			[MODAL_NAMES.CONFIRM]: this.container.querySelector('.confirm-modal-deletion'),
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
		if (modalName === MODAL_NAMES.ADD) {
			addModalInstance.resetForm();
		}

		if (modalName === MODAL_NAMES.DELETE || modalName === MODAL_NAMES.CONFIRM) {
			modal.classList.add('hidden');
		}

		modal.classList.remove('block');
		this.overlay.classList.remove('active');

	};

	// Initialize event listeners for modals
	initializeEvents = () => {

		// Event listener for show the modal upload form
		const showAddBtn = this.container.querySelector('.btn-show-modal-form');
		showAddBtn?.addEventListener('click', () => this.showModal(MODAL_NAMES.ADD));

		// Event listener for close the modal upload form
		const closeConfig = [
			{ modal: MODAL_NAMES.ADD, selectors: ['.btn-close-modal', '.btn-cancel'] },
			{ modal: MODAL_NAMES.DELETE, selectors: ['.btn-close-delete-modal', '.btn-cancel-deleteModal'] },
			{ modal: MODAL_NAMES.CONFIRM, selectors: ['.btn-close-delete-modal', '.btn-close-confirm-modal'] }
		];

		closeConfig.forEach(({ modal: modalName, selectors }) => {
			const modal = this.modals[modalName];
			selectors.forEach(selector => {
				modal.querySelector(selector)
					?.addEventListener('click', () => this.closeModal(modalName));
			});
		});
	}
}

export const modalManager = new ModalManager();