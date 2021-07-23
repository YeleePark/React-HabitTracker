import React from 'react';
import ReactDOM from 'react-dom';
import '../src/app.css';
// import SimpleHabit from '../src/components/simpleHabit'
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
