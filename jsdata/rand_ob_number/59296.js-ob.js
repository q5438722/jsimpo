let {session, contextGroup, Protocol} = InspectorTest['start']('Tests\x20that\x20console.profile/profileEnd\x20will\x20record\x20CPU\x20profile\x20when\x20inspector\x20front-end\x20is\x20connected.');
contextGroup['addScript']('\x0afunction\x20collectProfiles()\x0a{\x0a\x20\x20console.profile(\x22outer\x22);\x0a\x20\x20console.profile(42);\x0a\x20\x20console.profileEnd(\x22outer\x22);\x0a\x20\x20console.profileEnd(42);\x0a}'), InspectorTest['fail'] = function (_0x41b948) {
    InspectorTest['log']('FAIL:\x20' + _0x41b948), InspectorTest['completeTest']();
}, Protocol['Profiler']['enable'](), Protocol['Runtime']['evaluate']({ 'expression': 'collectProfiles()' })['then'](didCollectProfiles);
var headers = [];
Protocol['Profiler']['onConsoleProfileFinished'](function (_0xc5e682) {
    headers['push']({
        'profile': _0xc5e682['params']['profile'],
        'title': _0xc5e682['params']['title']
    });
});
function didCollectProfiles(_0x2227ae) {
    if (headers['length'] !== 0x2099 * -0x1 + 0x2423 + -0x8 * 0x71)
        return InspectorTest['fail']('Cannot\x20retrive\x20headers:\x20' + JSON['stringify'](_0x2227ae, null, -0x649 * -0x1 + 0x12 * -0x12a + 0xeaf));
    for (var _0x4f72bd = 0x655 * 0x2 + 0x1 * -0x15da + 0x30 * 0x31; _0x4f72bd < headers['length']; _0x4f72bd++) {
        if (headers[_0x4f72bd]['title'] === '42') {
            checkInnerProfile(headers[_0x4f72bd]['profile']);
            return;
        }
    }
    InspectorTest['fail']('Cannot\x20find\x20\x2742\x27\x20profile\x20header');
}
function checkInnerProfile(_0x2f7fdd) {
    InspectorTest['log']('SUCCESS:\x20retrieved\x20\x2742\x27\x20profile');
    if (!findFunctionInProfile(_0x2f7fdd['nodes'], 'collectProfiles'))
        return InspectorTest['fail']('collectProfiles\x20function\x20not\x20found\x20in\x20the\x20profile:\x20' + JSON['stringify'](_0x2f7fdd, null, 0x2 * -0x115 + -0x3c * 0x5a + 0x1746));
    InspectorTest['log']('SUCCESS:\x20found\x20\x27collectProfiles\x27\x20function\x20in\x20the\x20profile'), InspectorTest['completeTest']();
}
function findFunctionInProfile(_0x2aa2eb, _0x271c2d) {
    return _0x2aa2eb['some'](_0x4d7d41 => _0x4d7d41['callFrame']['functionName'] === _0x271c2d);
}
