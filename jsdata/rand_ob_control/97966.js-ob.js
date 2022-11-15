'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['Component'] = Component;
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache() {
    var _0x199295 = {
        'IPAIa': function (_0x22386d, _0x4b4905) {
            return _0x22386d !== _0x4b4905;
        },
        'btSiE': 'function'
    };
    if (_0x199295['IPAIa'](typeof WeakMap, _0x199295['btSiE']))
        return null;
    var _0x20dc93 = new WeakMap();
    return _getRequireWildcardCache = function () {
        return _0x20dc93;
    }, _0x20dc93;
}
function _interopRequireWildcard(_0x5c8707) {
    var _0x114faa = {
            'LwNqI': '3|1|9|0|4|2|8|7|6|5',
            'pPdHV': function (_0x33b9c3, _0x53dc19) {
                return _0x33b9c3 === _0x53dc19;
            },
            'MLqlO': function (_0xcaeb89, _0x52c3b9) {
                return _0xcaeb89 !== _0x52c3b9;
            },
            'ItHPb': 'object',
            'QrHWA': 'function',
            'mOSIH': function (_0x314e34) {
                return _0x314e34();
            }
        }, _0x56e957 = _0x114faa['LwNqI']['split']('|'), _0x1f8e49 = 0x0;
    while (!![]) {
        switch (_0x56e957[_0x1f8e49++]) {
        case '0':
            if (_0x2539ce && _0x2539ce['has'](_0x5c8707))
                return _0x2539ce['get'](_0x5c8707);
            continue;
        case '1':
            if (_0x114faa['pPdHV'](_0x5c8707, null) || _0x114faa['MLqlO'](typeof _0x5c8707, _0x114faa['ItHPb']) && _0x114faa['MLqlO'](typeof _0x5c8707, _0x114faa['QrHWA']))
                return { 'default': _0x5c8707 };
            continue;
        case '2':
            var _0x1d7273 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
            continue;
        case '3':
            if (_0x5c8707 && _0x5c8707['__esModule'])
                return _0x5c8707;
            continue;
        case '4':
            var _0x5b0145 = {};
            continue;
        case '5':
            return _0x5b0145;
        case '6':
            _0x2539ce && _0x2539ce['set'](_0x5c8707, _0x5b0145);
            continue;
        case '7':
            _0x5b0145['default'] = _0x5c8707;
            continue;
        case '8':
            for (var _0x58a11a in _0x5c8707) {
                if (Object['prototype']['hasOwnProperty']['call'](_0x5c8707, _0x58a11a)) {
                    var _0x3eed08 = _0x1d7273 ? Object['getOwnPropertyDescriptor'](_0x5c8707, _0x58a11a) : null;
                    _0x3eed08 && (_0x3eed08['get'] || _0x3eed08['set']) ? Object['defineProperty'](_0x5b0145, _0x58a11a, _0x3eed08) : _0x5b0145[_0x58a11a] = _0x5c8707[_0x58a11a];
                }
            }
            continue;
        case '9':
            var _0x2539ce = _0x114faa['mOSIH'](_getRequireWildcardCache);
            continue;
        }
        break;
    }
}
function Component() {
    var _0x31dc42 = {
        'yGwlf': function (_0x41561c) {
            return _0x41561c();
        },
        'UHkjm': function (_0x6c6370) {
            return _0x6c6370();
        },
        'IZgnA': 'div',
        'TvHBp': 'Dark\x20mode?\x20',
        'BNcon': 'Count:\x20',
        'ffVQs': 'Foo:\x20',
        'BkinR': 'button',
        'OOaNg': 'Update\x20count'
    };
    const [_0x25f451, _0x351c5b] = (0x0, _react['useState'])(0x0), _0x2e44ba = _0x31dc42['yGwlf'](useIsDarkMode), {foo: _0x3c79d3} = _0x31dc42['UHkjm'](useFoo);
    (0x0, _react['useEffect'])(() => {
    }, []);
    const _0xc1d5dc = () => _0x351c5b(_0x25f451 + 0x1);
    return _react['default']['createElement'](_react['default']['Fragment'], null, _react['default']['createElement'](_0x31dc42['IZgnA'], null, _0x31dc42['TvHBp'], _0x2e44ba), _react['default']['createElement'](_0x31dc42['IZgnA'], null, _0x31dc42['BNcon'], _0x25f451), _react['default']['createElement'](_0x31dc42['IZgnA'], null, _0x31dc42['ffVQs'], _0x3c79d3), _react['default']['createElement'](_0x31dc42['BkinR'], { 'onClick': _0xc1d5dc }, _0x31dc42['OOaNg']));
}
function useIsDarkMode() {
    const [_0x4f2d9c] = (0x0, _react['useState'])(![]);
    return (0x0, _react['useEffect'])(function _0x35c898() {
    }, []), _0x4f2d9c;
}
function useFoo() {
    var _0x5370bb = { 'XVuIq': 'foo' };
    return (0x0, _react['useDebugValue'])(_0x5370bb['XVuIq']), { 'foo': !![] };
}
