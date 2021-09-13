import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import './styles/reset.css';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
