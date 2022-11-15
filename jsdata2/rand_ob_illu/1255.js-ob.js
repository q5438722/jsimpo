const _0x5c27 = ['once', 'TwRNu', 'hVupj', 'conditionPromise', 'timeoutPromise', '1598979RlbmJD', '53wJfwmg', '4775TWZMbW', '1135654wklkjj', '314100xxpnVl', '1301874kHgaSF', '278ONlnwz', '1214ntnPCk', '1MJsgSS', '1412813dYJlnu', 'anonymous condition', 'now', 'LWCLg', 'name', 'NIvbz', 'LYeIa', 'aYLnM', 'Timed out waiting on ', 'setTimeout', 'VFAWU', 'lUZon', 'Timed out waiting for \'', '\' event'];
const _0x3aa8aa = _0x2ccf;

(function (_0x15e927, _0x43a883) {
    const _0x294301 = _0x2ccf;

    while (true) {
        try {
            const _0x4c0c74 = -parseInt(_0x294301(0x1a4)) + parseInt(_0x294301(0x1a5)) * parseInt(_0x294301(0x1a6)) + -parseInt(_0x294301(0x1a7)) + parseInt(_0x294301(0x1a8)) + parseInt(_0x294301(0x1a9)) + parseInt(_0x294301(0x1aa)) * parseInt(_0x294301(0x1ab)) + -parseInt(_0x294301(0x1ac)) * -parseInt(_0x294301(0x1ad));

            if (_0x4c0c74 === _0x43a883) break;else _0x15e927.push(_0x15e927.shift());
        } catch (_0x4d6487) {
            _0x15e927.push(_0x15e927.shift());
        }
    }
})(_0x5c27, 884721);
function _0x2ccf(_0x3910d1, _0x11cb18) {
    return _0x2ccf = function (_0x171305, _0x321db1) {
        _0x171305 = _0x171305 - 420;
        const _0x3923fb = _0x5c27[_0x171305];

        return _0x3923fb;
    }, _0x2ccf(_0x3910d1, _0x11cb18);
}
async function conditionPromise(_0xe29ed2, _0x2542ae = _0x3aa8aa(0x1ae)) {
    const _0x308fff = _0x3aa8aa;
    const _0x1f820f = {
        'LWCLg': function (_0x5252c7, _0x404501) {
            return _0x5252c7 !== _0x404501;
        },
        'NIvbz': 'AsyncFunction',
        'LYeIa': function (_0x3af738) {
            return _0x3af738();
        },
        'aYLnM': function (_0x23efc3, _0xa50b91) {
            return _0x23efc3 + _0xa50b91;
        }
    };

    const _0x4083f1 = Date[_0x308fff(0x1af)]();

    while (true) {
        await timeoutPromise(100);
        if (_0x1f820f[_0x308fff(0x1b0)](_0xe29ed2.constructor[_0x308fff(0x1b1)], _0x1f820f[_0x308fff(0x1b2)]) && _0xe29ed2()) return;else {
            if (await _0x1f820f[_0x308fff(0x1b3)](_0xe29ed2)) return;
        }
        if (Date.now() - _0x4083f1 > 5000) throw new Error(_0x1f820f[_0x308fff(0x1b4)](_0x308fff(0x1b5), _0x2542ae));
    }
}
function timeoutPromise(_0x26028e) {
    return new Promise(_0x489d07 => {
        const _0x513ac1 = _0x2ccf;

        global[_0x513ac1(0x1b6)](_0x489d07, _0x26028e);
    });
}
function emitterEventPromise(_0x2a21d0, _0x4d2309, _0x30a879 = 15000) {
    const _0x3fa096 = {
        'VFAWU': function (_0x5123f3, _0x24fff4) {
            return _0x5123f3(_0x24fff4);
        },
        'lUZon': function (_0x5811e2) {
            return _0x5811e2();
        }
    };

    return new Promise((_0x13396c, _0x57c3af) => {
        const _0xdf83ee = _0x2ccf;
        const _0x102546 = {
            'TwRNu': function (_0x4b8e70, _0x1bf615) {
                const _0x383475 = _0x2ccf;

                return _0x3fa096[_0x383475(0x1b7)](_0x4b8e70, _0x1bf615);
            },
            'hVupj': function (_0x1a3d5e) {
                const _0x5e6ecd = _0x2ccf;

                return _0x3fa096[_0x5e6ecd(0x1b8)](_0x1a3d5e);
            }
        };

        const _0x3d1b87 = setTimeout(() => {
            const _0x5c6fb7 = _0x2ccf;

            _0x3fa096[_0x5c6fb7(0x1b7)](_0x57c3af, new Error(_0x5c6fb7(0x1b9) + _0x4d2309 + _0x5c6fb7(0x1ba)));
        }, _0x30a879);

        _0x2a21d0[_0xdf83ee(0x1bb)](_0x4d2309, () => {
            const _0x9e2879 = _0xdf83ee;

            _0x102546[_0x9e2879(0x1bc)](clearTimeout, _0x3d1b87), _0x102546[_0x9e2879(0x1bd)](_0x13396c);
        });
    });
}
exports[_0x3aa8aa(0x1be)] = conditionPromise, exports['emitterEventPromise'] = emitterEventPromise, exports[_0x3aa8aa(0x1bf)] = timeoutPromise;
