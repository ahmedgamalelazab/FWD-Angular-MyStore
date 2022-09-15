const ProductService = require("./ProductService");

module.exports.AppServicesManager = {
  productService: new ProductService(),
};
