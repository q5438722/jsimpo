'use strict';
var fs = require('fs'), _dirtyFilesCache = {};
function clearDirtyFilesCache() {
    _dirtyFilesCache = {};
}
function updateDirtyFilesCache(_0xe8b54c, _0x370358) {
    if (_0x370358) {
        if ('LhUlq' === 'LhUlq') {
            _dirtyFilesCache[_0xe8b54c] = !![];
        } else {
            content = data;
        }
    } else {
        if ('hRuEP' === 'WSvKz') {
            _dirtyFilesCache[_0xe8b54c] = !![];
        } else {
            if (_dirtyFilesCache[_0xe8b54c]) {
                delete _dirtyFilesCache[_0xe8b54c];
            }
        }
    }
}
function _readFile(_0x42c2c9, _0x20d997) {
    fs['readFile'](_0x42c2c9, 'utf8', function (_0x159145, _0x24ec9c) {
        var _0x43d983 = '';
        if (!_0x159145) {
            _0x43d983 = _0x24ec9c;
        }
        _0x20d997['apply'](null, [
            _0x42c2c9,
            _0x43d983
        ]);
    });
}
function extractContent(_0x41c868, _0x17b7c3, _0x47f7c7) {
    _0x47f7c7['apply'](null, [_0x41c868]);
}
exports['extractContent'] = extractContent;
exports['clearFilesCache'] = clearDirtyFilesCache;
exports['updateFilesCache'] = updateDirtyFilesCache;