require(_0x1091cb(351));
const {Duplex} = require(_0x1091cb(352)), {inspect} = require('util'), {strictEqual} = require(_0x1091cb(353)), {REPLServer} = require(_0x1091cb(354));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x1091cb(355)] = function () {
    const _0x32b1d3 = _0x1091cb;
    this[_0x32b1d3(356)](_0x32b1d3(357)), this[_0x32b1d3(356)](null);
}, inout[_0x1091cb(358)] = function (_0x50b26e, _0x55a612, _0xbf8088) {
    output += _0x50b26e, _0xbf8088();
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
function _0x215f(_0x18b2c1, _0x1cb9dc) {
    return _0x215f = function (_0x1fc4c5, _0x215fad) {
        _0x1fc4c5 = _0x1fc4c5 - 341;
        let _0x4f6376 = _0x1fc4[_0x1fc4c5];
        return _0x4f6376;
    }, _0x215f(_0x18b2c1, _0x1cb9dc);
}
inout[_0x1091cb(359)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x1091cb(360), function () {
    const _0x389dce = _0x1091cb;
    strictEqual(output[_0x389dce(361)](_0x389dce(362)), !![]), strictEqual(output[_0x389dce(361)]('\'\x1B[32m\\\'string\\\'\x1B[39m\''), ![]), strictEqual(inspect['defaultOptions'][_0x389dce(363)], ![]), strictEqual(repl[_0x389dce(364)][_0x389dce(365)][_0x389dce(363)], !![]), strictEqual(repl2[_0x389dce(364)]['options'][_0x389dce(363)], !![]);
});