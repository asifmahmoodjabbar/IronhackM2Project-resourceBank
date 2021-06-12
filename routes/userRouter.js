const express = require("express");
const employeeModel = require("../models/userModel");
const userRouter = express.Router();

userRouter.get("/login", async (request, response) => {
  console.log("Login page is displayed");
  businessModel.find({}, (err, crs) => {
    console.log("==>", crs);
  });
  res.send("Business signup page");
});

module.exports = userRouter;
