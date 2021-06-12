const express = require("express");
const employeeModel = require("../models/employeeModel");
const employeeRouter = express.Router();

employeeRouter.get("/employee", async (request, response) => {
  console.log("Business signup page");
  businessModel.find({}, (err, crs) => {
    console.log("==>", crs);
  });
  res.send("Business signup page");
});

module.exports = employeeRouter;
