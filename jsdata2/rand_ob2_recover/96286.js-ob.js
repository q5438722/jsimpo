function _0x5884(_0x54a6ef, _0x1ff9fa) {
    return _0x5884 = function (_0x5b167d, _0x5884e6) {
        _0x5b167d = _0x5b167d - 376;
        var _0x5da3d6 = _0x5b16[_0x5b167d];
        return _0x5da3d6;
    }, _0x5884(_0x54a6ef, _0x1ff9fa);
}
var parse = require(_0x506934(390)), test = require(_0x506934(391));
test(_0x506934(392), function (_0x41b995) {
    var _0x35c262 = _0x506934, _0x1801fd = parse([
            _0x35c262(393),
            '22'
        ], {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x35c262(394) }
        });
    _0x41b995[_0x35c262(395)](_0x1801fd['a']['b'], 22), _0x41b995[_0x35c262(395)](_0x1801fd['aa']['bb'], 22), _0x41b995[_0x35c262(396)]();
}), test(_0x506934(397), function (_0x2e147e) {
    var _0x3e9f74 = _0x506934, _0x225e2c = parse('', {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x3e9f74(394) }
        });
    _0x2e147e[_0x3e9f74(395)](_0x225e2c['a']['b'], 11), _0x2e147e[_0x3e9f74(395)](_0x225e2c['aa']['bb'], 11), _0x2e147e[_0x3e9f74(396)]();
}), test(_0x506934(398), function (_0x1d947a) {
    var _0x6f2d89 = _0x506934, _0x5a8411 = parse('', { 'default': { 'a.b': 11 } });
    _0x1d947a[_0x6f2d89(395)](_0x5a8411['a']['b'], 11), _0x1d947a[_0x6f2d89(396)]();
});