import React from 'react'

const PopularCard = ({popular}) => {
  return (
    <div className='popular-div-container'>
      <img className="popular-card-image" src={popular.picture_url} alt="Pop1" />
          <h2 className="card-title">{popular.name}</h2>
          <p className="card-text">
            From <span className="card-price">{popular.price_in_eur}€</span> / Month
          </p>
    </div>
  )
}

export default PopularCard