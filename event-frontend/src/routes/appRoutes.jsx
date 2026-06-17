import { Routes, Route } from "react-router-dom";

import Home from "../pages/landing/home";
import Events from "../pages/landing/events";
import EventDetails from "../pages/landing/eventDetails";
import Organizers from "../pages/landing/organizers";
import About from "../pages/landing/about";
import Contact from "../pages/landing/contact";
import CreateEvent from "../pages/eventManager/createEvent";
import MyEvent from "../pages/eventManager/myEvent";
import Orders from "../pages/eventManager/orders";
import Profile from "../pages/eventManager/profile";

import Subscription from "../pages/eventManager/subscription";
import HostActivities from "../pages/eventManager/hostActivities";
import OrganizerActivities from "../pages/eventManager/organizerActivities";
import RequestRejected from "../pages/auth/requestRejected";

import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

import ClientDashboard from "../pages/client/dashboard";

import EventManagerDashboard from "../pages/eventManager/dashboard";

import SuperAdminDashboard from "../pages/superadmin/dashboard";
import RequestProcessing from "../pages/auth/requestProcessing";
import Users from "../pages/superadmin/users";
import Managers from "../pages/superadmin/eventManager";
import AdminEvents from "../pages/superadmin/events";
import AdminSubscriptions from "../pages/superadmin/subscriptions";
import Analytics from "../pages/superadmin/analytics";
import Settings from "../pages/superadmin/settings";

// antd;

function AppRoutes() {
  return (
    <Routes>
      {/* Landing Pages */}

      <Route path="/" element={<Home />} />

      <Route path="/events" element={<Events />} />

      <Route path="/events/:id" element={<EventDetails />} />

      <Route path="/organizers" element={<Organizers />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Dashboards */}

      <Route path="/client/dashboard" element={<ClientDashboard />} />

      <Route
        path="/eventManager/dashboard"
        element={<EventManagerDashboard />}
      />

      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
      <Route path="/request-processing" element={<RequestProcessing />} />
      <Route path="/eventManager/create-event" element={<CreateEvent />} />

      <Route path="/eventManager/my-events" element={<MyEvent />} />

      <Route path="/eventManager/orders" element={<Orders />} />

      <Route path="/eventManager/profile" element={<Profile />} />
      <Route path="/eventManager/subscription" element={<Subscription />} />

      <Route
        path="/eventManager/host-activities"
        element={<HostActivities />}
      />

      <Route
        path="/eventManager/organizer-activities"
        element={<OrganizerActivities />}
      />

      <Route path="/request-rejected" element={<RequestRejected />} />
      <Route path="/superadmin" element={<SuperAdminDashboard />} />

      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />

      <Route path="/superadmin/users" element={<Users />} />

      <Route path="/superadmin/managers" element={<Managers />} />

      <Route path="/superadmin/events" element={<AdminEvents />} />

      <Route
        path="/superadmin/subscriptions"
        element={<AdminSubscriptions />}
      />

      <Route path="/superadmin/analytics" element={<Analytics />} />

      <Route path="/superadmin/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
