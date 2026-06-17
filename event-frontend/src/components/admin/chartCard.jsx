import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

/**
 * ChartCard
 *
 * Props:
 * title    : Card title
 * subtitle : Small subtitle
 * extra    : Right-side header element
 * legend   : [{ color, label }]
 * children : Chart component
 * height   : Minimum body height
 */

const ChartCard = ({
  title,
  subtitle,
  extra = null,
  legend = [],
  children,
  height = 260,
}) => {
  return (
    <Card
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div>
            <Title
              level={5}
              style={{
                margin: 0,
                color: "var(--text-primary)",
                fontWeight: 700,
              }}
            >
              {title}
            </Title>

            {subtitle && (
              <Text
                style={{
                  color: "var(--text-muted)",
                  fontSize: 12,
                }}
              >
                {subtitle}
              </Text>
            )}
          </div>

          {extra}
        </div>
      }
      styles={{
        header: {
          background: "transparent",
          borderBottom: "1px solid var(--border)",
          padding: "16px 22px",
        },
        body: {
          padding: "20px 22px",
          minHeight: height,
        },
      }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow)",
        height: "100%",
        transition: "var(--transition)",
      }}
    >
      {legend.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {legend.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 3,
                  background: item.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />

              <Text
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 12,
                }}
              >
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      )}

      {children}
    </Card>
  );
};

export default ChartCard;
