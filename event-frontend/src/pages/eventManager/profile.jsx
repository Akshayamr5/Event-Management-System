import React from "react";
import { Card, Avatar, Typography, Row, Col, Tag, Button, Divider } from "antd";
import {
  UserOutlined,
  MailOutlined,
  ApartmentOutlined,
  CrownOutlined,
  ThunderboltOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleActivities = () => {
    if (user.subscriptionStatus !== "active") {
      navigate("/eventManager/subscription");
      return;
    }

    if (user.managerType === "host") {
      navigate("/eventManager/host-activities");
    } else {
      navigate("/eventManager/organizer-activities");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
      }}
    >
      <Card
        style={{
          maxWidth: "1000px",
          margin: "auto",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <Row gutter={30} align="middle">
          <Col xs={24} md={6} style={{ textAlign: "center" }}>
            <Avatar
              size={130}
              src={user.profileImage}
              icon={<UserOutlined />}
            />

            <Title level={3} style={{ marginTop: 15 }}>
              {user.name || "Event Manager"}
            </Title>

            <Text type="secondary">{user.email || "No Email"}</Text>
          </Col>

          <Col xs={24} md={18}>
            <Title level={3}>Manager Information</Title>

            <Divider />

            <Row gutter={[20, 20]}>
              <Col span={12}>
                <Text strong>
                  <ApartmentOutlined /> Company
                </Text>

                <br />

                <Text>{user.companyName || "Not Available"}</Text>
              </Col>

              <Col span={12}>
                <Text strong>
                  <MailOutlined /> Portfolio
                </Text>

                <br />

                <Text>{user.portfolioLink || "Not Available"}</Text>
              </Col>

              <Col span={12}>
                <Text strong>Approval Status</Text>

                <br />

                <Tag
                  color={
                    user.approvalStatus === "approved"
                      ? "green"
                      : user.approvalStatus === "pending"
                        ? "gold"
                        : "red"
                  }
                >
                  {user.approvalStatus || "Pending"}
                </Tag>
              </Col>

              <Col span={12}>
                <Text strong>Subscription</Text>

                <br />

                <Tag
                  color={
                    user.subscriptionStatus === "active" ? "blue" : "volcano"
                  }
                >
                  {user.subscriptionStatus || "Inactive"}
                </Tag>
              </Col>

              <Col span={24}>
                <Text strong>Manager Type</Text>

                <br />

                <Tag color="purple">{user.managerType || "Not Selected"}</Tag>
              </Col>
            </Row>

            <Divider />

            <Button
              type="primary"
              size="large"
              icon={<ThunderboltOutlined />}
              onClick={handleActivities}
            >
              Activities
            </Button>

            <Button
              danger
              size="large"
              icon={<LogoutOutlined />}
              style={{ marginLeft: 15 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Profile;
