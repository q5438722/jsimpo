function _0x2aef(_0x36baed, _0x50db5e) {
    return _0x2aef = function (_0xc4141d, _0x42b0e4) {
        _0xc4141d = _0xc4141d - (3080 + -8027 + 5113);
        let _0xfd3cbd = _0x2c69[_0xc4141d];
        return _0xfd3cbd;
    }, _0x2aef(_0x36baed, _0x50db5e);
}
const common = require(_0x4c2d9c(176)), assert = require(_0x4c2d9c(177)), cp = require('child_process'), child = cp[_0x4c2d9c(178)](process[_0x4c2d9c(179)], ['-i']);
let output = '';
child[_0x4c2d9c(180)]['setEncoding']('utf8'), child[_0x4c2d9c(180)]['on'](_0x4c2d9c(181), _0x21f262 => {
    output += _0x21f262;
}), child['on'](_0x4c2d9c(182), common[_0x4c2d9c(183)](() => {
    const _0x21012a = _0x4c2d9c, _0x574a6a = {
            'nBcCg': _0x21012a(184),
            'OQjsW': _0x21012a(185),
            'sSzHx': _0x21012a(186)
        }, _0x1891d6 = output['split']('\n');
    _0x1891d6[_0x21012a(187)](), assert[_0x21012a(188)](_0x1891d6, [
        _0x574a6a['nBcCg'],
        '> Uncaught ReferenceError: x is not defined',
        _0x574a6a[_0x21012a(189)],
        _0x574a6a[_0x21012a(190)],
        _0x21012a(191),
        '> '
    ]);
})), child[_0x4c2d9c(192)]['write']('x\n'), child[_0x4c2d9c(192)][_0x4c2d9c(193)](_0x4c2d9c(194) + 'console.log("short")\n'), child[_0x4c2d9c(192)][_0x4c2d9c(193)]('x\n'), child[_0x4c2d9c(192)][_0x4c2d9c(195)]();