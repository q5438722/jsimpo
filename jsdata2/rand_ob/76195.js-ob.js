const _0x2e2e = [
    'concat',
    'lvmWb',
    'ylLMV',
    'difference',
    'isEmpty',
    'createOrUpdate',
    'addUserRoles',
    '1649LcebZO',
    '53nxRuFu',
    '1CEIxhJ',
    '169189eszttc',
    '755512zGxOCm',
    '192587XxrHea',
    '2XqskNp',
    '289934HJxSPL',
    '391576znpMLZ',
    '99119BFlsKO',
    '11GWIYXx',
    'error-invalid-user',
    'RocketChat.authz.addUserRoles',
    '_id',
    'frRIa',
    'findOneById',
    'Error',
    'fYUvM',
    'PppCA'
];
(function (_0x2de453, _0x4ed91d) {
    const _0x185972 = _0x1b09;
    while (!![]) {
        try {
            const _0x17b283 = parseInt(_0x185972(0x17e)) * parseInt(_0x185972(0x17f)) + parseInt(_0x185972(0x180)) * parseInt(_0x185972(0x181)) + parseInt(_0x185972(0x182)) + -parseInt(_0x185972(0x183)) * -parseInt(_0x185972(0x184)) + -parseInt(_0x185972(0x185)) + parseInt(_0x185972(0x186)) + -parseInt(_0x185972(0x187)) * parseInt(_0x185972(0x188));
            if (_0x17b283 === _0x4ed91d)
                break;
            else
                _0x2de453['push'](_0x2de453['shift']());
        } catch (_0x43afc8) {
            _0x2de453['push'](_0x2de453['shift']());
        }
    }
}(_0x2e2e, 0xd7b * 0x6b + -0x23ea8 * 0x4 + 0x26515 * 0x4));
import { Meteor } from 'meteor/meteor';
import _0x4cffbe from 'underscore';
import { getRoles } from './getRoles';
import {
    Users,
    Roles
} from '../../../models';
function _0x1b09(_0x953eb4, _0x16510e) {
    return _0x1b09 = function (_0x566db1, _0x145dcb) {
        _0x566db1 = _0x566db1 - (-0x192b + -0x13a0 + 0x29 * 0x121);
        let _0x96bdf7 = _0x2e2e[_0x566db1];
        return _0x96bdf7;
    }, _0x1b09(_0x953eb4, _0x16510e);
}
export const addUserRoles = (_0x47d987, _0x27e4fb, _0x4cb45c) => {
    const _0x55a38b = _0x1b09, _0x302934 = {
            'frRIa': function (_0x13c5e4, _0xfd09cb) {
                return _0x13c5e4 || _0xfd09cb;
            },
            'VcAwd': _0x55a38b(0x189),
            'fYUvM': 'Invalid\x20user',
            'PppCA': _0x55a38b(0x18a),
            'lvmWb': function (_0x1d32a0) {
                return _0x1d32a0();
            },
            'ylLMV': _0x55a38b(0x18b)
        };
    if (_0x302934[_0x55a38b(0x18c)](!_0x47d987, !_0x27e4fb))
        return ![];
    const _0x57e0a1 = Users['db'][_0x55a38b(0x18d)](_0x47d987);
    if (!_0x57e0a1)
        throw new Meteor[(_0x55a38b(0x18e))](_0x302934['VcAwd'], _0x302934[_0x55a38b(0x18f)], { 'function': _0x302934[_0x55a38b(0x190)] });
    _0x27e4fb = [][_0x55a38b(0x191)](_0x27e4fb);
    const _0x5313bc = _0x4cffbe['pluck'](_0x302934[_0x55a38b(0x192)](getRoles), _0x302934[_0x55a38b(0x193)]), _0xeb0c4d = _0x4cffbe[_0x55a38b(0x194)](_0x27e4fb, _0x5313bc);
    if (!_0x4cffbe[_0x55a38b(0x195)](_0xeb0c4d))
        for (const _0x5ddb11 of _0xeb0c4d) {
            Roles[_0x55a38b(0x196)](_0x5ddb11);
        }
    return Roles[_0x55a38b(0x197)](_0x47d987, _0x27e4fb, _0x4cb45c), !![];
};
