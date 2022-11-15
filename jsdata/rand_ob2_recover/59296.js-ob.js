let {session, contextGroup, Protocol} = InspectorTest['start'](_0x2e336a(261));
contextGroup['addScript'](_0x2e336a(262)), InspectorTest[_0x2e336a(263)] = function (_0x1e4d5e) {
    var _0x616f3d = _0x2e336a;
    InspectorTest['log'](_0x616f3d(264) + _0x1e4d5e), InspectorTest['completeTest']();
}, Protocol[_0x2e336a(265)][_0x2e336a(266)](), Protocol['Runtime'][_0x2e336a(267)]({ 'expression': 'collectProfiles()' })[_0x2e336a(268)](didCollectProfiles);
var headers = [];
Protocol['Profiler'][_0x2e336a(269)](function (_0x3568ee) {
    var _0xb312c = _0x2e336a;
    headers[_0xb312c(270)]({
        'profile': _0x3568ee['params'][_0xb312c(271)],
        'title': _0x3568ee[_0xb312c(272)][_0xb312c(273)]
    });
});
function didCollectProfiles(_0x4a5333) {
    var _0x44d7d2 = _0x2e336a;
    if (headers[_0x44d7d2(274)] !== 2)
        return InspectorTest[_0x44d7d2(263)]('Cannot retrive headers: ' + JSON[_0x44d7d2(275)](_0x4a5333, null, 4));
    for (var _0x45e6df = 0; _0x45e6df < headers[_0x44d7d2(274)]; _0x45e6df++) {
        if (headers[_0x45e6df][_0x44d7d2(273)] === '42') {
            checkInnerProfile(headers[_0x45e6df][_0x44d7d2(271)]);
            return;
        }
    }
    InspectorTest[_0x44d7d2(263)]('Cannot find \'42\' profile header');
}
function _0x5e4b(_0x1b55a8, _0x3ff329) {
    return _0x5e4b = function (_0x5931b7, _0x5e4be1) {
        _0x5931b7 = _0x5931b7 - 250;
        var _0x1131c0 = _0x5931[_0x5931b7];
        return _0x1131c0;
    }, _0x5e4b(_0x1b55a8, _0x3ff329);
}
function checkInnerProfile(_0x2f2cb4) {
    var _0x4e2df9 = _0x2e336a;
    InspectorTest[_0x4e2df9(276)](_0x4e2df9(277));
    if (!findFunctionInProfile(_0x2f2cb4[_0x4e2df9(278)], _0x4e2df9(279)))
        return InspectorTest[_0x4e2df9(263)]('collectProfiles function not found in the profile: ' + JSON[_0x4e2df9(275)](_0x2f2cb4, null, 4));
    InspectorTest[_0x4e2df9(276)]('SUCCESS: found \'collectProfiles\' function in the profile'), InspectorTest[_0x4e2df9(280)]();
}
function findFunctionInProfile(_0xcabfd0, _0x31fc9a) {
    var _0x3c6974 = _0x2e336a;
    return _0xcabfd0[_0x3c6974(281)](_0x14f99a => _0x14f99a['callFrame'][_0x3c6974(282)] === _0x31fc9a);
}