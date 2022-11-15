function _0x2e05(_0x2a1166, _0x2ef11e) {
    return _0x2e05 = function (_0xc6adaa, _0x2e05e1) {
        _0xc6adaa = _0xc6adaa - 149;
        var _0x2bfd00 = _0xc6ad[_0xc6adaa];
        return _0x2bfd00;
    }, _0x2e05(_0x2a1166, _0x2ef11e);
}
function t(_0x5e0c3e, _0x58aaf6) {
    assertTrue(_0x5e0c3e['test'](_0x58aaf6));
}
function f(_0x3a4b27, _0x55f0cc) {
    var _0x45a56b = _0x2e05;
    assertFalse(_0x3a4b27[_0x45a56b(160)](_0x55f0cc));
}
t(/\p{ASCII}+/u, _0x24cafb(161)), f(/\p{ASCII}+/u, _0x24cafb(162)), f(/\p{ASCII}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\u2460\u2461\u2462'), f(/\P{ASCII}+/u, _0x24cafb(163)), t(/\P{ASCII}+/u, _0x24cafb(162)), t(/\P{ASCII}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\u2460\u2461\u2462'), f(/[^\p{ASCII}]+/u, _0x24cafb(161)), f(/[\p{ASCII}]+/u, _0x24cafb(162)), f(/[\p{ASCII}]+/u, _0x24cafb(164)), t(/[^\P{ASCII}]+/u, _0x24cafb(163)), t(/[\P{ASCII}]+/u, '\u24D0\u24D1\u24D2\u2460\u2461\u2462'), f(/[^\P{ASCII}]+/u, _0x24cafb(164)), t(/\p{Any}+/u, _0x24cafb(164)), assertEquals(['\uFFFD'], /\p{Any}/u[_0x24cafb(165)]('\uFFFD\uFFFD')), assertEquals(['\uFFFD'], /\p{Any}/u['exec']('\uFFFD\uFFFD')), assertEquals(['\uD800\uDC01'], /\p{Any}/u[_0x24cafb(165)]('\uD800\uDC01')), assertEquals(['\uFFFD'], /\p{Any}/u[_0x24cafb(165)]('\uFFFD')), f(/\P{Any}+/u, _0x24cafb(166)), f(/[\P{Any}]+/u, _0x24cafb(166)), t(/[\P{Any}\d]+/u, _0x24cafb(166)), t(/[^\P{Any}]+/u, _0x24cafb(166)), t(/\p{Assigned}+/u, _0x24cafb(166)), t(/\p{Assigned}+/u, _0x24cafb(167)), f(/\p{Assigned}+/u, '\uFDD0'), f(/\p{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}+/u, _0x24cafb(166)), f(/\P{Assigned}+/u, _0x24cafb(167)), t(/\P{Assigned}+/u, '\uFDD0'), t(/\P{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, _0x24cafb(166)), f(/[\P{Assigned}]+/u, _0x24cafb(167)), f(/[^\P{Assigned}]+/u, '\uFDD0'), t(/[\P{Assigned}]+/u, '\uDBBF\uDFFF'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows(_0x24cafb(168)), assertThrows('/\\P{OAlpha}/u'), assertThrows(_0x24cafb(169)), assertThrows(_0x24cafb(170)), assertThrows('/\\p{Other_Grapheme_Extend}/u'), assertThrows(_0x24cafb(171)), assertThrows(_0x24cafb(172)), assertThrows('/\\P{OIDC}/u'), assertThrows(_0x24cafb(173)), assertThrows(_0x24cafb(174)), assertThrows(_0x24cafb(175)), assertThrows(_0x24cafb(176)), assertThrows(_0x24cafb(177)), assertThrows(_0x24cafb(178)), assertThrows(_0x24cafb(179)), assertThrows('/\\P{OUpper}/u');