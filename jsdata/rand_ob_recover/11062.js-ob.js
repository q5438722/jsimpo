const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require(_0x5ee281(204)), permissionFields = [
        'id',
        _0x5ee281(205),
        _0x5ee281(206),
        'properties',
        _0x5ee281(207),
        'role'
    ], sanitizedPermissionFields = [
        'id',
        'action',
        _0x5ee281(206),
        _0x5ee281(208),
        _0x5ee281(207)
    ], sanitizePermissionFields = pick(sanitizedPermissionFields), getDefaultPermission = () => ({
        'conditions': [],
        'properties': {},
        'subject': null
    }), addCondition = curry((_0x1810af, _0x4d506f) => {
        const _0x4bb54e = _0x5ee281, _0x1cfe5b = { 'XXTMv': 'conditions' }, {conditions: _0x28e0a9} = _0x4d506f, _0x52feda = Array[_0x4bb54e(209)](_0x28e0a9) ? uniq(_0x28e0a9['concat'](_0x1810af)) : [_0x1810af];
        return set(_0x1cfe5b['XXTMv'], _0x52feda, _0x4d506f);
    }), removeCondition = curry((_0x1aa16f, _0x30c65a) => {
        const _0x5c22dc = _0x5ee281, _0x44a9b0 = {
                'JDHTw': function (_0x1057b4, _0x161a03, _0x542599, _0x48f8d0) {
                    return _0x1057b4(_0x161a03, _0x542599, _0x48f8d0);
                },
                'dUYwl': 'conditions',
                'zEdvJ': function (_0x228c7f, _0xca51da, _0x16fe30) {
                    return _0x228c7f(_0xca51da, _0x16fe30);
                },
                'gpVQW': function (_0x43489e, _0x512461) {
                    return _0x43489e(_0x512461);
                }
            };
        return _0x44a9b0[_0x5c22dc(210)](set, _0x44a9b0['dUYwl'], _0x44a9b0['zEdvJ'](remove, _0x44a9b0['gpVQW'](eq, _0x1aa16f), _0x30c65a[_0x5c22dc(207)]), _0x30c65a);
    }), getProperty = curry((_0x5b648b, _0x3bd27a) => get(_0x5ee281(211) + _0x5b648b, _0x3bd27a)), setProperty = (_0x1038f2, _0x3ec129, _0x3a387c) => {
        const _0x4d19b0 = _0x5ee281, _0x65eef9 = {
                'MDBYR': function (_0x45b4ef, _0x52dbc8, _0x587745, _0x19d01d) {
                    return _0x45b4ef(_0x52dbc8, _0x587745, _0x19d01d);
                }
            };
        return _0x65eef9[_0x4d19b0(212)](set, _0x4d19b0(211) + _0x1038f2, _0x3ec129, _0x3a387c);
    }, deleteProperty = (_0x185e42, _0x236c26) => omit(_0x5ee281(211) + _0x185e42, _0x236c26), create = _0x31ada8 => {
        const _0x153262 = _0x5ee281, _0x3d6ccb = {
                'rCBOO': function (_0x48a1a5, _0x44c31b) {
                    return _0x48a1a5(_0x44c31b);
                },
                'Xhpon': function (_0x390a42) {
                    return _0x390a42();
                }
            };
        return pipe(_0x3d6ccb[_0x153262(213)](pick, permissionFields), _0x3d6ccb[_0x153262(213)](merge, _0x3d6ccb[_0x153262(214)](getDefaultPermission)))(_0x31ada8);
    }, sanitizeConditions = curry((_0x29e279, _0x3e7262) => {
        const _0x3578b3 = _0x5ee281;
        if (!isArray(_0x3e7262[_0x3578b3(207)]))
            return _0x3e7262;
        return _0x3e7262[_0x3578b3(207)][_0x3578b3(215)](_0x331567 => !_0x29e279[_0x3578b3(216)](_0x331567))[_0x3578b3(217)]((_0x384990, _0x2499e4) => removeCondition(_0x2499e4, _0x384990), _0x3e7262);
    }), toPermission = _0x51c098 => isArray(_0x51c098) ? map(create, _0x51c098) : create(_0x51c098);
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