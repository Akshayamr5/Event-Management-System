import React from "react";
import { Card, Typography, Skeleton, Space } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MinusOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

/**
 * StatCard — Premium dashboard statistic component
 */
const StatCard = ({
  title,
  value,
  icon,
  change,
  changeType = "neutral",
  subtitle,
  loading = false,
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "var(--success)";
      case "negative":
        return "var(--danger)";
      default:
        return "var(--warning)";
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case "positive":
        return <ArrowUpOutlined />;
      case "negative":
        return <ArrowDownOutlined />;
      default:
        return <MinusOutlined />;
    }
  };

  return (
    <Card
      bordered={false}
      styles={{
        body: { padding: "20px" },
      }}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow)",
        transition: "var(--transition)",
        cursor: "default",
      }}
      className="stat-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
    >
      {loading ? (
        <Skeleton active paragraph={{ rows: 2 }} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {title}
            </Text>
            {icon && (
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(22, 119, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "var(--primary)",
                }}
              >
                {icon}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title
              level={2}
              style={{
                color: "var(--text-primary)",
                margin: 0,
                fontSize: "32px",
              }}
            >
              {value}
            </Title>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              {change && (
                <Text
                  style={{
                    color: getChangeColor(),
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {getChangeIcon()} {change}
                </Text>
              )}
              {subtitle && (
                <Text style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                  {subtitle}
                </Text>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default StatCard;
