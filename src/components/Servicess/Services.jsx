import React from 'react';
import '../Servicess/Services.css';
import Card from '../Card/Card';
import web from '../../assets/img/web-design.png'
import glasses from '../../assets/img/sunglasses.png'
import cv from './cv.pdf'

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

            <a href= {cv} target = 'blank'>
             <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style= {{background: "#ABF1FF94"}}></div>
        
        </div>
        
        {/* rigth side */}
        <div className='cards'>
          
          <div style={{left: '14rem'}}>
          <Card
          emoji = {web}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
        </div>

         {/* second card */}
         <div style={ {top: '12rem', left:'-4rem'}}>
         <Card
          emoji = {glasses}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
         </div>

         {/* 3th card */}
         <div style={ {top: '24rem', left:'14rem'}}>
         <Card
          emoji = {glasses}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
                   <div className="blur s-blur2" style= {{background: "var(--blue)"}}></div>

         </div>

        </div>
        
        </div>

        

    )
    }
    export default  Services;