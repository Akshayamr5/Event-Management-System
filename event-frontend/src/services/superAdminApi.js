import API from "./axiosInstance";


export const getAllUsers = () => {
  return API.get("/superadmin/users");
};

// Get Pending Managers
export const getPendingManagers = () => {
  return API.get("/superadmin/pendingManagers");
};

// Approve Manager
export const approveManager = (id) => {
  return API.put(`/superadmin/approve/${id}`);
};

// Reject Manager
export const rejectManager = (id) => {
  return API.put(`/superadmin/reject/${id}`);
};
