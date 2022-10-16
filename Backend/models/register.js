const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
    unique: true,
  },
  confirmpassword: {
    type: "String",
  },
});
const Register = new mongoose.model("Register", userSchema);

module.exports = Register;
