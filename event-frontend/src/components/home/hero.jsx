import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  CalendarFilled,
  SmileOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

import "../../styles/hero.css";

const STATS = [
  { icon: <CalendarFilled />,       value: "500+",  label: "Events Hosted"   },
  { icon: <SmileOutlined />,        value: "10K+",  label: "Happy Clients"   },
  { icon: <TeamOutlined />,         value: "200+",  label: "Expert Managers" },
  { icon: <EnvironmentOutlined />,  value: "50+",   label: "Cities Covered"  },
];

function Hero() {
  return (
    <section className="hero">

      {/* Layered gradient overlay — purely visual */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-inner">
        <div className="hero-content">

          <div className="hero-tag">
            <span className="hero-tag-dot" aria-hidden="true" />
            Welcome to EventSphere
          </div>

          <h1 className="hero-heading">
            Looking for your next<br />
            <span className="hero-heading-accent">unforgettable</span>{" "}
            experience?
          </h1>

          <p className="hero-description">
            Discover concerts, festivals, workshops, weddings, exhibitions
            and experiences happening around you.
          </p>

          <div className="hero-buttons">
            <Link to="/events">
              <Button
                type="primary"
                size="large"
                className="hero-btn-primary"
              >
                Explore Events
              </Button>
            </Link>

            <button className="hero-btn-ghost" type="button">
              <PlayCircleOutlined className="hero-btn-ghost-icon" />
              Watch Reel
            </button>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div className="hero-stats-strip">
        <div className="hero-stats-inner">
          {STATS.map((stat, i) => (
            <div key={i} className="hero-stat-item">
              <span className="hero-stat-icon" aria-hidden="true">
                {stat.icon}
              </span>
              <div className="hero-stat-body">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;
