import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const getUserFromStorage = () => {
  const rawUser = localStorage.getItem("user");
  if (!rawUser) return null;

  try {
    return JSON.parse(rawUser);
  } catch {
    return null;
  }
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  const user = getUserFromStorage();
  const currentPath = location.pathname;

  if (!user || !user.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "superadmin") {
      return <Navigate to="/superadmin/dashboard" replace />;
    }
    if (user.role === "client") {
      return <Navigate to="/client/dashboard" replace />;
    }
    if (user.role === "eventManager") {
      if (user.status === "pending") {
        return <Navigate to="/request-processing" replace />;
      }
      if (user.status === "rejected") {
        return <Navigate to="/request-rejected" replace />;
      }
      if (user.status === "approved") {
        if (user.subscriptionStatus === "inactive") {
          return <Navigate to="/eventManager/subscription" replace />;
        }
        return <Navigate to="/eventManager/dashboard" replace />;
      }
    }

    return <Navigate to="/login" replace />;
  }

  if (user.role === "eventManager") {
    if (user.status === "pending") {
      if (currentPath !== "/request-processing") {
        return <Navigate to="/request-processing" replace />;
      }
      return children;
    }

    if (user.status === "rejected") {
      if (currentPath !== "/request-rejected") {
        return <Navigate to="/request-rejected" replace />;
      }
      return children;
    }

    if (user.status === "approved") {
      if (user.subscriptionStatus === "inactive") {
        if (currentPath !== "/eventManager/subscription") {
          return <Navigate to="/eventManager/subscription" replace />;
        }
        return children;
      }

      if (currentPath === "/eventManager/subscription") {
        return <Navigate to="/eventManager/dashboard" replace />;
      }
    }
  }

  if (user.role === "client") {
    if (
      currentPath.startsWith("/eventManager") ||
      currentPath.startsWith("/superadmin") ||
      currentPath === "/request-processing" ||
      currentPath === "/request-rejected"
    ) {
      return <Navigate to="/client/dashboard" replace />;
    }
  }

  if (user.role === "superadmin") {
    if (!currentPath.startsWith("/superadmin")) {
      return <Navigate to="/superadmin/dashboard" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
