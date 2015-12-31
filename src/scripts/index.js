import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import App from './containers/App';

require('../styles/application.scss');

const store = createStore(rootReducer);
const history = createHistory();
syncReduxAndRouter(history, store);

       //////////////////////////////////////////////////////////
      ////////// FOR TESTING PURPOSES ONLY /////////////////////
     /**/ import { count } from './actions' ///////////////////
    /**/ window.count = (n) => store.dispatch(count(n)) //////
   /**/ import Thing from './components/Thing' //////////////
  /**/ const AnotherRoute = () => <div>blehblehbleh</div> //
 /**/ window.store = store ////////////////////////////////
//////////////////////////////////////////////////////////

render(
  <Provider store={store}>
    <div>
      <Thing content="something that persists outside of the routes, like a NAV bar" />
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="/another_route" component={AnotherRoute} />
      </Router>
    </div>
  </Provider>,

  document.getElementById('app')
);
