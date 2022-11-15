'use strict';

const _0x27e5 = ['1708246TuXveF', '1184986BPpPoW', '432342QCJKWD', '4BQkZlb', '50TqfDcs', '23405qNJzxw', '396iSnyLr', '2776FcqvUg', './O(n)', './es6Repeat', 'abcd', '0|1|5|2|3|4', 'Fastest is ', 'name', 'complete', 'fRwvk', 'FJSAW', 'forEach', 'add', 'apply', 'TVTrb', 'log', 'target', 'ZHFfd', 'WMOTw', 'filter', 'fastest', 'xUnal', 'Suite', '-> pad 100 spaces to str of len 4', 'run', '-> pad 10 spaces to str of len 4', '0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789', '-> pad 9 to str of len 100', '311PTikVV', '5747JNuFeJ', '383izIZVI', '831xnbjsV'];

function _0x4471(_0x56cfd9, _0x5d8cf2) {
    return _0x4471 = function (_0x1bdf51, _0x4e8da3) {
        _0x1bdf51 = _0x1bdf51 - 491;
        const _0x49822b = _0x27e5[_0x1bdf51];

        return _0x49822b;
    }, _0x4471(_0x56cfd9, _0x5d8cf2);
}
const _0x4e485b = _0x4471;

(function (_0x5060e1, _0x231f06) {
    const _0x516c91 = _0x4471;

    while (true) {
        try {
            const _0x3591ac = -parseInt(_0x516c91(0x1eb)) * -parseInt(_0x516c91(0x1ec)) + parseInt(_0x516c91(0x1ed)) * parseInt(_0x516c91(0x1ee)) + parseInt(_0x516c91(0x1ef)) + -parseInt(_0x516c91(0x1f0)) + -parseInt(_0x516c91(0x1f1)) * parseInt(_0x516c91(0x1f2)) + -parseInt(_0x516c91(0x1f3)) * -parseInt(_0x516c91(0x1f4)) + -parseInt(_0x516c91(0x1f5)) * parseInt(_0x516c91(0x1f6));

            if (_0x3591ac === _0x231f06) break;else _0x5060e1.push(_0x5060e1.shift());
        } catch (_0x1e48b3) {
            _0x5060e1.push(_0x5060e1.shift());
        }
    }
})(_0x27e5, 970436);

const oN = require(_0x4e485b(0x1f7));

const es6Repeat = require(_0x4e485b(0x1f8));

const current = require('../');

const Benchmark = require('benchmark');

const str = _0x4e485b(0x1f9);

const len = 100;

function buildSuite(_0x3134aa, _0x4f5710, _0x36f947) {
    const _0x31d9f7 = _0x4e485b;
    const _0x5dbaeb = {
        'tnNui': _0x31d9f7(0x1fa),
        'fRwvk': function (_0x5917cc, _0x49ecda) {
            return _0x5917cc(_0x49ecda);
        },
        'pcaaL': _0x31d9f7(0x1fb),
        'FJSAW': _0x31d9f7(0x1fc),
        'TVTrb': 'cycle',
        'ZHFfd': _0x31d9f7(0x1fd)
    };

    const _0x2e0262 = _0x5dbaeb.tnNui.split('|');

    var _0x5ecc78 = 0;

    while (true) {
        switch (_0x2e0262[_0x5ecc78++]) {
            case '0':
                const _0x98ea62 = {
                    'ZsJrx': function (_0x59bacc, _0x1c90a7) {
                        const _0x2c6acd = _0x31d9f7;

                        return _0x5dbaeb[_0x2c6acd(0x1fe)](_0x59bacc, _0x1c90a7);
                    },
                    'WMOTw': function (_0x2a232c, _0x266f3d) {
                        return _0x2a232c + _0x266f3d;
                    },
                    'bbPfo': _0x5dbaeb.pcaaL,
                    'xUnal': _0x5dbaeb[_0x31d9f7(0x1ff)]
                };

                continue;
            case '1':
                console.log(_0x3134aa);
                continue;
            case '2':
                Object.keys(_0x4f5710)[_0x31d9f7(0x200)](function (_0x134327) {
                    const _0x2d5cf9 = _0x31d9f7;

                    _0x30359d[_0x2d5cf9(0x201)](_0x134327, function () {
                        const _0x47d587 = _0x2d5cf9;

                        _0x4f5710[_0x134327][_0x47d587(0x202)](null, _0x36f947);
                    });
                });
                continue;
            case '3':
                _0x30359d.on(_0x5dbaeb[_0x31d9f7(0x203)], function (_0x252070) {
                    const _0x12f891 = _0x31d9f7;

                    console[_0x12f891(0x204)](_0x98ea62.ZsJrx(String, _0x252070[_0x12f891(0x205)]));
                }).on(_0x5dbaeb[_0x31d9f7(0x206)], function () {
                    const _0x4a01db = _0x31d9f7;

                    console[_0x4a01db(0x204)](_0x98ea62[_0x4a01db(0x207)](_0x98ea62.bbPfo, this[_0x4a01db(0x208)](_0x4a01db(0x209)).map(_0x98ea62[_0x4a01db(0x20a)])));
                });
                continue;
            case '4':
                return _0x30359d;
            case '5':
                const _0x30359d = new Benchmark[_0x31d9f7(0x20b)]();

                continue;
        }
        break;
    }
}
const fns = {
    'O(n)': oN,
    'ES6 Repeat': es6Repeat,
    'Current': current
};

buildSuite(_0x4e485b(0x20c), fns, [_0x4e485b(0x1f9), 104, ' '])[_0x4e485b(0x20d)](), buildSuite(_0x4e485b(0x20e), fns, ['abcd', 14, ' '])[_0x4e485b(0x20d)](), buildSuite('-> pad 9 spaces to str of len 4', fns, [_0x4e485b(0x1f9), 13, ' '])[_0x4e485b(0x20d)](), buildSuite('-> pad 100 to str of len 100', fns, [_0x4e485b(0x20f), 200, ' ']).run(), buildSuite('-> pad 10 to str of len 100', fns, [_0x4e485b(0x20f), 110, ' '])[_0x4e485b(0x20d)](), buildSuite(_0x4e485b(0x210), fns, [_0x4e485b(0x20f), 109, ' ']).run();
