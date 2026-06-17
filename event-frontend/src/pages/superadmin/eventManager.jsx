import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Space,
  Input,
  Select,
  Table,
  Tag,
  Progress,
  Empty,
  message,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  getPendingManagers,
  approveManager,
  rejectManager,
} from "../../services/superAdminApi";

// Reusable components
import StatCard from "../../components/admin/StatCard";
import ChartCard from "../../components/admin/ChartCard";
import QuickAction from "../../components/admin/QuickAction";
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";

const { Title, Text } = Typography;

const EventManager = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [collapsed, setCollapsed] = useState(false);
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchManagers = async () => {
    try {
      setLoading(true);

      const { data } = await getPendingManagers();

      if (!data.success) {
        throw new Error(data.message);
      }

      const managerData = data.managers.map((manager) => ({
        ...manager,
        key: manager._id,
      }));

      setManagers(managerData);
    } catch (error) {
      console.error(error);

      message.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load managers",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const handleApprove = async (id) => {
    try {
      setLoading(true);

      const { data } = await approveManager(id);

      if (!data.success) {
        throw new Error(data.message);
      }

      message.success(data.message);

      await fetchManagers();
    } catch (error) {
      console.error(error);

      message.error(
        error.response?.data?.message || error.message || "Approval failed",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (id) => {
    try {
      setLoading(true);

      const { data } = await rejectManager(id);

      if (!data.success) {
        throw new Error(data.message);
      }

      message.success(data.message);

      await fetchManagers();
    } catch (error) {
      console.error(error);

      message.error(
        error.response?.data?.message || error.message || "Rejection failed",
      );
    } finally {
      setLoading(false);
    }
  };

  const search = searchText.toLowerCase();
  const filteredManagers = managers.filter((manager) => {
    const matchesSearch =
      manager.name?.toLowerCase().includes(search) ||
      manager.email?.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "all" || manager.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalManagers = managers.length;

  const approvedManagers = managers.filter(
    (manager) => manager.status === "approved",
  ).length;

  const pendingManagers = managers.filter(
    (manager) => manager.status === "pending",
  ).length;

  const rejectedManagers = managers.filter(
    (manager) => manager.status === "rejected",
  ).length;

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "approved"
            ? "green"
            : status === "rejected"
              ? "red"
              : "orange";
        return <Tag color={color}>{status?.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Approve",
      key: "approve",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleApprove(record._id)}>
          Approve
        </Button>
      ),
    },
    {
      title: "Reject",
      key: "reject",
      render: (_, record) => (
        <Button danger onClick={() => handleReject(record._id)}>
          Reject
        </Button>
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

        <main style={{ padding: 24, width: "100%" }}>
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
                Event Management
              </Title>
              <Text style={{ color: "var(--text-muted)" }}>
                Manage, approve, edit and monitor all platform events
              </Text>
            </div>
            <Space>
              <Input
                placeholder="Search managers..."
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 200 }}
              />
              <Select
                defaultValue="all"
                onChange={setStatusFilter}
                options={[
                  { value: "all", label: "Status" },
                  { value: "pending", label: "Pending" },
                  { value: "approved", label: "Approved" },
                  { value: "rejected", label: "Rejected" },
                ]}
                style={{ width: 120 }}
              />
              <Button type="primary" icon={<PlusOutlined />}>
                Add Event
              </Button>
            </Space>
          </div>

          {/* Stats Section */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col span={6}>
              <StatCard
                title="Total Managers"
                value={totalManagers}
                change="0%"
                changeType="positive"
                icon={<CalendarOutlined />}
              />
            </Col>

            <Col span={6}>
              <StatCard
                title="Approved Managers"
                value={approvedManagers}
                change="0%"
                changeType="positive"
                icon={<CheckCircleOutlined />}
              />
            </Col>
            <Col span={6}>
              <StatCard
                title="Pending Managers"
                value={pendingManagers}
                change="0%"
                changeType="negative"
                icon={<ClockCircleOutlined />}
              />
            </Col>
            <Col span={6}>
              <StatCard
                title="Rejected Managers"
                value={rejectedManagers}
                change="0%"
                changeType="negative"
                icon={<TrophyOutlined />}
              />
            </Col>
          </Row>

          {/* Overview & Quick Actions */}
          <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
            <Col xs={24} lg={16}>
              <ChartCard title="Event Categories Status">
                {[
                  "Music Events",
                  "Corporate Events",
                  "Sports Events",
                  "College Events",
                ].map((cat, i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span>{cat}</span>
                      <span>{60 + i * 5}%</span>
                    </div>
                    <Progress
                      percent={60 + i * 5}
                      showInfo={false}
                      strokeColor="var(--primary)"
                    />
                  </div>
                ))}
              </ChartCard>
            </Col>
            <Col xs={24} lg={8}>
              <QuickAction
                label="Create New Event"
                description="Setup a new platform event"
                accentColor="var(--primary)"
              />
              <div style={{ marginTop: 12 }}>
                <QuickAction
                  label="Bulk Approve"
                  description="Review pending requests"
                  accentColor="var(--success)"
                />
              </div>
            </Col>
          </Row>

          {/* Table Section */}
          <div
            style={{
              background: "var(--bg-card)",
              padding: 24,
              borderRadius: "var(--radius-lg)",
            }}
          >
            <Table
              columns={columns}
              dataSource={filteredManagers}
              loading={loading}
              rowKey="_id"
              pagination={{ pageSize: 10 }}
              locale={{
                emptyText: <Empty description="No event managers found" />,
              }}
              rowClassName={() => "table-row-dark"}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventManager;
