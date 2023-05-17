import React from "react"; 
import offerIMG from "../../assets/off_promo.jpg";
import './Offers&Promo.css';
import { FaAirbnb } from 'react-icons/fa';
import StarIcon from "../../assets/star.png";
import { useEffect } from "react";
import Youtube from "../../assets/youtube.png";
import Android from "../../assets/android.png"

function OfferPromo() {

  useEffect(() => {
  }, []);

  return (
    <>
    <div className="offer-promo">
     <img className="offer-image" src={offerIMG} alt="Offer Image" />
        <div className="offer-text-container">
          <h1 className="textO">GET TO KNOW OUR PARTNERS</h1>
        </div>
    </div>
      <div className="partners-container">
        <a href="https://www.android.com"><img src={Android} alt="android" className="android-icon"/></a>
        <a href="https://www.youtube.com"><img src={Youtube} alt="youtube" className="youtube-icon"/></a>
        <a href="https://www.airbnb.com"><FaAirbnb size={150} className="airbnb-icon"/></a>
        <a href="https://example.com"><img src={StarIcon} alt="star" className="star-icon"/></a>
      </div>
      </>
    
  );
}

export default OfferPromo;
