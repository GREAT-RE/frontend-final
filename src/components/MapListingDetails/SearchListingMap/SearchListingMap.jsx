// import logo from "./logo.svg";
import "./SearchListingMap.css";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";

const centerLisbon = { lat: 38.744052, lng: -9.151828 };

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function SearchListingMap() {
  if (!process.env.REACT_APP_GOOGLE_API_KEY) {
    return (
      <>
        <h2>Failing connecting with Google Maps. </h2>
        <h2>Please try again in a few moments or contact the admin team.</h2>
      </>
    );
  }

  return (
    <div className="search-map">
      {/* <h1>MAP LISTING SEARCH</h1> */}
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={render}>
        <Map center={centerLisbon} zoom={13} />
      </Wrapper>
    </div>
  );
}

export default SearchListingMap;
