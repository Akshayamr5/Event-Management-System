import { Button } from "antd";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            Make Every Celebration
            <br />
            Unforgettable
          </h1>

          <p>
            Discover trusted event managers for weddings,
            birthdays, corporate events, concerts and much more.
          </p>

          <div className="hero-buttons">

            <Button type="primary" size="large">
              Explore Events
            </Button>

            <Button size="large">
              Become an Event Manager
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;