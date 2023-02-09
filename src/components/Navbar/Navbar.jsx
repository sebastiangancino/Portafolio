import React from 'react';
import '../Navbar/Navbar.css';
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Sebastián Gancino</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style = {{listStyleType: 'none'}}>
                    <Link spy= {true} to = 'Navbar' smooth={true} activeClass = "active">
                    <li>HOME</li>
                    </Link>

                    <Link spy= {true} to = 'Services' smooth={true}>
                    <li>SERVICES</li>
                    </Link>

                    <Link spy= {true} to = 'Experience' smooth={true}>
                    <li>EXPERIENCE</li>
                    </Link>

                    <Link spy= {true} to = 'Testimonials' smooth={true}>
                    <li>TESTIMONIALS</li>
                    </Link>
                </ul>
            </div>
            <button className="button n-button">Contact</button>         
           
        </div>
    </div>
  )
}

export default Navbar





