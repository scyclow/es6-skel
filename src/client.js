import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { LookRoot, Presets, Plugins } from 'react-look';

import configureStore from './store';
import App from './containers/App';

const initialState = window.__INITIAL_STATE__ || {};
// initialState.something.something = 'client nonsense'
const store = configureStore(initialState);

const styleConfig = Presets['react-dom'];
// TODO -- turn off for production
styleConfig.plugins.push(Plugins.friendlyClassName);

render(

  <Provider store={store}>
    <LookRoot config={styleConfig}>
      <App />
    </LookRoot>
  </Provider>,

  document.getElementById('app')
);
