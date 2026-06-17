const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Eneter your password!!"],
      minlength: 6,
    },

    phone: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["client", "eventManager", "superAdmin"],
      default: "client",
    },

    // Only for Event Managers

    companyName: {
      type: String,
      default: "",
    },

    // Super Admin Approval

    approvalStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // Status specifically for Event Managers
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    subscriptionStatus: {
      type: String,
      enum: ["inactive", "active"],
      default: "inactive",
    },

    managerType: {
      type: String,
      enum: ["host", "organizer", ""],
      default: "",
    },

    portfolioLink: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
