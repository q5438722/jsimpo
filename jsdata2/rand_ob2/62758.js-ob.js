var _0xc6ad = [
    '/\x5cp{Other_ID_Continue}/u',
    '/\x5cp{Other_ID_Start}/u',
    '/\x5cP{OIDS}/u',
    '/\x5cp{Other_Lowercase}/u',
    '/\x5cP{OLower}/u',
    '/\x5cp{Other_Math}/u',
    '/\x5cP{OMath}/u',
    '/\x5cp{Other_Uppercase}/u',
    '7njSRnk',
    '21727ljIfmn',
    '51661JWVPny',
    '8avPPRu',
    '73kLOoxa',
    '5470yuILkR',
    '5MyBaSc',
    '55621JsbakV',
    '219590SnWSVc',
    '222344eneLkb',
    '1166387UphVGJ',
    'test',
    'abc123',
    'ⓐⓑⓒ①②③',
    'abcd123',
    '🄰🄱🄲①②③',
    'exec',
    '123',
    '🄰🄱🄲',
    '/\x5cp{Other_Alphabetic}/u',
    '/\x5cp{Other_Default_Ignorable_Code_Point}/u',
    '/\x5cP{ODI}/u',
    '/\x5cP{OGr_Ext}/u'
];
var _0x24cafb = _0x2e05;
(function (_0xaf711b, _0x4dffaf) {
    var _0x1c3c52 = _0x2e05;
    while (!![]) {
        try {
            var _0x3d68fa = parseInt(_0x1c3c52(0x95)) * -parseInt(_0x1c3c52(0x96)) + -parseInt(_0x1c3c52(0x97)) * -parseInt(_0x1c3c52(0x98)) + parseInt(_0x1c3c52(0x99)) * parseInt(_0x1c3c52(0x9a)) + -parseInt(_0x1c3c52(0x9b)) * -parseInt(_0x1c3c52(0x9c)) + parseInt(_0x1c3c52(0x9d)) + parseInt(_0x1c3c52(0x9e)) + -parseInt(_0x1c3c52(0x9f));
            if (_0x3d68fa === _0x4dffaf)
                break;
            else
                _0xaf711b['push'](_0xaf711b['shift']());
        } catch (_0x3385a5) {
            _0xaf711b['push'](_0xaf711b['shift']());
        }
    }
}(_0xc6ad, 0x34491));
function _0x2e05(_0x2a1166, _0x2ef11e) {
    return _0x2e05 = function (_0xc6adaa, _0x2e05e1) {
        _0xc6adaa = _0xc6adaa - 0x95;
        var _0x2bfd00 = _0xc6ad[_0xc6adaa];
        return _0x2bfd00;
    }, _0x2e05(_0x2a1166, _0x2ef11e);
}
function t(_0x5e0c3e, _0x58aaf6) {
    assertTrue(_0x5e0c3e['test'](_0x58aaf6));
}
function f(_0x3a4b27, _0x55f0cc) {
    var _0x45a56b = _0x2e05;
    assertFalse(_0x3a4b27[_0x45a56b(0xa0)](_0x55f0cc));
}
t(/\p{ASCII}+/u, _0x24cafb(0xa1)), f(/\p{ASCII}+/u, _0x24cafb(0xa2)), f(/\p{ASCII}+/u, '🄰🄱🄲①②③'), f(/\P{ASCII}+/u, _0x24cafb(0xa3)), t(/\P{ASCII}+/u, _0x24cafb(0xa2)), t(/\P{ASCII}+/u, '🄰🄱🄲①②③'), f(/[^\p{ASCII}]+/u, _0x24cafb(0xa1)), f(/[\p{ASCII}]+/u, _0x24cafb(0xa2)), f(/[\p{ASCII}]+/u, _0x24cafb(0xa4)), t(/[^\P{ASCII}]+/u, _0x24cafb(0xa3)), t(/[\P{ASCII}]+/u, 'ⓐⓑⓒ①②③'), f(/[^\P{ASCII}]+/u, _0x24cafb(0xa4)), t(/\p{Any}+/u, _0x24cafb(0xa4)), assertEquals(['�'], /\p{Any}/u[_0x24cafb(0xa5)]('��')), assertEquals(['�'], /\p{Any}/u['exec']('��')), assertEquals(['𐀁'], /\p{Any}/u[_0x24cafb(0xa5)]('𐀁')), assertEquals(['�'], /\p{Any}/u[_0x24cafb(0xa5)]('�')), f(/\P{Any}+/u, _0x24cafb(0xa6)), f(/[\P{Any}]+/u, _0x24cafb(0xa6)), t(/[\P{Any}\d]+/u, _0x24cafb(0xa6)), t(/[^\P{Any}]+/u, _0x24cafb(0xa6)), t(/\p{Assigned}+/u, _0x24cafb(0xa6)), t(/\p{Assigned}+/u, _0x24cafb(0xa7)), f(/\p{Assigned}+/u, '﷐'), f(/\p{Assigned}+/u, '󿿿'), f(/\P{Assigned}+/u, _0x24cafb(0xa6)), f(/\P{Assigned}+/u, _0x24cafb(0xa7)), t(/\P{Assigned}+/u, '﷐'), t(/\P{Assigned}+/u, '󿿿'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, _0x24cafb(0xa6)), f(/[\P{Assigned}]+/u, _0x24cafb(0xa7)), f(/[^\P{Assigned}]+/u, '﷐'), t(/[\P{Assigned}]+/u, '󿿿'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows(_0x24cafb(0xa8)), assertThrows('/\x5cP{OAlpha}/u'), assertThrows(_0x24cafb(0xa9)), assertThrows(_0x24cafb(0xaa)), assertThrows('/\x5cp{Other_Grapheme_Extend}/u'), assertThrows(_0x24cafb(0xab)), assertThrows(_0x24cafb(0xac)), assertThrows('/\x5cP{OIDC}/u'), assertThrows(_0x24cafb(0xad)), assertThrows(_0x24cafb(0xae)), assertThrows(_0x24cafb(0xaf)), assertThrows(_0x24cafb(0xb0)), assertThrows(_0x24cafb(0xb1)), assertThrows(_0x24cafb(0xb2)), assertThrows(_0x24cafb(0xb3)), assertThrows('/\x5cP{OUpper}/u');
