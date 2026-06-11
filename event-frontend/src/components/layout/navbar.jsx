import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function Navbar() {
  return (
    <Header className="navbar">

      <div className="logo">
        EventSphere
      </div>

      <Menu
        mode="horizontal"
        className="menu"
        items={[
          {
            key: "home",
            label: <Link to="/">Home</Link>,
          },

          {
            key: "events",
            label: "Events",
          },

          {
            key: "categories",
            label: "Categories",
          },

          {
            key: "about",
            label: "About",
          },

          {
            key: "contact",
            label: "Contact",
          },
        ]}
      />

      <div className="auth-buttons">

        <Button type="default">
          Login
        </Button>

        <Button type="primary">
          Register
        </Button>

      </div>

    </Header>
  );
}

export default Navbar;