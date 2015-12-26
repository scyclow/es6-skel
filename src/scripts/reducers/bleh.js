import { handleActions } from 'redux-actions';
import { COUNT } from '../actions';

const initialState = {
  count: 0
};

const reducer = handleActions({
  [COUNT]: (state, action) => ({
    count: state.count + action.bleh
  })
}, initialState);

export default reducer;
