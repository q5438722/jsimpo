const source = _0x4fc251(365);
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x4fc251(366) + _0x4fc251(367));
function _0x5398(_0x390f1d, _0x3f6565) {
    return _0x5398 = function (_0x1a5b1d, _0x57fbd7) {
        _0x1a5b1d = _0x1a5b1d - (-2549 + 4186 * 2 + -5467);
        let _0x1b5aba = _0x1998[_0x1a5b1d];
        return _0x1b5aba;
    }, _0x5398(_0x390f1d, _0x3f6565);
}
(async function testTypeProfile() {
    const _0x34950a = _0x4fc251;
    await Protocol[_0x34950a(368)][_0x34950a(369)](), await Protocol['Profiler'][_0x34950a(370)](), Protocol[_0x34950a(371)]['enable']();
    let {
        result: {scriptId: _0x182119}
    } = await Protocol[_0x34950a(371)]['compileScript']({
        'expression': source,
        'sourceURL': arguments[_0x34950a(372)][_0x34950a(373)],
        'persistScript': !![]
    });
    Protocol[_0x34950a(371)]['runScript']({ 'scriptId': _0x182119 }), await Protocol[_0x34950a(368)][_0x34950a(370)]();
    let _0xf37813 = await Protocol['Profiler'][_0x34950a(374)]();
    await session['logTypeProfile'](_0xf37813['result'][_0x34950a(375)][-1 * 656 + -56 * 15 + -1 * -1496], source), Protocol[_0x34950a(368)][_0x34950a(376)](), Protocol[_0x34950a(368)][_0x34950a(377)](), await Protocol[_0x34950a(371)]['disable'](), InspectorTest['completeTest']();
}());