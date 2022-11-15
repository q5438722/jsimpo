var _0x53a4 = [
    'logged',
    'userId',
    'loginCb',
    'autorun',
    'forEach',
    'debug',
    'streamAll',
    'Streamer',
    'notify-logged',
    'notify-room',
    'notify-room-users',
    'onAll',
    'log',
    'RocketChat.Notifications:\x20onAll',
    'onLogin',
    'push',
    'notifyRoom',
    'RocketChat.Notifications:\x20notifyRoom',
    'streamRoom',
    'emit',
    'apply',
    'notifyUser',
    'RocketChat.Notifications:\x20notifyUser',
    'unshift',
    'streamUser',
    'RocketChat.Notifications:\x20notifyUsersOfRoom',
    'streamRoomUsers',
    'onLogged',
    'onUser',
    'unUser',
    'unAll',
    'removeListener',
    'notify',
    'unLogged',
    '167318MDQYMc',
    '70799ugqMPh',
    '1KeKcsz',
    '210801XEFMcZ',
    '3fwOYTj',
    '11546kieERD',
    '2xsUtzM',
    '94198RSYadt',
    '134426uYWRkV',
    '107969JyVzfe',
    '1WgYVTQ'
];
var _0x539fec = _0x13d7;
(function (_0x27d8a4, _0x4be470) {
    var _0x2d5e0a = _0x13d7;
    while (!![]) {
        try {
            var _0x59c03e = parseInt(_0x2d5e0a(0xd7)) + -parseInt(_0x2d5e0a(0xd8)) + -parseInt(_0x2d5e0a(0xd9)) * -parseInt(_0x2d5e0a(0xda)) + parseInt(_0x2d5e0a(0xdb)) * -parseInt(_0x2d5e0a(0xdc)) + -parseInt(_0x2d5e0a(0xdd)) * parseInt(_0x2d5e0a(0xde)) + parseInt(_0x2d5e0a(0xdf)) + parseInt(_0x2d5e0a(0xe0)) * -parseInt(_0x2d5e0a(0xe1));
            if (_0x59c03e === _0x4be470)
                break;
            else
                _0x27d8a4['push'](_0x27d8a4['shift']());
        } catch (_0x26253b) {
            _0x27d8a4['push'](_0x27d8a4['shift']());
        }
    }
}(_0x53a4, 0x1b097));
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
function _0x13d7(_0xe06632, _0x55401a) {
    return _0x13d7 = function (_0x53a45f, _0x13d752) {
        _0x53a45f = _0x53a45f - 0xd7;
        var _0x5c0077 = _0x53a4[_0x53a45f];
        return _0x5c0077;
    }, _0x13d7(_0xe06632, _0x55401a);
}
class Notifications {
    constructor(..._0x5a94d5) {
        var _0x488272 = _0x13d7;
        this[_0x488272(0xe2)] = Meteor[_0x488272(0xe3)]() !== null, this[_0x488272(0xe4)] = [], Tracker[_0x488272(0xe5)](() => {
            var _0x57a025 = _0x488272;
            Meteor[_0x57a025(0xe3)]() !== null && this[_0x57a025(0xe2)] === ![] && this['loginCb'][_0x57a025(0xe6)](_0x23bca4 => _0x23bca4()), this[_0x57a025(0xe2)] = Meteor[_0x57a025(0xe3)]() !== null;
        }), this[_0x488272(0xe7)] = ![], this[_0x488272(0xe8)] = new Meteor['Streamer']('notify-all'), this['streamLogged'] = new Meteor[(_0x488272(0xe9))](_0x488272(0xea)), this['streamRoom'] = new Meteor[(_0x488272(0xe9))](_0x488272(0xeb)), this['streamRoomUsers'] = new Meteor[(_0x488272(0xe9))](_0x488272(0xec)), this['streamUser'] = new Meteor['Streamer']('notify-user'), this[_0x488272(0xe7)] === !![] && (this[_0x488272(0xed)](function () {
            var _0xff44eb = _0x488272;
            return console[_0xff44eb(0xee)]('RocketChat.Notifications:\x20onAll', _0x5a94d5);
        }), this['onUser'](function () {
            var _0x3d14bc = _0x488272;
            return console[_0x3d14bc(0xee)](_0x3d14bc(0xef), _0x5a94d5);
        }));
    }
    [_0x539fec(0xf0)](_0x5e791a) {
        var _0x5a89c8 = _0x539fec;
        this['loginCb'][_0x5a89c8(0xf1)](_0x5e791a);
        if (this[_0x5a89c8(0xe2)])
            return _0x5e791a();
    }
    [_0x539fec(0xf2)](_0x4e3210, _0x4393b1, ..._0x4058cc) {
        var _0x3c41d2 = _0x539fec;
        return this['debug'] === !![] && console[_0x3c41d2(0xee)](_0x3c41d2(0xf3), [
            _0x4e3210,
            _0x4393b1,
            ..._0x4058cc
        ]), _0x4058cc['unshift'](_0x4e3210 + '/' + _0x4393b1), this[_0x3c41d2(0xf4)][_0x3c41d2(0xf5)][_0x3c41d2(0xf6)](this[_0x3c41d2(0xf4)], _0x4058cc);
    }
    [_0x539fec(0xf7)](_0x5d5c33, _0x2325b6, ..._0x270fe5) {
        var _0x47b00e = _0x539fec;
        return this[_0x47b00e(0xe7)] === !![] && console[_0x47b00e(0xee)](_0x47b00e(0xf8), [
            _0x5d5c33,
            _0x2325b6,
            ..._0x270fe5
        ]), _0x270fe5[_0x47b00e(0xf9)](_0x5d5c33 + '/' + _0x2325b6), this[_0x47b00e(0xfa)][_0x47b00e(0xf5)][_0x47b00e(0xf6)](this[_0x47b00e(0xfa)], _0x270fe5);
    }
    ['notifyUsersOfRoom'](_0x461cf7, _0x4c8229, ..._0x480c81) {
        var _0x38f54b = _0x539fec;
        return this['debug'] === !![] && console[_0x38f54b(0xee)](_0x38f54b(0xfb), [
            _0x461cf7,
            _0x4c8229,
            ..._0x480c81
        ]), _0x480c81[_0x38f54b(0xf9)](_0x461cf7 + '/' + _0x4c8229), this[_0x38f54b(0xfc)][_0x38f54b(0xf5)][_0x38f54b(0xf6)](this[_0x38f54b(0xfc)], _0x480c81);
    }
    [_0x539fec(0xed)](_0x5a1fe3, _0x1c4432) {
        var _0x57a7ec = _0x539fec;
        return this[_0x57a7ec(0xe8)]['on'](_0x5a1fe3, _0x1c4432);
    }
    [_0x539fec(0xfd)](_0x22baf0, _0x4d11a8) {
        var _0x4f84d9 = _0x539fec;
        return this[_0x4f84d9(0xf0)](() => this['streamLogged']['on'](_0x22baf0, _0x4d11a8));
    }
    ['onRoom'](_0xb0960e, _0x2fdf96, _0x2d01d6) {
        var _0x44f3c7 = _0x539fec;
        return this[_0x44f3c7(0xe7)] === !![] && this[_0x44f3c7(0xf4)]['on'](_0xb0960e, function () {
            return console['log']('RocketChat.Notifications:\x20onRoom\x20' + _0xb0960e, [
                _0xb0960e,
                _0x2fdf96,
                _0x2d01d6
            ]);
        }), this[_0x44f3c7(0xf4)]['on'](_0xb0960e + '/' + _0x2fdf96, _0x2d01d6);
    }
    async [_0x539fec(0xfe)](_0x2be589, _0x4ca34a) {
        var _0x5e4891 = _0x539fec;
        return await this[_0x5e4891(0xfa)]['on'](Meteor[_0x5e4891(0xe3)]() + '/' + _0x2be589, _0x4ca34a), () => this[_0x5e4891(0xff)](_0x2be589, _0x4ca34a);
    }
    [_0x539fec(0x100)](_0x3b87a9) {
        var _0x5a4c94 = _0x539fec;
        return this[_0x5a4c94(0xe8)][_0x5a4c94(0x101)](_0x5a4c94(0x102), _0x3b87a9);
    }
    [_0x539fec(0x103)](_0x5a8178) {
        var _0x24cbb8 = _0x539fec;
        return this['streamLogged'][_0x24cbb8(0x101)](_0x24cbb8(0x102), _0x5a8178);
    }
    ['unRoom'](_0x33ab13, _0x5c5cf5, _0x459367) {
        var _0x5826ee = _0x539fec;
        return this[_0x5826ee(0xf4)][_0x5826ee(0x101)](_0x33ab13 + '/' + _0x5c5cf5, _0x459367);
    }
    ['unUser'](_0x2ec7f2, _0x3430a5) {
        var _0x2c245e = _0x539fec;
        return this[_0x2c245e(0xfa)]['removeListener'](Meteor[_0x2c245e(0xe3)]() + '/' + _0x2ec7f2, _0x3430a5);
    }
}
export default new Notifications();
