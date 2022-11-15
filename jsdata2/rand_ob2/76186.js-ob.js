const _0x4d9c = [
    'moderator',
    'add-user-to-any-p-room',
    'api-bypass-rate-limit',
    'app',
    'archive-room',
    'assign-roles',
    'ban-user',
    'bulk-register-user',
    'change-livechat-room-visitor',
    'livechat-agent',
    'create-c',
    'user',
    'bot',
    'create-p',
    'create-personal-access-tokens',
    'clean-channel-history',
    'delete-c',
    'owner',
    'delete-d',
    'delete-message',
    'delete-own-message',
    'delete-user',
    'edit-other-user-active-status',
    'edit-other-user-info',
    'edit-other-user-password',
    'edit-other-user-e2ee',
    'edit-other-user-totp',
    'edit-privileged-setting',
    'edit-room',
    'edit-room-avatar',
    'edit-room-retention-policy',
    'force-delete-message',
    'join-without-join-code',
    'leave-c',
    'anonymous',
    'leave-p',
    'logout-other-user',
    'manage-assets',
    'manage-email-inbox',
    'manage-emoji',
    'manage-user-status',
    'manage-outgoing-integrations',
    'manage-incoming-integrations',
    'manage-own-outgoing-integrations',
    'manage-own-incoming-integrations',
    'manage-oauth-apps',
    'manage-selected-settings',
    'mention-all',
    'mute-user',
    'remove-user',
    'run-import',
    'set-moderator',
    'set-owner',
    'send-many-messages',
    'unarchive-room',
    'view-c-room',
    'user-generate-access-token',
    'view-d-room',
    'view-full-other-user-info',
    'view-history',
    'view-joined-room',
    'guest',
    'view-p-room',
    'view-privileged-setting',
    'view-statistics',
    'view-user-administration',
    'preview-c-room',
    'view-broadcast-member-list',
    'create-invite-links',
    'livechat-monitor',
    'view-livechat-manager',
    'livechat-manager',
    'edit-omnichannel-contact',
    'view-livechat-rooms',
    'on-hold-livechat-room',
    'on-hold-others-livechat-room',
    'remove-closed-livechat-rooms',
    'view-livechat-analytics',
    'view-livechat-queue',
    'manage-livechat-managers',
    'manage-livechat-agents',
    'manage-livechat-departments',
    'add-livechat-department-agents',
    'view-livechat-real-time-monitoring',
    'view-livechat-triggers',
    'view-livechat-customfields',
    'view-livechat-installation',
    'view-livechat-appearance',
    'view-livechat-webhooks',
    'view-livechat-facebook',
    'view-livechat-business-hours',
    'view-livechat-room-closed-same-department',
    'edit-livechat-room-customfields',
    'send-omnichannel-chat-transcript',
    'mail-messages',
    'toggle-room-e2e-encryption',
    'create-team',
    'delete-team',
    'convert-team',
    'add-team-member',
    'edit-team-member',
    'add-team-channel',
    'edit-team-channel',
    'remove-team-channel',
    'view-all-team-channels',
    'remove-closed-livechat-room',
    'remove-livechat-department',
    'create',
    '_id',
    'roles',
    'Admin',
    'Subscriptions',
    'Moderator',
    'leader',
    'Leader',
    'Owner',
    'Users',
    'Livechat\x20Agent',
    'description',
    'SETTINGS_LEVEL',
    'settingId',
    'fetch',
    'forEach',
    'group',
    'section',
    'sorter',
    'groupPermissionId',
    'sectionPermissionId',
    'findOne',
    'E11000',
    'upsert',
    'findNotHidden',
    'hasOwnProperty',
    'remove',
    'findOneById',
    'hidden',
    'onload',
    '225826bQJMiu',
    '791PGAKQR',
    '125TmgSPI',
    '243744BtUsrh',
    '7144FtGFwV',
    '1OsfLum',
    '166091GkGwfd',
    '1cmYjuq',
    '116519oBaieV',
    '10942tgNPiM',
    '2EYsiTk',
    'admin',
    'access-setting-permissions',
    'add-user-to-joined-room'
];
function _0x4034(_0x18dfc8, _0x1340b1) {
    return _0x4034 = function (_0x4d9cac, _0x4034ee) {
        _0x4d9cac = _0x4d9cac - 0xea;
        let _0x268cfa = _0x4d9c[_0x4d9cac];
        return _0x268cfa;
    }, _0x4034(_0x18dfc8, _0x1340b1);
}
(function (_0x34a164, _0x291a48) {
    const _0x19a418 = _0x4034;
    while (!![]) {
        try {
            const _0x2c2120 = parseInt(_0x19a418(0xea)) + -parseInt(_0x19a418(0xeb)) * parseInt(_0x19a418(0xec)) + -parseInt(_0x19a418(0xed)) + parseInt(_0x19a418(0xee)) + parseInt(_0x19a418(0xef)) * parseInt(_0x19a418(0xf0)) + parseInt(_0x19a418(0xf1)) * parseInt(_0x19a418(0xf2)) + parseInt(_0x19a418(0xf3)) * -parseInt(_0x19a418(0xf4));
            if (_0x2c2120 === _0x291a48)
                break;
            else
                _0x34a164['push'](_0x34a164['shift']());
        } catch (_0x3d3659) {
            _0x34a164['push'](_0x34a164['shift']());
        }
    }
}(_0x4d9c, 0x24e25));
import { Meteor } from 'meteor/meteor';
import {
    Roles,
    Permissions,
    Settings
} from '../../models/server';
import { settings } from '../../settings/server';
import {
    getSettingPermissionId,
    CONSTANTS
} from '../lib';
Meteor['startup'](function () {
    const _0x5cbbfd = _0x4034, _0x2d7e8a = [
            {
                '_id': 'access-permissions',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0xf6),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': 'add-oauth-service',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0xf7),
                'roles': [
                    'admin',
                    'owner',
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': 'add-user-to-any-c-room',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0xf9),
                'roles': []
            },
            {
                '_id': _0x5cbbfd(0xfa),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'bot',
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0xfc),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner'
                ]
            },
            {
                '_id': 'assign-admin-role',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0xfd),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0xfe),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0xff),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x100),
                'roles': [
                    'admin',
                    'livechat-manager',
                    _0x5cbbfd(0x101)
                ]
            },
            {
                '_id': _0x5cbbfd(0x102),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'user',
                    'bot',
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': 'create-d',
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0x105),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0x106),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103)
                ]
            },
            {
                '_id': 'create-user',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x107),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x108),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': _0x5cbbfd(0x10a),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x10b),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x10c),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'user'
                ]
            },
            {
                '_id': 'delete-p',
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner'
                ]
            },
            {
                '_id': _0x5cbbfd(0x10d),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': 'edit-message',
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    'moderator'
                ]
            },
            {
                '_id': _0x5cbbfd(0x10e),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x10f),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x110),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': 'edit-other-user-avatar',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x111),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x112),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x113),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x114),
                'roles': [
                    'admin',
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x115),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x116),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x117),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': _0x5cbbfd(0x118),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x104),
                    'app'
                ]
            },
            {
                '_id': _0x5cbbfd(0x119),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0x11a),
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0x11b),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x104),
                    'anonymous',
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0x11c),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x11d),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x11e),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x11f),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x120),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x121),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x122),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x123),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x124),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x125),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x126),
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x127),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8),
                    'user'
                ]
            },
            {
                '_id': 'mention-here',
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    'moderator',
                    'user'
                ]
            },
            {
                '_id': _0x5cbbfd(0x128),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    'moderator'
                ]
            },
            {
                '_id': _0x5cbbfd(0x129),
                'roles': [
                    'admin',
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x12a),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': 'run-migration',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x12b),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': _0x5cbbfd(0x12c),
                'roles': [
                    'admin',
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': _0x5cbbfd(0x12d),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'bot',
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': 'set-leader',
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner'
                ]
            },
            {
                '_id': _0x5cbbfd(0x12e),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x12f),
                'roles': [
                    'admin',
                    'user',
                    'bot',
                    _0x5cbbfd(0xfb),
                    _0x5cbbfd(0x11a)
                ]
            },
            {
                '_id': _0x5cbbfd(0x130),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x131),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0xfb),
                    'guest'
                ]
            },
            {
                '_id': _0x5cbbfd(0x132),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x133),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'user',
                    _0x5cbbfd(0x11a)
                ]
            },
            {
                '_id': _0x5cbbfd(0x134),
                'roles': [
                    _0x5cbbfd(0x135),
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0xfb),
                    'anonymous'
                ]
            },
            {
                '_id': 'view-join-code',
                'roles': ['admin']
            },
            {
                '_id': 'view-logs',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': 'view-other-user-channels',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x136),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    _0x5cbbfd(0x11a),
                    _0x5cbbfd(0x135)
                ]
            },
            {
                '_id': _0x5cbbfd(0x137),
                'roles': ['admin']
            },
            {
                '_id': 'view-room-administration',
                'roles': ['admin']
            },
            {
                '_id': _0x5cbbfd(0x138),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x139),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x13a),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x103),
                    'anonymous'
                ]
            },
            {
                '_id': 'view-outside-room',
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    _0x5cbbfd(0xf8),
                    _0x5cbbfd(0x103)
                ]
            },
            {
                '_id': _0x5cbbfd(0x13b),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': 'call-management',
                'roles': [
                    'admin',
                    _0x5cbbfd(0x109),
                    'moderator'
                ]
            },
            {
                '_id': _0x5cbbfd(0x13c),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    'moderator'
                ]
            },
            {
                '_id': 'view-l-room',
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0x101),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x13e),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x140),
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0x101),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x141),
                'roles': [
                    _0x5cbbfd(0x13f),
                    'livechat-monitor',
                    'admin'
                ]
            },
            {
                '_id': 'close-livechat-room',
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0x101),
                    'admin'
                ]
            },
            {
                '_id': 'close-others-livechat-room',
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0x13d),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x142),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    'livechat-agent',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x143),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    'admin'
                ]
            },
            {
                '_id': 'save-others-livechat-room-info',
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d)
                ]
            },
            {
                '_id': _0x5cbbfd(0x144),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x145),
                'roles': [
                    'livechat-manager',
                    'livechat-monitor',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x146),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0x101),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': 'transfer-livechat-guest',
                'roles': [
                    _0x5cbbfd(0x13f),
                    'livechat-monitor',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x147),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x148),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x149),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    'admin'
                ]
            },
            {
                '_id': 'view-livechat-departments',
                'roles': [
                    _0x5cbbfd(0x13f),
                    'livechat-monitor',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14a),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': 'view-livechat-current-chats',
                'roles': [
                    _0x5cbbfd(0x13f),
                    'livechat-monitor',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14b),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14c),
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14d),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14e),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x14f),
                'roles': [
                    _0x5cbbfd(0x13f),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x150),
                'roles': [
                    _0x5cbbfd(0x13f),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x151),
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x152),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x153),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': 'view-livechat-room-closed-by-another-agent',
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': 'view-livechat-room-customfields',
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0x101),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x154),
                'roles': [
                    'livechat-manager',
                    _0x5cbbfd(0x13d),
                    _0x5cbbfd(0x101),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x155),
                'roles': [
                    _0x5cbbfd(0x13f),
                    'admin'
                ]
            },
            {
                '_id': _0x5cbbfd(0x156),
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x157),
                'roles': [_0x5cbbfd(0x109)]
            },
            {
                '_id': 'message-impersonate',
                'roles': [
                    _0x5cbbfd(0x104),
                    _0x5cbbfd(0xfb)
                ]
            },
            {
                '_id': _0x5cbbfd(0x158),
                'roles': [
                    'admin',
                    'user'
                ]
            },
            {
                '_id': _0x5cbbfd(0x159),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': _0x5cbbfd(0x15a),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': 'edit-team',
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner'
                ]
            },
            {
                '_id': _0x5cbbfd(0x15b),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    'moderator'
                ]
            },
            {
                '_id': _0x5cbbfd(0x15c),
                'roles': [
                    _0x5cbbfd(0xf5),
                    'owner',
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x15d),
                'roles': [
                    'admin',
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x15e),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    'moderator'
                ]
            },
            {
                '_id': _0x5cbbfd(0x15f),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109),
                    _0x5cbbfd(0xf8)
                ]
            },
            {
                '_id': _0x5cbbfd(0x160),
                'roles': [
                    _0x5cbbfd(0xf5),
                    _0x5cbbfd(0x109)
                ]
            },
            {
                '_id': 'view-all-teams',
                'roles': [_0x5cbbfd(0xf5)]
            },
            {
                '_id': _0x5cbbfd(0x161),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0xf5)
                ]
            },
            {
                '_id': _0x5cbbfd(0x162),
                'roles': [
                    _0x5cbbfd(0x13f),
                    _0x5cbbfd(0xf5)
                ]
            }
        ];
    for (const _0x9677b3 of _0x2d7e8a) {
        Permissions[_0x5cbbfd(0x163)](_0x9677b3[_0x5cbbfd(0x164)], _0x9677b3[_0x5cbbfd(0x165)]);
    }
    const _0x1335d3 = [
        {
            'name': _0x5cbbfd(0xf5),
            'scope': 'Users',
            'description': _0x5cbbfd(0x166)
        },
        {
            'name': _0x5cbbfd(0xf8),
            'scope': _0x5cbbfd(0x167),
            'description': _0x5cbbfd(0x168)
        },
        {
            'name': _0x5cbbfd(0x169),
            'scope': 'Subscriptions',
            'description': _0x5cbbfd(0x16a)
        },
        {
            'name': _0x5cbbfd(0x109),
            'scope': _0x5cbbfd(0x167),
            'description': _0x5cbbfd(0x16b)
        },
        {
            'name': _0x5cbbfd(0x103),
            'scope': _0x5cbbfd(0x16c),
            'description': ''
        },
        {
            'name': 'bot',
            'scope': _0x5cbbfd(0x16c),
            'description': ''
        },
        {
            'name': _0x5cbbfd(0xfb),
            'scope': _0x5cbbfd(0x16c),
            'description': ''
        },
        {
            'name': _0x5cbbfd(0x135),
            'scope': _0x5cbbfd(0x16c),
            'description': ''
        },
        {
            'name': 'anonymous',
            'scope': _0x5cbbfd(0x16c),
            'description': ''
        },
        {
            'name': 'livechat-agent',
            'scope': 'Users',
            'description': _0x5cbbfd(0x16d)
        },
        {
            'name': 'livechat-manager',
            'scope': 'Users',
            'description': 'Livechat\x20Manager'
        }
    ];
    for (const _0x2939c9 of _0x1335d3) {
        Roles['createOrUpdate'](_0x2939c9['name'], _0x2939c9['scope'], _0x2939c9[_0x5cbbfd(0x16e)], !![], ![]);
    }
    const _0x9fdacf = function (_0x5efa34) {
            const _0x2174a5 = _0x5cbbfd, _0x2e12b8 = {}, _0x69c8bb = { 'level': CONSTANTS[_0x2174a5(0x16f)] };
            return _0x5efa34 && (_0x69c8bb[_0x2174a5(0x170)] = _0x5efa34), Permissions['find'](_0x69c8bb)[_0x2174a5(0x171)]()[_0x2174a5(0x172)](function (_0x217f8e) {
                _0x2e12b8[_0x217f8e['_id']] = _0x217f8e;
            }), _0x2e12b8;
        }, _0x8f30f2 = function (_0x5150c8, _0x5297ff) {
            const _0x9e9f75 = _0x5cbbfd, _0x3de876 = getSettingPermissionId(_0x5150c8['_id']), _0xc81476 = {
                    'level': CONSTANTS[_0x9e9f75(0x16f)],
                    'settingId': _0x5150c8[_0x9e9f75(0x164)],
                    'group': _0x5150c8[_0x9e9f75(0x173)],
                    'section': _0x5150c8[_0x9e9f75(0x174)],
                    'sorter': _0x5150c8[_0x9e9f75(0x175)],
                    'roles': []
                };
            _0x5297ff[_0x3de876] && _0x5297ff[_0x3de876]['roles'] && (_0xc81476[_0x9e9f75(0x165)] = _0x5297ff[_0x3de876][_0x9e9f75(0x165)]);
            _0x5150c8[_0x9e9f75(0x173)] && (_0xc81476[_0x9e9f75(0x176)] = getSettingPermissionId(_0x5150c8[_0x9e9f75(0x173)]));
            _0x5150c8[_0x9e9f75(0x174)] && (_0xc81476[_0x9e9f75(0x177)] = getSettingPermissionId(_0x5150c8[_0x9e9f75(0x174)]));
            const _0x32fc9c = Permissions[_0x9e9f75(0x178)]({
                '_id': _0x3de876,
                ..._0xc81476
            }, { 'fields': { '_id': 0x1 } });
            if (!_0x32fc9c)
                try {
                    Permissions['upsert']({ '_id': _0x3de876 }, { '$set': _0xc81476 });
                } catch (_0x398abc) {
                    !_0x398abc['message']['includes'](_0x9e9f75(0x179)) && Permissions[_0x9e9f75(0x17a)]({ '_id': _0x3de876 }, { '$set': _0xc81476 });
                }
            delete _0x5297ff[_0x3de876];
        }, _0xc4848d = function () {
            const _0x1201a9 = _0x5cbbfd, _0x48fabd = _0x9fdacf();
            Settings[_0x1201a9(0x17b)]()[_0x1201a9(0x171)]()[_0x1201a9(0x172)](_0x3504e4 => {
                _0x8f30f2(_0x3504e4, _0x48fabd);
            });
            for (const _0x57618d in _0x48fabd) {
                _0x48fabd[_0x1201a9(0x17c)](_0x57618d) && Permissions[_0x1201a9(0x17d)]({ '_id': _0x57618d });
            }
        };
    _0xc4848d();
    const _0x2baf6c = function (_0x285989) {
        const _0x13a41f = _0x5cbbfd, _0x4e1ff6 = _0x9fdacf(_0x285989), _0x540944 = Settings[_0x13a41f(0x17e)](_0x285989);
        _0x540944 && (!_0x540944[_0x13a41f(0x17f)] && _0x8f30f2(_0x540944, _0x4e1ff6));
    };
    settings[_0x5cbbfd(0x180)]('*', _0x2baf6c);
});
