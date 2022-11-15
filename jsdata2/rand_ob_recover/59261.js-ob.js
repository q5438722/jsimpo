utils[_0x3ee11b(465)]('test/inspector/wasm-inspector-test.js');
const {session, contextGroup, Protocol} = InspectorTest[_0x3ee11b(466)](_0x3ee11b(467));
session[_0x3ee11b(468)]();
const builder = new WasmModuleBuilder(), fib_body = [
        kExprLocalGet,
        807 + -2862 + 5 * 411,
        kExprLocalGet,
        3075 + -1153 * 8 + 6149,
        kExprI32Const,
        4571 * -1 + 60 * -73 + -8953 * -1,
        kExprI32LeS,
        kExprBrIf,
        2410 + 2654 * 3 + -10372,
        kExprI32Const,
        -68 * 3 + -258 * 2 + 1 * 721,
        kExprI32Sub,
        kExprCallFunction,
        9212 + -4 * -473 + 694 * -16,
        kExprLocalGet,
        4165 + -3 * 2678 + -1 * -3869,
        kExprI32Const,
        4294 * 1 + 8352 + -12644,
        kExprI32Sub,
        kExprCallFunction,
        -6894 + 2223 + 4671,
        kExprI32Add
    ], fib = builder['addFunction'](_0x3ee11b(469), kSig_i_i)['addBody'](fib_body)[_0x3ee11b(470)](), module_bytes = builder['toArray'](), find_offset = _0x4ad8f2 => fib['body_offset'] + fib_body[_0x3ee11b(471)](_0x4ad8f2), breakpoints = [
        {
            'loc': find_offset(kExprLocalGet),
            'cond': _0x3ee11b(472)
        },
        {
            'loc': find_offset(kExprBrIf),
            'cond': _0x3ee11b(473)
        },
        {
            'loc': find_offset(kExprCallFunction),
            'cond': _0x3ee11b(474)
        }
    ];
function _0x547e(_0x49004f, _0x31a848) {
    return _0x547e = function (_0x212d8f, _0x26f14e) {
        _0x212d8f = _0x212d8f - (3437 * -2 + 47 * 59 + 4554);
        let _0x26833a = _0x5a80[_0x212d8f];
        return _0x26833a;
    }, _0x547e(_0x49004f, _0x31a848);
}
Protocol[_0x3ee11b(475)][_0x3ee11b(476)](async _0x55a82c => {
    const _0x5bcafe = _0x3ee11b, _0x7d422 = { 'qpBjH': _0x5bcafe(477) };
    var _0x37d943 = _0x55a82c[_0x5bcafe(478)][_0x5bcafe(479)];
    await session[_0x5bcafe(480)](_0x37d943[401 * 3 + 4496 + -1 * 5699]['location']);
    var _0x3c7d08 = _0x55a82c['params'][_0x5bcafe(479)][2200 * 4 + -271 * -17 + -327 * 41];
    for (var _0x20f776 of _0x3c7d08['scopeChain']) {
        if (_0x20f776[_0x5bcafe(481)] != _0x7d422[_0x5bcafe(482)])
            continue;
        var _0x596df0 = await Protocol['Runtime']['getProperties']({ 'objectId': _0x20f776[_0x5bcafe(483)][_0x5bcafe(484)] });
        for (var {
                    name: _0x1b8606,
                    value: _0x1e9dfe
                } of _0x596df0[_0x5bcafe(485)]['result']) {
            _0x1e9dfe = await WasmInspectorTest[_0x5bcafe(486)](_0x1e9dfe), InspectorTest[_0x5bcafe(487)](_0x1b8606 + ': ' + _0x1e9dfe);
        }
    }
    Protocol[_0x5bcafe(475)][_0x5bcafe(488)]();
}), InspectorTest[_0x3ee11b(489)]([async function test() {
        const _0x42c91c = _0x3ee11b, _0x461ba9 = {
                'xdmgZ': 'Instantiating.',
                'JMson': 'Waiting for wasm script.',
                'WBdiO': _0x42c91c(490),
                'NpdTt': _0x42c91c(491),
                'hnNyZ': 'runWasm',
                'QEoFr': _0x42c91c(492)
            };
        await Protocol[_0x42c91c(493)][_0x42c91c(494)](), await Protocol['Debugger'][_0x42c91c(494)](), InspectorTest[_0x42c91c(487)](_0x461ba9[_0x42c91c(495)]), WasmInspectorTest[_0x42c91c(496)](module_bytes), InspectorTest[_0x42c91c(487)](_0x461ba9['JMson']);
        const [, {params: _0x1ff0e3}] = await Protocol['Debugger'][_0x42c91c(497)](-3 * 2186 + 4567 * -1 + 11127 * 1);
        InspectorTest[_0x42c91c(487)](_0x42c91c(498) + _0x1ff0e3[_0x42c91c(499)]);
        for (let _0x52294b of breakpoints) {
            InspectorTest[_0x42c91c(487)]('Setting breakpoint at offset ' + _0x52294b[_0x42c91c(500)] + ', condition "' + _0x52294b[_0x42c91c(501)] + '"'), InspectorTest[_0x42c91c(502)](await Protocol['Debugger'][_0x42c91c(503)]({
                'location': {
                    'scriptId': _0x1ff0e3[_0x42c91c(504)],
                    'lineNumber': 0,
                    'columnNumber': _0x52294b['loc']
                },
                'condition': _0x52294b['cond']
            }));
        }
        InspectorTest[_0x42c91c(487)](_0x461ba9['WBdiO']), await WasmInspectorTest[_0x42c91c(505)](_0x461ba9['NpdTt'], _0x461ba9[_0x42c91c(506)]), InspectorTest['log'](_0x461ba9[_0x42c91c(507)]);
    }]);