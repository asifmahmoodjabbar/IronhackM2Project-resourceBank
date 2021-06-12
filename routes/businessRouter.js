const express = require("express");
const businessModel = require("../models/businessModel");
const businessRouter = express.Router();

businessRouter.get("/business", (request, response) => {
  console.log("Business signup page");
  businessModel.find({}, (err, crs) => {
    console.log("==>", crs);
  });
  res.send("Business signup page");
});
//     console.log("Business signup page")
//   const business = await businessModel.find({});

//   try {
//     response.send(business);
//   } catch (error) {
//     response.status(500).send(error);
//   }


module.exports = businessRouter;
