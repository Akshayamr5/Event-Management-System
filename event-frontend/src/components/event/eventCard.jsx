import { Link } from "react-router-dom";
import { Card, Button, Rate } from "antd";
import "../../styles/eventCard.css";

function EventCard({
  id,
  title,
  category,
  location,
  price,
  rating,
  image,
}) {
  return (
    <Card
      hoverable
      className="event-card"
      cover={<img src={image} alt={title} />}
    >
      <h3>{title}</h3>

      <p className="category">{category}</p>

      <p className="location">📍 {location}</p>

      <Rate disabled defaultValue={rating} />

      <h2 className="price">₹ {price}</h2>

      <Link to={`/events/${id}`}>
        <Button type="primary" block>
          View Details
        </Button>
      </Link>
    </Card>
  );
}

export default EventCard;