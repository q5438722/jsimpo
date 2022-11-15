'use strict';
var _0x463b = [
    'Suite',
    'keys',
    'forEach',
    'add',
    'target',
    'complete',
    'map',
    'name',
    '->\x20pad\x20100\x20spaces\x20to\x20str\x20of\x20len\x204',
    'run',
    '->\x20pad\x2010\x20spaces\x20to\x20str\x20of\x20len\x204',
    '->\x20pad\x209\x20spaces\x20to\x20str\x20of\x20len\x204',
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    '->\x20pad\x2010\x20to\x20str\x20of\x20len\x20100',
    '50yDqwpu',
    '10607bcsMun',
    '2fDkIXk',
    '167024FWowqj',
    '3ZEXjnt',
    '353963SOucSk',
    '447779omIMNF',
    '3zQxTQM',
    '252101OQLhfF',
    '622933uZFqhm',
    '463424pCFlfy',
    '../',
    'benchmark',
    'abcd',
    'log'
];
var _0x48f41b = _0x2d63;
(function (_0x34f185, _0x61a755) {
    var _0x32ac56 = _0x2d63;
    while (!![]) {
        try {
            var _0x36407d = parseInt(_0x32ac56(0x164)) * -parseInt(_0x32ac56(0x165)) + parseInt(_0x32ac56(0x166)) * -parseInt(_0x32ac56(0x167)) + parseInt(_0x32ac56(0x168)) * parseInt(_0x32ac56(0x169)) + -parseInt(_0x32ac56(0x16a)) + parseInt(_0x32ac56(0x16b)) * parseInt(_0x32ac56(0x16c)) + parseInt(_0x32ac56(0x16d)) + -parseInt(_0x32ac56(0x16e));
            if (_0x36407d === _0x61a755)
                break;
            else
                _0x34f185['push'](_0x34f185['shift']());
        } catch (_0x594e21) {
            _0x34f185['push'](_0x34f185['shift']());
        }
    }
}(_0x463b, 0xa27b4));
var oN = require('./O(n)'), es6Repeat = require('./es6Repeat'), current = require(_0x48f41b(0x16f)), Benchmark = require(_0x48f41b(0x170)), str = _0x48f41b(0x171), len = 0x64;
function _0x2d63(_0x4c781c, _0x3ce2fb) {
    return _0x2d63 = function (_0x463b0b, _0x2d636b) {
        _0x463b0b = _0x463b0b - 0x164;
        var _0xa09975 = _0x463b[_0x463b0b];
        return _0xa09975;
    }, _0x2d63(_0x4c781c, _0x3ce2fb);
}
function buildSuite(_0x59601a, _0x100690, _0x5d6747) {
    var _0x13037f = _0x48f41b;
    console[_0x13037f(0x172)](_0x59601a);
    var _0x58ae26 = new Benchmark[(_0x13037f(0x173))]();
    return Object[_0x13037f(0x174)](_0x100690)[_0x13037f(0x175)](function (_0x38f016) {
        var _0x275256 = _0x13037f;
        _0x58ae26[_0x275256(0x176)](_0x38f016, function () {
            _0x100690[_0x38f016]['apply'](null, _0x5d6747);
        });
    }), _0x58ae26['on']('cycle', function (_0x16d221) {
        var _0x29031f = _0x13037f;
        console[_0x29031f(0x172)](String(_0x16d221[_0x29031f(0x177)]));
    })['on'](_0x13037f(0x178), function () {
        var _0x362dbe = _0x13037f;
        console[_0x362dbe(0x172)]('Fastest\x20is\x20' + this['filter']('fastest')[_0x362dbe(0x179)](_0x362dbe(0x17a)));
    }), _0x58ae26;
}
var fns = {
    'O(n)': oN,
    'ES6\x20Repeat': es6Repeat,
    'Current': current
};
buildSuite(_0x48f41b(0x17b), fns, [
    _0x48f41b(0x171),
    0x68,
    '\x20'
])[_0x48f41b(0x17c)](), buildSuite(_0x48f41b(0x17d), fns, [
    _0x48f41b(0x171),
    0xe,
    '\x20'
])[_0x48f41b(0x17c)](), buildSuite(_0x48f41b(0x17e), fns, [
    'abcd',
    0xd,
    '\x20'
])[_0x48f41b(0x17c)](), buildSuite('->\x20pad\x20100\x20to\x20str\x20of\x20len\x20100', fns, [
    _0x48f41b(0x17f),
    0xc8,
    '\x20'
])[_0x48f41b(0x17c)](), buildSuite(_0x48f41b(0x180), fns, [
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    0x6e,
    '\x20'
])[_0x48f41b(0x17c)](), buildSuite('->\x20pad\x209\x20to\x20str\x20of\x20len\x20100', fns, [
    _0x48f41b(0x17f),
    0x6d,
    '\x20'
])['run']();
