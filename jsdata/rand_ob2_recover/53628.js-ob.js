require('../common');
const {Duplex} = require(_0x16ac0f(350)), {inspect} = require(_0x16ac0f(351)), {strictEqual} = require('assert'), {REPLServer} = require(_0x16ac0f(352));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x16ac0f(353)] = function () {
    const _0x3ec914 = _0x16ac0f;
    this['push']('util.inspect("string")\n'), this[_0x3ec914(354)](null);
}, inout[_0x16ac0f(355)] = function (_0x5031c0, _0x1ed3c9, _0x9b7a1a) {
    output += _0x5031c0, _0x9b7a1a();
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
inout[_0x16ac0f(356)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x16ac0f(357), function () {
    const _0x188370 = _0x16ac0f;
    strictEqual(output[_0x188370(358)]('"\'string\'"'), !![]), strictEqual(output[_0x188370(358)](_0x188370(359)), ![]), strictEqual(inspect[_0x188370(360)][_0x188370(361)], ![]), strictEqual(repl[_0x188370(362)][_0x188370(363)][_0x188370(361)], !![]), strictEqual(repl2[_0x188370(362)]['options'][_0x188370(361)], !![]);
});