import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Statistic,
  List,
  Tag,
  Timeline,
  Avatar,
  Badge,
  Empty,
  Space,
} from "antd";
import {
  CalendarOutlined,
  HeartOutlined,
  CreditCardOutlined,
  StarOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

// Existing layout components
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

const { Title, Text } = Typography;

// --- Mock Data ---
const stats = [
  { title: "Upcoming Events", value: 8, icon: <CalendarOutlined /> },
  { title: "Total Bookings", value: 24, icon: <CreditCardOutlined /> },
  { title: "Saved Events", value: 15, icon: <HeartOutlined /> },
  { title: "Reviews Given", value: 12, icon: <StarOutlined /> },
];

const bookings = Array(5).fill({
  event: "Music Festival",
  loc: "Mumbai",
  date: "24 July 2026",
  status: "Confirmed",
});

const categories = [
  "Music",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Education",
];

const Dashboard = () => {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      <main
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <Card
          style={{
            background: "linear-gradient(135deg, #1677ff, #7c3aed)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Title level={2} style={{ color: "#fff" }}>
            Welcome Back, John 👋
          </Title>
          <Text style={{ color: "rgba(255,255,255,0.8)" }}>
            Discover and manage your events easily.
          </Text>
          <div style={{ marginTop: 20 }}>
            <Button
              type="default"
              size="large"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Browse Events
            </Button>
          </div>
        </Card>

        {/* Stats Row */}
        <Row gutter={[24, 24]}>
          {stats.map((s, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card
                hoverable
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Statistic
                  title={
                    <Text style={{ color: "var(--text-secondary)" }}>
                      {s.title}
                    </Text>
                  }
                  value={s.value}
                  prefix={s.icon}
                  valueStyle={{ color: "var(--text-primary)" }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Content Row */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            {/* Upcoming Bookings */}
            <Card
              title="Upcoming Bookings"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <List
                dataSource={bookings}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="primary" size="small">
                        View Ticket
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar icon={<CalendarOutlined />} />}
                      title={item.event}
                      description={`${item.loc} • ${item.date}`}
                    />
                    <Tag color="success">{item.status}</Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            {/* Recent Activities */}
            <Card
              title="Recent Activities"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Timeline
                items={[
                  { children: "Booked Music Festival - 2h ago" },
                  { children: "Added Tech Meetup to Wishlist - Yesterday" },
                  { children: "Reviewed Startup Expo - 2 days ago" },
                ]}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Links & Categories */}
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card
              title="Quick Links"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Space wrap>
                {["Browse", "Bookings", "Wishlist", "Profile"].map((link) => (
                  <Button key={link} icon={<ArrowRightOutlined />}>
                    {link}
                  </Button>
                ))}
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Popular Categories"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Space wrap>
                {categories.map((cat) => (
                  <Tag
                    key={cat}
                    style={{ padding: "8px 16px", cursor: "pointer" }}
                  >
                    {cat}
                  </Tag>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
