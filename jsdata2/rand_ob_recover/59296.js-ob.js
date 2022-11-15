function _0x1b5c(_0x1ef351, _0x570dd0) {
    return _0x1b5c = function (_0x1d0963, _0x3e33e3) {
        _0x1d0963 = _0x1d0963 - (-1 * -6343 + 513 * -9 + -1334);
        var _0x42c507 = _0x383b[_0x1d0963];
        return _0x42c507;
    }, _0x1b5c(_0x1ef351, _0x570dd0);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x23e4ea(401)](_0x23e4ea(402));
contextGroup[_0x23e4ea(403)](_0x23e4ea(404)), InspectorTest[_0x23e4ea(405)] = function (_0x281e72) {
    var _0x29cc3f = _0x23e4ea, _0x5d6142 = {
            'rombJ': function (_0x13efce, _0x391630) {
                return _0x13efce + _0x391630;
            }
        };
    InspectorTest['log'](_0x5d6142[_0x29cc3f(406)](_0x29cc3f(407), _0x281e72)), InspectorTest[_0x29cc3f(408)]();
}, Protocol['Profiler'][_0x23e4ea(409)](), Protocol[_0x23e4ea(410)][_0x23e4ea(411)]({ 'expression': _0x23e4ea(412) })[_0x23e4ea(413)](didCollectProfiles);
var headers = [];
Protocol[_0x23e4ea(414)][_0x23e4ea(415)](function (_0x4f56b8) {
    var _0xb4c0f7 = _0x23e4ea, _0xc4ae04 = {
            'mXlKX': _0xb4c0f7(416),
            'VaICc': 'params'
        };
    headers[_0xb4c0f7(417)]({
        'profile': _0x4f56b8[_0xb4c0f7(418)][_0xc4ae04[_0xb4c0f7(419)]],
        'title': _0x4f56b8[_0xc4ae04[_0xb4c0f7(420)]]['title']
    });
});
function didCollectProfiles(_0x51b382) {
    var _0x9d9d07 = _0x23e4ea, _0x8698e = {
            'PoDIE': function (_0x1c94ba, _0x2c2cf6) {
                return _0x1c94ba !== _0x2c2cf6;
            },
            'EWTmX': _0x9d9d07(421),
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
    if (_0x8698e['PoDIE'](headers[_0x9d9d07(422)], 3346 + -2341 * 3 + 3679))
        return InspectorTest['fail'](_0x8698e[_0x9d9d07(423)] + JSON[_0x9d9d07(424)](_0x51b382, null, -38 * -249 + 728 * -7 + -4362));
    for (var _0x52cd80 = 3241 + -5165 + 1924; _0x8698e[_0x9d9d07(425)](_0x52cd80, headers[_0x9d9d07(422)]); _0x52cd80++) {
        if (_0x8698e[_0x9d9d07(426)](headers[_0x52cd80]['title'], '42')) {
            _0x8698e[_0x9d9d07(427)](checkInnerProfile, headers[_0x52cd80][_0x9d9d07(416)]);
            return;
        }
    }
    InspectorTest[_0x9d9d07(405)](_0x8698e[_0x9d9d07(428)]);
}
function checkInnerProfile(_0x53198b) {
    var _0x39b38a = _0x23e4ea, _0x36db38 = {
            'AyQpZ': _0x39b38a(429),
            'dKqRh': function (_0x1a6186, _0x162f2e) {
                return _0x1a6186 + _0x162f2e;
            },
            'mMnet': 'collectProfiles function not found in the profile: ',
            'GDcmg': _0x39b38a(430)
        };
    InspectorTest[_0x39b38a(431)](_0x39b38a(432));
    if (!findFunctionInProfile(_0x53198b[_0x39b38a(433)], _0x36db38['AyQpZ']))
        return InspectorTest[_0x39b38a(405)](_0x36db38[_0x39b38a(434)](_0x36db38[_0x39b38a(435)], JSON['stringify'](_0x53198b, null, -8490 + 5062 + 3432)));
    InspectorTest[_0x39b38a(431)](_0x36db38[_0x39b38a(436)]), InspectorTest[_0x39b38a(408)]();
}
function findFunctionInProfile(_0x3d0008, _0x4067c7) {
    var _0x158c0c = _0x23e4ea;
    return _0x3d0008[_0x158c0c(437)](_0x2c426d => _0x2c426d[_0x158c0c(438)]['functionName'] === _0x4067c7);
}