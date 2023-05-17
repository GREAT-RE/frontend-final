import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import rAugusta from "../../../assets/aboutlisbon2.jpg"
import "./RuaAugusta.css"

const RuaAugusta = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<div className='ruaAugusta'>
    <div className='augusta-all-text'>
        <div className='augustaimg'>
        <img className="rua-augusta-img" src={rAugusta} alt="Rua Augusta" />
        </div>
        <h4 className='augusta-get'>Get to know Lisbon</h4>
        <h1 className='augusta-title'>ARCO DA RUA AUGUSTA</h1>
        <p className='augusta-text'>The Arch referred to here is likely the "Arco da Rua Augusta" (Augusta Street
                                    Arch) in Lisbon, Portugal. This iconic building was completed in the late 19th
                                    century and serves as a gateway to the city's downtown area.<br></br><br></br>
                                    Visitors can climb to the top of the arch for a panoramic view of the city. The
                                    arch stands at 30 meters (98 feet) tall and has a total of 32 steps leading up
                                    to its observation deck. From here, visitors can see some of Lisbon's most 
                                    famous landmarks, including the Tagus River, São Jorge Castle, and the 
                                    Santa Justa Elevator.<br></br><br></br>
                                    In addition to its stunning views, the Arco da Rua Augusta is also known for 
                                    its elaborate architecture. The arch features a neoclassical design, with 
                                    intricate sculptures and carvings adorning its façade. The arch is also home 
                                    to a museum, where visitors can learn more about its history and 
                                    significance to the city of Lisbon.<br></br><br></br>
                                    Overall, climbing to the top of the Arco da Rua Augusta is a must-do activity 
                                    for anyone visiting Lisbon. The view from the top is truly breathtaking, and 
                                    the arch itself is a testament to the city's rich cultural heritage.</p>
        <Link to="/find-lisbon"><h4 className='go-back'>Go Back</h4>
        </Link>
    </div>
  </div>
  )
}

export default RuaAugusta