import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Space,
  Progress,
  List,
  Grid,
} from "antd";
import {
  ReloadOutlined,
  ExportOutlined,
  BarChartOutlined,
  UserOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";
import StatCard from "../../components/admin/statcard";
import ChartCard from "../../components/admin/chartCard";
import QuickActions from "../../components/admin/quickAction";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

// --- Data Arrays ---
const revenueMonthly = [
  { month: "Jan", val: 42 },
  { month: "Feb", val: 51 },
  { month: "Mar", val: 48 },
  { month: "Apr", val: 62 },
  { month: "May", val: 71 },
  { month: "Jun", val: 84 },
  { month: "Jul", val: 76 },
  { month: "Aug", val: 92 },
];

const userGrowth = [
  { month: "Jan", users: 900, percent: 30 },
  { month: "Feb", users: 1200, percent: 45 },
  { month: "Mar", users: 1500, percent: 60 },
  { month: "Apr", users: 1700, percent: 70 },
  { month: "May", users: 2100, percent: 85 },
  { month: "Jun", users: 2600, percent: 100 },
];

const trafficSources = [
  { label: "Direct", percent: 40, color: "var(--primary)" },
  { label: "Search", percent: 30, color: "var(--success)" },
  { label: "Social", percent: 20, color: "var(--warning)" },
  { label: "Referral", percent: 10, color: "var(--danger)" },
];

const deviceUsage = [
  { label: "Mobile", percent: 67, color: "var(--primary)" },
  { label: "Desktop", percent: 22, color: "var(--success)" },
  { label: "Tablet", percent: 11, color: "var(--warning)" },
];

const Analytics = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />

        <main
          style={{
            padding: "24px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            transition: "margin-left 0.3s ease",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <div>
              <Title
                level={2}
                style={{ color: "var(--text-primary)", margin: 0 }}
              >
                Analytics Dashboard
              </Title>
              <Text style={{ color: "var(--text-muted)" }}>
                Track business performance and user engagement
              </Text>
            </div>
            <Space>
              <Button icon={<ReloadOutlined />}>Refresh</Button>
              <Button icon={<ExportOutlined />}>Export</Button>
              <Button type="primary" icon={<BarChartOutlined />}>
                Report
              </Button>
            </Space>
          </div>

          {/* Statistics Section */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Total Users"
                value="24,580"
                change="+12.4%"
                changeType="positive"
                icon={<UserOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Revenue"
                value="$84,200"
                change="+8.2%"
                changeType="positive"
                icon={<DollarOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Orders"
                value="1,842"
                change="-3.1%"
                changeType="negative"
                icon={<ShoppingCartOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Conversion Rate"
                value="4.8%"
                change="+1.4%"
                changeType="positive"
                icon={<ThunderboltOutlined />}
              />
            </Col>
          </Row>

          {/* Revenue and Quick Actions */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col xs={24} lg={16}>
              <ChartCard title="Revenue Overview (Monthly %)">
                {revenueMonthly.map((item) => (
                  <div key={item.month} style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 4,
                      }}
                    >
                      <Text style={{ color: "var(--text-secondary)" }}>
                        {item.month}
                      </Text>
                      <Text style={{ color: "var(--text-primary)" }}>
                        {item.val}%
                      </Text>
                    </div>
                    <Progress
                      percent={item.val}
                      showInfo={false}
                      strokeColor="var(--primary)"
                      size="small"
                    />
                  </div>
                ))}
              </ChartCard>
            </Col>
            <Col xs={24} lg={8}>
              <QuickActions />
            </Col>
          </Row>

          {/* User Growth */}
          <Row style={{ marginBottom: 24 }}>
            <Col span={24}>
              <ChartCard title="User Growth">
                <List
                  dataSource={userGrowth}
                  renderItem={(item) => (
                    <List.Item style={{ border: "none", padding: "8px 0" }}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 20,
                        }}
                      >
                        <Text
                          style={{ width: 40, color: "var(--text-secondary)" }}
                        >
                          {item.month}
                        </Text>
                        <Progress
                          percent={item.percent}
                          showInfo={false}
                          strokeColor="var(--primary)"
                        />
                        <Text
                          style={{
                            width: 100,
                            color: "var(--text-primary)",
                            textAlign: "right",
                          }}
                        >
                          {item.users} Users
                        </Text>
                      </div>
                    </List.Item>
                  )}
                />
              </ChartCard>
            </Col>
          </Row>

          {/* Traffic Sources & Device Usage */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <ChartCard title="Traffic Sources">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                    paddingTop: 20,
                  }}
                >
                  {trafficSources.map((s) => (
                    <div key={s.label}>
                      <Progress
                        type="circle"
                        percent={s.percent}
                        strokeColor={s.color}
                        width={80}
                      />
                      <div
                        style={{ marginTop: 8, color: "var(--text-secondary)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ChartCard>
            </Col>
            <Col xs={24} lg={12}>
              <ChartCard title="Device Usage">
                {deviceUsage.map((d) => (
                  <div key={d.label} style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <Text style={{ color: "var(--text-secondary)" }}>
                        {d.label}
                      </Text>
                      <Text style={{ color: "var(--text-primary)" }}>
                        {d.percent}%
                      </Text>
                    </div>
                    <Progress
                      percent={d.percent}
                      showInfo={false}
                      strokeColor={d.color}
                      size="default"
                    />
                  </div>
                ))}
              </ChartCard>
            </Col>
          </Row>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Analytics;
