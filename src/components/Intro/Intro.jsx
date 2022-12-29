import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import  github from '../../../src/assets/img/github.png';
import ellipse1 from '../../assets/img/Ellipse 1.png';
import ellipse2 from '../../assets/img/Ellipse 2.png';
import perfil from '../../assets/img/perfil-portafolio.png';
import laptop from '../../assets/img/programming.png';
import sandbox from '../../assets/img/sandbox.png';
import laughing from '../../assets/img/laughing.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>I'm</span>
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
          <img src={laughing} alt="" className ='laughing' />
          <div style={{top:'-4%', left: '68%'}}>
            <FloatingDiv image = {laptop} txt1 = 'Web' txt2 = 'Developer' />      
        </div>

        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{
          background: 'C1F5FF',
          top: '17rem' ,
          width: '21rem',
          height: '-9rem'
        }}
        ></div>
        <div style={{top: '18rem', left: '0'}}>
        <FloatingDiv image = {sandbox} txt1 = 'Backend' txt2 = 'Frontend' />

        </div>
        </div>
      
    </div>

  )
}

export default Intro;