const _0x30fc = ['341789kVgiul', '1iwFOEx', '1Znxzfg', '303263kPWwjJ', '54403XyvvtL', '1kNqleR', '1327147SCMlmi', '412202RCVBVt', '2wrPOwe', '24uodmrI', '44026YmctgN', '2056525zwZgRb', '2txQzWL', '\nfunction g(a, b, c) {\n  return \'bye\';\n};\nclass Tree {};\nclass Flower extends Tree{};\nvar f = new Flower();\n// We store the type when a variable is used. If a toStringTag is\n// changes the type, we want to collect that changed feedback.\n// This tests ensures that we collect that information rather than\n// for example infer the types from the internal map, which wouldn\'t\n// know about a toStringTag.\nf[Symbol.toStringTag] = \'Dog\';\ng({}, [], f);\ng(3, 2.3, {a: 42});\n', 'start', 'Test collecting ', 'type profile data with Profiler.takeTypeProfile.', 'Runtime', 'enable', 'compileScript', 'name', 'runScript', 'Profiler', 'startTypeProfile', 'takeTypeProfile', 'result', 'stopTypeProfile', 'disable', 'completeTest'];

function _0x1d7b(_0x3be61f, _0x8368d1) {
    return _0x1d7b = function (_0xf1084c, _0x184413) {
        _0xf1084c = _0xf1084c - 404;
        const _0x5e184c = _0x30fc[_0xf1084c];

        return _0x5e184c;
    }, _0x1d7b(_0x3be61f, _0x8368d1);
}
const _0x17b8cc = _0x1d7b;

(function (_0x23183a, _0x345d6f) {
    const _0x5e949d = _0x1d7b;

    while (true) {
        try {
            const _0x4b689d = -parseInt(_0x5e949d(0x194)) * parseInt(_0x5e949d(0x195)) + -parseInt(_0x5e949d(0x196)) * -parseInt(_0x5e949d(0x197)) + -parseInt(_0x5e949d(0x198)) * -parseInt(_0x5e949d(0x199)) + -parseInt(_0x5e949d(0x19a)) + parseInt(_0x5e949d(0x19b)) * -parseInt(_0x5e949d(0x19c)) + parseInt(_0x5e949d(0x19d)) * -parseInt(_0x5e949d(0x19e)) + parseInt(_0x5e949d(0x19f)) * parseInt(_0x5e949d(0x1a0));

            if (_0x4b689d === _0x345d6f) break;else _0x23183a.push(_0x23183a.shift());
        } catch (_0x17c127) {
            _0x23183a.push(_0x23183a.shift());
        }
    }
})(_0x30fc, 920752);

const source = _0x17b8cc(0x1a1);

var { session, contextGroup, Protocol } = InspectorTest[_0x17b8cc(0x1a2)](_0x17b8cc(0x1a3) + _0x17b8cc(0x1a4));

(async function testTypeProfile() {
    const _0x5f3f7d = _0x17b8cc;

    await Protocol.Profiler.enable(), await Protocol.Profiler.startTypeProfile(), Protocol[_0x5f3f7d(0x1a5)][_0x5f3f7d(0x1a6)]();
    var {
        result: { scriptId: _0x10c1e0 }
    } = await Protocol.Runtime[_0x5f3f7d(0x1a7)]({
        'expression': source,
        'sourceURL': arguments.callee[_0x5f3f7d(0x1a8)],
        'persistScript': true
    });

    Protocol.Runtime[_0x5f3f7d(0x1a9)]({ 'scriptId': _0x10c1e0 }), await Protocol[_0x5f3f7d(0x1aa)][_0x5f3f7d(0x1ab)]();

    const _0xd7571f = await Protocol[_0x5f3f7d(0x1aa)][_0x5f3f7d(0x1ac)]();

    await session.logTypeProfile(_0xd7571f[_0x5f3f7d(0x1ad)][_0x5f3f7d(0x1ad)][0], source), Protocol.Profiler[_0x5f3f7d(0x1ae)](), Protocol[_0x5f3f7d(0x1aa)].disable(), await Protocol.Runtime[_0x5f3f7d(0x1af)](), InspectorTest[_0x5f3f7d(0x1b0)]();
})();
