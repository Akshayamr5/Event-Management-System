import { Card, Row, Col, Rate } from "antd";
import "../../styles/testimonials.css";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Rahul",
      review:
        "Amazing experience! Everything was perfectly organized.",
      rating: 5,
    },

    {
      id: 2,
      name: "Anjali",
      review:
        "Professional team and beautiful decorations.",
      rating: 4,
    },

    {
      id: 3,
      name: "Vishnu",
      review:
        "Booking was simple and the event exceeded expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">

      <h2>What Our Clients Say</h2>

      <Row gutter={[24, 24]} justify="center">

        {reviews.map((review) => (

          <Col xs={24} md={8} key={review.id}>

            <Card>

              <h3>{review.name}</h3>

              <Rate disabled defaultValue={review.rating} />

              <p>{review.review}</p>

            </Card>

          </Col>

        ))}

      </Row>

    </section>
  );
}

export default Testimonials;