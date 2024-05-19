import React from "react";
import "./AboutUs.css";
import background from "../../assets/house-background.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="about-us">
        <h1>About Estate Eyes</h1>
        <p>
          Welcome to Estate Eyes, your go-to solution for accurate house price
          predictions in the vibrant city of Bengaluru.
        </p>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Estate Eyes, our mission is to empower homebuyers and sellers
            with precise and reliable property price insights. We leverage
            advanced data analytics to provide real-time price estimates based
            on various key factors.
          </p>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>
            Our model takes into account five critical inputs to predict the
            price of a house:
          </p>
          <ul>
            <li>Area (in square feet)</li>
            <li>Number of Bedrooms, Hall, and Kitchen (BHK)</li>
            <li>Number of Bathrooms</li>
            <li>Location</li>
          </ul>
          <p>
            By analyzing these inputs, Estate Eyes provides you with the most
            accurate price predictions to help you make informed decisions in
            the real estate market.
          </p>
        </section>

        <section className="technology">
          <h2>Our Technology</h2>
          <p>
            Our state-of-the-art machine learning algorithms are trained on vast
            amounts of data from the Bengaluru real estate market. This ensures
            that our predictions are both current and reliable.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
