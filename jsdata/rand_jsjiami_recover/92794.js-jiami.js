'use strict';
const fixtures = require('../__test_fixtures__/fixtures.js');
const generator = require('../GeneratePropsJavaInterface.js');
describe('GeneratePropsJavaInterface', () => {
    Object['keys'](fixtures)['sort']()['forEach'](_0x20ac99 => {
        const _0x31f8a6 = fixtures[_0x20ac99];
        it('can generate fixture ' + _0x20ac99, () => {
            expect(generator['generate'](_0x20ac99, _0x31f8a6))['toMatchSnapshot']();
        });
    });
});