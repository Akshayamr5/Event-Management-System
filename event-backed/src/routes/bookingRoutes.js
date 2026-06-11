const express = require("express");

const {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const {
  authMiddleware,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// ======================================
// Client Routes
// ======================================

// Create a booking
router.post(
  "/",
  authMiddleware,
  authorizeRoles("client"),
  createBooking
);

// Get logged-in client's bookings
router.get(
  "/my",
  authMiddleware,
  authorizeRoles("client"),
  getMyBookings
);

// Cancel a booking
router.put(
  "/:id/cancel",
  authMiddleware,
  authorizeRoles("client"),
  cancelBooking
);

// ======================================
// Super Admin Route
// ======================================

// Get all bookings
router.get(
  "/",
  authMiddleware,
  authorizeRoles("superadmin"),
  getAllBookings
);

module.exports = router;