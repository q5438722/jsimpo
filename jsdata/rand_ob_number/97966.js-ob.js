'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['Component'] = Component;
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x2f909f = new WeakMap();
    return _getRequireWildcardCache = function () {
        return _0x2f909f;
    }, _0x2f909f;
}
function _interopRequireWildcard(_0x2ee7d1) {
    if (_0x2ee7d1 && _0x2ee7d1['__esModule'])
        return _0x2ee7d1;
    if (_0x2ee7d1 === null || typeof _0x2ee7d1 !== 'object' && typeof _0x2ee7d1 !== 'function')
        return { 'default': _0x2ee7d1 };
    var _0x5430ce = _getRequireWildcardCache();
    if (_0x5430ce && _0x5430ce['has'](_0x2ee7d1))
        return _0x5430ce['get'](_0x2ee7d1);
    var _0x150196 = {}, _0x5d8729 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x4a37a7 in _0x2ee7d1) {
        if (Object['prototype']['hasOwnProperty']['call'](_0x2ee7d1, _0x4a37a7)) {
            var _0x1d27c5 = _0x5d8729 ? Object['getOwnPropertyDescriptor'](_0x2ee7d1, _0x4a37a7) : null;
            _0x1d27c5 && (_0x1d27c5['get'] || _0x1d27c5['set']) ? Object['defineProperty'](_0x150196, _0x4a37a7, _0x1d27c5) : _0x150196[_0x4a37a7] = _0x2ee7d1[_0x4a37a7];
        }
    }
    return _0x150196['default'] = _0x2ee7d1, _0x5430ce && _0x5430ce['set'](_0x2ee7d1, _0x150196), _0x150196;
}
function Component() {
    const [_0x1d3021, _0xaa815e] = (0x1362 * -0x1 + 0x4 * -0x76c + 0x3112, _react['useState'])(-0x1 * 0x178f + -0xaa7 + 0x2236), _0x31376a = useIsDarkMode(), {foo: _0x18a6c8} = useFoo();
    (0x21a9 + 0x1513 + -0x36bc, _react['useEffect'])(() => {
    }, []);
    const _0x731ec2 = () => _0xaa815e(_0x1d3021 + (0x2d4 + -0x7b7 + 0x4e4 * 0x1));
    return _react['default']['createElement'](_react['default']['Fragment'], null, _react['default']['createElement']('div', null, 'Dark\x20mode?\x20', _0x31376a), _react['default']['createElement']('div', null, 'Count:\x20', _0x1d3021), _react['default']['createElement']('div', null, 'Foo:\x20', _0x18a6c8), _react['default']['createElement']('button', { 'onClick': _0x731ec2 }, 'Update\x20count'));
}
function useIsDarkMode() {
    const [_0x45b62f] = (-0x1 * -0x16c9 + 0x1813 + -0x4 * 0xbb7, _react['useState'])(![]);
    return (0xc5 * -0x11 + -0xa * 0x43 + 0xfb3, _react['useEffect'])(function _0x4794a0() {
    }, []), _0x45b62f;
}
function useFoo() {
    return (0x62 * 0x19 + -0xc * 0xa7 + -0x1be, _react['useDebugValue'])('foo'), { 'foo': !![] };
}
