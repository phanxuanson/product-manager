import { iconData } from '../mock/images-data';

const { close, trash } = iconData;

const ConfirmModal = () => {
  const confirmModalWrapper = document.createElement('div');
  confirmModalWrapper.className = 'confirmModalWrapper flex justify-center mt-20';
  confirmModalWrapper.innerHTML = `
    <div class="relative bg-white rounded-2xl max-w-sm w-full p-6 pt-8 shadow-[0_20px_25px_6px_rgba(0,0,0,0.1),0_10px_10px_6px_rgba(0,0,0,0.04)]">
    	<button aria-label="Close" class="absolute top-5 right-5 text-[#6b7280] hover:text-[#374151] focus:outline-none">
      	<img src="${close.url}" alt="${close.alt}" class="w-6 h-6 cursor-pointer" />
    	</button>

			<div class="flex items-center mb-4">
				<div class="header-confirm-modal">
					<img src="${trash.url}" alt="${trash.alt}" class="w-6 h-6" />
					<div class="text-confirm-modal">
					<h2 class="text-neutral font-primary font-normal text-sm">Ooops!</h2>
					<p class="text-[#6b7280] text-sm leading-5">Something went wrong</p>
				</div>
				</div>
			</div>

			<button class="w-full bg-warning text-white font-primary font-semibold rounded-lg py-2.5 text-center text-sm font-normal hover:bg-[#b91c1c] focus:outline-none">
				Close
			</button>
  	</div>
  `;
  return confirmModalWrapper;
};

export default ConfirmModal;
