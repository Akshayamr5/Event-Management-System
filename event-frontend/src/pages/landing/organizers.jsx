import React from 'react';
import { Layout, Row, Col, Card, Typography, Button, Input, Badge, Divider } from 'antd';
import { SearchOutlined, CheckCircleOutlined, SafetyCertificateOutlined, CalendarOutlined, CustomerServiceOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';

const { Title, Paragraph, Text } = Typography;

const Organizers = () => {
  // Styling constants for premium feel
  const sectionStyle = { padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' };
  const glassCard = {
    background: 'rgba(32, 32, 32, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    color: '#fff',
    transition: 'transform 0.3s ease'
  };

  const categories = [
    { title: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', count: '142 Studios' },
    { title: 'Birthday', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800', count: '89 Studios' },
    { title: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-1785501d7e5d?q=80&w=800', count: '210 Studios' },
    { title: 'Concert', img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800', count: '56 Studios' },
    { title: 'Festival', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800', count: '45 Studios' },
    { title: 'Private Party', img: 'https://images.unsplash.com/photo-1464366535602-536577317789?q=80&w=800', count: '78 Studios' },
  ];

  const featured = [
    { name: 'Lumina Events', spec: 'Luxury Weddings', events: '500+', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800' },
    { name: 'Apex Conferences', spec: 'Corporate Global', events: '320+', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800' },
    { name: 'Echo Stages', spec: 'Festival Production', events: '180+', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800' },
  ];

  return (
    <div style={{ backgroundColor: '#0B0B0B', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ ...sectionStyle, textAlign: 'center', paddingTop: '120px' }}>
        <Title style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
          Every celebration deserves<br /> the right team.
        </Title>
        <Paragraph style={{ color: '#8c8c8c', fontSize: '1.2rem', marginBottom: '40px' }}>
          Discover trusted event organizers for weddings, birthdays, corporate events and unforgettable celebrations.
        </Paragraph>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '10px' }}>
          <Input 
            size="large" 
            placeholder="Search by event type or location..." 
            prefix={<SearchOutlined />} 
            style={{ borderRadius: '12px', background: '#1a1a1a', border: '1px solid #333' }}
          />
          <Button type="primary" size="large" style={{ borderRadius: '12px', height: '48px', padding: '0 30px' }}>Explore</Button>
        </div>
      </section>

      {/* Categories */}
      <section style={sectionStyle}>
        <Title level={2} style={{ color: '#fff', marginBottom: '40px' }}>Browse Event Types</Title>
        <Row gutter={[24, 24]}>
          {categories.map((cat, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
              <div style={{ 
                height: '300px', 
                borderRadius: '24px', 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${cat.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                cursor: 'pointer'
              }}>
                <Badge count={cat.count} style={{ backgroundColor: '#1677ff', width: 'fit-content', marginBottom: '10px' }} />
                <Title level={3} style={{ color: '#fff', margin: 0 }}>{cat.title}</Title>
                <Text style={{ color: '#fff', opacity: 0.8 }}>Explore <ArrowRightOutlined /></Text>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Featured Organizers */}
      <section style={sectionStyle}>
        <Title level={2} style={{ color: '#fff', marginBottom: '40px' }}>Featured Organizers</Title>
        <Row gutter={[24, 24]}>
          {featured.map((studio, i) => (
            <Col xs={24} md={8} key={i}>
              <Card 
                hoverable 
                cover={<img alt={studio.name} src={studio.img} style={{ height: '250px', objectFit: 'cover' }} />}
                style={{ ...glassCard, overflow: 'hidden' }}
                bodyStyle={{ padding: '20px' }}
              >
                <Title level={4} style={{ color: '#fff', margin: '0 0 10px 0' }}>{studio.name}</Title>
                <Text style={{ color: '#8c8c8c' }}>{studio.spec} • {studio.events} completed</Text>
                <div style={{ marginTop: '20px' }}>
                  <Button type="link" style={{ paddingLeft: 0 }}>View Portfolio <ArrowRightOutlined /></Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* How it works */}
      <section style={sectionStyle}>
        <Title level={2} style={{ color: '#fff', textAlign: 'center', marginBottom: '60px' }}>How It Works</Title>
        <Row gutter={[24, 24]} justify="center">
          {['Choose Category', 'Browse Organizers', 'Explore Portfolio', 'Book Consultation'].map((step, i) => (
            <Col xs={24} sm={12} md={6} key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: '#1677ff', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {i + 1}
              </div>
              <Title level={4} style={{ color: '#fff' }}>{step}</Title>
            </Col>
          ))}
        </Row>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <Row gutter={[24, 24]}>
          {[
            { icon: <CheckCircleOutlined />, title: 'Verified Organizers' },
            { icon: <SafetyCertificateOutlined />, title: 'Transparent Reviews' },
            { icon: <CalendarOutlined />, title: 'Easy Booking' },
            { icon: <CustomerServiceOutlined />, title: 'Trusted Experiences' },
          ].map((item, i) => (
            <Col xs={24} sm={12} md={6} key={i}>
              <Card style={{ ...glassCard, textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2rem', color: '#1677ff', marginBottom: '15px' }}>{item.icon}</div>
                <Title level={5} style={{ color: '#fff' }}>{item.title}</Title>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Footer />
    </div>
  );
};

export default Organizers;