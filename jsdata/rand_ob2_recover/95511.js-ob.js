var common = require(_0x25ff99(428)), assert = require(_0x25ff99(429)), READSIZE = 100, PUSHSIZE = 20, PUSHCOUNT = 1000, HWM = 50, Readable = require(_0x25ff99(430))['Readable'], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x25ff99(431)];
r[_0x25ff99(432)] = push, r['on'](_0x25ff99(433), function () {
    var _0x17ec3f = _0x25ff99;
    console[_0x17ec3f(434)](_0x17ec3f(435));
    do {
        console[_0x17ec3f(434)]('  > read(%d)', READSIZE);
        var _0x19da95 = r['read'](READSIZE);
        console[_0x17ec3f(434)](_0x17ec3f(436), _0x19da95 && _0x19da95[_0x17ec3f(437)], rs[_0x17ec3f(437)]);
    } while (_0x19da95 && _0x19da95['length'] === READSIZE);
    console[_0x17ec3f(434)](_0x17ec3f(438), _0x19da95 && _0x19da95[_0x17ec3f(437)], rs[_0x17ec3f(439)], rs[_0x17ec3f(437)]);
});
var endEmitted = ![];
function _0x22bb(_0x330176, _0x4f7a0b) {
    return _0x22bb = function (_0x2aae0d, _0x22bb9f) {
        _0x2aae0d = _0x2aae0d - 418;
        var _0x13882d = _0x2aae[_0x2aae0d];
        return _0x13882d;
    }, _0x22bb(_0x330176, _0x4f7a0b);
}
r['on']('end', function () {
    var _0x5a89af = _0x25ff99;
    endEmitted = !![], console['error'](_0x5a89af(440));
});
var pushes = 0;
function push() {
    var _0x5e5d92 = _0x25ff99;
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console[_0x5e5d92(434)](_0x5e5d92(441)), r[_0x5e5d92(442)](null);
    console[_0x5e5d92(434)](_0x5e5d92(443), pushes);
    if (r[_0x5e5d92(442)](new Buffer(PUSHSIZE)))
        setTimeout(push);
}
var ret = r[_0x25ff99(444)](0);
process['on'](_0x25ff99(445), function () {
    var _0x2218e2 = _0x25ff99;
    assert[_0x2218e2(446)](pushes, PUSHCOUNT + 1), assert(endEmitted);
});