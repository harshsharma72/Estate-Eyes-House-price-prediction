import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroCarousel></HeroCarousel>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
