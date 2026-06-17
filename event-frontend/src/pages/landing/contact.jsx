import React from "react";
import { Row, Col, Typography, Form, Input, Button, message } from "antd";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined, CheckCircleOutlined, ThunderboltOutlined, UserOutlined } from "@ant-design/icons";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import "../../styles/contact.css";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    message.success("Message sent successfully! Our team will reach out soon.");
    form.resetFields();
  };

  return (
    <div className="contact-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <Title className="hero-title">Let's create something <span className="gradient-text">unforgettable</span>.</Title>
          <Paragraph className="hero-subtitle">
            Whether you're planning a wedding, a corporate gathering, or your next big celebration, our team is ready to help.
          </Paragraph>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-content-section container">
        <Row gutter={[40, 40]} align="stretch">
          {/* Left: Info Card */}
          <Col xs={24} lg={10}>
            <div className="glass-card info-card">
              <Title level={2} className="card-title">Get In Touch</Title>
              <Paragraph className="card-desc">We usually respond within 24 hours.</Paragraph>
              
              <div className="info-grid">
                {[
                  { icon: <EnvironmentOutlined />, title: 'Address', val: 'Thrissur, Kerala, India' },
                  { icon: <PhoneOutlined />, title: 'Phone', val: '+91 98765 43210' },
                  { icon: <MailOutlined />, title: 'Email', val: 'eventsphere@gmail.com' },
                  { icon: <ClockCircleOutlined />, title: 'Hours', val: 'Mon-Sat: 9am - 6pm' },
                ].map((item, i) => (
                  <div key={i} className="info-item">
                    <div className="info-icon-wrapper">{item.icon}</div>
                    <div className="info-text">
                      <Text className="info-label">{item.title}</Text>
                      <Text className="info-value">{item.val}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Right: Form */}
          <Col xs={24} lg={14}>
            <div className="glass-card form-container">
              <Title level={2} className="card-title">Send a Message</Title>
              <Form layout="vertical" form={form} onFinish={onFinish}>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                      <Input size="large" placeholder="Full Name" className="premium-input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                      <Input size="large" placeholder="Email Address" className="premium-input" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="message" rules={[{ required: true, message: 'How can we help?' }]}>
                  <TextArea rows={5} placeholder="Tell us about your event..." className="premium-input" />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="submit-btn" block>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </section>

      {/* Why Contact Section */}
      <section className="why-section container">
        <Title level={2} className="section-title">Why Contact EventSphere?</Title>
        <Row gutter={[24, 24]}>
          {[
            { icon: <UserOutlined />, title: 'Personalized Planning', desc: 'Custom tailored experiences.' },
            { icon: <ThunderboltOutlined />, title: 'Trusted Network', desc: 'Top-tier vendors at your service.' },
            { icon: <CheckCircleOutlined />, title: 'Fast Support', desc: 'We are with you every step.' },
          ].map((item, i) => (
            <Col xs={24} md={8} key={i}>
              <div className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <Title level={4} className="feature-title">{item.title}</Title>
                <Text className="feature-desc">{item.desc}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Map Section */}
      <section className="map-section container">
        <div className="map-card">
           <iframe 
            title="Google Map" 
            src="https://www.google.com/maps?q=Thrissur,Kerala&output=embed" 
            style={{ border: 0, width: '100%', height: '400px', borderRadius: '20px' }} 
            allowFullScreen="" 
            loading="lazy" 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;