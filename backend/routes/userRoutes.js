const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  getProfile,
  updateProfile,
} = require("../controllers/userController");

// User authentication routes
router.post("/user/login", login);
router.post("/user/register", signup);

// User profile routes (protected by authentication)
router.get("/user/profile", getProfile);
router.patch("/user/profile", updateProfile);

module.exports = router;
