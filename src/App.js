import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/patient/:id" component={Patient} />
            <Route exact path="/report/:id" component={Report} />
          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
