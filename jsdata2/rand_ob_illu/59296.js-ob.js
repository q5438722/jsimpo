const _0x383b = ['callFrame', '853906iQiMnd', '1089184LLjExS', '1377444gJzPhL', '1290545BwuVMT', '569932JzERVb', '955ZSdIqq', '315uMLZjU', '1yZsTHo', '629437YaHEpO', 'start', 'Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.', 'addScript', '\nfunction collectProfiles()\n{\n  console.profile("outer");\n  console.profile(42);\n  console.profileEnd("outer");\n  console.profileEnd(42);\n}', 'fail', 'rombJ', 'FAIL: ', 'completeTest', 'enable', 'Runtime', 'evaluate', 'collectProfiles()', 'then', 'Profiler', 'onConsoleProfileFinished', 'profile', 'push', 'params', 'mXlKX', 'VaICc', 'Cannot retrive headers: ', 'length', 'EWTmX', 'stringify', 'LWfVf', 'MQkLg', 'WfKnN', 'jHJHq', 'collectProfiles', 'SUCCESS: found \'collectProfiles\' function in the profile', 'log', 'SUCCESS: retrieved \'42\' profile', 'nodes', 'dKqRh', 'mMnet', 'GDcmg', 'some'];
const _0x23e4ea = _0x1b5c;

(function (_0x20a236, _0x3d7ba1) {
    const _0x3cf614 = _0x1b5c;

    while (true) {
        try {
            const _0x141e9d = parseInt(_0x3cf614(0x188)) + parseInt(_0x3cf614(0x189)) + -parseInt(_0x3cf614(0x18a)) + -parseInt(_0x3cf614(0x18b)) + parseInt(_0x3cf614(0x18c)) + parseInt(_0x3cf614(0x18d)) * parseInt(_0x3cf614(0x18e)) + -parseInt(_0x3cf614(0x18f)) * -parseInt(_0x3cf614(0x190));

            if (_0x141e9d === _0x3d7ba1) break;else _0x20a236.push(_0x20a236.shift());
        } catch (_0x59d255) {
            _0x20a236.push(_0x20a236.shift());
        }
    }
})(_0x383b, 775295);
function _0x1b5c(_0x1ef351, _0x570dd0) {
    return _0x1b5c = function (_0x1d0963, _0x3e33e3) {
        _0x1d0963 = _0x1d0963 - 392;
        const _0x42c507 = _0x383b[_0x1d0963];

        return _0x42c507;
    }, _0x1b5c(_0x1ef351, _0x570dd0);
}

var { session, contextGroup, Protocol } = InspectorTest[_0x23e4ea(0x191)](_0x23e4ea(0x192));

contextGroup[_0x23e4ea(0x193)](_0x23e4ea(0x194)), InspectorTest[_0x23e4ea(0x195)] = function (_0x281e72) {
    const _0x29cc3f = _0x23e4ea;
    const _0x5d6142 = {
        'rombJ': function (_0x13efce, _0x391630) {
            return _0x13efce + _0x391630;
        }
    };

    InspectorTest.log(_0x5d6142[_0x29cc3f(0x196)](_0x29cc3f(0x197), _0x281e72)), InspectorTest[_0x29cc3f(0x198)]();
}, Protocol.Profiler[_0x23e4ea(0x199)](), Protocol[_0x23e4ea(0x19a)][_0x23e4ea(0x19b)]({ 'expression': _0x23e4ea(0x19c) })[_0x23e4ea(0x19d)](didCollectProfiles);
const headers = [];

Protocol[_0x23e4ea(0x19e)][_0x23e4ea(0x19f)](function (_0x4f56b8) {
    const _0xb4c0f7 = _0x23e4ea;
    const _0xc4ae04 = {
        'mXlKX': _0xb4c0f7(0x1a0),
        'VaICc': 'params'
    };

    headers[_0xb4c0f7(0x1a1)]({
        'profile': _0x4f56b8[_0xb4c0f7(0x1a2)][_0xc4ae04[_0xb4c0f7(0x1a3)]],
        'title': _0x4f56b8[_0xc4ae04[_0xb4c0f7(0x1a4)]].title
    });
});
function didCollectProfiles(_0x51b382) {
    const _0x9d9d07 = _0x23e4ea;
    const _0x8698e = {
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
        'jHJHq': 'Cannot find \'42\' profile header'
    };

    if (_0x8698e.PoDIE(headers[_0x9d9d07(0x1a6)], 2)) return InspectorTest.fail(_0x8698e[_0x9d9d07(0x1a7)] + JSON[_0x9d9d07(0x1a8)](_0x51b382, null, 4));
    for (var _0x52cd80 = 0; _0x8698e[_0x9d9d07(0x1a9)](_0x52cd80, headers[_0x9d9d07(0x1a6)]); _0x52cd80++) {
        if (_0x8698e[_0x9d9d07(0x1aa)](headers[_0x52cd80].title, '42')) {
            _0x8698e[_0x9d9d07(0x1ab)](checkInnerProfile, headers[_0x52cd80][_0x9d9d07(0x1a0)]);
            return;
        }
    }
    InspectorTest[_0x9d9d07(0x195)](_0x8698e[_0x9d9d07(0x1ac)]);
}
function checkInnerProfile(_0x53198b) {
    const _0x39b38a = _0x23e4ea;
    const _0x36db38 = {
        'AyQpZ': _0x39b38a(0x1ad),
        'dKqRh': function (_0x1a6186, _0x162f2e) {
            return _0x1a6186 + _0x162f2e;
        },
        'mMnet': 'collectProfiles function not found in the profile: ',
        'GDcmg': _0x39b38a(0x1ae)
    };

    InspectorTest[_0x39b38a(0x1af)](_0x39b38a(0x1b0));
    if (!findFunctionInProfile(_0x53198b[_0x39b38a(0x1b1)], _0x36db38.AyQpZ)) return InspectorTest[_0x39b38a(0x195)](_0x36db38[_0x39b38a(0x1b2)](_0x36db38[_0x39b38a(0x1b3)], JSON.stringify(_0x53198b, null, 4)));
    InspectorTest[_0x39b38a(0x1af)](_0x36db38[_0x39b38a(0x1b4)]), InspectorTest[_0x39b38a(0x198)]();
}
function findFunctionInProfile(_0x3d0008, _0x4067c7) {
    const _0x158c0c = _0x23e4ea;

    return _0x3d0008[_0x158c0c(0x1b5)](_0x2c426d => _0x2c426d[_0x158c0c(0x1b6)].functionName === _0x4067c7);
}
