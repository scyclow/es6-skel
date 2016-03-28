import something from '../../src/reducers/something';
import { types } from '../../src/actions';

describe('something', () => {
  it('handles the SOMETHING action', () => {
    const expected = 'correct';
    const initialState = { something: 'wrong' };
    const action = { type: types.SOMETHING, something: expected };

    const newState = something(initialState, action);
    expect(newState.something).toBe(expected);
  });
});
