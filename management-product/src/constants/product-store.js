export class ProductStore {
  static STORAGE_KEY = 'products';

  // Get list of products from LocalStorage
  static getProducts() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
  }

  // Save list of products to LocalStorage
  static saveProducts(products) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  }

  // Add a new product
  static addProduct(product) {
    const products = this.getProducts();
    products.push(product);
    this.saveProducts(products);
  }

  // Update an existing product
  static deleteProduct(index) {
    const products = this.getProducts();
    products.splice(index, 1);
    this.saveProducts(products);
  }
}
