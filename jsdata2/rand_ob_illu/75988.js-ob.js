const _0x4459 = ['IPreRoomUserJoined', 'RwxDH', 'Error', 'FrdBg', 'message', 'Onryz', 'RSfuw', 'run', 'yGlFG', 'srwUn', 'await', 'catch', 'createWithRoomAndUser', 'createUserAddedWithRoomIdAndUser', 'prid', 'createUserJoinWithRoomIdAndUserDiscussion', 'teamMain', 'createUserJoinWithRoomIdAndUser', 'gcCbM', 'defer', 'lqPhC', 'addMember', 'teamId', '363vbJIsW', '226nTFnci', '262367msWxiG', '421468qnOVAN', '1lDAZqq', '431568wuzQTH', '71880Qzfujg', '5cUPZZP', '22897avouGb', '91387RCjUbo', 'error-app-prevented', 'beforeAddedToRoom', 'beforeJoinRoom', 'findOneById', 'getConfig', 'allowMemberAction', 'JOIN', 'INVITE', 'findOneByRoomIdAndUserId', '_id', 'triggerEvent'];

(function (_0x3398d3, _0x29cf90) {
    const _0x5d8ebe = _0x4392;

    while (true) {
        try {
            const _0x1e4457 = parseInt(_0x5d8ebe(0x6c)) * parseInt(_0x5d8ebe(0x6d)) + parseInt(_0x5d8ebe(0x6e)) + -parseInt(_0x5d8ebe(0x6f)) * parseInt(_0x5d8ebe(0x70)) + parseInt(_0x5d8ebe(0x71)) + parseInt(_0x5d8ebe(0x72)) + -parseInt(_0x5d8ebe(0x73)) * parseInt(_0x5d8ebe(0x74)) + -parseInt(_0x5d8ebe(0x75));

            if (_0x1e4457 === _0x29cf90) break;else _0x3398d3.push(_0x3398d3.shift());
        } catch (_0x419e86) {
            _0x3398d3.push(_0x3398d3.shift());
        }
    }
})(_0x4459, 220513);
function _0x4392(_0x24ff6b, _0x593c67) {
    return _0x4392 = function (_0x251a74, _0x57f121) {
        _0x251a74 = _0x251a74 - 108;
        const _0x4a30fd = _0x4459[_0x251a74];

        return _0x4a30fd;
    }, _0x4392(_0x24ff6b, _0x593c67);
}
import { AppsEngineException } from '@rocket.chat/apps-engine/definition/exceptions';
import { Meteor } from 'meteor/meteor';
import { AppEvents, Apps } from '../../../apps/server';
import { callbacks } from '../../../callbacks';
import { Messages, Rooms, Subscriptions } from '../../../models';
import { Team } from '../../../../server/sdk';
import { RoomMemberActions, roomTypes } from '../../../utils/server';
export const addUserToRoom = function (_0x416f15, _0x552818, _0x17b6b4, _0x297d9d) {
    const _0x50f2b1 = _0x4392;
    const _0x1c6c3e = {
        'RwxDH': function (_0x4a9737, _0x4dda31) {
            return _0x4a9737 instanceof _0x4dda31;
        },
        'FrdBg': _0x50f2b1(0x76),
        'lqPhC': 'afterAddedToRoom',
        'Onryz': function (_0x5e644a, _0x47f13f) {
            return _0x5e644a === _0x47f13f;
        },
        'RSfuw': function (_0xaee21d, _0x2bba05) {
            return _0xaee21d === _0x2bba05;
        },
        'yGlFG': _0x50f2b1(0x77),
        'srwUn': _0x50f2b1(0x78),
        'gcCbM': function (_0x3b8188, _0x432afa) {
            return _0x3b8188 === _0x432afa;
        }
    };

    const _0x327c09 = new Date();

    const _0x532e51 = Rooms[_0x50f2b1(0x79)](_0x416f15);

    const _0x428d1e = roomTypes[_0x50f2b1(0x7a)](_0x532e51.t);

    if (!_0x428d1e[_0x50f2b1(0x7b)](_0x532e51, RoomMemberActions[_0x50f2b1(0x7c)]) && !_0x428d1e[_0x50f2b1(0x7b)](_0x532e51, RoomMemberActions[_0x50f2b1(0x7d)])) return;

    const _0x51521e = Subscriptions[_0x50f2b1(0x7e)](_0x416f15, _0x552818[_0x50f2b1(0x7f)]);

    if (_0x51521e) return;
    try {
        Promise.await(Apps[_0x50f2b1(0x80)](AppEvents[_0x50f2b1(0x81)], _0x532e51, _0x552818, _0x17b6b4));
    } catch (_0x3c3999) {
        if (_0x1c6c3e[_0x50f2b1(0x82)](_0x3c3999, AppsEngineException)) throw new Meteor[_0x50f2b1(0x83)](_0x1c6c3e[_0x50f2b1(0x84)], _0x3c3999[_0x50f2b1(0x85)]);
        throw _0x3c3999;
    }
    (_0x1c6c3e[_0x50f2b1(0x86)](_0x532e51.t, 'c') || _0x1c6c3e[_0x50f2b1(0x86)](_0x532e51.t, 'p') || _0x1c6c3e[_0x50f2b1(0x87)](_0x532e51.t, 'l')) && (callbacks[_0x50f2b1(0x88)](_0x1c6c3e[_0x50f2b1(0x89)], {
        'user': _0x552818,
        'inviter': _0x17b6b4
    }, _0x532e51), callbacks[_0x50f2b1(0x88)](_0x1c6c3e[_0x50f2b1(0x8a)], _0x552818, _0x532e51));
    Promise[_0x50f2b1(0x8b)](Apps.triggerEvent(AppEvents[_0x50f2b1(0x81)], _0x532e51, _0x552818, _0x17b6b4)[_0x50f2b1(0x8c)](_0x5bb481 => {
        const _0x34b4db = _0x50f2b1;

        if (_0x1c6c3e[_0x34b4db(0x82)](_0x5bb481, AppsEngineException)) throw new Meteor[_0x34b4db(0x83)](_0x1c6c3e[_0x34b4db(0x84)], _0x5bb481.message);
        throw _0x5bb481;
    })), Subscriptions[_0x50f2b1(0x8d)](_0x532e51, _0x552818, {
        'ts': _0x327c09,
        'open': true,
        'alert': true,
        'unread': 0x1,
        'userMentions': 0x1,
        'groupMentions': 0x0
    });
    if (!_0x297d9d) {
        if (_0x17b6b4) Messages[_0x50f2b1(0x8e)](_0x416f15, _0x552818, {
            'ts': _0x327c09,
            'u': {
                '_id': _0x17b6b4[_0x50f2b1(0x7f)],
                'username': _0x17b6b4.username
            }
        });else {
            if (_0x532e51[_0x50f2b1(0x8f)]) Messages[_0x50f2b1(0x90)](_0x416f15, _0x552818, { 'ts': _0x327c09 });else _0x532e51[_0x50f2b1(0x91)] ? Messages.createUserJoinTeamWithRoomIdAndUser(_0x416f15, _0x552818, { 'ts': _0x327c09 }) : Messages[_0x50f2b1(0x92)](_0x416f15, _0x552818, { 'ts': _0x327c09 });
        }
    }
    return (_0x1c6c3e[_0x50f2b1(0x93)](_0x532e51.t, 'c') || _0x1c6c3e.gcCbM(_0x532e51.t, 'p')) && Meteor[_0x50f2b1(0x94)](function () {
        const _0x431c83 = _0x50f2b1;

        callbacks[_0x431c83(0x88)](_0x1c6c3e[_0x431c83(0x95)], {
            'user': _0x552818,
            'inviter': _0x17b6b4
        }, _0x532e51), callbacks[_0x431c83(0x88)]('afterJoinRoom', _0x552818, _0x532e51), Apps.triggerEvent(AppEvents.IPostRoomUserJoined, _0x532e51, _0x552818, _0x17b6b4);
    }), _0x532e51[_0x50f2b1(0x91)] && _0x532e51.teamId && Promise[_0x50f2b1(0x8b)](Team[_0x50f2b1(0x96)](_0x17b6b4, _0x552818[_0x50f2b1(0x7f)], _0x532e51[_0x50f2b1(0x97)])), true;
};
