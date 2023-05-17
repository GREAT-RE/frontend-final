import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import cardI1 from "../../../assets/Popular property.jpg";
import "./CardIndividual.css";
import api from "../../../services/api";
import ListingDetailsMap from "../../../components/MapListingDetails/ListingDetailsMap/ListingDetailsMap";
import MapListing from "../../../components/MapListingDetails/MapListing";
import { ChakraProvider, theme } from "@chakra-ui/react";
import imagePlaceholder from "../../../assets/placeholder-image.png";
const CardIndividual = () => {
  const [singleProperty, setSingleProperty] = useState();
  const [src, setSrc] = useState();
  const { id } = useParams();

  const getSingleProperty = () => {
    api
      .get(`/listing/${id}`)
      .then((response) => {
        setSrc(response.data[0].picture_url)
        setSingleProperty(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getSingleProperty();
  }, [id]);

  return singleProperty ? (
    <>
      <div className="cardI-all">
        <div className="card-left">
          <h1 className="cardI-title">{singleProperty.name}</h1>
          <img
            className="cardI-image"
            src={src}
            onError={() => setSrc(imagePlaceholder)}
            alt={singleProperty.name}
          />
          <h1 className="cardI-description-title">Description:</h1>
          <p className="card-listing-description">
            {singleProperty.description
              .replace(/<br\s*\/?>/gi, "\n")
              .replace(/<(\/)?b>/gi, "\n")}
          </p>
          <p className="cardI-view">
            Address: {singleProperty.formatted_address}
          </p>
          <p className="cardI-view">Distances:</p>
          <div className="cardI-facilities">
            <h1 className="cardI-facilities-title">Facilities</h1>
            <div className="cardI-facilites-extras">
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
              <p className="cardI-facilities-item">OLÁ</p>
            </div>
          </div>
        </div>
        <div className="card-right">
          <p className="cardI-price-text">
            From{" "}
            <span className="cardI-price">{singleProperty.price_in_eur}€</span>{" "}
            / Month
          </p>
          <div className="cardI-button">
            <button type="submit">Enquire</button>
          </div>
          <p className="cardI-reviews">
            This property has received {singleProperty.number_of_reviews}{" "}
            reviews!
          </p>
        </div>
      </div>

      <div>
        <ChakraProvider theme={theme}>
          <ListingDetailsMap data={singleProperty} />
        </ChakraProvider>
      </div>

      <Link className="cardI-back-button" to="/properties/popular">
        <button type="submit">Go Back</button>
      </Link>
    </>
  ) : null;
};

export default CardIndividual;
