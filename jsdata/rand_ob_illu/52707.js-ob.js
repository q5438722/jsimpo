'use strict';

const _0x11ec = ['nargs for append actions must be > 0; if arg ', 'strings are not supplying the value to append, ', 'the append const action may be more appropriate', 'UKkRI', 'nargs', 'BNrEt', 'enPsI', 'tMDFc', 'constant', 'haZTa', 'OPTIONAL', 'nargs must be OPTIONAL to supply const', 'call', 'inherits', 'prototype', 'dest', 'slice', 'push', 'set', '151rATzXn', '8989lAYvSr', '1220081UKZXyQ', '2BxObMu', '659045BUTchr', '46fjFuSO', '30540wUPSgM', '470516LccGpK', '1891486MYFhfc', '2050507Zojxyu', '../action', '../const', 'exports'];

function _0x3def(_0x53fe0f, _0x4a9f8e) {
    return _0x3def = function (_0x407ffb, _0x5a6fcb) {
        _0x407ffb = _0x407ffb - 246;
        const _0x49482e = _0x11ec[_0x407ffb];

        return _0x49482e;
    }, _0x3def(_0x53fe0f, _0x4a9f8e);
}
const _0x43da0e = _0x3def;

(function (_0x39f996, _0x331737) {
    const _0x152128 = _0x3def;

    while (true) {
        try {
            const _0x49ddda = parseInt(_0x152128(0xf6)) * -parseInt(_0x152128(0xf7)) + -parseInt(_0x152128(0xf8)) + parseInt(_0x152128(0xf9)) * -parseInt(_0x152128(0xfa)) + parseInt(_0x152128(0xfb)) * parseInt(_0x152128(0xfc)) + -parseInt(_0x152128(0xfd)) + parseInt(_0x152128(0xfe)) + parseInt(_0x152128(0xff));

            if (_0x49ddda === _0x331737) break;else _0x39f996.push(_0x39f996.shift());
        } catch (_0x255e06) {
            _0x39f996.push(_0x39f996.shift());
        }
    }
})(_0x11ec, 980807);

const util = require('util');

const Action = require(_0x43da0e(0x100));

const c = require(_0x43da0e(0x101));

const ActionAppend = module[_0x43da0e(0x102)] = function ActionAppend(_0x216c6c) {
    const _0x143d3b = _0x43da0e;
    const _0x504cec = {
        'UKkRI': function (_0x20da39, _0x2e0902) {
            return _0x20da39 <= _0x2e0902;
        },
        'BNrEt': function (_0x21816f, _0x389e1c) {
            return _0x21816f + _0x389e1c;
        },
        'enPsI': function (_0x63173a, _0x500684) {
            return _0x63173a + _0x500684;
        },
        'tMDFc': _0x143d3b(0x103),
        'iuiDN': _0x143d3b(0x104),
        'LsMkF': _0x143d3b(0x105),
        'haZTa': function (_0x22b5b7, _0x1f2a83) {
            return _0x22b5b7 !== _0x1f2a83;
        }
    };

    _0x216c6c = _0x216c6c || {};
    if (_0x504cec[_0x143d3b(0x106)](this[_0x143d3b(0x107)], 0)) throw new Error(_0x504cec[_0x143d3b(0x108)](_0x504cec[_0x143d3b(0x109)](_0x504cec[_0x143d3b(0x10a)], _0x504cec.iuiDN), _0x504cec.LsMkF));
    if (!!this[_0x143d3b(0x10b)] && _0x504cec[_0x143d3b(0x10c)](this.nargs, c[_0x143d3b(0x10d)])) throw new Error(_0x143d3b(0x10e));
    Action[_0x143d3b(0x10f)](this, _0x216c6c);
};

util[_0x43da0e(0x110)](ActionAppend, Action), ActionAppend[_0x43da0e(0x111)][_0x43da0e(0x10f)] = function (_0x581c08, _0x40b73a, _0x589144) {
    const _0x3bc11c = _0x43da0e;

    const _0x11f904 = (_0x40b73a[this[_0x3bc11c(0x112)]] || [])[_0x3bc11c(0x113)]();

    _0x11f904[_0x3bc11c(0x114)](_0x589144), _0x40b73a[_0x3bc11c(0x115)](this.dest, _0x11f904);
};
