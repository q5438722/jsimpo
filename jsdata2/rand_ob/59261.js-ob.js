const _0x5a80 = [
    'start',
    'Test\x20conditional\x20breakpoints\x20in\x20wasm.',
    'setupScriptMap',
    'fib',
    'exportFunc',
    'indexOf',
    'false',
    'true',
    '$var0.value==3',
    'Debugger',
    'onPaused',
    'local',
    'params',
    'callFrames',
    'logSourceLocation',
    'type',
    'qpBjH',
    'object',
    'objectId',
    'result',
    'getWasmValue',
    'log',
    'resume',
    'runAsyncTestSuite',
    'Calling\x20fib(5)',
    'instance.exports.fib(5)',
    'fib\x20returned!',
    'Runtime',
    'enable',
    'xdmgZ',
    'instantiate',
    'onceScriptParsed',
    'Got\x20wasm\x20script:\x20',
    'url',
    'loc',
    'cond',
    'logMessage',
    'setBreakpoint',
    'scriptId',
    'evalWithUrl',
    'hnNyZ',
    'QEoFr',
    '570590qeQRhU',
    '2rAzuaC',
    '829056YkcOwQ',
    '1610917OawTqz',
    '111rObLtc',
    '2818fhtRrT',
    '1XHrdtE',
    '1251771yxRHIA',
    '306608CFmvMf',
    '3sPMzSi',
    '2YNOugG',
    '491027VslPCZ',
    'load'
];
const _0x3ee11b = _0x547e;
(function (_0x4bca9c, _0x5d2e3e) {
    const _0x46b365 = _0x547e;
    while (!![]) {
        try {
            const _0x291c67 = parseInt(_0x46b365(0x1c5)) * -parseInt(_0x46b365(0x1c6)) + parseInt(_0x46b365(0x1c7)) + -parseInt(_0x46b365(0x1c8)) + -parseInt(_0x46b365(0x1c9)) * parseInt(_0x46b365(0x1ca)) + parseInt(_0x46b365(0x1cb)) * parseInt(_0x46b365(0x1cc)) + -parseInt(_0x46b365(0x1cd)) * -parseInt(_0x46b365(0x1ce)) + parseInt(_0x46b365(0x1cf)) * parseInt(_0x46b365(0x1d0));
            if (_0x291c67 === _0x5d2e3e)
                break;
            else
                _0x4bca9c['push'](_0x4bca9c['shift']());
        } catch (_0x2fd9ce) {
            _0x4bca9c['push'](_0x4bca9c['shift']());
        }
    }
}(_0x5a80, 0x3ab54 + 0x15a5b2 + -0x25 * 0x4e44), utils[_0x3ee11b(0x1d1)]('test/inspector/wasm-inspector-test.js'));
const {session, contextGroup, Protocol} = InspectorTest[_0x3ee11b(0x1d2)](_0x3ee11b(0x1d3));
session[_0x3ee11b(0x1d4)]();
const builder = new WasmModuleBuilder(), fib_body = [
        kExprLocalGet,
        0x327 + -0xb2e + 0x5 * 0x19b,
        kExprLocalGet,
        0xc03 + -0x481 * 0x8 + 0x1805,
        kExprI32Const,
        0x11db * -0x1 + 0x3c * -0x49 + -0x22f9 * -0x1,
        kExprI32LeS,
        kExprBrIf,
        0x96a + 0xa5e * 0x3 + -0x2884,
        kExprI32Const,
        -0x44 * 0x3 + -0x102 * 0x2 + 0x1 * 0x2d1,
        kExprI32Sub,
        kExprCallFunction,
        0x23fc + -0x4 * -0x1d9 + 0x2b6 * -0x10,
        kExprLocalGet,
        0x1045 + -0x3 * 0xa76 + -0x1 * -0xf1d,
        kExprI32Const,
        0x10c6 * 0x1 + 0x20a0 + -0x3164,
        kExprI32Sub,
        kExprCallFunction,
        -0x1aee + 0x8af + 0x123f,
        kExprI32Add
    ], fib = builder['addFunction'](_0x3ee11b(0x1d5), kSig_i_i)['addBody'](fib_body)[_0x3ee11b(0x1d6)](), module_bytes = builder['toArray'](), find_offset = _0x4ad8f2 => fib['body_offset'] + fib_body[_0x3ee11b(0x1d7)](_0x4ad8f2), breakpoints = [
        {
            'loc': find_offset(kExprLocalGet),
            'cond': _0x3ee11b(0x1d8)
        },
        {
            'loc': find_offset(kExprBrIf),
            'cond': _0x3ee11b(0x1d9)
        },
        {
            'loc': find_offset(kExprCallFunction),
            'cond': _0x3ee11b(0x1da)
        }
    ];
function _0x547e(_0x49004f, _0x31a848) {
    return _0x547e = function (_0x212d8f, _0x26f14e) {
        _0x212d8f = _0x212d8f - (0xd6d * -0x2 + 0x2f * 0x3b + 0x11ca);
        let _0x26833a = _0x5a80[_0x212d8f];
        return _0x26833a;
    }, _0x547e(_0x49004f, _0x31a848);
}
Protocol[_0x3ee11b(0x1db)][_0x3ee11b(0x1dc)](async _0x55a82c => {
    const _0x5bcafe = _0x3ee11b, _0x7d422 = { 'qpBjH': _0x5bcafe(0x1dd) };
    var _0x37d943 = _0x55a82c[_0x5bcafe(0x1de)][_0x5bcafe(0x1df)];
    await session[_0x5bcafe(0x1e0)](_0x37d943[0x191 * 0x3 + 0x1190 + -0x1 * 0x1643]['location']);
    var _0x3c7d08 = _0x55a82c['params'][_0x5bcafe(0x1df)][0x898 * 0x4 + -0x10f * -0x11 + -0x147 * 0x29];
    for (var _0x20f776 of _0x3c7d08['scopeChain']) {
        if (_0x20f776[_0x5bcafe(0x1e1)] != _0x7d422[_0x5bcafe(0x1e2)])
            continue;
        var _0x596df0 = await Protocol['Runtime']['getProperties']({ 'objectId': _0x20f776[_0x5bcafe(0x1e3)][_0x5bcafe(0x1e4)] });
        for (var {
                    name: _0x1b8606,
                    value: _0x1e9dfe
                } of _0x596df0[_0x5bcafe(0x1e5)]['result']) {
            _0x1e9dfe = await WasmInspectorTest[_0x5bcafe(0x1e6)](_0x1e9dfe), InspectorTest[_0x5bcafe(0x1e7)](_0x1b8606 + ':\x20' + _0x1e9dfe);
        }
    }
    Protocol[_0x5bcafe(0x1db)][_0x5bcafe(0x1e8)]();
}), InspectorTest[_0x3ee11b(0x1e9)]([async function test() {
        const _0x42c91c = _0x3ee11b, _0x461ba9 = {
                'xdmgZ': 'Instantiating.',
                'JMson': 'Waiting\x20for\x20wasm\x20script.',
                'WBdiO': _0x42c91c(0x1ea),
                'NpdTt': _0x42c91c(0x1eb),
                'hnNyZ': 'runWasm',
                'QEoFr': _0x42c91c(0x1ec)
            };
        await Protocol[_0x42c91c(0x1ed)][_0x42c91c(0x1ee)](), await Protocol['Debugger'][_0x42c91c(0x1ee)](), InspectorTest[_0x42c91c(0x1e7)](_0x461ba9[_0x42c91c(0x1ef)]), WasmInspectorTest[_0x42c91c(0x1f0)](module_bytes), InspectorTest[_0x42c91c(0x1e7)](_0x461ba9['JMson']);
        const [, {params: _0x1ff0e3}] = await Protocol['Debugger'][_0x42c91c(0x1f1)](-0x3 * 0x88a + 0x11d7 * -0x1 + 0x2b77 * 0x1);
        InspectorTest[_0x42c91c(0x1e7)](_0x42c91c(0x1f2) + _0x1ff0e3[_0x42c91c(0x1f3)]);
        for (let _0x52294b of breakpoints) {
            InspectorTest[_0x42c91c(0x1e7)]('Setting\x20breakpoint\x20at\x20offset\x20' + _0x52294b[_0x42c91c(0x1f4)] + ',\x20condition\x20\x22' + _0x52294b[_0x42c91c(0x1f5)] + '\x22'), InspectorTest[_0x42c91c(0x1f6)](await Protocol['Debugger'][_0x42c91c(0x1f7)]({
                'location': {
                    'scriptId': _0x1ff0e3[_0x42c91c(0x1f8)],
                    'lineNumber': 0x0,
                    'columnNumber': _0x52294b['loc']
                },
                'condition': _0x52294b['cond']
            }));
        }
        InspectorTest[_0x42c91c(0x1e7)](_0x461ba9['WBdiO']), await WasmInspectorTest[_0x42c91c(0x1f9)](_0x461ba9['NpdTt'], _0x461ba9[_0x42c91c(0x1fa)]), InspectorTest['log'](_0x461ba9[_0x42c91c(0x1fb)]);
    }]);
