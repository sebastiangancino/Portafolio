import React from 'react'
import '../Works/Works.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
       <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
            <span>Brands and Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam iure, quidem voluptas quae aut inventore eius vel quas reprehenderit beatae quibusdam ex dolorem illum. Doloribus cupiditate similique ab dolorem.
            <br/>
            ipsinfds f ds fds f ds f sd fs d fsd
            </span>

             <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style= {{background: "#ABF1FF94"}}></div>
            <br />
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestias incidunt impedit quaerat consequatur. Est deleniti voluptas vel nihil, amet cum itaque laudantium soluta sit fugiat? Dolor incidunt nam quibusdam!</span>
        </div>

                {/* rigth side */}
           <div className="w-right">
             <div className="mainCircle">
                <div className="w-secCircle">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968919.png" alt="" />
                </div>
                <div className="w-secCircle">
                  <img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/squarespace_logo_icon_181252.png" alt="" />
                </div>
                <div className="w-secCircle">
                   <img src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" alt=""  />
                </div>
                <div className="w-secCircle">
                  <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="" />
                </div>
                <div className="w-secCircle">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                </div>

                      {/*background circles*/}
                      <div className="back-circle blueCircle"></div>
                      <div className="back-circle yellowCircle"></div>
             </div>
           </div>
    </div>
  )
}

export default Works