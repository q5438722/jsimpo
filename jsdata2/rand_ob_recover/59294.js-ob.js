let {session, contextGroup, Protocol} = InspectorTest['start'](_0x30aed0(250));
var source = '\nfunction fib(x) {\n  if (x < 2) return 1;\n  return fib(x-1) + fib(x-2);\n}\nfib(5);\n';
function logErrorMessage(_0x12046a) {
    const _0x1edca4 = _0x30aed0, _0x3e4c16 = {
            'TEmvB': function (_0x2510a7, _0x384f7c) {
                return _0x2510a7 + _0x384f7c;
            },
            'XCcol': _0x1edca4(251)
        };
    InspectorTest[_0x1edca4(252)](_0x3e4c16[_0x1edca4(253)](_0x3e4c16[_0x1edca4(253)](_0x3e4c16[_0x1edca4(254)], _0x12046a[_0x1edca4(255)]['message']), '"'));
}
(async function test() {
    const _0x4bd3e1 = _0x30aed0, _0xdd12f3 = {
            'mNZwL': function (_0x375ca8, _0x145fca) {
                return _0x375ca8(_0x145fca);
            },
            'hohah': function (_0x382172, _0x473006) {
                return _0x382172 > _0x473006;
            },
            'npYCd': function (_0x3c7c77, _0x25c5ee) {
                return _0x3c7c77 < _0x25c5ee;
            },
            'AiMcW': _0x4bd3e1(256)
        };
    await Protocol[_0x4bd3e1(257)]['enable'](), _0xdd12f3['mNZwL'](logErrorMessage, await Protocol[_0x4bd3e1(258)][_0x4bd3e1(259)]()), await Protocol['Profiler'][_0x4bd3e1(260)](), _0xdd12f3['mNZwL'](logErrorMessage, await Protocol[_0x4bd3e1(258)][_0x4bd3e1(260)]()), await Protocol[_0x4bd3e1(257)][_0x4bd3e1(261)]({
        'expression': source,
        'sourceURL': arguments[_0x4bd3e1(262)][_0x4bd3e1(263)],
        'persistScript': !![]
    });
    const _0x5847c5 = (await Protocol['Profiler'][_0x4bd3e1(259)]())[_0x4bd3e1(264)][_0x4bd3e1(264)];
    if (_0xdd12f3[_0x4bd3e1(265)](_0x5847c5['length'], 133 * 43 + -9401 + 3682))
        InspectorTest[_0x4bd3e1(252)](_0x4bd3e1(266));
    await Protocol[_0x4bd3e1(258)][_0x4bd3e1(267)](), _0xdd12f3[_0x4bd3e1(268)](logErrorMessage, await Protocol[_0x4bd3e1(258)][_0x4bd3e1(259)]()), await Protocol[_0x4bd3e1(258)][_0x4bd3e1(260)]();
    const _0x308628 = (await Protocol[_0x4bd3e1(258)][_0x4bd3e1(259)]())['result'][_0x4bd3e1(264)];
    if (_0x308628[_0x4bd3e1(269)] > 6564 + 5924 + -14 * 892 && _0xdd12f3[_0x4bd3e1(270)](_0x308628[_0x4bd3e1(269)], _0x5847c5[_0x4bd3e1(269)]))
        InspectorTest[_0x4bd3e1(252)](_0xdd12f3['AiMcW']);
    await Protocol['Profiler'][_0x4bd3e1(267)](), await Protocol['Runtime']['disable'](), InspectorTest[_0x4bd3e1(271)]();
}()[_0x30aed0(272)](_0x2640dd => InspectorTest[_0x30aed0(252)](_0x30aed0(273) + _0x2640dd)));