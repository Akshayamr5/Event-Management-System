import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";

import "../../styles/featuredEvents.css";

function FeaturedEvents() {

  const events = [

    {
      id: 1,
      title: "Music Festival",
      date: "12 July 2026",
      location: "Kochi",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900",
    },

    {
      id: 2,
      title: "Wedding Expo",
      date: "20 July 2026",
      location: "Thrissur",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    },

    {
      id: 3,
      title: "Tech Conference",
      date: "28 July 2026",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
    },

    {
      id: 4,
      title: "Food Carnival",
      date: "02 August 2026",
      location: "Calicut",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900",
    },

  ];

  return (

    <section className="featured-events">

      <div className="section-header">

        <h2>Popular Events</h2>

        <Link to="/events">

          <Button type="link">

            View All →

          </Button>

        </Link>

      </div>

      <Row gutter={[24, 24]}>

        {events.map((event) => (

          <Col xs={24} sm={12} lg={6} key={event.id}>

            <Link to="/events">

              <Card
                hoverable
                cover={
                  <img
                    src={event.image}
                    alt={event.title}
                  />
                }
              >

                <h3>{event.title}</h3>

                <p>{event.date}</p>

                <span>{event.location}</span>

              </Card>

            </Link>

          </Col>

        ))}

      </Row>

    </section>

  );
}

export default FeaturedEvents;