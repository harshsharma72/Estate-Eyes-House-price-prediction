import React from "react";
import "./Services.css";
import background from "../../assets/house-background.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="services"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Our Services</h1>
        <p>
          At Estate Eyes, we offer a range of services to help you navigate the
          real estate market with confidence.
        </p>

        <section className="service-section">
          <h2>House Price Prediction</h2>
          <p>
            Our advanced house price prediction tool uses state-of-the-art
            machine learning algorithms to provide accurate estimates of
            property values in Bengaluru. Input key details like area (in square
            feet), number of BHKs, number of bathrooms, and location to get an
            instant price prediction.
          </p>
        </section>

        <section className="service-section">
          <h2>Market Trends Analysis</h2>
          <p>
            Stay updated with the latest trends in the Bengaluru real estate
            market. Our analysis provides insights into price movements,
            demand-supply dynamics, and upcoming areas to invest in.
          </p>
        </section>

        <section className="service-section">
          <h2>Customized Property Reports</h2>
          <p>
            Get detailed reports on specific properties, including historical
            price data, neighborhood analysis, and future value predictions.
            These reports are tailored to meet your specific requirements.
          </p>
        </section>

        <section className="service-section">
          <h2>Real Estate Consultation</h2>
          <p>
            Our team of real estate experts is available for consultations to
            help you make informed decisions. Whether you are buying, selling,
            or investing, we provide personalized advice based on comprehensive
            market data.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
