import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Router/Router'
import './Styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route/>
  </React.StrictMode>
);
