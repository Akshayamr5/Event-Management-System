import API from "./axiosInstance";

// ==============================
// Create Event
// ==============================

export const createEvent = (data) => {
  return API.post("/events", data);
};

// ==============================
// Get All Approved Events
// ==============================

export const getAllEvents = () => {
  return API.get("/events");
};

// ==============================
// Get Logged In Manager Events
// ==============================

export const getMyEvents = () => {
  return API.get("/events/my-events");
};

// ==============================
// Get Single Event
// ==============================

export const getEventById = (id) => {
  return API.get(`/events/${id}`);
};

// ==============================
// Update Event
// ==============================

export const updateEvent = (id, data) => {
  return API.put(`/events/${id}`, data);
};

// ==============================
// Delete Event
// ==============================

export const deleteEvent = (id) => {
  return API.delete(`/events/${id}`);
};

// ==============================
// Approve Event (Super Admin)
// ==============================

export const approveEvent = (id) => {
  return API.patch(`/events/approve/${id}`);
};

// ==============================
// Reject Event (Super Admin)
// ==============================

export const rejectEvent = (id) => {
  return API.patch(`/events/reject/${id}`);
};
