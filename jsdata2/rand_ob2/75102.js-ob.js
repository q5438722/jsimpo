const _0x578d = [
    '557959YiUzcl',
    'forEach',
    '_id',
    'tokenpass',
    'findByRoomIds',
    'keys',
    'push',
    'rid',
    'findOneById',
    'services',
    'validateAccess',
    'startup',
    'defer',
    'add',
    'cron',
    '0\x20*\x20*\x20*\x20*',
    '641904xHGmrr',
    '484416ixRRsK',
    '3GEPBXi',
    '84806MBysOk',
    '65350pdkdPQ',
    '1lCZoqH',
    '104844SgjFew',
    '314898qkKYtI',
    '1tIoBXo'
];
const _0x3efe71 = _0x58b5;
(function (_0x26c444, _0x27bbbd) {
    const _0x523e75 = _0x58b5;
    while (!![]) {
        try {
            const _0x397610 = -parseInt(_0x523e75(0x85)) + parseInt(_0x523e75(0x86)) + -parseInt(_0x523e75(0x87)) * parseInt(_0x523e75(0x88)) + parseInt(_0x523e75(0x89)) * -parseInt(_0x523e75(0x8a)) + parseInt(_0x523e75(0x8b)) + parseInt(_0x523e75(0x8c)) + parseInt(_0x523e75(0x8d)) * parseInt(_0x523e75(0x8e));
            if (_0x397610 === _0x27bbbd)
                break;
            else
                _0x26c444['push'](_0x26c444['shift']());
        } catch (_0x44b5bd) {
            _0x26c444['push'](_0x26c444['shift']());
        }
    }
}(_0x578d, 0x7a2dd));
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
function _0x58b5(_0x3e82ef, _0x3d5a0e) {
    return _0x58b5 = function (_0x578d79, _0x58b5b8) {
        _0x578d79 = _0x578d79 - 0x85;
        let _0x1b385a = _0x578d[_0x578d79];
        return _0x1b385a;
    }, _0x58b5(_0x3e82ef, _0x3d5a0e);
}
function removeUsersFromTokenChannels() {
    const _0x27c001 = _0x58b5, _0x124c89 = {};
    Rooms['findAllTokenChannels']()[_0x27c001(0x8f)](_0x54133a => {
        const _0x2dab28 = _0x27c001;
        _0x124c89[_0x54133a[_0x2dab28(0x90)]] = _0x54133a[_0x2dab28(0x91)];
    });
    const _0x113f85 = {};
    Subscriptions[_0x27c001(0x92)](Object[_0x27c001(0x93)](_0x124c89))['forEach'](_0x381c1f => {
        const _0x58b3bb = _0x27c001;
        !_0x113f85[_0x381c1f['u'][_0x58b3bb(0x90)]] && (_0x113f85[_0x381c1f['u'][_0x58b3bb(0x90)]] = []), _0x113f85[_0x381c1f['u'][_0x58b3bb(0x90)]][_0x58b3bb(0x94)](_0x381c1f[_0x58b3bb(0x95)]);
    }), Object['keys'](_0x113f85)['forEach'](_0x5b4fd3 => {
        const _0x3fda20 = _0x27c001, _0x519915 = Users[_0x3fda20(0x96)](_0x5b4fd3);
        if (_0x519915 && _0x519915[_0x3fda20(0x97)] && _0x519915[_0x3fda20(0x97)][_0x3fda20(0x91)]) {
            const _0x1ae465 = updateUserTokenpassBalances(_0x519915);
            _0x113f85[_0x5b4fd3][_0x3fda20(0x8f)](_0x35bd40 => {
                const _0x6331fe = _0x3fda20, _0x36dd8d = Tokenpass[_0x6331fe(0x98)](_0x124c89[_0x35bd40], _0x1ae465);
                !_0x36dd8d && removeUserFromRoom(_0x35bd40, _0x519915);
            });
        }
    });
}
Meteor[_0x3efe71(0x99)](function () {
    const _0x211630 = _0x3efe71;
    Meteor[_0x211630(0x9a)](function () {
        const _0x599189 = _0x211630;
        removeUsersFromTokenChannels(), SyncedCron[_0x599189(0x9b)]({
            'name': 'Remove\x20users\x20from\x20Token\x20Channels',
            'schedule': _0x47e111 => _0x47e111[_0x599189(0x9c)](_0x599189(0x9d)),
            'job': removeUsersFromTokenChannels
        });
    });
});
