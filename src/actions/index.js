import createConstants from '../utils/createConstants';

export const types = createConstants('SOMETHING');

export const doSomething = (something) => ({
  type: types.SOMETHING,
  something
});
