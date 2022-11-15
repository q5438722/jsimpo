Object[_0x3284ba(214)](exports, _0x3284ba(215), { 'value': !![] }), exports[_0x3284ba(216)] = Component;
var _react = _interopRequireWildcard(require(_0x3284ba(217)));
function _getRequireWildcardCache() {
    var _0x5e1ddf = _0x3284ba;
    if (typeof WeakMap !== _0x5e1ddf(218))
        return null;
    var _0x1d0989 = new WeakMap();
    return _getRequireWildcardCache = function () {
        return _0x1d0989;
    }, _0x1d0989;
}
function _interopRequireWildcard(_0x515358) {
    var _0x4ba6e4 = _0x3284ba;
    if (_0x515358 && _0x515358[_0x4ba6e4(215)])
        return _0x515358;
    if (_0x515358 === null || typeof _0x515358 !== _0x4ba6e4(219) && typeof _0x515358 !== 'function')
        return { 'default': _0x515358 };
    var _0x53de17 = _getRequireWildcardCache();
    if (_0x53de17 && _0x53de17[_0x4ba6e4(220)](_0x515358))
        return _0x53de17['get'](_0x515358);
    var _0x5bd439 = {}, _0x2bf4a = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x510a08 in _0x515358) {
        if (Object[_0x4ba6e4(221)][_0x4ba6e4(222)][_0x4ba6e4(223)](_0x515358, _0x510a08)) {
            var _0x5e8703 = _0x2bf4a ? Object[_0x4ba6e4(224)](_0x515358, _0x510a08) : null;
            _0x5e8703 && (_0x5e8703['get'] || _0x5e8703[_0x4ba6e4(225)]) ? Object[_0x4ba6e4(214)](_0x5bd439, _0x510a08, _0x5e8703) : _0x5bd439[_0x510a08] = _0x515358[_0x510a08];
        }
    }
    return _0x5bd439[_0x4ba6e4(226)] = _0x515358, _0x53de17 && _0x53de17['set'](_0x515358, _0x5bd439), _0x5bd439;
}
function Component() {
    var _0x271daf = _0x3284ba;
    const [_0x52b683, _0x30ece1] = (0, _react[_0x271daf(227)])(0), _0x144012 = useIsDarkMode(), {foo: _0x2d498b} = useFoo();
    (0, _react[_0x271daf(228)])(() => {
    }, []);
    const _0x312c85 = () => _0x30ece1(_0x52b683 + 1);
    return _react[_0x271daf(226)][_0x271daf(229)](_react[_0x271daf(226)]['Fragment'], null, _react[_0x271daf(226)][_0x271daf(229)]('div', null, 'Dark mode? ', _0x144012), _react[_0x271daf(226)][_0x271daf(229)]('div', null, 'Count: ', _0x52b683), _react[_0x271daf(226)]['createElement'](_0x271daf(230), null, _0x271daf(231), _0x2d498b), _react[_0x271daf(226)][_0x271daf(229)]('button', { 'onClick': _0x312c85 }, 'Update count'));
}
function _0x3ec9(_0x38ed03, _0x45656b) {
    return _0x3ec9 = function (_0x11b22f, _0x3ec9d9) {
        _0x11b22f = _0x11b22f - 204;
        var _0x23f2bf = _0x11b2[_0x11b22f];
        return _0x23f2bf;
    }, _0x3ec9(_0x38ed03, _0x45656b);
}
function useIsDarkMode() {
    var _0x19e088 = _0x3284ba;
    const [_0x1856e5] = (0, _react[_0x19e088(227)])(![]);
    return (0, _react[_0x19e088(228)])(function _0x90e4b3() {
    }, []), _0x1856e5;
}
function useFoo() {
    var _0x566e7f = _0x3284ba;
    return (0, _react[_0x566e7f(232)])(_0x566e7f(233)), { 'foo': !![] };
}