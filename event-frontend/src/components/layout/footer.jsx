import { Row, Col } from "antd";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <Row gutter={[40, 40]}>

        <Col xs={24} md={8}>

          <h2>EventSphere</h2>

          <p>
            Creating unforgettable experiences with trusted
            event managers across every celebration.
          </p>

        </Col>

        <Col xs={24} md={8}>

          <h3>Quick Links</h3>

          <p>Home</p>

          <p>Events</p>

          <p>Categories</p>

          <p>Contact</p>

        </Col>

        <Col xs={24} md={8}>

          <h3>Contact</h3>

          <p>Thrissur, Kerala</p>

          <p>eventsphere@gmail.com</p>

          <p>+91 9876543210</p>

        </Col>

      </Row>

      <div className="footer-bottom">

        © 2026 EventSphere. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;