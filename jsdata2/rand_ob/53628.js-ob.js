'use strict';
const _0x5d77 = [
    'AXmlM',
    'includes',
    '\x22\x27string\x27\x22',
    '\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27',
    'defaultOptions',
    'colors',
    'writer',
    'options',
    'hiSpj',
    '3915CMaotw',
    '131rvFyne',
    '788839neoWaG',
    '530BMmhpl',
    '450SDxpmC',
    '161378POFAyM',
    '1mcfRjI',
    '306484jWFQRz',
    '503019YGIeFB',
    '2004647dGBFtN',
    'stream',
    'util',
    'assert',
    'repl',
    '_read',
    'util.inspect(\x22string\x22)\x0a',
    '_write',
    'pimtN',
    'isTTY',
    'exit'
];
const _0x799df9 = _0xdad8;
(function (_0xea06f6, _0x309be1) {
    const _0x4ee987 = _0xdad8;
    while (!![]) {
        try {
            const _0x8d83d8 = -parseInt(_0x4ee987(0x1d8)) * parseInt(_0x4ee987(0x1d9)) + -parseInt(_0x4ee987(0x1da)) + parseInt(_0x4ee987(0x1db)) * -parseInt(_0x4ee987(0x1dc)) + parseInt(_0x4ee987(0x1dd)) * parseInt(_0x4ee987(0x1de)) + parseInt(_0x4ee987(0x1df)) + -parseInt(_0x4ee987(0x1e0)) + parseInt(_0x4ee987(0x1e1));
            if (_0x8d83d8 === _0x309be1)
                break;
            else
                _0xea06f6['push'](_0xea06f6['shift']());
        } catch (_0x28bc72) {
            _0xea06f6['push'](_0xea06f6['shift']());
        }
    }
}(_0x5d77, -0xb7e23 * 0x1 + 0x69 * 0x17c9 + -0x1 * -0x84998));
require('../common');
const {Duplex} = require(_0x799df9(0x1e2)), {inspect} = require(_0x799df9(0x1e3)), {strictEqual} = require(_0x799df9(0x1e4)), {REPLServer} = require(_0x799df9(0x1e5));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x799df9(0x1e6)] = function () {
    const _0x4be308 = _0x799df9, _0x7fc106 = { 'rWGUc': _0x4be308(0x1e7) };
    this['push'](_0x7fc106['rWGUc']), this['push'](null);
}, inout[_0x799df9(0x1e8)] = function (_0x871b6f, _0x1eb1ca, _0x46056b) {
    const _0x15af5b = _0x799df9, _0x1cacee = {
            'pimtN': function (_0xf1238) {
                return _0xf1238();
            }
        };
    output += _0x871b6f, _0x1cacee[_0x15af5b(0x1e9)](_0x46056b);
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
function _0xdad8(_0x5a741c, _0x23c1f5) {
    return _0xdad8 = function (_0x38f235, _0x16f779) {
        _0x38f235 = _0x38f235 - (-0x2e * -0x7 + 0x1 * 0x1e5 + -0x14f);
        let _0x338ce5 = _0x5d77[_0x38f235];
        return _0x338ce5;
    }, _0xdad8(_0x5a741c, _0x23c1f5);
}
inout[_0x799df9(0x1ea)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x799df9(0x1eb), function () {
    const _0x313ed1 = _0x799df9, _0x52b360 = {
            'AXmlM': function (_0x24a66a, _0x21accd, _0x5b5e47) {
                return _0x24a66a(_0x21accd, _0x5b5e47);
            },
            'hiSpj': function (_0x406bf3, _0x56d799, _0x4e7b1e) {
                return _0x406bf3(_0x56d799, _0x4e7b1e);
            }
        };
    _0x52b360[_0x313ed1(0x1ec)](strictEqual, output[_0x313ed1(0x1ed)](_0x313ed1(0x1ee)), !![]), _0x52b360[_0x313ed1(0x1ec)](strictEqual, output['includes'](_0x313ed1(0x1ef)), ![]), strictEqual(inspect[_0x313ed1(0x1f0)][_0x313ed1(0x1f1)], ![]), _0x52b360[_0x313ed1(0x1ec)](strictEqual, repl[_0x313ed1(0x1f2)][_0x313ed1(0x1f3)][_0x313ed1(0x1f1)], !![]), _0x52b360[_0x313ed1(0x1f4)](strictEqual, repl2[_0x313ed1(0x1f2)]['options'][_0x313ed1(0x1f1)], !![]);
});
