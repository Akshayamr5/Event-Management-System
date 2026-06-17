import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Select,
  Switch,
  Checkbox,
  Button,
  Avatar,
  Upload,
  Descriptions,
  Space,
  Divider,
} from "antd";
import {
  SaveOutlined,
  UploadOutlined,
  CheckCircleOutlined,
  UserOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
  BellOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

// Existing Components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";
import StatCard from "../../components/admin/statcard";
import ChartCard from "../../components/admin/chartCard";

const { Title, Text } = Typography;

const Settings = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [form] = Form.useForm();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main
          style={{
            padding: 24,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                level={2}
                style={{ margin: 0, color: "var(--text-primary)" }}
              >
                Settings
              </Title>
              <Text style={{ color: "var(--text-muted)" }}>
                Manage platform configuration, security and administrator
                preferences.
              </Text>
            </div>
            <Button type="primary" icon={<SaveOutlined />}>
              Save Changes
            </Button>
          </div>

          {/* Statistics */}
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="System Status"
                value="Online"
                icon={<CheckCircleOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Administrators"
                value="5"
                icon={<UserOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Active Sessions"
                value="18"
                icon={<SafetyCertificateOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Version"
                value="v2.1.0"
                icon={<AppstoreOutlined />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            {/* General Settings */}
            <Col xs={24} lg={12}>
              <ChartCard title="General Settings">
                <Form layout="vertical">
                  <Form.Item label="Platform Name">
                    <Input defaultValue="EventSphere" />
                  </Form.Item>
                  <Form.Item label="Support Email">
                    <Input defaultValue="support@eventsphere.com" />
                  </Form.Item>
                  <Form.Item label="Timezone">
                    <Select defaultValue="asia-kolkata">
                      <Select.Option value="asia-kolkata">
                        Asia/Kolkata
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form>
              </ChartCard>
            </Col>

            {/* Admin Profile */}
            <Col xs={24} lg={12}>
              <ChartCard title="Admin Profile">
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Avatar size={80} icon={<UserOutlined />} />
                  <Upload>
                    <Button icon={<UploadOutlined />}>Upload New Image</Button>
                  </Upload>
                  <Form layout="vertical">
                    <Form.Item label="Name">
                      <Input defaultValue="Super Admin" />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input defaultValue="admin@eventsphere.com" />
                    </Form.Item>
                  </Form>
                </Space>
              </ChartCard>
            </Col>
          </Row>

          {/* System & Notifications */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <ChartCard title="System Preferences">
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Maintenance Mode</span>
                    <Switch />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Allow Registrations</span>
                    <Switch defaultChecked />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Enable Payments</span>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </ChartCard>
            </Col>
            <Col xs={24} lg={12}>
              <ChartCard title="Notification Preferences">
                <Checkbox.Group
                  options={[
                    "New User Registration",
                    "New Event Submission",
                    "Subscription Expiry",
                    "Payment Success",
                  ]}
                />
              </ChartCard>
            </Col>
          </Row>

          {/* Platform Info */}
          <ChartCard title="Platform Information">
            <Descriptions
              bordered
              column={2}
              labelStyle={{ color: "var(--text-secondary)" }}
            >
              <Descriptions.Item label="Application">
                EventSphere
              </Descriptions.Item>
              <Descriptions.Item label="Version">2.1.0</Descriptions.Item>
              <Descriptions.Item label="Environment">
                Production
              </Descriptions.Item>
              <Descriptions.Item label="Server Status">
                Healthy
              </Descriptions.Item>
            </Descriptions>
          </ChartCard>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
