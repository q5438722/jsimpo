var _0x5931 = [
    'push',
    'profile',
    'params',
    'title',
    'length',
    'stringify',
    'log',
    'SUCCESS:\x20retrieved\x20\x2742\x27\x20profile',
    'nodes',
    'collectProfiles',
    'completeTest',
    'some',
    'functionName',
    '51984DQldJv',
    '12273iiTPkT',
    '3fsqoUS',
    '196316ZyQihy',
    '2vmYRCh',
    '185715vDrprv',
    '1XTzjNL',
    '51001TUZVuW',
    '404190oHfGVp',
    '84OsqEAi',
    '5827SPTDIb',
    'Tests\x20that\x20console.profile/profileEnd\x20will\x20record\x20CPU\x20profile\x20when\x20inspector\x20front-end\x20is\x20connected.',
    '\x0afunction\x20collectProfiles()\x0a{\x0a\x20\x20console.profile(\x22outer\x22);\x0a\x20\x20console.profile(42);\x0a\x20\x20console.profileEnd(\x22outer\x22);\x0a\x20\x20console.profileEnd(42);\x0a}',
    'fail',
    'FAIL:\x20',
    'Profiler',
    'enable',
    'evaluate',
    'then',
    'onConsoleProfileFinished'
];
var _0x2e336a = _0x5e4b;
(function (_0x1e2466, _0x3efcba) {
    var _0x2f01cb = _0x5e4b;
    while (!![]) {
        try {
            var _0x5a4386 = -parseInt(_0x2f01cb(0xfa)) + -parseInt(_0x2f01cb(0xfb)) * -parseInt(_0x2f01cb(0xfc)) + -parseInt(_0x2f01cb(0xfd)) * -parseInt(_0x2f01cb(0xfe)) + -parseInt(_0x2f01cb(0xff)) + parseInt(_0x2f01cb(0x100)) * -parseInt(_0x2f01cb(0x101)) + -parseInt(_0x2f01cb(0x102)) + parseInt(_0x2f01cb(0x103)) * parseInt(_0x2f01cb(0x104));
            if (_0x5a4386 === _0x3efcba)
                break;
            else
                _0x1e2466['push'](_0x1e2466['shift']());
        } catch (_0xa42bc7) {
            _0x1e2466['push'](_0x1e2466['shift']());
        }
    }
}(_0x5931, 0x372ed));
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x2e336a(0x105));
contextGroup['addScript'](_0x2e336a(0x106)), InspectorTest[_0x2e336a(0x107)] = function (_0x1e4d5e) {
    var _0x616f3d = _0x2e336a;
    InspectorTest['log'](_0x616f3d(0x108) + _0x1e4d5e), InspectorTest['completeTest']();
}, Protocol[_0x2e336a(0x109)][_0x2e336a(0x10a)](), Protocol['Runtime'][_0x2e336a(0x10b)]({ 'expression': 'collectProfiles()' })[_0x2e336a(0x10c)](didCollectProfiles);
var headers = [];
Protocol['Profiler'][_0x2e336a(0x10d)](function (_0x3568ee) {
    var _0xb312c = _0x2e336a;
    headers[_0xb312c(0x10e)]({
        'profile': _0x3568ee['params'][_0xb312c(0x10f)],
        'title': _0x3568ee[_0xb312c(0x110)][_0xb312c(0x111)]
    });
});
function didCollectProfiles(_0x4a5333) {
    var _0x44d7d2 = _0x2e336a;
    if (headers[_0x44d7d2(0x112)] !== 0x2)
        return InspectorTest[_0x44d7d2(0x107)]('Cannot\x20retrive\x20headers:\x20' + JSON[_0x44d7d2(0x113)](_0x4a5333, null, 0x4));
    for (var _0x45e6df = 0x0; _0x45e6df < headers[_0x44d7d2(0x112)]; _0x45e6df++) {
        if (headers[_0x45e6df][_0x44d7d2(0x111)] === '42') {
            checkInnerProfile(headers[_0x45e6df][_0x44d7d2(0x10f)]);
            return;
        }
    }
    InspectorTest[_0x44d7d2(0x107)]('Cannot\x20find\x20\x2742\x27\x20profile\x20header');
}
function _0x5e4b(_0x1b55a8, _0x3ff329) {
    return _0x5e4b = function (_0x5931b7, _0x5e4be1) {
        _0x5931b7 = _0x5931b7 - 0xfa;
        var _0x1131c0 = _0x5931[_0x5931b7];
        return _0x1131c0;
    }, _0x5e4b(_0x1b55a8, _0x3ff329);
}
function checkInnerProfile(_0x2f2cb4) {
    var _0x4e2df9 = _0x2e336a;
    InspectorTest[_0x4e2df9(0x114)](_0x4e2df9(0x115));
    if (!findFunctionInProfile(_0x2f2cb4[_0x4e2df9(0x116)], _0x4e2df9(0x117)))
        return InspectorTest[_0x4e2df9(0x107)]('collectProfiles\x20function\x20not\x20found\x20in\x20the\x20profile:\x20' + JSON[_0x4e2df9(0x113)](_0x2f2cb4, null, 0x4));
    InspectorTest[_0x4e2df9(0x114)]('SUCCESS:\x20found\x20\x27collectProfiles\x27\x20function\x20in\x20the\x20profile'), InspectorTest[_0x4e2df9(0x118)]();
}
function findFunctionInProfile(_0xcabfd0, _0x31fc9a) {
    var _0x3c6974 = _0x2e336a;
    return _0xcabfd0[_0x3c6974(0x119)](_0x14f99a => _0x14f99a['callFrame'][_0x3c6974(0x11a)] === _0x31fc9a);
}
