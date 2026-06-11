const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const {
  authMiddleware,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// =============================
// Public Routes
// =============================

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// =============================
// Protected Routes
// =============================

// Get Logged In User Profile
router.get("/profile", authMiddleware, getProfile);

module.exports = router;