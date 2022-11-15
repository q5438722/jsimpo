Object[_0x171821(447)](exports, _0x171821(448), { 'value': !![] }), exports['Component'] = Component;
function _0x1e61(_0x562518, _0x5b975f) {
    return _0x1e61 = function (_0x5e4357, _0x1e61d0) {
        _0x5e4357 = _0x5e4357 - 437;
        var _0x9b5442 = _0x5e43[_0x5e4357];
        return _0x9b5442;
    }, _0x1e61(_0x562518, _0x5b975f);
}
var _react = _interopRequireWildcard(require(_0x171821(449)));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x22a704 = new WeakMap();
    return _getRequireWildcardCache = function () {
        return _0x22a704;
    }, _0x22a704;
}
function _interopRequireWildcard(_0x1b8fa4) {
    var _0x3bf880 = _0x171821;
    if (_0x1b8fa4 && _0x1b8fa4[_0x3bf880(448)])
        return _0x1b8fa4;
    if (_0x1b8fa4 === null || typeof _0x1b8fa4 !== _0x3bf880(450) && typeof _0x1b8fa4 !== _0x3bf880(451))
        return { 'default': _0x1b8fa4 };
    var _0x145ebb = _getRequireWildcardCache();
    if (_0x145ebb && _0x145ebb[_0x3bf880(452)](_0x1b8fa4))
        return _0x145ebb['get'](_0x1b8fa4);
    var _0x35c478 = {}, _0x5af852 = Object[_0x3bf880(447)] && Object['getOwnPropertyDescriptor'];
    for (var _0x21b9d3 in _0x1b8fa4) {
        if (Object['prototype']['hasOwnProperty'][_0x3bf880(453)](_0x1b8fa4, _0x21b9d3)) {
            var _0x2d32e6 = _0x5af852 ? Object[_0x3bf880(454)](_0x1b8fa4, _0x21b9d3) : null;
            _0x2d32e6 && (_0x2d32e6[_0x3bf880(455)] || _0x2d32e6[_0x3bf880(456)]) ? Object[_0x3bf880(447)](_0x35c478, _0x21b9d3, _0x2d32e6) : _0x35c478[_0x21b9d3] = _0x1b8fa4[_0x21b9d3];
        }
    }
    return _0x35c478[_0x3bf880(457)] = _0x1b8fa4, _0x145ebb && _0x145ebb[_0x3bf880(456)](_0x1b8fa4, _0x35c478), _0x35c478;
}
function Component() {
    var _0x3c4f38 = _0x171821;
    const [_0x27c087, _0x31fac9] = (0, _react['useState'])(0), _0x23ed22 = useIsDarkMode(), {foo: _0xdf4d01} = useFoo();
    (0, _react[_0x3c4f38(458)])(() => {
    }, []);
    const _0x207b7d = () => _0x31fac9(_0x27c087 + 1);
    return _react['default'][_0x3c4f38(459)](_react[_0x3c4f38(457)]['Fragment'], null, _react['default'][_0x3c4f38(459)](_0x3c4f38(460), null, _0x3c4f38(461), _0x23ed22), _react['default'][_0x3c4f38(459)](_0x3c4f38(460), null, _0x3c4f38(462), _0x27c087), _react['default'][_0x3c4f38(459)](_0x3c4f38(460), null, _0x3c4f38(463), _0xdf4d01), _react['default']['createElement'](_0x3c4f38(464), { 'onClick': _0x207b7d }, _0x3c4f38(465)));
}
function useIsDarkMode() {
    var _0x3dc85d = _0x171821;
    const [_0x580c4e] = (0, _react['useState'])(![]);
    return (0, _react[_0x3dc85d(458)])(function _0x13b8db() {
    }, []), _0x580c4e;
}
function useFoo() {
    var _0x36994c = _0x171821;
    return (0, _react['useDebugValue'])(_0x36994c(466)), { 'foo': !![] };
}