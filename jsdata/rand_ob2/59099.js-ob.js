const _0x5f2c = [
    'logTypeProfile',
    'result',
    'stopTypeProfile',
    'disable',
    'completeTest',
    '68sAjCtM',
    '6136aqwJjb',
    '5474EJTOBr',
    '253GFeMsy',
    '17KPtGrd',
    '80911nHPTYD',
    '1101606dowJzU',
    '1014392saesnc',
    '610831yTEETt',
    '3212639PPFRhx',
    '\x0afunction\x20g(a,\x20b,\x20c)\x20{\x0a\x20\x20return\x20\x27bye\x27;\x0a};\x0aclass\x20Tree\x20{};\x0aclass\x20Flower\x20extends\x20Tree{};\x0avar\x20f\x20=\x20new\x20Flower();\x0a//\x20We\x20store\x20the\x20type\x20when\x20a\x20variable\x20is\x20used.\x20If\x20a\x20toStringTag\x20is\x0a//\x20changes\x20the\x20type,\x20we\x20want\x20to\x20collect\x20that\x20changed\x20feedback.\x0a//\x20This\x20tests\x20ensures\x20that\x20we\x20collect\x20that\x20information\x20rather\x20than\x0a//\x20for\x20example\x20infer\x20the\x20types\x20from\x20the\x20internal\x20map,\x20which\x20wouldn\x27t\x0a//\x20know\x20about\x20a\x20toStringTag.\x0af[Symbol.toStringTag]\x20=\x20\x27Dog\x27;\x0ag({},\x20[],\x20f);\x0ag(3,\x202.3,\x20{a:\x2042});\x0a',
    'start',
    'Test\x20collecting\x20',
    'type\x20profile\x20data\x20with\x20Profiler.takeTypeProfile.',
    'Profiler',
    'startTypeProfile',
    'Runtime',
    'enable',
    'callee',
    'name',
    'runScript',
    'takeTypeProfile'
];
const _0x10bac0 = _0x5eac;
(function (_0x52b190, _0x5da307) {
    const _0x26c701 = _0x5eac;
    while (!![]) {
        try {
            const _0x3a7436 = -parseInt(_0x26c701(0xfa)) * -parseInt(_0x26c701(0xfb)) + parseInt(_0x26c701(0xfc)) * -parseInt(_0x26c701(0xfd)) + parseInt(_0x26c701(0xfe)) * parseInt(_0x26c701(0xff)) + -parseInt(_0x26c701(0x100)) + -parseInt(_0x26c701(0x101)) + -parseInt(_0x26c701(0x102)) + parseInt(_0x26c701(0x103));
            if (_0x3a7436 === _0x5da307)
                break;
            else
                _0x52b190['push'](_0x52b190['shift']());
        } catch (_0x29680c) {
            _0x52b190['push'](_0x52b190['shift']());
        }
    }
}(_0x5f2c, 0xda2b7));
const source = _0x10bac0(0x104);
let {session, contextGroup, Protocol} = InspectorTest[_0x10bac0(0x105)](_0x10bac0(0x106) + _0x10bac0(0x107));
function _0x5eac(_0xdfe025, _0x3d8ba3) {
    return _0x5eac = function (_0x5f2ce1, _0x5eacae) {
        _0x5f2ce1 = _0x5f2ce1 - 0xfa;
        let _0x3f44ae = _0x5f2c[_0x5f2ce1];
        return _0x3f44ae;
    }, _0x5eac(_0xdfe025, _0x3d8ba3);
}
(async function testTypeProfile() {
    const _0x18ce9e = _0x10bac0;
    await Protocol[_0x18ce9e(0x108)]['enable'](), await Protocol[_0x18ce9e(0x108)][_0x18ce9e(0x109)](), Protocol[_0x18ce9e(0x10a)][_0x18ce9e(0x10b)]();
    let {
        result: {scriptId: _0x3ccccb}
    } = await Protocol[_0x18ce9e(0x10a)]['compileScript']({
        'expression': source,
        'sourceURL': arguments[_0x18ce9e(0x10c)][_0x18ce9e(0x10d)],
        'persistScript': !![]
    });
    Protocol['Runtime'][_0x18ce9e(0x10e)]({ 'scriptId': _0x3ccccb }), await Protocol[_0x18ce9e(0x108)]['startTypeProfile']();
    let _0x1d220a = await Protocol[_0x18ce9e(0x108)][_0x18ce9e(0x10f)]();
    await session[_0x18ce9e(0x110)](_0x1d220a[_0x18ce9e(0x111)]['result'][0x0], source), Protocol[_0x18ce9e(0x108)][_0x18ce9e(0x112)](), Protocol[_0x18ce9e(0x108)][_0x18ce9e(0x113)](), await Protocol[_0x18ce9e(0x10a)][_0x18ce9e(0x113)](), InspectorTest[_0x18ce9e(0x114)]();
}());
