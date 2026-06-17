import React, { useState, useMemo } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Table,
  Tag,
  Input,
  Select,
  Button,
  Space,
  Popconfirm,
  Progress,
  List,
  Avatar,
  Empty,
  Badge,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
  ReloadOutlined,
  DeleteOutlined,
  FilterOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  RocketOutlined,
} from "@ant-design/icons";

// Existing Components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";
import StatCard from "../../components/admin/statcard";
import ChartCard from "../../components/admin/chartCard";

const { Title, Text } = Typography;
const { Content } = Layout;

// --- Mock Data ---
const initialData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    plan: "Premium",
    amount: 999,
    start: "01 Jan 2025",
    end: "01 Jan 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    plan: "Basic",
    amount: 299,
    start: "15 Feb 2025",
    end: "15 Aug 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Alex Brown",
    email: "alex@example.com",
    plan: "Enterprise",
    amount: 1999,
    start: "20 Mar 2025",
    end: "20 Mar 2026",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    plan: "Standard",
    amount: 599,
    start: "10 Apr 2025",
    end: "10 Oct 2025",
    status: "Expired",
  },
];

const Subscriptions = () => {
  const [data, setData] = useState(initialData);
  const [collapsed, setCollapsed] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Filtering Logic
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
        item.plan.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText, data]);

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      render: (text) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          {text}
        </Space>
      ),
    },
    { title: "Email", dataIndex: "email" },
    { title: "Plan", dataIndex: "plan" },
    { title: "Amount", dataIndex: "amount", render: (val) => `₹${val}` },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const colors = {
          Active: "success",
          Pending: "warning",
          Expired: "error",
          Cancelled: "default",
        };
        return <Tag color={colors[status]}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button size="small" icon={<EyeOutlined />} />
          <Button size="small" icon={<EditOutlined />} />
          <Button
            size="small"
            icon={<ReloadOutlined style={{ color: "var(--primary)" }} />}
          />
          <Popconfirm
            title="Delete this subscription?"
            onConfirm={() => setData(data.filter((d) => d.id !== record.id))}
          >
            <Button size="small" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

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
          <div>
            <Title
              level={2}
              style={{ margin: 0, color: "var(--text-primary)" }}
            >
              Subscriptions
            </Title>
            <Text style={{ color: "var(--text-muted)" }}>
              Manage subscription plans, purchases and active memberships.
            </Text>
          </div>

          {/* Stats */}
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Total Subs"
                value="1,245"
                icon={<DollarOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Active Plans"
                value="980"
                icon={<CheckCircleOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard title="Premium" value="420" icon={<RocketOutlined />} />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Revenue"
                value="₹4.8L"
                icon={<BarChartOutlined />}
              />
            </Col>
          </Row>

          {/* Controls */}
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search by name, email or plan..."
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col xs={24} md={12} style={{ textAlign: "right" }}>
              <Space>
                <Select
                  defaultValue="all"
                  options={[{ value: "all", label: "All Plans" }]}
                  style={{ width: 120 }}
                />
                <Button type="primary" icon={<PlusOutlined />}>
                  Add Plan
                </Button>
              </Space>
            </Col>
          </Row>

          {/* Table */}
          <Table
            dataSource={filteredData}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            locale={{ emptyText: <Empty /> }}
          />

          {/* Overview Section */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              <ChartCard title="Subscription Overview">
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {["Basic", "Standard", "Premium", "Enterprise"].map(
                    (plan, i) => (
                      <div key={plan}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text>{plan} Plan</Text>
                          <Text>{[65, 42, 82, 28][i]}%</Text>
                        </div>
                        <Progress
                          percent={[65, 42, 82, 28][i]}
                          showInfo={false}
                          strokeColor="var(--primary)"
                        />
                      </div>
                    ),
                  )}
                </div>
              </ChartCard>
            </Col>
            <Col xs={24} lg={8}>
              <ChartCard title="Recent Renewals">
                <List
                  dataSource={[1, 2, 3, 4, 5]}
                  renderItem={() => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title="Alex B."
                        description="Premium Plan"
                      />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        2h ago
                      </Text>
                    </List.Item>
                  )}
                />
              </ChartCard>
            </Col>
          </Row>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Subscriptions;
