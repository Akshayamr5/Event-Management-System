import { Card, Button, Row, Col } from "antd";
import "../../styles/featuredEvents.css";

function FeaturedEvents() {

  const events = [
    {
      id: 1,
      title: "Royal Wedding",
      category: "Wedding",
      price: "₹15,000",
    },
    {
      id: 2,
      title: "Corporate Summit",
      category: "Corporate",
      price: "₹10,000",
    },
    {
      id: 3,
      title: "Music Festival",
      category: "Concert",
      price: "₹5,000",
    },
  ];

  return (

    <section className="featured-section">

      <h2>Featured Events</h2>

      <Row gutter={[24, 24]} justify="center">

        {events.map((event) => (

          <Col xs={24} sm={12} md={8} key={event.id}>

            <Card
              hoverable
              cover={
                <img
                  alt={event.title}
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600"
                />
              }
            >

              <h3>{event.title}</h3>

              <p>{event.category}</p>

              <p>{event.price}</p>

              <Button type="primary" block>

                View Details

              </Button>

            </Card>

          </Col>

        ))}

      </Row>

    </section>

  );

}

export default FeaturedEvents;