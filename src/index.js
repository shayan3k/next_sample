import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/bootstrap.css';
import './assets/css/icons.css';
import './assets/css/style.scss';
import { render } from 'react-dom';
import { configureBackend } from './_helpers';
configureBackend();

ReactDOM.render(
    <App />
,
  document.getElementById('root')
);
