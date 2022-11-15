utils[_0x28b396(490)](_0x28b396(491));
let {session, contextGroup, Protocol} = InspectorTest[_0x28b396(492)](_0x28b396(493)), sentinel = 0;
function addHeader(_0x211724, _0x19b0a7) {
    const _0x3df9ab = _0x28b396;
    _0x211724['emit_header']();
    var _0x3fa03f = new Binary();
    _0x3fa03f['emit_u8'](0), _0x3fa03f[_0x3df9ab(494)](10), _0x3fa03f[_0x3df9ab(495)](_0x3df9ab(496)), _0x3fa03f[_0x3df9ab(497)]([sentinel]), ++sentinel, _0x211724[_0x3df9ab(497)](_0x3fa03f[_0x3df9ab(498)]()), _0x211724['emit_section'](kTypeSectionCode, _0x1327e9 => {
        const _0x97e98c = _0x3df9ab;
        _0x1327e9[_0x97e98c(499)](1), _0x1327e9[_0x97e98c(494)](kWasmFunctionTypeForm), _0x1327e9[_0x97e98c(499)](0), _0x1327e9[_0x97e98c(499)](0);
    }), _0x211724[_0x3df9ab(500)](kFunctionSectionCode, _0x4c65d3 => {
        const _0x4e03c1 = _0x3df9ab;
        _0x4c65d3[_0x4e03c1(499)](_0x19b0a7);
        for (let _0x48ef61 = 0; _0x48ef61 < _0x19b0a7; ++_0x48ef61) {
            _0x4c65d3[_0x4e03c1(499)](0);
        }
    });
}
function createModuleWithNoCodeSection() {
    const _0x3ed85f = _0x28b396;
    let _0xb3b103 = new Binary();
    return addHeader(_0xb3b103, 0), _0xb3b103[_0x3ed85f(498)]();
}
function createModuleWithEmptyCodeSection() {
    const _0x2f7350 = _0x28b396;
    let _0x1ae9e3 = new Binary();
    return addHeader(_0x1ae9e3, 0), _0x1ae9e3[_0x2f7350(494)](kCodeSectionCode), _0x1ae9e3['emit_u32v'](1), _0x1ae9e3['emit_u32v'](0), _0x1ae9e3['trunc_buffer']();
}
function createModuleWithFiveByteSectionLength() {
    const _0x483e1d = _0x28b396;
    let _0x2c97ed = new Binary();
    return addHeader(_0x2c97ed, 1), _0x2c97ed[_0x483e1d(494)](kCodeSectionCode), _0x2c97ed[_0x483e1d(497)]([
        132,
        128,
        128,
        128,
        0
    ]), _0x2c97ed[_0x483e1d(499)](1), _0x2c97ed['emit_u32v'](2), _0x2c97ed['emit_u32v'](0), _0x2c97ed[_0x483e1d(497)]([kExprEnd]), _0x2c97ed[_0x483e1d(498)]();
}
function _0x4bbe(_0x3c72f5, _0x14559e) {
    return _0x4bbe = function (_0x35ce0f, _0x4bbeac) {
        _0x35ce0f = _0x35ce0f - 480;
        let _0x477d27 = _0x35ce[_0x35ce0f];
        return _0x477d27;
    }, _0x4bbe(_0x3c72f5, _0x14559e);
}
function createModuleWithFiveBytePayload() {
    const _0x14d066 = _0x28b396;
    let _0x5676de = new Binary();
    return addHeader(_0x5676de, 1), _0x5676de['emit_u8'](kCodeSectionCode), _0x5676de['emit_bytes']([
        136,
        128,
        128,
        128,
        0
    ]), _0x5676de[_0x14d066(497)]([
        129,
        128,
        128,
        128,
        0
    ]), _0x5676de[_0x14d066(499)](2), _0x5676de[_0x14d066(499)](0), _0x5676de[_0x14d066(497)]([kExprEnd]), _0x5676de[_0x14d066(498)]();
}
function compileSync(_0x1d90cf) {
    new WebAssembly['Module'](new Uint8Array(_0x1d90cf));
}
function compileAsync(_0x517f93) {
    WebAssembly['compile'](new Uint8Array(_0x517f93));
}
contextGroup[_0x28b396(501)]('' + compileSync + compileAsync, 0, 0, 'v8://test/compileFunctions'), InspectorTest[_0x28b396(502)]([async function test() {
        const _0xe27c87 = _0x28b396;
        Protocol[_0xe27c87(503)][_0xe27c87(504)]();
        let _0x464415 = new Map(), _0x198073 = [
                createModuleWithNoCodeSection,
                createModuleWithEmptyCodeSection,
                createModuleWithFiveByteSectionLength,
                createModuleWithFiveBytePayload
            ];
        for (let _0x37d30e of _0x198073) {
            session[_0xe27c87(505)][_0xe27c87(506)][_0xe27c87(507)]({ 'expression': _0xe27c87(508) + _0x37d30e() + _0xe27c87(509) + _0x37d30e() + _0xe27c87(510) });
            for (let _0x48b0d8 = 0; _0x48b0d8 < 2;) {
                ({params: params} = await Protocol['Debugger']['onceScriptParsed']());
                if (!params[_0xe27c87(511)][_0xe27c87(512)]('wasm://'))
                    continue;
                !_0x464415[_0xe27c87(513)](params['scriptId']) && _0x464415[_0xe27c87(514)](params[_0xe27c87(515)], _0x464415[_0xe27c87(516)]);
                let _0x4ec1a2 = _0x464415[_0xe27c87(517)](params[_0xe27c87(515)]);
                InspectorTest[_0xe27c87(518)]('Wasm script parsed: ID ' + _0x4ec1a2 + _0xe27c87(519) + params['startColumn'] + _0xe27c87(520) + params[_0xe27c87(521)] + _0xe27c87(522) + params[_0xe27c87(523)]), ++_0x48b0d8;
            }
        }
    }]);