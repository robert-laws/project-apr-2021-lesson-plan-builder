import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import './assets/css/custom.css';
import App from './App';
import AuthenticationState from './context/authentication/AuthenticationState';
import LessonsState from './context/lessons/LessonsState';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <LessonsState>
        <App />
      </LessonsState>
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById('root')
);
