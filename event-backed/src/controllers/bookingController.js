const Booking = require("../models/booking");
const Event = require("../models/event");

// ======================================
// Create a New Booking
// ======================================

const createBooking = async (req, res) => {
  try {
    const { eventId, numberOfTickets } = req.body;

    // Check if event exists
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check if event is approved
    if (event.status !== "approved") {
      return res.status(400).json({
        success: false,
        message: "Event is not available for booking",
      });
    }

    // Calculate total amount
    const totalAmount = event.price * numberOfTickets;

    // Create booking
    const booking = await Booking.create({
      client: req.user.id,
      event: eventId,
      numberOfTickets,
      totalAmount,
      bookingStatus: "confirmed",
      paymentStatus: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get All Bookings of Logged In User
// ======================================

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      client: req.user.id,
    })
      .populate("event")
      .populate("client", "-password");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get All Bookings (Super Admin)
// ======================================

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("client", "-password")
      .populate("event");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Cancel Booking
// ======================================

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.bookingStatus = "cancelled";

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
};