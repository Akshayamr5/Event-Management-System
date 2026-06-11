import { Card, Row, Col } from "antd";
import "../../styles/categories.css";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    },
    {
      id: 2,
      title: "Birthday",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600",
    },
    {
      id: 3,
      title: "Corporate",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
    },
    {
      id: 4,
      title: "Concert",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600",
    },
  ];

  return (
    <section className="categories-section">

      <h2>Explore Categories</h2>

      <Row gutter={[24, 24]} justify="center">

        {categories.map((category) => (

          <Col xs={24} sm={12} md={6} key={category.id}>

            <Card
              hoverable
              cover={
                <img
                  src={category.image}
                  alt={category.title}
                />
              }
            >

              <h3>{category.title}</h3>

            </Card>

          </Col>

        ))}

      </Row>

    </section>
  );
}

export default Categories;