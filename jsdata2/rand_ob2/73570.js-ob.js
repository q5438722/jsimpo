var _0x218c = [
    'abc',
    'should\x20return\x20an\x20empty\x20string\x20for\x20empty\x20values',
    'map',
    'deepStrictEqual',
    '804990yVYDvX',
    '875904bDrqby',
    '409508SeauwI',
    '55242VCdehH',
    '347036LqqNiD',
    '686812HUZBoz',
    '499454Nuosqh',
    '\x5c^\x5c$\x5c.\x5c*\x5c+\x5c?\x5c(\x5c)\x5c[\x5c]\x5c{\x5c}\x5c|\x5c\x5c',
    '^$.*+?()[]{}|\x5c',
    'should\x20escape\x20values',
    'strictEqual',
    'should\x20handle\x20strings\x20with\x20nothing\x20to\x20escape'
];
(function (_0x4df30a, _0x1912d3) {
    var _0x3ba05d = _0x4e34;
    while (!![]) {
        try {
            var _0x5c08fb = parseInt(_0x3ba05d(0x1bc)) + parseInt(_0x3ba05d(0x1bd)) + -parseInt(_0x3ba05d(0x1be)) + parseInt(_0x3ba05d(0x1bf)) + -parseInt(_0x3ba05d(0x1c0)) + -parseInt(_0x3ba05d(0x1c1)) + parseInt(_0x3ba05d(0x1c2));
            if (_0x5c08fb === _0x1912d3)
                break;
            else
                _0x4df30a['push'](_0x4df30a['shift']());
        } catch (_0x120053) {
            _0x4df30a['push'](_0x4df30a['shift']());
        }
    }
}(_0x218c, 0xc16aa));
import _0x518e91 from 'assert';
import _0x2bacd2 from 'lodash';
import { stubString } from './utils.js';
function _0x4e34(_0x321581, _0x252e3b) {
    return _0x4e34 = function (_0x218c78, _0x4e34ea) {
        _0x218c78 = _0x218c78 - 0x1bc;
        var _0x181900 = _0x218c[_0x218c78];
        return _0x181900;
    }, _0x4e34(_0x321581, _0x252e3b);
}
import _0x5af248 from '../escapeRegExp.js';
describe('escapeRegExp', function () {
    var _0x2e454a = _0x4e34, _0x39659c = _0x2e454a(0x1c3), _0x44a70a = _0x2e454a(0x1c4);
    it(_0x2e454a(0x1c5), function () {
        var _0x1fcf4f = _0x2e454a;
        _0x518e91[_0x1fcf4f(0x1c6)](_0x5af248(_0x44a70a + _0x44a70a), _0x39659c + _0x39659c);
    }), it(_0x2e454a(0x1c7), function () {
        var _0x3e1654 = _0x2e454a;
        _0x518e91[_0x3e1654(0x1c6)](_0x5af248(_0x3e1654(0x1c8)), _0x3e1654(0x1c8));
    }), it(_0x2e454a(0x1c9), function () {
        var _0x4007e1 = _0x2e454a, _0x50bcf9 = [
                ,
                null,
                undefined,
                ''
            ], _0x2d76ed = _0x2bacd2[_0x4007e1(0x1ca)](_0x50bcf9, stubString), _0x57eb25 = _0x2bacd2[_0x4007e1(0x1ca)](_0x50bcf9, function (_0x370881, _0x2e183e) {
                return _0x2e183e ? _0x5af248(_0x370881) : _0x5af248();
            });
        _0x518e91[_0x4007e1(0x1cb)](_0x57eb25, _0x2d76ed);
    });
});
