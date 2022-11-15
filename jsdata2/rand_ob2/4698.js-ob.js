'use strict';
var _0x5233 = [
    '344252QsjXAL',
    '1uElAAj',
    '696194vyCMsS',
    '32043wvIEaz',
    '17Jadodj',
    '1okrwtM',
    '220171gqdvJf',
    '280265DexRSs',
    'version',
    'indexOf',
    'v1.8.',
    'exports',
    'function',
    'nextTick',
    'call',
    'length',
    'apply',
    '663899yVDXFp',
    '1HjftnA',
    '1IUmWIH',
    '13433nfpueB'
];
function _0x1517(_0x124f6e, _0x2b1f8f) {
    return _0x1517 = function (_0x5233e1, _0x1517bf) {
        _0x5233e1 = _0x5233e1 - 0x81;
        var _0x4f8a52 = _0x5233[_0x5233e1];
        return _0x4f8a52;
    }, _0x1517(_0x124f6e, _0x2b1f8f);
}
var _0x53e736 = _0x1517;
(function (_0x1d9206, _0x5cd75c) {
    var _0x5c824f = _0x1517;
    while (!![]) {
        try {
            var _0x19f6d3 = -parseInt(_0x5c824f(0x81)) * -parseInt(_0x5c824f(0x82)) + parseInt(_0x5c824f(0x83)) * -parseInt(_0x5c824f(0x84)) + -parseInt(_0x5c824f(0x85)) + parseInt(_0x5c824f(0x86)) * parseInt(_0x5c824f(0x87)) + parseInt(_0x5c824f(0x88)) * -parseInt(_0x5c824f(0x89)) + -parseInt(_0x5c824f(0x8a)) * parseInt(_0x5c824f(0x8b)) + parseInt(_0x5c824f(0x8c));
            if (_0x19f6d3 === _0x5cd75c)
                break;
            else
                _0x1d9206['push'](_0x1d9206['shift']());
        } catch (_0x33f5c3) {
            _0x1d9206['push'](_0x1d9206['shift']());
        }
    }
}(_0x5233, 0x7e68b));
!process[_0x53e736(0x8d)] || process['version'][_0x53e736(0x8e)]('v0.') === 0x0 || process[_0x53e736(0x8d)]['indexOf']('v1.') === 0x0 && process['version']['indexOf'](_0x53e736(0x8f)) !== 0x0 ? module[_0x53e736(0x90)] = { 'nextTick': nextTick } : module[_0x53e736(0x90)] = process;
function nextTick(_0x1f6401, _0x1d2cfb, _0x52b67f, _0x3d8521) {
    var _0x3694bf = _0x53e736;
    if (typeof _0x1f6401 !== _0x3694bf(0x91))
        throw new TypeError('\x22callback\x22\x20argument\x20must\x20be\x20a\x20function');
    var _0x1cb7b8 = arguments['length'], _0x20fed3, _0x2363be;
    switch (_0x1cb7b8) {
    case 0x0:
    case 0x1:
        return process['nextTick'](_0x1f6401);
    case 0x2:
        return process[_0x3694bf(0x92)](function _0x4e6661() {
            var _0x5e8ca4 = _0x3694bf;
            _0x1f6401[_0x5e8ca4(0x93)](null, _0x1d2cfb);
        });
    case 0x3:
        return process[_0x3694bf(0x92)](function _0x330a98() {
            _0x1f6401['call'](null, _0x1d2cfb, _0x52b67f);
        });
    case 0x4:
        return process[_0x3694bf(0x92)](function _0x321f0e() {
            var _0xe86c1d = _0x3694bf;
            _0x1f6401[_0xe86c1d(0x93)](null, _0x1d2cfb, _0x52b67f, _0x3d8521);
        });
    default:
        _0x20fed3 = new Array(_0x1cb7b8 - 0x1), _0x2363be = 0x0;
        while (_0x2363be < _0x20fed3[_0x3694bf(0x94)]) {
            _0x20fed3[_0x2363be++] = arguments[_0x2363be];
        }
        return process[_0x3694bf(0x92)](function _0x523622() {
            var _0x8dccf6 = _0x3694bf;
            _0x1f6401[_0x8dccf6(0x95)](null, _0x20fed3);
        });
    }
}
