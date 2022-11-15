const source = _0x10bac0(260);
let {session, contextGroup, Protocol} = InspectorTest[_0x10bac0(261)](_0x10bac0(262) + _0x10bac0(263));
function _0x5eac(_0xdfe025, _0x3d8ba3) {
    return _0x5eac = function (_0x5f2ce1, _0x5eacae) {
        _0x5f2ce1 = _0x5f2ce1 - 250;
        let _0x3f44ae = _0x5f2c[_0x5f2ce1];
        return _0x3f44ae;
    }, _0x5eac(_0xdfe025, _0x3d8ba3);
}
(async function testTypeProfile() {
    const _0x18ce9e = _0x10bac0;
    await Protocol[_0x18ce9e(264)]['enable'](), await Protocol[_0x18ce9e(264)][_0x18ce9e(265)](), Protocol[_0x18ce9e(266)][_0x18ce9e(267)]();
    let {
        result: {scriptId: _0x3ccccb}
    } = await Protocol[_0x18ce9e(266)]['compileScript']({
        'expression': source,
        'sourceURL': arguments[_0x18ce9e(268)][_0x18ce9e(269)],
        'persistScript': !![]
    });
    Protocol['Runtime'][_0x18ce9e(270)]({ 'scriptId': _0x3ccccb }), await Protocol[_0x18ce9e(264)]['startTypeProfile']();
    let _0x1d220a = await Protocol[_0x18ce9e(264)][_0x18ce9e(271)]();
    await session[_0x18ce9e(272)](_0x1d220a[_0x18ce9e(273)]['result'][0], source), Protocol[_0x18ce9e(264)][_0x18ce9e(274)](), Protocol[_0x18ce9e(264)][_0x18ce9e(275)](), await Protocol[_0x18ce9e(266)][_0x18ce9e(275)](), InspectorTest[_0x18ce9e(276)]();
}());