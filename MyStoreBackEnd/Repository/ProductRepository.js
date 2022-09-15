/**
 * @description : Produc repository
 */

const { ProductType } = require("../types/ProductSchema");

const mongoose = require("mongoose");

/**
 * @type {mongoose.Model}
 */
let model;

class ProductRepository {
  /**
   *
   * @param {mongoose.Model} mongooseModel
   */
  constructor(mongooseModel) {
    model = mongooseModel;
  }

  /**
   *
   * @param {ProductType} newEntity
   * @returns {Promise<boolean>}
   */
  async createEntity(newEntity) {
    try {
      await model.create(newEntity);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   *
   * @param {mongoose.Types.ObjectId} id
   * @returns {Promise<ProductType> | null}
   */
  async findEntityById(id) {
    try {
      const foundModel = await model.findById(id);
      return foundModel;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   *
   * @param {mongoose.Types.ObjectId} id
   * @returns {Promise<boolean>}
   */
  async removeEntity(id) {
    try {
      await model.remove({ _id: id });
      //if all are ok
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   *
   * @returns {Promise<[ProductType]> | null}
   */
  async getAllEntities() {
    try {
      const entities = await model.find();
      return entities;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //   async updateEntity(entity){
  //     try {
  //     } catch (error) {

  //     }
  //   }
  //crud operations
}

module.exports = ProductRepository;
