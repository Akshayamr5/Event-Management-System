const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User

const registerUser = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      phone,
      role,
      companyName,
      managerType,
      portfolioLink,
    } = req.body;

    if (typeof role === "string" && role.toLowerCase() === "eventmanager") {
      role = "eventManager";
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData = {
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      companyName,
      managerType,
      portfolioLink,
    };

    if (role === "eventManager") {
      newUserData.status = "pending";
      newUserData.subscriptionStatus = "inactive";
    } else if (role === "client") {
      newUserData.status = "approved";
      newUserData.subscriptionStatus = "inactive";
    }

    // Create User
    const user = await User.create(newUserData);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login User

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ======================================
    // Super Admin Login
    // ======================================

    if (
      email === process.env.SUPER_ADMIN_EMAIL &&
      password === process.env.SUPER_ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        {
          id: "superadmin",
          role: "superadmin",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        },
      );

      return res.status(200).json({
        success: true,
        message: "Super Admin login successful",
        token,
        user: {
          id: "superadmin",
          name: "Super Admin",
          email: process.env.SUPER_ADMIN_EMAIL,
          role: "superadmin",
          approvalStatus: "approved",
          subscriptionStatus: "active",
        },
      });
    }

    // ======================================
    // Normal User Login
    // ======================================

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        approvalStatus: user.approvalStatus,
        status: user.status,
        subscriptionStatus: user.subscriptionStatus,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get Logged In User Profile
// ======================================

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
