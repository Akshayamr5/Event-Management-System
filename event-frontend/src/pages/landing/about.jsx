import React from 'react';
import { Row, Col, Typography, Card, Button, Statistic, Layout } from 'antd';
import { SafetyCertificateOutlined, AppstoreOutlined, AuditOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  // --- Inline Styles for Premium Feel ---
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
  const sectionStyle = { padding: '120px 0' };
  const cardStyle = {
    background: '#141414',
    border: '1px solid #222',
    borderRadius: '24px',
    padding: '40px',
    height: '100%'
  };
  
  const textMuted = { color: '#a0a0a0' };
  const headingStyle = { color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '24px' };

  return (
    <div style={{ backgroundColor: '#0B0B0B', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />

      <main style={{ paddingBottom: '80px' }}>
        
        {/* 1. Hero Section */}
        <section style={{ ...sectionStyle, ...containerStyle }}>
          <Row align="middle" gutter={[64, 64]}>
            <Col xs={24} md={12}>
              <Title style={{ ...headingStyle, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                We don't just organize events. We create unforgettable experiences.
              </Title>
              <Paragraph style={{ ...textMuted, fontSize: '1.25rem', lineHeight: '1.6' }}>
                From intimate celebrations to grand productions, EventSphere connects people with exceptional event organizers who transform ideas into lifelong memories.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ 
                height: '500px', 
                borderRadius: '32px', 
                backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }} />
            </Col>
          </Row>
        </section>

        {/* 2. Our Story */}
        <section style={{ ...sectionStyle, ...containerStyle, borderTop: '1px solid #222' }}>
          <Row gutter={[64, 32]}>
            <Col xs={24} md={8}>
              <Title level={2} style={headingStyle}>Our Story</Title>
            </Col>
            <Col xs={24} md={16}>
              <Paragraph style={{ ...textMuted, fontSize: '1.2rem', lineHeight: '1.8' }}>
                EventSphere was born from a simple observation: planning a truly great event is often plagued by fragmentation. 
                We created a marketplace that removes the friction, connecting you with verified professionals based on their 
                proven portfolios rather than marketing fluff. We bridge the gap between vision and execution, ensuring 
                that every client can find the perfect partner for their unique journey.
              </Paragraph>
            </Col>
          </Row>
        </section>

        {/* 3. What Makes Us Different */}
        <section style={{ ...sectionStyle, ...containerStyle }}>
          <Title level={2} style={{ ...headingStyle, textAlign: 'center', marginBottom: '60px' }}>What Makes Us Different</Title>
          <Row gutter={[24, 24]}>
            {[
              { icon: <SafetyCertificateOutlined />, title: 'Verified Organizers', desc: 'Only trusted professionals.' },
              { icon: <AppstoreOutlined />, title: 'Curated Portfolios', desc: 'Choose based on real work.' },
              { icon: <AuditOutlined />, title: 'Transparent Reviews', desc: 'Authentic customer experiences.' },
              { icon: <ThunderboltOutlined />, title: 'Seamless Booking', desc: 'Simple and secure process.' },
            ].map((item, i) => (
              <Col xs={24} sm={12} md={6} key={i}>
                <Card style={cardStyle} bordered={false}>
                  <div style={{ fontSize: '2rem', color: '#1677ff', marginBottom: '20px' }}>{item.icon}</div>
                  <Title level={4} style={{ color: '#fff' }}>{item.title}</Title>
                  <Text style={textMuted}>{item.desc}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* 4. Numbers Section */}
        <section style={{ ...sectionStyle, ...containerStyle, textAlign: 'center' }}>
          <Row gutter={[32, 32]}>
            {[
              { val: '1500+', label: 'Events Hosted' },
              { val: '500+', label: 'Trusted Organizers' },
              { val: '50K+', label: 'Happy Customers' },
              { val: '25+', label: 'Cities' },
            ].map((stat, i) => (
              <Col xs={12} md={6} key={i}>
                <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '8px' }}>{stat.val}</div>
                <div style={textMuted}>{stat.label}</div>
              </Col>
            ))}
          </Row>
        </section>

        {/* 5. Mission & Vision */}
        <section style={{ ...sectionStyle, ...containerStyle }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card style={{ ...cardStyle, background: '#1677ff', border: 'none' }} bordered={false}>
                <Title level={3} style={{ color: '#fff', marginBottom: '20px' }}>Mission</Title>
                <Paragraph style={{ color: '#e6f7ff', fontSize: '1.25rem' }}>
                  Helping every celebration find the perfect organizer through transparency and quality connection.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card style={cardStyle} bordered={false}>
                <Title level={3} style={{ color: '#fff', marginBottom: '20px' }}>Vision</Title>
                <Paragraph style={{ ...textMuted, fontSize: '1.25rem' }}>
                  Building the most trusted event discovery platform, where technology elevates human connection.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 6. CTA Section */}
        <section style={{ ...sectionStyle, ...containerStyle, textAlign: 'center' }}>
          <div style={{ padding: '80px 40px', background: '#141414', borderRadius: '40px' }}>
            <Title level={2} style={{ color: '#fff', marginBottom: '40px' }}>Ready to create something unforgettable?</Title>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Button type="primary" size="large" style={{ height: '50px', padding: '0 32px', borderRadius: '12px' }}>Explore Events</Button>
              <Button size="large" ghost style={{ height: '50px', padding: '0 32px', borderRadius: '12px', border: '1px solid #fff' }}>Find Organizers</Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;