import React, { useState, useContext, useEffect } from "react";
import "./PropertyCard.css";
import { HiLocationMarker } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import airConditioner from "../../assets/amenity-icons/air-conditioner.svg";
import wifi from "../../assets/amenity-icons/wifi.svg";
import cableTv from "../../assets/amenity-icons/cable-tv.svg";
import heating from "../../assets/amenity-icons/heating.svg";
import kitchen from "../../assets/amenity-icons/kitchen.svg";
import microwave from "../../assets/amenity-icons/microwave.svg";
import oven from "../../assets/amenity-icons/oven.svg";
import refrigerator from "../../assets/amenity-icons/refrigerator.svg";
import stove from "../../assets/amenity-icons/stove.svg";
import washer from "../../assets/amenity-icons/washer.svg";

import imagePlaceholder from "../../assets/placeholder-image.png";

import favouriteIcon from "../../assets/favourite.icon.svg";

import imageHeart from "../../assets/heart-full.svg"

import AuthContext from "../../context/AuthContext";

import api from "../../services/api";

const PropertyCard = ({ listing, minNumber }) => {
  const [src, setSrc] = useState(listing.picture_url);

  const { user, interest, setInterest } = useContext(AuthContext);

  const {
    id,
    picture_url,
    name,
    description,
    latitude,
    longitude,
    price_in_eur,
    amenities,
    room_type,
    host_id,
    bathrooms_text,
    cancellation_policy,
    review_scores_rating,
    for_students,
    host_identity_verified,
    priority,
    number_of_reviews,
    review_scores_value,
    distance_1,
    distance_2,
    distance_3,
    distance_4,
    distance_5,
    listing_id,
  } = listing;
  const amenitiesToDisplay = [
    "Wifi",
    "Air conditioning",
    "Cable TV",
    "Heating",
    "Kitchen",
    "Microwave",
    "Oven",
    "Refrigerator",
    "Stove",
    "Washer",
  ];
  const extraImages = {
    Wifi: wifi,
    "Air conditioning": airConditioner,
    "Cable TV": cableTv,
    Heating: heating,
    Kitchen: kitchen,
    Microwave: microwave,
    Oven: oven,
    Refrigerator: refrigerator,
    Stove: stove,
    Washer: washer,
  };

  const amenitiesArray = amenities
    ? amenities.split(",").map((amenity) => amenity.replace(/"/g, "").trim())
    : [];

  const extraImageArray = amenitiesToDisplay
    .map((amenity) => {
      if (amenitiesArray.includes(amenity)) {
        return extraImages[amenity];
      } else {
        return null;
      }
    })
    .filter((amenity) => amenity !== null);
  // const extraImageArray = amenitiesToDisplay
  // .filter((amenity) => amenitiesArray.includes(amenity))
  // .map((amenity) => extraImages[amenity]);
  // console.log("extraImageArray: ", extraImageArray);

  // console.log(minNumber);
  const asArray = Object.entries(listing).filter(
    ([key, value]) => value === minNumber
  );

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const addWishList = (listId) => {
    // console.log(user)
    if (user && user.id) {
      let data = {
        studId: user.id,
        listId: listId,
        interest_type: true,
      };
      api
        .post("/interest", data)
        .then((response) => setMessage(response.data))
        .catch((error) => {
          console.error(error);
        });
    } else navigate("/register/login");
  };

  useEffect(() =>{
    api
    .get(`/interest/${user.id}`)
    .then((response) => setInterest(response.data))
    .catch((error) => {
      console.error(error);
    });
  },[message])

  return listing ? (
    <div className="card-listing-all">
      <div>
        <img
          className="card-listing-image"
          src={src}
          onError={() => setSrc(imagePlaceholder)}
          alt={name}
        />
        <div className="extras-images"></div>
      </div>
      <div className="card-listing-title-text">
        <h2 className="card-listing-title">{name}</h2>
        <p className="card-listing-description">
          {description
            .substr(0, 200)
            .replace(/<br\s*\/?>/gi, "")
            .replace(/<(\/)?b>/gi, "")}
          ...
        </p>
        {extraImageArray.map((image, index) => (
          <img
            className="amenity-icon"
            src={image}
            alt={amenitiesToDisplay[index]}
            key={index}
          />
        ))}
        <div className="card-universities">
          {asArray[0][0] === "distance_1" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Instituto Superior Técnico is {distance_1.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_2" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade de Lisboa is {distance_2.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_3" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade Lusófona is {distance_3.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_4" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              Universidade Católica is {distance_4.toFixed(2)} km's away
            </p>
          )}
          {asArray[0][0] === "distance_5" && (
            <p className="card-universities-distance">
              <HiLocationMarker />
              ISCTE - Instituto Universitário de Lisboa is{" "}
              {distance_5.toFixed(2)} km's away
            </p>
          )}
        </div>
      </div>
      <div className="card-listing-price-rating">
        <button
          // disabled={!user ? true : false}
          className={
            user ? "card-listing-rating" : "card-listing-rating button-disabled"
          }
          onClick={() => addWishList(listing_id)}
        >
          <img
            src={
              interest.find((item) => item.listId === listing_id)
                ? imageHeart
                : favouriteIcon
            }
            alt="favourite-icon"
            className={ interest.find((item) => item.listId === listing_id) ? "heartFull": "addHeart"}
          />
        </button>
        <p className="card-listing-text-price">
          From <span className="card-listing-price">€ {price_in_eur}</span> /
          Month
        </p>
        <p className="card-review">
          Number of reviews:{" "}
          <span className="review-score-number">{number_of_reviews}</span>
        </p>
        <p className="card-review">
          Review Score:
          <span className="review-score-number">{review_scores_rating}</span>
        </p>
        <Link
          className="card-listing-link"
          key={listing.listing_id}
          to={`/listing/${listing.listing_id}`}
        >
          <button type="submit" className="uselessButton">
            View more
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

export default PropertyCard;
