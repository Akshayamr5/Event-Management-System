import { Card, Typography, Button, Space } from "antd";
import {
  CloseCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

function RequestRejected() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <CloseCircleOutlined
          style={{
            fontSize: "70px",
            color: "#ff4d4f",
            marginBottom: "20px",
          }}
        />

        <Title level={2}>Request Rejected</Title>

        <Paragraph
          style={{
            fontSize: "16px",
          }}
        >
          Unfortunately, your Event Manager registration request has been
          rejected by the Super Admin.
        </Paragraph>

        <Paragraph
          style={{
            color: "#666",
          }}
        >
          If you believe this is a mistake, please contact the administrator or
          submit a new request.
        </Paragraph>

        <Space
          style={{
            marginTop: "30px",
          }}
        >
          <Button
            icon={<HomeOutlined />}
            type="primary"
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          <Button danger icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Button>
        </Space>
      </Card>
    </div>
  );
}

export default RequestRejected;
