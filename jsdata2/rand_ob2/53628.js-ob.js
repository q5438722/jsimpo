'use strict';
const _0x1fc4 = [
    '19WizYfp',
    '826529qiVHsZ',
    '1096712iALKzg',
    '71bfGDbi',
    '15690CrwSZs',
    '1oQMOHn',
    '3016043ktCuTN',
    '../common',
    'stream',
    'assert',
    'repl',
    '_read',
    'push',
    'util.inspect(\x22string\x22)\x0a',
    '_write',
    'isTTY',
    'exit',
    'includes',
    '\x22\x27string\x27\x22',
    'colors',
    'writer',
    'options',
    '375517ZgPQqB',
    '966807PRkdyK',
    '16981CAqAOj'
];
const _0x1091cb = _0x215f;
(function (_0x42b992, _0x2986d9) {
    const _0xa6d98c = _0x215f;
    while (!![]) {
        try {
            const _0x444989 = parseInt(_0xa6d98c(0x155)) + -parseInt(_0xa6d98c(0x156)) + -parseInt(_0xa6d98c(0x157)) * parseInt(_0xa6d98c(0x158)) + parseInt(_0xa6d98c(0x159)) + -parseInt(_0xa6d98c(0x15a)) + parseInt(_0xa6d98c(0x15b)) * -parseInt(_0xa6d98c(0x15c)) + -parseInt(_0xa6d98c(0x15d)) * -parseInt(_0xa6d98c(0x15e));
            if (_0x444989 === _0x2986d9)
                break;
            else
                _0x42b992['push'](_0x42b992['shift']());
        } catch (_0x32ff9c) {
            _0x42b992['push'](_0x42b992['shift']());
        }
    }
}(_0x1fc4, 0xaf475));
require(_0x1091cb(0x15f));
const {Duplex} = require(_0x1091cb(0x160)), {inspect} = require('util'), {strictEqual} = require(_0x1091cb(0x161)), {REPLServer} = require(_0x1091cb(0x162));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x1091cb(0x163)] = function () {
    const _0x32b1d3 = _0x1091cb;
    this[_0x32b1d3(0x164)](_0x32b1d3(0x165)), this[_0x32b1d3(0x164)](null);
}, inout[_0x1091cb(0x166)] = function (_0x50b26e, _0x55a612, _0xbf8088) {
    output += _0x50b26e, _0xbf8088();
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
function _0x215f(_0x18b2c1, _0x1cb9dc) {
    return _0x215f = function (_0x1fc4c5, _0x215fad) {
        _0x1fc4c5 = _0x1fc4c5 - 0x155;
        let _0x4f6376 = _0x1fc4[_0x1fc4c5];
        return _0x4f6376;
    }, _0x215f(_0x18b2c1, _0x1cb9dc);
}
inout[_0x1091cb(0x167)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x1091cb(0x168), function () {
    const _0x389dce = _0x1091cb;
    strictEqual(output[_0x389dce(0x169)](_0x389dce(0x16a)), !![]), strictEqual(output[_0x389dce(0x169)]('\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27'), ![]), strictEqual(inspect['defaultOptions'][_0x389dce(0x16b)], ![]), strictEqual(repl[_0x389dce(0x16c)][_0x389dce(0x16d)][_0x389dce(0x16b)], !![]), strictEqual(repl2[_0x389dce(0x16c)]['options'][_0x389dce(0x16b)], !![]);
});
