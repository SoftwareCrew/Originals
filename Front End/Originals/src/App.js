import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tours from './components/Tours';
import Motels from './components/Motels';
import PlacesToVisit from './components/PlacesToVisit';
import Restaurants from './components/Restaurants';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NoMatch from './components/NoMatch';

function App() {
    return (
        <Router>
            <div className="App">

                <nav>
                    <Link to="/tours"><button>Tours</button></Link>
                    <Link to="/motels"><button>Motels</button></Link>
                    <Link to="/places-to-visit"><button>Places to Visit</button></Link>
                    <Link to="/restaurants"><button>Restaurants</button></Link>
                    <Link to="/signin"><button>Sign In</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </nav>

                <Routes>
                    <Route path="/tours" element={<Tours />} />
                    <Route path="/motels" element={<Motels />} />
                    <Route path="/places-to-visit" element={<PlacesToVisit />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NoMatch/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;