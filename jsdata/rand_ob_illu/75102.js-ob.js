const _0x1d32 = ['441424VZHaDm', '542SJKppj', '1177mFIuig', '1JwNjFM', '760269BokRsv', '67979WlOvhz', '55ADLKmU', 'findAllTokenChannels', '_id', 'keys', 'forEach', 'push', 'rid', 'findOneById', 'services', 'tokenpass', 'RVEdg', 'validateAccess', 'WPxHj', 'startup', 'defer', 'iygzH', 'add', 'cron', '0 * * * *', '30673JNZcgg', '290740WAiHnn', '1UvovSO', '1012201RKRaCJ'];
const _0x576801 = _0x386d;

(function (_0x474f9c, _0x3651f1) {
    const _0xb8613c = _0x386d;

    while (true) {
        try {
            const _0x10cf58 = -parseInt(_0xb8613c(0xe3)) + -parseInt(_0xb8613c(0xe4)) + -parseInt(_0xb8613c(0xe5)) * parseInt(_0xb8613c(0xe6)) + -parseInt(_0xb8613c(0xe7)) + -parseInt(_0xb8613c(0xe8)) * parseInt(_0xb8613c(0xe9)) + -parseInt(_0xb8613c(0xea)) * parseInt(_0xb8613c(0xeb)) + -parseInt(_0xb8613c(0xec)) * -parseInt(_0xb8613c(0xed));

            if (_0x10cf58 === _0x3651f1) break;else _0x474f9c.push(_0x474f9c.shift());
        } catch (_0x534f8b) {
            _0x474f9c.push(_0x474f9c.shift());
        }
    }
})(_0x1d32, 565604);
import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';
function _0x386d(_0x1ae07a, _0x5544b3) {
    return _0x386d = function (_0x5ffb6a, _0x375dcb) {
        _0x5ffb6a = _0x5ffb6a - 227;
        const _0x3e52bc = _0x1d32[_0x5ffb6a];

        return _0x3e52bc;
    }, _0x386d(_0x1ae07a, _0x5544b3);
}
import { updateUserTokenpassBalances } from './functions/updateUserTokenpassBalances';
import { Tokenpass } from './Tokenpass';
import { Rooms, Subscriptions, Users } from '../../models';
import { removeUserFromRoom } from '../../lib/server/functions/removeUserFromRoom';
function removeUsersFromTokenChannels() {
    const _0x555707 = _0x386d;
    const _0x1cf1ee = {
        'RVEdg': function (_0x111ce0, _0x17b590) {
            return _0x111ce0(_0x17b590);
        }
    };
    const _0x2ef09d = {};

    Rooms[_0x555707(0xee)]().forEach(_0x3fc04c => {
        const _0x4dae5d = _0x555707;

        _0x2ef09d[_0x3fc04c[_0x4dae5d(0xef)]] = _0x3fc04c.tokenpass;
    });
    const _0x537562 = {};

    Subscriptions.findByRoomIds(Object[_0x555707(0xf0)](_0x2ef09d))[_0x555707(0xf1)](_0x294b46 => {
        const _0x2bd527 = _0x555707;

        !_0x537562[_0x294b46.u[_0x2bd527(0xef)]] && (_0x537562[_0x294b46.u[_0x2bd527(0xef)]] = []), _0x537562[_0x294b46.u[_0x2bd527(0xef)]][_0x2bd527(0xf2)](_0x294b46[_0x2bd527(0xf3)]);
    }), Object[_0x555707(0xf0)](_0x537562)[_0x555707(0xf1)](_0x58a416 => {
        const _0x339e92 = _0x555707;
        const _0x2fc6ae = {
            'WPxHj': function (_0x26a1b3, _0x3fcee6, _0x5d731b) {
                return _0x26a1b3(_0x3fcee6, _0x5d731b);
            }
        };

        const _0x966641 = Users[_0x339e92(0xf4)](_0x58a416);

        if (_0x966641 && _0x966641[_0x339e92(0xf5)] && _0x966641[_0x339e92(0xf5)][_0x339e92(0xf6)]) {
            const _0x45a114 = _0x1cf1ee[_0x339e92(0xf7)](updateUserTokenpassBalances, _0x966641);

            _0x537562[_0x58a416][_0x339e92(0xf1)](_0x43aeb8 => {
                const _0x139a79 = _0x339e92;

                const _0x54555c = Tokenpass[_0x139a79(0xf8)](_0x2ef09d[_0x43aeb8], _0x45a114);

                !_0x54555c && _0x2fc6ae[_0x139a79(0xf9)](removeUserFromRoom, _0x43aeb8, _0x966641);
            });
        }
    });
}
Meteor[_0x576801(0xfa)](function () {
    const _0xcb62c6 = _0x576801;
    const _0x4ec01e = {
        'iygzH': function (_0x575321) {
            return _0x575321();
        },
        'mToMy': 'Remove users from Token Channels'
    };

    Meteor[_0xcb62c6(0xfb)](function () {
        const _0x2e1f61 = _0xcb62c6;

        _0x4ec01e[_0x2e1f61(0xfc)](removeUsersFromTokenChannels), SyncedCron[_0x2e1f61(0xfd)]({
            'name': _0x4ec01e.mToMy,
            'schedule': _0x4f880b => _0x4f880b[_0x2e1f61(0xfe)](_0x2e1f61(0xff)),
            'job': removeUsersFromTokenChannels
        });
    });
});
