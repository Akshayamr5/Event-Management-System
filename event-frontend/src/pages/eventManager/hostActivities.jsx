import React from "react";
import { Card, Row, Col, Statistic, Button, Typography } from "antd";
import {
  CalendarOutlined,
  PlusCircleOutlined,
  DollarOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function HostActivities() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Title level={2}>Event Host Activities</Title>

        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="My Events"
                value={12}
                prefix={<CalendarOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Bookings"
                value={56}
                prefix={<PlusCircleOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Payments"
                value={25000}
                prefix={<DollarOutlined />}
                suffix="₹"
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Reviews"
                value={4.8}
                prefix={<StarOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Create Event</Title>

              <Button
                type="primary"
                block
                icon={<PlusCircleOutlined />}
                onClick={() => navigate("/eventManager/create-event")}
              >
                Create Event
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>My Events</Title>

              <Button
                block
                icon={<CalendarOutlined />}
                onClick={() => navigate("/eventManager/my-events")}
              >
                View Events
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Payments</Title>

              <Button block icon={<DollarOutlined />}>
                View Payments
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Customer Chats</Title>

              <Button block icon={<MessageOutlined />}>
                Open Chats
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Customer Reviews</Title>

              <Button block icon={<StarOutlined />}>
                View Reviews
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Profile</Title>

              <Button
                block
                icon={<UserOutlined />}
                onClick={() => navigate("/eventManager/profile")}
              >
                My Profile
              </Button>
            </Card>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/eventManager/dashboard")}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HostActivities;
