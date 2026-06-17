import React from "react";
import { Card, Timeline, Typography, Tag } from "antd";
import {
  UserAddOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarOutlined,
  CalendarOutlined,
  CrownOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

/* ────────────────────────────────────────────────
   Static Data (Replace with API later)
──────────────────────────────────────────────── */

const ACTIVITY_DATA = [
  {
    icon: <UserAddOutlined />,
    iconColor: "var(--primary)",
    title: "New Manager Registered",
    description: "Priya Sharma applied as Event Organizer from Mumbai",
    tag: "Manager",
    tagColor: "blue",
    time: "2 min ago",
  },
  {
    icon: <DollarOutlined />,
    iconColor: "var(--success)",
    title: "Subscription Activated",
    description: "Elite Events Pro plan activated — ₹4,999/month",
    tag: "Subscription",
    tagColor: "green",
    time: "18 min ago",
  },
  {
    icon: <CheckCircleOutlined />,
    iconColor: "var(--primary-light)",
    title: "Event Approved",
    description: '"Grand Wedding Expo 2025" approved and now live',
    tag: "Event",
    tagColor: "cyan",
    time: "45 min ago",
  },
  {
    icon: <CloseCircleOutlined />,
    iconColor: "var(--danger)",
    title: "Manager Request Rejected",
    description: "Application from Dream Planners did not meet criteria",
    tag: "Manager",
    tagColor: "red",
    time: "1 hour ago",
  },
  {
    icon: <CalendarOutlined />,
    iconColor: "var(--primary-light)",
    title: "New Event Submitted",
    description: '"Tech Summit 2025" submitted by Royal Moments for review',
    tag: "Event",
    tagColor: "purple",
    time: "2 hours ago",
  },
  {
    icon: <StarOutlined />,
    iconColor: "var(--warning)",
    title: "New User Registered",
    description: "Arjun Nair created a customer account",
    tag: "User",
    tagColor: "gold",
    time: "3 hours ago",
  },
  {
    icon: <CrownOutlined />,
    iconColor: "var(--success)",
    title: "Revenue Milestone Reached",
    description: "Monthly revenue crossed ₹1,00,000",
    tag: "Revenue",
    tagColor: "green",
    time: "5 hours ago",
  },
];

const ActivityTimeline = ({ activities = ACTIVITY_DATA }) => {
  return (
    <Card
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title
            level={5}
            style={{
              margin: 0,
              color: "var(--text-primary)",
              fontWeight: 700,
            }}
          >
            Recent Activity
          </Title>

          <Text
            style={{
              color: "var(--primary)",
              fontSize: 12,
              cursor: "pointer",
              transition: "var(--transition)",
            }}
          >
            View All →
          </Text>
        </div>
      }
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow)",
        transition: "var(--transition)",
        height: "100%",
      }}
      bodyStyle={{
        background: "var(--bg-card)",
        padding: "20px 22px 12px",
      }}
      headStyle={{
        background: "transparent",
        borderBottom: "1px solid var(--border)",
        padding: "16px 22px",
      }}
    >
      <Timeline
        items={activities.map((item) => ({
          dot: (
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.iconColor,
                fontSize: 14,
              }}
            >
              {item.icon}
            </div>
          ),

          children: (
            <div style={{ paddingBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                  flexWrap: "wrap",
                }}
              >
                <Text
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </Text>

                <Tag
                  color={item.tagColor}
                  style={{
                    borderRadius: "var(--radius-sm)",
                    fontSize: 10,
                    padding: "2px 8px",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {item.tag}
                </Tag>
              </div>

              <Text
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 12,
                  display: "block",
                  lineHeight: 1.6,
                  marginBottom: 4,
                }}
              >
                {item.description}
              </Text>

              <Text
                style={{
                  color: "var(--text-muted)",
                  fontSize: 11,
                }}
              >
                {item.time}
              </Text>
            </div>
          ),
        }))}
      />
    </Card>
  );
};

export default ActivityTimeline;
