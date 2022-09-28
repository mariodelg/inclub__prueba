import React from 'react';
import ReactDOM from 'react-dom/client';

//General Styles
import "./assets/styles/normalize.css"
import "./assets/styles/colors.css"

// Views
import Index from './views/Index/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);