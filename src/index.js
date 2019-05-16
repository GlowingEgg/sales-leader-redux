import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Demo from './pages/demo';
import LandingPage from './pages/landing';
import CoxMock from './pages/cox-mock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path = '/' component = {LandingPage} />
        <Route exact path = "/demo" component = {Demo} />
        <Route exact path = "/cox" component = {CoxMock} />
      </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
