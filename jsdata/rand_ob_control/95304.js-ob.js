define(function ConsoleAgent(_0x2048c4, _0x43ee8a, _0x24abeb) {
    'use strict';
    var _0x15bfc5 = {
        'ToCZE': '4|5|2|3|1|0',
        'hkMfj': function (_0x49e75c, _0x116f2b) {
            return _0x49e75c + _0x116f2b;
        },
        'uKovo': function (_0x1c1198, _0x321b4a) {
            return _0x1c1198 + _0x321b4a;
        },
        'qZcDV': '\x20in\x20',
        'HwLeV': 'ConsoleAgent:\x20',
        'kLgPU': function (_0x508dfd, _0x56b6ae) {
            return _0x508dfd + _0x56b6ae;
        },
        'qYuJH': '\x20(url:\x20',
        'OOQwA': function (_0x14f063, _0x11db22) {
            return _0x14f063 === _0x11db22;
        },
        'NOvbS': 'warning',
        'XQgtW': 'warn',
        'lTgVB': function (_0x54bbdc, _0x3dfa56) {
            return _0x54bbdc(_0x3dfa56);
        },
        'ABNhz': 'messageAdded.ConsoleAgent',
        'yodtX': 'messageRepeatCountUpdated.ConsoleAgent',
        'EkdqX': 'messagesCleared.ConsoleAgent',
        'YTwFg': '.ConsoleAgent',
        'zXxAm': 'LiveDevelopment/Inspector/Inspector'
    };
    var _0x47b570 = _0x15bfc5['lTgVB'](_0x2048c4, _0x15bfc5['zXxAm']), _0x47b55d;
    function _0x5021e0(_0x1de257) {
        var _0x36d7bb = _0x15bfc5['ToCZE']['split']('|'), _0x3e12dd = 0x0;
        while (!![]) {
            switch (_0x36d7bb[_0x3e12dd++]) {
            case '0':
                console[_0x223554](_0xcd7134);
                continue;
            case '1':
                if (_0x1de257['stackTrace']) {
                    var _0x302099 = _0x1de257['stackTrace'][0x0];
                    _0xcd7134 += _0x15bfc5['hkMfj'](_0x15bfc5['hkMfj'](_0x15bfc5['uKovo'](_0x15bfc5['qZcDV'], _0x302099['functionName']), ':'), _0x302099['columnNumber']);
                }
                continue;
            case '2':
                var _0xcd7134 = _0x15bfc5['uKovo'](_0x15bfc5['HwLeV'], _0x1de257['text']);
                continue;
            case '3':
                _0x1de257['url'] && (_0xcd7134 += _0x15bfc5['kLgPU'](_0x15bfc5['kLgPU'](_0x15bfc5['qYuJH'], _0x1de257['url']), ')'));
                continue;
            case '4':
                var _0x223554 = _0x1de257['level'];
                continue;
            case '5':
                _0x15bfc5['OOQwA'](_0x223554, _0x15bfc5['NOvbS']) && (_0x223554 = _0x15bfc5['XQgtW']);
                continue;
            }
            break;
        }
    }
    function _0x524208(_0xef671a, _0x21c8a9) {
        _0x47b55d = _0x21c8a9['message'], _0x15bfc5['lTgVB'](_0x5021e0, _0x47b55d);
    }
    function _0x2629ae(_0x3f24f7, _0x285d03) {
        _0x47b55d && _0x15bfc5['lTgVB'](_0x5021e0, _0x47b55d);
    }
    function _0x2fb983(_0x35ebe8, _0x5438be) {
    }
    function _0x4ef92b() {
        return _0x47b570['Console']['enable']();
    }
    function _0x40b4ce() {
        _0x47b570['Console']['on'](_0x15bfc5['ABNhz'], _0x524208)['on'](_0x15bfc5['yodtX'], _0x2629ae)['on'](_0x15bfc5['EkdqX'], _0x2fb983);
    }
    function _0x4678c2() {
        _0x47b570['Console']['off'](_0x15bfc5['YTwFg']);
    }
    _0x43ee8a['enable'] = _0x4ef92b, _0x43ee8a['load'] = _0x40b4ce, _0x43ee8a['unload'] = _0x4678c2;
});
