const source = _0x17b8cc(417);
let {session, contextGroup, Protocol} = InspectorTest[_0x17b8cc(418)](_0x17b8cc(419) + _0x17b8cc(420));
(async function testTypeProfile() {
    const _0x5f3f7d = _0x17b8cc;
    await Protocol['Profiler']['enable'](), await Protocol['Profiler']['startTypeProfile'](), Protocol[_0x5f3f7d(421)][_0x5f3f7d(422)]();
    let {
        result: {scriptId: _0x10c1e0}
    } = await Protocol['Runtime'][_0x5f3f7d(423)]({
        'expression': source,
        'sourceURL': arguments['callee'][_0x5f3f7d(424)],
        'persistScript': !![]
    });
    Protocol['Runtime'][_0x5f3f7d(425)]({ 'scriptId': _0x10c1e0 }), await Protocol[_0x5f3f7d(426)][_0x5f3f7d(427)]();
    let _0xd7571f = await Protocol[_0x5f3f7d(426)][_0x5f3f7d(428)]();
    await session['logTypeProfile'](_0xd7571f[_0x5f3f7d(429)][_0x5f3f7d(429)][-483 + 1684 + -1201 * 1], source), Protocol['Profiler'][_0x5f3f7d(430)](), Protocol[_0x5f3f7d(426)]['disable'](), await Protocol['Runtime'][_0x5f3f7d(431)](), InspectorTest[_0x5f3f7d(432)]();
}());