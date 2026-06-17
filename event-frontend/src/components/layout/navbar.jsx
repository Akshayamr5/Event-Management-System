import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header } = Layout;

function Navbar() {
  const navigate = useNavigate();
  let user = null;
  try {
    const raw = localStorage.getItem("user");
    if (raw) user = JSON.parse(raw);
  } catch (e) {
    user = null;
  }

  const getDashboardPath = () => {
    if (!user) return "/login";
    if (user.role === "superadmin") return "/superadmin/dashboard";
    if (user.role === "eventManager" || user.role === "eventmanager")
      return "/eventManager/dashboard";
    return "/client/dashboard";
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuItems = [
    { key: "home", label: <Link to="/">Home</Link> },
    { key: "events", label: <Link to="/events">Events</Link> },
    { key: "organizers", label: <Link to="/organizers">Organizers</Link> },
    { key: "about", label: <Link to="/about">About</Link> },
    { key: "contact", label: <Link to="/contact">Contact</Link> },
  ];

  if (user) {
    menuItems.push({
      key: "dashboard",
      label: <Link to={getDashboardPath()}>Dashboard</Link>,
    });
  }

  return (
    <Header className="navbar">
      <div className="logo">EventSphere</div>

      <Menu mode="horizontal" className="menu" items={menuItems} />

      <div className="auth-buttons">
        {!user ? (
          <>
            <Link to="/login">
              <Button type="default">Login</Button>
            </Link>

            <Link to="/register">
              <Button type="primary">Register</Button>
            </Link>
          </>
        ) : (
          <>
            <Button danger onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </Header>
  );
}

export default Navbar;
