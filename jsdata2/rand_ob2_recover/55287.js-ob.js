const common = require(_0xf1a466(228)), assert = require(_0xf1a466(229)), {inspect} = require(_0xf1a466(230)), N = 2;
function cb() {
    throw new Error();
}
function _0x2c7f(_0xe85805, _0xc79165) {
    return _0x2c7f = function (_0x39248a, _0x2c7f61) {
        _0x39248a = _0x39248a - 218;
        let _0xcf4759 = _0x3924[_0x39248a];
        return _0xcf4759;
    }, _0x2c7f(_0xe85805, _0xc79165);
}
for (let i = 0; i < N; ++i) {
    process[_0xf1a466(231)](common['mustCall'](cb));
}
process['on'](_0xf1a466(232), common[_0xf1a466(233)](N)), process['on'](_0xf1a466(234), function () {
    const _0x5ca05c = _0xf1a466;
    process[_0x5ca05c(235)](_0x5ca05c(232));
}), [
    null,
    1,
    'test',
    {},
    [],
    Infinity,
    !![]
][_0xf1a466(236)](_0x2b7ac1 => {
    const _0x4eb18e = _0xf1a466;
    assert[_0x4eb18e(237)](() => process[_0x4eb18e(231)](_0x2b7ac1), {
        'code': _0x4eb18e(238),
        'name': _0x4eb18e(239),
        'message': _0x4eb18e(240) + inspect(_0x2b7ac1)
    });
});