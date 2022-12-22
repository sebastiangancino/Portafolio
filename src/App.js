
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Test from "./components/Intro/test";
import Services from './components/Servicess/Services';
import Experiencie from './components/Experience/Experiencie';
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
