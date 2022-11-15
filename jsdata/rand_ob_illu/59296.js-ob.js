const _0xd994 = ['functionName', '24Dvuseo', '8867Hcepfg', '1005926SXohtd', '321899Znuwey', '200717blkHBx', '1RbieQz', '290584DEKhBa', '917474gAYKWc', '91741lmrkFy', '5NWtNJu', 'start', 'Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.', 'addScript', '\nfunction collectProfiles()\n{\n  console.profile("outer");\n  console.profile(42);\n  console.profileEnd("outer");\n  console.profileEnd(42);\n}', 'fail', 'bpCNb', 'completeTest', 'Profiler', 'evaluate', 'then', 'onConsoleProfileFinished', 'params', 'profile', 'push', 'Bqvfh', 'Cannot retrive headers: ', 'Cannot find \'42\' profile header', 'ddKyb', 'length', 'QfGmm', 'LKuLc', 'VGgwt', 'title', 'IDnfn', 'collectProfiles function not found in the profile: ', 'SUCCESS: found \'collectProfiles\' function in the profile', 'log', 'cpGTG', 'nodes', 'collectProfiles', 'HpiOU', 'stringify', 'bjiMP', 'some', 'callFrame'];
const _0x190168 = _0x2a5c;

(function (_0x2aaffc, _0xe1850a) {
    const _0x6ffb41 = _0x2a5c;

    while (true) {
        try {
            const _0x2c75fc = -parseInt(_0x6ffb41(0x196)) * parseInt(_0x6ffb41(0x197)) + parseInt(_0x6ffb41(0x198)) + parseInt(_0x6ffb41(0x199)) + parseInt(_0x6ffb41(0x19a)) * parseInt(_0x6ffb41(0x19b)) + -parseInt(_0x6ffb41(0x19c)) + -parseInt(_0x6ffb41(0x19d)) + -parseInt(_0x6ffb41(0x19e)) * -parseInt(_0x6ffb41(0x19f));

            if (_0x2c75fc === _0xe1850a) break;else _0x2aaffc.push(_0x2aaffc.shift());
        } catch (_0x39109e) {
            _0x2aaffc.push(_0x2aaffc.shift());
        }
    }
})(_0xd994, 566381);

var { session, contextGroup, Protocol } = InspectorTest[_0x190168(0x1a0)](_0x190168(0x1a1));

contextGroup[_0x190168(0x1a2)](_0x190168(0x1a3)), InspectorTest[_0x190168(0x1a4)] = function (_0x45c8de) {
    const _0x242465 = _0x190168;
    const _0x19eab8 = { 'bpCNb': 'FAIL: ' };

    InspectorTest.log(_0x19eab8[_0x242465(0x1a5)] + _0x45c8de), InspectorTest[_0x242465(0x1a6)]();
}, Protocol[_0x190168(0x1a7)].enable(), Protocol.Runtime[_0x190168(0x1a8)]({ 'expression': 'collectProfiles()' })[_0x190168(0x1a9)](didCollectProfiles);
const headers = [];

Protocol.Profiler[_0x190168(0x1aa)](function (_0x180284) {
    const _0x2278a7 = _0x190168;
    const _0x5108ea = {
        'Bqvfh': _0x2278a7(0x1ab),
        'vmeut': _0x2278a7(0x1ac),
        'ZNyHW': 'title'
    };

    headers[_0x2278a7(0x1ad)]({
        'profile': _0x180284[_0x5108ea[_0x2278a7(0x1ae)]][_0x5108ea.vmeut],
        'title': _0x180284[_0x2278a7(0x1ab)][_0x5108ea.ZNyHW]
    });
});
function didCollectProfiles(_0x5a3eac) {
    const _0xbab73a = _0x190168;
    const _0x44b876 = {
        'ddKyb': function (_0x5d0b50, _0x1940e0) {
            return _0x5d0b50 !== _0x1940e0;
        },
        'QfGmm': function (_0x18c9ac, _0xcbe9a) {
            return _0x18c9ac + _0xcbe9a;
        },
        'bNzYd': _0xbab73a(0x1af),
        'LKuLc': function (_0x392a01, _0x222e9e) {
            return _0x392a01 < _0x222e9e;
        },
        'VGgwt': function (_0x200d2c, _0x1ebd09) {
            return _0x200d2c === _0x1ebd09;
        },
        'IDnfn': function (_0x485843, _0x3c6969) {
            return _0x485843(_0x3c6969);
        },
        'rADUO': _0xbab73a(0x1b0)
    };

    if (_0x44b876[_0xbab73a(0x1b1)](headers[_0xbab73a(0x1b2)], 2)) return InspectorTest[_0xbab73a(0x1a4)](_0x44b876[_0xbab73a(0x1b3)](_0x44b876.bNzYd, JSON.stringify(_0x5a3eac, null, 4)));
    for (var _0x79a508 = 0; _0x44b876[_0xbab73a(0x1b4)](_0x79a508, headers[_0xbab73a(0x1b2)]); _0x79a508++) {
        if (_0x44b876[_0xbab73a(0x1b5)](headers[_0x79a508][_0xbab73a(0x1b6)], '42')) {
            _0x44b876[_0xbab73a(0x1b7)](checkInnerProfile, headers[_0x79a508][_0xbab73a(0x1ac)]);
            return;
        }
    }
    InspectorTest[_0xbab73a(0x1a4)](_0x44b876.rADUO);
}
function checkInnerProfile(_0x11bf79) {
    const _0x2fd7d1 = _0x190168;
    const _0x5be876 = {
        'NGKpi': 'SUCCESS: retrieved \'42\' profile',
        'cpGTG': function (_0x4e54e9, _0x2a2af5, _0x13d975) {
            return _0x4e54e9(_0x2a2af5, _0x13d975);
        },
        'HpiOU': _0x2fd7d1(0x1b8),
        'bjiMP': _0x2fd7d1(0x1b9)
    };

    InspectorTest[_0x2fd7d1(0x1ba)](_0x5be876.NGKpi);
    if (!_0x5be876[_0x2fd7d1(0x1bb)](findFunctionInProfile, _0x11bf79[_0x2fd7d1(0x1bc)], _0x2fd7d1(0x1bd))) return InspectorTest[_0x2fd7d1(0x1a4)](_0x5be876[_0x2fd7d1(0x1be)] + JSON[_0x2fd7d1(0x1bf)](_0x11bf79, null, 4));
    InspectorTest.log(_0x5be876[_0x2fd7d1(0x1c0)]), InspectorTest.completeTest();
}
function _0x2a5c(_0x19af50, _0x44659c) {
    return _0x2a5c = function (_0x49e32b, _0x5a7584) {
        _0x49e32b = _0x49e32b - 406;
        const _0x82efe8 = _0xd994[_0x49e32b];

        return _0x82efe8;
    }, _0x2a5c(_0x19af50, _0x44659c);
}
function findFunctionInProfile(_0x1a097d, _0x255eba) {
    const _0x25d1ab = _0x190168;

    return _0x1a097d[_0x25d1ab(0x1c1)](_0x131e8d => _0x131e8d[_0x25d1ab(0x1c2)][_0x25d1ab(0x1c3)] === _0x255eba);
}
