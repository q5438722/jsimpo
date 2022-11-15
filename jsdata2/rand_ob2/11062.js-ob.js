'use strict';
const _0x1fdd = [
    'action',
    'subject',
    'properties',
    'conditions',
    'role',
    'isArray',
    'concat',
    'properties.',
    'filter',
    'has',
    'reduce',
    'exports',
    '523547mFnuIH',
    '375615SdMBcA',
    '6ZEZJPJ',
    '19046tDjIHP',
    '503109kgdYOn',
    '1578CWOsUF',
    '304tTxbhM',
    '128964LjRaRK',
    '2afeoqO',
    '225041sXWvQj',
    'lodash/fp'
];
function _0x5d23(_0x438e1d, _0x54e6dd) {
    return _0x5d23 = function (_0x1fdd1b, _0x5d23af) {
        _0x1fdd1b = _0x1fdd1b - 0xa0;
        let _0x393afa = _0x1fdd[_0x1fdd1b];
        return _0x393afa;
    }, _0x5d23(_0x438e1d, _0x54e6dd);
}
const _0x39525a = _0x5d23;
(function (_0x3b35fb, _0x3dd773) {
    const _0x4b5551 = _0x5d23;
    while (!![]) {
        try {
            const _0x2b5886 = -parseInt(_0x4b5551(0xa0)) + parseInt(_0x4b5551(0xa1)) + -parseInt(_0x4b5551(0xa2)) * -parseInt(_0x4b5551(0xa3)) + -parseInt(_0x4b5551(0xa4)) + parseInt(_0x4b5551(0xa5)) * parseInt(_0x4b5551(0xa6)) + -parseInt(_0x4b5551(0xa7)) + -parseInt(_0x4b5551(0xa8)) * -parseInt(_0x4b5551(0xa9));
            if (_0x2b5886 === _0x3dd773)
                break;
            else
                _0x3b35fb['push'](_0x3b35fb['shift']());
        } catch (_0x4c2a1a) {
            _0x3b35fb['push'](_0x3b35fb['shift']());
        }
    }
}(_0x1fdd, 0x40781));
const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require(_0x39525a(0xaa)), permissionFields = [
        'id',
        _0x39525a(0xab),
        _0x39525a(0xac),
        _0x39525a(0xad),
        _0x39525a(0xae),
        _0x39525a(0xaf)
    ], sanitizedPermissionFields = [
        'id',
        _0x39525a(0xab),
        _0x39525a(0xac),
        _0x39525a(0xad),
        'conditions'
    ], sanitizePermissionFields = pick(sanitizedPermissionFields), getDefaultPermission = () => ({
        'conditions': [],
        'properties': {},
        'subject': null
    }), addCondition = curry((_0x1f9019, _0x589d38) => {
        const _0xa353ff = _0x39525a, {conditions: _0x4fdcd9} = _0x589d38, _0x327d8a = Array[_0xa353ff(0xb0)](_0x4fdcd9) ? uniq(_0x4fdcd9[_0xa353ff(0xb1)](_0x1f9019)) : [_0x1f9019];
        return set(_0xa353ff(0xae), _0x327d8a, _0x589d38);
    }), removeCondition = curry((_0xc83fff, _0x278914) => {
        const _0x4196b3 = _0x39525a;
        return set(_0x4196b3(0xae), remove(eq(_0xc83fff), _0x278914[_0x4196b3(0xae)]), _0x278914);
    }), getProperty = curry((_0x2fe0ca, _0x2fbead) => get(_0x39525a(0xb2) + _0x2fe0ca, _0x2fbead)), setProperty = (_0x11a945, _0x8d4881, _0x51142a) => {
        const _0x3b2242 = _0x39525a;
        return set(_0x3b2242(0xb2) + _0x11a945, _0x8d4881, _0x51142a);
    }, deleteProperty = (_0x463f62, _0x42b5f3) => omit('properties.' + _0x463f62, _0x42b5f3), create = _0x31808f => {
        return pipe(pick(permissionFields), merge(getDefaultPermission()))(_0x31808f);
    }, sanitizeConditions = curry((_0x53b658, _0x239c95) => {
        const _0x39fdf5 = _0x39525a;
        if (!isArray(_0x239c95[_0x39fdf5(0xae)]))
            return _0x239c95;
        return _0x239c95[_0x39fdf5(0xae)][_0x39fdf5(0xb3)](_0x21ba07 => !_0x53b658[_0x39fdf5(0xb4)](_0x21ba07))[_0x39fdf5(0xb5)]((_0x1aaa11, _0x17bd29) => removeCondition(_0x17bd29, _0x1aaa11), _0x239c95);
    }), toPermission = _0x570780 => isArray(_0x570780) ? map(create, _0x570780) : create(_0x570780);
module[_0x39525a(0xb6)] = {
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
