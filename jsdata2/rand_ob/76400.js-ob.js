const _0x5b2c = [
    'Search_Size_Limit',
    'searchAllSync',
    'isArray',
    'WQbjN',
    'LDAP_Query_To_Get_User_Teams',
    'get',
    'ZIIfs',
    'User_Search_Scope',
    'BaseDN',
    'filter',
    'flat',
    'The\x20LDAP\x20user\x20has\x20no\x20role,\x20so\x20we\x20set\x20the\x20default\x20role\x20value',
    'error',
    'hbtKm',
    'LDAP_Default_Role_To_User',
    'concat',
    'The\x20following\x20LDAP\x20roles\x20is/are\x20not\x20mapped\x20in\x20Rocket.Chat:\x20\x22',
    'join',
    '\x22.\x20Because\x20it,\x20we\x20set\x20the\x20default\x20LDAP\x20role.',
    'reduce',
    'keys',
    'AfaQE',
    'update',
    'listByNames',
    'insertMemberOnTeams',
    'await',
    'parse',
    'KlYqv',
    'LDAP_Groups_To_Rocket_Chat_Teams',
    'HOxyH',
    'oXGHs',
    '1063696iFyEeM',
    '1044727SHfrGX',
    '25485bzkkGk',
    '18tzQwZj',
    '519626UYzvkF',
    '1qSHvpr',
    '1997IFRizI',
    '425Djdiwp',
    '571916lMPItB',
    '2xoOTSu',
    '3970507tpZQIs',
    'ldapEnterprise',
    'length',
    'every',
    'string',
    'Users',
    'Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Roles.\x20There\x20is\x20some\x20invalid\x20Rocket\x20Chat\x20Role.',
    'find',
    'pdrey',
    'fetch',
    'map',
    'values',
    'includes',
    'Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Roles.\x20The\x20structure\x20is\x20invalid,\x20the\x20structure\x20should\x20be\x20an\x20object\x20like:\x20{key:\x20LdapRole,\x20value:\x20[An\x20array\x20of\x20rocket.chat\x20roles]}',
    'LqucJ',
    'iHihj',
    'LDAP_Query_To_Get_User_Groups',
    'sub',
    'replace',
    'options',
    'AXEjg'
];
const _0x379aa1 = _0x281a;
(function (_0x1266bd, _0x211e41) {
    const _0x31b97d = _0x281a;
    while (!![]) {
        try {
            const _0x23e062 = -parseInt(_0x31b97d(0x92)) + -parseInt(_0x31b97d(0x93)) + parseInt(_0x31b97d(0x94)) * -parseInt(_0x31b97d(0x95)) + -parseInt(_0x31b97d(0x96)) * parseInt(_0x31b97d(0x97)) + parseInt(_0x31b97d(0x98)) * parseInt(_0x31b97d(0x99)) + -parseInt(_0x31b97d(0x9a)) * parseInt(_0x31b97d(0x9b)) + parseInt(_0x31b97d(0x9c));
            if (_0x23e062 === _0x211e41)
                break;
            else
                _0x1266bd['push'](_0x1266bd['shift']());
        } catch (_0x55dffe) {
            _0x1266bd['push'](_0x1266bd['shift']());
        }
    }
}(_0x5b2c, 0x4220 + -0x63a23 * -0x1 + -0x13f85 * -0x2));
import { Meteor } from 'meteor/meteor';
import { Roles } from '../../../../app/models';
import { Logger } from '../../../../app/logger';
import { settings } from '../../../../app/settings';
function _0x281a(_0x182509, _0x285fa5) {
    return _0x281a = function (_0x5d611b, _0x2b6a00) {
        _0x5d611b = _0x5d611b - (-0x1 * 0x1f3f + 0x18f6 + 0x6db);
        let _0x37456c = _0x5b2c[_0x5d611b];
        return _0x37456c;
    }, _0x281a(_0x182509, _0x285fa5);
}
import { Team } from '../../../../server/sdk';
const logger = new Logger(_0x379aa1(0x9d)), mustBeAnArrayOfStrings = _0x16c6ac => Array['isArray'](_0x16c6ac) && _0x16c6ac[_0x379aa1(0x9e)] && _0x16c6ac[_0x379aa1(0x9f)](_0x33e7a1 => typeof _0x33e7a1 === _0x379aa1(0xa0)), validateRoleMapping = _0x25578d => {
        const _0x529052 = _0x379aa1, _0x3d8270 = {
                'pdrey': _0x529052(0xa1),
                'dvhbR': _0x529052(0xa2)
            }, _0xe0d3c5 = Roles[_0x529052(0xa3)]({ 'scope': _0x3d8270[_0x529052(0xa4)] })[_0x529052(0xa5)]()[_0x529052(0xa6)](_0xab66a5 => _0xab66a5['_id']), _0x5087e3 = Object[_0x529052(0xa7)](_0x25578d), _0x2c646e = _0x5087e3['every'](_0x40765e => _0x40765e[_0x529052(0x9f)](_0x38b399 => _0xe0d3c5[_0x529052(0xa8)](_0x38b399)));
        if (!_0x2c646e)
            throw new Error(_0x3d8270['dvhbR']);
    }, validateLDAPRolesMappingStructure = _0x27aef0 => {
        const _0x3195fa = _0x379aa1, _0x53197c = { 'LqucJ': _0x3195fa(0xa9) }, _0x1172ed = Object['values'](_0x27aef0), _0x766ae6 = _0x1172ed[_0x3195fa(0x9f)](mustBeAnArrayOfStrings);
        if (!_0x766ae6)
            throw new Error(_0x53197c[_0x3195fa(0xaa)]);
    }, validateLDAPTeamsMappingStructure = _0x41d1e2 => {
        const _0x4e8105 = _0x379aa1, _0x221cd1 = { 'iHihj': 'Please\x20verify\x20your\x20mapping\x20for\x20LDAP\x20X\x20RocketChat\x20Teams.\x20The\x20structure\x20is\x20invalid,\x20the\x20structure\x20should\x20be\x20an\x20object\x20like:\x20{key:\x20LdapTeam,\x20value:\x20[An\x20array\x20of\x20rocket.chat\x20teams]}' }, _0x1b48df = Object['values'](_0x41d1e2), _0x1df602 = _0x1b48df['every'](mustBeAnArrayOfStrings);
        if (!_0x1df602)
            throw new Error(_0x221cd1[_0x4e8105(0xab)]);
    };
export const getLdapRolesByUsername = (_0x24fc80, _0x1a0181) => {
    const _0xb7dd83 = _0x379aa1, _0x2c5753 = {
            'zQpRI': _0xb7dd83(0xac),
            'AXEjg': _0xb7dd83(0xad),
            'WQbjN': function (_0x5b0675, _0x1e0f89) {
                return _0x5b0675(_0x1e0f89);
            }
        }, _0x281d48 = {
            'filter': settings['get'](_0x2c5753['zQpRI'])[_0xb7dd83(0xae)](/#{username}/g, _0x24fc80),
            'scope': _0x1a0181[_0xb7dd83(0xaf)]['User_Search_Scope'] || _0x2c5753[_0xb7dd83(0xb0)],
            'sizeLimit': _0x1a0181[_0xb7dd83(0xaf)][_0xb7dd83(0xb1)]
        }, _0x17a06c = _0x4b6b04 => _0x4b6b04['filter'](_0xe0dda3 => _0xe0dda3 && _0xe0dda3['ou'])['map'](_0x5b13b3 => _0x5b13b3['ou']), _0x2b5b48 = _0x1a0181[_0xb7dd83(0xb2)](_0x1a0181[_0xb7dd83(0xaf)]['BaseDN'], _0x281d48);
    return Array[_0xb7dd83(0xb3)](_0x2b5b48) ? _0x2c5753[_0xb7dd83(0xb4)](_0x17a06c, _0x2b5b48) : [];
};
export const getLdapTeamsByUsername = (_0x3762e9, _0x3bbc76) => {
    const _0xbcd473 = _0x379aa1, _0x310c03 = { 'ZIIfs': _0xbcd473(0xb5) }, _0x256b1c = {
            'filter': settings[_0xbcd473(0xb6)](_0x310c03[_0xbcd473(0xb7)])[_0xbcd473(0xae)](/#{username}/g, _0x3762e9),
            'scope': _0x3bbc76[_0xbcd473(0xaf)][_0xbcd473(0xb8)] || _0xbcd473(0xad),
            'sizeLimit': _0x3bbc76['options']['Search_Size_Limit']
        }, _0x3cc660 = _0x3bbc76[_0xbcd473(0xb2)](_0x3bbc76[_0xbcd473(0xaf)][_0xbcd473(0xb9)], _0x256b1c);
    if (!Array[_0xbcd473(0xb3)](_0x3cc660))
        return [];
    return _0x3cc660[_0xbcd473(0xba)](_0x3253ea => _0x3253ea && _0x3253ea['ou'])[_0xbcd473(0xa6)](_0xd78046 => _0xd78046['ou'])[_0xbcd473(0xbb)]();
};
export const getRocketChatRolesByLdapRoles = (_0x88c7d6, _0x1c201c) => {
    const _0x14baab = _0x379aa1, _0x3e0367 = { 'hbtKm': _0x14baab(0xbc) }, _0x10758d = Object['keys'](_0x88c7d6);
    if (!_0x1c201c[_0x14baab(0x9e)])
        return logger[_0x14baab(0xbd)](_0x3e0367[_0x14baab(0xbe)]), [settings[_0x14baab(0xb6)](_0x14baab(0xbf))];
    const _0xb60512 = _0x1c201c[_0x14baab(0xba)](_0x5aacb6 => !_0x10758d[_0x14baab(0xa8)](_0x5aacb6)), _0x3a11e8 = (_0x364a7f, _0x5189f3) => _0x364a7f[_0x14baab(0xc0)](_0x88c7d6[_0x5189f3]), _0x3f236e = (_0x283ba3, _0x40ce59) => _0x283ba3['includes'](_0x40ce59) ? _0x283ba3 : _0x283ba3[_0x14baab(0xc0)](_0x40ce59);
    if (_0xb60512[_0x14baab(0x9e)])
        return logger[_0x14baab(0xbd)](_0x14baab(0xc1) + _0xb60512[_0x14baab(0xc2)](',\x20') + _0x14baab(0xc3)), [settings[_0x14baab(0xb6)](_0x14baab(0xbf))];
    return _0x1c201c[_0x14baab(0xc4)](_0x3a11e8, [])[_0x14baab(0xc4)](_0x3f236e, []);
};
export const getRocketChatTeamsByLdapTeams = (_0x148218, _0x34385d) => {
    const _0x250f0b = _0x379aa1, _0x33ba1c = {
            'AfaQE': function (_0x3df51b, _0x15f4a2) {
                return _0x3df51b < _0x15f4a2;
            }
        }, _0x2d9572 = Object[_0x250f0b(0xc5)](_0x148218), _0xa51d54 = _0x34385d[_0x250f0b(0xba)](_0x34d0eb => _0x2d9572['includes'](_0x34d0eb));
    if (_0x33ba1c[_0x250f0b(0xc6)](_0xa51d54[_0x250f0b(0x9e)], _0x34385d[_0x250f0b(0x9e)])) {
        const _0x4dbf9f = _0x34385d[_0x250f0b(0xba)](_0x1b6f6e => !_0x2d9572[_0x250f0b(0xa8)](_0x1b6f6e));
        logger[_0x250f0b(0xbd)]('The\x20following\x20LDAP\x20teams\x20are\x20not\x20mapped\x20in\x20Rocket.Chat:\x20\x22' + _0x4dbf9f['join'](',\x20') + '\x22.');
    }
    if (!_0xa51d54[_0x250f0b(0x9e)])
        return [];
    return [...new Set(_0xa51d54[_0x250f0b(0xa6)](_0x588978 => _0x148218[_0x588978])[_0x250f0b(0xbb)]())];
};
export const updateUserUsingMappedLdapRoles = (_0x3ddcf6, _0x2c383c) => {
    const _0x5cc91f = _0x379aa1;
    Meteor['users'][_0x5cc91f(0xc7)]({ '_id': _0x3ddcf6 }, { '$set': { 'roles': _0x2c383c } });
};
async function updateUserUsingMappedLdapTeamsAsync(_0xf1d4c1, _0x2d2f03, _0x10cf66) {
    const _0x3027f8 = _0x379aa1, _0x425cee = [...new Set(Object[_0x3027f8(0xa7)](_0x10cf66)['flat']())], _0x4f4964 = await Team[_0x3027f8(0xc8)](_0x425cee, {
            'projection': {
                '_id': 0x1,
                'name': 0x1
            }
        }), _0x1cd0c8 = _0x4f4964[_0x3027f8(0xba)](({name: _0x5dca36}) => _0x2d2f03[_0x3027f8(0xa8)](_0x5dca36))[_0x3027f8(0xa6)](({_id: _0x4a17be}) => _0x4a17be), _0xb87319 = _0x4f4964[_0x3027f8(0xba)](({name: _0x4674b1}) => !_0x2d2f03[_0x3027f8(0xa8)](_0x4674b1))[_0x3027f8(0xa6)](({_id: _0x2698ab}) => _0x2698ab), _0x273b77 = await Team['listTeamsBySubscriberUserId'](_0xf1d4c1, { 'projection': { 'teamId': 0x1 } }), _0x54fb57 = await _0x273b77['map'](({teamId: _0x166cba}) => _0x166cba), _0x23fdbb = _0x54fb57[_0x3027f8(0xba)](_0x347b3b => _0xb87319['includes'](_0x347b3b)), _0x4507a3 = _0x1cd0c8[_0x3027f8(0xba)](_0x3d94cb => !_0x54fb57[_0x3027f8(0xa8)](_0x3d94cb));
    await Team[_0x3027f8(0xc9)](_0xf1d4c1, _0x4507a3), await Team['removeMemberFromTeams'](_0xf1d4c1, _0x23fdbb);
}
export const updateUserUsingMappedLdapTeams = (_0x273024, _0x12ae82, _0x1c5dc0) => Promise[_0x379aa1(0xca)](updateUserUsingMappedLdapTeamsAsync(_0x273024, _0x12ae82, _0x1c5dc0));
export const validateLDAPRolesMappingChanges = () => {
    const _0x329d5a = _0x379aa1, _0x383de0 = {
            'nItjO': function (_0x294919, _0x421945) {
                return _0x294919(_0x421945);
            },
            'KlYqv': function (_0x56def1, _0x7ecfa8) {
                return _0x56def1(_0x7ecfa8);
            },
            'aYELK': 'LDAP_Roles_To_Rocket_Chat_Roles'
        };
    settings[_0x329d5a(0xb6)](_0x383de0['aYELK'], (_0x5d6d27, _0x327b1e) => {
        const _0x338cd2 = _0x329d5a;
        try {
            if (_0x327b1e) {
                const _0x2d6ce4 = JSON[_0x338cd2(0xcb)](_0x327b1e);
                _0x383de0['nItjO'](validateLDAPRolesMappingStructure, _0x2d6ce4), _0x383de0[_0x338cd2(0xcc)](validateRoleMapping, _0x2d6ce4);
            }
        } catch (_0x148068) {
            logger[_0x338cd2(0xbd)](_0x148068);
        }
    });
};
export const validateLDAPTeamsMappingChanges = () => {
    const _0xbe48a4 = _0x379aa1, _0x30b952 = {
            'oXGHs': function (_0x159892, _0x1bcea3) {
                return _0x159892(_0x1bcea3);
            },
            'HOxyH': _0xbe48a4(0xcd)
        };
    settings['get'](_0x30b952[_0xbe48a4(0xce)], (_0x1fd80f, _0x55d362) => {
        const _0x982bc5 = _0xbe48a4;
        try {
            if (_0x55d362) {
                const _0x3b6c2f = JSON[_0x982bc5(0xcb)](_0x55d362);
                _0x30b952[_0x982bc5(0xcf)](validateLDAPTeamsMappingStructure, _0x3b6c2f);
            }
        } catch (_0x291c52) {
            logger[_0x982bc5(0xbd)](_0x291c52);
        }
    });
};
