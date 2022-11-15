function t(_0x13128a, _0x5c76a1) {
    var _0x419392 = {
        'SiYlm': function (_0x24868e, _0x43534a) {
            return _0x24868e(_0x43534a);
        }
    };
    _0x419392['SiYlm'](assertTrue, _0x13128a['test'](_0x5c76a1));
}
function f(_0x1b527c, _0x2e4fd8) {
    var _0x335cd9 = {
        'fRKvT': function (_0x183583, _0x38b94e) {
            return _0x183583(_0x38b94e);
        }
    };
    _0x335cd9['fRKvT'](assertFalse, _0x1b527c['test'](_0x2e4fd8));
}
t(/\p{ASCII}+/u, 'abc123'), f(/\p{ASCII}+/u, 'ⓐⓑⓒ①②③'), f(/\p{ASCII}+/u, '🄰🄱🄲①②③'), f(/\P{ASCII}+/u, 'abcd123'), t(/\P{ASCII}+/u, 'ⓐⓑⓒ①②③'), t(/\P{ASCII}+/u, '🄰🄱🄲①②③'), f(/[^\p{ASCII}]+/u, 'abc123'), f(/[\p{ASCII}]+/u, 'ⓐⓑⓒ①②③'), f(/[\p{ASCII}]+/u, '🄰🄱🄲①②③'), t(/[^\P{ASCII}]+/u, 'abcd123'), t(/[\P{ASCII}]+/u, 'ⓐⓑⓒ①②③'), f(/[^\P{ASCII}]+/u, '🄰🄱🄲①②③'), t(/\p{Any}+/u, '🄰🄱🄲①②③'), assertEquals(['�'], /\p{Any}/u['exec']('��')), assertEquals(['�'], /\p{Any}/u['exec']('��')), assertEquals(['𐀁'], /\p{Any}/u['exec']('𐀁')), assertEquals(['�'], /\p{Any}/u['exec']('�')), f(/\P{Any}+/u, '123'), f(/[\P{Any}]+/u, '123'), t(/[\P{Any}\d]+/u, '123'), t(/[^\P{Any}]+/u, '123'), t(/\p{Assigned}+/u, '123'), t(/\p{Assigned}+/u, '🄰🄱🄲'), f(/\p{Assigned}+/u, '﷐'), f(/\p{Assigned}+/u, '󿿿'), f(/\P{Assigned}+/u, '123'), f(/\P{Assigned}+/u, '🄰🄱🄲'), t(/\P{Assigned}+/u, '﷐'), t(/\P{Assigned}+/u, '󿿿'), f(/\P{Assigned}/u, ''), t(/[^\P{Assigned}]+/u, '123'), f(/[\P{Assigned}]+/u, '🄰🄱🄲'), f(/[^\P{Assigned}]+/u, '﷐'), t(/[\P{Assigned}]+/u, '󿿿'), f(/[\P{Assigned}]/u, ''), f(/[^\u1234\p{ASCII}]+/u, 'ሴ'), t(/[x\P{ASCII}]+/u, 'x'), t(/[\u1234\p{ASCII}]+/u, 'ሴ'), assertThrows('/\x5cp{Other_Alphabetic}/u'), assertThrows('/\x5cP{OAlpha}/u'), assertThrows('/\x5cp{Other_Default_Ignorable_Code_Point}/u'), assertThrows('/\x5cP{ODI}/u'), assertThrows('/\x5cp{Other_Grapheme_Extend}/u'), assertThrows('/\x5cP{OGr_Ext}/u'), assertThrows('/\x5cp{Other_ID_Continue}/u'), assertThrows('/\x5cP{OIDC}/u'), assertThrows('/\x5cp{Other_ID_Start}/u'), assertThrows('/\x5cP{OIDS}/u'), assertThrows('/\x5cp{Other_Lowercase}/u'), assertThrows('/\x5cP{OLower}/u'), assertThrows('/\x5cp{Other_Math}/u'), assertThrows('/\x5cP{OMath}/u'), assertThrows('/\x5cp{Other_Uppercase}/u'), assertThrows('/\x5cP{OUpper}/u');
