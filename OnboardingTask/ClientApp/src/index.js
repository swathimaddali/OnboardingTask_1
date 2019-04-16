import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './components/history';
import { Router, browserHistory } from 'react-router';
//import 'semantic-ui-css/semantic.min.css';
//import './styles.global.scss';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter  basename={baseUrl}>
    <App />
    </BrowserRouter>,
  rootElement);

registerServiceWorker();
