import './App.css'
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movies from  "./components/Movies"

function App() {
  

  return (
    <div className="App">
 <Navbar/>
  
    <Routes>

<Route path="/" element = {<Home/>}/>
<Route path="/about" element = {<About/>}/>
<Route path="/contact" element = {<Contact/>}/>
<Route path="/movies" element = {<Movies/>}/>

    </Routes>

    </div>
  )
}

export default App
