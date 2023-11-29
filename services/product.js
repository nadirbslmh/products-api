import ProductRepository from "../repositories/product.js";

export default class ProductService {
  static async getProducts() {
    return await ProductRepository.getProducts();
  }

  static async getProductByID(id) {
    return await ProductRepository.getProductByID(id);
  }

  static async createProduct(productRequest) {
    return await ProductRepository.createProduct(productRequest);
  }

  static async updateProduct(productRequest, id) {
    return await ProductRepository.updateProduct(productRequest, id);
  }

  static async deleteProduct(id) {
    return await ProductRepository.deleteProduct(id);
  }
}
