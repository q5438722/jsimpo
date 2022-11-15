define(function ConsoleAgent(_0x4e017a, _0x14a786, _0x724260) {
    'use strict';
    var _0x5062ce = _0x4e017a('LiveDevelopment/Inspector/Inspector'), _0x22c560;
    function _0x5efd31(_0xb735b) {
        var _0x303f23 = _0xb735b['level'];
        _0x303f23 === 'warning' && (_0x303f23 = 'warn');
        var _0x44ba72 = 'ConsoleAgent:\x20' + _0xb735b['text'];
        _0xb735b['url'] && (_0x44ba72 += '\x20(url:\x20' + _0xb735b['url'] + ')');
        if (_0xb735b['stackTrace']) {
            var _0x5b84d1 = _0xb735b['stackTrace'][0x80 * -0x40 + 0x69b + 0x1965];
            _0x44ba72 += '\x20in\x20' + _0x5b84d1['functionName'] + ':' + _0x5b84d1['columnNumber'];
        }
        console[_0x303f23](_0x44ba72);
    }
    function _0x356209(_0x4207e4, _0x4efd2a) {
        _0x22c560 = _0x4efd2a['message'], _0x5efd31(_0x22c560);
    }
    function _0x3405eb(_0x2d0e2d, _0x2fc418) {
        _0x22c560 && _0x5efd31(_0x22c560);
    }
    function _0x18937e(_0x36be24, _0x5407e9) {
    }
    function _0x5cc2ca() {
        return _0x5062ce['Console']['enable']();
    }
    function _0x4cfa88() {
        _0x5062ce['Console']['on']('messageAdded.ConsoleAgent', _0x356209)['on']('messageRepeatCountUpdated.ConsoleAgent', _0x3405eb)['on']('messagesCleared.ConsoleAgent', _0x18937e);
    }
    function _0x338124() {
        _0x5062ce['Console']['off']('.ConsoleAgent');
    }
    _0x14a786['enable'] = _0x5cc2ca, _0x14a786['load'] = _0x4cfa88, _0x14a786['unload'] = _0x338124;
});
