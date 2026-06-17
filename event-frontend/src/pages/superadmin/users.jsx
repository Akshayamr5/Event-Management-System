import React, { useState, useMemo, useEffect } from "react";
import {
  Row,
  Col,
  Typography,
  Table,
  Tag,
  Space,
  Button,
  Input,
  Select,
  Avatar,
  Popconfirm,
  List,
  message,
  Empty,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  TeamOutlined,
  StopOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

// Existing layout components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";

// Existing admin components
import StatCard from "../../components/admin/statcard";
import ChartCard from "../../components/admin/chartCard";

import { getAllUsers } from "../../services/superAdminApi";

const { Title, Text } = Typography;
const { Option } = Select;

// Sample Data

const Users = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({ role: "All", status: "All" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllUsers();

      if (import.meta.env.DEV) {
        console.log(response.data);
      }

      const formattedUsers = response.data.users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        joined: new Date(user.createdAt).toLocaleDateString(),
        status: user.status || "approved",
      }));

      setUsers(formattedUsers);
    } catch (error) {
      console.log(error);
      message.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };
  // Filtered Logic
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        (user.name || "").toLowerCase().includes(searchText.toLowerCase()) ||
        (user.email || "").toLowerCase().includes(searchText.toLowerCase());
      const matchesRole = filters.role === "All" || user.role === filters.role;
      const matchesStatus =
        filters.status === "All" || user.status === filters.status;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchText, filters, users]);

  const handleDelete = (id) => {
    message.info(`Delete user ${id} will be connected later.`);
  };

  const columns = [
    {
      title: "User",
      render: (record) => (
        <Avatar>{record.name?.charAt(0)?.toUpperCase() || "U"}</Avatar>
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Joined", dataIndex: "joined", key: "joined" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          color={
            status === "approved"
              ? "green"
              : status === "pending"
                ? "orange"
                : "red"
          }
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button type="text" icon={<EyeOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          <Button
            type="text"
            icon={
              record.status === "rejected" ? (
                <UnlockOutlined />
              ) : (
                <StopOutlined />
              )
            }
          />
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Add here ↓↓↓

  const totalUsers = users.length;

  const activeUsers = users.filter((u) => u.status === "approved").length;

  const eventManagers = users.filter((u) => u.role === "eventManager").length;

  const rejectedUsers = users.filter((u) => u.status === "rejected").length;

  // Then return
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
            <Title level={2} style={{ margin: 0 }}>
              Users
            </Title>
            <Text style={{ color: "var(--text-secondary)" }}>
              Manage, monitor and control all platform users.
            </Text>
          </div>
          {/* Statistics */}
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Total Users"
                value={totalUsers}
                icon={<UserOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Active Users"
                value={activeUsers}
                icon={<CheckCircleOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Event Managers"
                value={eventManagers}
                icon={<TeamOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <StatCard
                title="Rejected Users"
                value={rejectedUsers}
                icon={<StopOutlined />}
              />
            </Col>
          </Row>
          {/* Controls */}
          <Space wrap>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search users..."
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 250 }}
            />
            <Select
              defaultValue="All"
              style={{ width: 150 }}
              onChange={(v) => setFilters({ ...filters, role: v })}
            >
              <Option value="All">All Roles</Option>
              <Option value="client">Client</Option>
              <Option value="eventManager">Event Manager</Option>
              <Option value="superadmin">Super Admin</Option>
            </Select>
            <Select
              defaultValue="All"
              style={{ width: 150 }}
              onChange={(v) => setFilters({ ...filters, status: v })}
            >
              <Option value="All">All Status</Option>
              <Option value="approved">Approved</Option>
              <Option value="pending">Pending</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
            <Button type="primary" icon={<PlusOutlined />}>
              Add User
            </Button>
          </Space>
          {/* Table */}
          <Table
            columns={columns}
            dataSource={filteredUsers}
            rowKey="id"
            loading={loading}
            pagination={{ pageSize: 10 }}
            locale={{ emptyText: <Empty /> }}
          />
          {/* Recent Registrations */}
          <ChartCard title="Recent Registrations">
            <List
              itemLayout="horizontal"
              dataSource={users.slice(0, 5)}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar>
                        {item.name?.charAt(0)?.toUpperCase() || "U"}
                      </Avatar>
                    }
                    title={item.name}
                    description={item.email}
                  />
                  <Text style={{ color: "var(--text-secondary)" }}>
                    {item.joined}
                  </Text>
                </List.Item>
              )}
            />
          </ChartCard>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
