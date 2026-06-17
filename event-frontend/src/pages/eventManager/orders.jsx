import { Card, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Orders() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "30px",
      }}
    >
      <Title level={2}>Orders</Title>

      <Card
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      >
        <Title level={4}>No Orders Available</Title>

        <Text>
          Orders from customers will be displayed here after they book an event.
        </Text>

        <br />
        <br />

        <Button
          type="primary"
          onClick={() => navigate("/eventManager/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Card>
    </div>
  );
}

export default Orders;
