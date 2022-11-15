const common = require(_0xfaa78e(457)), bench = common[_0xfaa78e(458)](main, { 'n': [100] }), vm = require('vm'), ctxFn = new vm['Script']('\n  var b = Math.random();\n  var c = a + b;\n');
function _0x4c09(_0x3ec16f, _0x170454) {
    return _0x4c09 = function (_0x57e971, _0x4c09a0) {
        _0x57e971 = _0x57e971 - 444;
        let _0x3d7eea = _0x57e9[_0x57e971];
        return _0x3d7eea;
    }, _0x4c09(_0x3ec16f, _0x170454);
}
function main({n: _0x7e9572}) {
    const _0x1abcb2 = _0xfaa78e;
    bench[_0x1abcb2(459)]();
    let _0x34a028;
    for (let _0x378b8e = 0; _0x378b8e < _0x7e9572; _0x378b8e++) {
        _0x34a028 = vm[_0x1abcb2(460)]({ 'a': 'a' });
    }
    bench['end'](_0x7e9572), ctxFn[_0x1abcb2(461)](_0x34a028);
}