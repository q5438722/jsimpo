var _0x3bc3 = [
    '`_.indexOf`\x20should\x20return\x20the\x20index\x20of\x20the\x20first\x20matched\x20value',
    'strictEqual',
    '`_.indexOf`\x20should\x20work\x20with\x20a\x20`fromIndex`\x20>=\x20`length`',
    'pow',
    'constant',
    'deepStrictEqual',
    '`_.indexOf`\x20should\x20work\x20with\x20a\x20negative\x20`fromIndex`',
    '`_.indexOf`\x20should\x20work\x20with\x20a\x20negative\x20`fromIndex`\x20<=\x20`-length`',
    'map',
    '`_.indexOf`\x20should\x20treat\x20falsey\x20`fromIndex`\x20values\x20as\x20`0`',
    '686769yOBAbd',
    '1xZWTaA',
    '17qXXrUK',
    '6364CGdOLs',
    '163206ISfLEE',
    '6815KYtYPZ',
    '81ZIZhKi',
    '363547hmVMZs',
    '560014FABmIh',
    '142391ybkDix',
    '1vCzNTV',
    'indexOf'
];
var _0x4f0bc3 = _0x5b5c;
(function (_0x3e0997, _0x38cedd) {
    var _0x4cfeba = _0x5b5c;
    while (!![]) {
        try {
            var _0x29d8f1 = parseInt(_0x4cfeba(0xc5)) * parseInt(_0x4cfeba(0xc6)) + -parseInt(_0x4cfeba(0xc7)) * parseInt(_0x4cfeba(0xc8)) + parseInt(_0x4cfeba(0xc9)) + -parseInt(_0x4cfeba(0xca)) * -parseInt(_0x4cfeba(0xcb)) + -parseInt(_0x4cfeba(0xcc)) + -parseInt(_0x4cfeba(0xcd)) + -parseInt(_0x4cfeba(0xce)) * -parseInt(_0x4cfeba(0xcf));
            if (_0x29d8f1 === _0x38cedd)
                break;
            else
                _0x3e0997['push'](_0x3e0997['shift']());
        } catch (_0x4b466a) {
            _0x3e0997['push'](_0x3e0997['shift']());
        }
    }
}(_0x3bc3, 0x7d278));
import _0x10ddca from 'assert';
import _0x2c575a from 'lodash';
import {
    stubZero,
    falsey
} from './utils.js';
function _0x5b5c(_0x3f2c1e, _0x476f94) {
    return _0x5b5c = function (_0x3bc36f, _0x5b5c9c) {
        _0x3bc36f = _0x3bc36f - 0xc5;
        var _0x5eb7a9 = _0x3bc3[_0x3bc36f];
        return _0x5eb7a9;
    }, _0x5b5c(_0x3f2c1e, _0x476f94);
}
import _0x20955d from '../indexOf.js';
describe(_0x4f0bc3(0xd0), function () {
    var _0x1885ef = _0x4f0bc3, _0x3a6dc7 = [
            0x1,
            0x2,
            0x3,
            0x1,
            0x2,
            0x3
        ];
    it(_0x1885ef(0xd1), function () {
        var _0x65735f = _0x1885ef;
        _0x10ddca[_0x65735f(0xd2)](_0x20955d(_0x3a6dc7, 0x3), 0x2);
    }), it('`_.indexOf`\x20should\x20work\x20with\x20a\x20positive\x20`fromIndex`', function () {
        var _0x3800d8 = _0x1885ef;
        _0x10ddca[_0x3800d8(0xd2)](_0x20955d(_0x3a6dc7, 0x1, 0x2), 0x3);
    }), it(_0x1885ef(0xd3), function () {
        var _0x3e39d8 = _0x1885ef, _0x36971f = [
                0x6,
                0x8,
                Math[_0x3e39d8(0xd4)](0x2, 0x20),
                Infinity
            ], _0x5a2925 = _0x2c575a['map'](_0x36971f, _0x2c575a[_0x3e39d8(0xd5)]([
                -0x1,
                -0x1,
                -0x1
            ])), _0x13e7b2 = _0x2c575a['map'](_0x36971f, function (_0x53e9d3) {
                return [
                    _0x20955d(_0x3a6dc7, undefined, _0x53e9d3),
                    _0x20955d(_0x3a6dc7, 0x1, _0x53e9d3),
                    _0x20955d(_0x3a6dc7, '', _0x53e9d3)
                ];
            });
        _0x10ddca[_0x3e39d8(0xd6)](_0x13e7b2, _0x5a2925);
    }), it(_0x1885ef(0xd7), function () {
        _0x10ddca['strictEqual'](_0x20955d(_0x3a6dc7, 0x2, -0x3), 0x4);
    }), it(_0x1885ef(0xd8), function () {
        var _0x4d58a2 = _0x1885ef, _0x5ab9fe = [
                -0x6,
                -0x8,
                -Infinity
            ], _0x44ce54 = _0x2c575a['map'](_0x5ab9fe, stubZero), _0x23f9d1 = _0x2c575a[_0x4d58a2(0xd9)](_0x5ab9fe, function (_0x27af8f) {
                return _0x20955d(_0x3a6dc7, 0x1, _0x27af8f);
            });
        _0x10ddca[_0x4d58a2(0xd6)](_0x23f9d1, _0x44ce54);
    }), it(_0x1885ef(0xda), function () {
        var _0x2794ff = _0x1885ef, _0x5e7818 = _0x2c575a[_0x2794ff(0xd9)](falsey, stubZero), _0x24badd = _0x2c575a['map'](falsey, function (_0x24f3e6) {
                return _0x20955d(_0x3a6dc7, 0x1, _0x24f3e6);
            });
        _0x10ddca[_0x2794ff(0xd6)](_0x24badd, _0x5e7818);
    }), it('`_.indexOf`\x20should\x20coerce\x20`fromIndex`\x20to\x20an\x20integer', function () {
        _0x10ddca['strictEqual'](_0x20955d(_0x3a6dc7, 0x2, 1.2), 0x1);
    });
});
