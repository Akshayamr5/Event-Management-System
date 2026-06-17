import React, { useState } from "react";
import {
  Layout,
  Card,
  Table,
  Tag,
  Space,
  Button,
  Input,
  Select,
  Modal,
  Typography,
  Skeleton,
} from "antd";
import { SearchOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// Importing your existing layout components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";

const { Content } = Layout;
const { Title } = Typography;

const Events = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Mock Data
  const events = [
    {
      id: 1,
      title: "Royal Wedding Expo",
      category: "Wedding",
      manager: "John Events",
      loc: "Kochi",
      date: "2026-07-15",
      price: "₹15000",
      status: "Approved",
    },
  ];

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Manager", dataIndex: "manager", key: "manager" },
    { title: "Location", dataIndex: "loc", key: "loc" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Approved" ? "green" : "gold"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => {
            setSelectedEvent(record);
            setModalVisible(true);
          }}
        >
          View
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

        <main
          style={{
            padding: "40px 50px",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Navigation & Title */}
          <div
            style={{
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Button icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              Back
            </Button>
            <Title
              level={2}
              style={{ color: "var(--text-primary)", margin: 0 }}
            >
              Events Management
            </Title>
          </div>

          {/* Filters */}
          <Card
            style={{
              borderRadius: "16px",
              marginBottom: "24px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <Space wrap>
              <Input
                placeholder="Search events..."
                prefix={<SearchOutlined />}
                style={{ width: 250 }}
              />
              <Select
                defaultValue="all"
                style={{ width: 150 }}
                options={[{ value: "all", label: "All Status" }]}
              />
              <Button>Reset Filters</Button>
            </Space>
          </Card>

          {/* Table */}
          <Card
            style={{
              borderRadius: "16px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {loading ? (
              <Skeleton active />
            ) : (
              <Table columns={columns} dataSource={events} rowKey="id" />
            )}
          </Card>
        </main>
      </div>

      <Footer />

      {/* Details Modal */}
      <Modal
        title="Event Details"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {selectedEvent && (
          <div>
            <Title level={4}>{selectedEvent.title}</Title>
            <p>
              <strong>Category:</strong> {selectedEvent.category}
            </p>
            <p>
              <strong>Location:</strong> {selectedEvent.loc}
            </p>
            <Button block type="primary" onClick={() => setModalVisible(false)}>
              Close
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Events;
