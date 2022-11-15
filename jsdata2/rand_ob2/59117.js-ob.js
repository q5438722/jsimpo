const _0x35ce = [
    'evaluate',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20compileSync([',
    ']);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20compileAsync([',
    ']);\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'url',
    'startsWith',
    'has',
    'set',
    'scriptId',
    'size',
    'get',
    'log',
    ',\x20startColumn:\x20',
    ',\x20endColumn:\x20',
    'endColumn',
    ',\x20codeOffset:\x20',
    'codeOffset',
    '179734uTRwjV',
    '820469GDTkRR',
    '58185ntPMMe',
    '1ArJHGj',
    '31089ruAUIe',
    '6SQCmwv',
    '2732LBCsXO',
    '355UYKTkZ',
    '1897XgvZCq',
    '375197OwebTQ',
    'load',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Tests\x20reported\x20code\x20offsets\x20on\x20wasm\x20scripts',
    'emit_u8',
    'emit_string',
    'sentinel',
    'emit_bytes',
    'trunc_buffer',
    'emit_u32v',
    'emit_section',
    'addScript',
    'runAsyncTestSuite',
    'Debugger',
    'enable',
    'Protocol',
    'Runtime'
];
const _0x28b396 = _0x4bbe;
(function (_0x1c192b, _0x536023) {
    const _0x3d233d = _0x4bbe;
    while (!![]) {
        try {
            const _0x8cdb9b = parseInt(_0x3d233d(0x1e0)) + -parseInt(_0x3d233d(0x1e1)) + -parseInt(_0x3d233d(0x1e2)) * parseInt(_0x3d233d(0x1e3)) + parseInt(_0x3d233d(0x1e4)) * parseInt(_0x3d233d(0x1e5)) + -parseInt(_0x3d233d(0x1e6)) * -parseInt(_0x3d233d(0x1e7)) + parseInt(_0x3d233d(0x1e8)) + parseInt(_0x3d233d(0x1e9));
            if (_0x8cdb9b === _0x536023)
                break;
            else
                _0x1c192b['push'](_0x1c192b['shift']());
        } catch (_0x2f065d) {
            _0x1c192b['push'](_0x1c192b['shift']());
        }
    }
}(_0x35ce, 0xcbc08), utils[_0x28b396(0x1ea)](_0x28b396(0x1eb)));
let {session, contextGroup, Protocol} = InspectorTest[_0x28b396(0x1ec)](_0x28b396(0x1ed)), sentinel = 0x0;
function addHeader(_0x211724, _0x19b0a7) {
    const _0x3df9ab = _0x28b396;
    _0x211724['emit_header']();
    var _0x3fa03f = new Binary();
    _0x3fa03f['emit_u8'](0x0), _0x3fa03f[_0x3df9ab(0x1ee)](0xa), _0x3fa03f[_0x3df9ab(0x1ef)](_0x3df9ab(0x1f0)), _0x3fa03f[_0x3df9ab(0x1f1)]([sentinel]), ++sentinel, _0x211724[_0x3df9ab(0x1f1)](_0x3fa03f[_0x3df9ab(0x1f2)]()), _0x211724['emit_section'](kTypeSectionCode, _0x1327e9 => {
        const _0x97e98c = _0x3df9ab;
        _0x1327e9[_0x97e98c(0x1f3)](0x1), _0x1327e9[_0x97e98c(0x1ee)](kWasmFunctionTypeForm), _0x1327e9[_0x97e98c(0x1f3)](0x0), _0x1327e9[_0x97e98c(0x1f3)](0x0);
    }), _0x211724[_0x3df9ab(0x1f4)](kFunctionSectionCode, _0x4c65d3 => {
        const _0x4e03c1 = _0x3df9ab;
        _0x4c65d3[_0x4e03c1(0x1f3)](_0x19b0a7);
        for (let _0x48ef61 = 0x0; _0x48ef61 < _0x19b0a7; ++_0x48ef61) {
            _0x4c65d3[_0x4e03c1(0x1f3)](0x0);
        }
    });
}
function createModuleWithNoCodeSection() {
    const _0x3ed85f = _0x28b396;
    let _0xb3b103 = new Binary();
    return addHeader(_0xb3b103, 0x0), _0xb3b103[_0x3ed85f(0x1f2)]();
}
function createModuleWithEmptyCodeSection() {
    const _0x2f7350 = _0x28b396;
    let _0x1ae9e3 = new Binary();
    return addHeader(_0x1ae9e3, 0x0), _0x1ae9e3[_0x2f7350(0x1ee)](kCodeSectionCode), _0x1ae9e3['emit_u32v'](0x1), _0x1ae9e3['emit_u32v'](0x0), _0x1ae9e3['trunc_buffer']();
}
function createModuleWithFiveByteSectionLength() {
    const _0x483e1d = _0x28b396;
    let _0x2c97ed = new Binary();
    return addHeader(_0x2c97ed, 0x1), _0x2c97ed[_0x483e1d(0x1ee)](kCodeSectionCode), _0x2c97ed[_0x483e1d(0x1f1)]([
        0x84,
        0x80,
        0x80,
        0x80,
        0x0
    ]), _0x2c97ed[_0x483e1d(0x1f3)](0x1), _0x2c97ed['emit_u32v'](0x2), _0x2c97ed['emit_u32v'](0x0), _0x2c97ed[_0x483e1d(0x1f1)]([kExprEnd]), _0x2c97ed[_0x483e1d(0x1f2)]();
}
function _0x4bbe(_0x3c72f5, _0x14559e) {
    return _0x4bbe = function (_0x35ce0f, _0x4bbeac) {
        _0x35ce0f = _0x35ce0f - 0x1e0;
        let _0x477d27 = _0x35ce[_0x35ce0f];
        return _0x477d27;
    }, _0x4bbe(_0x3c72f5, _0x14559e);
}
function createModuleWithFiveBytePayload() {
    const _0x14d066 = _0x28b396;
    let _0x5676de = new Binary();
    return addHeader(_0x5676de, 0x1), _0x5676de['emit_u8'](kCodeSectionCode), _0x5676de['emit_bytes']([
        0x88,
        0x80,
        0x80,
        0x80,
        0x0
    ]), _0x5676de[_0x14d066(0x1f1)]([
        0x81,
        0x80,
        0x80,
        0x80,
        0x0
    ]), _0x5676de[_0x14d066(0x1f3)](0x2), _0x5676de[_0x14d066(0x1f3)](0x0), _0x5676de[_0x14d066(0x1f1)]([kExprEnd]), _0x5676de[_0x14d066(0x1f2)]();
}
function compileSync(_0x1d90cf) {
    new WebAssembly['Module'](new Uint8Array(_0x1d90cf));
}
function compileAsync(_0x517f93) {
    WebAssembly['compile'](new Uint8Array(_0x517f93));
}
contextGroup[_0x28b396(0x1f5)]('' + compileSync + compileAsync, 0x0, 0x0, 'v8://test/compileFunctions'), InspectorTest[_0x28b396(0x1f6)]([async function test() {
        const _0xe27c87 = _0x28b396;
        Protocol[_0xe27c87(0x1f7)][_0xe27c87(0x1f8)]();
        let _0x464415 = new Map(), _0x198073 = [
                createModuleWithNoCodeSection,
                createModuleWithEmptyCodeSection,
                createModuleWithFiveByteSectionLength,
                createModuleWithFiveBytePayload
            ];
        for (let _0x37d30e of _0x198073) {
            session[_0xe27c87(0x1f9)][_0xe27c87(0x1fa)][_0xe27c87(0x1fb)]({ 'expression': _0xe27c87(0x1fc) + _0x37d30e() + _0xe27c87(0x1fd) + _0x37d30e() + _0xe27c87(0x1fe) });
            for (let _0x48b0d8 = 0x0; _0x48b0d8 < 0x2;) {
                ({params: params} = await Protocol['Debugger']['onceScriptParsed']());
                if (!params[_0xe27c87(0x1ff)][_0xe27c87(0x200)]('wasm://'))
                    continue;
                !_0x464415[_0xe27c87(0x201)](params['scriptId']) && _0x464415[_0xe27c87(0x202)](params[_0xe27c87(0x203)], _0x464415[_0xe27c87(0x204)]);
                let _0x4ec1a2 = _0x464415[_0xe27c87(0x205)](params[_0xe27c87(0x203)]);
                InspectorTest[_0xe27c87(0x206)]('Wasm\x20script\x20parsed:\x20ID\x20' + _0x4ec1a2 + _0xe27c87(0x207) + params['startColumn'] + _0xe27c87(0x208) + params[_0xe27c87(0x209)] + _0xe27c87(0x20a) + params[_0xe27c87(0x20b)]), ++_0x48b0d8;
            }
        }
    }]);
