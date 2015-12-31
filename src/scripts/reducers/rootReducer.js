import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import bleh from './bleh';

const rootReducer = combineReducers({
  bleh,
  routing: routeReducer
});

export default rootReducer;
