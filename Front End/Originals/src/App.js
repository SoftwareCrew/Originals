import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Tours from './components/Tours';
import Motels from './components/Motels';
import PlacesToVisit from './components/PlacesToVisit';
import Restaurants from './components/Restaurants';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; 


const backgroundImageUrl = 'https://img1.wsimg.com/isteam/ip/4056b383-c074-4d1c-a99e-3e77604927ca/statue-n-skyline_flag.jpg'; // Adjust the path to your image

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
        <div className="right">
          <Link to="/signin" className="button">Sign In</Link>
          <Link to="/signup" className="button">Register</Link>
          </div>
        </header>

        <div className="content" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        </div>

        <footer className="footer">
          <Link to="/tours" className="button">Tours</Link>
          <Link to="/motels" className="button">Motels</Link>
          <Link to="/places-to-visit" className="button">Places to Visit</Link>
          <Link to="/restaurants" className="button">Restaurants</Link>
        </footer>

        <Routes>
          <Route path="/tours" element={<Tours />} />
          <Route path="/motels" element={<Motels />} />
          <Route path="/places-to-visit" element={<PlacesToVisit />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;