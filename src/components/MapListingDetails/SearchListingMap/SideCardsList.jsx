import React from "react";
import SideCard from "./SideCard";
import ListOfListings from "./ListOfListings";

const SideCardsList = ({ cards, card }) => {
//   console.log(card);

  return (
    <div className="side-bar-container">
      {/* <h1>SideCard LIST</h1> */}
      <div className="header-side-bar-listing-map">
        <p>{cards?.length} Properties</p>
        <select>
          <option value="Distance"> Distance to university</option>
          <option value="Recommended">Recommended</option>
        </select>
      </div>
      <div>
        {card ? <SideCard card={card} /> : null}
        <hr className="line-selected-card"/>
        <ListOfListings cards={cards} />
      </div>
    </div>
  );
};

export default SideCardsList;
