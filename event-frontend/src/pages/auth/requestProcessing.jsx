import { Card, Typography, Button, Steps, Layout } from "antd";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../../styles/theme.css"; // Ensure theme variables are accessible

const { Title, Paragraph } = Typography;

function RequestProcessing() {
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          textAlign: "center",
        }}
      >
        <ClockCircleOutlined
          style={{
            fontSize: "70px",
            color: "var(--warning)",
            marginBottom: "20px",
          }}
        />
        <Title level={2} style={{ color: "var(--text-primary)" }}>
          Request Under Review
        </Title>
        <Paragraph style={{ color: "var(--text-secondary)", fontSize: "16px" }}>
          Your Event Manager registration is being reviewed by our Super Admin.
        </Paragraph>
        <Steps
          direction="vertical"
          current={1}
          style={{ marginTop: "40px", marginBottom: "40px", textAlign: "left" }}
          items={[
            {
              title: (
                <span style={{ color: "var(--text-primary)" }}>
                  Registration Completed
                </span>
              ),
              status: "finish",
              icon: <CheckCircleOutlined />,
            },
            {
              title: (
                <span style={{ color: "var(--text-primary)" }}>
                  Admin Verification
                </span>
              ),
              status: "process",
            },
            {
              title: (
                <span style={{ color: "var(--text-secondary)" }}>
                  Subscription
                </span>
              ),
              status: "wait",
            },
          ]}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/")}
          style={{ background: "var(--primary)" }}
        >
          Back to Home
        </Button>
      </Card>
    </Layout>
  );
}

export default RequestProcessing;
