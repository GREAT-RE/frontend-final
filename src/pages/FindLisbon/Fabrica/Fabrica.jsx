import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import rFabrica from "../../../assets/aboutlisbon1.jpg"

const Fabrica = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<div className='ruaAugusta'>
    <div className='augusta-all-text'>
        <div className='augustaimg'>
        <img className="rua-augusta-img" src={rFabrica} alt="Rua Augusta" />
        </div>
        <h4 className='augusta-get'>Get to know Lisbon</h4>
        <h1 className='augusta-title'>FÁBRICA VIÚVA LAMEGO</h1>
        <p className='augusta-text'>The Viúva Lamego Factory is a Portuguese company dedicated to the 
                                    production of tiles, ceramics, and porcelain. Founded in 1849, the Factory is 
                                    headquartered in Lisbon, on Rua do Sacramento à Lapa.<br></br><br></br>
                                    The Viúva Lamego Factory is known for its tiles and its more than 170-year 
                                    history. Many of its tiles have been used in historic buildings and 
                                    monuments in Portugal, such as the National Palace of Sintra and the São 
                                    Bento Station in Porto.<br></br><br></br>
                                    In addition to producing tiles and ceramics, the Factory also specializes in 
                                    restoration work, including the restoration of historic tiles and facades. With 
                                    a team of skilled artisans and craftsmen, the Factory is committed to 
                                    preserving Portugal's rich cultural heritage through its work.<br></br><br></br>
                                    Today, the Viúva Lamego Factory continues to be a leading producer of tiles 
                                    and ceramics, both in Portugal and around the world. Its products are sought
                                    after for their quality and beauty, and the Factory remains a symbol of 
                                    Portugal's rich artistic and cultural traditions.</p>
        <Link to="/find-lisbon"><h4 className='go-back'>Go Back</h4>
        </Link>
    </div>
  </div>
  )
}

export default Fabrica