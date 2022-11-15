'use strict';
const _0x50e9 = [
    '505173gxWZnF',
    '1eSkHHo',
    '13451AlBDqb',
    '7zGZAjh',
    '215320ajLsjy',
    '../common',
    '../common/fixtures',
    'assert',
    'child_process',
    'argv',
    'isMainThread',
    'process.chdir\x20is\x20not\x20available\x20in\x20Workers',
    'path',
    'self_ref_module',
    'printA.js',
    '\x22\x20-r\x20self_ref\x20\x22',
    'ifError',
    'strictEqual',
    '172147kNBRMr',
    '1HYZavh',
    '1232050nRlqne',
    '9XBkmTy',
    '28927aosGGQ',
    '112vKqmEg',
    '16795JeIThC'
];
function _0x5241(_0x3b954c, _0x108b5c) {
    return _0x5241 = function (_0x50e98a, _0x524102) {
        _0x50e98a = _0x50e98a - 0xbc;
        let _0x3b2374 = _0x50e9[_0x50e98a];
        return _0x3b2374;
    }, _0x5241(_0x3b954c, _0x108b5c);
}
const _0x18c122 = _0x5241;
(function (_0x536399, _0x14f7bd) {
    const _0x5ad251 = _0x5241;
    while (!![]) {
        try {
            const _0x1b6622 = parseInt(_0x5ad251(0xbc)) * -parseInt(_0x5ad251(0xbd)) + parseInt(_0x5ad251(0xbe)) + -parseInt(_0x5ad251(0xbf)) * parseInt(_0x5ad251(0xc0)) + -parseInt(_0x5ad251(0xc1)) * parseInt(_0x5ad251(0xc2)) + parseInt(_0x5ad251(0xc3)) + parseInt(_0x5ad251(0xc4)) * parseInt(_0x5ad251(0xc5)) + -parseInt(_0x5ad251(0xc6)) * -parseInt(_0x5ad251(0xc7));
            if (_0x1b6622 === _0x14f7bd)
                break;
            else
                _0x536399['push'](_0x536399['shift']());
        } catch (_0x1eeab1) {
            _0x536399['push'](_0x536399['shift']());
        }
    }
}(_0x50e9, 0xe6900));
const common = require(_0x18c122(0xc8)), fixtures = require(_0x18c122(0xc9)), assert = require(_0x18c122(0xca)), {exec} = require(_0x18c122(0xcb)), nodeBinary = process[_0x18c122(0xcc)][0x0];
if (!common[_0x18c122(0xcd)])
    common['skip'](_0x18c122(0xce));
const selfRefModule = fixtures[_0x18c122(0xcf)](_0x18c122(0xd0)), fixtureA = fixtures['path'](_0x18c122(0xd1));
exec('\x22' + nodeBinary + _0x18c122(0xd2) + fixtureA + '\x22', { 'cwd': selfRefModule }, (_0x3eb602, _0x172f6a, _0x593a00) => {
    const _0x4251c9 = _0x18c122;
    assert[_0x4251c9(0xd3)](_0x3eb602), assert[_0x4251c9(0xd4)](_0x172f6a, 'A\x0a');
});
