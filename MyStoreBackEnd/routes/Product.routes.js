/**
 * @description : Product router
 */

const {
  getAllProducts,
  insertProduct,
} = require("../controllers/productController");

const Router = require("express").Router();
//get all the products
Router.route("/products").get(getAllProducts);
//insert one product
Router.route("/products").post(insertProduct);

module.exports = Router;
