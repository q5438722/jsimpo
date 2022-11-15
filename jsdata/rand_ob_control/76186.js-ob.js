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
    const _0x46d5a6 = {
            'zJcmu': function (_0x421f53, _0x1e1425) {
                return _0x421f53(_0x1e1425);
            },
            'NWQUt': function (_0x4ab331, _0x1e1504) {
                return _0x4ab331(_0x1e1504);
            },
            'gFYhi': 'E11000',
            'SHrzr': function (_0x165351, _0x50a56a, _0x5e9ac7) {
                return _0x165351(_0x50a56a, _0x5e9ac7);
            },
            'tCvIw': function (_0x27cd52) {
                return _0x27cd52();
            },
            'HPVzh': function (_0x2778ff, _0x5558e9) {
                return _0x2778ff(_0x5558e9);
            },
            'qOBQA': function (_0x303468, _0x4f7cf3, _0x458011) {
                return _0x303468(_0x4f7cf3, _0x458011);
            },
            'QWsWl': 'access-permissions',
            'Kucct': 'admin',
            'YVmgO': 'access-setting-permissions',
            'DLvXf': 'add-oauth-service',
            'oKKko': 'add-user-to-joined-room',
            'YIPwN': 'owner',
            'CeokK': 'moderator',
            'jTgbz': 'add-user-to-any-c-room',
            'zXHBm': 'add-user-to-any-p-room',
            'qvitG': 'api-bypass-rate-limit',
            'sYNvq': 'bot',
            'HMhHl': 'app',
            'Pxkrs': 'archive-room',
            'PlJhs': 'assign-admin-role',
            'oYllL': 'assign-roles',
            'VupkI': 'ban-user',
            'KZcOy': 'bulk-register-user',
            'HAYNn': 'change-livechat-room-visitor',
            'FTiTU': 'livechat-manager',
            'eZfZc': 'livechat-agent',
            'mQzqJ': 'create-c',
            'NORrc': 'user',
            'xCPte': 'create-d',
            'gpwHW': 'create-p',
            'cRUsj': 'create-personal-access-tokens',
            'ALCYy': 'create-user',
            'pDRGi': 'clean-channel-history',
            'QAUYl': 'delete-c',
            'oaVOI': 'delete-d',
            'YrspW': 'delete-message',
            'vspJb': 'delete-own-message',
            'zkGjS': 'delete-p',
            'SqcqQ': 'delete-user',
            'WAhaO': 'edit-message',
            'GUqxg': 'edit-other-user-active-status',
            'JdQTx': 'edit-other-user-info',
            'BjRzW': 'edit-other-user-password',
            'YnJeP': 'edit-other-user-avatar',
            'wbwVz': 'edit-other-user-e2ee',
            'kzizT': 'edit-other-user-totp',
            'gMgzj': 'edit-privileged-setting',
            'qHIgU': 'edit-room',
            'lVBiN': 'edit-room-avatar',
            'JQUBi': 'edit-room-retention-policy',
            'HtvFq': 'force-delete-message',
            'WhhYh': 'join-without-join-code',
            'SniXa': 'leave-c',
            'VOtKz': 'anonymous',
            'jibFv': 'leave-p',
            'eTbZX': 'logout-other-user',
            'STNHa': 'manage-assets',
            'BHppC': 'manage-email-inbox',
            'nFrBs': 'manage-emoji',
            'dDcFv': 'manage-user-status',
            'Vjwaj': 'manage-outgoing-integrations',
            'awrmp': 'manage-incoming-integrations',
            'OXtcf': 'manage-own-outgoing-integrations',
            'Onbkn': 'manage-own-incoming-integrations',
            'CCbzb': 'manage-oauth-apps',
            'qrkOm': 'manage-selected-settings',
            'ttxxU': 'mention-all',
            'KDxnU': 'mention-here',
            'Okaij': 'mute-user',
            'kynJf': 'remove-user',
            'YiGxq': 'run-import',
            'dxRuK': 'run-migration',
            'vpQHZ': 'set-moderator',
            'mxVtW': 'set-owner',
            'CNVeX': 'send-many-messages',
            'dDHbh': 'set-leader',
            'OvKeI': 'unarchive-room',
            'zTcbj': 'view-c-room',
            'jqGLl': 'user-generate-access-token',
            'JUtOK': 'view-d-room',
            'rMviW': 'guest',
            'cJRBT': 'view-full-other-user-info',
            'fwdYC': 'view-history',
            'TrCDi': 'view-joined-room',
            'cuFLo': 'view-join-code',
            'biCzq': 'view-logs',
            'WUOrf': 'view-other-user-channels',
            'MMeZi': 'view-p-room',
            'wAeYl': 'view-privileged-setting',
            'JrpNu': 'view-room-administration',
            'cosoc': 'view-statistics',
            'TPXJO': 'view-user-administration',
            'FtHVy': 'preview-c-room',
            'fmLUd': 'view-outside-room',
            'IlXlT': 'view-broadcast-member-list',
            'JObfe': 'call-management',
            'CdWwM': 'create-invite-links',
            'nTlIB': 'view-l-room',
            'uUFeg': 'livechat-monitor',
            'nTJSo': 'view-livechat-manager',
            'MvLsa': 'edit-omnichannel-contact',
            'lXkTA': 'view-livechat-rooms',
            'jCuIp': 'close-livechat-room',
            'atZwX': 'close-others-livechat-room',
            'HnmtU': 'on-hold-livechat-room',
            'gXeSH': 'on-hold-others-livechat-room',
            'yPAtx': 'save-others-livechat-room-info',
            'ZNkjb': 'remove-closed-livechat-rooms',
            'SFUce': 'view-livechat-analytics',
            'ndrDK': 'view-livechat-queue',
            'FtVdN': 'transfer-livechat-guest',
            'vFUnM': 'manage-livechat-managers',
            'uOzLS': 'manage-livechat-agents',
            'QGrsm': 'manage-livechat-departments',
            'RtCbv': 'view-livechat-departments',
            'mBsih': 'add-livechat-department-agents',
            'DtGpd': 'view-livechat-current-chats',
            'pLSbr': 'view-livechat-real-time-monitoring',
            'RKfpJ': 'view-livechat-triggers',
            'zvFmL': 'view-livechat-customfields',
            'hEReZ': 'view-livechat-installation',
            'MOomr': 'view-livechat-appearance',
            'FLeTo': 'view-livechat-webhooks',
            'AMMvt': 'view-livechat-facebook',
            'jUrrh': 'view-livechat-business-hours',
            'lAVtV': 'view-livechat-room-closed-same-department',
            'LPHEd': 'view-livechat-room-closed-by-another-agent',
            'drACH': 'view-livechat-room-customfields',
            'vENVk': 'edit-livechat-room-customfields',
            'lZgJk': 'send-omnichannel-chat-transcript',
            'JCtdf': 'mail-messages',
            'zyLhJ': 'toggle-room-e2e-encryption',
            'mZxds': 'message-impersonate',
            'MVHHv': 'create-team',
            'RgeVS': 'delete-team',
            'awYBj': 'convert-team',
            'jMyeE': 'edit-team',
            'KavWE': 'add-team-member',
            'Vanhn': 'edit-team-member',
            'tzusH': 'add-team-channel',
            'ooGiI': 'edit-team-channel',
            'MoaTY': 'remove-team-channel',
            'MVaIc': 'view-all-team-channels',
            'jYuoY': 'view-all-teams',
            'DjVMP': 'remove-closed-livechat-room',
            'Fmzxu': 'remove-livechat-department',
            'fKIMT': 'Users',
            'WVNDU': 'Admin',
            'gAfXZ': 'Subscriptions',
            'DbmgR': 'Moderator',
            'upttH': 'leader',
            'EYOmv': 'Leader',
            'PHBUn': 'Owner',
            'WosAx': 'Livechat\x20Agent',
            'xqMzK': 'Livechat\x20Manager',
            'iwaHo': function (_0x1c43a1) {
                return _0x1c43a1();
            }
        }, _0x16af12 = [
            {
                '_id': _0x46d5a6['QWsWl'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['YVmgO'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['DLvXf'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['oKKko'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['jTgbz'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['zXHBm'],
                'roles': []
            },
            {
                '_id': _0x46d5a6['qvitG'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['Pxkrs'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['PlJhs'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['oYllL'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['VupkI'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['KZcOy'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['HAYNn'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['eZfZc']
                ]
            },
            {
                '_id': _0x46d5a6['mQzqJ'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['xCPte'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['gpwHW'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['cRUsj'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['ALCYy'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['pDRGi'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['QAUYl'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['oaVOI'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['YrspW'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['vspJb'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['zkGjS'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['SqcqQ'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['WAhaO'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['GUqxg'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['JdQTx'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['BjRzW'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['YnJeP'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['wbwVz'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['kzizT'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['gMgzj'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['qHIgU'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['lVBiN'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['JQUBi'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['HtvFq'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['WhhYh'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['SniXa'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['VOtKz'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['jibFv'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['VOtKz'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['eTbZX'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['STNHa'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['BHppC'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['nFrBs'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['dDcFv'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['Vjwaj'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['awrmp'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['OXtcf'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['Onbkn'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['CCbzb'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['qrkOm'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['ttxxU'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['KDxnU'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['Okaij'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['kynJf'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['YiGxq'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['dxRuK'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['vpQHZ'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['mxVtW'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['CNVeX'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['dDHbh'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['OvKeI'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['zTcbj'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl'],
                    _0x46d5a6['VOtKz']
                ]
            },
            {
                '_id': _0x46d5a6['jqGLl'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['JUtOK'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl'],
                    _0x46d5a6['rMviW']
                ]
            },
            {
                '_id': _0x46d5a6['cJRBT'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['fwdYC'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['VOtKz']
                ]
            },
            {
                '_id': _0x46d5a6['TrCDi'],
                'roles': [
                    _0x46d5a6['rMviW'],
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl'],
                    _0x46d5a6['VOtKz']
                ]
            },
            {
                '_id': _0x46d5a6['cuFLo'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['biCzq'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['WUOrf'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['MMeZi'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['VOtKz'],
                    _0x46d5a6['rMviW']
                ]
            },
            {
                '_id': _0x46d5a6['wAeYl'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['JrpNu'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['cosoc'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['TPXJO'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['FtHVy'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc'],
                    _0x46d5a6['VOtKz']
                ]
            },
            {
                '_id': _0x46d5a6['fmLUd'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['IlXlT'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['JObfe'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['CdWwM'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['nTlIB'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['nTJSo'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['MvLsa'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['lXkTA'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['jCuIp'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['atZwX'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['HnmtU'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['gXeSH'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['yPAtx'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg']
                ]
            },
            {
                '_id': _0x46d5a6['ZNkjb'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['SFUce'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['ndrDK'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['FtVdN'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['vFUnM'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['uOzLS'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['QGrsm'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['RtCbv'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['mBsih'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['DtGpd'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['pLSbr'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['RKfpJ'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['zvFmL'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['hEReZ'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['MOomr'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['FLeTo'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['AMMvt'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['jUrrh'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['lAVtV'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['LPHEd'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['drACH'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['vENVk'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['uUFeg'],
                    _0x46d5a6['eZfZc'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['lZgJk'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['JCtdf'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['zyLhJ'],
                'roles': [_0x46d5a6['YIPwN']]
            },
            {
                '_id': _0x46d5a6['mZxds'],
                'roles': [
                    _0x46d5a6['sYNvq'],
                    _0x46d5a6['HMhHl']
                ]
            },
            {
                '_id': _0x46d5a6['MVHHv'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['NORrc']
                ]
            },
            {
                '_id': _0x46d5a6['RgeVS'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['awYBj'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['jMyeE'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['KavWE'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['Vanhn'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['tzusH'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['ooGiI'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['MoaTY'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN'],
                    _0x46d5a6['CeokK']
                ]
            },
            {
                '_id': _0x46d5a6['MVaIc'],
                'roles': [
                    _0x46d5a6['Kucct'],
                    _0x46d5a6['YIPwN']
                ]
            },
            {
                '_id': _0x46d5a6['jYuoY'],
                'roles': [_0x46d5a6['Kucct']]
            },
            {
                '_id': _0x46d5a6['DjVMP'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            },
            {
                '_id': _0x46d5a6['Fmzxu'],
                'roles': [
                    _0x46d5a6['FTiTU'],
                    _0x46d5a6['Kucct']
                ]
            }
        ];
    for (const _0x368015 of _0x16af12) {
        Permissions['create'](_0x368015['_id'], _0x368015['roles']);
    }
    const _0x21c007 = [
        {
            'name': _0x46d5a6['Kucct'],
            'scope': _0x46d5a6['fKIMT'],
            'description': _0x46d5a6['WVNDU']
        },
        {
            'name': _0x46d5a6['CeokK'],
            'scope': _0x46d5a6['gAfXZ'],
            'description': _0x46d5a6['DbmgR']
        },
        {
            'name': _0x46d5a6['upttH'],
            'scope': _0x46d5a6['gAfXZ'],
            'description': _0x46d5a6['EYOmv']
        },
        {
            'name': _0x46d5a6['YIPwN'],
            'scope': _0x46d5a6['gAfXZ'],
            'description': _0x46d5a6['PHBUn']
        },
        {
            'name': _0x46d5a6['NORrc'],
            'scope': _0x46d5a6['fKIMT'],
            'description': ''
        },
        {
            'name': _0x46d5a6['sYNvq'],
            'scope': _0x46d5a6['fKIMT'],
            'description': ''
        },
        {
            'name': _0x46d5a6['HMhHl'],
            'scope': _0x46d5a6['fKIMT'],
            'description': ''
        },
        {
            'name': _0x46d5a6['rMviW'],
            'scope': _0x46d5a6['fKIMT'],
            'description': ''
        },
        {
            'name': _0x46d5a6['VOtKz'],
            'scope': _0x46d5a6['fKIMT'],
            'description': ''
        },
        {
            'name': _0x46d5a6['eZfZc'],
            'scope': _0x46d5a6['fKIMT'],
            'description': _0x46d5a6['WosAx']
        },
        {
            'name': _0x46d5a6['FTiTU'],
            'scope': _0x46d5a6['fKIMT'],
            'description': _0x46d5a6['xqMzK']
        }
    ];
    for (const _0x35e36e of _0x21c007) {
        Roles['createOrUpdate'](_0x35e36e['name'], _0x35e36e['scope'], _0x35e36e['description'], !![], ![]);
    }
    const _0x38fccf = function (_0x1c6272) {
            const _0x257145 = {}, _0x1e8202 = { 'level': CONSTANTS['SETTINGS_LEVEL'] };
            return _0x1c6272 && (_0x1e8202['settingId'] = _0x1c6272), Permissions['find'](_0x1e8202)['fetch']()['forEach'](function (_0x2be1bc) {
                _0x257145[_0x2be1bc['_id']] = _0x2be1bc;
            }), _0x257145;
        }, _0x459f18 = function (_0x56c0f2, _0x29d30c) {
            const _0x550193 = _0x46d5a6['zJcmu'](getSettingPermissionId, _0x56c0f2['_id']), _0x23f86d = {
                    'level': CONSTANTS['SETTINGS_LEVEL'],
                    'settingId': _0x56c0f2['_id'],
                    'group': _0x56c0f2['group'],
                    'section': _0x56c0f2['section'],
                    'sorter': _0x56c0f2['sorter'],
                    'roles': []
                };
            _0x29d30c[_0x550193] && _0x29d30c[_0x550193]['roles'] && (_0x23f86d['roles'] = _0x29d30c[_0x550193]['roles']);
            _0x56c0f2['group'] && (_0x23f86d['groupPermissionId'] = _0x46d5a6['zJcmu'](getSettingPermissionId, _0x56c0f2['group']));
            _0x56c0f2['section'] && (_0x23f86d['sectionPermissionId'] = _0x46d5a6['NWQUt'](getSettingPermissionId, _0x56c0f2['section']));
            const _0x2763cd = Permissions['findOne']({
                '_id': _0x550193,
                ..._0x23f86d
            }, { 'fields': { '_id': 0x1 } });
            if (!_0x2763cd)
                try {
                    Permissions['upsert']({ '_id': _0x550193 }, { '$set': _0x23f86d });
                } catch (_0x3df272) {
                    !_0x3df272['message']['includes'](_0x46d5a6['gFYhi']) && Permissions['upsert']({ '_id': _0x550193 }, { '$set': _0x23f86d });
                }
            delete _0x29d30c[_0x550193];
        }, _0x5368ca = function () {
            const _0x506acd = {
                    'lEVQk': function (_0x166654, _0x59d7c0, _0x2020aa) {
                        return _0x46d5a6['SHrzr'](_0x166654, _0x59d7c0, _0x2020aa);
                    }
                }, _0xa8c22d = _0x46d5a6['tCvIw'](_0x38fccf);
            Settings['findNotHidden']()['fetch']()['forEach'](_0x9dab7e => {
                _0x506acd['lEVQk'](_0x459f18, _0x9dab7e, _0xa8c22d);
            });
            for (const _0x316970 in _0xa8c22d) {
                _0xa8c22d['hasOwnProperty'](_0x316970) && Permissions['remove']({ '_id': _0x316970 });
            }
        };
    _0x46d5a6['iwaHo'](_0x5368ca);
    const _0x5cf143 = function (_0x4f2c44) {
        const _0x26d918 = _0x46d5a6['HPVzh'](_0x38fccf, _0x4f2c44), _0x3c91e9 = Settings['findOneById'](_0x4f2c44);
        _0x3c91e9 && (!_0x3c91e9['hidden'] && _0x46d5a6['qOBQA'](_0x459f18, _0x3c91e9, _0x26d918));
    };
    settings['onload']('*', _0x5cf143);
});
