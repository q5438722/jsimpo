var _0x2eb0 = [
    'prototype',
    'hasOwnProperty',
    'call',
    'exports',
    '271399XqZHiA',
    '4deXawl',
    '791062TUIEBk',
    '4911ewBFvF',
    '67pRjLaA',
    '148094ZlmegG',
    '1235045lINbHZ',
    '1238478pnpoGM',
    '1989837MacLCp',
    'versions',
    'node',
    'split',
    'length',
    'boolean',
    'object',
    './core.json'
];
var _0x1863ba = _0x5347;
(function (_0x58eba6, _0x472262) {
    var _0xdba89e = _0x5347;
    while (!![]) {
        try {
            var _0xc5ddf8 = parseInt(_0xdba89e(0x11d)) * -parseInt(_0xdba89e(0x11e)) + parseInt(_0xdba89e(0x11f)) + -parseInt(_0xdba89e(0x120)) * -parseInt(_0xdba89e(0x121)) + parseInt(_0xdba89e(0x122)) + parseInt(_0xdba89e(0x123)) + parseInt(_0xdba89e(0x124)) + -parseInt(_0xdba89e(0x125));
            if (_0xc5ddf8 === _0x472262)
                break;
            else
                _0x58eba6['push'](_0x58eba6['shift']());
        } catch (_0x1135aa) {
            _0x58eba6['push'](_0x58eba6['shift']());
        }
    }
}(_0x2eb0, 0xa2aab));
var current = process[_0x1863ba(0x126)] && process[_0x1863ba(0x126)][_0x1863ba(0x127)] && process['versions'][_0x1863ba(0x127)][_0x1863ba(0x128)]('.') || [];
function specifierIncluded(_0x370f94) {
    var _0x5e83c0 = _0x1863ba, _0xcf24cc = _0x370f94['split']('\x20'), _0x5e4586 = _0xcf24cc[_0x5e83c0(0x129)] > 0x1 ? _0xcf24cc[0x0] : '=', _0x1ab182 = (_0xcf24cc[_0x5e83c0(0x129)] > 0x1 ? _0xcf24cc[0x1] : _0xcf24cc[0x0])[_0x5e83c0(0x128)]('.');
    for (var _0x155daf = 0x0; _0x155daf < 0x3; ++_0x155daf) {
        var _0xc243cc = Number(current[_0x155daf] || 0x0), _0x1be99d = Number(_0x1ab182[_0x155daf] || 0x0);
        if (_0xc243cc === _0x1be99d)
            continue;
        if (_0x5e4586 === '<')
            return _0xc243cc < _0x1be99d;
        else
            return _0x5e4586 === '>=' ? _0xc243cc >= _0x1be99d : ![];
    }
    return _0x5e4586 === '>=';
}
function matchesRange(_0xa33af6) {
    var _0x5c96da = _0x1863ba, _0x2a1f04 = _0xa33af6[_0x5c96da(0x128)](/ ?&& ?/);
    if (_0x2a1f04[_0x5c96da(0x129)] === 0x0)
        return ![];
    for (var _0x480a95 = 0x0; _0x480a95 < _0x2a1f04[_0x5c96da(0x129)]; ++_0x480a95) {
        if (!specifierIncluded(_0x2a1f04[_0x480a95]))
            return ![];
    }
    return !![];
}
function versionIncluded(_0x1bf60f) {
    var _0x2cf960 = _0x1863ba;
    if (typeof _0x1bf60f === _0x2cf960(0x12a))
        return _0x1bf60f;
    if (_0x1bf60f && typeof _0x1bf60f === _0x2cf960(0x12b)) {
        for (var _0x1d4bfa = 0x0; _0x1d4bfa < _0x1bf60f[_0x2cf960(0x129)]; ++_0x1d4bfa) {
            if (matchesRange(_0x1bf60f[_0x1d4bfa]))
                return !![];
        }
        return ![];
    }
    return matchesRange(_0x1bf60f);
}
var data = require(_0x1863ba(0x12c)), core = {};
for (var mod in data) {
    Object[_0x1863ba(0x12d)][_0x1863ba(0x12e)][_0x1863ba(0x12f)](data, mod) && (core[mod] = versionIncluded(data[mod]));
}
function _0x5347(_0x1f7813, _0x2ad632) {
    return _0x5347 = function (_0x2eb036, _0x5347d3) {
        _0x2eb036 = _0x2eb036 - 0x11d;
        var _0x3c0565 = _0x2eb0[_0x2eb036];
        return _0x3c0565;
    }, _0x5347(_0x1f7813, _0x2ad632);
}
module[_0x1863ba(0x130)] = core;
