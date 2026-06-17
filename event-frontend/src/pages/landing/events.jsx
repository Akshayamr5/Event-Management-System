
import { Row, Col } from "antd";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import EventCard from "../../components/event/eventCard";

import "../../styles/events.css";

function Events() {

  const events = [

    {
      id: 1,
      title: "Royal Wedding",
      category: "Wedding",
      location: "Thrissur",
      price: "15000",
      rating: 5,
      image: "https://picsum.photos/400/300?random=1",
    },

    {
      id: 2,
      title: "Corporate Summit",
      category: "Corporate",
      location: "Kochi",
      price: "12000",
      rating: 4,
      image: "https://picsum.photos/400/300?random=2",
    },

    {
      id: 3,
      title: "Music Festival",
      category: "Concert",
      location: "Calicut",
      price: "8000",
      rating: 5,
      image: "https://picsum.photos/400/300?random=3",
    },

  ];

  return (

    <>

      <Navbar />

      <section className="events-page">

        <h1>Explore Events</h1>

        <p>Find the perfect event for every occasion.</p>

        <Row gutter={[24,24]}>

          {events.map((event)=>(

            <Col xs={24} sm={12} md={8} key={event.id}>

              <EventCard
    id={event.id}
    title={event.title}
    category={event.category}
    location={event.location}
    price={event.price}
    rating={event.rating}
    image={event.image}
/>

            </Col>

          ))}

        </Row>

      </section>

      <Footer />

    </>

  );
}

export default Events;