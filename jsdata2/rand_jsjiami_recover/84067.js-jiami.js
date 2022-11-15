'use strict';
var oN = require('./O(n)');
var es6Repeat = require('./es6Repeat');
var current = require('../');
var Benchmark = require('benchmark');
var str = 'abcd';
var len = 100;
function buildSuite(_0x19919b, _0x385a17, _0x137415) {
    var _0x4749dc = '3|1|0|2|4|5'['split']('|'), _0x33b61c = 0;
    while (!![]) {
        switch (_0x4749dc[_0x33b61c++]) {
        case '0':
            var _0x54fe7e = new Benchmark['Suite']();
            continue;
        case '1':
            console['log'](_0x19919b);
            continue;
        case '2':
            Object['keys'](_0x385a17)['forEach'](function (_0x5992aa) {
                _0x54fe7e['add'](_0x5992aa, function () {
                    _0x385a17[_0x5992aa]['apply'](null, _0x137415);
                });
            });
            continue;
        case '3':
            var _0x5965d9 = {
                'DfzNV': 'Fastest is ',
                'eIZwt': 'name'
            };
            continue;
        case '4':
            _0x54fe7e['on']('cycle', function (_0x38bf83) {
                console['log'](String(_0x38bf83['target']));
            })['on']('complete', function () {
                console['log'](_0x5965d9['DfzNV'] + this['filter']('fastest')['map'](_0x5965d9['eIZwt']));
            });
            continue;
        case '5':
            return _0x54fe7e;
        }
        break;
    }
}
var fns = {
    'O(n)': oN,
    'ES6 Repeat': es6Repeat,
    'Current': current
};
buildSuite('-> pad 100 spaces to str of len 4', fns, [
    'abcd',
    104,
    ' '
])['run']();
buildSuite('-> pad 10 spaces to str of len 4', fns, [
    'abcd',
    14,
    ' '
])['run']();
buildSuite('-> pad 9 spaces to str of len 4', fns, [
    'abcd',
    13,
    ' '
])['run']();
buildSuite('-> pad 100 to str of len 100', fns, [
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    200,
    ' '
])['run']();
buildSuite('-> pad 10 to str of len 100', fns, [
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    110,
    ' '
])['run']();
buildSuite('-> pad 9 to str of len 100', fns, [
    '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789',
    109,
    ' '
])['run']();