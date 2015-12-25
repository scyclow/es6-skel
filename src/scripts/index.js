import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

require('../styles/application.scss');

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  document.getElementById('app')
);
