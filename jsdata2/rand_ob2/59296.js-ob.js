var _0xde83 = [
    'addScript',
    '\x0afunction\x20collectProfiles()\x0a{\x0a\x20\x20console.profile(\x22outer\x22);\x0a\x20\x20console.profile(42);\x0a\x20\x20console.profileEnd(\x22outer\x22);\x0a\x20\x20console.profileEnd(42);\x0a}',
    'FAIL:\x20',
    'Profiler',
    'enable',
    'Runtime',
    'evaluate',
    'params',
    'profile',
    'title',
    'length',
    'fail',
    'Cannot\x20retrive\x20headers:\x20',
    'stringify',
    'Cannot\x20find\x20\x2742\x27\x20profile\x20header',
    'log',
    'SUCCESS:\x20retrieved\x20\x2742\x27\x20profile',
    'collectProfiles',
    'collectProfiles\x20function\x20not\x20found\x20in\x20the\x20profile:\x20',
    'SUCCESS:\x20found\x20\x27collectProfiles\x27\x20function\x20in\x20the\x20profile',
    'completeTest',
    'some',
    'callFrame',
    'functionName',
    '40EkYEOM',
    '26317wlfyQf',
    '731707CCxxHR',
    '297775tMvyev',
    '320441DgeiCq',
    '1DrRfFL',
    '156662afddTC',
    '785894IcxhkQ',
    '384374JSnjzD',
    'start',
    'Tests\x20that\x20console.profile/profileEnd\x20will\x20record\x20CPU\x20profile\x20when\x20inspector\x20front-end\x20is\x20connected.'
];
var _0x3a746f = _0x5d2c;
(function (_0x2346fd, _0x2f3e25) {
    var _0x33c9c6 = _0x5d2c;
    while (!![]) {
        try {
            var _0x4facf7 = -parseInt(_0x33c9c6(0x1b6)) * -parseInt(_0x33c9c6(0x1b7)) + -parseInt(_0x33c9c6(0x1b8)) + parseInt(_0x33c9c6(0x1b9)) + -parseInt(_0x33c9c6(0x1ba)) * parseInt(_0x33c9c6(0x1bb)) + -parseInt(_0x33c9c6(0x1bc)) + parseInt(_0x33c9c6(0x1bd)) + -parseInt(_0x33c9c6(0x1be));
            if (_0x4facf7 === _0x2f3e25)
                break;
            else
                _0x2346fd['push'](_0x2346fd['shift']());
        } catch (_0x20e59b) {
            _0x2346fd['push'](_0x2346fd['shift']());
        }
    }
}(_0xde83, 0x849bd));
function _0x5d2c(_0x8a3b66, _0x40f1c4) {
    return _0x5d2c = function (_0xde8348, _0x5d2c86) {
        _0xde8348 = _0xde8348 - 0x1b6;
        var _0x2e112b = _0xde83[_0xde8348];
        return _0x2e112b;
    }, _0x5d2c(_0x8a3b66, _0x40f1c4);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x3a746f(0x1bf)](_0x3a746f(0x1c0));
contextGroup[_0x3a746f(0x1c1)](_0x3a746f(0x1c2)), InspectorTest['fail'] = function (_0xd338e1) {
    var _0x35fc51 = _0x3a746f;
    InspectorTest['log'](_0x35fc51(0x1c3) + _0xd338e1), InspectorTest['completeTest']();
}, Protocol[_0x3a746f(0x1c4)][_0x3a746f(0x1c5)](), Protocol[_0x3a746f(0x1c6)][_0x3a746f(0x1c7)]({ 'expression': 'collectProfiles()' })['then'](didCollectProfiles);
var headers = [];
Protocol[_0x3a746f(0x1c4)]['onConsoleProfileFinished'](function (_0x1150d5) {
    var _0x31c024 = _0x3a746f;
    headers['push']({
        'profile': _0x1150d5[_0x31c024(0x1c8)][_0x31c024(0x1c9)],
        'title': _0x1150d5[_0x31c024(0x1c8)][_0x31c024(0x1ca)]
    });
});
function didCollectProfiles(_0x45c74a) {
    var _0x2545c5 = _0x3a746f;
    if (headers[_0x2545c5(0x1cb)] !== 0x2)
        return InspectorTest[_0x2545c5(0x1cc)](_0x2545c5(0x1cd) + JSON[_0x2545c5(0x1ce)](_0x45c74a, null, 0x4));
    for (var _0xd00257 = 0x0; _0xd00257 < headers[_0x2545c5(0x1cb)]; _0xd00257++) {
        if (headers[_0xd00257][_0x2545c5(0x1ca)] === '42') {
            checkInnerProfile(headers[_0xd00257][_0x2545c5(0x1c9)]);
            return;
        }
    }
    InspectorTest[_0x2545c5(0x1cc)](_0x2545c5(0x1cf));
}
function checkInnerProfile(_0x593847) {
    var _0x10d95a = _0x3a746f;
    InspectorTest[_0x10d95a(0x1d0)](_0x10d95a(0x1d1));
    if (!findFunctionInProfile(_0x593847['nodes'], _0x10d95a(0x1d2)))
        return InspectorTest[_0x10d95a(0x1cc)](_0x10d95a(0x1d3) + JSON[_0x10d95a(0x1ce)](_0x593847, null, 0x4));
    InspectorTest['log'](_0x10d95a(0x1d4)), InspectorTest[_0x10d95a(0x1d5)]();
}
function findFunctionInProfile(_0x1e4936, _0x3c13ea) {
    var _0x5ca2e5 = _0x3a746f;
    return _0x1e4936[_0x5ca2e5(0x1d6)](_0x5bc7cc => _0x5bc7cc[_0x5ca2e5(0x1d7)][_0x5ca2e5(0x1d8)] === _0x3c13ea);
}
