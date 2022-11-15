utils['load'](_0x2bbb8f(314));
let {session, contextGroup, Protocol} = InspectorTest[_0x2bbb8f(315)](_0x2bbb8f(316)), sentinel = -1366 + 1 * -8542 + 9908;
function addHeader(_0x1fda16, _0x23b6ea) {
    const _0x427114 = _0x2bbb8f, _0x7a159 = { 'unvqw': _0x427114(317) };
    _0x1fda16[_0x427114(318)]();
    var _0x2ce345 = new Binary();
    _0x2ce345['emit_u8'](5455 + -9010 + 3555), _0x2ce345['emit_u8'](-6428 + 1 * 894 + 22 * 252), _0x2ce345[_0x427114(319)](_0x7a159[_0x427114(320)]), _0x2ce345['emit_bytes']([sentinel]), ++sentinel, _0x1fda16[_0x427114(321)](_0x2ce345[_0x427114(322)]()), _0x1fda16[_0x427114(323)](kTypeSectionCode, _0x1da2ac => {
        const _0x326374 = _0x427114;
        _0x1da2ac[_0x326374(324)](-2 * 1268 + 3554 + 3 * -339), _0x1da2ac['emit_u8'](kWasmFunctionTypeForm), _0x1da2ac['emit_u32v'](1 * -113 + 218 + -105), _0x1da2ac[_0x326374(324)](651 * -4 + -4809 + 1059 * 7);
    }), _0x1fda16['emit_section'](kFunctionSectionCode, _0x35cfb => {
        _0x35cfb['emit_u32v'](_0x23b6ea);
        for (let _0x9ec995 = 181 * -26 + 4077 + 17 * 37; _0x9ec995 < _0x23b6ea; ++_0x9ec995) {
            _0x35cfb['emit_u32v'](617 + 1990 + -2607);
        }
    });
}
function createModuleWithNoCodeSection() {
    const _0xd6dfae = _0x2bbb8f, _0x286a16 = {
            'XMeOJ': function (_0x56d4f0, _0x48cdf9, _0x1cde88) {
                return _0x56d4f0(_0x48cdf9, _0x1cde88);
            }
        };
    let _0x4d687c = new Binary();
    return _0x286a16[_0xd6dfae(325)](addHeader, _0x4d687c, 8197 + -4 * -242 + -9165), _0x4d687c[_0xd6dfae(322)]();
}
function createModuleWithEmptyCodeSection() {
    const _0x29aea3 = _0x2bbb8f, _0x1b260e = {
            'OBjfg': function (_0x41328e, _0x3f020a, _0x3c93a4) {
                return _0x41328e(_0x3f020a, _0x3c93a4);
            }
        };
    let _0x59f2ac = new Binary();
    return _0x1b260e['OBjfg'](addHeader, _0x59f2ac, -502 * 10 + 203 * 41 + -3303 * 1), _0x59f2ac[_0x29aea3(326)](kCodeSectionCode), _0x59f2ac[_0x29aea3(324)](-141 * 52 + -9220 + -16553 * -1), _0x59f2ac[_0x29aea3(324)](5 * 669 + 205 + -355 * 10), _0x59f2ac[_0x29aea3(322)]();
}
function createModuleWithFiveByteSectionLength() {
    const _0xad62a = _0x2bbb8f, _0x5c5a35 = {
            'YOeDK': function (_0x3092bb, _0x46ce98, _0x200922) {
                return _0x3092bb(_0x46ce98, _0x200922);
            }
        };
    let _0x5d05bf = new Binary();
    return _0x5c5a35['YOeDK'](addHeader, _0x5d05bf, 1566 + -4041 + 2476), _0x5d05bf[_0xad62a(326)](kCodeSectionCode), _0x5d05bf[_0xad62a(321)]([
        -4462 + -4908 + -4751 * -2,
        48 * 202 + 886 + -10454,
        -477 * 7 + 453 * -1 + 20 * 196,
        2999 * 1 + 2606 + 1 * -5477,
        7597 + -7631 + 17 * 2
    ]), _0x5d05bf['emit_u32v'](-173 * -1 + 13 * 271 + 3695 * -1), _0x5d05bf['emit_u32v'](74 * 17 + 1696 + 24 * -123), _0x5d05bf[_0xad62a(324)](6896 + -2 * -635 + -8166), _0x5d05bf[_0xad62a(321)]([kExprEnd]), _0x5d05bf[_0xad62a(322)]();
}
function createModuleWithFiveBytePayload() {
    const _0x12aa5a = _0x2bbb8f, _0x5f1090 = {
            'xoGfH': function (_0x55f3e9, _0x2cf278, _0x2c5a4e) {
                return _0x55f3e9(_0x2cf278, _0x2c5a4e);
            }
        };
    let _0xfe10f2 = new Binary();
    return _0x5f1090['xoGfH'](addHeader, _0xfe10f2, -181 * -17 + 4957 + 277 * -29), _0xfe10f2[_0x12aa5a(326)](kCodeSectionCode), _0xfe10f2[_0x12aa5a(321)]([
        1 * 2363 + 3079 + -1 * 5306,
        126 * -21 + -9060 + 11834,
        -442 + -1 * 9887 + 10457 * 1,
        4795 + -75 * 79 + 1258,
        5 * -1523 + -8086 * -1 + 157 * -3
    ]), _0xfe10f2[_0x12aa5a(321)]([
        -9917 + 1 * -9463 + 19509,
        7394 + 7143 + -14409,
        1 * 4551 + -779 * 11 + 4146,
        427 + 5736 + -1207 * 5,
        33 * 135 + 6101 + -116 * 91
    ]), _0xfe10f2[_0x12aa5a(324)](3288 + -2575 + -711), _0xfe10f2[_0x12aa5a(324)](2071 * -2 + 5 * 949 + -603), _0xfe10f2['emit_bytes']([kExprEnd]), _0xfe10f2[_0x12aa5a(322)]();
}
function compileSync(_0x4bb84d) {
    const _0x29f17c = _0x2bbb8f;
    new WebAssembly[(_0x29f17c(327))](new Uint8Array(_0x4bb84d));
}
function compileAsync(_0xe806c) {
    const _0x733cb6 = _0x2bbb8f;
    WebAssembly[_0x733cb6(328)](new Uint8Array(_0xe806c));
}
contextGroup[_0x2bbb8f(329)]('' + compileSync + compileAsync, -10 + -3911 * 1 + 3921, 108 * 41 + 9798 + -14226, _0x2bbb8f(330)), InspectorTest['runAsyncTestSuite']([async function test() {
        const _0x3c907d = _0x2bbb8f, _0x21c0e8 = {
                'Nubru': function (_0x20cc56) {
                    return _0x20cc56();
                },
                'nlmzA': function (_0x387b13, _0x33a913) {
                    return _0x387b13 < _0x33a913;
                },
                'huurh': 'wasm://'
            };
        Protocol['Debugger'][_0x3c907d(331)]();
        let _0x2c69f7 = new Map(), _0x449647 = [
                createModuleWithNoCodeSection,
                createModuleWithEmptyCodeSection,
                createModuleWithFiveByteSectionLength,
                createModuleWithFiveBytePayload
            ];
        for (let _0x434f4e of _0x449647) {
            session[_0x3c907d(332)][_0x3c907d(333)][_0x3c907d(334)]({ 'expression': '\n          compileSync([' + _0x21c0e8[_0x3c907d(335)](_0x434f4e) + _0x3c907d(336) + _0x434f4e() + ']);\n        ' });
            for (let _0x3ca989 = -9666 * -1 + 5327 + -517 * 29; _0x21c0e8['nlmzA'](_0x3ca989, 8811 + 1545 + -10354);) {
                ({params: params} = await Protocol[_0x3c907d(337)][_0x3c907d(338)]());
                if (!params[_0x3c907d(339)][_0x3c907d(340)](_0x21c0e8[_0x3c907d(341)]))
                    continue;
                !_0x2c69f7[_0x3c907d(342)](params['scriptId']) && _0x2c69f7[_0x3c907d(343)](params[_0x3c907d(344)], _0x2c69f7[_0x3c907d(345)]);
                let _0x39ee6a = _0x2c69f7[_0x3c907d(346)](params[_0x3c907d(344)]);
                InspectorTest['log'](_0x3c907d(347) + _0x39ee6a + ', startColumn: ' + params['startColumn'] + _0x3c907d(348) + params['endColumn'] + ', codeOffset: ' + params['codeOffset']), ++_0x3ca989;
            }
        }
    }]);