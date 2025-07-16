import { iconData } from '../mock/images-data';

const { close, trash } = iconData;

const DeleteModal = () => {
  const deleteModalWrapper = document.createElement('div');
  deleteModalWrapper.className = 'deleteModalWrapper flex justify-center';
  deleteModalWrapper.innerHTML = `<div class="relative max-w-sm w-full bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] p-6">
    <!-- Close icon top right -->
    <div class="absolute top-5 right-5 focus:outline-none">
      <img src="${close.url}" alt="${close.alt}" class="w-6 h-6 cursor-pointer" />
    </div>

    <!-- Trash icon with pink glow circle -->
    <div class="w-12 h-12 rounded-full flex items-center justify-center">
        <img src="${trash.url}" alt="${trash.alt}" class="w-6 h-6 cursor-pointer" />
    </div>

    <!-- Text content -->
    <h2 class="text-primary font-bold text-lg mb-1.5">
      Delete product
    </h2>
    <p class="text-neutral text-sm mb-[53px]">
      Are you sure you want to delete this product? This action cannot be
      undone.
    </p>

    <!-- Buttons -->
    <div class="flex space-x-4">
      <button
        class="flex-1 border border-[#CBD5E1] rounded-lg py-2 text-[#0F172A] font-semibold text-sm hover:bg-[#F1F5F9] transition">
        Cancel
      </button>
      <button
        class="flex-1 bg-[#DC2626] rounded-lg py-2 text-white font-semibold text-sm hover:bg-[#B91C1C] transition">
        Delete
      </button>
    </div>
  </div>`;
  return deleteModalWrapper;
};

export default DeleteModal;
