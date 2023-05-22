import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const ListingsContext = createContext();

export default ListingsContext;

export const ListingsContextProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [listingsFilter, setListingsFilter] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [universitiesSelected, setUniversitiesSelected] = useState();

  const getProperties = () => {
    api
      .post("/listing")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUniversities = () => {
    api
      .get("/listing/universities")
      .then((response) => {
        // console.log(response.data)
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProperties();
    getUniversities();
  }, []);
  return (
    <ListingsContext.Provider
      value={{
        listings,
        universities,
        listingsFilter,
        setListingsFilter,
        universitiesSelected,
        setUniversitiesSelected,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};
