const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: false,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    unique: false,
  },
  job: String,
  location: {
    type: String,
    required: true,
  },
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;