require('../common');
const {Duplex} = require(_0x799df9(482)), {inspect} = require(_0x799df9(483)), {strictEqual} = require(_0x799df9(484)), {REPLServer} = require(_0x799df9(485));
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout[_0x799df9(486)] = function () {
    const _0x4be308 = _0x799df9, _0x7fc106 = { 'rWGUc': _0x4be308(487) };
    this['push'](_0x7fc106['rWGUc']), this['push'](null);
}, inout[_0x799df9(488)] = function (_0x871b6f, _0x1eb1ca, _0x46056b) {
    const _0x15af5b = _0x799df9, _0x1cacee = {
            'pimtN': function (_0xf1238) {
                return _0xf1238();
            }
        };
    output += _0x871b6f, _0x1cacee[_0x15af5b(489)](_0x46056b);
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
function _0xdad8(_0x5a741c, _0x23c1f5) {
    return _0xdad8 = function (_0x38f235, _0x16f779) {
        _0x38f235 = _0x38f235 - (-46 * -7 + 1 * 485 + -335);
        let _0x338ce5 = _0x5d77[_0x38f235];
        return _0x338ce5;
    }, _0xdad8(_0x5a741c, _0x23c1f5);
}
inout[_0x799df9(490)] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on'](_0x799df9(491), function () {
    const _0x313ed1 = _0x799df9, _0x52b360 = {
            'AXmlM': function (_0x24a66a, _0x21accd, _0x5b5e47) {
                return _0x24a66a(_0x21accd, _0x5b5e47);
            },
            'hiSpj': function (_0x406bf3, _0x56d799, _0x4e7b1e) {
                return _0x406bf3(_0x56d799, _0x4e7b1e);
            }
        };
    _0x52b360[_0x313ed1(492)](strictEqual, output[_0x313ed1(493)](_0x313ed1(494)), !![]), _0x52b360[_0x313ed1(492)](strictEqual, output['includes'](_0x313ed1(495)), ![]), strictEqual(inspect[_0x313ed1(496)][_0x313ed1(497)], ![]), _0x52b360[_0x313ed1(492)](strictEqual, repl[_0x313ed1(498)][_0x313ed1(499)][_0x313ed1(497)], !![]), _0x52b360[_0x313ed1(500)](strictEqual, repl2[_0x313ed1(498)]['options'][_0x313ed1(497)], !![]);
});