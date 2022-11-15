let {session, contextGroup, Protocol} = InspectorTest['start']('Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.');
contextGroup['addScript']('\nfunction collectProfiles()\n{\n  console.profile("outer");\n  console.profile(42);\n  console.profileEnd("outer");\n  console.profileEnd(42);\n}');
InspectorTest['fail'] = function (_0x5623d3) {
    InspectorTest['log']('FAIL: ' + _0x5623d3);
    InspectorTest['completeTest']();
};
Protocol['Profiler']['enable']();
Protocol['Runtime']['evaluate']({ 'expression': 'collectProfiles()' })['then'](didCollectProfiles);
var headers = [];
Protocol['Profiler']['onConsoleProfileFinished'](function (_0x31d4a2) {
    headers['push']({
        'profile': _0x31d4a2['params']['profile'],
        'title': _0x31d4a2['params']['title']
    });
});
function didCollectProfiles(_0x50bf3a) {
    if (headers['length'] !== 2)
        return InspectorTest['fail']('Cannot retrive headers: ' + JSON['stringify'](_0x50bf3a, null, 4));
    for (var _0x4b2f86 = 0; _0x4b2f86 < headers['length']; _0x4b2f86++) {
        if (headers[_0x4b2f86]['title'] === '42') {
            checkInnerProfile(headers[_0x4b2f86]['profile']);
            return;
        }
    }
    InspectorTest['fail']('Cannot find \'42\' profile header');
}
function checkInnerProfile(_0x44499c) {
    InspectorTest['log']('SUCCESS: retrieved \'42\' profile');
    if (!findFunctionInProfile(_0x44499c['nodes'], 'collectProfiles'))
        return InspectorTest['fail']('collectProfiles function not found in the profile: ' + JSON['stringify'](_0x44499c, null, 4));
    InspectorTest['log']('SUCCESS: found \'collectProfiles\' function in the profile');
    InspectorTest['completeTest']();
}
function findFunctionInProfile(_0x490110, _0x308ef6) {
    return _0x490110['some'](_0x27f8a2 => _0x27f8a2['callFrame']['functionName'] === _0x308ef6);
}