import React from 'react';
import '../Servicess/Services.css';
import Card from '../Card/Card';
import web from '../../assets/img/web-design.png'



  const Services =() => {
    return (
      <div className="services">

        {/* left side */}
        <div className="awesome">
            <span>My awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam iure, quidem voluptas quae aut inventore eius vel quas reprehenderit beatae quibusdam ex dolorem illum. Doloribus cupiditate similique ab dolorem.
            <br/>
            ipsinfds f ds fds f ds f sd fs d fsd
            </span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur" style= {{background: "#ABF1FF94"}}></div>
        
        </div>
        
        {/* rigth side */}
        <div className='cards'>
          
          <div>
          <Card
          emoji = {web}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
        </div>
        </div>
        </div>

    )
    }
    export default  Services;