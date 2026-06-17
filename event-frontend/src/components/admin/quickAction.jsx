import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  UserAddOutlined,
  FileTextOutlined,
  DownloadOutlined,
  SettingOutlined,
  BellOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const actions = [
  {
    icon: <UserAddOutlined />,
    label: "Add User",
    desc: "Register new manager",
  },
  {
    icon: <FileTextOutlined />,
    label: "Generate Report",
    desc: "Download PDF summary",
  },
  {
    icon: <DownloadOutlined />,
    label: "Export Data",
    desc: "Download CSV format",
  },
  {
    icon: <SettingOutlined />,
    label: "Settings",
    desc: "Manage configuration",
  },
  {
    icon: <BellOutlined />,
    label: "Notifications",
    desc: "System alerts & logs",
  },
  {
    icon: <BarChartOutlined />,
    label: "Analytics",
    desc: "View detailed metrics",
  },
];

const QuickActions = () => {
  return (
    <Card
      title={
        <Title level={5} style={{ color: "var(--text-primary)", margin: 0 }}>
          Quick Actions
        </Title>
      }
      bordered={false}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <Text
        style={{
          color: "var(--text-secondary)",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Frequently used operations
      </Text>
      <Row gutter={[16, 16]}>
        {actions.map((action, index) => (
          <Col span={12} key={index}>
            <div
              style={{
                padding: "16px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                transition: "var(--transition)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.querySelector(".icon-box").style.transform =
                  "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.querySelector(".icon-box").style.transform =
                  "scale(1)";
              }}
            >
              <div
                className="icon-box"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "18px",
                  transition: "var(--transition)",
                }}
              >
                {action.icon}
              </div>
              <div>
                <div
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {action.label}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                  {action.desc}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default QuickActions;
