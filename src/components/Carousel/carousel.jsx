import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImage1 from "../../assets/Book now and get a voucher.jpg"
import carouselImage2 from "../../assets/Book early for the best deals.jpg"
import "./carousel.css"

function HomeCarousel() {
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3 className="carouselText">Book now & get a voucher to shop at Restaurant</h3>
        <img src={carouselImage1} className="carouselImage" alt="car1"/>
      </div>
      <div>
        <h3 className="carouselText">Book early for the best deals and offers</h3>
        <img src={carouselImage2} className="carouselImage"alt="car2"/>
      </div>
    </Slider>
  );
}
export default HomeCarousel