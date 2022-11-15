const _0x4661 = [
    './optimal-imports.test/expected.js',
    'should\x20be\x20idempotent',
    '175634KiEEXn',
    '5PTAeFq',
    '1593429JUSVte',
    '45574VETHaj',
    '9NqsHLH',
    '1091903kDChXg',
    '279761GZjnHb',
    '5KHnVrp',
    '197198AESyjm',
    '1dSIStf',
    '2FUJnCN',
    '330211lmoMMx',
    'replace',
    'join',
    '@material-ui/codemod',
    'optimal-imports',
    'convert\x20path\x20as\x20needed',
    './optimal-imports.test/actual.js',
    'resolve'
];
const _0x69bb99 = _0x1ad3;
(function (_0x43a373, _0xfe3a2f) {
    const _0x13dd1e = _0x1ad3;
    while (!![]) {
        try {
            const _0xd60318 = -parseInt(_0x13dd1e(0x16e)) * -parseInt(_0x13dd1e(0x16f)) + parseInt(_0x13dd1e(0x170)) + -parseInt(_0x13dd1e(0x171)) * -parseInt(_0x13dd1e(0x172)) + -parseInt(_0x13dd1e(0x173)) + -parseInt(_0x13dd1e(0x174)) * parseInt(_0x13dd1e(0x175)) + parseInt(_0x13dd1e(0x176)) * -parseInt(_0x13dd1e(0x177)) + parseInt(_0x13dd1e(0x178)) * parseInt(_0x13dd1e(0x179));
            if (_0xd60318 === _0xfe3a2f)
                break;
            else
                _0x43a373['push'](_0x43a373['shift']());
        } catch (_0x4647af) {
            _0x43a373['push'](_0x43a373['shift']());
        }
    }
}(_0x4661, 0xd0909));
import _0x18ac75 from 'path';
import { expect } from 'chai';
import _0x515e84 from 'jscodeshift';
import _0x1d1c7a from './optimal-imports';
import _0x5508e8 from '../util/readFile';
function trim(_0x668cbc) {
    const _0x38845c = _0x1ad3;
    return _0x668cbc ? _0x668cbc[_0x38845c(0x17a)](/^\s+|\s+$/, '') : '';
}
function read(_0x19781f) {
    const _0x9a2e9d = _0x1ad3;
    return _0x5508e8(_0x18ac75[_0x9a2e9d(0x17b)](__dirname, _0x19781f));
}
function _0x1ad3(_0x1c2c6e, _0x18c27e) {
    return _0x1ad3 = function (_0x4661cd, _0x1ad329) {
        _0x4661cd = _0x4661cd - 0x16e;
        let _0x2410cc = _0x4661[_0x4661cd];
        return _0x2410cc;
    }, _0x1ad3(_0x1c2c6e, _0x18c27e);
}
describe(_0x69bb99(0x17c), () => {
    describe('v4.0.0', () => {
        const _0x5e7414 = _0x1ad3;
        describe(_0x5e7414(0x17d), () => {
            const _0x574223 = _0x5e7414;
            it(_0x574223(0x17e), () => {
                const _0x394327 = _0x574223, _0x2f4a6d = _0x1d1c7a({
                        'source': read(_0x394327(0x17f)),
                        'path': require[_0x394327(0x180)]('./optimal-imports.test/actual.js')
                    }, { 'jscodeshift': _0x515e84 }, {}), _0x28d211 = read(_0x394327(0x181));
                expect(trim(_0x2f4a6d))['to']['equal'](trim(_0x28d211), 'The\x20transformed\x20version\x20should\x20be\x20correct');
            }), it(_0x574223(0x182), () => {
                const _0x3c2b12 = _0x574223, _0x3512db = _0x1d1c7a({
                        'source': read('./optimal-imports.test/expected.js'),
                        'path': require['resolve'](_0x3c2b12(0x181))
                    }, { 'jscodeshift': _0x515e84 }, {}), _0x3ab94c = read('./optimal-imports.test/expected.js');
                expect(trim(_0x3512db))['to']['equal'](trim(_0x3ab94c), 'The\x20transformed\x20version\x20should\x20be\x20correct');
            });
        });
    });
});
