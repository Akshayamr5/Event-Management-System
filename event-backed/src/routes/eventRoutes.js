const express = require("express");

const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getMyEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  approveEvent,
  rejectEvent,
} = require("../controllers/eventController");

const {
  authMiddleware,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

// ======================================
// Public Routes
// ======================================

// Get all approved events
router.get("/", getAllEvents);

// ======================================
// Event Manager Routes
// ======================================

// Get Logged In Manager Events
router.get(
  "/my-events",
  authMiddleware,
  authorizeRoles("eventmanager"),
  getMyEvents,
);

// Create Event
router.post("/", authMiddleware, authorizeRoles("eventmanager"), createEvent);

// Update Event
router.put("/:id", authMiddleware, authorizeRoles("eventmanager"), updateEvent);

// Delete Event
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("eventmanager"),
  deleteEvent,
);

// ======================================
// Super Admin Routes
// ======================================

// Approve Event
router.patch(
  "/approve/:id",
  authMiddleware,
  authorizeRoles("superadmin"),
  approveEvent,
);

// Reject Event
router.patch(
  "/reject/:id",
  authMiddleware,
  authorizeRoles("superadmin"),
  rejectEvent,
);

// ======================================
// Public Route
// ======================================

// Get Single Event
router.get("/:id", getEventById);

module.exports = router;
