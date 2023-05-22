import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CardIndividual.css";
import api from "../../../services/api";
import ListingDetailsMap from "../../../components/MapListingDetails/ListingDetailsMap/ListingDetailsMap";
import { ChakraProvider, theme } from "@chakra-ui/react";
import imagePlaceholder from "../../../assets/placeholder-image.png";
import airConditioner from "../../../assets/amenity-icons/air-conditioner.svg";
import wifi from "../../../assets/amenity-icons/wifi.svg";
import cableTv from "../../../assets/amenity-icons/cable-tv.svg";
import heating from "../../../assets/amenity-icons/heating.svg";
import kitchen from "../../../assets/amenity-icons/kitchen.svg";
import microwave from "../../../assets/amenity-icons/microwave.svg";
import oven from "../../../assets/amenity-icons/oven.svg";
import refrigerator from "../../../assets/amenity-icons/refrigerator.svg";
import stove from "../../../assets/amenity-icons/stove.svg";
import washer from "../../../assets/amenity-icons/washer.svg";
import axios from "axios";

const CardIndividual = () => {
  const [singleProperty, setSingleProperty] = useState();
  const [src, setSrc] = useState();
  const [amenities, setAmenities] = useState();
  const [address, setAddress] = useState();
  const [amenitiesDisplay, setAmenitiesDisplay] = useState();
  const { id } = useParams();

  const getAddress = () => {
    if (singleProperty) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${singleProperty.lat},${singleProperty.lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        )
        .then((results) =>
          api
            .put(`/listing/${singleProperty.id}`, {
              formatted_address: results.data.results[0].formatted_address,
            })
            .then((response) => console.log(response))
        );
    }
  };
  const getSingleProperty = () => {
    api
      .get(`/listing/${id}`)
      .then((response) => {
        setAmenities(response.data[0].amenities);
        setSrc(response.data[0].picture_url);
        setSingleProperty(response.data[0]);
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${response.data[0].lat},${response.data[0].lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
          )
          .then((results) => {
            setAddress(results.data.results[0].formatted_address);
            api
              .put(`/listing/${response.data[0].id}`, {
                formatted_address: results.data.results[0].formatted_address,
              })
              .then((response) => console.log(response));
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
  let extraImageArray = [];
  const getAmenities = () => {
    if (amenities) {
      console.log("object");
      const amenitiesArray = amenities
        ? amenities
            .split(",")
            .map((amenity) => amenity.replace(/"/g, "").trim())
        : [];

      extraImageArray = amenitiesToDisplay
        .map((amenity) => {
          if (amenitiesArray.includes(amenity)) {
            return extraImages[amenity];
          } else {
            return null;
          }
        })
        .filter((amenity) => amenity !== null);
      setAmenitiesDisplay(extraImageArray);
    } else {
      // console.log("THING");
    }
  };
  // console.log(extraImageArray);

  useEffect(() => {
    getSingleProperty();
  }, [id]);

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    getAddress();
  }, [singleProperty]);

  useEffect(() => {
    getAmenities();
  }, [amenities]);

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
            <h1 className="cardI-description-title">Address:</h1>
            {singleProperty.formatted_address
              ? singleProperty.formatted_address
              : address}
          </p>
          <div className="cardI-facilities">
            <h1 className="cardI-description-title">Facilities</h1>
            <div className="cardI-facilites-extras">
              {amenitiesDisplay && amenitiesDisplay.length > 0
                ? amenitiesDisplay.map((image, index) => (
                    <img
                      className="amenity-icon-individual"
                      src={image}
                      style={{ width: "40px", height: "40px" }}
                      alt={amenitiesToDisplay[index]}
                      key={index}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="card-right">
          <p className="cardI-price-text">
            From{" "}
            <span className="cardI-price">{singleProperty.price_in_eur}€</span>{" "}
            / Day
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

      <div className="cardI-google">
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
