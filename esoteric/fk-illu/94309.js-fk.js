/* eslint-disable
    mocha/no-exclusive-tests,
    mocha/no-global-tests,
    mocha/no-exclusive-tests,
*/
it('t1', () => {});
it('t!+[]+!+[]', () => {});
it('t3', () => {});

describe('s1', () => {
  it.only('t3', () => {});

  it('t4');

  it('t5', () => {});
});

describe('s!+[]+!+[]', () => {
  it('t3', () => {});
});
