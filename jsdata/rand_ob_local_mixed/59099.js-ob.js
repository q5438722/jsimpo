const _0x30fc = [
    '341789kVgiul',
    '1iwFOEx',
    '1Znxzfg',
    '303263kPWwjJ',
    '54403XyvvtL',
    '1kNqleR',
    '1327147SCMlmi',
    '412202RCVBVt',
    '2wrPOwe',
    '24uodmrI',
    '44026YmctgN',
    '2056525zwZgRb',
    '2txQzWL',
    '\x0afunction\x20g(a,\x20b,\x20c)\x20{\x0a\x20\x20return\x20\x27bye\x27;\x0a};\x0aclass\x20Tree\x20{};\x0aclass\x20Flower\x20extends\x20Tree{};\x0avar\x20f\x20=\x20new\x20Flower();\x0a//\x20We\x20store\x20the\x20type\x20when\x20a\x20variable\x20is\x20used.\x20If\x20a\x20toStringTag\x20is\x0a//\x20changes\x20the\x20type,\x20we\x20want\x20to\x20collect\x20that\x20changed\x20feedback.\x0a//\x20This\x20tests\x20ensures\x20that\x20we\x20collect\x20that\x20information\x20rather\x20than\x0a//\x20for\x20example\x20infer\x20the\x20types\x20from\x20the\x20internal\x20map,\x20which\x20wouldn\x27t\x0a//\x20know\x20about\x20a\x20toStringTag.\x0af[Symbol.toStringTag]\x20=\x20\x27Dog\x27;\x0ag({},\x20[],\x20f);\x0ag(3,\x202.3,\x20{a:\x2042});\x0a',
    'start',
    'Test\x20collecting\x20',
    'type\x20profile\x20data\x20with\x20Profiler.takeTypeProfile.',
    'Runtime',
    'enable',
    'compileScript',
    'name',
    'runScript',
    'Profiler',
    'startTypeProfile',
    'takeTypeProfile',
    'result',
    'stopTypeProfile',
    'disable',
    'completeTest'
];
function _0x1d7b(_0x3be61f, _0x8368d1) {
    return _0x1d7b = function (_0xf1084c, _0x184413) {
        _0xf1084c = _0xf1084c - (-0x10 * -0xc9 + 0x1154 * -0x1 + -0x1c * -0x3a);
        let _0x5e184c = _0x30fc[_0xf1084c];
        return _0x5e184c;
    }, _0x1d7b(_0x3be61f, _0x8368d1);
}
const _0x17b8cc = _0x1d7b;
(function (_0x23183a, _0x345d6f) {
    const _0x5e949d = _0x1d7b;
    while (!![]) {
        try {
            const _0x4b689d = -parseInt(_0x5e949d(0x194)) * parseInt(_0x5e949d(0x195)) + -parseInt(_0x5e949d(0x196)) * -parseInt(_0x5e949d(0x197)) + -parseInt(_0x5e949d(0x198)) * -parseInt(_0x5e949d(0x199)) + -parseInt(_0x5e949d(0x19a)) + parseInt(_0x5e949d(0x19b)) * -parseInt(_0x5e949d(0x19c)) + parseInt(_0x5e949d(0x19d)) * -parseInt(_0x5e949d(0x19e)) + parseInt(_0x5e949d(0x19f)) * parseInt(_0x5e949d(0x1a0));
            if (_0x4b689d === _0x345d6f)
                break;
            else
                _0x23183a['push'](_0x23183a['shift']());
        } catch (_0x17c127) {
            _0x23183a['push'](_0x23183a['shift']());
        }
    }
}(_0x30fc, 0x19134b + 0x59d4 * -0x37 + 0x845f1));
const source = _0x17b8cc(0x1a1);
let {session, contextGroup, Protocol} = InspectorTest[_0x17b8cc(0x1a2)](_0x17b8cc(0x1a3) + _0x17b8cc(0x1a4));
(async function testTypeProfile() {
    const _0x5f3f7d = _0x17b8cc;
    await Protocol['Profiler']['enable'](), await Protocol['Profiler']['startTypeProfile'](), Protocol[_0x5f3f7d(0x1a5)][_0x5f3f7d(0x1a6)]();
    let {
        result: {scriptId: _0x10c1e0}
    } = await Protocol['Runtime'][_0x5f3f7d(0x1a7)]({
        'expression': source,
        'sourceURL': arguments['callee'][_0x5f3f7d(0x1a8)],
        'persistScript': !![]
    });
    Protocol['Runtime'][_0x5f3f7d(0x1a9)]({ 'scriptId': _0x10c1e0 }), await Protocol[_0x5f3f7d(0x1aa)][_0x5f3f7d(0x1ab)]();
    let _0xd7571f = await Protocol[_0x5f3f7d(0x1aa)][_0x5f3f7d(0x1ac)]();
    await session['logTypeProfile'](_0xd7571f[_0x5f3f7d(0x1ad)][_0x5f3f7d(0x1ad)][-0x1e3 + 0x694 + -0x4b1 * 0x1], source), Protocol['Profiler'][_0x5f3f7d(0x1ae)](), Protocol[_0x5f3f7d(0x1aa)]['disable'](), await Protocol['Runtime'][_0x5f3f7d(0x1af)](), InspectorTest[_0x5f3f7d(0x1b0)]();
}());
