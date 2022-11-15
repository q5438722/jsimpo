const _0xc367 = [
    '174892Ayftqf',
    '156167VBJcOH',
    '113340BdFZlA',
    '278827wxkPpE',
    '1XQickg',
    '110323pgccIc',
    '1ByNkLu',
    '54499kxrGup',
    '2AQDHWl',
    '1dsDXdI',
    '421737iOAMrP',
    'ldapEnterprise',
    'isArray',
    'string',
    'find',
    'Users',
    'fetch',
    'map',
    '_id',
    'values',
    'every',
    'includes',
    'Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Roles.\x20The\x20structure\x20is\x20invalid,\x20the\x20structure\x20should\x20be\x20an\x20object\x20like:\x20{key:\x20LdapRole,\x20value:\x20[An\x20array\x20of\x20rocket.chat\x20roles]}',
    'LDAP_Query_To_Get_User_Groups',
    'options',
    'User_Search_Scope',
    'sub',
    'Search_Size_Limit',
    'get',
    'LDAP_Query_To_Get_User_Teams',
    'replace',
    'searchAllSync',
    'BaseDN',
    'filter',
    'flat',
    'keys',
    'length',
    'The\x20LDAP\x20user\x20has\x20no\x20role,\x20so\x20we\x20set\x20the\x20default\x20role\x20value',
    'LDAP_Default_Role_To_User',
    'error',
    'The\x20following\x20LDAP\x20roles\x20is/are\x20not\x20mapped\x20in\x20Rocket.Chat:\x20\x22',
    'join',
    '\x22.\x20Because\x20it,\x20we\x20set\x20the\x20default\x20LDAP\x20role.',
    'reduce',
    'The\x20following\x20LDAP\x20teams\x20are\x20not\x20mapped\x20in\x20Rocket.Chat:\x20\x22',
    'users',
    'listByNames',
    'listTeamsBySubscriberUserId',
    'insertMemberOnTeams',
    'removeMemberFromTeams',
    'await',
    'LDAP_Roles_To_Rocket_Chat_Roles',
    'parse',
    'LDAP_Groups_To_Rocket_Chat_Teams'
];
const _0x24b689 = _0x2a83;
(function (_0x366eef, _0x416974) {
    const _0x13e7ba = _0x2a83;
    while (!![]) {
        try {
            const _0x262ecb = parseInt(_0x13e7ba(0x195)) + parseInt(_0x13e7ba(0x196)) + -parseInt(_0x13e7ba(0x197)) + parseInt(_0x13e7ba(0x198)) * -parseInt(_0x13e7ba(0x199)) + -parseInt(_0x13e7ba(0x19a)) * parseInt(_0x13e7ba(0x19b)) + parseInt(_0x13e7ba(0x19c)) * -parseInt(_0x13e7ba(0x19d)) + parseInt(_0x13e7ba(0x19e)) * parseInt(_0x13e7ba(0x19f));
            if (_0x262ecb === _0x416974)
                break;
            else
                _0x366eef['push'](_0x366eef['shift']());
        } catch (_0x3a01ad) {
            _0x366eef['push'](_0x366eef['shift']());
        }
    }
}(_0xc367, 0x227fc));
import { Meteor } from 'meteor/meteor';
import { Roles } from '../../../../app/models';
import { Logger } from '../../../../app/logger';
import { settings } from '../../../../app/settings';
function _0x2a83(_0x5e5fcb, _0x31ee0d) {
    return _0x2a83 = function (_0xc367af, _0x2a8370) {
        _0xc367af = _0xc367af - 0x195;
        let _0x31361e = _0xc367[_0xc367af];
        return _0x31361e;
    }, _0x2a83(_0x5e5fcb, _0x31ee0d);
}
import { Team } from '../../../../server/sdk';
const logger = new Logger(_0x24b689(0x1a0)), mustBeAnArrayOfStrings = _0x39bace => Array[_0x24b689(0x1a1)](_0x39bace) && _0x39bace['length'] && _0x39bace['every'](_0x597074 => typeof _0x597074 === _0x24b689(0x1a2)), validateRoleMapping = _0x13b41d => {
        const _0x202054 = _0x24b689, _0x454b72 = Roles[_0x202054(0x1a3)]({ 'scope': _0x202054(0x1a4) })[_0x202054(0x1a5)]()[_0x202054(0x1a6)](_0x334b1d => _0x334b1d[_0x202054(0x1a7)]), _0x15597e = Object[_0x202054(0x1a8)](_0x13b41d), _0x5b0d4c = _0x15597e[_0x202054(0x1a9)](_0xa08751 => _0xa08751[_0x202054(0x1a9)](_0x2a7ea5 => _0x454b72[_0x202054(0x1aa)](_0x2a7ea5)));
        if (!_0x5b0d4c)
            throw new Error('Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Roles.\x20There\x20is\x20some\x20invalid\x20Rocket\x20Chat\x20Role.');
    }, validateLDAPRolesMappingStructure = _0x1d72f8 => {
        const _0x1c9fac = _0x24b689, _0x4459da = Object['values'](_0x1d72f8), _0x51706e = _0x4459da[_0x1c9fac(0x1a9)](mustBeAnArrayOfStrings);
        if (!_0x51706e)
            throw new Error(_0x1c9fac(0x1ab));
    }, validateLDAPTeamsMappingStructure = _0x5ce5bd => {
        const _0xdb684f = _0x24b689, _0x370ef2 = Object[_0xdb684f(0x1a8)](_0x5ce5bd), _0x1ff6c3 = _0x370ef2[_0xdb684f(0x1a9)](mustBeAnArrayOfStrings);
        if (!_0x1ff6c3)
            throw new Error('Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Teams.\x20The\x20structure\x20is\x20invalid,\x20the\x20structure\x20should\x20be\x20an\x20object\x20like:\x20{key:\x20LdapTeam,\x20value:\x20[An\x20array\x20of\x20rocket.chat\x20teams]}');
    };
export const getLdapRolesByUsername = (_0x1df823, _0x579ca0) => {
    const _0x19dca5 = _0x24b689, _0x3a5bf0 = {
            'filter': settings['get'](_0x19dca5(0x1ac))['replace'](/#{username}/g, _0x1df823),
            'scope': _0x579ca0[_0x19dca5(0x1ad)][_0x19dca5(0x1ae)] || _0x19dca5(0x1af),
            'sizeLimit': _0x579ca0[_0x19dca5(0x1ad)][_0x19dca5(0x1b0)]
        }, _0x4c937b = _0x30a296 => _0x30a296['filter'](_0x4318da => _0x4318da && _0x4318da['ou'])[_0x19dca5(0x1a6)](_0x54a080 => _0x54a080['ou']), _0x380191 = _0x579ca0['searchAllSync'](_0x579ca0[_0x19dca5(0x1ad)]['BaseDN'], _0x3a5bf0);
    return Array['isArray'](_0x380191) ? _0x4c937b(_0x380191) : [];
};
export const getLdapTeamsByUsername = (_0x516b37, _0x9f2185) => {
    const _0x6b407e = _0x24b689, _0x305359 = {
            'filter': settings[_0x6b407e(0x1b1)](_0x6b407e(0x1b2))[_0x6b407e(0x1b3)](/#{username}/g, _0x516b37),
            'scope': _0x9f2185[_0x6b407e(0x1ad)]['User_Search_Scope'] || _0x6b407e(0x1af),
            'sizeLimit': _0x9f2185[_0x6b407e(0x1ad)]['Search_Size_Limit']
        }, _0x17c09a = _0x9f2185[_0x6b407e(0x1b4)](_0x9f2185['options'][_0x6b407e(0x1b5)], _0x305359);
    if (!Array[_0x6b407e(0x1a1)](_0x17c09a))
        return [];
    return _0x17c09a[_0x6b407e(0x1b6)](_0x45c986 => _0x45c986 && _0x45c986['ou'])[_0x6b407e(0x1a6)](_0x4236a7 => _0x4236a7['ou'])[_0x6b407e(0x1b7)]();
};
export const getRocketChatRolesByLdapRoles = (_0x57200f, _0xb18f74) => {
    const _0x53fb05 = _0x24b689, _0x3a653c = Object[_0x53fb05(0x1b8)](_0x57200f);
    if (!_0xb18f74[_0x53fb05(0x1b9)])
        return logger['error'](_0x53fb05(0x1ba)), [settings['get'](_0x53fb05(0x1bb))];
    const _0x55b834 = _0xb18f74[_0x53fb05(0x1b6)](_0x164971 => !_0x3a653c['includes'](_0x164971)), _0x359a02 = (_0x53fab6, _0x358927) => _0x53fab6['concat'](_0x57200f[_0x358927]), _0x52b9d8 = (_0x12776b, _0x349a53) => _0x12776b['includes'](_0x349a53) ? _0x12776b : _0x12776b['concat'](_0x349a53);
    if (_0x55b834[_0x53fb05(0x1b9)])
        return logger[_0x53fb05(0x1bc)](_0x53fb05(0x1bd) + _0x55b834[_0x53fb05(0x1be)](',\x20') + _0x53fb05(0x1bf)), [settings[_0x53fb05(0x1b1)](_0x53fb05(0x1bb))];
    return _0xb18f74[_0x53fb05(0x1c0)](_0x359a02, [])[_0x53fb05(0x1c0)](_0x52b9d8, []);
};
export const getRocketChatTeamsByLdapTeams = (_0x18cd7d, _0x4f0774) => {
    const _0x4075cb = _0x24b689, _0x387449 = Object['keys'](_0x18cd7d), _0x1d7279 = _0x4f0774[_0x4075cb(0x1b6)](_0xcb353 => _0x387449[_0x4075cb(0x1aa)](_0xcb353));
    if (_0x1d7279['length'] < _0x4f0774[_0x4075cb(0x1b9)]) {
        const _0xe8445 = _0x4f0774['filter'](_0x59f23d => !_0x387449[_0x4075cb(0x1aa)](_0x59f23d));
        logger[_0x4075cb(0x1bc)](_0x4075cb(0x1c1) + _0xe8445[_0x4075cb(0x1be)](',\x20') + '\x22.');
    }
    if (!_0x1d7279[_0x4075cb(0x1b9)])
        return [];
    return [...new Set(_0x1d7279['map'](_0x152803 => _0x18cd7d[_0x152803])[_0x4075cb(0x1b7)]())];
};
export const updateUserUsingMappedLdapRoles = (_0x447a8b, _0x9cc9c0) => {
    const _0x1c5b3f = _0x24b689;
    Meteor[_0x1c5b3f(0x1c2)]['update']({ '_id': _0x447a8b }, { '$set': { 'roles': _0x9cc9c0 } });
};
async function updateUserUsingMappedLdapTeamsAsync(_0x197e37, _0x233910, _0x8612c2) {
    const _0x1dbc80 = _0x24b689, _0x2b15d8 = [...new Set(Object[_0x1dbc80(0x1a8)](_0x8612c2)['flat']())], _0x51abc3 = await Team[_0x1dbc80(0x1c3)](_0x2b15d8, {
            'projection': {
                '_id': 0x1,
                'name': 0x1
            }
        }), _0x3a94c4 = _0x51abc3[_0x1dbc80(0x1b6)](({name: _0x15a744}) => _0x233910[_0x1dbc80(0x1aa)](_0x15a744))[_0x1dbc80(0x1a6)](({_id: _0x3f8c19}) => _0x3f8c19), _0x4ca0af = _0x51abc3['filter'](({name: _0x249564}) => !_0x233910[_0x1dbc80(0x1aa)](_0x249564))[_0x1dbc80(0x1a6)](({_id: _0x474cdb}) => _0x474cdb), _0x36b9d6 = await Team[_0x1dbc80(0x1c4)](_0x197e37, { 'projection': { 'teamId': 0x1 } }), _0x330c81 = await _0x36b9d6[_0x1dbc80(0x1a6)](({teamId: _0xf0f145}) => _0xf0f145), _0x5d36b8 = _0x330c81[_0x1dbc80(0x1b6)](_0x210afc => _0x4ca0af[_0x1dbc80(0x1aa)](_0x210afc)), _0x3f9634 = _0x3a94c4[_0x1dbc80(0x1b6)](_0x17184a => !_0x330c81[_0x1dbc80(0x1aa)](_0x17184a));
    await Team[_0x1dbc80(0x1c5)](_0x197e37, _0x3f9634), await Team[_0x1dbc80(0x1c6)](_0x197e37, _0x5d36b8);
}
export const updateUserUsingMappedLdapTeams = (_0x572500, _0x3e8be4, _0x63d1e8) => Promise[_0x24b689(0x1c7)](updateUserUsingMappedLdapTeamsAsync(_0x572500, _0x3e8be4, _0x63d1e8));
export const validateLDAPRolesMappingChanges = () => {
    const _0xb4c85f = _0x24b689;
    settings[_0xb4c85f(0x1b1)](_0xb4c85f(0x1c8), (_0x393176, _0x1ae4ec) => {
        const _0x5eb429 = _0xb4c85f;
        try {
            if (_0x1ae4ec) {
                const _0x536d30 = JSON[_0x5eb429(0x1c9)](_0x1ae4ec);
                validateLDAPRolesMappingStructure(_0x536d30), validateRoleMapping(_0x536d30);
            }
        } catch (_0x271a17) {
            logger[_0x5eb429(0x1bc)](_0x271a17);
        }
    });
};
export const validateLDAPTeamsMappingChanges = () => {
    const _0x2ec832 = _0x24b689;
    settings[_0x2ec832(0x1b1)](_0x2ec832(0x1ca), (_0x467ac5, _0xaa6a13) => {
        const _0x3fe92a = _0x2ec832;
        try {
            if (_0xaa6a13) {
                const _0x2c272f = JSON['parse'](_0xaa6a13);
                validateLDAPTeamsMappingStructure(_0x2c272f);
            }
        } catch (_0x311709) {
            logger[_0x3fe92a(0x1bc)](_0x311709);
        }
    });
};
