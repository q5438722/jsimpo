'use strict';
const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require('lodash/fp');
const permissionFields = [
    'id',
    'action',
    'subject',
    'properties',
    'conditions',
    'role'
];
const sanitizedPermissionFields = [
    'id',
    'action',
    'subject',
    'properties',
    'conditions'
];
const sanitizePermissionFields = pick(sanitizedPermissionFields);
const getDefaultPermission = () => ({
    'conditions': [],
    'properties': {},
    'subject': null
});
const addCondition = curry((_0x34855d, _0x25df37) => {
    const {conditions} = _0x25df37;
    const _0x2cae0b = Array['isArray'](conditions) ? uniq(conditions['concat'](_0x34855d)) : [_0x34855d];
    return set('conditions', _0x2cae0b, _0x25df37);
});
const removeCondition = curry((_0x15fec6, _0x17ebe3) => {
    return set('conditions', remove(eq(_0x15fec6), _0x17ebe3['conditions']), _0x17ebe3);
});
const getProperty = curry((_0x58a433, _0x5d2ab3) => get('properties.' + _0x58a433, _0x5d2ab3));
const setProperty = (_0x2c5c20, _0x1657c6, _0x513915) => {
    return set('properties.' + _0x2c5c20, _0x1657c6, _0x513915);
};
const deleteProperty = (_0x3d5660, _0x4c340b) => omit('properties.' + _0x3d5660, _0x4c340b);
const create = _0x471d09 => {
    return pipe(pick(permissionFields), merge(getDefaultPermission()))(_0x471d09);
};
const sanitizeConditions = curry((_0x2ef847, _0x32e216) => {
    if (!isArray(_0x32e216['conditions'])) {
        return _0x32e216;
    }
    return _0x32e216['conditions']['filter'](_0x236126 => !_0x2ef847['has'](_0x236126))['reduce']((_0x3ea3f2, _0x23b644) => removeCondition(_0x23b644, _0x3ea3f2), _0x32e216);
});
const toPermission = _0x56d3c1 => isArray(_0x56d3c1) ? map(create, _0x56d3c1) : create(_0x56d3c1);
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