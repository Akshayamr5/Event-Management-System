import React, { useState } from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Radio,
  Button,
  Divider,
  Tag,
  message,
} from "antd";
import {
  CrownOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Subscription() {
  const navigate = useNavigate();

  const [managerType, setManagerType] = useState("");

  const handleContinue = () => {
    if (!managerType) {
      message.warning("Please select your manager type");
      return;
    }

    localStorage.setItem("managerType", managerType);

    message.success("Manager type selected successfully");

    if (managerType === "host") {
      navigate("/eventManager/host-activities");
    } else {
      navigate("/eventManager/organizer-activities");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <CrownOutlined
            style={{
              fontSize: "55px",
              color: "#faad14",
            }}
          />

          <Title level={2} style={{ marginTop: 15 }}>
            Premium Subscription
          </Title>

          <Text type="secondary">
            Subscribe to unlock all EventSphere manager features.
          </Text>

          <Divider />
        </div>

        <Row gutter={20}>
          <Col xs={24} md={12}>
            <Card bordered>
              <CalendarOutlined
                style={{
                  fontSize: "35px",
                  color: "#1677ff",
                }}
              />

              <Title level={4}>Event Host</Title>

              <Tag color="blue">Recommended</Tag>

              <div style={{ marginTop: 20 }}>
                <p>
                  <CheckCircleOutlined /> Create Events
                </p>

                <p>
                  <CheckCircleOutlined /> Manage Events
                </p>

                <p>
                  <CheckCircleOutlined /> Upload Photos
                </p>

                <p>
                  <CheckCircleOutlined /> Customer Chats
                </p>

                <p>
                  <CheckCircleOutlined /> Reviews
                </p>

                <p>
                  <CheckCircleOutlined /> Payments
                </p>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card bordered>
              <TeamOutlined
                style={{
                  fontSize: "35px",
                  color: "#52c41a",
                }}
              />

              <Title level={4}>Event Organizer</Title>

              <Tag color="green">Portfolio</Tag>

              <div style={{ marginTop: 20 }}>
                <p>
                  <CheckCircleOutlined /> Upload Portfolio
                </p>

                <p>
                  <CheckCircleOutlined /> Previous Works
                </p>

                <p>
                  <CheckCircleOutlined /> Categories
                </p>

                <p>
                  <CheckCircleOutlined /> Customer Chats
                </p>

                <p>
                  <CheckCircleOutlined /> Reviews
                </p>

                <p>
                  <CheckCircleOutlined /> Payments
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Divider />

        <div style={{ textAlign: "center" }}>
          <Title level={4}>Choose Your Subscription</Title>

          <Radio.Group
            value={managerType}
            onChange={(e) => setManagerType(e.target.value)}
            style={{
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            <Radio value="host">Event Host</Radio>

            <Radio value="organizer">Event Organizer</Radio>
          </Radio.Group>

          <div>
            <Title level={3}>₹999 / Month</Title>

            <Text type="secondary">
              Subscription will be activated after Super Admin approval.
            </Text>
          </div>

          <Button
            type="primary"
            size="large"
            style={{
              marginTop: 30,
              width: "220px",
              height: "45px",
            }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Subscription;
