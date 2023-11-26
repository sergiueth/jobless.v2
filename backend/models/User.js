const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Define your User schema
  email: { type: String, required: true },
  password: { type: String, required: true },
  // ... other fields
});

const User = mongoose.model("User", userSchema);

module.exports = User;
