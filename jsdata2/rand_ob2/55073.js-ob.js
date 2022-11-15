'use strict';
const _0x28d1 = [
    '3779cQVqJt',
    '13qzUcgt',
    '63727AtlDdl',
    '3CxtuNO',
    '574645lbWbwe',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'mustCall',
    'close',
    'stream',
    'once',
    'timeout',
    'listen',
    'http://localhost:',
    'address',
    'port',
    'connect',
    'setTimeout',
    '142871EajuCL',
    '4kTRuRJ',
    '38065RJlPgA',
    '3QTLYMH',
    '50231LIJTkq',
    '444wFtvCT',
    '365WOybBi'
];
const _0x1de2f9 = _0x5c95;
(function (_0x57dd0f, _0xf04f6d) {
    const _0x48a992 = _0x5c95;
    while (!![]) {
        try {
            const _0x27cf30 = parseInt(_0x48a992(0x1a3)) + parseInt(_0x48a992(0x1a4)) * -parseInt(_0x48a992(0x1a5)) + -parseInt(_0x48a992(0x1a6)) * parseInt(_0x48a992(0x1a7)) + parseInt(_0x48a992(0x1a8)) * -parseInt(_0x48a992(0x1a9)) + -parseInt(_0x48a992(0x1aa)) * -parseInt(_0x48a992(0x1ab)) + parseInt(_0x48a992(0x1ac)) * -parseInt(_0x48a992(0x1ad)) + parseInt(_0x48a992(0x1ae));
            if (_0x27cf30 === _0xf04f6d)
                break;
            else
                _0x57dd0f['push'](_0x57dd0f['shift']());
        } catch (_0x282108) {
            _0x57dd0f['push'](_0x57dd0f['shift']());
        }
    }
}(_0x28d1, 0x1af71));
function _0x5c95(_0x22b2df, _0x54e5d4) {
    return _0x5c95 = function (_0x28d1d2, _0x5c9571) {
        _0x28d1d2 = _0x28d1d2 - 0x1a3;
        let _0x2d4c65 = _0x28d1[_0x28d1d2];
        return _0x2d4c65;
    }, _0x5c95(_0x22b2df, _0x54e5d4);
}
const common = require(_0x1de2f9(0x1af));
if (!common[_0x1de2f9(0x1b0)])
    common[_0x1de2f9(0x1b1)](_0x1de2f9(0x1b2));
const http2 = require('http2');
function testServerTimeout(_0xc4a7f8) {
    const _0x9f2966 = _0x1de2f9, _0x67be34 = http2['createServer']();
    _0xc4a7f8(_0x67be34);
    const _0x1eade3 = common[_0x9f2966(0x1b3)](_0x40adb9 => {
        const _0x1b3049 = _0x9f2966;
        _0x40adb9[_0x1b3049(0x1b4)]();
    });
    _0x67be34['on'](_0x9f2966(0x1b5), common['mustNotCall']()), _0x67be34[_0x9f2966(0x1b6)](_0x9f2966(0x1b7), _0x1eade3), _0x67be34[_0x9f2966(0x1b8)](0x0, common['mustCall'](() => {
        const _0x20453f = _0x9f2966, _0x6f804c = _0x20453f(0x1b9) + _0x67be34[_0x20453f(0x1ba)]()[_0x20453f(0x1bb)], _0xb5c23c = http2[_0x20453f(0x1bc)](_0x6f804c);
        _0xb5c23c['on']('close', common[_0x20453f(0x1b3)](() => {
            const _0x35bbad = _0x20453f, _0x5c4593 = http2['connect'](_0x6f804c);
            _0x5c4593['on']('close', common[_0x35bbad(0x1b3)](() => _0x67be34[_0x35bbad(0x1b4)]()));
        }));
    }));
}
const timeout = common['platformTimeout'](0x32);
testServerTimeout(_0x281f94 => _0x281f94[_0x1de2f9(0x1bd)](timeout)), testServerTimeout(_0x40a8e6 => _0x40a8e6['timeout'] = timeout);
