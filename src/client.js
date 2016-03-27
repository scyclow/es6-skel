import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const rootComponent = document.getElementById('app');
render(
  <App thing="client"/>,
  rootComponent
);
