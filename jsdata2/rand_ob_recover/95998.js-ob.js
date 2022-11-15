var fs = require('fs'), _dirtyFilesCache = {};
function clearDirtyFilesCache() {
    _dirtyFilesCache = {};
}
function updateDirtyFilesCache(_0x3265eb, _0x166a79) {
    _0x166a79 ? _dirtyFilesCache[_0x3265eb] = !![] : _dirtyFilesCache[_0x3265eb] && delete _dirtyFilesCache[_0x3265eb];
}
function _readFile(_0x9f3250, _0x5914ea) {
    var _0x314a0c = _0x1773, _0x363cbd = { 'XBHKC': 'utf8' };
    fs[_0x314a0c(479)](_0x9f3250, _0x363cbd[_0x314a0c(480)], function (_0x5670ee, _0x54c0e6) {
        var _0x1f8a40 = _0x314a0c, _0x61af1c = '';
        !_0x5670ee && (_0x61af1c = _0x54c0e6), _0x5914ea[_0x1f8a40(481)](null, [
            _0x9f3250,
            _0x61af1c
        ]);
    });
}
function extractContent(_0x563cab, _0xef347a, _0x23f975) {
    var _0x44a9d9 = _0x1773;
    _0x23f975[_0x44a9d9(481)](null, [_0x563cab]);
}
exports[_0x389e73(482)] = extractContent, exports[_0x389e73(483)] = clearDirtyFilesCache, exports[_0x389e73(484)] = updateDirtyFilesCache;