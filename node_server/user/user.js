var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

mongoose.model("user", userSchema);

module.exports = mongoose.model("user");
