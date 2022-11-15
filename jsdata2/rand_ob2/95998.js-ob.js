'use strict';
var _0x5510 = [
    '7FepJfV',
    '62029GTDLVy',
    '1140836DrgDsv',
    '1355357SUIxlE',
    '74vuAtXW',
    '19217thswYC',
    '1005359VvVlNG',
    '4543442LntvWa',
    'readFile',
    'utf8',
    'apply',
    'extractContent',
    'clearFilesCache',
    '1bqAbmF',
    '703630kSpZEL'
];
var _0x11fe67 = _0x2f63;
(function (_0x3ef8eb, _0x213981) {
    var _0x336f23 = _0x2f63;
    while (!![]) {
        try {
            var _0x1775b9 = parseInt(_0x336f23(0xda)) * parseInt(_0x336f23(0xdb)) + parseInt(_0x336f23(0xdc)) * parseInt(_0x336f23(0xdd)) + -parseInt(_0x336f23(0xde)) + -parseInt(_0x336f23(0xdf)) + parseInt(_0x336f23(0xe0)) * -parseInt(_0x336f23(0xe1)) + -parseInt(_0x336f23(0xe2)) + parseInt(_0x336f23(0xe3));
            if (_0x1775b9 === _0x213981)
                break;
            else
                _0x3ef8eb['push'](_0x3ef8eb['shift']());
        } catch (_0x299e3c) {
            _0x3ef8eb['push'](_0x3ef8eb['shift']());
        }
    }
}(_0x5510, 0xb8fa1));
var fs = require('fs'), _dirtyFilesCache = {};
function clearDirtyFilesCache() {
    _dirtyFilesCache = {};
}
function updateDirtyFilesCache(_0x27695a, _0x41742a) {
    _0x41742a ? _dirtyFilesCache[_0x27695a] = !![] : _dirtyFilesCache[_0x27695a] && delete _dirtyFilesCache[_0x27695a];
}
function _readFile(_0x36b155, _0x5aa029) {
    var _0x3036ec = _0x2f63;
    fs[_0x3036ec(0xe4)](_0x36b155, _0x3036ec(0xe5), function (_0x4358a1, _0x31aa93) {
        var _0x53ce55 = '';
        !_0x4358a1 && (_0x53ce55 = _0x31aa93), _0x5aa029['apply'](null, [
            _0x36b155,
            _0x53ce55
        ]);
    });
}
function _0x2f63(_0x506ad5, _0xa2ffff) {
    return _0x2f63 = function (_0x5510e6, _0x2f6305) {
        _0x5510e6 = _0x5510e6 - 0xda;
        var _0x205378 = _0x5510[_0x5510e6];
        return _0x205378;
    }, _0x2f63(_0x506ad5, _0xa2ffff);
}
function extractContent(_0x3f4be2, _0x51857b, _0x598ae7) {
    var _0x4c27ab = _0x2f63;
    _0x598ae7[_0x4c27ab(0xe6)](null, [_0x3f4be2]);
}
exports[_0x11fe67(0xe7)] = extractContent, exports[_0x11fe67(0xe8)] = clearDirtyFilesCache, exports['updateFilesCache'] = updateDirtyFilesCache;
