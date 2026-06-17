import API from "./axiosInstance";

// Register User
export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

// Login User
export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

// Get Logged In User
export const getProfile = () => {
  return API.get("/auth/profile");
};
