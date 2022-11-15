const _0x559b = [
    'declarations',
    'log',
    'name',
    '\x22:\x20within\x20',
    'UnaryExpression',
    'void',
    'argument',
    'Identifier',
    'undefined',
    'single',
    '542tUvVAV',
    '1459xVbzpC',
    '1470639cdbzTF',
    '1546572wsODUl',
    '2670CMbQCt',
    '462uteTep',
    '47563rGfANl',
    '33PkohBm',
    '280863UYDVLy',
    '401rnmdEa',
    '7499ZaOGGp',
    'ForStatement',
    'WhileStatement',
    'source',
    'VariableDeclaration',
    'forEach',
    'parentPath',
    'value',
    'type'
];
const _0x4b3dd3 = _0x36c9;
(function (_0xc7e53e, _0x25bae1) {
    const _0xb7b3b = _0x36c9;
    while (!![]) {
        try {
            const _0x52aeaa = parseInt(_0xb7b3b(0x1d8)) * parseInt(_0xb7b3b(0x1d9)) + parseInt(_0xb7b3b(0x1da)) + -parseInt(_0xb7b3b(0x1db)) + -parseInt(_0xb7b3b(0x1dc)) * -parseInt(_0xb7b3b(0x1dd)) + parseInt(_0xb7b3b(0x1de)) * parseInt(_0xb7b3b(0x1df)) + parseInt(_0xb7b3b(0x1e0)) + parseInt(_0xb7b3b(0x1e1)) * -parseInt(_0xb7b3b(0x1e2));
            if (_0x52aeaa === _0x25bae1)
                break;
            else
                _0xc7e53e['push'](_0xc7e53e['shift']());
        } catch (_0x6df85a) {
            _0xc7e53e['push'](_0xc7e53e['shift']());
        }
    }
}(_0x559b, 0xc14b0));
function _0x36c9(_0x5bb5c0, _0x1cc330) {
    return _0x36c9 = function (_0x559bed, _0x36c95f) {
        _0x559bed = _0x559bed - 0x1d8;
        let _0x107ccd = _0x559b[_0x559bed];
        return _0x107ccd;
    }, _0x36c9(_0x5bb5c0, _0x1cc330);
}
const BLOCKED = [
    _0x4b3dd3(0x1e3),
    _0x4b3dd3(0x1e4)
];
export default (_0x48d6b4, _0xd90763) => {
    const _0x39087f = _0x4b3dd3;
    let {jscodeshift: _0x12f721} = _0xd90763, _0x1a7cd0 = 0x0, _0x2be19e = _0x12f721(_0x48d6b4[_0x39087f(0x1e5)])['find'](_0x12f721[_0x39087f(0x1e6)])[_0x39087f(0x1e7)](_0x203b54);
    function _0x203b54(_0x276317) {
        const _0x31708c = _0x39087f;
        let _0x58bbaa = _0x276317, _0x39b3f6 = !![];
        while (_0x58bbaa = _0x58bbaa[_0x31708c(0x1e8)]) {
            if (~BLOCKED['indexOf'](_0x58bbaa[_0x31708c(0x1e9)][_0x31708c(0x1ea)])) {
                _0x39b3f6 = ![];
                break;
            }
        }
        _0x276317[_0x31708c(0x1e9)][_0x31708c(0x1eb)]['filter'](_0x139e3c)[_0x31708c(0x1e7)](_0x5a96d2 => {
            const _0x4eb492 = _0x31708c;
            _0x39b3f6 === ![] ? console[_0x4eb492(0x1ec)]('>\x20Skipping\x20removal\x20of\x20undefined\x20init\x20for\x20\x22' + _0x5a96d2['id'][_0x4eb492(0x1ed)] + _0x4eb492(0x1ee) + _0x58bbaa['value'][_0x4eb492(0x1ea)]) : _0x379082(_0x5a96d2);
        });
    }
    function _0x379082(_0xf6f3eb) {
        _0xf6f3eb['init'] = null, _0x1a7cd0++;
    }
    function _0x139e3c(_0x5a62b9) {
        const _0x5c8303 = _0x39087f;
        let {init: _0x4622d4} = _0x5a62b9;
        if (_0x4622d4) {
            if (_0x4622d4[_0x5c8303(0x1ea)] === _0x5c8303(0x1ef) && _0x4622d4['operator'] === _0x5c8303(0x1f0) && _0x4622d4[_0x5c8303(0x1f1)][_0x5c8303(0x1e9)] == 0x0)
                return !![];
            if (_0x4622d4['type'] === _0x5c8303(0x1f2) && _0x4622d4[_0x5c8303(0x1ed)] === _0x5c8303(0x1f3))
                return !![];
        }
        return ![];
    }
    return _0x1a7cd0 ? _0x2be19e['toSource']({ 'quote': _0x39087f(0x1f4) }) : null;
};
