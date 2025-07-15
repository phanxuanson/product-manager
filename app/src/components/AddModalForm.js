import { iconData } from '../mock/images-data';

const { avatar, chevron, close, upload } = iconData;
const AddProductForm = () => {
  const wrapperModal = document.createElement('div');
  wrapperModal.className =
    'wrapperModal flex items-center justify-center min-h-screen p-4';

    console.log('Icon Data:', { avatar, chevron, close, upload });
  wrapperModal.innerHTML = `
    <div class="container-modal bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] max-w-md w-full p-6 relative" style="box-shadow: 0 0 20px rgba(0,0,0,0.1)">
      <h2 class="title-modal text-primary text-lg font-semibold font-primary mb-6">Add new product</h2>
      <button aria-label="Close" class="absolute top-6 right-6 text-gray-500 hover:text-primary focus:outline-none">
        <img src="${close.url}" alt="${close.alt}" />
      </button>
      <form class="space-y-5">
        <div class="flex items-center space-x-6">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Add image">
              <img src="${avatar.url}" alt="${avatar.alt}" />
            </div>
            <label for="upload" class="flex flex-col items-center justify-center flex-1 h-16 border border-input-border rounded-xl cursor-pointer hover:border-gray-400">
              <div class="flex flex-col items-center justify-center space-y-1">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <img src="${upload.url}" alt="${upload.alt}" />
                </div>
                <span class="text-[#6941C6] text-sm select-none font-semibold font-primary">Click to upload</span>
              </div>
              <input type="file" id="upload" class="hidden" />
            </label>
          </div>
  
          <div>
            <label for="name" class="block text-primary text-sm font-bold mb-1 font-primary">Name</label>
            <input type="text" id="name" placeholder="Enter name..." class="w-full border border-input-border rounded-lg px-3 py-2 text-[#C9CFDA] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div>
            <label for="quantity" class="block text-primary text-sm font-bold mb-1">Quantity</label>
            <input type="number" id="quantity" value="0" class="w-full border border-input-border rounded-lg px-3 py-2 text-[#667085] font-primary focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div>
            <label for="price" class="block text-primary text-sm font-bold mb-1">Price</label>
            <input type="number" id="price" value="0" class="w-full border border-input-border rounded-lg px-3 py-2 text-[#667085] font-primary focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div class="flex space-x-4">
            <div class="flex-1">
              <label for="status" class="block text-primary text-sm font-bold mb-1">Status</label>
              <div class="product-status relative">
                <select id="status" class="appearance-none w-full border border-input-border rounded-lg px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600">
                  <option>Available</option>
                  <option>Sold out</option>
                </select>
                <div class="product-status-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <img src="${chevron.url}" class="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
            <div class="flex-1">
              <label for="types" class="block text-primary text-sm font-bold mb-1">Types</label>
              <div class="type-status relative">
                <select id="types" class="appearance-none w-full border border-input-border rounded-lg px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600">
                  <option>Ring</option>
                  <option>Bravo</option>
                  <option>Alfa</option>
                  <option>Gold</option>
                </select>
                <div class="product-status-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <img src="${chevron.url}" class="absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <label for="brand" class="block text-primary text-sm font-bold mb-1">Brand</label>
            <input type="text" id="brand" placeholder="Enter Brand..." class="w-full border border-input-border rounded-md px-3 py-2 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div class="flex justify-end space-x-3 mt-4">
            <button id="cancel-button" type="button" class="px-5 py-2 rounded-lg border border-input-border font-primary font-semibold text-sm hover:bg-gray-50 focus:outline-none">Cancel</button>
            <button id="confirm-button" type="submit" class="px-5 py-2 rounded-lg bg-lime-600 font-primary text-sm text-white font-semibold hover:bg-lime-700 focus:outline-none">Confirm</button>
          </div>
        </form>
      </div>
    `;
  return wrapperModal;
};

export default AddProductForm;
