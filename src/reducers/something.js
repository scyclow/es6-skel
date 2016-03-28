import { handleActions } from 'redux-actions';
import { types } from '../actions';

const { SOMETHING } = types;

const defaultState = {
  something: 0
};

const reducer = handleActions({
  [SOMETHING]: (state, { something }) => ({ ...state, something }),
}, defaultState);

export default reducer;
