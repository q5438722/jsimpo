var _0x6eea = [
    'test',
    'abc123',
    'ⓐⓑⓒ①②③',
    'abcd123',
    '🄰🄱🄲①②③',
    'exec',
    '123',
    '🄰🄱🄲',
    '/\x5cp{Other_Alphabetic}/u',
    '/\x5cP{OAlpha}/u',
    '/\x5cp{Other_Default_Ignorable_Code_Point}/u',
    '/\x5cP{ODI}/u',
    '/\x5cp{Other_Grapheme_Extend}/u',
    '/\x5cP{OGr_Ext}/u',
    '/\x5cP{OIDC}/u',
    '/\x5cP{OIDS}/u',
    '/\x5cp{Other_Lowercase}/u',
    '/\x5cp{Other_Math}/u',
    '/\x5cP{OMath}/u',
    '/\x5cp{Other_Uppercase}/u',
    '/\x5cP{OUpper}/u',
    '1hZnGWO',
    '133945JIUlsk',
    '99662vDFErP',
    '121089SGAQZO',
    '177620Jinwsa',
    '2MEIhZt',
    '4919UxpRHR',
    '104711uMPecG',
    '176107DQbiBR',
    'yiIja',
    'OGzYZ'
];
var _0x1d9296 = _0x5d93;
function _0x5d93(_0xc75ea0, _0x34e3da) {
    return _0x5d93 = function (_0x1852b3, _0x2946e9) {
        _0x1852b3 = _0x1852b3 - (-0x2610 + -0x14 * 0x53 + -0xf * -0x308);
        var _0x2c0a40 = _0x6eea[_0x1852b3];
        return _0x2c0a40;
    }, _0x5d93(_0xc75ea0, _0x34e3da);
}
(function (_0x2bd985, _0x1b0d49) {
    var _0x325f97 = _0x5d93;
    while (!![]) {
        try {
            var _0x4d6a05 = parseInt(_0x325f97(0xec)) * -parseInt(_0x325f97(0xed)) + parseInt(_0x325f97(0xee)) + -parseInt(_0x325f97(0xef)) + parseInt(_0x325f97(0xf0)) + -parseInt(_0x325f97(0xf1)) * -parseInt(_0x325f97(0xf2)) + -parseInt(_0x325f97(0xf3)) + parseInt(_0x325f97(0xf4));
            if (_0x4d6a05 === _0x1b0d49)
                break;
            else
                _0x2bd985['push'](_0x2bd985['shift']());
        } catch (_0x175c09) {
            _0x2bd985['push'](_0x2bd985['shift']());
        }
    }
}(_0x6eea, 0x1bdbd + -0x261a7 + 0x23824));
function t(_0x32c586, _0x438994) {
    var _0x42cf24 = _0x5d93, _0x15955f = {
            'yiIja': function (_0x45ca80, _0x1c7b9b) {
                return _0x45ca80(_0x1c7b9b);
            }
        };
    _0x15955f[_0x42cf24(0xf5)](assertTrue, _0x32c586['test'](_0x438994));
}
function f(_0x47d4a1, _0x882333) {
    var _0x400489 = _0x5d93, _0x1f32a1 = {
            'OGzYZ': function (_0x4740cd, _0x3fae74) {
                return _0x4740cd(_0x3fae74);
            }
        };
    _0x1f32a1[_0x400489(0xf6)](assertFalse, _0x47d4a1[_0x400489(0xf7)](_0x882333));
}
t(/\p{ASCII}+/u, _0x1d9296(0xf8)), f(/\p{ASCII}+/u, _0x1d9296(0xf9)), f(/\p{ASCII}+/u, '🄰🄱🄲①②③'), f(/\P{ASCII}+/u, _0x1d9296(0xfa)), t(/\P{ASCII}+/u, 'ⓐⓑⓒ①②③'), t(/\P{ASCII}+/u, _0x1d9296(0xfb)), f(/[^\p{ASCII}]+/u, 'abc123'), f(/[\p{ASCII}]+/u, _0x1d9296(0xf9)), f(/[\p{ASCII}]+/u, _0x1d9296(0xfb)), t(/[^\P{ASCII}]+/u, _0x1d9296(0xfa)), t(/[\P{ASCII}]+/u, _0x1d9296(0xf9)), f(/[^\P{ASCII}]+/u, _0x1d9296(0xfb)), t(/\p{Any}+/u, _0x1d9296(0xfb)), assertEquals(['�'], /\p{Any}/u[_0x1d9296(0xfc)]('��')), assertEquals(['�'], /\p{Any}/u[_0x1d9296(0xfc)]('��')), assertEquals(['𐀁'], /\p{Any}/u[_0x1d9296(0xfc)]('𐀁')), assertEquals(['�'], /\p{Any}/u[_0x1d9296(0xfc)]('�')), f(/\P{Any}+/u, _0x1d9296(0xfd)), f(/[\P{Any}]+/u, _0x1d9296(0xfd)), t(/[\P{Any}\d]+/u, _0x1d9296(0xfd)), t(/[^\P{Any}]+/u, '123'), t(/\p{Assigned}+/u, '123'), t(/\p{Assigned}+/u, _0x1d9296(0xfe)), f(/\p{Assigned}+/u, '﷐'), f(/\p{Assigned}+/u, '󿿿'), f(/\P{Assigned}+/u, _0x1d9296(0xfd)), f(/\P{Assigned}+/u, _0x1d9296(0xfe)), t(/\P{Assigned}+/u, '﷐'), t(/\P{Assigned}+/u, '󿿿'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, _0x1d9296(0xfd)), f(/[\P{Assigned}]+/u, '🄰🄱🄲'), f(/[^\P{Assigned}]+/u, '﷐'), t(/[\P{Assigned}]+/u, '󿿿'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows(_0x1d9296(0xff)), assertThrows(_0x1d9296(0x100)), assertThrows(_0x1d9296(0x101)), assertThrows(_0x1d9296(0x102)), assertThrows(_0x1d9296(0x103)), assertThrows(_0x1d9296(0x104)), assertThrows('/\x5cp{Other_ID_Continue}/u'), assertThrows(_0x1d9296(0x105)), assertThrows('/\x5cp{Other_ID_Start}/u'), assertThrows(_0x1d9296(0x106)), assertThrows(_0x1d9296(0x107)), assertThrows('/\x5cP{OLower}/u'), assertThrows(_0x1d9296(0x108)), assertThrows(_0x1d9296(0x109)), assertThrows(_0x1d9296(0x10a)), assertThrows(_0x1d9296(0x10b));
