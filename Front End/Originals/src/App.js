import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tours from './components/Tours';
import Motels from './components/Motels';
import PlacesToVisit from './components/PlacesToVisit';
import Restaurants from './components/Restaurants';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/tours" component={Tours} />
        <Route path="/motels" component={Motels} />
        <Route path="/places-to-visit" component={PlacesToVisit} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
