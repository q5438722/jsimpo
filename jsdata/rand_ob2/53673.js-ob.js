'use strict';
const _0x8366 = [
    '113368FFDdOd',
    '1103350uRzDaM',
    '907GnlSwm',
    '470ZYnzaz',
    '697859KhZZMf',
    '66905kXMxZI',
    '7fVJVnM',
    '../common',
    'http',
    'mustNotCall',
    'listen',
    'mustCall',
    'request',
    'GET',
    '127.0.0.1',
    'port',
    'close',
    'error',
    'abort',
    'end',
    '1067636nbViOZ',
    '1ZPFYxJ',
    '101021koamnZ'
];
const _0xb10d56 = _0x20a2;
(function (_0x265151, _0xc39ba0) {
    const _0x52c08 = _0x20a2;
    while (!![]) {
        try {
            const _0x4831c0 = parseInt(_0x52c08(0x1eb)) + parseInt(_0x52c08(0x1ec)) * -parseInt(_0x52c08(0x1ed)) + parseInt(_0x52c08(0x1ee)) + -parseInt(_0x52c08(0x1ef)) + parseInt(_0x52c08(0x1f0)) * -parseInt(_0x52c08(0x1f1)) + parseInt(_0x52c08(0x1f2)) + -parseInt(_0x52c08(0x1f3)) * -parseInt(_0x52c08(0x1f4));
            if (_0x4831c0 === _0xc39ba0)
                break;
            else
                _0x265151['push'](_0x265151['shift']());
        } catch (_0x4ca48e) {
            _0x265151['push'](_0x265151['shift']());
        }
    }
}(_0x8366, 0xaeef9));
function _0x20a2(_0x1ec80c, _0x1cbaca) {
    return _0x20a2 = function (_0x83663e, _0x20a214) {
        _0x83663e = _0x83663e - 0x1eb;
        let _0x4bc008 = _0x8366[_0x83663e];
        return _0x4bc008;
    }, _0x20a2(_0x1ec80c, _0x1cbaca);
}
const common = require(_0xb10d56(0x1f5)), http = require(_0xb10d56(0x1f6)), server = http['createServer'](common[_0xb10d56(0x1f7)]());
server[_0xb10d56(0x1f8)](0x0, common[_0xb10d56(0x1f9)](() => {
    const _0x5946d9 = _0xb10d56, _0x35ec85 = http[_0x5946d9(0x1fa)]({
            'method': _0x5946d9(0x1fb),
            'host': _0x5946d9(0x1fc),
            'port': server['address']()[_0x5946d9(0x1fd)]
        });
    _0x35ec85['on']('abort', common[_0x5946d9(0x1f9)](() => {
        const _0x2ec38f = _0x5946d9;
        server[_0x2ec38f(0x1fe)]();
    })), _0x35ec85['on'](_0x5946d9(0x1ff), common[_0x5946d9(0x1f7)]()), _0x35ec85[_0x5946d9(0x200)](), _0x35ec85[_0x5946d9(0x201)]();
}));
