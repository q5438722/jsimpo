var _0x4afd = [
    'end',
    '\x20\x20\x20push(EOF)',
    'push',
    'exit',
    'equal',
    '1urfBJj',
    '354078ntJWgN',
    '1406305IueFWw',
    '1YNuKzp',
    '1599309jkJmsG',
    '88isMcGe',
    '17573ilPJoR',
    '747288cpDHVx',
    '603996kxiEId',
    '5881675xxsRDt',
    '../common.js',
    'assert',
    'Readable',
    '_readableState',
    '_read',
    'readable',
    'error',
    '\x20\x20>\x20read(%d)',
    'read',
    '\x20\x20<\x20%j\x20(%d\x20remain)',
    'length',
    '<<\x20after\x20read()'
];
var _0x5cb75c = _0x21c1;
(function (_0x522b65, _0x4907f0) {
    var _0x2cb30a = _0x21c1;
    while (!![]) {
        try {
            var _0x49e8d5 = parseInt(_0x2cb30a(0xed)) * -parseInt(_0x2cb30a(0xee)) + -parseInt(_0x2cb30a(0xef)) + parseInt(_0x2cb30a(0xf0)) * -parseInt(_0x2cb30a(0xf1)) + -parseInt(_0x2cb30a(0xf2)) * parseInt(_0x2cb30a(0xf3)) + -parseInt(_0x2cb30a(0xf4)) + parseInt(_0x2cb30a(0xf5)) + parseInt(_0x2cb30a(0xf6));
            if (_0x49e8d5 === _0x4907f0)
                break;
            else
                _0x522b65['push'](_0x522b65['shift']());
        } catch (_0x48d140) {
            _0x522b65['push'](_0x522b65['shift']());
        }
    }
}(_0x4afd, 0xcb30b));
var common = require(_0x5cb75c(0xf7)), assert = require(_0x5cb75c(0xf8)), READSIZE = 0x64, PUSHSIZE = 0x14, PUSHCOUNT = 0x3e8, HWM = 0x32, Readable = require('../../readable')[_0x5cb75c(0xf9)], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x5cb75c(0xfa)];
r[_0x5cb75c(0xfb)] = push, r['on'](_0x5cb75c(0xfc), function () {
    var _0x134298 = _0x5cb75c;
    console[_0x134298(0xfd)]('>>\x20readable');
    do {
        console[_0x134298(0xfd)](_0x134298(0xfe), READSIZE);
        var _0xf66449 = r[_0x134298(0xff)](READSIZE);
        console['error'](_0x134298(0x100), _0xf66449 && _0xf66449[_0x134298(0x101)], rs[_0x134298(0x101)]);
    } while (_0xf66449 && _0xf66449[_0x134298(0x101)] === READSIZE);
    console['error'](_0x134298(0x102), _0xf66449 && _0xf66449[_0x134298(0x101)], rs['needReadable'], rs[_0x134298(0x101)]);
});
var endEmitted = ![];
r['on'](_0x5cb75c(0x103), function () {
    var _0x6edd58 = _0x5cb75c;
    endEmitted = !![], console[_0x6edd58(0xfd)](_0x6edd58(0x103));
});
function _0x21c1(_0x4e8eaf, _0x2bc558) {
    return _0x21c1 = function (_0x4afd60, _0x21c1fd) {
        _0x4afd60 = _0x4afd60 - 0xed;
        var _0x2f7fff = _0x4afd[_0x4afd60];
        return _0x2f7fff;
    }, _0x21c1(_0x4e8eaf, _0x2bc558);
}
var pushes = 0x0;
function push() {
    var _0x3f3c76 = _0x5cb75c;
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console[_0x3f3c76(0xfd)](_0x3f3c76(0x104)), r[_0x3f3c76(0x105)](null);
    console[_0x3f3c76(0xfd)]('\x20\x20\x20push\x20#%d', pushes);
    if (r['push'](new Buffer(PUSHSIZE)))
        setTimeout(push);
}
var ret = r[_0x5cb75c(0xff)](0x0);
process['on'](_0x5cb75c(0x106), function () {
    var _0x5116c9 = _0x5cb75c;
    assert[_0x5116c9(0x107)](pushes, PUSHCOUNT + 0x1), assert(endEmitted);
});
