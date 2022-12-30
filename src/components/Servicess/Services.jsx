import React from 'react';
import '../Servicess/Services.css';
import Card from '../Card/Card';
import web from '../../assets/img/web-design.png'
import cv from './cv.pdf'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 


  const Services =() => {

    const transition  = {duration: 4, type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}> My awesome</span>
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
          
          <motion.div 
           initial={{ left: "25rem" }}
           whileInView={{ left: "14rem" }}
           transition={transition}
          style={{left: '23rem', top:'-.5rem', right:"0"}}>
          <Card
          emoji = {web}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
        </motion.div>

         {/* second card */}
         <motion.div 
         initial={{ left: "5rem" }}
         whileInView={{ left: "-11rem" }}
         animate= {{rotate:20}}
         
         transition={transition}

         style={{top: '11.5rem'}}>
         <Card
          emoji = {web}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
         </motion.div>

         {/* 3th card */}
         <motion.div
         initial={{ left: "29rem" }}
         whileInView={{ left: "14rem" }}
         animate= {{rotate:-20}}
         
         transition={transition}
         style={ {left:'23rem', bottom: '4rem'}}>
         <Card
          emoji = {web}
          heading = {"Desing"}
          detail = {"Figma, CSS, HTLM5, REACT, NPM, SQL"}
          />
          <div className="blur s-blur2" style= {{background: "#22AFE4"}}></div>

         </motion.div>

        </div>
        
        </div>

        

    )
    }
    export default  Services;