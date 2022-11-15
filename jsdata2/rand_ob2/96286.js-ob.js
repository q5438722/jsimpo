var _0x5b16 = [
    '32mJdYZJ',
    '3NznCMb',
    '153923BtqKfV',
    '59iLHVma',
    '4753tFareV',
    '177041PxTVcC',
    '1xIqTIS',
    '6459wawmRI',
    '74udPmNq',
    '../',
    'tape',
    'dotted\x20alias',
    '--a.b',
    'aa.bb',
    'equal',
    'end',
    'dotted\x20default',
    'dotted\x20default\x20with\x20no\x20alias',
    '3137HiQOSn',
    '6egYODv',
    '1juHEtW',
    '646542XUzvRw',
    '12587uQPcwE'
];
var _0x506934 = _0x5884;
(function (_0x228b30, _0x51b53a) {
    var _0x476d15 = _0x5884;
    while (!![]) {
        try {
            var _0x5582eb = parseInt(_0x476d15(0x178)) * parseInt(_0x476d15(0x179)) + -parseInt(_0x476d15(0x17a)) * -parseInt(_0x476d15(0x17b)) + -parseInt(_0x476d15(0x17c)) * parseInt(_0x476d15(0x17d)) + -parseInt(_0x476d15(0x17e)) * -parseInt(_0x476d15(0x17f)) + parseInt(_0x476d15(0x180)) * parseInt(_0x476d15(0x181)) + parseInt(_0x476d15(0x182)) * -parseInt(_0x476d15(0x183)) + parseInt(_0x476d15(0x184)) * -parseInt(_0x476d15(0x185));
            if (_0x5582eb === _0x51b53a)
                break;
            else
                _0x228b30['push'](_0x228b30['shift']());
        } catch (_0x7c098c) {
            _0x228b30['push'](_0x228b30['shift']());
        }
    }
}(_0x5b16, 0x55649));
function _0x5884(_0x54a6ef, _0x1ff9fa) {
    return _0x5884 = function (_0x5b167d, _0x5884e6) {
        _0x5b167d = _0x5b167d - 0x178;
        var _0x5da3d6 = _0x5b16[_0x5b167d];
        return _0x5da3d6;
    }, _0x5884(_0x54a6ef, _0x1ff9fa);
}
var parse = require(_0x506934(0x186)), test = require(_0x506934(0x187));
test(_0x506934(0x188), function (_0x41b995) {
    var _0x35c262 = _0x506934, _0x1801fd = parse([
            _0x35c262(0x189),
            '22'
        ], {
            'default': { 'a.b': 0xb },
            'alias': { 'a.b': _0x35c262(0x18a) }
        });
    _0x41b995[_0x35c262(0x18b)](_0x1801fd['a']['b'], 0x16), _0x41b995[_0x35c262(0x18b)](_0x1801fd['aa']['bb'], 0x16), _0x41b995[_0x35c262(0x18c)]();
}), test(_0x506934(0x18d), function (_0x2e147e) {
    var _0x3e9f74 = _0x506934, _0x225e2c = parse('', {
            'default': { 'a.b': 0xb },
            'alias': { 'a.b': _0x3e9f74(0x18a) }
        });
    _0x2e147e[_0x3e9f74(0x18b)](_0x225e2c['a']['b'], 0xb), _0x2e147e[_0x3e9f74(0x18b)](_0x225e2c['aa']['bb'], 0xb), _0x2e147e[_0x3e9f74(0x18c)]();
}), test(_0x506934(0x18e), function (_0x1d947a) {
    var _0x6f2d89 = _0x506934, _0x5a8411 = parse('', { 'default': { 'a.b': 0xb } });
    _0x1d947a[_0x6f2d89(0x18b)](_0x5a8411['a']['b'], 0xb), _0x1d947a[_0x6f2d89(0x18c)]();
});
