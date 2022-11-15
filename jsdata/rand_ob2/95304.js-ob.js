var _0x3672 = [
    'messageRepeatCountUpdated.ConsoleAgent',
    'Console',
    'off',
    'enable',
    'load',
    '80540ypIvDp',
    '125inQXLy',
    '875pOwMQX',
    '32722sqPgZP',
    '28nBigfK',
    '1503QQAZzK',
    '192ZkdswV',
    '953nHxSIH',
    '195158NOmHfr',
    '116571JzROFB',
    'LiveDevelopment/Inspector/Inspector',
    'level',
    'warn',
    'ConsoleAgent:\x20',
    'url',
    '\x20(url:\x20',
    'stackTrace',
    '\x20in\x20',
    'functionName',
    'columnNumber',
    'message',
    'messageAdded.ConsoleAgent'
];
function _0x1dd8(_0x5e414e, _0x4a0a26) {
    return _0x1dd8 = function (_0x3672b2, _0x1dd8f8) {
        _0x3672b2 = _0x3672b2 - 0x150;
        var _0x108959 = _0x3672[_0x3672b2];
        return _0x108959;
    }, _0x1dd8(_0x5e414e, _0x4a0a26);
}
(function (_0x438623, _0x2b29ea) {
    var _0x4c365a = _0x1dd8;
    while (!![]) {
        try {
            var _0x502df6 = parseInt(_0x4c365a(0x150)) + -parseInt(_0x4c365a(0x151)) * parseInt(_0x4c365a(0x152)) + -parseInt(_0x4c365a(0x153)) + parseInt(_0x4c365a(0x154)) * parseInt(_0x4c365a(0x155)) + parseInt(_0x4c365a(0x156)) * -parseInt(_0x4c365a(0x157)) + parseInt(_0x4c365a(0x158)) + parseInt(_0x4c365a(0x159));
            if (_0x502df6 === _0x2b29ea)
                break;
            else
                _0x438623['push'](_0x438623['shift']());
        } catch (_0x1ce21a) {
            _0x438623['push'](_0x438623['shift']());
        }
    }
}(_0x3672, 0x1aae0), define(function ConsoleAgent(_0x5eb048, _0x518599, _0x38806f) {
    'use strict';
    var _0x18cb5b = _0x1dd8;
    var _0x4dd871 = _0x5eb048(_0x18cb5b(0x15a)), _0x1925e3;
    function _0x641830(_0x4aee57) {
        var _0x2127d1 = _0x18cb5b, _0x1c6cf4 = _0x4aee57[_0x2127d1(0x15b)];
        _0x1c6cf4 === 'warning' && (_0x1c6cf4 = _0x2127d1(0x15c));
        var _0x5918ec = _0x2127d1(0x15d) + _0x4aee57['text'];
        _0x4aee57[_0x2127d1(0x15e)] && (_0x5918ec += _0x2127d1(0x15f) + _0x4aee57[_0x2127d1(0x15e)] + ')');
        if (_0x4aee57[_0x2127d1(0x160)]) {
            var _0xb473f3 = _0x4aee57['stackTrace'][0x0];
            _0x5918ec += _0x2127d1(0x161) + _0xb473f3[_0x2127d1(0x162)] + ':' + _0xb473f3[_0x2127d1(0x163)];
        }
        console[_0x1c6cf4](_0x5918ec);
    }
    function _0x14b77a(_0x49777f, _0x42438e) {
        var _0xe74c84 = _0x18cb5b;
        _0x1925e3 = _0x42438e[_0xe74c84(0x164)], _0x641830(_0x1925e3);
    }
    function _0xdd3d21(_0x44ddc1, _0x40483e) {
        _0x1925e3 && _0x641830(_0x1925e3);
    }
    function _0x39a7b1(_0x307be1, _0x51fadf) {
    }
    function _0x3e1ea1() {
        return _0x4dd871['Console']['enable']();
    }
    function _0x66e2c5() {
        var _0x2d4d6e = _0x18cb5b;
        _0x4dd871['Console']['on'](_0x2d4d6e(0x165), _0x14b77a)['on'](_0x2d4d6e(0x166), _0xdd3d21)['on']('messagesCleared.ConsoleAgent', _0x39a7b1);
    }
    function _0x274f8a() {
        var _0x1362e5 = _0x18cb5b;
        _0x4dd871[_0x1362e5(0x167)][_0x1362e5(0x168)]('.ConsoleAgent');
    }
    _0x518599[_0x18cb5b(0x169)] = _0x3e1ea1, _0x518599[_0x18cb5b(0x16a)] = _0x66e2c5, _0x518599['unload'] = _0x274f8a;
}));
