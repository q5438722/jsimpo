define(function ConsoleAgent(_0x57205f, _0x5489a4, _0x16bd14) {
    'use strict';
    var _0x39989f = _0x1bfe;
    var _0x615678 = _0x57205f(_0x39989f(140)), _0x24c2b0;
    function _0x4a6fd8(_0x10cb85) {
        var _0x3d80ca = _0x39989f, _0x287e68 = _0x10cb85[_0x3d80ca(141)];
        _0x287e68 === 'warning' && (_0x287e68 = 'warn');
        var _0x3c830a = 'ConsoleAgent: ' + _0x10cb85['text'];
        _0x10cb85[_0x3d80ca(142)] && (_0x3c830a += ' (url: ' + _0x10cb85[_0x3d80ca(142)] + ')');
        if (_0x10cb85[_0x3d80ca(143)]) {
            var _0x3312f1 = _0x10cb85['stackTrace'][0];
            _0x3c830a += _0x3d80ca(144) + _0x3312f1[_0x3d80ca(145)] + ':' + _0x3312f1[_0x3d80ca(146)];
        }
        console[_0x287e68](_0x3c830a);
    }
    function _0x2779c6(_0x4234a9, _0x3a1ad5) {
        var _0x5f4ffd = _0x39989f;
        _0x24c2b0 = _0x3a1ad5[_0x5f4ffd(147)], _0x4a6fd8(_0x24c2b0);
    }
    function _0xe8df0b(_0x545957, _0x38beb1) {
        _0x24c2b0 && _0x4a6fd8(_0x24c2b0);
    }
    function _0x98160c(_0x2060ea, _0x357669) {
    }
    function _0x5e0313() {
        var _0x1e42d7 = _0x39989f;
        return _0x615678[_0x1e42d7(148)]['enable']();
    }
    function _0x9d26d2() {
        var _0x13498d = _0x39989f;
        _0x615678['Console']['on']('messageAdded.ConsoleAgent', _0x2779c6)['on'](_0x13498d(149), _0xe8df0b)['on'](_0x13498d(150), _0x98160c);
    }
    function _0xf1852c() {
        var _0x10f065 = _0x39989f;
        _0x615678[_0x10f065(148)][_0x10f065(151)](_0x10f065(152));
    }
    _0x5489a4[_0x39989f(153)] = _0x5e0313, _0x5489a4[_0x39989f(154)] = _0x9d26d2, _0x5489a4[_0x39989f(155)] = _0xf1852c;
});