const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getPendingManagers,
  approveManager,
  rejectManager,
} = require("../controllers/superAdminController");

const {
  authMiddleware,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

// Get All Users

router.get("/users", authMiddleware, authorizeRoles("superadmin"), getAllUsers);

// Get Pending Managers

router.get(
  "/pendingManagers",
  authMiddleware,
  authorizeRoles("superadmin"),
  getPendingManagers,
);

// Approve Manager

router.put(
  "/approve/:id",
  authMiddleware,
  authorizeRoles("superadmin"),
  approveManager,
);

// Reject Manager

router.put(
  "/reject/:id",
  authMiddleware,
  authorizeRoles("superadmin"),
  rejectManager,
);

module.exports = router;
