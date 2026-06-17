import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Statistic,
  List,
  Tag,
  Avatar,
  Empty,
  Space,
} from "antd";
import {
  CalendarOutlined,
  HeartOutlined,
  CreditCardOutlined,
  ArrowRightOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import { getProfile } from "../../services/authApi";
import API from "../../services/axiosInstance";

const { Title, Text } = Typography;

const formatDate = (dateValue) => {
  if (!dateValue) return "-";
  const date = new Date(dateValue);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ClientDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [profileRes, bookingsRes] = await Promise.all([
        getProfile(),
        API.get("/bookings/my"),
      ]);

      if (profileRes.data?.success) {
        setUser(profileRes.data.user);
      }

      if (bookingsRes.data?.success) {
        setBookings(bookingsRes.data.bookings || []);
      }
    } catch (error) {
      console.error("Failed to load dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const upcomingEvents = bookings
    .filter((booking) => {
      const date = booking.event?.eventDate;
      return date && new Date(date) >= new Date();
    })
    .sort((a, b) => new Date(a.event.eventDate) - new Date(b.event.eventDate));

  const recentBookings = [...bookings]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const savedEvents = [];

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
        <Card
          style={{
            background: "linear-gradient(135deg, #1677ff, #7c3aed)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Title level={2} style={{ color: "#fff", marginBottom: 8 }}>
            Welcome Back{user?.name ? `, ${user.name}` : ""} 👋
          </Title>
          <Text style={{ color: "rgba(255,255,255,0.8)" }}>
            Manage your bookings, upcoming events, and saved items from one
            place.
          </Text>
          <div style={{ marginTop: 20 }}>
            <Button
              type="default"
              size="large"
              icon={<ArrowRightOutlined />}
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Browse Events
            </Button>
          </div>
        </Card>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={8}>
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
                    Recent Bookings
                  </Text>
                }
                value={bookings.length}
                prefix={<CreditCardOutlined />}
                valueStyle={{ color: "var(--text-primary)" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
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
                    Upcoming Events
                  </Text>
                }
                value={upcomingEvents.length}
                prefix={<CalendarOutlined />}
                valueStyle={{ color: "var(--text-primary)" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
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
                    Saved Events
                  </Text>
                }
                value={savedEvents.length}
                prefix={<HeartOutlined />}
                valueStyle={{ color: "var(--text-primary)" }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card
              title="Recent Bookings"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <List
                loading={loading}
                dataSource={recentBookings}
                locale={{
                  emptyText: <Empty description="No recent bookings" />,
                }}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="primary" size="small">
                        View Ticket
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar icon={<EnvironmentOutlined />} />}
                      title={item.event?.title || "Untitled Event"}
                      description={
                        item.event?.location
                          ? `${item.event.location} • ${formatDate(item.event.eventDate)}`
                          : formatDate(item.createdAt)
                      }
                    />
                    <Tag
                      color={
                        item.bookingStatus === "confirmed" ? "green" : "default"
                      }
                    >
                      {item.bookingStatus?.toUpperCase()}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="Upcoming Events"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <List
                loading={loading}
                dataSource={upcomingEvents}
                locale={{
                  emptyText: <Empty description="No upcoming events" />,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<CalendarOutlined />} />}
                      title={item.event?.title || "Untitled Event"}
                      description={
                        item.event?.location
                          ? `${item.event.location} • ${formatDate(item.event.eventDate)}`
                          : "No date available"
                      }
                    />
                    <Tag color="blue">
                      {item.paymentStatus
                        ? item.paymentStatus.toUpperCase()
                        : "BOOKED"}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card
              title="Saved Events"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ minHeight: 180 }}>
                {savedEvents.length === 0 ? (
                  <Empty description="No saved events" />
                ) : (
                  <List
                    dataSource={savedEvents}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar icon={<HeartOutlined />} />}
                          title={item.title}
                          description={item.location}
                        />
                      </List.Item>
                    )}
                  />
                )}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="Recent Activity"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Text style={{ color: "var(--text-secondary)" }}>
                  Manage your bookings and saved events from the links below.
                </Text>
                <Button type="primary">View Bookings</Button>
                <Button>Browse Events</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </main>

      <Footer />
    </div>
  );
};

export default ClientDashboard;
