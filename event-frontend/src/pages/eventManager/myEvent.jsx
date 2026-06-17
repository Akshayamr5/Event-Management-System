import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  Space,
  Row,
  Col,
  Tag,
  Spin,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";

import { getMyEvents } from "../../services/eventApi";

const { Title, Text } = Typography;

function MyEvent() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const fetchMyEvents = async () => {
    try {
      const response = await getMyEvents();

      setEvents(response.data.events);
    } catch (error) {
      console.log(error);

      message.error("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "30px",
      }}
    >
      <Title level={2}>My Events</Title>

      {events.length === 0 ? (
        <Card
          style={{
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <Title level={4}>No Events Found</Title>

          <Text>You haven't created any events yet.</Text>

          <br />
          <br />

          <Space>
            <Button
              type="primary"
              onClick={() => navigate("/eventManager/create-event")}
            >
              Create New Event
            </Button>

            <Button onClick={() => navigate("/eventManager/dashboard")}>
              Back to Dashboard
            </Button>
          </Space>
        </Card>
      ) : (
        <Row gutter={[20, 20]} style={{ marginTop: "20px" }}>
          {events.map((event) => (
            <Col xs={24} md={12} lg={8} key={event._id}>
              <Card hoverable>
                <Title level={4}>{event.title}</Title>

                <Text strong>Category:</Text>
                <br />
                <Text>{event.category}</Text>

                <br />
                <br />

                <Text strong>Location:</Text>
                <br />
                <Text>{event.location}</Text>

                <br />
                <br />

                <Text strong>Price:</Text>
                <br />
                <Text>₹ {event.price}</Text>

                <br />
                <br />

                <Tag
                  color={
                    event.status === "approved"
                      ? "green"
                      : event.status === "rejected"
                        ? "red"
                        : "orange"
                  }
                >
                  {event.status.toUpperCase()}
                </Tag>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default MyEvent;
