import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

function EventDetails() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          background: "#0b0b0b",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
        }}
      >
        Event Details Page
      </div>

      <Footer />
    </>
  );
}

export default EventDetails;