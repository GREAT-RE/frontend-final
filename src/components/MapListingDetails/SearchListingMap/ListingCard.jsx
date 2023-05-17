import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import imagePlaceholder from "../../../assets/placeholder-image.png";

const ListingCard = ({ card, asArray }) => {
  const [src, setSrc] = useState(card.picture_url);

  return (
    <div className="card-side-bar-map" key={card.id}>
      <div className="card-image-container-side-bar-map">
        <img
          src={src}
          onError={() => setSrc(imagePlaceholder)}
          alt={card.name}
        />
      </div>
      <div className="card-text-container-side-bar-map">
        <h4 className="card-title-side-bar-map">{card.name}</h4>
        <p>
          <span className="card-price-side-bar-map">€ {card.price_in_eur}</span>{" "}
          /daily
        </p>
        {asArray[0][0] === "distance_1" && (
          <p className="card-universities-distance">
            <HiLocationMarker />
            Instituto Superior Técnico is {card.distance_1.toFixed(2)} km's away
          </p>
        )}
        {asArray[0][0] === "distance_2" && (
          <p className="card-universities-distance">
            <HiLocationMarker />
            Universidade de Lisboa is {card.distance_2.toFixed(2)} km's away
          </p>
        )}
        {asArray[0][0] === "distance_3" && (
          <p className="card-universities-distance">
            <HiLocationMarker />
            Universidade Lusófona is {card.distance_3.toFixed(2)} km's away
          </p>
        )}
        {asArray[0][0] === "distance_4" && (
          <p className="card-universities-distance">
            <HiLocationMarker />
            Universidade Católica is {card.distance_4.toFixed(2)} km's away
          </p>
        )}
        {asArray[0][0] === "distance_5" && (
          <p className="card-universities-distance">
            <HiLocationMarker />
            ISCTE - Instituto Universitário de Lisboa is{" "}
            {card.distance_5.toFixed(2)} km's away
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
