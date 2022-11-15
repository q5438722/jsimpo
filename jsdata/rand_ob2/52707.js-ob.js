'use strict';
var _0x49b3 = [
    '226JafxlQ',
    '75124WptJgk',
    '322466nhJKgv',
    '4119371GKQxPe',
    'util',
    '../action',
    '../const',
    'exports',
    'strings\x20are\x20not\x20supplying\x20the\x20value\x20to\x20append,\x20',
    'the\x20append\x20const\x20action\x20may\x20be\x20more\x20appropriate',
    'constant',
    'nargs',
    'nargs\x20must\x20be\x20OPTIONAL\x20to\x20supply\x20const',
    'call',
    'inherits',
    'prototype',
    'dest',
    'slice',
    'push',
    'set',
    '1LKiFPh',
    '998373xxWKUQ',
    '3OAxvSZ',
    '372858xiiWXh',
    '2yxbmPz',
    '600361AjLRMy',
    '7264aQoWvl'
];
var _0x3d874a = _0x227e;
(function (_0x234678, _0x540a4c) {
    var _0x2f11bf = _0x227e;
    while (!![]) {
        try {
            var _0x4d0430 = -parseInt(_0x2f11bf(0xf3)) * -parseInt(_0x2f11bf(0xf4)) + parseInt(_0x2f11bf(0xf5)) * -parseInt(_0x2f11bf(0xf6)) + -parseInt(_0x2f11bf(0xf7)) * parseInt(_0x2f11bf(0xf8)) + -parseInt(_0x2f11bf(0xf9)) * parseInt(_0x2f11bf(0xfa)) + parseInt(_0x2f11bf(0xfb)) + -parseInt(_0x2f11bf(0xfc)) + parseInt(_0x2f11bf(0xfd));
            if (_0x4d0430 === _0x540a4c)
                break;
            else
                _0x234678['push'](_0x234678['shift']());
        } catch (_0x5b65be) {
            _0x234678['push'](_0x234678['shift']());
        }
    }
}(_0x49b3, 0xde082));
function _0x227e(_0x4c0e42, _0x3a1d43) {
    return _0x227e = function (_0x49b376, _0x227e8b) {
        _0x49b376 = _0x49b376 - 0xf3;
        var _0x14d351 = _0x49b3[_0x49b376];
        return _0x14d351;
    }, _0x227e(_0x4c0e42, _0x3a1d43);
}
var util = require(_0x3d874a(0xfe)), Action = require(_0x3d874a(0xff)), c = require(_0x3d874a(0x100)), ActionAppend = module[_0x3d874a(0x101)] = function ActionAppend(_0x2d638b) {
        var _0x5121c9 = _0x3d874a;
        _0x2d638b = _0x2d638b || {};
        if (this['nargs'] <= 0x0)
            throw new Error('nargs\x20for\x20append\x20actions\x20must\x20be\x20>\x200;\x20if\x20arg\x20' + _0x5121c9(0x102) + _0x5121c9(0x103));
        if (!!this[_0x5121c9(0x104)] && this[_0x5121c9(0x105)] !== c['OPTIONAL'])
            throw new Error(_0x5121c9(0x106));
        Action[_0x5121c9(0x107)](this, _0x2d638b);
    };
util[_0x3d874a(0x108)](ActionAppend, Action), ActionAppend[_0x3d874a(0x109)][_0x3d874a(0x107)] = function (_0x412464, _0x344012, _0x41514c) {
    var _0x1a025b = _0x3d874a, _0x3dbc64 = (_0x344012[this[_0x1a025b(0x10a)]] || [])[_0x1a025b(0x10b)]();
    _0x3dbc64[_0x1a025b(0x10c)](_0x41514c), _0x344012[_0x1a025b(0x10d)](this[_0x1a025b(0x10a)], _0x3dbc64);
};
