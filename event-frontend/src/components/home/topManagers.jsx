import { Card, Button, Row, Col, Rate } from "antd";
import "../../styles/topManagers.css";

function TopManagers() {

  const managers = [
    {
      id: 1,
      name: "Elite Events",
      specialization: "Wedding Planner",
      rating: 5,
      image: "https://picsum.photos/400/300?random=1",
    },

    {
      id: 2,
      name: "Dream Creators",
      specialization: "Corporate Events",
      rating: 4,
      image: "https://picsum.photos/400/300?random=2",
    },

    {
      id: 3,
      name: "Royal Moments",
      specialization: "Birthday & Parties",
      rating: 5,
      image: "https://picsum.photos/400/300?random=3",
    },
  ];

  return (
    <section className="top-managers">

      <h2>Top Event Managers</h2>

      <Row gutter={[24, 24]} justify="center">

        {managers.map((manager) => (

          <Col xs={24} sm={12} md={8} key={manager.id}>

            <Card
              hoverable
              cover={
                <img
                  src={manager.image}
                  alt={manager.name}
                />
              }
            >

              <h3>{manager.name}</h3>

              <p>{manager.specialization}</p>

              <Rate disabled defaultValue={manager.rating} />

              <Button
                type="primary"
                block
                style={{ marginTop: "15px" }}
              >
                View Profile
              </Button>

            </Card>

          </Col>

        ))}

      </Row>

    </section>
  );
}

export default TopManagers;