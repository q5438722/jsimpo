utils[_0x457446(311)](_0x457446(312));
const {session, contextGroup, Protocol} = InspectorTest[_0x457446(313)](_0x457446(314));
session[_0x457446(315)]();
const builder = new WasmModuleBuilder(), fib_body = [
        kExprLocalGet,
        0,
        kExprLocalGet,
        0,
        kExprI32Const,
        2,
        kExprI32LeS,
        kExprBrIf,
        0,
        kExprI32Const,
        1,
        kExprI32Sub,
        kExprCallFunction,
        0,
        kExprLocalGet,
        0,
        kExprI32Const,
        2,
        kExprI32Sub,
        kExprCallFunction,
        0,
        kExprI32Add
    ], fib = builder[_0x457446(316)](_0x457446(317), kSig_i_i)[_0x457446(318)](fib_body)[_0x457446(319)](), module_bytes = builder[_0x457446(320)](), find_offset = _0x49038b => fib[_0x457446(321)] + fib_body['indexOf'](_0x49038b), breakpoints = [
        {
            'loc': find_offset(kExprLocalGet),
            'cond': _0x457446(322)
        },
        {
            'loc': find_offset(kExprBrIf),
            'cond': _0x457446(323)
        },
        {
            'loc': find_offset(kExprCallFunction),
            'cond': _0x457446(324)
        }
    ];
function _0x11c7(_0x37ddfa, _0x4db637) {
    return _0x11c7 = function (_0x5e8427, _0x11c720) {
        _0x5e8427 = _0x5e8427 - 300;
        let _0x4d4709 = _0x5e84[_0x5e8427];
        return _0x4d4709;
    }, _0x11c7(_0x37ddfa, _0x4db637);
}
Protocol['Debugger'][_0x457446(325)](async _0x2867e5 => {
    const _0xff2ab5 = _0x457446;
    var _0x19113c = _0x2867e5[_0xff2ab5(326)][_0xff2ab5(327)];
    await session[_0xff2ab5(328)](_0x19113c[0]['location']);
    var _0x28b395 = _0x2867e5['params']['callFrames'][0];
    for (var _0x460bd4 of _0x28b395[_0xff2ab5(329)]) {
        if (_0x460bd4[_0xff2ab5(330)] != _0xff2ab5(331))
            continue;
        var _0xb90f73 = await Protocol['Runtime'][_0xff2ab5(332)]({ 'objectId': _0x460bd4[_0xff2ab5(333)][_0xff2ab5(334)] });
        for (var {
                    name: _0x2723ab,
                    value: _0x3e8f86
                } of _0xb90f73[_0xff2ab5(335)][_0xff2ab5(335)]) {
            _0x3e8f86 = await WasmInspectorTest[_0xff2ab5(336)](_0x3e8f86), InspectorTest[_0xff2ab5(337)](_0x2723ab + ': ' + _0x3e8f86);
        }
    }
    Protocol['Debugger'][_0xff2ab5(338)]();
}), InspectorTest[_0x457446(339)]([async function test() {
        const _0x33f7da = _0x457446;
        await Protocol[_0x33f7da(340)][_0x33f7da(341)](), await Protocol[_0x33f7da(342)]['enable'](), InspectorTest[_0x33f7da(337)](_0x33f7da(343)), WasmInspectorTest[_0x33f7da(344)](module_bytes), InspectorTest[_0x33f7da(337)](_0x33f7da(345));
        const [, {params: _0x51fad3}] = await Protocol['Debugger'][_0x33f7da(346)](2);
        InspectorTest[_0x33f7da(337)](_0x33f7da(347) + _0x51fad3[_0x33f7da(348)]);
        for (let _0xeaa6db of breakpoints) {
            InspectorTest[_0x33f7da(337)](_0x33f7da(349) + _0xeaa6db[_0x33f7da(350)] + _0x33f7da(351) + _0xeaa6db['cond'] + '"'), InspectorTest['logMessage'](await Protocol[_0x33f7da(342)][_0x33f7da(352)]({
                'location': {
                    'scriptId': _0x51fad3[_0x33f7da(353)],
                    'lineNumber': 0,
                    'columnNumber': _0xeaa6db[_0x33f7da(350)]
                },
                'condition': _0xeaa6db[_0x33f7da(354)]
            }));
        }
        InspectorTest['log']('Calling fib(5)'), await WasmInspectorTest[_0x33f7da(355)](_0x33f7da(356), 'runWasm'), InspectorTest['log'](_0x33f7da(357));
    }]);