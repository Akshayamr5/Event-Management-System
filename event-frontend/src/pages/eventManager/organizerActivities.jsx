import React from "react";
import { Card, Row, Col, Statistic, Button, Typography } from "antd";
import {
  AppstoreOutlined,
  PictureOutlined,
  FileTextOutlined,
  MessageOutlined,
  DollarOutlined,
  StarOutlined,
  UserOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function OrganizerActivities() {
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
        <Title level={2}>Event Organizer Activities</Title>

        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Portfolio Works"
                value={18}
                prefix={<PictureOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Customer Reviews"
                value={4.9}
                prefix={<StarOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Payments"
                value={42000}
                prefix={<DollarOutlined />}
                suffix="₹"
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Categories"
                value={6}
                prefix={<AppstoreOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Portfolio</Title>

              <Button block icon={<PictureOutlined />}>
                Upload Portfolio
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Description</Title>

              <Button block icon={<FileTextOutlined />}>
                Edit Description
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>Categories</Title>

              <Button block icon={<AppstoreOutlined />}>
                Manage Categories
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
              <Title level={4}>Payments</Title>

              <Button block icon={<DollarOutlined />}>
                View Payments
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
              <Title level={4}>View Events</Title>

              <Button
                block
                icon={<CalendarOutlined />}
                onClick={() => navigate("/events")}
              >
                Browse Events
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable>
              <Title level={4}>My Profile</Title>

              <Button
                block
                icon={<UserOutlined />}
                onClick={() => navigate("/eventManager/profile")}
              >
                Open Profile
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

export default OrganizerActivities;
