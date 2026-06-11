import Navbar from "../../components/layout/navbar";
import Hero from "../../components/home/hero";
import FeaturedEvents from "../../components/home/featuredEvents";
import Categories from "../../components/home/categories";
import TopManagers from "../../components/home/topManagers";
import Testimonials from "../../components/home/testimonials";
import Footer from "../../components/layout/footer";
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedEvents />

      <Categories />

      <TopManagers />
      
      <Testimonials />

      <Footer />

    </>
  );
}

export default Home;