import React, {useState} from 'react'
import imagePlaceholder from "../../assets/placeholder-image.png";


const PopularCard = ({popular}) => {
  const [src, setSrc] = useState(popular.picture_url);

  return (
    <div className='popular-div-container'>
      <img className="popular-card-image" onError={() => setSrc(imagePlaceholder)}  src={src} alt={popular.name} />
          <h2 className="card-title">{popular.name}</h2>
          <p className="card-text">
            From <span className="card-price">{popular.price_in_eur}€</span> / Month
          </p>
    </div>
  )
}

export default PopularCard