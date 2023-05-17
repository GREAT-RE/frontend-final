import React from 'react'
import "./FindLisbon.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import aboutLisbon from "../../assets/discoverLX.jpg"
import aboutLisbon1 from "../../assets/aboutlisbon3.jpg"
import aboutLisbon2 from "../../assets/aboutlisbon2.jpg"
import aboutLisbon3 from "../../assets/aboutlisbon1.jpg"
import aboutLisbon4 from "../../assets/aboutlisbon.jpg"

const FindLisbon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='divFindLisbon'>
    <div className='photo-container-lisbon'>
      <img className="lisbon-img-cover" src={aboutLisbon} alt="LisbonImg" />
        <div className='text-container-lisbon'>
          <h1 className='textL'>DISCOVER LISBON</h1>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    <div className='lisbon1'>
      <img className="lisbon-img" src={aboutLisbon2} alt="LisbonImg1" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>ARCO DA RUA AUGUSTA</h1>
        <p className='lisbon-text'>The Arch referred to here is likely the "Arco da Rua Augusta" (Augusta Street Arch) in Lisbon, Portugal. This iconic building was completed in the late 19th century and serves as a gateway to the city's downtown area.</p>
        <Link to ="/rua-augusta"><h4 className='lisbon-learn'>Learn more</h4>
        </Link>
      </div>
    </div>

    <div className='lisbon2'>
      <img className="lisbon-img" src={aboutLisbon1} alt="LisbonImg2" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>RUA COR DE ROSA</h1>
        <p className='lisbon-text'>"Rua Cor de Rosa" or "Pink Street" is a popular street in the Cais do Sodré neighborhood of Lisbon, Portugal. It was formerly known as "Rua Nova do Carvalho" and was a seedy area filled with strip clubs and bars.</p>
        <Link to="/rua-rosa"><h4 className='lisbon-learn'>Learn more</h4>
        </Link>
      </div>
    </div>

    <div className='lisbon1'>
      <img className="lisbon-img" src={aboutLisbon3} alt="LisbonImg3" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>FÁBRICA VIÚVA LAMEGO</h1>
        <p className='lisbon-text'>The Viúva Lamego Factory is a Portuguese company dedicated to the production of tiles, ceramics, and porcelain. Founded in 1849, the Factory is headquartered in Lisbon, on Rua do Sacramento à Lapa.</p>
        <Link to ="/fabrica"><h4 className='lisbon-learn'>Learn more</h4>
        </Link>
      </div>
    </div>

    <div className='lisbon2'>
      <img className="lisbon-img" src={aboutLisbon4} alt="LisbonImg2" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>RUÍNAS DO CARMO</h1>
        <p className='lisbon-text'>The "Ruins of Carmo" (Ruínas do Carmo) is a historical site located in Lisbon, Portugal. It consists of the ruins of the Carmo Convent, which was built in the 14th century and destroyed by the earthquake of 1755.</p>
        <Link to="/ruinas"><h4 className='lisbon-learn'>Learn more</h4>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default FindLisbon