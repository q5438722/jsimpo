'use strict';
const _0x4eeb = [
    '118517taJyrk',
    '16816nqKgvI',
    '91ZSQeQH',
    '3052337vdpuSb',
    '../common',
    'assert',
    'repl',
    '_read',
    'util.inspect(\x22string\x22)\x0a',
    'push',
    'exit',
    '1|2|4|0|3',
    'edevY',
    'writer',
    'options',
    'colors',
    'includes',
    '\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27',
    'fxLzK',
    'defaultOptions',
    '349107AKPpzd',
    '2kVWBrj',
    '256695IkeEZj',
    '1167295vgkRFH',
    '24aLiPMj',
    '25891jBjuSX',
    '13ghgkbF'
];
const _0x2e19f2 = _0x15f1;
(function (_0x236cbe, _0x3c8f1f) {
    const _0x4ce211 = _0x15f1;
    while (!![]) {
        try {
            const _0x1d5403 = parseInt(_0x4ce211(0x68)) * -parseInt(_0x4ce211(0x69)) + parseInt(_0x4ce211(0x6a)) + -parseInt(_0x4ce211(0x6b)) + parseInt(_0x4ce211(0x6c)) * -parseInt(_0x4ce211(0x6d)) + parseInt(_0x4ce211(0x6e)) * parseInt(_0x4ce211(0x6f)) + parseInt(_0x4ce211(0x70)) * -parseInt(_0x4ce211(0x71)) + parseInt(_0x4ce211(0x72));
            if (_0x1d5403 === _0x3c8f1f)
                break;
            else
                _0x236cbe['push'](_0x236cbe['shift']());
        } catch (_0x4bf54f) {
            _0x236cbe['push'](_0x236cbe['shift']());
        }
    }
}(_0x4eeb, -0x1241bf * 0x1 + -0x1 * -0x4a935 + 0x1a4ce6));
require(_0x2e19f2(0x73));
const {Duplex} = require('stream'), {inspect} = require('util'), {strictEqual} = require(_0x2e19f2(0x74)), {REPLServer} = require(_0x2e19f2(0x75));
function _0x15f1(_0x35fc8c, _0xbabc2a) {
    return _0x15f1 = function (_0x471c8b, _0x2a3fcd) {
        _0x471c8b = _0x471c8b - (-0x4cf * 0x8 + 0x2 * -0x322 + 0x2d24);
        let _0x1d9e68 = _0x4eeb[_0x471c8b];
        return _0x1d9e68;
    }, _0x15f1(_0x35fc8c, _0xbabc2a);
}
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x2e19f2(0x76)] = function () {
    const _0x1afc36 = _0x2e19f2, _0x53d06c = { 'yrcFg': _0x1afc36(0x77) };
    this[_0x1afc36(0x78)](_0x53d06c['yrcFg']), this[_0x1afc36(0x78)](null);
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
process['on'](_0x2e19f2(0x79), function () {
    const _0x430056 = _0x2e19f2, _0x577a02 = {
            'edevY': _0x430056(0x7a),
            'fxLzK': function (_0x26c45c, _0x3106b2, _0x882456) {
                return _0x26c45c(_0x3106b2, _0x882456);
            }
        }, _0x58bb31 = _0x577a02[_0x430056(0x7b)]['split']('|');
    let _0x1edd6a = 0x4d8 + -0x1 * 0x1f51 + 0xfb * 0x1b;
    while (!![]) {
        switch (_0x58bb31[_0x1edd6a++]) {
        case '0':
            strictEqual(repl[_0x430056(0x7c)][_0x430056(0x7d)][_0x430056(0x7e)], !![]);
            continue;
        case '1':
            strictEqual(output[_0x430056(0x7f)]('\x22\x27string\x27\x22'), !![]);
            continue;
        case '2':
            _0x577a02['fxLzK'](strictEqual, output[_0x430056(0x7f)](_0x430056(0x80)), ![]);
            continue;
        case '3':
            strictEqual(repl2[_0x430056(0x7c)][_0x430056(0x7d)][_0x430056(0x7e)], !![]);
            continue;
        case '4':
            _0x577a02[_0x430056(0x81)](strictEqual, inspect[_0x430056(0x82)][_0x430056(0x7e)], ![]);
            continue;
        }
        break;
    }
});