const _0x55a1 = [
    'type\x20profile\x20data\x20with\x20Profiler.takeTypeProfile.',
    'Profiler',
    'enable',
    'Runtime',
    'compileScript',
    'name',
    'runScript',
    'startTypeProfile',
    'logTypeProfile',
    'result',
    'stopTypeProfile',
    'disable',
    'completeTest',
    '309739oNClrz',
    '922339wyJPTw',
    '549127BIAWRp',
    '6581ksUGrd',
    '121uvvWAx',
    '230775WCvFll',
    '23fBsJor',
    '8779syAleI',
    '351289egZSct',
    '1WgnwMC',
    '\x0afunction\x20g(a,\x20b,\x20c)\x20{\x0a\x20\x20return\x20\x27bye\x27;\x0a};\x0aclass\x20Tree\x20{};\x0aclass\x20Flower\x20extends\x20Tree{};\x0avar\x20f\x20=\x20new\x20Flower();\x0a//\x20We\x20store\x20the\x20type\x20when\x20a\x20variable\x20is\x20used.\x20If\x20a\x20toStringTag\x20is\x0a//\x20changes\x20the\x20type,\x20we\x20want\x20to\x20collect\x20that\x20changed\x20feedback.\x0a//\x20This\x20tests\x20ensures\x20that\x20we\x20collect\x20that\x20information\x20rather\x20than\x0a//\x20for\x20example\x20infer\x20the\x20types\x20from\x20the\x20internal\x20map,\x20which\x20wouldn\x27t\x0a//\x20know\x20about\x20a\x20toStringTag.\x0af[Symbol.toStringTag]\x20=\x20\x27Dog\x27;\x0ag({},\x20[],\x20f);\x0ag(3,\x202.3,\x20{a:\x2042});\x0a',
    'Test\x20collecting\x20'
];
const _0x73ba57 = _0x245d;
function _0x245d(_0x186a06, _0x557085) {
    return _0x245d = function (_0x55a118, _0x245d6c) {
        _0x55a118 = _0x55a118 - 0x195;
        let _0x40be2a = _0x55a1[_0x55a118];
        return _0x40be2a;
    }, _0x245d(_0x186a06, _0x557085);
}
(function (_0x4d1d26, _0x57a1de) {
    const _0x36cf78 = _0x245d;
    while (!![]) {
        try {
            const _0x4008bb = -parseInt(_0x36cf78(0x195)) + parseInt(_0x36cf78(0x196)) + parseInt(_0x36cf78(0x197)) + parseInt(_0x36cf78(0x198)) * -parseInt(_0x36cf78(0x199)) + -parseInt(_0x36cf78(0x19a)) + -parseInt(_0x36cf78(0x19b)) * -parseInt(_0x36cf78(0x19c)) + -parseInt(_0x36cf78(0x19d)) * -parseInt(_0x36cf78(0x19e));
            if (_0x4008bb === _0x57a1de)
                break;
            else
                _0x4d1d26['push'](_0x4d1d26['shift']());
        } catch (_0x12b584) {
            _0x4d1d26['push'](_0x4d1d26['shift']());
        }
    }
}(_0x55a1, 0xa7ef1));
const source = _0x73ba57(0x19f);
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x73ba57(0x1a0) + _0x73ba57(0x1a1));
(async function testTypeProfile() {
    const _0x50beb6 = _0x73ba57;
    await Protocol[_0x50beb6(0x1a2)][_0x50beb6(0x1a3)](), await Protocol[_0x50beb6(0x1a2)]['startTypeProfile'](), Protocol[_0x50beb6(0x1a4)]['enable']();
    let {
        result: {scriptId: _0x24f4bb}
    } = await Protocol['Runtime'][_0x50beb6(0x1a5)]({
        'expression': source,
        'sourceURL': arguments['callee'][_0x50beb6(0x1a6)],
        'persistScript': !![]
    });
    Protocol[_0x50beb6(0x1a4)][_0x50beb6(0x1a7)]({ 'scriptId': _0x24f4bb }), await Protocol[_0x50beb6(0x1a2)][_0x50beb6(0x1a8)]();
    let _0x580a6f = await Protocol[_0x50beb6(0x1a2)]['takeTypeProfile']();
    await session[_0x50beb6(0x1a9)](_0x580a6f[_0x50beb6(0x1aa)][_0x50beb6(0x1aa)][0x0], source), Protocol[_0x50beb6(0x1a2)][_0x50beb6(0x1ab)](), Protocol[_0x50beb6(0x1a2)]['disable'](), await Protocol[_0x50beb6(0x1a4)][_0x50beb6(0x1ac)](), InspectorTest[_0x50beb6(0x1ad)]();
}());
