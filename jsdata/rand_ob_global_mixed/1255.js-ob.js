const _0x488b = [
    '17897rCuUjP',
    '4PJeJEK',
    '34557yigXre',
    '993109KkfeCW',
    '671182PlxZbt',
    '870760xqooMR',
    '2003ltYNRL',
    '545gsQcnS',
    '1444742TleOeT',
    'AsyncFunction',
    'constructor',
    'name',
    'WNCoD',
    'pfSbp',
    'Dnifg',
    'NWjYu',
    'now',
    'YWRrV',
    'gKkBA',
    'Timed\x20out\x20waiting\x20for\x20\x27',
    'once',
    'emitterEventPromise',
    'timeoutPromise',
    '17WxOJFj'
];
const _0x2670d0 = _0x25be;
(function (_0x19b73d, _0x4a2e8b) {
    const _0x3dce16 = _0x25be;
    while (!![]) {
        try {
            const _0x24a22f = parseInt(_0x3dce16(0x1d1)) * -parseInt(_0x3dce16(0x1d2)) + parseInt(_0x3dce16(0x1d3)) * parseInt(_0x3dce16(0x1d4)) + -parseInt(_0x3dce16(0x1d5)) + parseInt(_0x3dce16(0x1d6)) + parseInt(_0x3dce16(0x1d7)) + -parseInt(_0x3dce16(0x1d8)) * parseInt(_0x3dce16(0x1d9)) + parseInt(_0x3dce16(0x1da));
            if (_0x24a22f === _0x4a2e8b)
                break;
            else
                _0x19b73d['push'](_0x19b73d['shift']());
        } catch (_0x431954) {
            _0x19b73d['push'](_0x19b73d['shift']());
        }
    }
}(_0x488b, -0x93485 + 0x1 * 0x328c3 + 0x114671));
function _0x25be(_0x5d2650, _0x43537e) {
    return _0x25be = function (_0x1cefc6, _0x29fb95) {
        _0x1cefc6 = _0x1cefc6 - (-0x1 * -0x332 + 0x1 * 0x20f + -0x370);
        let _0x32e3c4 = _0x488b[_0x1cefc6];
        return _0x32e3c4;
    }, _0x25be(_0x5d2650, _0x43537e);
}
async function conditionPromise(_0xa4e903, _0x3a796e = 'anonymous\x20condition') {
    const _0xd94214 = _0x25be, _0x4a2064 = {
            'WNCoD': _0xd94214(0x1db),
            'XAWpf': function (_0x337876) {
                return _0x337876();
            },
            'pfSbp': function (_0x248692) {
                return _0x248692();
            },
            'Dnifg': function (_0x4a02ed, _0x3e9666) {
                return _0x4a02ed > _0x3e9666;
            },
            'NWjYu': function (_0x1968d9, _0x22dc2e) {
                return _0x1968d9 - _0x22dc2e;
            },
            'aSkUw': function (_0x308d7b, _0x3cb351) {
                return _0x308d7b + _0x3cb351;
            },
            'YWRrV': 'Timed\x20out\x20waiting\x20on\x20'
        }, _0x4302e0 = Date['now']();
    while (!![]) {
        await timeoutPromise(0x775 + 0x1 * -0x1365 + -0x315 * -0x4);
        if (_0xa4e903[_0xd94214(0x1dc)][_0xd94214(0x1dd)] !== _0x4a2064[_0xd94214(0x1de)] && _0x4a2064['XAWpf'](_0xa4e903))
            return;
        else {
            if (await _0x4a2064[_0xd94214(0x1df)](_0xa4e903))
                return;
        }
        if (_0x4a2064[_0xd94214(0x1e0)](_0x4a2064[_0xd94214(0x1e1)](Date[_0xd94214(0x1e2)](), _0x4302e0), 0x1 * -0x1baf + 0x53 * -0x5f + 0x4e04))
            throw new Error(_0x4a2064['aSkUw'](_0x4a2064[_0xd94214(0x1e3)], _0x3a796e));
    }
}
function timeoutPromise(_0x24038b) {
    return new Promise(_0x21e243 => {
        global['setTimeout'](_0x21e243, _0x24038b);
    });
}
function emitterEventPromise(_0x18738, _0x461cd9, _0x45e374 = -0x3983 + 0x18f6 + 0x5b25 * 0x1) {
    const _0x151df3 = {
        'gKkBA': function (_0x327c3d, _0x24b0a8) {
            return _0x327c3d(_0x24b0a8);
        }
    };
    return new Promise((_0x5c6ead, _0xce2b30) => {
        const _0x2258bd = _0x25be, _0x4934af = setTimeout(() => {
                const _0x256c42 = _0x25be;
                _0x151df3[_0x256c42(0x1e4)](_0xce2b30, new Error(_0x256c42(0x1e5) + _0x461cd9 + '\x27\x20event'));
            }, _0x45e374);
        _0x18738[_0x2258bd(0x1e6)](_0x461cd9, () => {
            clearTimeout(_0x4934af), _0x5c6ead();
        });
    });
}
exports['conditionPromise'] = conditionPromise, exports[_0x2670d0(0x1e7)] = emitterEventPromise, exports[_0x2670d0(0x1e8)] = timeoutPromise;
