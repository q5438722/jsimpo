const _0x1998 = [
    'disable',
    '980623ZBYUAK',
    '672585KnRuhE',
    '217559GWpNLU',
    '1VhipJF',
    '1233001LMxWlP',
    '1268881GGJYVP',
    '1owiGJi',
    '784099xlrqKT',
    '1983115iobjDP',
    '\x0afunction\x20g(a,\x20b,\x20c)\x20{\x0a\x20\x20return\x20\x27bye\x27;\x0a};\x0aclass\x20Tree\x20{};\x0aclass\x20Flower\x20extends\x20Tree{};\x0avar\x20f\x20=\x20new\x20Flower();\x0a//\x20We\x20store\x20the\x20type\x20when\x20a\x20variable\x20is\x20used.\x20If\x20a\x20toStringTag\x20is\x0a//\x20changes\x20the\x20type,\x20we\x20want\x20to\x20collect\x20that\x20changed\x20feedback.\x0a//\x20This\x20tests\x20ensures\x20that\x20we\x20collect\x20that\x20information\x20rather\x20than\x0a//\x20for\x20example\x20infer\x20the\x20types\x20from\x20the\x20internal\x20map,\x20which\x20wouldn\x27t\x0a//\x20know\x20about\x20a\x20toStringTag.\x0af[Symbol.toStringTag]\x20=\x20\x27Dog\x27;\x0ag({},\x20[],\x20f);\x0ag(3,\x202.3,\x20{a:\x2042});\x0a',
    'Test\x20collecting\x20',
    'type\x20profile\x20data\x20with\x20Profiler.takeTypeProfile.',
    'Profiler',
    'enable',
    'startTypeProfile',
    'Runtime',
    'callee',
    'name',
    'takeTypeProfile',
    'result',
    'stopTypeProfile'
];
const _0x4fc251 = _0x5398;
(function (_0x440e33, _0x400cad) {
    const _0xc792e3 = _0x5398;
    while (!![]) {
        try {
            const _0xa45746 = parseInt(_0xc792e3(0x164)) + parseInt(_0xc792e3(0x165)) + parseInt(_0xc792e3(0x166)) + parseInt(_0xc792e3(0x167)) * parseInt(_0xc792e3(0x168)) + -parseInt(_0xc792e3(0x169)) * parseInt(_0xc792e3(0x16a)) + parseInt(_0xc792e3(0x16b)) + -parseInt(_0xc792e3(0x16c));
            if (_0xa45746 === _0x400cad)
                break;
            else
                _0x440e33['push'](_0x440e33['shift']());
        } catch (_0x407359) {
            _0x440e33['push'](_0x440e33['shift']());
        }
    }
}(_0x1998, -0x20fa * -0x71 + -0x12550f * 0x1 + 0xd7a94));
const source = _0x4fc251(0x16d);
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x4fc251(0x16e) + _0x4fc251(0x16f));
function _0x5398(_0x390f1d, _0x3f6565) {
    return _0x5398 = function (_0x1a5b1d, _0x57fbd7) {
        _0x1a5b1d = _0x1a5b1d - (-0x9f5 + 0x105a * 0x2 + -0x155b);
        let _0x1b5aba = _0x1998[_0x1a5b1d];
        return _0x1b5aba;
    }, _0x5398(_0x390f1d, _0x3f6565);
}
(async function testTypeProfile() {
    const _0x34950a = _0x4fc251;
    await Protocol[_0x34950a(0x170)][_0x34950a(0x171)](), await Protocol['Profiler'][_0x34950a(0x172)](), Protocol[_0x34950a(0x173)]['enable']();
    let {
        result: {scriptId: _0x182119}
    } = await Protocol[_0x34950a(0x173)]['compileScript']({
        'expression': source,
        'sourceURL': arguments[_0x34950a(0x174)][_0x34950a(0x175)],
        'persistScript': !![]
    });
    Protocol[_0x34950a(0x173)]['runScript']({ 'scriptId': _0x182119 }), await Protocol[_0x34950a(0x170)][_0x34950a(0x172)]();
    let _0xf37813 = await Protocol['Profiler'][_0x34950a(0x176)]();
    await session['logTypeProfile'](_0xf37813['result'][_0x34950a(0x177)][-0x1 * 0x290 + -0x38 * 0xf + -0x1 * -0x5d8], source), Protocol[_0x34950a(0x170)][_0x34950a(0x178)](), Protocol[_0x34950a(0x170)][_0x34950a(0x179)](), await Protocol[_0x34950a(0x173)]['disable'](), InspectorTest['completeTest']();
}());
