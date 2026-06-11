const express = require("express");

const {
  createEvent,
  getAllEvents,
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

const router = express.Router();

// ======================================
// Public Routes
// ======================================

// Get all approved events
router.get("/", getAllEvents);

// Get single event
router.get("/:id", getEventById);

// ======================================
// Event Manager Routes
// ======================================

// Create new event
router.post(
  "/",
  authMiddleware,
  authorizeRoles("eventmanager"),
  createEvent
);

// Update event
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("eventmanager", "superadmin"),
  updateEvent
);

// Delete event
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("eventmanager", "superadmin"),
  deleteEvent
);

// ======================================
// Super Admin Routes
// ======================================

// Approve event
router.put(
  "/:id/approve",
  authMiddleware,
  authorizeRoles("superadmin"),
  approveEvent
);

// Reject event
router.put(
  "/:id/reject",
  authMiddleware,
  authorizeRoles("superadmin"),
  rejectEvent
);

module.exports = router;