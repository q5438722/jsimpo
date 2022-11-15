const BLOCKED = [
    'ForStatement',
    'WhileStatement'
];
export default (_0x5c1440, _0x4a29b2) => {
    let {jscodeshift: _0x16e41e} = _0x4a29b2, _0x290d48 = -0xb02 + -0x1b4 * -0xa + -0x606, _0x12168b = _0x16e41e(_0x5c1440['source'])['find'](_0x16e41e['VariableDeclaration'])['forEach'](_0x191352);
    function _0x191352(_0x4a53b4) {
        let _0x4fdf76 = _0x4a53b4, _0x2a0ef6 = !![];
        while (_0x4fdf76 = _0x4fdf76['parentPath']) {
            if (~BLOCKED['indexOf'](_0x4fdf76['value']['type'])) {
                _0x2a0ef6 = ![];
                break;
            }
        }
        _0x4a53b4['value']['declarations']['filter'](_0x3716de)['forEach'](_0x45b61a => {
            _0x2a0ef6 === ![] ? console['log']('>\x20Skipping\x20removal\x20of\x20undefined\x20init\x20for\x20\x22' + _0x45b61a['id']['name'] + '\x22:\x20within\x20' + _0x4fdf76['value']['type']) : _0x631ebd(_0x45b61a);
        });
    }
    function _0x631ebd(_0x299a81) {
        _0x299a81['init'] = null, _0x290d48++;
    }
    function _0x3716de(_0x204c4a) {
        let {init: _0xb10fd} = _0x204c4a;
        if (_0xb10fd) {
            if (_0xb10fd['type'] === 'UnaryExpression' && _0xb10fd['operator'] === 'void' && _0xb10fd['argument']['value'] == 0x3 * -0x74 + -0xfac + 0x14 * 0xda)
                return !![];
            if (_0xb10fd['type'] === 'Identifier' && _0xb10fd['name'] === 'undefined')
                return !![];
        }
        return ![];
    }
    return _0x290d48 ? _0x12168b['toSource']({ 'quote': 'single' }) : null;
};
