import React, { useState, useEffect } from "react";
import { Grid, Row, Col, Typography } from "antd";
import {
  CalendarOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

// Components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";
import StatCard from "../../components/admin/statcard";
import ChartCard from "../../components/admin/chartCard";
import QuickAction from "../../components/admin/quickAction";
import ActivityTimeline from "../../components/admin/activityTimeline";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Dashboard = () => {
  const screens = useBreakpoint();
  // lg breakpoint is 992px
  const isMobile = !screens.lg;
  const [collapsed, setCollapsed] = useState(false);

  // Automatically collapse sidebar on smaller screens
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      {/* APP LAYOUT - FLEXBOX */}
      <div
        className="app-layout"
        style={{ display: "flex", flex: 1, width: "100%", overflow: "hidden" }}
      >
        {/* Sidebar: Passes state and isMobile flag */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />

        {/* Main Content: Flex 1 allows it to take remaining width automatically */}
        <main
          className="main-content"
          style={{
            flex: 1,
            overflowY: "auto",
            transition: "all 0.3s ease",
            padding: "24px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <Title level={2} style={{ margin: 0 }}>
              Dashboard
            </Title>
            <Text type="secondary">Welcome back, Super Admin</Text>
          </div>

          {/* Stats Section */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Total Events"
                value="248"
                icon={<CalendarOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Active Users"
                value="180"
                icon={<UserOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Revenue"
                value="₹5.2M"
                icon={<DollarOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Growth"
                value="12%"
                icon={<BarChartOutlined />}
              />
            </Col>
          </Row>

          {/* Overview & Quick Actions */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col xs={24} lg={16}>
              <ChartCard title="Platform Overview" />
            </Col>
            <Col xs={24} lg={8}>
              <QuickAction
                label="Create New Event"
                description="Launch a new event quickly"
              />
            </Col>
          </Row>

          {/* Recent Activity */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col span={24}>
              <ActivityTimeline />
            </Col>
          </Row>

          {/* Categories & Status */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <ChartCard title="Event Categories" />
            </Col>
            <Col xs={24} lg={12}>
              <ChartCard title="System Status" />
            </Col>
          </Row>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
