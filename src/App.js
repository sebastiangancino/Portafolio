/* rcfc snippet  */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from './components/Servicess/Services';
import Experiencie from './components/Experience/Experience';
import Works from './components/Works/Works';
function App(){
  return (
    <div className='App'>
    <Navbar/>
    <Intro />
    <Services/>
    <Experiencie/>
    <Works/>
    </div>
  );
  
}

export default App;
