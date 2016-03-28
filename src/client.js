import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './containers/App';

const initialState = window.__INITIAL_STATE__;
// initialState.something.something = 'client nonsense'
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
