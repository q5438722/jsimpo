function _0x5d2c(_0x8a3b66, _0x40f1c4) {
    return _0x5d2c = function (_0xde8348, _0x5d2c86) {
        _0xde8348 = _0xde8348 - 438;
        var _0x2e112b = _0xde83[_0xde8348];
        return _0x2e112b;
    }, _0x5d2c(_0x8a3b66, _0x40f1c4);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x3a746f(447)](_0x3a746f(448));
contextGroup[_0x3a746f(449)](_0x3a746f(450)), InspectorTest['fail'] = function (_0xd338e1) {
    var _0x35fc51 = _0x3a746f;
    InspectorTest['log'](_0x35fc51(451) + _0xd338e1), InspectorTest['completeTest']();
}, Protocol[_0x3a746f(452)][_0x3a746f(453)](), Protocol[_0x3a746f(454)][_0x3a746f(455)]({ 'expression': 'collectProfiles()' })['then'](didCollectProfiles);
var headers = [];
Protocol[_0x3a746f(452)]['onConsoleProfileFinished'](function (_0x1150d5) {
    var _0x31c024 = _0x3a746f;
    headers['push']({
        'profile': _0x1150d5[_0x31c024(456)][_0x31c024(457)],
        'title': _0x1150d5[_0x31c024(456)][_0x31c024(458)]
    });
});
function didCollectProfiles(_0x45c74a) {
    var _0x2545c5 = _0x3a746f;
    if (headers[_0x2545c5(459)] !== 2)
        return InspectorTest[_0x2545c5(460)](_0x2545c5(461) + JSON[_0x2545c5(462)](_0x45c74a, null, 4));
    for (var _0xd00257 = 0; _0xd00257 < headers[_0x2545c5(459)]; _0xd00257++) {
        if (headers[_0xd00257][_0x2545c5(458)] === '42') {
            checkInnerProfile(headers[_0xd00257][_0x2545c5(457)]);
            return;
        }
    }
    InspectorTest[_0x2545c5(460)](_0x2545c5(463));
}
function checkInnerProfile(_0x593847) {
    var _0x10d95a = _0x3a746f;
    InspectorTest[_0x10d95a(464)](_0x10d95a(465));
    if (!findFunctionInProfile(_0x593847['nodes'], _0x10d95a(466)))
        return InspectorTest[_0x10d95a(460)](_0x10d95a(467) + JSON[_0x10d95a(462)](_0x593847, null, 4));
    InspectorTest['log'](_0x10d95a(468)), InspectorTest[_0x10d95a(469)]();
}
function findFunctionInProfile(_0x1e4936, _0x3c13ea) {
    var _0x5ca2e5 = _0x3a746f;
    return _0x1e4936[_0x5ca2e5(470)](_0x5bc7cc => _0x5bc7cc[_0x5ca2e5(471)][_0x5ca2e5(472)] === _0x3c13ea);
}