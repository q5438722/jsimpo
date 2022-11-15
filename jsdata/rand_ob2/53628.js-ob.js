'use strict';
const _0x265e = [
    '2UstDVw',
    '686542LLAdig',
    '1698606DSVeAQ',
    '766639hDJDwN',
    '812505zqEIEz',
    '389044OhKCZY',
    '3rpEkur',
    '4103357mWiURO',
    '1RWeJvm',
    'stream',
    'util',
    'repl',
    '_read',
    'push',
    '_write',
    'isTTY',
    'exit',
    'includes',
    '\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27',
    'defaultOptions',
    'colors',
    'writer',
    'options',
    '209127KUeuiM'
];
function _0xe485(_0x1c6ad3, _0x399680) {
    return _0xe485 = function (_0x265eb7, _0xe4854a) {
        _0x265eb7 = _0x265eb7 - 0x154;
        let _0x4772cd = _0x265e[_0x265eb7];
        return _0x4772cd;
    }, _0xe485(_0x1c6ad3, _0x399680);
}
const _0x16ac0f = _0xe485;
(function (_0x1eec27, _0x37e564) {
    const _0x48f2c2 = _0xe485;
    while (!![]) {
        try {
            const _0x19f48e = -parseInt(_0x48f2c2(0x154)) * -parseInt(_0x48f2c2(0x155)) + -parseInt(_0x48f2c2(0x156)) + -parseInt(_0x48f2c2(0x157)) + parseInt(_0x48f2c2(0x158)) + -parseInt(_0x48f2c2(0x159)) + -parseInt(_0x48f2c2(0x15a)) * parseInt(_0x48f2c2(0x15b)) + -parseInt(_0x48f2c2(0x15c)) * -parseInt(_0x48f2c2(0x15d));
            if (_0x19f48e === _0x37e564)
                break;
            else
                _0x1eec27['push'](_0x1eec27['shift']());
        } catch (_0x3324cf) {
            _0x1eec27['push'](_0x1eec27['shift']());
        }
    }
}(_0x265e, 0xe1749));
require('../common');
const {Duplex} = require(_0x16ac0f(0x15e)), {inspect} = require(_0x16ac0f(0x15f)), {strictEqual} = require('assert'), {REPLServer} = require(_0x16ac0f(0x160));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x16ac0f(0x161)] = function () {
    const _0x3ec914 = _0x16ac0f;
    this['push']('util.inspect(\x22string\x22)\x0a'), this[_0x3ec914(0x162)](null);
}, inout[_0x16ac0f(0x163)] = function (_0x5031c0, _0x1ed3c9, _0x9b7a1a) {
    output += _0x5031c0, _0x9b7a1a();
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
inout[_0x16ac0f(0x164)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x16ac0f(0x165), function () {
    const _0x188370 = _0x16ac0f;
    strictEqual(output[_0x188370(0x166)]('\x22\x27string\x27\x22'), !![]), strictEqual(output[_0x188370(0x166)](_0x188370(0x167)), ![]), strictEqual(inspect[_0x188370(0x168)][_0x188370(0x169)], ![]), strictEqual(repl[_0x188370(0x16a)][_0x188370(0x16b)][_0x188370(0x169)], !![]), strictEqual(repl2[_0x188370(0x16a)]['options'][_0x188370(0x169)], !![]);
});
