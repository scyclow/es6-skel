import createConstants from '../../src/utils/createConstants';

describe('createConstants', () => {
  it('takes multiple strings, and returns an object with mirrored key/value pairs', () => {
    let actions = ['ACTION1', 'ACTION2', 'ACTION3'];
    let constants = createConstants(...actions);

    actions.forEach(action => {
      expect(constants[action]).toEqual(action);
    });
  });
});
