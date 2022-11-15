var _0x11db = [
    'buujC',
    'AKcfG',
    'unshift',
    'emit',
    'apply',
    'notifyUser',
    'RocketChat.Notifications:\x20notifyUser',
    'VHbFH',
    'streamUser',
    'RocketChat.Notifications:\x20notifyUsersOfRoom',
    'ifbmk',
    'ITFnZ',
    'onLogin',
    'RocketChat.Notifications:\x20onRoom\x20',
    'unUser',
    'unAll',
    'notify',
    'removeListener',
    'krxlE',
    'streamLogged',
    'unRoom',
    '557297UEZCnr',
    '1ItUdql',
    '1229807EMPoDQ',
    '847688gopEFA',
    '1314266PDuTsj',
    '708142DVRMVP',
    '644302wLLpMz',
    '32963iKECYi',
    '67XuvhIO',
    'notify-room',
    'notify-logged',
    'RocketChat.Notifications:\x20onAll',
    '4|0|6|8|7|9|3|1|2|5|10',
    'split',
    'logged',
    'userId',
    'streamRoom',
    'ONezZ',
    'streamRoomUsers',
    'Streamer',
    'vFclj',
    'dNleF',
    'wqedk',
    'loginCb',
    'debug',
    'ZArbx',
    'OjOMG',
    'forEach',
    'FWWcI',
    'streamAll',
    'onAll',
    'log',
    'PAsEo',
    'onUser',
    'push',
    'notifyRoom',
    'RocketChat.Notifications:\x20notifyRoom'
];
var _0xd387f8 = _0x30b0;
function _0x30b0(_0x544c46, _0x5484e6) {
    return _0x30b0 = function (_0x295644, _0x1977e0) {
        _0x295644 = _0x295644 - (0x3db + 0x29e * -0xd + 0x1 * 0x1f6c);
        var _0x47755f = _0x11db[_0x295644];
        return _0x47755f;
    }, _0x30b0(_0x544c46, _0x5484e6);
}
(function (_0x12acae, _0x504874) {
    var _0x33b3ee = _0x30b0;
    while (!![]) {
        try {
            var _0x2984fd = parseInt(_0x33b3ee(0x141)) + parseInt(_0x33b3ee(0x142)) * -parseInt(_0x33b3ee(0x143)) + -parseInt(_0x33b3ee(0x144)) + -parseInt(_0x33b3ee(0x145)) + parseInt(_0x33b3ee(0x146)) + parseInt(_0x33b3ee(0x147)) + -parseInt(_0x33b3ee(0x148)) * -parseInt(_0x33b3ee(0x149));
            if (_0x2984fd === _0x504874)
                break;
            else
                _0x12acae['push'](_0x12acae['shift']());
        } catch (_0x5063fc) {
            _0x12acae['push'](_0x12acae['shift']());
        }
    }
}(_0x11db, -0xe29d5 + -0x319 * 0x5db + 0x1 * 0x2b631d));
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
class Notifications {
    constructor(..._0x5925dc) {
        var _0xdf4352 = _0x30b0, _0x2638bb = {
                'idndw': function (_0x28dc09, _0x2cae06) {
                    return _0x28dc09 !== _0x2cae06;
                },
                'ONezZ': _0xdf4352(0x14a),
                'vFclj': 'notify-room-users',
                'dNleF': _0xdf4352(0x14b),
                'JvSwI': function (_0xfcfc6, _0x3158ab) {
                    return _0xfcfc6 !== _0x3158ab;
                },
                'wqedk': _0xdf4352(0x14c),
                'OpgkS': 'notify-all',
                'vGNyb': function (_0x1386f1, _0x2508e2) {
                    return _0x1386f1 === _0x2508e2;
                }
            }, _0x4accb3 = _0xdf4352(0x14d)[_0xdf4352(0x14e)]('|'), _0x27f7e0 = 0x175a + -0x1a91 + -0x337 * -0x1;
        while (!![]) {
            switch (_0x4accb3[_0x27f7e0++]) {
            case '0':
                this[_0xdf4352(0x14f)] = _0x2638bb['idndw'](Meteor[_0xdf4352(0x150)](), null);
                continue;
            case '1':
                this[_0xdf4352(0x151)] = new Meteor['Streamer'](_0x2638bb[_0xdf4352(0x152)]);
                continue;
            case '2':
                this[_0xdf4352(0x153)] = new Meteor[(_0xdf4352(0x154))](_0x2638bb[_0xdf4352(0x155)]);
                continue;
            case '3':
                this['streamLogged'] = new Meteor[(_0xdf4352(0x154))](_0x2638bb[_0xdf4352(0x156)]);
                continue;
            case '4':
                var _0x4b9d0b = {
                    'ZArbx': function (_0x2d6b76, _0x153999) {
                        return _0x2d6b76 !== _0x153999;
                    },
                    'OjOMG': function (_0x3f0c44, _0x30706a) {
                        return _0x3f0c44 === _0x30706a;
                    },
                    'FWWcI': function (_0x44a5f1, _0x22ff48) {
                        return _0x2638bb['JvSwI'](_0x44a5f1, _0x22ff48);
                    },
                    'PAsEo': _0x2638bb[_0xdf4352(0x157)]
                };
                continue;
            case '5':
                this['streamUser'] = new Meteor[(_0xdf4352(0x154))]('notify-user');
                continue;
            case '6':
                this[_0xdf4352(0x158)] = [];
                continue;
            case '7':
                this[_0xdf4352(0x159)] = ![];
                continue;
            case '8':
                Tracker['autorun'](() => {
                    var _0x123f1e = _0xdf4352;
                    _0x4b9d0b[_0x123f1e(0x15a)](Meteor[_0x123f1e(0x150)](), null) && _0x4b9d0b[_0x123f1e(0x15b)](this['logged'], ![]) && this['loginCb'][_0x123f1e(0x15c)](_0x3f2c41 => _0x3f2c41()), this[_0x123f1e(0x14f)] = _0x4b9d0b[_0x123f1e(0x15d)](Meteor[_0x123f1e(0x150)](), null);
                });
                continue;
            case '9':
                this[_0xdf4352(0x15e)] = new Meteor['Streamer'](_0x2638bb['OpgkS']);
                continue;
            case '10':
                _0x2638bb['vGNyb'](this[_0xdf4352(0x159)], !![]) && (this[_0xdf4352(0x15f)](function () {
                    var _0x587109 = _0xdf4352;
                    return console[_0x587109(0x160)](_0x4b9d0b[_0x587109(0x161)], _0x5925dc);
                }), this[_0xdf4352(0x162)](function () {
                    var _0x394cb0 = _0xdf4352;
                    return console[_0x394cb0(0x160)](_0x4b9d0b[_0x394cb0(0x161)], _0x5925dc);
                }));
                continue;
            }
            break;
        }
    }
    ['onLogin'](_0x457418) {
        var _0x1dccde = _0x30b0, _0x398b99 = {
                'hlYPo': function (_0x2527cb) {
                    return _0x2527cb();
                }
            };
        this[_0x1dccde(0x158)][_0x1dccde(0x163)](_0x457418);
        if (this['logged'])
            return _0x398b99['hlYPo'](_0x457418);
    }
    [_0xd387f8(0x164)](_0x2778f2, _0x28adf2, ..._0xfd7b76) {
        var _0x3d64da = _0xd387f8, _0x101074 = {
                'buujC': function (_0x1e46eb, _0x489151) {
                    return _0x1e46eb === _0x489151;
                },
                'AKcfG': _0x3d64da(0x165)
            };
        return _0x101074[_0x3d64da(0x166)](this[_0x3d64da(0x159)], !![]) && console['log'](_0x101074[_0x3d64da(0x167)], [
            _0x2778f2,
            _0x28adf2,
            ..._0xfd7b76
        ]), _0xfd7b76[_0x3d64da(0x168)](_0x2778f2 + '/' + _0x28adf2), this[_0x3d64da(0x151)][_0x3d64da(0x169)][_0x3d64da(0x16a)](this[_0x3d64da(0x151)], _0xfd7b76);
    }
    [_0xd387f8(0x16b)](_0x5b756b, _0x2651fc, ..._0x3b8680) {
        var _0x235045 = _0xd387f8, _0x144580 = {
                'VHbFH': function (_0x405204, _0x214d46) {
                    return _0x405204 === _0x214d46;
                },
                'zKDYr': _0x235045(0x16c)
            };
        return _0x144580[_0x235045(0x16d)](this[_0x235045(0x159)], !![]) && console[_0x235045(0x160)](_0x144580['zKDYr'], [
            _0x5b756b,
            _0x2651fc,
            ..._0x3b8680
        ]), _0x3b8680[_0x235045(0x168)](_0x5b756b + '/' + _0x2651fc), this[_0x235045(0x16e)][_0x235045(0x169)][_0x235045(0x16a)](this[_0x235045(0x16e)], _0x3b8680);
    }
    ['notifyUsersOfRoom'](_0x49713c, _0x1b9d4e, ..._0x299244) {
        var _0x53222f = _0xd387f8, _0x137b37 = {
                'ifbmk': function (_0x495419, _0x1db0bd) {
                    return _0x495419 === _0x1db0bd;
                },
                'ITFnZ': _0x53222f(0x16f)
            };
        return _0x137b37[_0x53222f(0x170)](this[_0x53222f(0x159)], !![]) && console[_0x53222f(0x160)](_0x137b37[_0x53222f(0x171)], [
            _0x49713c,
            _0x1b9d4e,
            ..._0x299244
        ]), _0x299244['unshift'](_0x49713c + '/' + _0x1b9d4e), this[_0x53222f(0x153)][_0x53222f(0x169)][_0x53222f(0x16a)](this['streamRoomUsers'], _0x299244);
    }
    [_0xd387f8(0x15f)](_0xab270e, _0x41156b) {
        return this['streamAll']['on'](_0xab270e, _0x41156b);
    }
    ['onLogged'](_0x5d7b5a, _0x459dd8) {
        var _0x456633 = _0xd387f8;
        return this[_0x456633(0x172)](() => this['streamLogged']['on'](_0x5d7b5a, _0x459dd8));
    }
    ['onRoom'](_0x30852e, _0x3dbd33, _0x30d493) {
        var _0x1316f1 = _0xd387f8;
        return this[_0x1316f1(0x159)] === !![] && this[_0x1316f1(0x151)]['on'](_0x30852e, function () {
            var _0x2e5558 = _0x1316f1;
            return console['log'](_0x2e5558(0x173) + _0x30852e, [
                _0x30852e,
                _0x3dbd33,
                _0x30d493
            ]);
        }), this['streamRoom']['on'](_0x30852e + '/' + _0x3dbd33, _0x30d493);
    }
    async [_0xd387f8(0x162)](_0x36fd0e, _0x5e9414) {
        var _0x3e0ef4 = _0xd387f8;
        return await this[_0x3e0ef4(0x16e)]['on'](Meteor[_0x3e0ef4(0x150)]() + '/' + _0x36fd0e, _0x5e9414), () => this[_0x3e0ef4(0x174)](_0x36fd0e, _0x5e9414);
    }
    [_0xd387f8(0x175)](_0x18f569) {
        var _0x1b8360 = _0xd387f8, _0xf3a04 = { 'krxlE': _0x1b8360(0x176) };
        return this[_0x1b8360(0x15e)][_0x1b8360(0x177)](_0xf3a04[_0x1b8360(0x178)], _0x18f569);
    }
    ['unLogged'](_0x13a778) {
        var _0x465600 = _0xd387f8, _0x1ed014 = { 'DOGNe': _0x465600(0x176) };
        return this[_0x465600(0x179)][_0x465600(0x177)](_0x1ed014['DOGNe'], _0x13a778);
    }
    [_0xd387f8(0x17a)](_0x136a46, _0x357866, _0x2243f4) {
        var _0x3e492d = _0xd387f8;
        return this[_0x3e492d(0x151)][_0x3e492d(0x177)](_0x136a46 + '/' + _0x357866, _0x2243f4);
    }
    [_0xd387f8(0x174)](_0x7489a3, _0x55aa14) {
        var _0x20d2f4 = _0xd387f8;
        return this[_0x20d2f4(0x16e)][_0x20d2f4(0x177)](Meteor[_0x20d2f4(0x150)]() + '/' + _0x7489a3, _0x55aa14);
    }
}
export default new Notifications();
