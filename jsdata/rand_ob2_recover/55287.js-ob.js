const common = require(_0x30bdcb(497)), assert = require(_0x30bdcb(498)), {inspect} = require(_0x30bdcb(499)), N = 2;
function cb() {
    throw new Error();
}
for (let i = 0; i < N; ++i) {
    process['nextTick'](common[_0x30bdcb(500)](cb));
}
function _0x71b9(_0x14b39f, _0x4d7398) {
    return _0x71b9 = function (_0x2317e8, _0x71b9e7) {
        _0x2317e8 = _0x2317e8 - 487;
        let _0x39d08f = _0x2317[_0x2317e8];
        return _0x39d08f;
    }, _0x71b9(_0x14b39f, _0x4d7398);
}
process['on'](_0x30bdcb(501), common[_0x30bdcb(500)](N)), process['on']('exit', function () {
    const _0x3a43f4 = _0x30bdcb;
    process[_0x3a43f4(502)](_0x3a43f4(501));
}), [
    null,
    1,
    _0x30bdcb(503),
    {},
    [],
    Infinity,
    !![]
][_0x30bdcb(504)](_0xd33b89 => {
    const _0x2d2bfb = _0x30bdcb;
    assert[_0x2d2bfb(505)](() => process[_0x2d2bfb(506)](_0xd33b89), {
        'code': _0x2d2bfb(507),
        'name': _0x2d2bfb(508),
        'message': _0x2d2bfb(509) + inspect(_0xd33b89)
    });
});