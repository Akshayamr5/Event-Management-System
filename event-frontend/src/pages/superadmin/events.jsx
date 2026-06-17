import React, { useState, useEffect } from "react";
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
  message,
} from "antd";
import { SearchOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../../services/eventApi";

// Importing your existing layout components
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";

const { Title } = Typography;

const Events = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const { data } = await getAllEvents();

      if (!data.success) {
        throw new Error(data.message);
      }

      const eventData = data.events.map((event) => ({
        ...event,
        key: event._id,
      }));

      setEvents(eventData);
    } catch (error) {
      console.error(error);

      message.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to load events",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Mock Data deleted ...

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Manager",
      key: "manager",
      render: (_, record) => record.manager?.name || "N/A",
    },
    { title: "Location", dataIndex: "location", key: "location" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "approved"
              ? "green"
              : status === "rejected"
                ? "red"
                : "gold"
          }
        >
          {status?.toUpperCase()}
        </Tag>
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
            <Table
              columns={columns}
              dataSource={events}
              rowKey="_id"
              loading={loading}
            />
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
              <strong>Description:</strong> {selectedEvent.description}
            </p>

            <p>
              <strong>Manager:</strong> {selectedEvent.manager?.name}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedEvent.eventDate).toLocaleDateString()}
            </p>

            <p>
              <strong>Price:</strong> ₹{selectedEvent.price}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <Tag
                color={
                  selectedEvent.status === "approved"
                    ? "green"
                    : selectedEvent.status === "rejected"
                      ? "red"
                      : "gold"
                }
              >
                {selectedEvent.status?.toUpperCase()}
              </Tag>
            </p>
            <p>
              <strong>Location:</strong> {selectedEvent.location}
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
