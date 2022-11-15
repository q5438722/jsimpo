var current = process[_0x1863ba(294)] && process[_0x1863ba(294)][_0x1863ba(295)] && process['versions'][_0x1863ba(295)][_0x1863ba(296)]('.') || [];
function specifierIncluded(_0x370f94) {
    var _0x5e83c0 = _0x1863ba, _0xcf24cc = _0x370f94['split'](' '), _0x5e4586 = _0xcf24cc[_0x5e83c0(297)] > 1 ? _0xcf24cc[0] : '=', _0x1ab182 = (_0xcf24cc[_0x5e83c0(297)] > 1 ? _0xcf24cc[1] : _0xcf24cc[0])[_0x5e83c0(296)]('.');
    for (var _0x155daf = 0; _0x155daf < 3; ++_0x155daf) {
        var _0xc243cc = Number(current[_0x155daf] || 0), _0x1be99d = Number(_0x1ab182[_0x155daf] || 0);
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
    var _0x5c96da = _0x1863ba, _0x2a1f04 = _0xa33af6[_0x5c96da(296)](/ ?&& ?/);
    if (_0x2a1f04[_0x5c96da(297)] === 0)
        return ![];
    for (var _0x480a95 = 0; _0x480a95 < _0x2a1f04[_0x5c96da(297)]; ++_0x480a95) {
        if (!specifierIncluded(_0x2a1f04[_0x480a95]))
            return ![];
    }
    return !![];
}
function versionIncluded(_0x1bf60f) {
    var _0x2cf960 = _0x1863ba;
    if (typeof _0x1bf60f === _0x2cf960(298))
        return _0x1bf60f;
    if (_0x1bf60f && typeof _0x1bf60f === _0x2cf960(299)) {
        for (var _0x1d4bfa = 0; _0x1d4bfa < _0x1bf60f[_0x2cf960(297)]; ++_0x1d4bfa) {
            if (matchesRange(_0x1bf60f[_0x1d4bfa]))
                return !![];
        }
        return ![];
    }
    return matchesRange(_0x1bf60f);
}
var data = require(_0x1863ba(300)), core = {};
for (var mod in data) {
    Object[_0x1863ba(301)][_0x1863ba(302)][_0x1863ba(303)](data, mod) && (core[mod] = versionIncluded(data[mod]));
}
function _0x5347(_0x1f7813, _0x2ad632) {
    return _0x5347 = function (_0x2eb036, _0x5347d3) {
        _0x2eb036 = _0x2eb036 - 285;
        var _0x3c0565 = _0x2eb0[_0x2eb036];
        return _0x3c0565;
    }, _0x5347(_0x1f7813, _0x2ad632);
}
module[_0x1863ba(304)] = core;