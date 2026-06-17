import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

import "../../styles/topManagers.css";

const MANAGERS = [
  {
    id: 1,
    name: "Elite Events",
    subtitle: "Luxury Wedding Experiences",
    count: "150+ Celebrations",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000&q=80",
    href: "/event-managers/1",
  },

  {
    id: 2,
    name: "Dream Creators",
    subtitle: "Corporate & Brand Events",
    count: "120+ Events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=80",
    href: "/event-managers/2",
  },

  {
    id: 3,
    name: "Royal Moments",
    subtitle: "Birthday & Private Celebrations",
    count: "200+ Memories",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80",
    href: "/event-managers/3",
  },
];

function TopManagers() {
  return (
    <section className="manager-section">

      <div className="manager-header">

        <span className="manager-eyebrow">
          Featured Studios
        </span>

        <h2 className="manager-title">
          The creators behind unforgettable celebrations
        </h2>

        <p className="manager-subtitle">
          Discover carefully selected event studios known for
          exceptional execution, timeless aesthetics and
          unforgettable experiences.
        </p>

      </div>

      <Row gutter={[24, 24]}>

        {MANAGERS.map((manager) => (

          <Col xs={24} md={12} lg={8} key={manager.id}>

            <Link
              to={manager.href}
              className="manager-link"
            >

              <article className="manager-card">

                <img
                  src={manager.image}
                  alt={manager.name}
                  className="manager-image"
                />

                <div className="manager-overlay" />

                <div className="manager-content">

                  <span className="manager-badge">

                    {manager.count}

                  </span>

                  <h3>

                    {manager.name}

                  </h3>

                  <p>

                    {manager.subtitle}

                  </p>

                  <div className="manager-arrow">

                    View Portfolio

                    <ArrowRightOutlined />

                  </div>

                </div>

              </article>

            </Link>

          </Col>

        ))}

      </Row>

    </section>
  );
}

export default TopManagers;