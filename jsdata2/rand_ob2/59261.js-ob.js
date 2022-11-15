const _0x5e84 = [
    'body_offset',
    'false',
    'true',
    '$var0.value==3',
    'onPaused',
    'params',
    'callFrames',
    'logSourceLocation',
    'scopeChain',
    'type',
    'local',
    'getProperties',
    'object',
    'objectId',
    'result',
    'getWasmValue',
    'log',
    'resume',
    'runAsyncTestSuite',
    'Runtime',
    'enable',
    'Debugger',
    'Instantiating.',
    'instantiate',
    'Waiting\x20for\x20wasm\x20script.',
    'onceScriptParsed',
    'Got\x20wasm\x20script:\x20',
    'url',
    'Setting\x20breakpoint\x20at\x20offset\x20',
    'loc',
    ',\x20condition\x20\x22',
    'setBreakpoint',
    'scriptId',
    'cond',
    'evalWithUrl',
    'instance.exports.fib(5)',
    'fib\x20returned!',
    '6330kwjdyQ',
    '53irShHK',
    '53249rJYhsE',
    '271164xRzDee',
    '17573wawxDX',
    '17ftLKXd',
    '1IfHgUb',
    '86748xvdoWp',
    '252925nsCaSs',
    '12826OHJvPr',
    '65Qxpxgf',
    'load',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Test\x20conditional\x20breakpoints\x20in\x20wasm.',
    'setupScriptMap',
    'addFunction',
    'fib',
    'addBody',
    'exportFunc',
    'toArray'
];
const _0x457446 = _0x11c7;
(function (_0x30a602, _0x413f58) {
    const _0x42919d = _0x11c7;
    while (!![]) {
        try {
            const _0x3deaaa = -parseInt(_0x42919d(0x12c)) * -parseInt(_0x42919d(0x12d)) + -parseInt(_0x42919d(0x12e)) + parseInt(_0x42919d(0x12f)) + parseInt(_0x42919d(0x130)) * parseInt(_0x42919d(0x131)) + parseInt(_0x42919d(0x132)) * -parseInt(_0x42919d(0x133)) + parseInt(_0x42919d(0x134)) + parseInt(_0x42919d(0x135)) * -parseInt(_0x42919d(0x136));
            if (_0x3deaaa === _0x413f58)
                break;
            else
                _0x30a602['push'](_0x30a602['shift']());
        } catch (_0x24b04b) {
            _0x30a602['push'](_0x30a602['shift']());
        }
    }
}(_0x5e84, 0x2d139), utils[_0x457446(0x137)](_0x457446(0x138)));
const {session, contextGroup, Protocol} = InspectorTest[_0x457446(0x139)](_0x457446(0x13a));
session[_0x457446(0x13b)]();
const builder = new WasmModuleBuilder(), fib_body = [
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x0,
        kExprI32Const,
        0x2,
        kExprI32LeS,
        kExprBrIf,
        0x0,
        kExprI32Const,
        0x1,
        kExprI32Sub,
        kExprCallFunction,
        0x0,
        kExprLocalGet,
        0x0,
        kExprI32Const,
        0x2,
        kExprI32Sub,
        kExprCallFunction,
        0x0,
        kExprI32Add
    ], fib = builder[_0x457446(0x13c)](_0x457446(0x13d), kSig_i_i)[_0x457446(0x13e)](fib_body)[_0x457446(0x13f)](), module_bytes = builder[_0x457446(0x140)](), find_offset = _0x49038b => fib[_0x457446(0x141)] + fib_body['indexOf'](_0x49038b), breakpoints = [
        {
            'loc': find_offset(kExprLocalGet),
            'cond': _0x457446(0x142)
        },
        {
            'loc': find_offset(kExprBrIf),
            'cond': _0x457446(0x143)
        },
        {
            'loc': find_offset(kExprCallFunction),
            'cond': _0x457446(0x144)
        }
    ];
function _0x11c7(_0x37ddfa, _0x4db637) {
    return _0x11c7 = function (_0x5e8427, _0x11c720) {
        _0x5e8427 = _0x5e8427 - 0x12c;
        let _0x4d4709 = _0x5e84[_0x5e8427];
        return _0x4d4709;
    }, _0x11c7(_0x37ddfa, _0x4db637);
}
Protocol['Debugger'][_0x457446(0x145)](async _0x2867e5 => {
    const _0xff2ab5 = _0x457446;
    var _0x19113c = _0x2867e5[_0xff2ab5(0x146)][_0xff2ab5(0x147)];
    await session[_0xff2ab5(0x148)](_0x19113c[0x0]['location']);
    var _0x28b395 = _0x2867e5['params']['callFrames'][0x0];
    for (var _0x460bd4 of _0x28b395[_0xff2ab5(0x149)]) {
        if (_0x460bd4[_0xff2ab5(0x14a)] != _0xff2ab5(0x14b))
            continue;
        var _0xb90f73 = await Protocol['Runtime'][_0xff2ab5(0x14c)]({ 'objectId': _0x460bd4[_0xff2ab5(0x14d)][_0xff2ab5(0x14e)] });
        for (var {
                    name: _0x2723ab,
                    value: _0x3e8f86
                } of _0xb90f73[_0xff2ab5(0x14f)][_0xff2ab5(0x14f)]) {
            _0x3e8f86 = await WasmInspectorTest[_0xff2ab5(0x150)](_0x3e8f86), InspectorTest[_0xff2ab5(0x151)](_0x2723ab + ':\x20' + _0x3e8f86);
        }
    }
    Protocol['Debugger'][_0xff2ab5(0x152)]();
}), InspectorTest[_0x457446(0x153)]([async function test() {
        const _0x33f7da = _0x457446;
        await Protocol[_0x33f7da(0x154)][_0x33f7da(0x155)](), await Protocol[_0x33f7da(0x156)]['enable'](), InspectorTest[_0x33f7da(0x151)](_0x33f7da(0x157)), WasmInspectorTest[_0x33f7da(0x158)](module_bytes), InspectorTest[_0x33f7da(0x151)](_0x33f7da(0x159));
        const [, {params: _0x51fad3}] = await Protocol['Debugger'][_0x33f7da(0x15a)](0x2);
        InspectorTest[_0x33f7da(0x151)](_0x33f7da(0x15b) + _0x51fad3[_0x33f7da(0x15c)]);
        for (let _0xeaa6db of breakpoints) {
            InspectorTest[_0x33f7da(0x151)](_0x33f7da(0x15d) + _0xeaa6db[_0x33f7da(0x15e)] + _0x33f7da(0x15f) + _0xeaa6db['cond'] + '\x22'), InspectorTest['logMessage'](await Protocol[_0x33f7da(0x156)][_0x33f7da(0x160)]({
                'location': {
                    'scriptId': _0x51fad3[_0x33f7da(0x161)],
                    'lineNumber': 0x0,
                    'columnNumber': _0xeaa6db[_0x33f7da(0x15e)]
                },
                'condition': _0xeaa6db[_0x33f7da(0x162)]
            }));
        }
        InspectorTest['log']('Calling\x20fib(5)'), await WasmInspectorTest[_0x33f7da(0x163)](_0x33f7da(0x164), 'runWasm'), InspectorTest['log'](_0x33f7da(0x165));
    }]);
