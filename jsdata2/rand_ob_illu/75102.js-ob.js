const _0x3b69 = ['add', 'cron', '0 * * * *', '1843485WxhTnM', '479173lVAaGo', '2UZEJZw', '23udrCrS', '13969FOqavN', '231MTmKjJ', '646ugqAZh', '9BYKZpf', '136894XTjZQv', '142766mSSZkX', '13SBorjF', '1068674bKpFaA', '_id', 'findByRoomIds', 'forEach', 'push', 'rid', 'keys', 'keuqu', 'findOneById', 'services', 'tokenpass', 'validateAccess', 'dkULq', 'Remove users from Token Channels', 'kThee'];

(function (_0x19d1c5, _0x506503) {
    const _0x418b18 = _0x3c82;

    while (true) {
        try {
            const _0x3e0140 = parseInt(_0x418b18(0x16c)) + parseInt(_0x418b18(0x16d)) * parseInt(_0x418b18(0x16e)) + -parseInt(_0x418b18(0x16f)) * parseInt(_0x418b18(0x170)) + -parseInt(_0x418b18(0x171)) * -parseInt(_0x418b18(0x172)) + parseInt(_0x418b18(0x173)) * parseInt(_0x418b18(0x174)) + -parseInt(_0x418b18(0x175)) * parseInt(_0x418b18(0x176)) + -parseInt(_0x418b18(0x177));

            if (_0x3e0140 === _0x506503) break;else _0x19d1c5.push(_0x19d1c5.shift());
        } catch (_0x589e6b) {
            _0x19d1c5.push(_0x19d1c5.shift());
        }
    }
})(_0x3b69, 937184);
import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';
import { updateUserTokenpassBalances } from './functions/updateUserTokenpassBalances';
import { Tokenpass } from './Tokenpass';
function _0x3c82(_0x3cc263, _0x1c9b7c) {
    return _0x3c82 = function (_0x120fce, _0x29502b) {
        _0x120fce = _0x120fce - 364;
        const _0x19ce0c = _0x3b69[_0x120fce];

        return _0x19ce0c;
    }, _0x3c82(_0x3cc263, _0x1c9b7c);
}
import { Rooms, Subscriptions, Users } from '../../models';
import { removeUserFromRoom } from '../../lib/server/functions/removeUserFromRoom';
function removeUsersFromTokenChannels() {
    const _0x5a6702 = _0x3c82;
    const _0x5927b9 = {
        'keuqu': function (_0x4ec5d6, _0x33eeb2, _0x79342c) {
            return _0x4ec5d6(_0x33eeb2, _0x79342c);
        }
    };
    const _0x54c6e8 = {};

    Rooms.findAllTokenChannels().forEach(_0x2e2f54 => {
        const _0x2a956b = _0x3c82;

        _0x54c6e8[_0x2e2f54[_0x2a956b(0x178)]] = _0x2e2f54.tokenpass;
    });
    const _0x363e2b = {};

    Subscriptions[_0x5a6702(0x179)](Object.keys(_0x54c6e8))[_0x5a6702(0x17a)](_0x2fdf7b => {
        const _0x4dd344 = _0x5a6702;

        !_0x363e2b[_0x2fdf7b.u[_0x4dd344(0x178)]] && (_0x363e2b[_0x2fdf7b.u[_0x4dd344(0x178)]] = []), _0x363e2b[_0x2fdf7b.u._id][_0x4dd344(0x17b)](_0x2fdf7b[_0x4dd344(0x17c)]);
    }), Object[_0x5a6702(0x17d)](_0x363e2b).forEach(_0xa5fac => {
        const _0x438a5a = _0x5a6702;
        const _0x4e88b2 = {
            'dkULq': function (_0x4cddb8, _0xbfc343, _0x4d2565) {
                const _0xbe8b2f = _0x3c82;

                return _0x5927b9[_0xbe8b2f(0x17e)](_0x4cddb8, _0xbfc343, _0x4d2565);
            }
        };

        const _0x4fa9ff = Users[_0x438a5a(0x17f)](_0xa5fac);

        if (_0x4fa9ff && _0x4fa9ff.services && _0x4fa9ff[_0x438a5a(0x180)][_0x438a5a(0x181)]) {
            const _0x4dd431 = updateUserTokenpassBalances(_0x4fa9ff);

            _0x363e2b[_0xa5fac].forEach(_0x313185 => {
                const _0x418262 = _0x438a5a;

                const _0x54b529 = Tokenpass[_0x418262(0x182)](_0x54c6e8[_0x313185], _0x4dd431);

                !_0x54b529 && _0x4e88b2[_0x418262(0x183)](removeUserFromRoom, _0x313185, _0x4fa9ff);
            });
        }
    });
}
Meteor.startup(function () {
    const _0x5c3491 = _0x3c82;
    const _0x29f7ea = {
        'kThee': function (_0x232a94) {
            return _0x232a94();
        },
        'wFboC': _0x5c3491(0x184)
    };

    Meteor.defer(function () {
        const _0x194bc7 = _0x5c3491;

        _0x29f7ea[_0x194bc7(0x185)](removeUsersFromTokenChannels), SyncedCron[_0x194bc7(0x186)]({
            'name': _0x29f7ea.wFboC,
            'schedule': _0x20ca85 => _0x20ca85[_0x194bc7(0x187)](_0x194bc7(0x188)),
            'job': removeUsersFromTokenChannels
        });
    });
});
