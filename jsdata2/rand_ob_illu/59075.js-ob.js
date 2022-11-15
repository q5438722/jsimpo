const _0x3005 = ['Runtime', 'onConsoleAPICalled', 'args', 'value', 'runAsyncTestSuite', 'Eczca', 'EpiYN', 'UlQry', 'TAPFh', 'dPWbs', '3|2|5|4|1|0', '\'timeEnd\'', 'MClmW', 'split', 'evaluate', 'console.timeEnd(', 'setCurrentTimeMSForTest', 'LdUMU', 'console.time(', 'console.log(\'js: \' + ', ' + \' ms\')', '1227760CzNHoM', '1357338dlMIxj', '558825bMfMJc', '1309353JCOPDG', '397272UzwOYF', '1322652lAtCEs', '4347600VdLtuX', 'start', 'Checks format of console.timeEnd output', 'enable'];
const _0x3c41bc = _0x2ffe;

(function (_0x64d3bc, _0x3f2bea) {
    const _0x1362ef = _0x2ffe;

    while (true) {
        try {
            const _0x43744b = parseInt(_0x1362ef(0x195)) + parseInt(_0x1362ef(0x196)) + -parseInt(_0x1362ef(0x197)) + parseInt(_0x1362ef(0x198)) + parseInt(_0x1362ef(0x199)) + parseInt(_0x1362ef(0x19a)) + -parseInt(_0x1362ef(0x19b));

            if (_0x43744b === _0x3f2bea) break;else _0x64d3bc.push(_0x64d3bc.shift());
        } catch (_0x1da2ea) {
            _0x64d3bc.push(_0x64d3bc.shift());
        }
    }
})(_0x3005, 707950);
function _0x2ffe(_0x388c5b, _0x38bbed) {
    return _0x2ffe = function (_0x5a8c93, _0x121996) {
        _0x5a8c93 = _0x5a8c93 - 405;
        const _0x62e821 = _0x3005[_0x5a8c93];

        return _0x62e821;
    }, _0x2ffe(_0x388c5b, _0x38bbed);
}

var { session, contextGroup, Protocol } = InspectorTest[_0x3c41bc(0x19c)](_0x3c41bc(0x19d));

Protocol.Runtime[_0x3c41bc(0x19e)](), Protocol[_0x3c41bc(0x19f)][_0x3c41bc(0x1a0)](_0x2cae6f => {
    const _0x3f1596 = _0x3c41bc;

    InspectorTest.log(_0x2cae6f.params[_0x3f1596(0x1a1)][0][_0x3f1596(0x1a2)]);
}), InspectorTest[_0x3c41bc(0x1a3)]([function zero() {
    return checkInterval(0);
}, function verySmall() {
    return checkInterval(1e-15);
}, function small() {
    const _0x441ed2 = {
        'kpWvo': function (_0x18075f, _0x54121d) {
            return _0x18075f(_0x54121d);
        }
    };

    return _0x441ed2.kpWvo(checkInterval, 0.001);
}, function regular() {
    return checkInterval(1.2345);
}, function big() {
    const _0x3801c1 = {
        'vaTHx': function (_0x5a2ee6, _0x2e720e) {
            return _0x5a2ee6(_0x2e720e);
        }
    };

    return _0x3801c1.vaTHx(checkInterval, 10000.2345);
}, function veryBig() {
    const _0x1948bc = _0x3c41bc;
    const _0x335bc0 = {
        'Eczca': function (_0x56f2d6, _0x1c2411) {
            return _0x56f2d6 + _0x1c2411;
        }
    };

    return checkInterval(_0x335bc0[_0x1948bc(0x1a4)](1000000000000000, 0.2345));
}, function huge() {
    const _0x32d5fc = _0x3c41bc;
    const _0x4de678 = {
        'EpiYN': function (_0x4190c9, _0x2feab8) {
            return _0x4190c9(_0x2feab8);
        }
    };

    return _0x4de678[_0x32d5fc(0x1a5)](checkInterval, 0xb7abc627050308000000000000000000000);
}, function undefinedAsLabel() {
    const _0x2d42d7 = _0x3c41bc;
    const _0x26d369 = {
        'UlQry': function (_0x3953f8, _0x5ea5de, _0x4803d4) {
            return _0x3953f8(_0x5ea5de, _0x4803d4);
        },
        'TAPFh': 'undefined'
    };

    return _0x26d369[_0x2d42d7(0x1a6)](checkInterval, 1, _0x26d369[_0x2d42d7(0x1a7)]);
}, function emptyAsLabel() {
    const _0xf55eda = _0x3c41bc;
    const _0x3dba55 = {
        'dPWbs': function (_0x1645d0, _0x138a7a, _0x5ab7d0) {
            return _0x1645d0(_0x138a7a, _0x5ab7d0);
        }
    };

    return _0x3dba55[_0xf55eda(0x1a8)](checkInterval, 1, '');
}]);
async function checkInterval(_0x1b8b81, _0x5716c5) {
    const _0x2ddde8 = _0x3c41bc;
    const _0x68fe5f = {
        'MClmW': _0x2ddde8(0x1a9),
        'LdUMU': function (_0x56ebf2, _0x4cb3fb) {
            return _0x56ebf2 === _0x4cb3fb;
        },
        'OuhwC': _0x2ddde8(0x1aa)
    };

    const _0x3decbf = _0x68fe5f[_0x2ddde8(0x1ab)][_0x2ddde8(0x1ac)]('|');

    var _0x602999 = 0;

    while (true) {
        switch (_0x3decbf[_0x602999++]) {
            case '0':
                await Protocol[_0x2ddde8(0x19f)][_0x2ddde8(0x1ad)]({ 'expression': _0x2ddde8(0x1ae) + _0x5716c5 + ')' });
                continue;
            case '1':
                utils.setCurrentTimeMSForTest(_0x1b8b81);
                continue;
            case '2':
                utils[_0x2ddde8(0x1af)](0);
                continue;
            case '3':
                _0x5716c5 = _0x68fe5f[_0x2ddde8(0x1b0)](_0x5716c5, undefined) ? _0x68fe5f.OuhwC : _0x5716c5;
                continue;
            case '4':
                await Protocol[_0x2ddde8(0x19f)].evaluate({ 'expression': _0x2ddde8(0x1b1) + _0x5716c5 + ')' });
                continue;
            case '5':
                Protocol[_0x2ddde8(0x19f)][_0x2ddde8(0x1ad)]({ 'expression': _0x2ddde8(0x1b2) + _0x1b8b81 + _0x2ddde8(0x1b3) });
                continue;
        }
        break;
    }
}
