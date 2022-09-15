//dependencies
const express = require("express");
const DataBaseConnector = require("../database/MongooseConnection");
const {
  configureApplicationPipeLines,
} = require("./CorePipeLineConfigurations");
const { HttpStatus } = require("../utils/HttpResponseTable");
const { AppServicesManager } = require("../services/ServiceManager");
//dependencies

let app = null;

class AppCore {
  constructor() {
    app = express();
  }

  async connectToMongoDatabase(connectionString) {
    return new DataBaseConnector(connectionString).connect();
  }

  /**
   *
   * @param {(serviceManager:AppServicesManager)=>Promise<void>} callback
   * @returns {Promise<AppCore}
   */
  async seedData(callback) {
    await callback(AppServicesManager);
    return this;
  }

  start() {
    configureApplicationPipeLines((app) => {
      app.use("/api/v1", require("../routes/Product.routes"));
      app.get("/", (req, res, next) => {
        res.status(HttpStatus.OK).json({
          success: true,
          data: "hello world",
        });
      });
    }, app);

    try {
      const PORT = process.env.PORT || 5555;
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`application up and running on port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AppCore;
