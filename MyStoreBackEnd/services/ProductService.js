/**
 * @description : Product service
 */

const ProductRepository = require("../Repository/ProductRepository");

const { ProductType } = require("../types/ProductSchema");

const Product = require("../models/Product");

/**
 * @type {ProductRepository}
 */
let repositoryInstance;

class ProductService {
  constructor() {
    repositoryInstance = new ProductRepository(Product);
  }

  /**
   *
   * @returns {Promise<[ProductType]> | null}
   */
  async getAllProducts() {
    const result = await repositoryInstance.getAllEntities();
    return result;
  }
  /**
   *
   * @param {ProductType} newProduct
   */
  async insertProduct(newProduct) {
    const result = await repositoryInstance.createEntity(newProduct);
    return result;
  }

  async removeProductById(id) {
    const result = await repositoryInstance.removeEntity(id);
    return result;
  }

  /**
   *
   * @param {any} id
   * @returns {Promise<ProductType> | null}
   */
  async findProductById(id) {
    const productFound = await repositoryInstance.findEntityById(id);
    return productFound;
  }
}

module.exports = ProductService;
