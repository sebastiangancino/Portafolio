import React from 'react';
import './Intro.css';
import  github from '../../../src/assets/img/github.png';

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
        <div className="i-right">Rigthfsdfdsfdsfdsfsd </div>
    </div>
  )
}

export default Intro;