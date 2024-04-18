import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
        </Router>
  );
}

export default App;
