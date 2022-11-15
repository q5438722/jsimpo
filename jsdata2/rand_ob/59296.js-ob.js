var _0x383b = [
    'callFrame',
    '853906iQiMnd',
    '1089184LLjExS',
    '1377444gJzPhL',
    '1290545BwuVMT',
    '569932JzERVb',
    '955ZSdIqq',
    '315uMLZjU',
    '1yZsTHo',
    '629437YaHEpO',
    'start',
    'Tests\x20that\x20console.profile/profileEnd\x20will\x20record\x20CPU\x20profile\x20when\x20inspector\x20front-end\x20is\x20connected.',
    'addScript',
    '\x0afunction\x20collectProfiles()\x0a{\x0a\x20\x20console.profile(\x22outer\x22);\x0a\x20\x20console.profile(42);\x0a\x20\x20console.profileEnd(\x22outer\x22);\x0a\x20\x20console.profileEnd(42);\x0a}',
    'fail',
    'rombJ',
    'FAIL:\x20',
    'completeTest',
    'enable',
    'Runtime',
    'evaluate',
    'collectProfiles()',
    'then',
    'Profiler',
    'onConsoleProfileFinished',
    'profile',
    'push',
    'params',
    'mXlKX',
    'VaICc',
    'Cannot\x20retrive\x20headers:\x20',
    'length',
    'EWTmX',
    'stringify',
    'LWfVf',
    'MQkLg',
    'WfKnN',
    'jHJHq',
    'collectProfiles',
    'SUCCESS:\x20found\x20\x27collectProfiles\x27\x20function\x20in\x20the\x20profile',
    'log',
    'SUCCESS:\x20retrieved\x20\x2742\x27\x20profile',
    'nodes',
    'dKqRh',
    'mMnet',
    'GDcmg',
    'some'
];
var _0x23e4ea = _0x1b5c;
(function (_0x20a236, _0x3d7ba1) {
    var _0x3cf614 = _0x1b5c;
    while (!![]) {
        try {
            var _0x141e9d = parseInt(_0x3cf614(0x188)) + parseInt(_0x3cf614(0x189)) + -parseInt(_0x3cf614(0x18a)) + -parseInt(_0x3cf614(0x18b)) + parseInt(_0x3cf614(0x18c)) + parseInt(_0x3cf614(0x18d)) * parseInt(_0x3cf614(0x18e)) + -parseInt(_0x3cf614(0x18f)) * -parseInt(_0x3cf614(0x190));
            if (_0x141e9d === _0x3d7ba1)
                break;
            else
                _0x20a236['push'](_0x20a236['shift']());
        } catch (_0x59d255) {
            _0x20a236['push'](_0x20a236['shift']());
        }
    }
}(_0x383b, -0x291d * 0x79 + 0xea42d * -0x1 + 0x2de761));
function _0x1b5c(_0x1ef351, _0x570dd0) {
    return _0x1b5c = function (_0x1d0963, _0x3e33e3) {
        _0x1d0963 = _0x1d0963 - (-0x1 * -0x18c7 + 0x201 * -0x9 + -0x536);
        var _0x42c507 = _0x383b[_0x1d0963];
        return _0x42c507;
    }, _0x1b5c(_0x1ef351, _0x570dd0);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x23e4ea(0x191)](_0x23e4ea(0x192));
contextGroup[_0x23e4ea(0x193)](_0x23e4ea(0x194)), InspectorTest[_0x23e4ea(0x195)] = function (_0x281e72) {
    var _0x29cc3f = _0x23e4ea, _0x5d6142 = {
            'rombJ': function (_0x13efce, _0x391630) {
                return _0x13efce + _0x391630;
            }
        };
    InspectorTest['log'](_0x5d6142[_0x29cc3f(0x196)](_0x29cc3f(0x197), _0x281e72)), InspectorTest[_0x29cc3f(0x198)]();
}, Protocol['Profiler'][_0x23e4ea(0x199)](), Protocol[_0x23e4ea(0x19a)][_0x23e4ea(0x19b)]({ 'expression': _0x23e4ea(0x19c) })[_0x23e4ea(0x19d)](didCollectProfiles);
var headers = [];
Protocol[_0x23e4ea(0x19e)][_0x23e4ea(0x19f)](function (_0x4f56b8) {
    var _0xb4c0f7 = _0x23e4ea, _0xc4ae04 = {
            'mXlKX': _0xb4c0f7(0x1a0),
            'VaICc': 'params'
        };
    headers[_0xb4c0f7(0x1a1)]({
        'profile': _0x4f56b8[_0xb4c0f7(0x1a2)][_0xc4ae04[_0xb4c0f7(0x1a3)]],
        'title': _0x4f56b8[_0xc4ae04[_0xb4c0f7(0x1a4)]]['title']
    });
});
function didCollectProfiles(_0x51b382) {
    var _0x9d9d07 = _0x23e4ea, _0x8698e = {
            'PoDIE': function (_0x1c94ba, _0x2c2cf6) {
                return _0x1c94ba !== _0x2c2cf6;
            },
            'EWTmX': _0x9d9d07(0x1a5),
            'LWfVf': function (_0xd887d2, _0x6f6cd4) {
                return _0xd887d2 < _0x6f6cd4;
            },
            'MQkLg': function (_0x2ebe61, _0x592502) {
                return _0x2ebe61 === _0x592502;
            },
            'WfKnN': function (_0x3767d2, _0x3eee24) {
                return _0x3767d2(_0x3eee24);
            },
            'jHJHq': 'Cannot\x20find\x20\x2742\x27\x20profile\x20header'
        };
    if (_0x8698e['PoDIE'](headers[_0x9d9d07(0x1a6)], 0xd12 + -0x925 * 0x3 + 0xe5f))
        return InspectorTest['fail'](_0x8698e[_0x9d9d07(0x1a7)] + JSON[_0x9d9d07(0x1a8)](_0x51b382, null, -0x26 * -0xf9 + 0x2d8 * -0x7 + -0x110a));
    for (var _0x52cd80 = 0xca9 + -0x142d + 0x784; _0x8698e[_0x9d9d07(0x1a9)](_0x52cd80, headers[_0x9d9d07(0x1a6)]); _0x52cd80++) {
        if (_0x8698e[_0x9d9d07(0x1aa)](headers[_0x52cd80]['title'], '42')) {
            _0x8698e[_0x9d9d07(0x1ab)](checkInnerProfile, headers[_0x52cd80][_0x9d9d07(0x1a0)]);
            return;
        }
    }
    InspectorTest[_0x9d9d07(0x195)](_0x8698e[_0x9d9d07(0x1ac)]);
}
function checkInnerProfile(_0x53198b) {
    var _0x39b38a = _0x23e4ea, _0x36db38 = {
            'AyQpZ': _0x39b38a(0x1ad),
            'dKqRh': function (_0x1a6186, _0x162f2e) {
                return _0x1a6186 + _0x162f2e;
            },
            'mMnet': 'collectProfiles\x20function\x20not\x20found\x20in\x20the\x20profile:\x20',
            'GDcmg': _0x39b38a(0x1ae)
        };
    InspectorTest[_0x39b38a(0x1af)](_0x39b38a(0x1b0));
    if (!findFunctionInProfile(_0x53198b[_0x39b38a(0x1b1)], _0x36db38['AyQpZ']))
        return InspectorTest[_0x39b38a(0x195)](_0x36db38[_0x39b38a(0x1b2)](_0x36db38[_0x39b38a(0x1b3)], JSON['stringify'](_0x53198b, null, -0x212a + 0x13c6 + 0xd68)));
    InspectorTest[_0x39b38a(0x1af)](_0x36db38[_0x39b38a(0x1b4)]), InspectorTest[_0x39b38a(0x198)]();
}
function findFunctionInProfile(_0x3d0008, _0x4067c7) {
    var _0x158c0c = _0x23e4ea;
    return _0x3d0008[_0x158c0c(0x1b5)](_0x2c426d => _0x2c426d[_0x158c0c(0x1b6)]['functionName'] === _0x4067c7);
}
