import { createStore } from 'redux';
import rootReducer from './reducers';

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);//apply middleware here

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const { default: nextRootReducer } = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
export default configureStore;
