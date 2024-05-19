import React from "react";
import "./HeroCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner_1 from "../../assets/banner_1.jpg";
import banner_2 from "../../assets/banner_2.jpg";
import banner_3 from "../../assets/banner_3.jpg";
const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div>
          <img src={banner_1} alt="" />
        </div>
        <div>
          <img src={banner_2} alt="" />
        </div>
        <div>
          <img src={banner_3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
