const _0xd0c0 = [
    'name',
    'type',
    'init',
    'operator',
    'argument',
    'Identifier',
    'undefined',
    'toSource',
    'single',
    '98132EHqUGV',
    '10eARtOT',
    '914988IViFUA',
    '537290gdYbMw',
    '980651JfGAgz',
    '194377jOViCt',
    '16BdnRdb',
    '41227TEndWm',
    '499mEiplD',
    '3061gPBTdd',
    'source',
    'VariableDeclaration',
    'forEach',
    'parentPath',
    'indexOf',
    'value',
    'declarations',
    'log',
    '>\x20Skipping\x20removal\x20of\x20undefined\x20init\x20for\x20\x22'
];
function _0x289b(_0x3bd986, _0x5f3d41) {
    return _0x289b = function (_0xd0c02b, _0x289bed) {
        _0xd0c02b = _0xd0c02b - 0x67;
        let _0x2913cb = _0xd0c0[_0xd0c02b];
        return _0x2913cb;
    }, _0x289b(_0x3bd986, _0x5f3d41);
}
(function (_0x4c9bf4, _0x130115) {
    const _0x151b40 = _0x289b;
    while (!![]) {
        try {
            const _0x293f47 = parseInt(_0x151b40(0x67)) * parseInt(_0x151b40(0x68)) + -parseInt(_0x151b40(0x69)) + parseInt(_0x151b40(0x6a)) + parseInt(_0x151b40(0x6b)) + -parseInt(_0x151b40(0x6c)) + -parseInt(_0x151b40(0x6d)) * -parseInt(_0x151b40(0x6e)) + parseInt(_0x151b40(0x6f)) * -parseInt(_0x151b40(0x70));
            if (_0x293f47 === _0x130115)
                break;
            else
                _0x4c9bf4['push'](_0x4c9bf4['shift']());
        } catch (_0x333264) {
            _0x4c9bf4['push'](_0x4c9bf4['shift']());
        }
    }
}(_0xd0c0, 0x7f769));
const BLOCKED = [
    'ForStatement',
    'WhileStatement'
];
export default (_0x25a41d, _0x32dcc6) => {
    const _0x3fe1cd = _0x289b;
    let {jscodeshift: _0x9f2844} = _0x32dcc6, _0x133cdc = 0x0, _0xaef91f = _0x9f2844(_0x25a41d[_0x3fe1cd(0x71)])['find'](_0x9f2844[_0x3fe1cd(0x72)])[_0x3fe1cd(0x73)](_0x37caaf);
    function _0x37caaf(_0x325df6) {
        const _0x50c777 = _0x3fe1cd;
        let _0x43ef52 = _0x325df6, _0x355c9c = !![];
        while (_0x43ef52 = _0x43ef52[_0x50c777(0x74)]) {
            if (~BLOCKED[_0x50c777(0x75)](_0x43ef52[_0x50c777(0x76)]['type'])) {
                _0x355c9c = ![];
                break;
            }
        }
        _0x325df6[_0x50c777(0x76)][_0x50c777(0x77)]['filter'](_0x1f13af)[_0x50c777(0x73)](_0x3ab5ea => {
            const _0x3949ab = _0x50c777;
            _0x355c9c === ![] ? console[_0x3949ab(0x78)](_0x3949ab(0x79) + _0x3ab5ea['id'][_0x3949ab(0x7a)] + '\x22:\x20within\x20' + _0x43ef52['value'][_0x3949ab(0x7b)]) : _0x2d3d3f(_0x3ab5ea);
        });
    }
    function _0x2d3d3f(_0xdf6f39) {
        const _0x7029d7 = _0x3fe1cd;
        _0xdf6f39[_0x7029d7(0x7c)] = null, _0x133cdc++;
    }
    function _0x1f13af(_0x495ca6) {
        const _0x293482 = _0x3fe1cd;
        let {init: _0x2cbd7c} = _0x495ca6;
        if (_0x2cbd7c) {
            if (_0x2cbd7c['type'] === 'UnaryExpression' && _0x2cbd7c[_0x293482(0x7d)] === 'void' && _0x2cbd7c[_0x293482(0x7e)][_0x293482(0x76)] == 0x0)
                return !![];
            if (_0x2cbd7c[_0x293482(0x7b)] === _0x293482(0x7f) && _0x2cbd7c['name'] === _0x293482(0x80))
                return !![];
        }
        return ![];
    }
    return _0x133cdc ? _0xaef91f[_0x3fe1cd(0x81)]({ 'quote': _0x3fe1cd(0x82) }) : null;
};
