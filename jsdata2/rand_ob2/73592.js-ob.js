var _0x109c = [
    '117676Jveaev',
    '295528ZIOjKh',
    '1tgQQpK',
    '63706RKyPMo',
    'isSet',
    'should\x20return\x20`true`\x20for\x20sets',
    'strictEqual',
    'should\x20return\x20`false`\x20for\x20non-sets',
    'map',
    'deepStrictEqual',
    'should\x20work\x20for\x20objects\x20with\x20a\x20non-function\x20`constructor`\x20(test\x20in\x20IE\x2011)',
    'should\x20work\x20with\x20weak\x20sets\x20from\x20another\x20realm',
    'set',
    '1Mfxaxj',
    '146052TNuVjU',
    '409IKLeSd',
    '1687amxKrV',
    '97ORDnId',
    '3853YXVgGV',
    '521HhlKTQ',
    '834tKmQol'
];
var _0x25d3f0 = _0x5a55;
(function (_0x202501, _0x43d283) {
    var _0x50a1b6 = _0x5a55;
    while (!![]) {
        try {
            var _0x20e61a = -parseInt(_0x50a1b6(0x6d)) * -parseInt(_0x50a1b6(0x6e)) + parseInt(_0x50a1b6(0x6f)) * parseInt(_0x50a1b6(0x70)) + parseInt(_0x50a1b6(0x71)) * -parseInt(_0x50a1b6(0x72)) + parseInt(_0x50a1b6(0x73)) * -parseInt(_0x50a1b6(0x74)) + parseInt(_0x50a1b6(0x75)) + parseInt(_0x50a1b6(0x76)) + -parseInt(_0x50a1b6(0x77)) * parseInt(_0x50a1b6(0x78));
            if (_0x20e61a === _0x43d283)
                break;
            else
                _0x202501['push'](_0x202501['shift']());
        } catch (_0x40bba2) {
            _0x202501['push'](_0x202501['shift']());
        }
    }
}(_0x109c, 0x5c1be));
import _0x468dad from 'assert';
import _0x163ec7 from 'lodash';
function _0x5a55(_0x48bec3, _0x4ec61f) {
    return _0x5a55 = function (_0x109c74, _0x5a558d) {
        _0x109c74 = _0x109c74 - 0x6d;
        var _0x1d60a4 = _0x109c[_0x109c74];
        return _0x1d60a4;
    }, _0x5a55(_0x48bec3, _0x4ec61f);
}
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
import _0x59da04 from '../isSet.js';
describe(_0x25d3f0(0x79), function () {
    var _0x2530bc = _0x25d3f0;
    it(_0x2530bc(0x7a), function () {
        var _0x19be05 = _0x2530bc;
        Set && _0x468dad[_0x19be05(0x7b)](_0x59da04(set), !![]);
    }), it(_0x2530bc(0x7c), function () {
        var _0x1a14d9 = _0x2530bc, _0xf86c56 = _0x163ec7[_0x1a14d9(0x7d)](falsey, stubFalse), _0x58595b = _0x163ec7[_0x1a14d9(0x7d)](falsey, function (_0x16ff17, _0x13ab37) {
                return _0x13ab37 ? _0x59da04(_0x16ff17) : _0x59da04();
            });
        _0x468dad[_0x1a14d9(0x7e)](_0x58595b, _0xf86c56), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(args), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04([
            0x1,
            0x2,
            0x3
        ]), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(!![]), ![]), _0x468dad['strictEqual'](_0x59da04(new Date()), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(new Error()), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(_), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(slice), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04({ 'a': 0x1 }), ![]), _0x468dad['strictEqual'](_0x59da04(0x1), ![]), _0x468dad['strictEqual'](_0x59da04(/x/), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04('a'), ![]), _0x468dad[_0x1a14d9(0x7b)](_0x59da04(symbol), ![]), _0x468dad['strictEqual'](_0x59da04(weakSet), ![]);
    }), it(_0x2530bc(0x7f), function () {
        var _0xe7c62a = _0x2530bc, _0xcbb34c = [
                ![],
                !![]
            ], _0x478faa = _0x163ec7[_0xe7c62a(0x7d)](_0xcbb34c, stubFalse), _0x5989fe = _0x163ec7[_0xe7c62a(0x7d)](_0xcbb34c, function (_0x2b950d) {
                return _0x59da04({ 'constructor': _0x2b950d });
            });
        _0x468dad[_0xe7c62a(0x7e)](_0x5989fe, _0x478faa);
    }), it(_0x2530bc(0x80), function () {
        var _0x577a17 = _0x2530bc;
        realm[_0x577a17(0x81)] && _0x468dad['strictEqual'](_0x59da04(realm[_0x577a17(0x81)]), !![]);
    });
});
