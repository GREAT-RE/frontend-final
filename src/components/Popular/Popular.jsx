import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopularCard from "../PopularCard/PopularCard";
import api from "../../services/api";

const Popular = () => {
  const [populars, setPopulars] = useState([]);

  const getPopularProperties = () => {
    api
      .get("/listing/popular")
      .then((response) => setPopulars(response.data))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPopularProperties();
  }, []);

  return (
    <div>
      <div className="popular-container">
        <h1 className="popular-text">POPULAR PROPERTIES</h1>
      </div>
      <div className="popular-all-cards">
      {populars ? populars.map(popular => (
        <Link key={popular.listing_id} className="popular-card" to={`/listing/${popular.listing_id}`}>
         <PopularCard popular={popular} />
        </Link>
      ) ):null}
      </div>
      <div className="popular-button">
        <Link to="/properties/list">
          <button type="submit">View all properties</button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
