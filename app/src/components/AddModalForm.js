// app/src/components/AddModalForm.js

const AddProductForm = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] max-w-md w-full p-6 relative" style="box-shadow: 0 0 20px rgba(0,0,0,0.1);">
      <h2 class="text-gray-900 text-lg font-semibold mb-6">Add new product</h2>
      <button aria-label="Close" class="absolute top-6 right-6 text-gray-500 hover:text-gray-700 focus:outline-none">
        <i class="fas fa-times text-lg"></i>
      </button>
      <form class="space-y-5">
        <div class="flex items-center space-x-4">
            <button type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Add image">
              <i class="fas fa-image fa-lg"></i>
              <i class="fas fa-plus fa-xs absolute translate-x-3 -translate-y-3"></i>
            </button>
  
            <label for="upload" class="flex flex-col items-center justify-center flex-1 h-16 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
              <div class="flex flex-col items-center justify-center space-y-1">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <i class="fas fa-cloud-upload-alt text-gray-400"></i>
                </div>
                <span class="text-purple-600 text-sm select-none">Click to upload</span>
              </div>
              <input type="file" id="upload" class="hidden" />
            </label>
          </div>
  
          <div>
            <label for="name" class="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" placeholder="Enter name..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div>
            <label for="quantity" class="block text-gray-700 text-sm font-medium mb-1">Quantity</label>
            <input type="number" id="quantity" value="0" class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div>
            <label for="price" class="block text-gray-700 text-sm font-medium mb-1">Price</label>
            <input type="number" id="price" value="0" class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div class="flex space-x-4">
            <div class="flex-1">
              <label for="status" class="block text-gray-700 text-sm font-medium mb-1">Status</label>
              <select id="status" class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600">
                <option>Available</option>
              </select>
            </div>
            <div class="flex-1">
              <label for="types" class="block text-gray-700 text-sm font-medium mb-1">Types</label>
              <select id="types" class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600">
                <option>Ring</option>
              </select>
            </div>
          </div>
  
          <div>
            <label for="brand" class="block text-gray-700 text-sm font-medium mb-1">Brand</label>
            <input type="text" id="brand" placeholder="Enter Brand..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600" />
          </div>
  
          <div class="flex justify-end space-x-3 mt-4">
            <button type="button" class="px-5 py-2 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 focus:outline-none">Cancel</button>
            <button type="submit" class="px-5 py-2 rounded-md bg-lime-600 text-white hover:bg-lime-700 focus:outline-none">Confirm</button>
          </div>
        </form>
      </div>
    `;
  return container;
};

export default AddProductForm;
