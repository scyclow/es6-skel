import * as blah from '../src/scripts/index';

describe('Is this shit working?', () => {
  it('If this works, then probably', () => {
    let expectedOutput = blah.crap;
    let x = (function*(ouput){
      yield true;
    })(expectedOutput);

    expect(x.next().value).toBe(expectedOutput);
  });

  it('still works', () => {
    let x = (async function() {
      return 5
    })();

    expect(x).toBe(5)
  });
});
