const _0x4493 = [
    '1pCmmSn',
    '5277LvrHpC',
    '11xwVFcN',
    '58943QWmiGL',
    '1cetubc',
    '239371uuWiXt',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Tests\x20reported\x20code\x20offsets\x20on\x20wasm\x20scripts',
    'sentinel',
    'emit_header',
    'emit_string',
    'unvqw',
    'emit_bytes',
    'trunc_buffer',
    'emit_section',
    'emit_u32v',
    'XMeOJ',
    'emit_u8',
    'Module',
    'compile',
    'addScript',
    'v8://test/compileFunctions',
    'enable',
    'Protocol',
    'Runtime',
    'evaluate',
    'Nubru',
    ']);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20compileAsync([',
    'Debugger',
    'onceScriptParsed',
    'url',
    'startsWith',
    'huurh',
    'has',
    'set',
    'scriptId',
    'size',
    'get',
    'Wasm\x20script\x20parsed:\x20ID\x20',
    ',\x20endColumn:\x20',
    '802147NJnatn',
    '691320puMLHK',
    '6481tKiJrV',
    '43eYLbpD',
    '384382kkxDjc',
    '3kISnCR'
];
function _0x1cde(_0x395ea5, _0x311df5) {
    return _0x1cde = function (_0x46a432, _0x88dc50) {
        _0x46a432 = _0x46a432 - (-0x9 * -0x112 + -0x5 * 0x1df + 0xe7);
        let _0x5b0282 = _0x4493[_0x46a432];
        return _0x5b0282;
    }, _0x1cde(_0x395ea5, _0x311df5);
}
const _0x2bbb8f = _0x1cde;
(function (_0x2e6977, _0x3b67e9) {
    const _0x40a9b4 = _0x1cde;
    while (!![]) {
        try {
            const _0x279a80 = -parseInt(_0x40a9b4(0x12e)) + -parseInt(_0x40a9b4(0x12f)) + parseInt(_0x40a9b4(0x130)) * parseInt(_0x40a9b4(0x131)) + parseInt(_0x40a9b4(0x132)) * parseInt(_0x40a9b4(0x133)) + parseInt(_0x40a9b4(0x134)) * -parseInt(_0x40a9b4(0x135)) + parseInt(_0x40a9b4(0x136)) * parseInt(_0x40a9b4(0x137)) + parseInt(_0x40a9b4(0x138)) * parseInt(_0x40a9b4(0x139));
            if (_0x279a80 === _0x3b67e9)
                break;
            else
                _0x2e6977['push'](_0x2e6977['shift']());
        } catch (_0x5a6415) {
            _0x2e6977['push'](_0x2e6977['shift']());
        }
    }
}(_0x4493, 0x317fb * 0x8 + -0x1a517 * -0xa + 0x1 * -0x1cac61), utils['load'](_0x2bbb8f(0x13a)));
let {session, contextGroup, Protocol} = InspectorTest[_0x2bbb8f(0x13b)](_0x2bbb8f(0x13c)), sentinel = -0x556 + 0x1 * -0x215e + 0x26b4;
function addHeader(_0x1fda16, _0x23b6ea) {
    const _0x427114 = _0x2bbb8f, _0x7a159 = { 'unvqw': _0x427114(0x13d) };
    _0x1fda16[_0x427114(0x13e)]();
    var _0x2ce345 = new Binary();
    _0x2ce345['emit_u8'](0x154f + -0x2332 + 0xde3), _0x2ce345['emit_u8'](-0x191c + 0x1 * 0x37e + 0x16 * 0xfc), _0x2ce345[_0x427114(0x13f)](_0x7a159[_0x427114(0x140)]), _0x2ce345['emit_bytes']([sentinel]), ++sentinel, _0x1fda16[_0x427114(0x141)](_0x2ce345[_0x427114(0x142)]()), _0x1fda16[_0x427114(0x143)](kTypeSectionCode, _0x1da2ac => {
        const _0x326374 = _0x427114;
        _0x1da2ac[_0x326374(0x144)](-0x2 * 0x4f4 + 0xde2 + 0x3 * -0x153), _0x1da2ac['emit_u8'](kWasmFunctionTypeForm), _0x1da2ac['emit_u32v'](0x1 * -0x71 + 0xda + -0x69), _0x1da2ac[_0x326374(0x144)](0x28b * -0x4 + -0x12c9 + 0x423 * 0x7);
    }), _0x1fda16['emit_section'](kFunctionSectionCode, _0x35cfb => {
        _0x35cfb['emit_u32v'](_0x23b6ea);
        for (let _0x9ec995 = 0xb5 * -0x1a + 0xfed + 0x11 * 0x25; _0x9ec995 < _0x23b6ea; ++_0x9ec995) {
            _0x35cfb['emit_u32v'](0x269 + 0x7c6 + -0xa2f);
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
    return _0x286a16[_0xd6dfae(0x145)](addHeader, _0x4d687c, 0x2005 + -0x4 * -0xf2 + -0x23cd), _0x4d687c[_0xd6dfae(0x142)]();
}
function createModuleWithEmptyCodeSection() {
    const _0x29aea3 = _0x2bbb8f, _0x1b260e = {
            'OBjfg': function (_0x41328e, _0x3f020a, _0x3c93a4) {
                return _0x41328e(_0x3f020a, _0x3c93a4);
            }
        };
    let _0x59f2ac = new Binary();
    return _0x1b260e['OBjfg'](addHeader, _0x59f2ac, -0x1f6 * 0xa + 0xcb * 0x29 + -0xce7 * 0x1), _0x59f2ac[_0x29aea3(0x146)](kCodeSectionCode), _0x59f2ac[_0x29aea3(0x144)](-0x8d * 0x34 + -0x2404 + -0x40a9 * -0x1), _0x59f2ac[_0x29aea3(0x144)](0x5 * 0x29d + 0xcd + -0x163 * 0xa), _0x59f2ac[_0x29aea3(0x142)]();
}
function createModuleWithFiveByteSectionLength() {
    const _0xad62a = _0x2bbb8f, _0x5c5a35 = {
            'YOeDK': function (_0x3092bb, _0x46ce98, _0x200922) {
                return _0x3092bb(_0x46ce98, _0x200922);
            }
        };
    let _0x5d05bf = new Binary();
    return _0x5c5a35['YOeDK'](addHeader, _0x5d05bf, 0x61e + -0xfc9 + 0x9ac), _0x5d05bf[_0xad62a(0x146)](kCodeSectionCode), _0x5d05bf[_0xad62a(0x141)]([
        -0x116e + -0x132c + -0x128f * -0x2,
        0x30 * 0xca + 0x376 + -0x28d6,
        -0x1dd * 0x7 + 0x1c5 * -0x1 + 0x14 * 0xc4,
        0xbb7 * 0x1 + 0xa2e + 0x1 * -0x1565,
        0x1dad + -0x1dcf + 0x11 * 0x2
    ]), _0x5d05bf['emit_u32v'](-0xad * -0x1 + 0xd * 0x10f + 0xe6f * -0x1), _0x5d05bf['emit_u32v'](0x4a * 0x11 + 0x6a0 + 0x18 * -0x7b), _0x5d05bf[_0xad62a(0x144)](0x1af0 + -0x2 * -0x27b + -0x1fe6), _0x5d05bf[_0xad62a(0x141)]([kExprEnd]), _0x5d05bf[_0xad62a(0x142)]();
}
function createModuleWithFiveBytePayload() {
    const _0x12aa5a = _0x2bbb8f, _0x5f1090 = {
            'xoGfH': function (_0x55f3e9, _0x2cf278, _0x2c5a4e) {
                return _0x55f3e9(_0x2cf278, _0x2c5a4e);
            }
        };
    let _0xfe10f2 = new Binary();
    return _0x5f1090['xoGfH'](addHeader, _0xfe10f2, -0xb5 * -0x11 + 0x135d + 0x115 * -0x1d), _0xfe10f2[_0x12aa5a(0x146)](kCodeSectionCode), _0xfe10f2[_0x12aa5a(0x141)]([
        0x1 * 0x93b + 0xc07 + -0x1 * 0x14ba,
        0x7e * -0x15 + -0x2364 + 0x2e3a,
        -0x1ba + -0x1 * 0x269f + 0x28d9 * 0x1,
        0x12bb + -0x4b * 0x4f + 0x4ea,
        0x5 * -0x5f3 + -0x1f96 * -0x1 + 0x9d * -0x3
    ]), _0xfe10f2[_0x12aa5a(0x141)]([
        -0x26bd + 0x1 * -0x24f7 + 0x4c35,
        0x1ce2 + 0x1be7 + -0x3849,
        0x1 * 0x11c7 + -0x30b * 0xb + 0x1032,
        0x1ab + 0x1668 + -0x4b7 * 0x5,
        0x21 * 0x87 + 0x17d5 + -0x74 * 0x5b
    ]), _0xfe10f2[_0x12aa5a(0x144)](0xcd8 + -0xa0f + -0x2c7), _0xfe10f2[_0x12aa5a(0x144)](0x817 * -0x2 + 0x5 * 0x3b5 + -0x25b), _0xfe10f2['emit_bytes']([kExprEnd]), _0xfe10f2[_0x12aa5a(0x142)]();
}
function compileSync(_0x4bb84d) {
    const _0x29f17c = _0x2bbb8f;
    new WebAssembly[(_0x29f17c(0x147))](new Uint8Array(_0x4bb84d));
}
function compileAsync(_0xe806c) {
    const _0x733cb6 = _0x2bbb8f;
    WebAssembly[_0x733cb6(0x148)](new Uint8Array(_0xe806c));
}
contextGroup[_0x2bbb8f(0x149)]('' + compileSync + compileAsync, -0xa + -0xf47 * 0x1 + 0xf51, 0x6c * 0x29 + 0x2646 + -0x3792, _0x2bbb8f(0x14a)), InspectorTest['runAsyncTestSuite']([async function test() {
        const _0x3c907d = _0x2bbb8f, _0x21c0e8 = {
                'Nubru': function (_0x20cc56) {
                    return _0x20cc56();
                },
                'nlmzA': function (_0x387b13, _0x33a913) {
                    return _0x387b13 < _0x33a913;
                },
                'huurh': 'wasm://'
            };
        Protocol['Debugger'][_0x3c907d(0x14b)]();
        let _0x2c69f7 = new Map(), _0x449647 = [
                createModuleWithNoCodeSection,
                createModuleWithEmptyCodeSection,
                createModuleWithFiveByteSectionLength,
                createModuleWithFiveBytePayload
            ];
        for (let _0x434f4e of _0x449647) {
            session[_0x3c907d(0x14c)][_0x3c907d(0x14d)][_0x3c907d(0x14e)]({ 'expression': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20compileSync([' + _0x21c0e8[_0x3c907d(0x14f)](_0x434f4e) + _0x3c907d(0x150) + _0x434f4e() + ']);\x0a\x20\x20\x20\x20\x20\x20\x20\x20' });
            for (let _0x3ca989 = -0x25c2 * -0x1 + 0x14cf + -0x205 * 0x1d; _0x21c0e8['nlmzA'](_0x3ca989, 0x226b + 0x609 + -0x2872);) {
                ({params: params} = await Protocol[_0x3c907d(0x151)][_0x3c907d(0x152)]());
                if (!params[_0x3c907d(0x153)][_0x3c907d(0x154)](_0x21c0e8[_0x3c907d(0x155)]))
                    continue;
                !_0x2c69f7[_0x3c907d(0x156)](params['scriptId']) && _0x2c69f7[_0x3c907d(0x157)](params[_0x3c907d(0x158)], _0x2c69f7[_0x3c907d(0x159)]);
                let _0x39ee6a = _0x2c69f7[_0x3c907d(0x15a)](params[_0x3c907d(0x158)]);
                InspectorTest['log'](_0x3c907d(0x15b) + _0x39ee6a + ',\x20startColumn:\x20' + params['startColumn'] + _0x3c907d(0x15c) + params['endColumn'] + ',\x20codeOffset:\x20' + params['codeOffset']), ++_0x3ca989;
            }
        }
    }]);
