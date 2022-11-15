const _0x5828 = [
    '844533FIUOUq',
    '38088XbMusF',
    '12risKkI',
    '523204IbxaAi',
    '1462213Uyahmm',
    '37923rGdPuH',
    '10ViIFyj',
    '292PipwiQ',
    '4673wwoeSv',
    '51473GEZDiY',
    '116mqpSyj',
    'findOneById',
    'getConfig',
    'allowMemberAction',
    'JOIN',
    'INVITE',
    'findOneByRoomIdAndUserId',
    '_id',
    'await',
    'triggerEvent',
    'IPreRoomUserJoined',
    'error-app-prevented',
    'message',
    'run',
    'beforeJoinRoom',
    'catch',
    'Error',
    'createWithRoomAndUser',
    'createUserAddedWithRoomIdAndUser',
    'username',
    'prid',
    'createUserJoinWithRoomIdAndUserDiscussion',
    'teamMain',
    'createUserJoinWithRoomIdAndUser',
    'defer',
    'afterJoinRoom',
    'IPostRoomUserJoined',
    'teamId',
    'addMember',
    '2EAbazZ'
];
(function (_0x128fbc, _0xb30ac5) {
    const _0x313c24 = _0xac78;
    while (!![]) {
        try {
            const _0x273f96 = parseInt(_0x313c24(0xbd)) * -parseInt(_0x313c24(0xbe)) + parseInt(_0x313c24(0xbf)) * -parseInt(_0x313c24(0xc0)) + -parseInt(_0x313c24(0xc1)) + -parseInt(_0x313c24(0xc2)) + parseInt(_0x313c24(0xc3)) * parseInt(_0x313c24(0xc4)) + parseInt(_0x313c24(0xc5)) * -parseInt(_0x313c24(0xc6)) + parseInt(_0x313c24(0xc7)) * parseInt(_0x313c24(0xc8));
            if (_0x273f96 === _0xb30ac5)
                break;
            else
                _0x128fbc['push'](_0x128fbc['shift']());
        } catch (_0x273085) {
            _0x128fbc['push'](_0x128fbc['shift']());
        }
    }
}(_0x5828, 0xd081b));
import { AppsEngineException } from '@rocket.chat/apps-engine/definition/exceptions';
import { Meteor } from 'meteor/meteor';
import {
    AppEvents,
    Apps
} from '../../../apps/server';
import { callbacks } from '../../../callbacks';
import {
    Messages,
    Rooms,
    Subscriptions
} from '../../../models';
import { Team } from '../../../../server/sdk';
import {
    RoomMemberActions,
    roomTypes
} from '../../../utils/server';
function _0xac78(_0xcf59d7, _0x27df8b) {
    return _0xac78 = function (_0x58281, _0xac7838) {
        _0x58281 = _0x58281 - 0xbd;
        let _0x43cd80 = _0x5828[_0x58281];
        return _0x43cd80;
    }, _0xac78(_0xcf59d7, _0x27df8b);
}
export const addUserToRoom = function (_0x3492fe, _0x3a61b0, _0x25e6b3, _0x38d7e4) {
    const _0x191495 = _0xac78, _0x185b4d = new Date(), _0x26dfa5 = Rooms[_0x191495(0xc9)](_0x3492fe), _0x337fe9 = roomTypes[_0x191495(0xca)](_0x26dfa5['t']);
    if (!_0x337fe9[_0x191495(0xcb)](_0x26dfa5, RoomMemberActions[_0x191495(0xcc)]) && !_0x337fe9[_0x191495(0xcb)](_0x26dfa5, RoomMemberActions[_0x191495(0xcd)]))
        return;
    const _0x1063e6 = Subscriptions[_0x191495(0xce)](_0x3492fe, _0x3a61b0[_0x191495(0xcf)]);
    if (_0x1063e6)
        return;
    try {
        Promise[_0x191495(0xd0)](Apps[_0x191495(0xd1)](AppEvents[_0x191495(0xd2)], _0x26dfa5, _0x3a61b0, _0x25e6b3));
    } catch (_0x426001) {
        if (_0x426001 instanceof AppsEngineException)
            throw new Meteor['Error'](_0x191495(0xd3), _0x426001[_0x191495(0xd4)]);
        throw _0x426001;
    }
    (_0x26dfa5['t'] === 'c' || _0x26dfa5['t'] === 'p' || _0x26dfa5['t'] === 'l') && (callbacks[_0x191495(0xd5)]('beforeAddedToRoom', {
        'user': _0x3a61b0,
        'inviter': _0x25e6b3
    }, _0x26dfa5), callbacks[_0x191495(0xd5)](_0x191495(0xd6), _0x3a61b0, _0x26dfa5));
    Promise[_0x191495(0xd0)](Apps[_0x191495(0xd1)](AppEvents[_0x191495(0xd2)], _0x26dfa5, _0x3a61b0, _0x25e6b3)[_0x191495(0xd7)](_0x41b007 => {
        const _0x2b633d = _0x191495;
        if (_0x41b007 instanceof AppsEngineException)
            throw new Meteor[(_0x2b633d(0xd8))](_0x2b633d(0xd3), _0x41b007[_0x2b633d(0xd4)]);
        throw _0x41b007;
    })), Subscriptions[_0x191495(0xd9)](_0x26dfa5, _0x3a61b0, {
        'ts': _0x185b4d,
        'open': !![],
        'alert': !![],
        'unread': 0x1,
        'userMentions': 0x1,
        'groupMentions': 0x0
    });
    if (!_0x38d7e4) {
        if (_0x25e6b3)
            Messages[_0x191495(0xda)](_0x3492fe, _0x3a61b0, {
                'ts': _0x185b4d,
                'u': {
                    '_id': _0x25e6b3[_0x191495(0xcf)],
                    'username': _0x25e6b3[_0x191495(0xdb)]
                }
            });
        else {
            if (_0x26dfa5[_0x191495(0xdc)])
                Messages[_0x191495(0xdd)](_0x3492fe, _0x3a61b0, { 'ts': _0x185b4d });
            else
                _0x26dfa5[_0x191495(0xde)] ? Messages['createUserJoinTeamWithRoomIdAndUser'](_0x3492fe, _0x3a61b0, { 'ts': _0x185b4d }) : Messages[_0x191495(0xdf)](_0x3492fe, _0x3a61b0, { 'ts': _0x185b4d });
        }
    }
    return (_0x26dfa5['t'] === 'c' || _0x26dfa5['t'] === 'p') && Meteor[_0x191495(0xe0)](function () {
        const _0x18e847 = _0x191495;
        callbacks['run']('afterAddedToRoom', {
            'user': _0x3a61b0,
            'inviter': _0x25e6b3
        }, _0x26dfa5), callbacks[_0x18e847(0xd5)](_0x18e847(0xe1), _0x3a61b0, _0x26dfa5), Apps[_0x18e847(0xd1)](AppEvents[_0x18e847(0xe2)], _0x26dfa5, _0x3a61b0, _0x25e6b3);
    }), _0x26dfa5[_0x191495(0xde)] && _0x26dfa5[_0x191495(0xe3)] && Promise[_0x191495(0xd0)](Team[_0x191495(0xe4)](_0x25e6b3, _0x3a61b0[_0x191495(0xcf)], _0x26dfa5['teamId'])), !![];
};
