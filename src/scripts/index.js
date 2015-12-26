import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

import App from './containers/App';
require('../styles/application.scss');

const store = createStore(rootReducer);

/////////////////////////////////////////////////////////
////////// FOR TESTING PURPOSES ONLY ///////////////////
/**/ import { count } from './actions' ////////////////
/**/ window.count = (n) => store.dispatch(count(n)) //
/////////////////////////////////////////////////////

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
