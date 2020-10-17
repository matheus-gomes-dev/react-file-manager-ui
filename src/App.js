import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Upload from './Views/uploads/Uploads';
import UploadById from './Views/uploads/UploadById';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/uploads" component={Upload} />
          <Route exact path="/uploads/:id" component={UploadById} />
          <Redirect from="*" to="/uploads" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
