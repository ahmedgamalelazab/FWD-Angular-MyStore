const { productsToSeed, SeedingState } = require("./seeding/dataToSeed");
//server configurations
const path = require("path");
require("dotenv").config({
  path: path.join("./", "configurations", "AppConf.env"),
  //   path: "./configurations/AppConf.env",
});
//server configurations

const App = require("./core/AppCore");

const MyStoreApp = new App();

MyStoreApp.connectToMongoDatabase(process.env.DATABASE_URL).then(() => {
  MyStoreApp.seedData(async (serviceManager) => {
    const productService = serviceManager.productService;
    const foundData = await productService.getAllProducts();
    if (foundData.length === 0) {
      productsToSeed.forEach(async (productSample) => {
        await productService.insertProduct(productSample);
        console.log(
          `product with name : ${productSample.name} has been inserted succesfully`
        );
      });
    } else {
      //do nothing
    }
  }).then((appCore) => {
    appCore.start();
  });
});
