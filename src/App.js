/* rcfc snippet  */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from './components/Servicess/Services';
import Experiencie from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './Context';
import {useContext} from 'react';


function App(){

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App' style={{
      background:darkMode? 'black': '',
      color: darkMode? 'white':''

    }}>
    <Navbar/>
    <Intro />
     <Services/>
    <Experiencie/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/> 
    </div>
  );
  
}

export default App;
