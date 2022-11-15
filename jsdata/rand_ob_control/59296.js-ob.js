let {session, contextGroup, Protocol} = InspectorTest['start']('Tests\x20that\x20console.profile/profileEnd\x20will\x20record\x20CPU\x20profile\x20when\x20inspector\x20front-end\x20is\x20connected.');
contextGroup['addScript']('\x0afunction\x20collectProfiles()\x0a{\x0a\x20\x20console.profile(\x22outer\x22);\x0a\x20\x20console.profile(42);\x0a\x20\x20console.profileEnd(\x22outer\x22);\x0a\x20\x20console.profileEnd(42);\x0a}'), InspectorTest['fail'] = function (_0x2cc9c3) {
    var _0x780175 = {
        'oyLeT': function (_0x4268ee, _0x4d7d48) {
            return _0x4268ee + _0x4d7d48;
        },
        'xKwFj': 'FAIL:\x20'
    };
    InspectorTest['log'](_0x780175['oyLeT'](_0x780175['xKwFj'], _0x2cc9c3)), InspectorTest['completeTest']();
}, Protocol['Profiler']['enable'](), Protocol['Runtime']['evaluate']({ 'expression': 'collectProfiles()' })['then'](didCollectProfiles);
var headers = [];
Protocol['Profiler']['onConsoleProfileFinished'](function (_0x2145aa) {
    var _0x26a137 = {
        'SWDNI': 'params',
        'KHljZ': 'profile',
        'jZxuT': 'title'
    };
    headers['push']({
        'profile': _0x2145aa[_0x26a137['SWDNI']][_0x26a137['KHljZ']],
        'title': _0x2145aa[_0x26a137['SWDNI']][_0x26a137['jZxuT']]
    });
});
function didCollectProfiles(_0x353982) {
    var _0x376802 = {
        'zzcrJ': function (_0x31b18d, _0x33eb32) {
            return _0x31b18d !== _0x33eb32;
        },
        'FLRTB': function (_0x3be1b8, _0x586e49) {
            return _0x3be1b8 + _0x586e49;
        },
        'mOHsX': 'Cannot\x20retrive\x20headers:\x20',
        'eKllS': function (_0x4e8b08, _0x3868dd) {
            return _0x4e8b08 < _0x3868dd;
        },
        'AEvTy': function (_0xd7f6b8, _0x2479ca) {
            return _0xd7f6b8 === _0x2479ca;
        },
        'Ezkac': function (_0xfe7ac8, _0xf038ae) {
            return _0xfe7ac8(_0xf038ae);
        },
        'KTtkz': 'Cannot\x20find\x20\x2742\x27\x20profile\x20header'
    };
    if (_0x376802['zzcrJ'](headers['length'], 0x2))
        return InspectorTest['fail'](_0x376802['FLRTB'](_0x376802['mOHsX'], JSON['stringify'](_0x353982, null, 0x4)));
    for (var _0x4bb869 = 0x0; _0x376802['eKllS'](_0x4bb869, headers['length']); _0x4bb869++) {
        if (_0x376802['AEvTy'](headers[_0x4bb869]['title'], '42')) {
            _0x376802['Ezkac'](checkInnerProfile, headers[_0x4bb869]['profile']);
            return;
        }
    }
    InspectorTest['fail'](_0x376802['KTtkz']);
}
function checkInnerProfile(_0x46a3bf) {
    var _0x450164 = {
        'qcKDl': 'SUCCESS:\x20retrieved\x20\x2742\x27\x20profile',
        'UDPBE': function (_0x37c8bf, _0x267631, _0x49e625) {
            return _0x37c8bf(_0x267631, _0x49e625);
        },
        'pCJHr': 'collectProfiles',
        'CJrIk': function (_0x4caeac, _0x37f55b) {
            return _0x4caeac + _0x37f55b;
        },
        'HbpuN': 'collectProfiles\x20function\x20not\x20found\x20in\x20the\x20profile:\x20',
        'Honiv': 'SUCCESS:\x20found\x20\x27collectProfiles\x27\x20function\x20in\x20the\x20profile'
    };
    InspectorTest['log'](_0x450164['qcKDl']);
    if (!_0x450164['UDPBE'](findFunctionInProfile, _0x46a3bf['nodes'], _0x450164['pCJHr']))
        return InspectorTest['fail'](_0x450164['CJrIk'](_0x450164['HbpuN'], JSON['stringify'](_0x46a3bf, null, 0x4)));
    InspectorTest['log'](_0x450164['Honiv']), InspectorTest['completeTest']();
}
function findFunctionInProfile(_0x18149d, _0x35355a) {
    return _0x18149d['some'](_0x155160 => _0x155160['callFrame']['functionName'] === _0x35355a);
}
