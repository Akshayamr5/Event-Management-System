import React from "react";
import { Layout, Menu, Typography, Tooltip, ConfigProvider } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  CalendarOutlined,
  DollarOutlined,
  BarChartOutlined,
  SettingOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const WIDTH_EXPANDED = 260;
const WIDTH_COLLAPSED = 80;

const NAV_ITEMS = [
  { key: "/superadmin", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/superadmin/users", icon: <UserOutlined />, label: "Users" },
  {
    key: "/superadmin/managers",
    icon: <TeamOutlined />,
    label: "Event Managers",
  },
  { key: "/superadmin/events", icon: <CalendarOutlined />, label: "Events" },
  {
    key: "/superadmin/subscriptions",
    icon: <DollarOutlined />,
    label: "Subscriptions",
  },
  {
    key: "/superadmin/analytics",
    icon: <BarChartOutlined />,
    label: "Analytics",
  },
  { key: "/superadmin/settings", icon: <SettingOutlined />, label: "Settings" },
];

const Sidebar = ({ collapsed, setCollapsed, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to wrap items in Tooltip for collapsed mode
  const getItems = NAV_ITEMS.map((item) => ({
    ...item,
    label: collapsed ? (
      <Tooltip title={item.label} placement="right">
        {item.label}
      </Tooltip>
    ) : (
      item.label
    ),
  }));

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={WIDTH_EXPANDED}
      collapsedWidth={WIDTH_COLLAPSED}
      breakpoint="lg"
      onBreakpoint={setCollapsed}
      style={{ height: "100vh", flexShrink: 0, background: "#0a0a11" }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          gap: 12,
        }}
      >
        <ThunderboltOutlined style={{ color: "#fff", fontSize: 18 }} />
        {!collapsed && (
          <Text style={{ color: "#fff", fontWeight: 700 }}>EventSphere</Text>
        )}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed} // This automatically handles icon-centering and label hiding
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={getItems}
        style={{ background: "transparent", border: "none" }}
      />
    </Sider>
  );
};

export default Sidebar;
