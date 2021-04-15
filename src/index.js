import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import './assets/css/custom.css';
import App from './App';
import AuthenticationState from './context/authentication/AuthenticationState';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <App />
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById('root')
);
