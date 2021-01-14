import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './pages/LandingPage'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
