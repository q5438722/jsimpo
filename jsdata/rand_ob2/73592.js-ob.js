var _0x5e9c = [
    'should\x20return\x20`true`\x20for\x20sets',
    'strictEqual',
    'should\x20return\x20`false`\x20for\x20non-sets',
    'map',
    'deepStrictEqual',
    'should\x20work\x20for\x20objects\x20with\x20a\x20non-function\x20`constructor`\x20(test\x20in\x20IE\x2011)',
    'should\x20work\x20with\x20weak\x20sets\x20from\x20another\x20realm',
    'set',
    '171308XHMbVb',
    '238PJCoYv',
    '1783vUIpxC',
    '977660IHSbap',
    '283981vVLcJK',
    '86wrhUXW',
    '2392JJCgRJ',
    '942374WFMWXp',
    '2343750fwfXYE',
    'isSet'
];
var _0x2c676d = _0xe85c;
(function (_0x201d9f, _0x27c7c9) {
    var _0x4ccec4 = _0xe85c;
    while (!![]) {
        try {
            var _0x4d9947 = parseInt(_0x4ccec4(0x183)) + parseInt(_0x4ccec4(0x184)) * parseInt(_0x4ccec4(0x185)) + -parseInt(_0x4ccec4(0x186)) + -parseInt(_0x4ccec4(0x187)) + parseInt(_0x4ccec4(0x188)) * -parseInt(_0x4ccec4(0x189)) + -parseInt(_0x4ccec4(0x18a)) + parseInt(_0x4ccec4(0x18b));
            if (_0x4d9947 === _0x27c7c9)
                break;
            else
                _0x201d9f['push'](_0x201d9f['shift']());
        } catch (_0x4a5166) {
            _0x201d9f['push'](_0x201d9f['shift']());
        }
    }
}(_0x5e9c, 0x81515));
import _0x249f03 from 'assert';
function _0xe85c(_0x359d8d, _0x16bc00) {
    return _0xe85c = function (_0x5e9c0a, _0xe85c89) {
        _0x5e9c0a = _0x5e9c0a - 0x183;
        var _0x177525 = _0x5e9c[_0x5e9c0a];
        return _0x177525;
    }, _0xe85c(_0x359d8d, _0x16bc00);
}
import _0x56259a from 'lodash';
import {
    set,
    falsey,
    stubFalse,
    args,
    slice,
    symbol,
    weakSet,
    realm
} from './utils.js';
import _0x14f846 from '../isSet.js';
describe(_0x2c676d(0x18c), function () {
    var _0x1e0cb0 = _0x2c676d;
    it(_0x1e0cb0(0x18d), function () {
        var _0x446ccc = _0x1e0cb0;
        Set && _0x249f03[_0x446ccc(0x18e)](_0x14f846(set), !![]);
    }), it(_0x1e0cb0(0x18f), function () {
        var _0x28df27 = _0x1e0cb0, _0x4c2a21 = _0x56259a[_0x28df27(0x190)](falsey, stubFalse), _0x302c56 = _0x56259a['map'](falsey, function (_0x7a5c9e, _0x175b94) {
                return _0x175b94 ? _0x14f846(_0x7a5c9e) : _0x14f846();
            });
        _0x249f03[_0x28df27(0x191)](_0x302c56, _0x4c2a21), _0x249f03[_0x28df27(0x18e)](_0x14f846(args), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846([
            0x1,
            0x2,
            0x3
        ]), ![]), _0x249f03['strictEqual'](_0x14f846(!![]), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(new Date()), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(new Error()), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(_), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(slice), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846({ 'a': 0x1 }), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(0x1), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(/x/), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846('a'), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(symbol), ![]), _0x249f03[_0x28df27(0x18e)](_0x14f846(weakSet), ![]);
    }), it(_0x1e0cb0(0x192), function () {
        var _0x37f968 = _0x1e0cb0, _0x10fd0b = [
                ![],
                !![]
            ], _0x33f83a = _0x56259a[_0x37f968(0x190)](_0x10fd0b, stubFalse), _0x527fe6 = _0x56259a[_0x37f968(0x190)](_0x10fd0b, function (_0x4c9956) {
                return _0x14f846({ 'constructor': _0x4c9956 });
            });
        _0x249f03[_0x37f968(0x191)](_0x527fe6, _0x33f83a);
    }), it(_0x1e0cb0(0x193), function () {
        var _0x3e2d44 = _0x1e0cb0;
        realm[_0x3e2d44(0x194)] && _0x249f03['strictEqual'](_0x14f846(realm[_0x3e2d44(0x194)]), !![]);
    });
});
