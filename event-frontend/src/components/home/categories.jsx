import React from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  GiftOutlined,
  BankOutlined,
  SoundOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import "../../styles/categories.css";

const { Title, Text } = Typography;

const CATEGORIES = [
  {
    id: 1,
    title: "Wedding",
    count: "124 Events",
    icon: <HeartOutlined />,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    href: "/events?category=wedding",
  },
  {
    id: 2,
    title: "Birthday",
    count: "89 Events",
    icon: <GiftOutlined />,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    href: "/events?category=birthday",
  },
  {
    id: 3,
    title: "Corporate",
    count: "67 Events",
    icon: <BankOutlined />,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    href: "/events?category=corporate",
  },
  {
    id: 4,
    title: "Concert",
    count: "53 Events",
    icon: <SoundOutlined />,
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    href: "/events?category=concert",
  },
];

function Categories() {
  return (
    <section className="premium-cat-section">
      {/* Background Ambient Glow */}
      <div className="ambient-glow" />

      <div className="container">
        <div className="cat-header">
          <Text className="cat-eyebrow">BROWSE BY TYPE</Text>
          <Title level={2} className="cat-title">Explore Categories</Title>
          <Text className="cat-subtitle">
            From intimate weddings to electric concerts — find exactly what moves you.
          </Text>
        </div>

        <Row gutter={[24, 24]} className="cat-grid">
          {CATEGORIES.map((cat) => (
            <Col xs={24} sm={12} lg={6} key={cat.id}>
              <Link to={cat.href} className="cat-card-wrapper">
                <div className="premium-cat-card">
                  {/* Image with subtle parallax scale */}
                  <div className="cat-image-container">
                    <img src={cat.image} alt={cat.title} className="cat-main-img" />
                    <div className="cat-vignette" />
                  </div>

                  {/* Glassmorphism Badge */}
                  <div className="cat-glass-badge">
                    <span className="badge-icon">{cat.icon}</span>
                    <span className="badge-count">{cat.count}</span>
                  </div>

                  {/* Content Footer */}
                  <div className="cat-content-footer">
                    <div className="text-group">
                      <h3 className="cat-label">{cat.title}</h3>
                      <span className="cat-action-text">Explore Category</span>
                    </div>
                    <div className="cat-arrow-circle">
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Categories;