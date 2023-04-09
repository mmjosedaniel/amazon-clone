import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import products from './utils/mocked-data';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';

sessionStorage.setItem('products', JSON.stringify(products));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
