'use strict';
var _0x522e = [
    'push',
    'dest',
    '54052zDupnf',
    '1069492BcfGea',
    '1242762jOxRdU',
    '299658FHZNpD',
    '5vHovbR',
    '231664JlzCQK',
    '1087540IqvZoY',
    '900391eWWhsp',
    'util',
    '../action',
    'exports',
    'nargs',
    'the\x20append\x20const\x20action\x20may\x20be\x20more\x20appropriate',
    'constant',
    'OPTIONAL',
    'nargs\x20must\x20be\x20OPTIONAL\x20to\x20supply\x20const',
    'call',
    'inherits',
    'slice'
];
var _0x4b68d1 = _0x2120;
(function (_0x426827, _0x25e01c) {
    var _0x2d44d2 = _0x2120;
    while (!![]) {
        try {
            var _0x2dfdfa = parseInt(_0x2d44d2(0x1c0)) + parseInt(_0x2d44d2(0x1c1)) + parseInt(_0x2d44d2(0x1c2)) + -parseInt(_0x2d44d2(0x1c3)) * parseInt(_0x2d44d2(0x1c4)) + -parseInt(_0x2d44d2(0x1c5)) + parseInt(_0x2d44d2(0x1c6)) + -parseInt(_0x2d44d2(0x1c7));
            if (_0x2dfdfa === _0x25e01c)
                break;
            else
                _0x426827['push'](_0x426827['shift']());
        } catch (_0x2d26a3) {
            _0x426827['push'](_0x426827['shift']());
        }
    }
}(_0x522e, 0xc90cd));
var util = require(_0x4b68d1(0x1c8)), Action = require(_0x4b68d1(0x1c9)), c = require('../const'), ActionAppend = module[_0x4b68d1(0x1ca)] = function ActionAppend(_0x1dd78d) {
        var _0x380868 = _0x4b68d1;
        _0x1dd78d = _0x1dd78d || {};
        if (this[_0x380868(0x1cb)] <= 0x0)
            throw new Error('nargs\x20for\x20append\x20actions\x20must\x20be\x20>\x200;\x20if\x20arg\x20' + 'strings\x20are\x20not\x20supplying\x20the\x20value\x20to\x20append,\x20' + _0x380868(0x1cc));
        if (!!this[_0x380868(0x1cd)] && this[_0x380868(0x1cb)] !== c[_0x380868(0x1ce)])
            throw new Error(_0x380868(0x1cf));
        Action[_0x380868(0x1d0)](this, _0x1dd78d);
    };
function _0x2120(_0x4fc25f, _0x275767) {
    return _0x2120 = function (_0x522e77, _0x212016) {
        _0x522e77 = _0x522e77 - 0x1c0;
        var _0x278b6c = _0x522e[_0x522e77];
        return _0x278b6c;
    }, _0x2120(_0x4fc25f, _0x275767);
}
util[_0x4b68d1(0x1d1)](ActionAppend, Action), ActionAppend['prototype'][_0x4b68d1(0x1d0)] = function (_0x4d5b5b, _0x26d729, _0x1dea71) {
    var _0x3462ad = _0x4b68d1, _0x6d0122 = (_0x26d729[this['dest']] || [])[_0x3462ad(0x1d2)]();
    _0x6d0122[_0x3462ad(0x1d3)](_0x1dea71), _0x26d729['set'](this[_0x3462ad(0x1d4)], _0x6d0122);
};
