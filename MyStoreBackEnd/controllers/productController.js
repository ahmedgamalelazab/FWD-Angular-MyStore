/**
 * @description : product Controller
 */

const { request, response } = require("express");

const ProductService = require("../services/ProductService");

const { HttpStatus } = require("../utils/HttpResponseTable");

const { AppServicesManager } = require("../services/ServiceManager");

const productServiceInstance = AppServicesManager.productService;

/**
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.getAllProducts = async (req, res, next) => {
  const products = await productServiceInstance.getAllProducts();
  if (products) {
    res.status(HttpStatus.OK).json({
      success: true,
      statusCode: HttpStatus.OK,
      data: products,
    });
  } else {
    res.status(HttpStatus.InternalServerError).json({
      success: false,
      statusCode: HttpStatus.InternalServerError,
      data: null,
    });
  }
};

/**
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.insertProduct = async (req, res, next) => {
  const product = req.body;
  if (product) {
    const result = await productServiceInstance.insertProduct(product);
    if (result) {
      res.status(HttpStatus.Created).json({
        success: true,
        statusCode: HttpStatus.Created,
        data: true,
      });
    } else {
      res.status(HttpStatus.InternalServerError).json({
        success: false,
        statusCode: HttpStatus.InternalServerError,
        data: false,
      });
    }
  } else {
    res.status(HttpStatus["Bad Request"]).json({
      success: false,
      statusCode: HttpStatus["Bad Request"],
      data: null,
    });
  }
};

/**
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const result = await productServiceInstance.findProductById(id);
    if (result) {
      res.status(HttpStatus.OK).json({
        success: true,
        statusCode: HttpStatus.OK,
        data: result,
      });
    } else {
      res.status(HttpStatus.InternalServerError).json({
        success: false,
        statusCode: HttpStatus.InternalServerError,
        data: false,
      });
    }
  } else {
    res.status(HttpStatus["Bad Request"]).json({
      success: false,
      statusCode: HttpStatus["Bad Request"],
      data: null,
    });
  }
};
