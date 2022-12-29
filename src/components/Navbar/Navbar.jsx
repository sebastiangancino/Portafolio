import React from 'react';
import '../Navbar/Navbar.css';
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Sebas Gancino</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style = {{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button n-button">Contact</button>         
            
        </div>
    </div>
  )
}

export default Navbar





