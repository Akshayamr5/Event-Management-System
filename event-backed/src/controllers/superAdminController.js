const User = require("../models/user");

// ======================================
// Get Pending Event Managers
// ======================================

const getPendingManagers = async (req, res) => {
  try {
    const managers = await User.find({
      role: "eventManager",
    }).select("-password");

    res.status(200).json({
      success: true,
      count: managers.length,
      managers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Approve Event Manager
// ======================================

const approveManager = async (req, res) => {
  try {
    const manager = await User.findById(req.params.id);

    if (!manager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found",
      });
    }

    manager.status = "approved";

    await manager.save();

    res.status(200).json({
      success: true,
      message: "Manager approved successfully",
      manager,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Reject Event Manager
// ======================================

const rejectManager = async (req, res) => {
  try {
    const manager = await User.findById(req.params.id);

    if (!manager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found",
      });
    }

    manager.status = "rejected";

    await manager.save();

    res.status(200).json({
      success: true,
      message: "Manager rejected successfully",
      manager,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ======================================
// Get All Users
// ======================================

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getPendingManagers,
  approveManager,
  rejectManager,
};
