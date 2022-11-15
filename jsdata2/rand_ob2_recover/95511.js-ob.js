var common = require(_0x5cb75c(247)), assert = require(_0x5cb75c(248)), READSIZE = 100, PUSHSIZE = 20, PUSHCOUNT = 1000, HWM = 50, Readable = require('../../readable')[_0x5cb75c(249)], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x5cb75c(250)];
r[_0x5cb75c(251)] = push, r['on'](_0x5cb75c(252), function () {
    var _0x134298 = _0x5cb75c;
    console[_0x134298(253)]('>> readable');
    do {
        console[_0x134298(253)](_0x134298(254), READSIZE);
        var _0xf66449 = r[_0x134298(255)](READSIZE);
        console['error'](_0x134298(256), _0xf66449 && _0xf66449[_0x134298(257)], rs[_0x134298(257)]);
    } while (_0xf66449 && _0xf66449[_0x134298(257)] === READSIZE);
    console['error'](_0x134298(258), _0xf66449 && _0xf66449[_0x134298(257)], rs['needReadable'], rs[_0x134298(257)]);
});
var endEmitted = ![];
r['on'](_0x5cb75c(259), function () {
    var _0x6edd58 = _0x5cb75c;
    endEmitted = !![], console[_0x6edd58(253)](_0x6edd58(259));
});
function _0x21c1(_0x4e8eaf, _0x2bc558) {
    return _0x21c1 = function (_0x4afd60, _0x21c1fd) {
        _0x4afd60 = _0x4afd60 - 237;
        var _0x2f7fff = _0x4afd[_0x4afd60];
        return _0x2f7fff;
    }, _0x21c1(_0x4e8eaf, _0x2bc558);
}
var pushes = 0;
function push() {
    var _0x3f3c76 = _0x5cb75c;
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console[_0x3f3c76(253)](_0x3f3c76(260)), r[_0x3f3c76(261)](null);
    console[_0x3f3c76(253)]('   push #%d', pushes);
    if (r['push'](new Buffer(PUSHSIZE)))
        setTimeout(push);
}
var ret = r[_0x5cb75c(255)](0);
process['on'](_0x5cb75c(262), function () {
    var _0x5116c9 = _0x5cb75c;
    assert[_0x5116c9(263)](pushes, PUSHCOUNT + 1), assert(endEmitted);
});