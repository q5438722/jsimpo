define(function ConsoleAgent(_0x5bdec1, _0x598e91, _0x2a400a) {
    'use strict';
    var _0x2966e6 = _0x5bdec1('LiveDevelopment/Inspector/Inspector');
    var _0x2d6de8;
    function _0x3d0080(_0x565604) {
        if ('YOBcf' === 'FcXIU') {
            var _0x5b5615 = _0x565604['stackTrace'][0];
            _0x2b663a += ' in ' + _0x5b5615['functionName'] + ':' + _0x5b5615['columnNumber'];
        } else {
            var _0x39e48a = _0x565604['level'];
            if (_0x39e48a === 'warning') {
                _0x39e48a = 'warn';
            }
            var _0x2b663a = 'ConsoleAgent: ' + _0x565604['text'];
            if (_0x565604['url']) {
                _0x2b663a += ' (url: ' + _0x565604['url'] + ')';
            }
            if (_0x565604['stackTrace']) {
                if ('yHJoQ' === 'yAABG') {
                    _0x2d6de8 = res['message'];
                    _0x3d0080(_0x2d6de8);
                } else {
                    var _0x23c2db = _0x565604['stackTrace'][0];
                    _0x2b663a += _0xe6bccf['guBwK'](' in ' + _0x23c2db['functionName'], ':') + _0x23c2db['columnNumber'];
                }
            }
            console[_0x39e48a](_0x2b663a);
        }
    }
    function _0x51a1bb(_0x2b4205, _0x4f1673) {
        if ('FyKFp' === 'FyKFp') {
            _0x2d6de8 = _0x4f1673['message'];
            _0x3d0080(_0x2d6de8);
        } else {
            text += _0x57a24d['ltrZY'](' (url: ', message['url']) + ')';
        }
    }
    function _0x1913ed(_0x31994f, _0x1cef09) {
        if (_0x2d6de8) {
            if ('mivYl' === 'mivYl') {
                _0x3d0080(_0x2d6de8);
            } else {
                return _0x2966e6['Console']['enable']();
            }
        }
    }
    function _0x4bdcdb(_0x1cdf7e, _0x51ff4d) {
    }
    function _0x3c474d() {
        var _0x3b952a = { 'EmHlc': 'messagesCleared.ConsoleAgent' };
        if ('Uwwti' === 'KuWgk') {
            _0x2966e6['Console']['on']('messageAdded.ConsoleAgent', _0x51a1bb)['on']('messageRepeatCountUpdated.ConsoleAgent', _0x1913ed)['on'](_0x3b952a['EmHlc'], _0x4bdcdb);
        } else {
            return _0x2966e6['Console']['enable']();
        }
    }
    function _0x2256a4() {
        _0x2966e6['Console']['on']('messageAdded.ConsoleAgent', _0x51a1bb)['on']('messageRepeatCountUpdated.ConsoleAgent', _0x1913ed)['on']('messagesCleared.ConsoleAgent', _0x4bdcdb);
    }
    function _0x26e255() {
        _0x2966e6['Console']['off']('.ConsoleAgent');
    }
    _0x598e91['enable'] = _0x3c474d;
    _0x598e91['load'] = _0x2256a4;
    _0x598e91['unload'] = _0x26e255;
});