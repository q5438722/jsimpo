const _0x54fa = [
    '329263ryRLeF',
    '1LKYVTX',
    '477901ATcLeR',
    '85894OEufqR',
    '372692IiLLdY',
    './type-defs.js',
    'object',
    'isArray',
    'map',
    'values',
    'exports',
    'concat',
    'filter',
    '51887McauJr',
    '1038AUMJeV',
    '298GNvnOV',
    '80176GRbVyc'
];
const _0x180d03 = _0x4b46;
(function (_0x4989b0, _0x1e464d) {
    const _0x195fcb = _0x4b46;
    while (!![]) {
        try {
            const _0x54342c = -parseInt(_0x195fcb(0x7e)) + -parseInt(_0x195fcb(0x7f)) * parseInt(_0x195fcb(0x80)) + parseInt(_0x195fcb(0x81)) + parseInt(_0x195fcb(0x82)) + parseInt(_0x195fcb(0x83)) * parseInt(_0x195fcb(0x84)) + parseInt(_0x195fcb(0x85)) + -parseInt(_0x195fcb(0x86));
            if (_0x54342c === _0x1e464d)
                break;
            else
                _0x4989b0['push'](_0x4989b0['shift']());
        } catch (_0x59fffa) {
            _0x4989b0['push'](_0x4989b0['shift']());
        }
    }
}(_0x54fa, 0x3a6e3));
function _0x4b46(_0x38f9c2, _0xa1f595) {
    return _0x4b46 = function (_0x54fa79, _0x4b4617) {
        _0x54fa79 = _0x54fa79 - 0x7e;
        let _0x1067a3 = _0x54fa[_0x54fa79];
        return _0x1067a3;
    }, _0x4b46(_0x38f9c2, _0xa1f595);
}
const typeDefs = require(_0x180d03(0x87)), typeDescription = _0x1676ea => {
        const _0xd7f123 = _0x180d03;
        if (!_0x1676ea || typeof _0x1676ea !== 'function' && typeof _0x1676ea !== _0xd7f123(0x88))
            return _0x1676ea;
        if (Array[_0xd7f123(0x89)](_0x1676ea))
            return _0x1676ea[_0xd7f123(0x8a)](_0x5100b9 => typeDescription(_0x5100b9));
        for (const {
                    type: _0x1344b2,
                    description: _0x4597c1
                } of Object[_0xd7f123(0x8b)](typeDefs)) {
            if (_0x1344b2 === _0x1676ea)
                return _0x4597c1 || _0x1344b2;
        }
        return _0x1676ea;
    };
module[_0x180d03(0x8c)] = _0xfd6d26 => [][_0x180d03(0x8d)](typeDescription(_0xfd6d26))[_0x180d03(0x8e)](_0x50f0ab => _0x50f0ab !== undefined);
