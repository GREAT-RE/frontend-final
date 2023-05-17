import React, {useState} from 'react'

const PriceRange = () => {

    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceRangeChange = (event) => {
        const value = event.target.valueAsNumber;
        setPriceRange([0, value / 10]);
    };



  return (
    <div>
<h3>Price Range: {priceRange[0]}€ - {priceRange[1]}€</h3>
            <input
                type="range"
                min="0"
                max="800"
                value={priceRange[1] * 10}
                onChange={handlePriceRangeChange}
            />

    </div>
  )
}

export default PriceRange