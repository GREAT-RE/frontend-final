import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import rRuinas from "../../../assets/aboutlisbon.jpg"

const Ruinas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<div className='ruaAugusta'>
    <div className='augusta-all-text'>
        <div className='augustaimg'>
        <img className="rua-augusta-img" src={rRuinas} alt="Rua Augusta" />
        </div>
        <h4 className='augusta-get'>Get to know Lisbon</h4>
        <h1 className='augusta-title'>RUÍNAS DO CARMO</h1>
        <p className='augusta-text'>The "Ruins of Carmo" (Ruínas do Carmo) is a historical site located in Lisbon,
                                    Portugal. It consists of the ruins of the Carmo Convent, which was built in 
                                    the 14th century and destroyed by the earthquake of 1755.<br></br><br></br>
                                    The Carmo Convent was originally founded by the Order of Our Lady of 
                                    Mount Carmel in 1389. It was one of the largest and most important 
                                    religious buildings in Lisbon, featuring Gothic architecture and a large 
                                    library.<br></br><br></br>
                                    On November 1st, 1755, a devastating earthquake struck Lisbon and 
                                    destroyed much of the city, including the Carmo Convent. Today, the ruins of
                                    the convent remain as a testament to the earthquake and the destruction it 
                                    caused.<br></br><br></br>
                                    The Ruins of Carmo are now a popular tourist attraction and cultural center, 
                                    with a museum and exhibitions showcasing the history and archaeology of 
                                    the site. The ruins also offer a stunning view of the city, and the surrounding
                                    park is a peaceful oasis in the bustling heart of Lisbon.</p>
        <Link to="/find-lisbon"><h4 className='go-back'>Go Back</h4>
        </Link>
    </div>
  </div>
  )
}

export default Ruinas