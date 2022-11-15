function t(_0xb1d225, _0x141ab0) {
    var _0xdb2415 = _0x4b24, _0x15d956 = {
            'vMdEK': function (_0x407fee, _0x5034e9) {
                return _0x407fee(_0x5034e9);
            }
        };
    _0x15d956[_0xdb2415(372)](assertTrue, _0xb1d225['test'](_0x141ab0));
}
function f(_0xcf1c3f, _0x516a99) {
    var _0x3c060c = _0x4b24, _0x106567 = {
            'KGXei': function (_0x1a03f8, _0x190464) {
                return _0x1a03f8(_0x190464);
            }
        };
    _0x106567[_0x3c060c(373)](assertFalse, _0xcf1c3f['test'](_0x516a99));
}
t(/\p{ASCII}+/u, 'abc123'), f(/\p{ASCII}+/u, _0x5cd73d(374)), f(/\p{ASCII}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\u2460\u2461\u2462'), f(/\P{ASCII}+/u, 'abcd123'), t(/\P{ASCII}+/u, _0x5cd73d(374)), t(/\P{ASCII}+/u, _0x5cd73d(375)), f(/[^\p{ASCII}]+/u, _0x5cd73d(376)), f(/[\p{ASCII}]+/u, _0x5cd73d(374)), f(/[\p{ASCII}]+/u, _0x5cd73d(375)), t(/[^\P{ASCII}]+/u, 'abcd123'), t(/[\P{ASCII}]+/u, _0x5cd73d(374)), f(/[^\P{ASCII}]+/u, _0x5cd73d(375)), t(/\p{Any}+/u, _0x5cd73d(375)), assertEquals(['\uFFFD'], /\p{Any}/u['exec']('\uFFFD\uFFFD')), assertEquals(['\uFFFD'], /\p{Any}/u['exec']('\uFFFD\uFFFD')), assertEquals(['\uD800\uDC01'], /\p{Any}/u[_0x5cd73d(377)]('\uD800\uDC01')), assertEquals(['\uFFFD'], /\p{Any}/u[_0x5cd73d(377)]('\uFFFD')), f(/\P{Any}+/u, _0x5cd73d(378)), f(/[\P{Any}]+/u, _0x5cd73d(378)), t(/[\P{Any}\d]+/u, _0x5cd73d(378)), t(/[^\P{Any}]+/u, _0x5cd73d(378)), t(/\p{Assigned}+/u, _0x5cd73d(378)), t(/\p{Assigned}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32'), f(/\p{Assigned}+/u, '\uFDD0'), f(/\p{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}+/u, _0x5cd73d(378)), f(/\P{Assigned}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32'), t(/\P{Assigned}+/u, '\uFDD0'), t(/\P{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, _0x5cd73d(378)), f(/[\P{Assigned}]+/u, _0x5cd73d(379)), f(/[^\P{Assigned}]+/u, '\uFDD0'), t(/[\P{Assigned}]+/u, '\uDBBF\uDFFF'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows('/\\p{Other_Alphabetic}/u'), assertThrows(_0x5cd73d(380)), assertThrows(_0x5cd73d(381)), assertThrows(_0x5cd73d(382)), assertThrows('/\\p{Other_Grapheme_Extend}/u'), assertThrows(_0x5cd73d(383)), assertThrows('/\\p{Other_ID_Continue}/u'), assertThrows(_0x5cd73d(384)), assertThrows(_0x5cd73d(385)), assertThrows(_0x5cd73d(386)), assertThrows('/\\p{Other_Lowercase}/u'), assertThrows(_0x5cd73d(387)), assertThrows('/\\p{Other_Math}/u'), assertThrows(_0x5cd73d(388)), assertThrows('/\\p{Other_Uppercase}/u'), assertThrows('/\\P{OUpper}/u');