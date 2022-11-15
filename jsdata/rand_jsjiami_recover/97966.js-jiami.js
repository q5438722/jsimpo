'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['Component'] = Component;
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x3e6842 = new WeakMap();
    _getRequireWildcardCache = function () {
        return _0x3e6842;
    };
    return _0x3e6842;
}
function _interopRequireWildcard(_0x492355) {
    if (_0x492355 && _0x492355['__esModule']) {
        return _0x492355;
    }
    if (_0x492355 === null || typeof _0x492355 !== 'object' && typeof _0x492355 !== 'function') {
        return { 'default': _0x492355 };
    }
    var _0x151149 = _getRequireWildcardCache();
    if (_0x151149 && _0x151149['has'](_0x492355)) {
        return _0x151149['get'](_0x492355);
    }
    var _0x46f272 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x2eafb3 in _0x492355) {
        if (Object['prototype']['hasOwnProperty']['call'](_0x492355, _0x2eafb3)) {
            if ('Jyfkq' !== 'Jyfkq') {
                Object['defineProperty'](_0x43a60a, _0x2eafb3, _0x37ac4b);
            } else {
                var _0x37ac4b = _0x46f272 ? Object['getOwnPropertyDescriptor'](_0x492355, _0x2eafb3) : null;
                if (_0x37ac4b && (_0x37ac4b['get'] || _0x37ac4b['set'])) {
                    Object['defineProperty'](_0x43a60a, _0x2eafb3, _0x37ac4b);
                } else {
                    _0x43a60a[_0x2eafb3] = _0x492355[_0x2eafb3];
                }
            }
        }
    }
    _0x43a60a['default'] = _0x492355;
    if (_0x151149) {
        _0x151149['set'](_0x492355, _0x43a60a);
    }
    return _0x43a60a;
}
function Component() {
    const [_0x4b36bd, _0x561d08] = (0, _react['useState'])(0);
    const _0x5d6849 = useIsDarkMode();
    const {foo} = useFoo();
    (0, _react['useEffect'])(() => {
    }, []);
    const _0x491088 = () => _0x561d08(_0x4b36bd + 1);
    return _react['default']['createElement'](_react['default']['Fragment'], null, _react['default']['createElement']('div', null, 'Dark mode? ', _0x5d6849), _react['default']['createElement']('div', null, 'Count: ', _0x4b36bd), _react['default']['createElement']('div', null, 'Foo: ', foo), _react['default']['createElement']('button', { 'onClick': _0x491088 }, 'Update count'));
}
function useIsDarkMode() {
    const [_0x24acad] = (0, _react['useState'])(![]);
    (0, _react['useEffect'])(function useEffectCreate() {
    }, []);
    return _0x24acad;
}
function useFoo() {
    (0, _react['useDebugValue'])('foo');
    return { 'foo': !![] };
}