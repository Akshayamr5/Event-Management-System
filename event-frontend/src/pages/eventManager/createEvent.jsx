import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  message,
} from "antd";
import dayjs from "dayjs";
import { createEvent } from "../../services/eventApi";

const { TextArea } = Input;

function CreateEvent() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    eventDate: "",
    price: 0,
    capacity: 0,
    image: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await createEvent(formData);

      message.success("Event Created Successfully");

      setFormData({
        title: "",
        description: "",
        category: "",
        location: "",
        eventDate: "",
        price: 0,
        capacity: 0,
        image: "",
      });
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Card
        title="Create Event"
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Input
            placeholder="Event Title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          <TextArea
            rows={4}
            placeholder="Description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />

          <Select
            placeholder="Select Category"
            value={formData.category || undefined}
            onChange={(value) => handleChange("category", value)}
            options={[
              {
                value: "Wedding",
                label: "Wedding",
              },
              {
                value: "Birthday",
                label: "Birthday",
              },
              {
                value: "Corporate",
                label: "Corporate",
              },
              {
                value: "Music",
                label: "Music",
              },
              {
                value: "Festival",
                label: "Festival",
              },
            ]}
          />

          <Input
            placeholder="Location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />

          <DatePicker
            style={{
              width: "100%",
            }}
            value={formData.eventDate ? dayjs(formData.eventDate) : null}
            onChange={(date) =>
              handleChange("eventDate", date ? date.toISOString() : "")
            }
          />

          <InputNumber
            style={{
              width: "100%",
            }}
            placeholder="Price"
            value={formData.price}
            onChange={(value) => handleChange("price", value)}
          />

          <InputNumber
            style={{
              width: "100%",
            }}
            placeholder="Capacity"
            value={formData.capacity}
            onChange={(value) => handleChange("capacity", value)}
          />

          <Input
            placeholder="Image URL (Temporary)"
            value={formData.image}
            onChange={(e) => handleChange("image", e.target.value)}
          />

          <Button type="primary" loading={loading} onClick={handleSubmit}>
            Create Event
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CreateEvent;
