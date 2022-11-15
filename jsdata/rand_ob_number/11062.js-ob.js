'use strict';
const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require('lodash/fp'), permissionFields = [
        'id',
        'action',
        'subject',
        'properties',
        'conditions',
        'role'
    ], sanitizedPermissionFields = [
        'id',
        'action',
        'subject',
        'properties',
        'conditions'
    ], sanitizePermissionFields = pick(sanitizedPermissionFields), getDefaultPermission = () => ({
        'conditions': [],
        'properties': {},
        'subject': null
    }), addCondition = curry((_0x4a1684, _0x241b68) => {
        const {conditions: _0x3b70cd} = _0x241b68, _0x4cc0a5 = Array['isArray'](_0x3b70cd) ? uniq(_0x3b70cd['concat'](_0x4a1684)) : [_0x4a1684];
        return set('conditions', _0x4cc0a5, _0x241b68);
    }), removeCondition = curry((_0x515776, _0x3ee367) => {
        return set('conditions', remove(eq(_0x515776), _0x3ee367['conditions']), _0x3ee367);
    }), getProperty = curry((_0x21fcc7, _0x5df5fa) => get('properties.' + _0x21fcc7, _0x5df5fa)), setProperty = (_0x1cbdea, _0x2ff862, _0x53c9b1) => {
        return set('properties.' + _0x1cbdea, _0x2ff862, _0x53c9b1);
    }, deleteProperty = (_0x2c9730, _0x39c4b1) => omit('properties.' + _0x2c9730, _0x39c4b1), create = _0x40065c => {
        return pipe(pick(permissionFields), merge(getDefaultPermission()))(_0x40065c);
    }, sanitizeConditions = curry((_0x42d7f5, _0x39b35f) => {
        if (!isArray(_0x39b35f['conditions']))
            return _0x39b35f;
        return _0x39b35f['conditions']['filter'](_0x37496f => !_0x42d7f5['has'](_0x37496f))['reduce']((_0x13a9ce, _0x119f83) => removeCondition(_0x119f83, _0x13a9ce), _0x39b35f);
    }), toPermission = _0x119e1c => isArray(_0x119e1c) ? map(create, _0x119e1c) : create(_0x119e1c);
module['exports'] = {
    'addCondition': addCondition,
    'removeCondition': removeCondition,
    'create': create,
    'deleteProperty': deleteProperty,
    'permissionFields': permissionFields,
    'getProperty': getProperty,
    'sanitizedPermissionFields': sanitizedPermissionFields,
    'sanitizeConditions': sanitizeConditions,
    'sanitizePermissionFields': sanitizePermissionFields,
    'setProperty': setProperty,
    'toPermission': toPermission
};
