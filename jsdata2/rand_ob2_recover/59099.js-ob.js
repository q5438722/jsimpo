const source = _0x73ba57(415);
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x73ba57(416) + _0x73ba57(417));
(async function testTypeProfile() {
    const _0x50beb6 = _0x73ba57;
    await Protocol[_0x50beb6(418)][_0x50beb6(419)](), await Protocol[_0x50beb6(418)]['startTypeProfile'](), Protocol[_0x50beb6(420)]['enable']();
    let {
        result: {scriptId: _0x24f4bb}
    } = await Protocol['Runtime'][_0x50beb6(421)]({
        'expression': source,
        'sourceURL': arguments['callee'][_0x50beb6(422)],
        'persistScript': !![]
    });
    Protocol[_0x50beb6(420)][_0x50beb6(423)]({ 'scriptId': _0x24f4bb }), await Protocol[_0x50beb6(418)][_0x50beb6(424)]();
    let _0x580a6f = await Protocol[_0x50beb6(418)]['takeTypeProfile']();
    await session[_0x50beb6(425)](_0x580a6f[_0x50beb6(426)][_0x50beb6(426)][0], source), Protocol[_0x50beb6(418)][_0x50beb6(427)](), Protocol[_0x50beb6(418)]['disable'](), await Protocol[_0x50beb6(420)][_0x50beb6(428)](), InspectorTest[_0x50beb6(429)]();
}());