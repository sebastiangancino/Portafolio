
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Test from "./components/Intro/test";
import Services from './components/Servicess/Services';
function App(){
  return (
    <div className='App'>
    <Navbar/>
    <Intro />
    <Services/>
    </div>
  );
  
}

export default App;
