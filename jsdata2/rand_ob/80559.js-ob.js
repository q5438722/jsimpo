var _0x4916 = [
    'timeStamp',
    'maxDx',
    'dYJxh',
    'IpCMJ',
    'trackingID',
    'screenY',
    'Krtkc',
    '_findDelta',
    'max',
    'abs',
    'push',
    'mIwnw',
    'shift',
    'onTouchMove',
    'length',
    'qAbCF',
    'historyY',
    'BeGqM',
    'yWAVJ',
    'fDFFI',
    'RzhRA',
    'onTouchEnd',
    '756680qAFzZu',
    '1uPhnGP',
    '650372HNEcgt',
    '332428IrHCkZ',
    '1yBlhTP',
    '1931QrhDfA',
    '111EuhRPN',
    '11353wvBcam',
    '24gyJqMO',
    '257183BwxsKG',
    '341226OMjYzn',
    'Uhzca',
    '_initedScroller',
    '__handleTouchEnd',
    '_handleTouchEnd',
    'bind',
    '_scroller',
    '__handleTouchStart',
    '__handleTouchMove',
    '_handleTouchMove',
    '_touchInfo',
    'detail',
    'state',
    'sErZX',
    'qnYFJ',
    'screenX',
    '8|6|0|4|7|5|1|2|3',
    'touch',
    'mouse',
    'AnOSJ',
    'split',
    'maxDy',
    'listener',
    'onTouchStart',
    'preventDefault',
    'historyX',
    'historyTime'
];
(function (_0x58b128, _0x18d923) {
    var _0x3722de = _0x27fa;
    while (!![]) {
        try {
            var _0x30cd3b = parseInt(_0x3722de(0x1aa)) + -parseInt(_0x3722de(0x1ab)) * -parseInt(_0x3722de(0x1ac)) + -parseInt(_0x3722de(0x1ad)) * parseInt(_0x3722de(0x1ae)) + -parseInt(_0x3722de(0x1af)) * parseInt(_0x3722de(0x1b0)) + -parseInt(_0x3722de(0x1b1)) * parseInt(_0x3722de(0x1b2)) + parseInt(_0x3722de(0x1b3)) + -parseInt(_0x3722de(0x1b4));
            if (_0x30cd3b === _0x18d923)
                break;
            else
                _0x58b128['push'](_0x58b128['shift']());
        } catch (_0x5da777) {
            _0x58b128['push'](_0x58b128['shift']());
        }
    }
}(_0x4916, -0x521ee + 0x51d6b * 0x1 + 0x7b45b));
import { Scroller } from './Scroller';
function _0x27fa(_0x188c4a, _0x49253c) {
    return _0x27fa = function (_0x35e03e, _0x3396ed) {
        _0x35e03e = _0x35e03e - (-0x1 * -0x1b2d + 0x6da * -0x1 + -0x11 * 0x119);
        var _0x342d56 = _0x4916[_0x35e03e];
        return _0x342d56;
    }, _0x27fa(_0x188c4a, _0x49253c);
}
export default {
    'methods': {
        'initScroller': function (_0xee5a6e, _0x49be27) {
            var _0x1331bc = _0x27fa, _0x5c48d1 = { 'Uhzca': '2|3|4|5|1|0' }, _0x38a72b = _0x5c48d1[_0x1331bc(0x1b5)]['split']('|'), _0x49dd2c = 0x1c * 0xa + -0x9 * 0x454 + 0x977 * 0x4;
            while (!![]) {
                switch (_0x38a72b[_0x49dd2c++]) {
                case '0':
                    this[_0x1331bc(0x1b6)] = !![];
                    continue;
                case '1':
                    this[_0x1331bc(0x1b7)] = this[_0x1331bc(0x1b8)][_0x1331bc(0x1b9)](this);
                    continue;
                case '2':
                    this['_touchInfo'] = {
                        'trackingID': -(-0x1cb5 * 0x1 + -0xd00 + 0x29b6 * 0x1),
                        'maxDy': 0x0,
                        'maxDx': 0x0
                    };
                    continue;
                case '3':
                    this[_0x1331bc(0x1ba)] = new Scroller(_0xee5a6e, _0x49be27);
                    continue;
                case '4':
                    this[_0x1331bc(0x1bb)] = this['_handleTouchStart'][_0x1331bc(0x1b9)](this);
                    continue;
                case '5':
                    this[_0x1331bc(0x1bc)] = this[_0x1331bc(0x1bd)][_0x1331bc(0x1b9)](this);
                    continue;
                }
                break;
            }
        },
        '_findDelta': function (_0x1058b4) {
            var _0xcc3752 = _0x27fa, _0x58ff85 = {
                    'qnYFJ': function (_0x4f5f10, _0x2dad89) {
                        return _0x4f5f10 === _0x2dad89;
                    },
                    'sErZX': 'move',
                    'wJUtS': 'end',
                    'PdRka': function (_0x149c6a, _0x3224b6) {
                        return _0x149c6a - _0x3224b6;
                    }
                }, _0x2cde80 = this[_0xcc3752(0x1be)];
            return _0x58ff85['qnYFJ'](_0x1058b4[_0xcc3752(0x1bf)][_0xcc3752(0x1c0)], _0x58ff85[_0xcc3752(0x1c1)]) || _0x58ff85[_0xcc3752(0x1c2)](_0x1058b4[_0xcc3752(0x1bf)][_0xcc3752(0x1c0)], _0x58ff85['wJUtS']) ? {
                'x': _0x1058b4[_0xcc3752(0x1bf)]['dx'],
                'y': _0x1058b4['detail']['dy']
            } : {
                'x': _0x1058b4[_0xcc3752(0x1c3)] - _0x2cde80['x'],
                'y': _0x58ff85['PdRka'](_0x1058b4['screenY'], _0x2cde80['y'])
            };
        },
        '_handleTouchStart': function (_0x4d0bf5) {
            var _0xb80cb4 = _0x27fa, _0x2df514 = {
                    'AnOSJ': _0xb80cb4(0x1c4),
                    'dYJxh': function (_0x26a108, _0x13622a) {
                        return _0x26a108 === _0x13622a;
                    },
                    'IpCMJ': 'start',
                    'QmkfL': _0xb80cb4(0x1c5),
                    'aOgWM': _0xb80cb4(0x1c6)
                }, _0x2e5c56 = this['_touchInfo'], _0x57799d = this['_scroller'];
            if (_0x57799d) {
                var _0x2a2db0 = _0x2df514[_0xb80cb4(0x1c7)][_0xb80cb4(0x1c8)]('|'), _0x18158f = 0x2232 + 0x1633 * 0x1 + -0x1 * 0x3865;
                while (!![]) {
                    switch (_0x2a2db0[_0x18158f++]) {
                    case '0':
                        _0x2e5c56[_0xb80cb4(0x1c9)] = -0x22ee * 0x1 + 0x1 * -0x58d + 0x287b;
                        continue;
                    case '1':
                        _0x2e5c56[_0xb80cb4(0x1ca)] = _0x57799d;
                        continue;
                    case '2':
                        _0x57799d[_0xb80cb4(0x1cb)] && _0x57799d[_0xb80cb4(0x1cb)]();
                        continue;
                    case '3':
                        _0x4d0bf5[_0xb80cb4(0x1cc)]();
                        continue;
                    case '4':
                        _0x2e5c56[_0xb80cb4(0x1cd)] = [-0xb * 0x1dc + 0x2554 + -0x10e0];
                        continue;
                    case '5':
                        _0x2e5c56[_0xb80cb4(0x1ce)] = [_0x4d0bf5[_0xb80cb4(0x1bf)][_0xb80cb4(0x1cf)]];
                        continue;
                    case '6':
                        _0x2e5c56[_0xb80cb4(0x1d0)] = 0x63 * -0xa + -0x63c + -0xa1a * -0x1;
                        continue;
                    case '7':
                        _0x2e5c56['historyY'] = [0x147a + 0x2 * -0x865 + 0x1d8 * -0x2];
                        continue;
                    case '8':
                        _0x2df514[_0xb80cb4(0x1d1)](_0x4d0bf5['detail']['state'], _0x2df514[_0xb80cb4(0x1d2)]) ? (_0x2e5c56[_0xb80cb4(0x1d3)] = _0x2df514['QmkfL'], _0x2e5c56['x'] = _0x4d0bf5[_0xb80cb4(0x1bf)]['x'], _0x2e5c56['y'] = _0x4d0bf5['detail']['y']) : (_0x2e5c56['trackingID'] = _0x2df514['aOgWM'], _0x2e5c56['x'] = _0x4d0bf5[_0xb80cb4(0x1c3)], _0x2e5c56['y'] = _0x4d0bf5[_0xb80cb4(0x1d4)]);
                        continue;
                    }
                    break;
                }
            }
        },
        '_handleTouchMove': function (_0x12811f) {
            var _0x133e24 = _0x27fa, _0x1758a5 = {
                    'Krtkc': function (_0x2819db, _0x30026c) {
                        return _0x2819db !== _0x30026c;
                    },
                    'mIwnw': function (_0x1eb5f2, _0x300e20) {
                        return _0x1eb5f2 > _0x300e20;
                    }
                }, _0xb206d8 = this['_touchInfo'];
            if (_0x1758a5[_0x133e24(0x1d5)](_0xb206d8[_0x133e24(0x1d3)], -(-0xbf5 + 0x2112 + -0x151c))) {
                _0x12811f[_0x133e24(0x1cc)]();
                var _0x40cadb = this[_0x133e24(0x1d6)](_0x12811f);
                if (_0x40cadb) {
                    for (_0xb206d8['maxDy'] = Math[_0x133e24(0x1d7)](_0xb206d8['maxDy'], Math[_0x133e24(0x1d8)](_0x40cadb['y'])), _0xb206d8['maxDx'] = Math['max'](_0xb206d8[_0x133e24(0x1d0)], Math[_0x133e24(0x1d8)](_0x40cadb['x'])), _0xb206d8[_0x133e24(0x1cd)][_0x133e24(0x1d9)](_0x40cadb['x']), _0xb206d8['historyY']['push'](_0x40cadb['y']), _0xb206d8[_0x133e24(0x1ce)][_0x133e24(0x1d9)](_0x12811f[_0x133e24(0x1bf)]['timeStamp']); _0x1758a5[_0x133e24(0x1da)](_0xb206d8[_0x133e24(0x1ce)]['length'], 0x10ed + -0x668 + 0xa7b * -0x1);) {
                        _0xb206d8[_0x133e24(0x1ce)][_0x133e24(0x1db)](), _0xb206d8[_0x133e24(0x1cd)][_0x133e24(0x1db)](), _0xb206d8['historyY'][_0x133e24(0x1db)]();
                    }
                    _0xb206d8['listener'] && _0xb206d8[_0x133e24(0x1ca)][_0x133e24(0x1dc)] && _0xb206d8[_0x133e24(0x1ca)][_0x133e24(0x1dc)](_0x40cadb['x'], _0x40cadb['y'], _0x12811f[_0x133e24(0x1bf)][_0x133e24(0x1cf)]);
                }
            }
        },
        '_handleTouchEnd': function (_0x35d4c4) {
            var _0x2947d2 = _0x27fa, _0x1638a7 = {
                    'LPSSA': function (_0x495f34, _0x49806b) {
                        return _0x495f34 !== _0x49806b;
                    },
                    'qAbCF': function (_0x2ff658, _0x3a2898) {
                        return _0x2ff658 - _0x3a2898;
                    },
                    'BeGqM': function (_0x1d25a0, _0x402303) {
                        return _0x1d25a0 > _0x402303;
                    },
                    'yWAVJ': function (_0x14d1d3, _0x356fad) {
                        return _0x14d1d3 - _0x356fad;
                    },
                    'fDFFI': function (_0xe38cb3, _0x2a247a) {
                        return _0xe38cb3 / _0x2a247a;
                    },
                    'RzhRA': function (_0x372181, _0x4f4274) {
                        return _0x372181 / _0x4f4274;
                    }
                }, _0x3aafc7 = this['_touchInfo'];
            if (_0x1638a7['LPSSA'](_0x3aafc7[_0x2947d2(0x1d3)], -(0x7 * 0x2e + -0x1 * -0x23ab + -0x24ec))) {
                _0x35d4c4['preventDefault']();
                var _0x3e445b = this['_findDelta'](_0x35d4c4);
                if (_0x3e445b) {
                    var _0x13b4d9 = _0x3aafc7[_0x2947d2(0x1ca)];
                    _0x3aafc7[_0x2947d2(0x1d3)] = -(-0x5c + 0x1 * -0x2173 + 0x2 * 0x10e8), _0x3aafc7[_0x2947d2(0x1ca)] = null;
                    var _0x1b7f5e = _0x3aafc7[_0x2947d2(0x1ce)][_0x2947d2(0x1dd)], _0x2623b6 = {
                            'x': 0x0,
                            'y': 0x0
                        };
                    if (_0x1b7f5e > 0x1abe + -0x1729 + 0x131 * -0x3)
                        for (var _0x59a00b = _0x1638a7[_0x2947d2(0x1de)](_0x3aafc7[_0x2947d2(0x1ce)][_0x2947d2(0x1dd)], -0x2446 * 0x1 + 0x1e9b + -0xb * -0x84), _0x618e7c = _0x3aafc7[_0x2947d2(0x1ce)][_0x59a00b], _0x4a3f92 = _0x3aafc7[_0x2947d2(0x1cd)][_0x59a00b], _0x43f098 = _0x3aafc7[_0x2947d2(0x1df)][_0x59a00b]; _0x1638a7[_0x2947d2(0x1e0)](_0x59a00b, -0x107 * -0x23 + -0x5 * -0x653 + -0x4394);) {
                            _0x59a00b--;
                            var _0x566b4f = _0x3aafc7[_0x2947d2(0x1ce)][_0x59a00b], _0x3ae2a1 = _0x618e7c - _0x566b4f;
                            if (_0x1638a7[_0x2947d2(0x1e0)](_0x3ae2a1, 0x1320 + 0x1754 + -0x2 * 0x152b) && _0x3ae2a1 < -0x21ad + -0x37 * 0x95 + 0x41e2) {
                                _0x2623b6['x'] = _0x1638a7[_0x2947d2(0x1e1)](_0x4a3f92, _0x3aafc7[_0x2947d2(0x1cd)][_0x59a00b]) / _0x1638a7[_0x2947d2(0x1e2)](_0x3ae2a1, 0x7d * -0x35 + -0x1 * -0x15fd + -0x4 * -0x1f3), _0x2623b6['y'] = _0x1638a7[_0x2947d2(0x1e1)](_0x43f098, _0x3aafc7[_0x2947d2(0x1df)][_0x59a00b]) / _0x1638a7[_0x2947d2(0x1e3)](_0x3ae2a1, 0x7b0 * -0x4 + 0x7a * 0x30 + 0xbc8);
                                break;
                            }
                        }
                    _0x3aafc7['historyTime'] = [], _0x3aafc7[_0x2947d2(0x1cd)] = [], _0x3aafc7[_0x2947d2(0x1df)] = [], _0x13b4d9 && _0x13b4d9['onTouchEnd'] && _0x13b4d9[_0x2947d2(0x1e4)](_0x3e445b['x'], _0x3e445b['y'], _0x2623b6);
                }
            }
        }
    }
};
