import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/uploads" component={() => (<h1>Uploads</h1>)} />
          <Route exact path="/uploads/:id" component={() => (<h1>Upload by id</h1>)} />
          <Redirect from="*" to="/uploads" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
