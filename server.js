const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
 const businessRouter = require("./routes/businessRouter");
//const employeeRouter = require("./routes/employeeRouter");

const app = express();

mongoose
  .connect("mongodb://localhost:8000", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Connected to mongo database name: "${db.connections[0].name}"`)
  )
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

  app.use(express.json());

 app.use("/business", businessRouter);
// app.use("/employee", employeeRouter);
app.listen(8000, () => console.log("Server is running"));
