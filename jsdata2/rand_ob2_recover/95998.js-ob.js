var fs = require('fs'), _dirtyFilesCache = {};
function clearDirtyFilesCache() {
    _dirtyFilesCache = {};
}
function updateDirtyFilesCache(_0x27695a, _0x41742a) {
    _0x41742a ? _dirtyFilesCache[_0x27695a] = !![] : _dirtyFilesCache[_0x27695a] && delete _dirtyFilesCache[_0x27695a];
}
function _readFile(_0x36b155, _0x5aa029) {
    var _0x3036ec = _0x2f63;
    fs[_0x3036ec(228)](_0x36b155, _0x3036ec(229), function (_0x4358a1, _0x31aa93) {
        var _0x53ce55 = '';
        !_0x4358a1 && (_0x53ce55 = _0x31aa93), _0x5aa029['apply'](null, [
            _0x36b155,
            _0x53ce55
        ]);
    });
}
function _0x2f63(_0x506ad5, _0xa2ffff) {
    return _0x2f63 = function (_0x5510e6, _0x2f6305) {
        _0x5510e6 = _0x5510e6 - 218;
        var _0x205378 = _0x5510[_0x5510e6];
        return _0x205378;
    }, _0x2f63(_0x506ad5, _0xa2ffff);
}
function extractContent(_0x3f4be2, _0x51857b, _0x598ae7) {
    var _0x4c27ab = _0x2f63;
    _0x598ae7[_0x4c27ab(230)](null, [_0x3f4be2]);
}
exports[_0x11fe67(231)] = extractContent, exports[_0x11fe67(232)] = clearDirtyFilesCache, exports['updateFilesCache'] = updateDirtyFilesCache;