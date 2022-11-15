'use strict';
const fixtures = require('../__test_fixtures__/fixtures.js'), generator = require('../GeneratePropsJavaInterface.js');
describe('GeneratePropsJavaInterface', () => {
    Object['keys'](fixtures)['sort']()['forEach'](_0x833780 => {
        const _0x1e54e1 = fixtures[_0x833780];
        it('can\x20generate\x20fixture\x20' + _0x833780, () => {
            expect(generator['generate'](_0x833780, _0x1e54e1))['toMatchSnapshot']();
        });
    });
});
