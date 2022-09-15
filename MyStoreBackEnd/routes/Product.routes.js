/**
 * @description : Product router
 */

const {
  getAllProducts,
  insertProduct,
  getProductById,
} = require("../controllers/productController");

const Router = require("express").Router();
//get all the products
Router.route("/products").get(getAllProducts);
//get product by id
Router.route("/products/:id").get(getProductById);
//insert one product
Router.route("/products").post(insertProduct);

module.exports = Router;
