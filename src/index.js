import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
