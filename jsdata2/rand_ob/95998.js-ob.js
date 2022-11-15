'use strict';
var _0x3b36 = [
    'XBHKC',
    'apply',
    'extractContent',
    'clearFilesCache',
    'updateFilesCache',
    '234252WECDFh',
    '159155qhvGmb',
    '191195xLZPmE',
    '271JrkIER',
    '22AkrhgT',
    '2sjdFup',
    '55913VPkHKX',
    '217394OMAbjY',
    '314037umYFdH',
    'readFile'
];
var _0x389e73 = _0x1773;
function _0x1773(_0x8f2af2, _0x2ebd54) {
    return _0x1773 = function (_0x28009c, _0x2a3ea4) {
        _0x28009c = _0x28009c - (-0x2d * 0x25 + -0x16e * -0x10 + 0x3d * -0x3d);
        var _0x2d1570 = _0x3b36[_0x28009c];
        return _0x2d1570;
    }, _0x1773(_0x8f2af2, _0x2ebd54);
}
(function (_0x3f67f5, _0x26d631) {
    var _0x168acd = _0x1773;
    while (!![]) {
        try {
            var _0x57afa7 = -parseInt(_0x168acd(0x1d6)) + parseInt(_0x168acd(0x1d7)) + parseInt(_0x168acd(0x1d8)) + parseInt(_0x168acd(0x1d9)) * -parseInt(_0x168acd(0x1da)) + -parseInt(_0x168acd(0x1db)) * -parseInt(_0x168acd(0x1dc)) + parseInt(_0x168acd(0x1dd)) + -parseInt(_0x168acd(0x1de));
            if (_0x57afa7 === _0x26d631)
                break;
            else
                _0x3f67f5['push'](_0x3f67f5['shift']());
        } catch (_0x411461) {
            _0x3f67f5['push'](_0x3f67f5['shift']());
        }
    }
}(_0x3b36, 0x6557 * -0x6 + 0xd9f * -0x1b + 0x5b956));
var fs = require('fs'), _dirtyFilesCache = {};
function clearDirtyFilesCache() {
    _dirtyFilesCache = {};
}
function updateDirtyFilesCache(_0x3265eb, _0x166a79) {
    _0x166a79 ? _dirtyFilesCache[_0x3265eb] = !![] : _dirtyFilesCache[_0x3265eb] && delete _dirtyFilesCache[_0x3265eb];
}
function _readFile(_0x9f3250, _0x5914ea) {
    var _0x314a0c = _0x1773, _0x363cbd = { 'XBHKC': 'utf8' };
    fs[_0x314a0c(0x1df)](_0x9f3250, _0x363cbd[_0x314a0c(0x1e0)], function (_0x5670ee, _0x54c0e6) {
        var _0x1f8a40 = _0x314a0c, _0x61af1c = '';
        !_0x5670ee && (_0x61af1c = _0x54c0e6), _0x5914ea[_0x1f8a40(0x1e1)](null, [
            _0x9f3250,
            _0x61af1c
        ]);
    });
}
function extractContent(_0x563cab, _0xef347a, _0x23f975) {
    var _0x44a9d9 = _0x1773;
    _0x23f975[_0x44a9d9(0x1e1)](null, [_0x563cab]);
}
exports[_0x389e73(0x1e2)] = extractContent, exports[_0x389e73(0x1e3)] = clearDirtyFilesCache, exports[_0x389e73(0x1e4)] = updateDirtyFilesCache;
