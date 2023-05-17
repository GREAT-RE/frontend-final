import React from 'react'
import { Link } from 'react-router-dom';
import rRosa from "../../../assets/aboutlisbon3.jpg"
import { useEffect } from 'react'


const RuaRosa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='ruaAugusta'>
            <div className='augusta-all-text'>
                <div className='augustaimg'>
                <img className="rua-augusta-img" src={rRosa} alt="Rua Cor de Rosa" />
                </div>
                <h4 className='augusta-get'>Get to know Lisbon</h4>
                <h1 className='augusta-title'>RUA COR DE ROSA</h1>
                <p className='augusta-text'>"Rua Cor de Rosa" or "Pink Street" is a popular street in the Cais do Sodré 
                                            neighborhood of Lisbon, Portugal.<br></br><br></br> It was formerly known as "Rua Nova do 
                                            Carvalho" and was a seedy area filled with strip clubs and bars. However, in 
                                            recent years, it has been transformed into a trendy nightlife destination with
                                            colorful pink pavement, street art, and a variety of bars, restaurants, and 
                                            clubs.<br></br><br></br> The street is closed to traffic at night and becomes a pedestrian zone,
                                            drawing large crowds of locals and tourists alike. It is definitely one of the 
                                            most famous streets in Lisbon's nightlife scene.</p>
                <Link to="/find-lisbon"><h4 className='go-back'>Go Back</h4>
                </Link>
            </div>
          </div>
          )
}

export default RuaRosa