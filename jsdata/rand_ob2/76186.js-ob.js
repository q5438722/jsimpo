const _0x153f = [
    'app',
    'archive-room',
    'owner',
    'assign-admin-role',
    'assign-roles',
    'ban-user',
    'bulk-register-user',
    'change-livechat-room-visitor',
    'livechat-manager',
    'livechat-agent',
    'user',
    'create-d',
    'create-p',
    'create-personal-access-tokens',
    'create-user',
    'delete-c',
    'delete-message',
    'delete-own-message',
    'edit-message',
    'edit-other-user-active-status',
    'edit-other-user-info',
    'edit-other-user-password',
    'edit-other-user-totp',
    'edit-privileged-setting',
    'edit-room-avatar',
    'force-delete-message',
    'leave-c',
    'anonymous',
    'leave-p',
    'manage-user-status',
    'manage-outgoing-integrations',
    'manage-incoming-integrations',
    'manage-own-outgoing-integrations',
    'manage-own-incoming-integrations',
    'manage-oauth-apps',
    'manage-selected-settings',
    'mention-all',
    'mention-here',
    'mute-user',
    'remove-user',
    'run-import',
    'set-moderator',
    'set-owner',
    'send-many-messages',
    'unarchive-room',
    'view-c-room',
    'view-d-room',
    'view-full-other-user-info',
    'view-history',
    'view-joined-room',
    'guest',
    'view-join-code',
    'view-logs',
    'view-other-user-channels',
    'view-p-room',
    'view-privileged-setting',
    'view-room-administration',
    'view-statistics',
    'view-user-administration',
    'preview-c-room',
    'view-outside-room',
    'view-broadcast-member-list',
    'call-management',
    'create-invite-links',
    'view-l-room',
    'livechat-monitor',
    'view-livechat-manager',
    'edit-omnichannel-contact',
    'view-livechat-rooms',
    'close-livechat-room',
    'close-others-livechat-room',
    'on-hold-livechat-room',
    'save-others-livechat-room-info',
    'remove-closed-livechat-rooms',
    'view-livechat-analytics',
    'view-livechat-queue',
    'manage-livechat-managers',
    'manage-livechat-agents',
    'manage-livechat-departments',
    'view-livechat-departments',
    'add-livechat-department-agents',
    'view-livechat-current-chats',
    'view-livechat-real-time-monitoring',
    'view-livechat-customfields',
    'view-livechat-installation',
    'view-livechat-appearance',
    'view-livechat-webhooks',
    'view-livechat-facebook',
    'view-livechat-room-closed-same-department',
    'view-livechat-room-closed-by-another-agent',
    'view-livechat-room-customfields',
    'edit-livechat-room-customfields',
    'send-omnichannel-chat-transcript',
    'mail-messages',
    'toggle-room-e2e-encryption',
    'message-impersonate',
    'create-team',
    'convert-team',
    'edit-team-member',
    'edit-team-channel',
    'remove-team-channel',
    'remove-closed-livechat-room',
    'remove-livechat-department',
    '_id',
    'Users',
    'Admin',
    'Subscriptions',
    'Moderator',
    'leader',
    'Livechat\x20Agent',
    'Livechat\x20Manager',
    'createOrUpdate',
    'name',
    'SETTINGS_LEVEL',
    'settingId',
    'fetch',
    'group',
    'sorter',
    'roles',
    'section',
    'sectionPermissionId',
    'findOne',
    'includes',
    'E11000',
    'upsert',
    'findNotHidden',
    'forEach',
    'hasOwnProperty',
    'remove',
    'findOneById',
    'hidden',
    'onload',
    '22213uzTtjS',
    '324079plIjxP',
    '16422VWJbYp',
    '44kSCQeI',
    '264638hmrrDm',
    '522992Ovdjxc',
    '387869JKMmfc',
    '1288433KAACOV',
    'startup',
    'access-permissions',
    'access-setting-permissions',
    'admin',
    'add-oauth-service',
    'add-user-to-joined-room',
    'moderator',
    'add-user-to-any-p-room',
    'api-bypass-rate-limit',
    'bot'
];
const _0x4b2459 = _0xbf0a;
(function (_0x55ef1a, _0x429ce0) {
    const _0x1ae389 = _0xbf0a;
    while (!![]) {
        try {
            const _0x15fd21 = -parseInt(_0x1ae389(0x11c)) + -parseInt(_0x1ae389(0x11d)) + -parseInt(_0x1ae389(0x11e)) * -parseInt(_0x1ae389(0x11f)) + -parseInt(_0x1ae389(0x120)) + -parseInt(_0x1ae389(0x121)) + -parseInt(_0x1ae389(0x122)) + parseInt(_0x1ae389(0x123));
            if (_0x15fd21 === _0x429ce0)
                break;
            else
                _0x55ef1a['push'](_0x55ef1a['shift']());
        } catch (_0x433acd) {
            _0x55ef1a['push'](_0x55ef1a['shift']());
        }
    }
}(_0x153f, 0x776fa));
import { Meteor } from 'meteor/meteor';
function _0xbf0a(_0x5c24d1, _0x41d646) {
    return _0xbf0a = function (_0x153f24, _0xbf0abd) {
        _0x153f24 = _0x153f24 - 0x11c;
        let _0x169b8e = _0x153f[_0x153f24];
        return _0x169b8e;
    }, _0xbf0a(_0x5c24d1, _0x41d646);
}
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
Meteor[_0x4b2459(0x124)](function () {
    const _0x56f1bd = _0x4b2459, _0xa5483d = [
            {
                '_id': _0x56f1bd(0x125),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x126),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x128),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x129),
                'roles': [
                    _0x56f1bd(0x127),
                    'owner',
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': 'add-user-to-any-c-room',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x12b),
                'roles': []
            },
            {
                '_id': _0x56f1bd(0x12c),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x12f),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': _0x56f1bd(0x131),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x132),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x133),
                'roles': [
                    _0x56f1bd(0x127),
                    'owner',
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x134),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x135),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x137)
                ]
            },
            {
                '_id': 'create-c',
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    'bot',
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x139),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    'bot',
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x13a),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x13b),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138)
                ]
            },
            {
                '_id': _0x56f1bd(0x13c),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'clean-channel-history',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x13d),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'delete-d',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x13e),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x13f),
                'roles': [
                    'admin',
                    _0x56f1bd(0x138)
                ]
            },
            {
                '_id': 'delete-p',
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'delete-user',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x140),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    'moderator'
                ]
            },
            {
                '_id': _0x56f1bd(0x141),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x142),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x143),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'edit-other-user-avatar',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'edit-other-user-e2ee',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x144),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x145),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'edit-room',
                'roles': [
                    _0x56f1bd(0x127),
                    'owner',
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x146),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    'moderator'
                ]
            },
            {
                '_id': 'edit-room-retention-policy',
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x147),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'join-without-join-code',
                'roles': [
                    _0x56f1bd(0x127),
                    'bot',
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x148),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x149),
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x14a),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    'bot',
                    'anonymous',
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': 'logout-other-user',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'manage-assets',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'manage-email-inbox',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'manage-emoji',
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x14b),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x14c),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x14d),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x14e),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x14f),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x150),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x151),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x152),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a),
                    _0x56f1bd(0x138)
                ]
            },
            {
                '_id': _0x56f1bd(0x153),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    'moderator',
                    'user'
                ]
            },
            {
                '_id': _0x56f1bd(0x154),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x155),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    'moderator'
                ]
            },
            {
                '_id': _0x56f1bd(0x156),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': 'run-migration',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x157),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': _0x56f1bd(0x158),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': _0x56f1bd(0x159),
                'roles': [
                    _0x56f1bd(0x127),
                    'bot',
                    'app'
                ]
            },
            {
                '_id': 'set-leader',
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': _0x56f1bd(0x15a),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x15b),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e),
                    'anonymous'
                ]
            },
            {
                '_id': 'user-generate-access-token',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x15c),
                'roles': [
                    _0x56f1bd(0x127),
                    'user',
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e),
                    'guest'
                ]
            },
            {
                '_id': _0x56f1bd(0x15d),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x15e),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x149)
                ]
            },
            {
                '_id': _0x56f1bd(0x15f),
                'roles': [
                    _0x56f1bd(0x160),
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e),
                    _0x56f1bd(0x149)
                ]
            },
            {
                '_id': _0x56f1bd(0x161),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x162),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x163),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x164),
                'roles': [
                    'admin',
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x149),
                    _0x56f1bd(0x160)
                ]
            },
            {
                '_id': _0x56f1bd(0x165),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x166),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x167),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x168),
                'roles': ['admin']
            },
            {
                '_id': _0x56f1bd(0x169),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x138),
                    _0x56f1bd(0x149)
                ]
            },
            {
                '_id': _0x56f1bd(0x16a),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    'moderator',
                    _0x56f1bd(0x138)
                ]
            },
            {
                '_id': _0x56f1bd(0x16b),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x16c),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x16d),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x16e),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x137),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x170),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x171),
                'roles': [
                    _0x56f1bd(0x136),
                    'livechat-agent',
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x172),
                'roles': [
                    'livechat-manager',
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x173),
                'roles': [
                    _0x56f1bd(0x136),
                    'livechat-monitor',
                    _0x56f1bd(0x137),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x174),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x175),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    'livechat-agent',
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': 'on-hold-others-livechat-room',
                'roles': [
                    _0x56f1bd(0x136),
                    'livechat-monitor',
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x176),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f)
                ]
            },
            {
                '_id': _0x56f1bd(0x177),
                'roles': [
                    _0x56f1bd(0x136),
                    'livechat-monitor',
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x178),
                'roles': [
                    'livechat-manager',
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x179),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x137),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': 'transfer-livechat-guest',
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x17a),
                'roles': [
                    'livechat-manager',
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x17b),
                'roles': [
                    'livechat-manager',
                    _0x56f1bd(0x16f),
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x17c),
                'roles': [
                    'livechat-manager',
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x17d),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x17e),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x17f),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x180),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': 'view-livechat-triggers',
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x181),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x182),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x183),
                'roles': [
                    _0x56f1bd(0x136),
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x184),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x185),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': 'view-livechat-business-hours',
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x186),
                'roles': [
                    _0x56f1bd(0x136),
                    'livechat-monitor',
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x187),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x188),
                'roles': [
                    'livechat-manager',
                    'livechat-monitor',
                    'livechat-agent',
                    'admin'
                ]
            },
            {
                '_id': _0x56f1bd(0x189),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x16f),
                    'livechat-agent',
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x18a),
                'roles': [
                    'livechat-manager',
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x18b),
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x18c),
                'roles': [_0x56f1bd(0x130)]
            },
            {
                '_id': _0x56f1bd(0x18d),
                'roles': [
                    _0x56f1bd(0x12d),
                    _0x56f1bd(0x12e)
                ]
            },
            {
                '_id': _0x56f1bd(0x18e),
                'roles': [
                    _0x56f1bd(0x127),
                    'user'
                ]
            },
            {
                '_id': 'delete-team',
                'roles': [
                    _0x56f1bd(0x127),
                    'owner'
                ]
            },
            {
                '_id': _0x56f1bd(0x18f),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'edit-team',
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'add-team-member',
                'roles': [
                    _0x56f1bd(0x127),
                    'owner',
                    'moderator'
                ]
            },
            {
                '_id': _0x56f1bd(0x190),
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': 'add-team-channel',
                'roles': [
                    _0x56f1bd(0x127),
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x191),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': _0x56f1bd(0x192),
                'roles': [
                    'admin',
                    _0x56f1bd(0x130),
                    _0x56f1bd(0x12a)
                ]
            },
            {
                '_id': 'view-all-team-channels',
                'roles': [
                    'admin',
                    _0x56f1bd(0x130)
                ]
            },
            {
                '_id': 'view-all-teams',
                'roles': [_0x56f1bd(0x127)]
            },
            {
                '_id': _0x56f1bd(0x193),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            },
            {
                '_id': _0x56f1bd(0x194),
                'roles': [
                    _0x56f1bd(0x136),
                    _0x56f1bd(0x127)
                ]
            }
        ];
    for (const _0x127fd4 of _0xa5483d) {
        Permissions['create'](_0x127fd4[_0x56f1bd(0x195)], _0x127fd4['roles']);
    }
    const _0x4a9e95 = [
        {
            'name': 'admin',
            'scope': _0x56f1bd(0x196),
            'description': _0x56f1bd(0x197)
        },
        {
            'name': _0x56f1bd(0x12a),
            'scope': _0x56f1bd(0x198),
            'description': _0x56f1bd(0x199)
        },
        {
            'name': _0x56f1bd(0x19a),
            'scope': _0x56f1bd(0x198),
            'description': 'Leader'
        },
        {
            'name': _0x56f1bd(0x130),
            'scope': 'Subscriptions',
            'description': 'Owner'
        },
        {
            'name': 'user',
            'scope': _0x56f1bd(0x196),
            'description': ''
        },
        {
            'name': _0x56f1bd(0x12d),
            'scope': _0x56f1bd(0x196),
            'description': ''
        },
        {
            'name': _0x56f1bd(0x12e),
            'scope': _0x56f1bd(0x196),
            'description': ''
        },
        {
            'name': _0x56f1bd(0x160),
            'scope': _0x56f1bd(0x196),
            'description': ''
        },
        {
            'name': 'anonymous',
            'scope': _0x56f1bd(0x196),
            'description': ''
        },
        {
            'name': 'livechat-agent',
            'scope': _0x56f1bd(0x196),
            'description': _0x56f1bd(0x19b)
        },
        {
            'name': _0x56f1bd(0x136),
            'scope': _0x56f1bd(0x196),
            'description': _0x56f1bd(0x19c)
        }
    ];
    for (const _0x391adb of _0x4a9e95) {
        Roles[_0x56f1bd(0x19d)](_0x391adb[_0x56f1bd(0x19e)], _0x391adb['scope'], _0x391adb['description'], !![], ![]);
    }
    const _0x2ae87a = function (_0x24bdb7) {
            const _0x4b6ee1 = _0x56f1bd, _0x19e88a = {}, _0x572264 = { 'level': CONSTANTS[_0x4b6ee1(0x19f)] };
            return _0x24bdb7 && (_0x572264[_0x4b6ee1(0x1a0)] = _0x24bdb7), Permissions['find'](_0x572264)[_0x4b6ee1(0x1a1)]()['forEach'](function (_0x385959) {
                _0x19e88a[_0x385959['_id']] = _0x385959;
            }), _0x19e88a;
        }, _0x4a5925 = function (_0x20641f, _0x1a69a7) {
            const _0x312cd3 = _0x56f1bd, _0x4b3b19 = getSettingPermissionId(_0x20641f[_0x312cd3(0x195)]), _0x387f59 = {
                    'level': CONSTANTS[_0x312cd3(0x19f)],
                    'settingId': _0x20641f[_0x312cd3(0x195)],
                    'group': _0x20641f[_0x312cd3(0x1a2)],
                    'section': _0x20641f['section'],
                    'sorter': _0x20641f[_0x312cd3(0x1a3)],
                    'roles': []
                };
            _0x1a69a7[_0x4b3b19] && _0x1a69a7[_0x4b3b19][_0x312cd3(0x1a4)] && (_0x387f59[_0x312cd3(0x1a4)] = _0x1a69a7[_0x4b3b19][_0x312cd3(0x1a4)]);
            _0x20641f[_0x312cd3(0x1a2)] && (_0x387f59['groupPermissionId'] = getSettingPermissionId(_0x20641f[_0x312cd3(0x1a2)]));
            _0x20641f[_0x312cd3(0x1a5)] && (_0x387f59[_0x312cd3(0x1a6)] = getSettingPermissionId(_0x20641f['section']));
            const _0xc3c548 = Permissions[_0x312cd3(0x1a7)]({
                '_id': _0x4b3b19,
                ..._0x387f59
            }, { 'fields': { '_id': 0x1 } });
            if (!_0xc3c548)
                try {
                    Permissions['upsert']({ '_id': _0x4b3b19 }, { '$set': _0x387f59 });
                } catch (_0x9268d) {
                    !_0x9268d['message'][_0x312cd3(0x1a8)](_0x312cd3(0x1a9)) && Permissions[_0x312cd3(0x1aa)]({ '_id': _0x4b3b19 }, { '$set': _0x387f59 });
                }
            delete _0x1a69a7[_0x4b3b19];
        }, _0x6bd74f = function () {
            const _0x1ed298 = _0x56f1bd, _0x1ff7d6 = _0x2ae87a();
            Settings[_0x1ed298(0x1ab)]()[_0x1ed298(0x1a1)]()[_0x1ed298(0x1ac)](_0x42a224 => {
                _0x4a5925(_0x42a224, _0x1ff7d6);
            });
            for (const _0x47252c in _0x1ff7d6) {
                _0x1ff7d6[_0x1ed298(0x1ad)](_0x47252c) && Permissions[_0x1ed298(0x1ae)]({ '_id': _0x47252c });
            }
        };
    _0x6bd74f();
    const _0xff1e85 = function (_0x31fab3) {
        const _0x1fbd30 = _0x56f1bd, _0x44ba67 = _0x2ae87a(_0x31fab3), _0x41b479 = Settings[_0x1fbd30(0x1af)](_0x31fab3);
        _0x41b479 && (!_0x41b479[_0x1fbd30(0x1b0)] && _0x4a5925(_0x41b479, _0x44ba67));
    };
    settings[_0x56f1bd(0x1b1)]('*', _0xff1e85);
});
