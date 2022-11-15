const _0x488e = [
    '144612tyXfWA',
    '501CWcFtW',
    '233DuRxje',
    'findAllTokenChannels',
    'forEach',
    'tokenpass',
    'findByRoomIds',
    'keys',
    '_id',
    'rid',
    'findOneById',
    'services',
    'validateAccess',
    'startup',
    'defer',
    'add',
    'Remove\x20users\x20from\x20Token\x20Channels',
    '157676umgEHQ',
    '2885SGPwXt',
    '37IBuHDC',
    '167304jLqNvN',
    '257015xabCiR',
    '4464uDKoEk',
    '45OezacY'
];
function _0x508c(_0xd0e8bd, _0x16685a) {
    return _0x508c = function (_0x488e90, _0x508c54) {
        _0x488e90 = _0x488e90 - 0x1ba;
        let _0x142d44 = _0x488e[_0x488e90];
        return _0x142d44;
    }, _0x508c(_0xd0e8bd, _0x16685a);
}
const _0x5bb4cb = _0x508c;
(function (_0x362288, _0x37fd77) {
    const _0x5cc21d = _0x508c;
    while (!![]) {
        try {
            const _0x2cf377 = parseInt(_0x5cc21d(0x1ba)) + parseInt(_0x5cc21d(0x1bb)) * parseInt(_0x5cc21d(0x1bc)) + parseInt(_0x5cc21d(0x1bd)) + -parseInt(_0x5cc21d(0x1be)) + -parseInt(_0x5cc21d(0x1bf)) * parseInt(_0x5cc21d(0x1c0)) + parseInt(_0x5cc21d(0x1c1)) + -parseInt(_0x5cc21d(0x1c2)) * -parseInt(_0x5cc21d(0x1c3));
            if (_0x2cf377 === _0x37fd77)
                break;
            else
                _0x362288['push'](_0x362288['shift']());
        } catch (_0x54ff7c) {
            _0x362288['push'](_0x362288['shift']());
        }
    }
}(_0x488e, 0x396a7));
import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';
import { updateUserTokenpassBalances } from './functions/updateUserTokenpassBalances';
import { Tokenpass } from './Tokenpass';
import {
    Rooms,
    Subscriptions,
    Users
} from '../../models';
import { removeUserFromRoom } from '../../lib/server/functions/removeUserFromRoom';
function removeUsersFromTokenChannels() {
    const _0x3b0141 = _0x508c, _0x456525 = {};
    Rooms[_0x3b0141(0x1c4)]()[_0x3b0141(0x1c5)](_0x2ba059 => {
        const _0x16e80d = _0x3b0141;
        _0x456525[_0x2ba059['_id']] = _0x2ba059[_0x16e80d(0x1c6)];
    });
    const _0x4aa9f4 = {};
    Subscriptions[_0x3b0141(0x1c7)](Object[_0x3b0141(0x1c8)](_0x456525))[_0x3b0141(0x1c5)](_0xa240f6 => {
        const _0x132285 = _0x3b0141;
        !_0x4aa9f4[_0xa240f6['u'][_0x132285(0x1c9)]] && (_0x4aa9f4[_0xa240f6['u'][_0x132285(0x1c9)]] = []), _0x4aa9f4[_0xa240f6['u'][_0x132285(0x1c9)]]['push'](_0xa240f6[_0x132285(0x1ca)]);
    }), Object[_0x3b0141(0x1c8)](_0x4aa9f4)[_0x3b0141(0x1c5)](_0x2df944 => {
        const _0x58ae31 = _0x3b0141, _0x224b35 = Users[_0x58ae31(0x1cb)](_0x2df944);
        if (_0x224b35 && _0x224b35[_0x58ae31(0x1cc)] && _0x224b35[_0x58ae31(0x1cc)][_0x58ae31(0x1c6)]) {
            const _0x5d056b = updateUserTokenpassBalances(_0x224b35);
            _0x4aa9f4[_0x2df944]['forEach'](_0x36aeb5 => {
                const _0x262b09 = _0x58ae31, _0x2bf5b2 = Tokenpass[_0x262b09(0x1cd)](_0x456525[_0x36aeb5], _0x5d056b);
                !_0x2bf5b2 && removeUserFromRoom(_0x36aeb5, _0x224b35);
            });
        }
    });
}
Meteor[_0x5bb4cb(0x1ce)](function () {
    const _0x5732f8 = _0x5bb4cb;
    Meteor[_0x5732f8(0x1cf)](function () {
        const _0x4389dc = _0x5732f8;
        removeUsersFromTokenChannels(), SyncedCron[_0x4389dc(0x1d0)]({
            'name': _0x4389dc(0x1d1),
            'schedule': _0x1a119c => _0x1a119c['cron']('0\x20*\x20*\x20*\x20*'),
            'job': removeUsersFromTokenChannels
        });
    });
});
