function t(_0x32c586, _0x438994) {
    var _0x42cf24 = _0x5d93, _0x15955f = {
            'yiIja': function (_0x45ca80, _0x1c7b9b) {
                return _0x45ca80(_0x1c7b9b);
            }
        };
    _0x15955f[_0x42cf24(245)](assertTrue, _0x32c586['test'](_0x438994));
}
function f(_0x47d4a1, _0x882333) {
    var _0x400489 = _0x5d93, _0x1f32a1 = {
            'OGzYZ': function (_0x4740cd, _0x3fae74) {
                return _0x4740cd(_0x3fae74);
            }
        };
    _0x1f32a1[_0x400489(246)](assertFalse, _0x47d4a1[_0x400489(247)](_0x882333));
}
t(/\p{ASCII}+/u, _0x1d9296(248)), f(/\p{ASCII}+/u, _0x1d9296(249)), f(/\p{ASCII}+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32\u2460\u2461\u2462'), f(/\P{ASCII}+/u, _0x1d9296(250)), t(/\P{ASCII}+/u, '\u24D0\u24D1\u24D2\u2460\u2461\u2462'), t(/\P{ASCII}+/u, _0x1d9296(251)), f(/[^\p{ASCII}]+/u, 'abc123'), f(/[\p{ASCII}]+/u, _0x1d9296(249)), f(/[\p{ASCII}]+/u, _0x1d9296(251)), t(/[^\P{ASCII}]+/u, _0x1d9296(250)), t(/[\P{ASCII}]+/u, _0x1d9296(249)), f(/[^\P{ASCII}]+/u, _0x1d9296(251)), t(/\p{Any}+/u, _0x1d9296(251)), assertEquals(['\uFFFD'], /\p{Any}/u[_0x1d9296(252)]('\uFFFD\uFFFD')), assertEquals(['\uFFFD'], /\p{Any}/u[_0x1d9296(252)]('\uFFFD\uFFFD')), assertEquals(['\uD800\uDC01'], /\p{Any}/u[_0x1d9296(252)]('\uD800\uDC01')), assertEquals(['\uFFFD'], /\p{Any}/u[_0x1d9296(252)]('\uFFFD')), f(/\P{Any}+/u, _0x1d9296(253)), f(/[\P{Any}]+/u, _0x1d9296(253)), t(/[\P{Any}\d]+/u, _0x1d9296(253)), t(/[^\P{Any}]+/u, '123'), t(/\p{Assigned}+/u, '123'), t(/\p{Assigned}+/u, _0x1d9296(254)), f(/\p{Assigned}+/u, '\uFDD0'), f(/\p{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}+/u, _0x1d9296(253)), f(/\P{Assigned}+/u, _0x1d9296(254)), t(/\P{Assigned}+/u, '\uFDD0'), t(/\P{Assigned}+/u, '\uDBBF\uDFFF'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, _0x1d9296(253)), f(/[\P{Assigned}]+/u, '\uD83C\uDD30\uD83C\uDD31\uD83C\uDD32'), f(/[^\P{Assigned}]+/u, '\uFDD0'), t(/[\P{Assigned}]+/u, '\uDBBF\uDFFF'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows(_0x1d9296(255)), assertThrows(_0x1d9296(256)), assertThrows(_0x1d9296(257)), assertThrows(_0x1d9296(258)), assertThrows(_0x1d9296(259)), assertThrows(_0x1d9296(260)), assertThrows('/\\p{Other_ID_Continue}/u'), assertThrows(_0x1d9296(261)), assertThrows('/\\p{Other_ID_Start}/u'), assertThrows(_0x1d9296(262)), assertThrows(_0x1d9296(263)), assertThrows('/\\P{OLower}/u'), assertThrows(_0x1d9296(264)), assertThrows(_0x1d9296(265)), assertThrows(_0x1d9296(266)), assertThrows(_0x1d9296(267));