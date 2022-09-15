const mongoose = require("mongoose");

let connectionString = "";
class ApplicationDbConnector {
  /**
   *@description : provide connection string for the Object ot start connect immediately
   * @param {string} databaseurl
   */
  constructor(databaseurl) {
    connectionString = databaseurl;
    mongoose.connection.on("uninitialized", () => {
      console.log("application database uninitialized !");
    });
    mongoose.connection.on("connected", () => {
      console.log("application database has been connected successfully !");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("application database has disconnected !");
    });
    mongoose.connection.on("connecting", () => {
      console.log("application database is connecting !");
    });
    mongoose.connection.on("disconnecting", () => {
      console.log("application database is disconnecting!");
    });
  }

  //Promise
  async connect() {
    try {
      await mongoose.connect(connectionString);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ApplicationDbConnector;
