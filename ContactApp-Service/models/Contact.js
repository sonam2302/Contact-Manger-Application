const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  _id: String,
  firstname: String,
  lastname: String,
  email: String,
  city: String,
  age: Number,
  phone: String,
});

module.exports = mongoose.model("Contact", ContactSchema, "Contacts");
