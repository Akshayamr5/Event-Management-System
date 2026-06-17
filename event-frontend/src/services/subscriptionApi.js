import React, { useState, useEffect } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  Table,
  Tag,
  Space,
  Button,
  Input,
  Select,
  Drawer,
  Typography,
  Skeleton,
  Divider,
  Timeline,
  Avatar,
} from "antd";
import {
  SearchOutlined,
  ReloadOutlined,
  ExportOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// Importing your existing layout components
import Sidebar from "../../components/layout/Sidebar";
import HeaderComponent from "../../components/layout/navbar";

const { Title, Text } = Typography;

const SubscriptionsPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subs, setSubs] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder for fetchSubscriptions()
    setTimeout(() => {
      setSubs(
        Array.from({ length: 15 }).map((_, i) => ({
          id: i + 1,
          manager: `Manager ${i + 1}`,
          email: `manager${i + 1}@eventsphere.com`,
          company: "EventCorp Inc.",
          type: i % 2 === 0 ? "Host" : "Organizer",
          status: ["Pending", "Approved", "Inactive", "Rejected"][i % 4],
          date: "2025-08-12",
        })),
      );
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--bg-secondary)" }}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />

      <Layout
        style={{
          marginLeft: collapsed ? 72 : 240,
          transition: "var(--transition)",
          background: "var(--bg-secondary)",
        }}
      >
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content style={{ padding: "24px" }}>
          {/* Header */}
          <div style={{ marginBottom: "24px" }}>
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => navigate(-1)}
              style={{ color: "var(--text-secondary)" }}
            >
              Back
            </Button>
            <Title
              level={2}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              Subscription Management
            </Title>
            <Text style={{ color: "var(--text-secondary)" }}>
              Approve, activate and manage Event Manager subscriptions
            </Text>
          </div>

          {/* Stats Row */}
          <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
            {[
              "Total",
              "Pending",
              "Approved",
              "Active",
              "Inactive",
              "Rejected",
            ].map((s, i) => (
              <Col xs={24} sm={12} lg={4} key={i}>
                <Card
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <Statistic
                    title={
                      <Text style={{ color: "var(--text-secondary)" }}>
                        {s}
                      </Text>
                    }
                    value={Math.floor(Math.random() * 50)}
                    valueStyle={{ color: "var(--text-primary)" }}
                    prefix={
                      <FileTextOutlined style={{ color: "var(--primary)" }} />
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* Table */}
          <Card
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }}
          >
            {loading ? (
              <Skeleton active />
            ) : (
              <Table
                dataSource={subs}
                rowKey="id"
                columns={[
                  {
                    title: "Manager",
                    dataIndex: "manager",
                    render: (t) => (
                      <Text style={{ color: "var(--text-primary)" }}>{t}</Text>
                    ),
                  },
                  {
                    title: "Status",
                    dataIndex: "status",
                    render: (s) => (
                      <Tag
                        style={{
                          background: "var(--bg-tertiary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {s}
                      </Tag>
                    ),
                  },
                  {
                    title: "Actions",
                    render: (_, record) => (
                      <Button
                        icon={<EyeOutlined />}
                        onClick={() => {
                          setSelectedSub(record);
                          setDrawerVisible(true);
                        }}
                      />
                    ),
                  },
                ]}
              />
            )}
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SubscriptionsPage;
