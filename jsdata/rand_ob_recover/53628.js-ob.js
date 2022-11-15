require(_0x2e19f2(115));
const {Duplex} = require('stream'), {inspect} = require('util'), {strictEqual} = require(_0x2e19f2(116)), {REPLServer} = require(_0x2e19f2(117));
function _0x15f1(_0x35fc8c, _0xbabc2a) {
    return _0x15f1 = function (_0x471c8b, _0x2a3fcd) {
        _0x471c8b = _0x471c8b - (-1231 * 8 + 2 * -802 + 11556);
        let _0x1d9e68 = _0x4eeb[_0x471c8b];
        return _0x1d9e68;
    }, _0x15f1(_0x35fc8c, _0xbabc2a);
}
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x2e19f2(118)] = function () {
    const _0x1afc36 = _0x2e19f2, _0x53d06c = { 'yrcFg': _0x1afc36(119) };
    this[_0x1afc36(120)](_0x53d06c['yrcFg']), this[_0x1afc36(120)](null);
}, inout['_write'] = function (_0x450420, _0x3e27c3, _0x816bcd) {
    const _0x2e7d26 = {
        'KQEfk': function (_0x268e80) {
            return _0x268e80();
        }
    };
    output += _0x450420, _0x2e7d26['KQEfk'](_0x816bcd);
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
inout['isTTY'] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x2e19f2(121), function () {
    const _0x430056 = _0x2e19f2, _0x577a02 = {
            'edevY': _0x430056(122),
            'fxLzK': function (_0x26c45c, _0x3106b2, _0x882456) {
                return _0x26c45c(_0x3106b2, _0x882456);
            }
        }, _0x58bb31 = _0x577a02[_0x430056(123)]['split']('|');
    let _0x1edd6a = 1240 + -1 * 8017 + 251 * 27;
    while (!![]) {
        switch (_0x58bb31[_0x1edd6a++]) {
        case '0':
            strictEqual(repl[_0x430056(124)][_0x430056(125)][_0x430056(126)], !![]);
            continue;
        case '1':
            strictEqual(output[_0x430056(127)]('"\'string\'"'), !![]);
            continue;
        case '2':
            _0x577a02['fxLzK'](strictEqual, output[_0x430056(127)](_0x430056(128)), ![]);
            continue;
        case '3':
            strictEqual(repl2[_0x430056(124)][_0x430056(125)][_0x430056(126)], !![]);
            continue;
        case '4':
            _0x577a02[_0x430056(129)](strictEqual, inspect[_0x430056(130)][_0x430056(126)], ![]);
            continue;
        }
        break;
    }
});