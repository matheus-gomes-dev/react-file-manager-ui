import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Upload from './Views/uploads/Uploads';
import UploadDetails from './Views/uploads/UploadDetails';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/uploads" component={Upload} />
          <Route exact path="/uploads/:id" component={UploadDetails} />
          <Redirect from="*" to="/uploads" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
