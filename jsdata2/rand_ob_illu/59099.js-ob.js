const _0x1998 = ['disable', '980623ZBYUAK', '672585KnRuhE', '217559GWpNLU', '1VhipJF', '1233001LMxWlP', '1268881GGJYVP', '1owiGJi', '784099xlrqKT', '1983115iobjDP', '\nfunction g(a, b, c) {\n  return \'bye\';\n};\nclass Tree {};\nclass Flower extends Tree{};\nvar f = new Flower();\n// We store the type when a variable is used. If a toStringTag is\n// changes the type, we want to collect that changed feedback.\n// This tests ensures that we collect that information rather than\n// for example infer the types from the internal map, which wouldn\'t\n// know about a toStringTag.\nf[Symbol.toStringTag] = \'Dog\';\ng({}, [], f);\ng(3, 2.3, {a: 42});\n', 'Test collecting ', 'type profile data with Profiler.takeTypeProfile.', 'Profiler', 'enable', 'startTypeProfile', 'Runtime', 'callee', 'name', 'takeTypeProfile', 'result', 'stopTypeProfile'];
const _0x4fc251 = _0x5398;

(function (_0x440e33, _0x400cad) {
    const _0xc792e3 = _0x5398;

    while (true) {
        try {
            const _0xa45746 = parseInt(_0xc792e3(0x164)) + parseInt(_0xc792e3(0x165)) + parseInt(_0xc792e3(0x166)) + parseInt(_0xc792e3(0x167)) * parseInt(_0xc792e3(0x168)) + -parseInt(_0xc792e3(0x169)) * parseInt(_0xc792e3(0x16a)) + parseInt(_0xc792e3(0x16b)) + -parseInt(_0xc792e3(0x16c));

            if (_0xa45746 === _0x400cad) break;else _0x440e33.push(_0x440e33.shift());
        } catch (_0x407359) {
            _0x440e33.push(_0x440e33.shift());
        }
    }
})(_0x1998, 635871);

const source = _0x4fc251(0x16d);

var { session, contextGroup, Protocol } = InspectorTest.start(_0x4fc251(0x16e) + _0x4fc251(0x16f));

function _0x5398(_0x390f1d, _0x3f6565) {
    return _0x5398 = function (_0x1a5b1d, _0x57fbd7) {
        _0x1a5b1d = _0x1a5b1d - 356;
        const _0x1b5aba = _0x1998[_0x1a5b1d];

        return _0x1b5aba;
    }, _0x5398(_0x390f1d, _0x3f6565);
}
(async function testTypeProfile() {
    const _0x34950a = _0x4fc251;

    await Protocol[_0x34950a(0x170)][_0x34950a(0x171)](), await Protocol.Profiler[_0x34950a(0x172)](), Protocol[_0x34950a(0x173)].enable();
    var {
        result: { scriptId: _0x182119 }
    } = await Protocol[_0x34950a(0x173)].compileScript({
        'expression': source,
        'sourceURL': arguments[_0x34950a(0x174)][_0x34950a(0x175)],
        'persistScript': true
    });

    Protocol[_0x34950a(0x173)].runScript({ 'scriptId': _0x182119 }), await Protocol[_0x34950a(0x170)][_0x34950a(0x172)]();

    const _0xf37813 = await Protocol.Profiler[_0x34950a(0x176)]();

    await session.logTypeProfile(_0xf37813.result[_0x34950a(0x177)][0], source), Protocol[_0x34950a(0x170)][_0x34950a(0x178)](), Protocol[_0x34950a(0x170)][_0x34950a(0x179)](), await Protocol[_0x34950a(0x173)].disable(), InspectorTest.completeTest();
})();
