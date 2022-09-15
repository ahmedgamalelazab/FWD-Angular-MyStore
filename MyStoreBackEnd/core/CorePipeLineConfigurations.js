//module dependencies
const helment = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
//module dependencies

module.exports.configureApplicationPipeLines = function (
  configurateBasicRoutes,
  coreApplicationInstance
) {
  coreApplicationInstance.use(helment());
  coreApplicationInstance.use(morgan("combined"));
  coreApplicationInstance.use(cors());
  coreApplicationInstance.use(express.json());
  configurateBasicRoutes(coreApplicationInstance);
};
