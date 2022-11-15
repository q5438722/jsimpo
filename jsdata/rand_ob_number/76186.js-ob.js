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
    const _0x177374 = [
        {
            '_id': 'access-permissions',
            'roles': ['admin']
        },
        {
            '_id': 'access-setting-permissions',
            'roles': ['admin']
        },
        {
            '_id': 'add-oauth-service',
            'roles': ['admin']
        },
        {
            '_id': 'add-user-to-joined-room',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'add-user-to-any-c-room',
            'roles': ['admin']
        },
        {
            '_id': 'add-user-to-any-p-room',
            'roles': []
        },
        {
            '_id': 'api-bypass-rate-limit',
            'roles': [
                'admin',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'archive-room',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'assign-admin-role',
            'roles': ['admin']
        },
        {
            '_id': 'assign-roles',
            'roles': ['admin']
        },
        {
            '_id': 'ban-user',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'bulk-register-user',
            'roles': ['admin']
        },
        {
            '_id': 'change-livechat-room-visitor',
            'roles': [
                'admin',
                'livechat-manager',
                'livechat-agent'
            ]
        },
        {
            '_id': 'create-c',
            'roles': [
                'admin',
                'user',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'create-d',
            'roles': [
                'admin',
                'user',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'create-p',
            'roles': [
                'admin',
                'user',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'create-personal-access-tokens',
            'roles': [
                'admin',
                'user'
            ]
        },
        {
            '_id': 'create-user',
            'roles': ['admin']
        },
        {
            '_id': 'clean-channel-history',
            'roles': ['admin']
        },
        {
            '_id': 'delete-c',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'delete-d',
            'roles': ['admin']
        },
        {
            '_id': 'delete-message',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'delete-own-message',
            'roles': [
                'admin',
                'user'
            ]
        },
        {
            '_id': 'delete-p',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'delete-user',
            'roles': ['admin']
        },
        {
            '_id': 'edit-message',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'edit-other-user-active-status',
            'roles': ['admin']
        },
        {
            '_id': 'edit-other-user-info',
            'roles': ['admin']
        },
        {
            '_id': 'edit-other-user-password',
            'roles': ['admin']
        },
        {
            '_id': 'edit-other-user-avatar',
            'roles': ['admin']
        },
        {
            '_id': 'edit-other-user-e2ee',
            'roles': ['admin']
        },
        {
            '_id': 'edit-other-user-totp',
            'roles': ['admin']
        },
        {
            '_id': 'edit-privileged-setting',
            'roles': ['admin']
        },
        {
            '_id': 'edit-room',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'edit-room-avatar',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'edit-room-retention-policy',
            'roles': ['admin']
        },
        {
            '_id': 'force-delete-message',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'join-without-join-code',
            'roles': [
                'admin',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'leave-c',
            'roles': [
                'admin',
                'user',
                'bot',
                'anonymous',
                'app'
            ]
        },
        {
            '_id': 'leave-p',
            'roles': [
                'admin',
                'user',
                'bot',
                'anonymous',
                'app'
            ]
        },
        {
            '_id': 'logout-other-user',
            'roles': ['admin']
        },
        {
            '_id': 'manage-assets',
            'roles': ['admin']
        },
        {
            '_id': 'manage-email-inbox',
            'roles': ['admin']
        },
        {
            '_id': 'manage-emoji',
            'roles': ['admin']
        },
        {
            '_id': 'manage-user-status',
            'roles': ['admin']
        },
        {
            '_id': 'manage-outgoing-integrations',
            'roles': ['admin']
        },
        {
            '_id': 'manage-incoming-integrations',
            'roles': ['admin']
        },
        {
            '_id': 'manage-own-outgoing-integrations',
            'roles': ['admin']
        },
        {
            '_id': 'manage-own-incoming-integrations',
            'roles': ['admin']
        },
        {
            '_id': 'manage-oauth-apps',
            'roles': ['admin']
        },
        {
            '_id': 'manage-selected-settings',
            'roles': ['admin']
        },
        {
            '_id': 'mention-all',
            'roles': [
                'admin',
                'owner',
                'moderator',
                'user'
            ]
        },
        {
            '_id': 'mention-here',
            'roles': [
                'admin',
                'owner',
                'moderator',
                'user'
            ]
        },
        {
            '_id': 'mute-user',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'remove-user',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'run-import',
            'roles': ['admin']
        },
        {
            '_id': 'run-migration',
            'roles': ['admin']
        },
        {
            '_id': 'set-moderator',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'set-owner',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'send-many-messages',
            'roles': [
                'admin',
                'bot',
                'app'
            ]
        },
        {
            '_id': 'set-leader',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'unarchive-room',
            'roles': ['admin']
        },
        {
            '_id': 'view-c-room',
            'roles': [
                'admin',
                'user',
                'bot',
                'app',
                'anonymous'
            ]
        },
        {
            '_id': 'user-generate-access-token',
            'roles': ['admin']
        },
        {
            '_id': 'view-d-room',
            'roles': [
                'admin',
                'user',
                'bot',
                'app',
                'guest'
            ]
        },
        {
            '_id': 'view-full-other-user-info',
            'roles': ['admin']
        },
        {
            '_id': 'view-history',
            'roles': [
                'admin',
                'user',
                'anonymous'
            ]
        },
        {
            '_id': 'view-joined-room',
            'roles': [
                'guest',
                'bot',
                'app',
                'anonymous'
            ]
        },
        {
            '_id': 'view-join-code',
            'roles': ['admin']
        },
        {
            '_id': 'view-logs',
            'roles': ['admin']
        },
        {
            '_id': 'view-other-user-channels',
            'roles': ['admin']
        },
        {
            '_id': 'view-p-room',
            'roles': [
                'admin',
                'user',
                'anonymous',
                'guest'
            ]
        },
        {
            '_id': 'view-privileged-setting',
            'roles': ['admin']
        },
        {
            '_id': 'view-room-administration',
            'roles': ['admin']
        },
        {
            '_id': 'view-statistics',
            'roles': ['admin']
        },
        {
            '_id': 'view-user-administration',
            'roles': ['admin']
        },
        {
            '_id': 'preview-c-room',
            'roles': [
                'admin',
                'user',
                'anonymous'
            ]
        },
        {
            '_id': 'view-outside-room',
            'roles': [
                'admin',
                'owner',
                'moderator',
                'user'
            ]
        },
        {
            '_id': 'view-broadcast-member-list',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'call-management',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'create-invite-links',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'view-l-room',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-manager',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'edit-omnichannel-contact',
            'roles': [
                'livechat-manager',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-rooms',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'close-livechat-room',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'close-others-livechat-room',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'on-hold-livechat-room',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'on-hold-others-livechat-room',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'save-others-livechat-room-info',
            'roles': [
                'livechat-manager',
                'livechat-monitor'
            ]
        },
        {
            '_id': 'remove-closed-livechat-rooms',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-analytics',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-queue',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'transfer-livechat-guest',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'manage-livechat-managers',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'manage-livechat-agents',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'manage-livechat-departments',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-departments',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'add-livechat-department-agents',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-current-chats',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-real-time-monitoring',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-triggers',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-customfields',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-installation',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-appearance',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-webhooks',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-facebook',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-business-hours',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-room-closed-same-department',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-room-closed-by-another-agent',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'admin'
            ]
        },
        {
            '_id': 'view-livechat-room-customfields',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'edit-livechat-room-customfields',
            'roles': [
                'livechat-manager',
                'livechat-monitor',
                'livechat-agent',
                'admin'
            ]
        },
        {
            '_id': 'send-omnichannel-chat-transcript',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'mail-messages',
            'roles': ['admin']
        },
        {
            '_id': 'toggle-room-e2e-encryption',
            'roles': ['owner']
        },
        {
            '_id': 'message-impersonate',
            'roles': [
                'bot',
                'app'
            ]
        },
        {
            '_id': 'create-team',
            'roles': [
                'admin',
                'user'
            ]
        },
        {
            '_id': 'delete-team',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'convert-team',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'edit-team',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'add-team-member',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'edit-team-member',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'add-team-channel',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'edit-team-channel',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'remove-team-channel',
            'roles': [
                'admin',
                'owner',
                'moderator'
            ]
        },
        {
            '_id': 'view-all-team-channels',
            'roles': [
                'admin',
                'owner'
            ]
        },
        {
            '_id': 'view-all-teams',
            'roles': ['admin']
        },
        {
            '_id': 'remove-closed-livechat-room',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        },
        {
            '_id': 'remove-livechat-department',
            'roles': [
                'livechat-manager',
                'admin'
            ]
        }
    ];
    for (const _0x276086 of _0x177374) {
        Permissions['create'](_0x276086['_id'], _0x276086['roles']);
    }
    const _0x237104 = [
        {
            'name': 'admin',
            'scope': 'Users',
            'description': 'Admin'
        },
        {
            'name': 'moderator',
            'scope': 'Subscriptions',
            'description': 'Moderator'
        },
        {
            'name': 'leader',
            'scope': 'Subscriptions',
            'description': 'Leader'
        },
        {
            'name': 'owner',
            'scope': 'Subscriptions',
            'description': 'Owner'
        },
        {
            'name': 'user',
            'scope': 'Users',
            'description': ''
        },
        {
            'name': 'bot',
            'scope': 'Users',
            'description': ''
        },
        {
            'name': 'app',
            'scope': 'Users',
            'description': ''
        },
        {
            'name': 'guest',
            'scope': 'Users',
            'description': ''
        },
        {
            'name': 'anonymous',
            'scope': 'Users',
            'description': ''
        },
        {
            'name': 'livechat-agent',
            'scope': 'Users',
            'description': 'Livechat\x20Agent'
        },
        {
            'name': 'livechat-manager',
            'scope': 'Users',
            'description': 'Livechat\x20Manager'
        }
    ];
    for (const _0x362c9c of _0x237104) {
        Roles['createOrUpdate'](_0x362c9c['name'], _0x362c9c['scope'], _0x362c9c['description'], !![], ![]);
    }
    const _0x240faa = function (_0x1e9be7) {
            const _0x45d5f5 = {}, _0x26051c = { 'level': CONSTANTS['SETTINGS_LEVEL'] };
            return _0x1e9be7 && (_0x26051c['settingId'] = _0x1e9be7), Permissions['find'](_0x26051c)['fetch']()['forEach'](function (_0x279067) {
                _0x45d5f5[_0x279067['_id']] = _0x279067;
            }), _0x45d5f5;
        }, _0x2f5596 = function (_0x5280a3, _0x36d4c6) {
            const _0x31e0af = getSettingPermissionId(_0x5280a3['_id']), _0x28b6f4 = {
                    'level': CONSTANTS['SETTINGS_LEVEL'],
                    'settingId': _0x5280a3['_id'],
                    'group': _0x5280a3['group'],
                    'section': _0x5280a3['section'],
                    'sorter': _0x5280a3['sorter'],
                    'roles': []
                };
            _0x36d4c6[_0x31e0af] && _0x36d4c6[_0x31e0af]['roles'] && (_0x28b6f4['roles'] = _0x36d4c6[_0x31e0af]['roles']);
            _0x5280a3['group'] && (_0x28b6f4['groupPermissionId'] = getSettingPermissionId(_0x5280a3['group']));
            _0x5280a3['section'] && (_0x28b6f4['sectionPermissionId'] = getSettingPermissionId(_0x5280a3['section']));
            const _0x53b535 = Permissions['findOne']({
                '_id': _0x31e0af,
                ..._0x28b6f4
            }, { 'fields': { '_id': 0x1 } });
            if (!_0x53b535)
                try {
                    Permissions['upsert']({ '_id': _0x31e0af }, { '$set': _0x28b6f4 });
                } catch (_0x54fff6) {
                    !_0x54fff6['message']['includes']('E11000') && Permissions['upsert']({ '_id': _0x31e0af }, { '$set': _0x28b6f4 });
                }
            delete _0x36d4c6[_0x31e0af];
        }, _0x3d6a3a = function () {
            const _0x3bf1eb = _0x240faa();
            Settings['findNotHidden']()['fetch']()['forEach'](_0x200b3d => {
                _0x2f5596(_0x200b3d, _0x3bf1eb);
            });
            for (const _0x1b30ba in _0x3bf1eb) {
                _0x3bf1eb['hasOwnProperty'](_0x1b30ba) && Permissions['remove']({ '_id': _0x1b30ba });
            }
        };
    _0x3d6a3a();
    const _0x32ff5c = function (_0x29ddd9) {
        const _0x899f91 = _0x240faa(_0x29ddd9), _0x528741 = Settings['findOneById'](_0x29ddd9);
        _0x528741 && (!_0x528741['hidden'] && _0x2f5596(_0x528741, _0x899f91));
    };
    settings['onload']('*', _0x32ff5c);
});
