import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log($)
// console.log(Popper)

const appRoutes = (
    <Router>
      <App />
    </Router >
)

ReactDOM.render(appRoutes, document.getElementById('root'));
registerServiceWorker();
