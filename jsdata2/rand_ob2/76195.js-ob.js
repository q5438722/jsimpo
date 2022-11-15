const _0x2736 = [
    'findOneById',
    'error-invalid-user',
    'Invalid\x20user',
    'RocketChat.authz.addUserRoles',
    'concat',
    'pluck',
    '_id',
    'isEmpty',
    'createOrUpdate',
    'addUserRoles',
    '346700lMHAQz',
    '276823ERuwPz',
    '8284hXwvRE',
    '41sImSJT',
    '188192cQAQKf',
    '206258MnWXcp',
    '96335bwLJeV',
    '395USSviY',
    '32cIqDOd'
];
(function (_0x35534f, _0x3a82e7) {
    const _0x1c393b = _0x16b5;
    while (!![]) {
        try {
            const _0xc9de40 = -parseInt(_0x1c393b(0x186)) + parseInt(_0x1c393b(0x187)) + -parseInt(_0x1c393b(0x188)) * -parseInt(_0x1c393b(0x189)) + -parseInt(_0x1c393b(0x18a)) + parseInt(_0x1c393b(0x18b)) + -parseInt(_0x1c393b(0x18c)) + parseInt(_0x1c393b(0x18d)) * -parseInt(_0x1c393b(0x18e));
            if (_0xc9de40 === _0x3a82e7)
                break;
            else
                _0x35534f['push'](_0x35534f['shift']());
        } catch (_0x39a5d1) {
            _0x35534f['push'](_0x35534f['shift']());
        }
    }
}(_0x2736, 0x2baaa));
import { Meteor } from 'meteor/meteor';
import _0x2ae9ac from 'underscore';
import { getRoles } from './getRoles';
function _0x16b5(_0x2a22f0, _0x7e69b4) {
    return _0x16b5 = function (_0x273630, _0x16b5ac) {
        _0x273630 = _0x273630 - 0x186;
        let _0x2c5f82 = _0x2736[_0x273630];
        return _0x2c5f82;
    }, _0x16b5(_0x2a22f0, _0x7e69b4);
}
import {
    Users,
    Roles
} from '../../../models';
export const addUserRoles = (_0x44f531, _0x472441, _0x3d27a6) => {
    const _0x488345 = _0x16b5;
    if (!_0x44f531 || !_0x472441)
        return ![];
    const _0x56eb4c = Users['db'][_0x488345(0x18f)](_0x44f531);
    if (!_0x56eb4c)
        throw new Meteor['Error'](_0x488345(0x190), _0x488345(0x191), { 'function': _0x488345(0x192) });
    _0x472441 = [][_0x488345(0x193)](_0x472441);
    const _0x2171f4 = _0x2ae9ac[_0x488345(0x194)](getRoles(), _0x488345(0x195)), _0xc09fd0 = _0x2ae9ac['difference'](_0x472441, _0x2171f4);
    if (!_0x2ae9ac[_0x488345(0x196)](_0xc09fd0))
        for (const _0x33c75c of _0xc09fd0) {
            Roles[_0x488345(0x197)](_0x33c75c);
        }
    return Roles[_0x488345(0x198)](_0x44f531, _0x472441, _0x3d27a6), !![];
};
