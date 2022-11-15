async function conditionPromise(_0x31c14a, _0x5340c1 = 'anonymous\x20condition') {
    const _0x4cfdb4 = {
            'Pduqm': function (_0x3b2885, _0xbc5b33) {
                return _0x3b2885(_0xbc5b33);
            },
            'KGUzO': function (_0x33229a, _0x58d057) {
                return _0x33229a !== _0x58d057;
            },
            'oWHOq': 'AsyncFunction',
            'aoSLQ': function (_0x404830) {
                return _0x404830();
            },
            'nBYxb': function (_0x3c8f20) {
                return _0x3c8f20();
            },
            'BkWmt': function (_0x46827d, _0x402060) {
                return _0x46827d > _0x402060;
            },
            'CJQyc': function (_0x2cca94, _0x5439c8) {
                return _0x2cca94 - _0x5439c8;
            },
            'YDepA': function (_0x2b7c20, _0x37edac) {
                return _0x2b7c20 + _0x37edac;
            },
            'Yojel': 'Timed\x20out\x20waiting\x20on\x20'
        }, _0x5a6cd3 = Date['now']();
    while (!![]) {
        await _0x4cfdb4['Pduqm'](timeoutPromise, 0x64);
        if (_0x4cfdb4['KGUzO'](_0x31c14a['constructor']['name'], _0x4cfdb4['oWHOq']) && _0x4cfdb4['aoSLQ'](_0x31c14a))
            return;
        else {
            if (await _0x4cfdb4['nBYxb'](_0x31c14a))
                return;
        }
        if (_0x4cfdb4['BkWmt'](_0x4cfdb4['CJQyc'](Date['now'](), _0x5a6cd3), 0x1388))
            throw new Error(_0x4cfdb4['YDepA'](_0x4cfdb4['Yojel'], _0x5340c1));
    }
}
function timeoutPromise(_0x55c332) {
    return new Promise(_0x1534ef => {
        global['setTimeout'](_0x1534ef, _0x55c332);
    });
}
function emitterEventPromise(_0x31f965, _0x2be2cf, _0x5aeafe = 0x3a98) {
    const _0x4e044f = {
        'YmQmT': function (_0x4134c7, _0x57703e) {
            return _0x4134c7(_0x57703e);
        },
        'VGcAq': function (_0x346bbe) {
            return _0x346bbe();
        },
        'oNUUh': function (_0xdcf4c4, _0x21de1c) {
            return _0xdcf4c4(_0x21de1c);
        },
        'hAkOi': function (_0x59ca47, _0x5b8da7, _0x315128) {
            return _0x59ca47(_0x5b8da7, _0x315128);
        }
    };
    return new Promise((_0x4c98fd, _0x26c463) => {
        const _0x422ae2 = {
                'HpbaQ': function (_0x32d56d, _0x3ad961) {
                    return _0x4e044f['oNUUh'](_0x32d56d, _0x3ad961);
                }
            }, _0x5ae843 = _0x4e044f['hAkOi'](setTimeout, () => {
                _0x422ae2['HpbaQ'](_0x26c463, new Error('Timed\x20out\x20waiting\x20for\x20\x27' + _0x2be2cf + '\x27\x20event'));
            }, _0x5aeafe);
        _0x31f965['once'](_0x2be2cf, () => {
            _0x4e044f['YmQmT'](clearTimeout, _0x5ae843), _0x4e044f['VGcAq'](_0x4c98fd);
        });
    });
}
exports['conditionPromise'] = conditionPromise, exports['emitterEventPromise'] = emitterEventPromise, exports['timeoutPromise'] = timeoutPromise;
