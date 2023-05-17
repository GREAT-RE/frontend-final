import React from 'react'
import "./PropertyList.css"
import bikePhoto from "../../assets/propertylist.jpg"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PropertyList = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className='photo-container-lisbon'>
      <img className="bike-img" src={bikePhoto} alt="BikeImg" />
        <div className='text-container-lisbon'>
          <h1 className='textP'>KNOW HOW EASY IS TO LIST YOUR PROPERTY</h1>
        </div>
    </div>
      <div className='propertyButton'>

      <Link to="/list-property"><button type="submit" className='contactButton'>List for free</button></Link>

      {/* <Link to="/list-property"><div>List for free</div></Link> */}
      </div>
    </>
  )
}

export default PropertyList