let {session, contextGroup, Protocol} = InspectorTest[_0x190168(416)](_0x190168(417));
contextGroup[_0x190168(418)](_0x190168(419)), InspectorTest[_0x190168(420)] = function (_0x45c8de) {
    var _0x242465 = _0x190168, _0x19eab8 = { 'bpCNb': 'FAIL: ' };
    InspectorTest['log'](_0x19eab8[_0x242465(421)] + _0x45c8de), InspectorTest[_0x242465(422)]();
}, Protocol[_0x190168(423)]['enable'](), Protocol['Runtime'][_0x190168(424)]({ 'expression': 'collectProfiles()' })[_0x190168(425)](didCollectProfiles);
var headers = [];
Protocol['Profiler'][_0x190168(426)](function (_0x180284) {
    var _0x2278a7 = _0x190168, _0x5108ea = {
            'Bqvfh': _0x2278a7(427),
            'vmeut': _0x2278a7(428),
            'ZNyHW': 'title'
        };
    headers[_0x2278a7(429)]({
        'profile': _0x180284[_0x5108ea[_0x2278a7(430)]][_0x5108ea['vmeut']],
        'title': _0x180284[_0x2278a7(427)][_0x5108ea['ZNyHW']]
    });
});
function didCollectProfiles(_0x5a3eac) {
    var _0xbab73a = _0x190168, _0x44b876 = {
            'ddKyb': function (_0x5d0b50, _0x1940e0) {
                return _0x5d0b50 !== _0x1940e0;
            },
            'QfGmm': function (_0x18c9ac, _0xcbe9a) {
                return _0x18c9ac + _0xcbe9a;
            },
            'bNzYd': _0xbab73a(431),
            'LKuLc': function (_0x392a01, _0x222e9e) {
                return _0x392a01 < _0x222e9e;
            },
            'VGgwt': function (_0x200d2c, _0x1ebd09) {
                return _0x200d2c === _0x1ebd09;
            },
            'IDnfn': function (_0x485843, _0x3c6969) {
                return _0x485843(_0x3c6969);
            },
            'rADUO': _0xbab73a(432)
        };
    if (_0x44b876[_0xbab73a(433)](headers[_0xbab73a(434)], -7896 + -1 * 5882 + -4 * -3445))
        return InspectorTest[_0xbab73a(420)](_0x44b876[_0xbab73a(435)](_0x44b876['bNzYd'], JSON['stringify'](_0x5a3eac, null, 9849 + 8732 + -13 * 1429)));
    for (var _0x79a508 = 9562 + -11 * 515 + 9 * -433; _0x44b876[_0xbab73a(436)](_0x79a508, headers[_0xbab73a(434)]); _0x79a508++) {
        if (_0x44b876[_0xbab73a(437)](headers[_0x79a508][_0xbab73a(438)], '42')) {
            _0x44b876[_0xbab73a(439)](checkInnerProfile, headers[_0x79a508][_0xbab73a(428)]);
            return;
        }
    }
    InspectorTest[_0xbab73a(420)](_0x44b876['rADUO']);
}
function checkInnerProfile(_0x11bf79) {
    var _0x2fd7d1 = _0x190168, _0x5be876 = {
            'NGKpi': 'SUCCESS: retrieved \'42\' profile',
            'cpGTG': function (_0x4e54e9, _0x2a2af5, _0x13d975) {
                return _0x4e54e9(_0x2a2af5, _0x13d975);
            },
            'HpiOU': _0x2fd7d1(440),
            'bjiMP': _0x2fd7d1(441)
        };
    InspectorTest[_0x2fd7d1(442)](_0x5be876['NGKpi']);
    if (!_0x5be876[_0x2fd7d1(443)](findFunctionInProfile, _0x11bf79[_0x2fd7d1(444)], _0x2fd7d1(445)))
        return InspectorTest[_0x2fd7d1(420)](_0x5be876[_0x2fd7d1(446)] + JSON[_0x2fd7d1(447)](_0x11bf79, null, -15 * -419 + 8461 + -14742));
    InspectorTest['log'](_0x5be876[_0x2fd7d1(448)]), InspectorTest['completeTest']();
}
function _0x2a5c(_0x19af50, _0x44659c) {
    return _0x2a5c = function (_0x49e32b, _0x5a7584) {
        _0x49e32b = _0x49e32b - (-3175 + 3558 + -23 * -1);
        var _0x82efe8 = _0xd994[_0x49e32b];
        return _0x82efe8;
    }, _0x2a5c(_0x19af50, _0x44659c);
}
function findFunctionInProfile(_0x1a097d, _0x255eba) {
    var _0x25d1ab = _0x190168;
    return _0x1a097d[_0x25d1ab(449)](_0x131e8d => _0x131e8d[_0x25d1ab(450)][_0x25d1ab(451)] === _0x255eba);
}