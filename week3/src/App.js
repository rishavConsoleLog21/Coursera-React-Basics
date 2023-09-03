import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes ,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <nav className='nav'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/about" className='nav-item'>About</Link> 
                <Link to="/contact" className='nav-item'>Contact Us</Link> 
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    </div>
  );
}

export default App;
