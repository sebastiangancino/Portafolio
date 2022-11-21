import React from 'react';
import './Intro.css';
import '../FloatingDiv/FloatingDiv';
import  github from '../../../src/assets/img/github.png';
import ellipse1 from '../../assets/img/Ellipse 1.png';
import ellipse2 from '../../assets/img/Ellipse 2.png';
import perfil from '../../assets/img/perfil-portafolio.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>I'm</span>
                <span>Sebastián Gancino</span>
                <span>Software developer, with juniors kills in React, Nodejs, Html, Css</span>
            </div>
            <button className=" button i-button">Hire me</button>
            <div className="i-icons">
              <img src={github} alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/3938/3938061.png" alt="" />
            </div>
        </div>
        <div className="i-right">
        <img src= {ellipse2} alt="" className='el2' />
          <img src= {ellipse1} alt=""  className='el1'/>  
          <img src= {perfil} alt="" className='perfil'/> 
        <div>
          <FloatingDiv/>
        </div>
        </div>
      
    </div>

  )
}

export default Intro;