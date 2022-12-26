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
function App(){
  return (
    <div className='App'>
    <Navbar/>
    <Intro />
    <Services/>
    <Experiencie/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    </div>
  );
  
}

export default App;
