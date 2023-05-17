import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import homeBackground from "../../assets/homeBackground.png"
import logo from "../../assets/HOMEINLX.svg";
import HomeCarousel from "../../components/Carousel/carousel"

function HomePage() {
  return (
    <div className="page">
      <div className="home-content">
        <div className="image-container" style={{ backgroundImage: `url(${homeBackground})` }}>
          <div className="text">
            FIND YOUR HOME TO LIVE
          </div>
          <Link to ="/properties/popular">
          <div className="text2">
            STUDENT
          </div>
          </Link>
          <div className="text3">
            NOMAD
          </div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="list-property-button">
        <Link to="/property-list">
            LIST YOUR PROPERTY
        </Link>
        </div>
        <div className="more-about-lisbon-button">
        <Link to="/find-lisbon">
            FIND MORE ABOUT LISBON
        </Link>
        </div>
        <div className="offers-promotions-button">
          <Link to="/offers-promo">
            Offers and promotions
          </Link>
        </div>
      </div>
      <HomeCarousel/>
    </div>
  );
}

export default HomePage;
