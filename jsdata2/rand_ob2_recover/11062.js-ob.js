const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require(_0x39525a(170)), permissionFields = [
        'id',
        _0x39525a(171),
        _0x39525a(172),
        _0x39525a(173),
        _0x39525a(174),
        _0x39525a(175)
    ], sanitizedPermissionFields = [
        'id',
        _0x39525a(171),
        _0x39525a(172),
        _0x39525a(173),
        'conditions'
    ], sanitizePermissionFields = pick(sanitizedPermissionFields), getDefaultPermission = () => ({
        'conditions': [],
        'properties': {},
        'subject': null
    }), addCondition = curry((_0x1f9019, _0x589d38) => {
        const _0xa353ff = _0x39525a, {conditions: _0x4fdcd9} = _0x589d38, _0x327d8a = Array[_0xa353ff(176)](_0x4fdcd9) ? uniq(_0x4fdcd9[_0xa353ff(177)](_0x1f9019)) : [_0x1f9019];
        return set(_0xa353ff(174), _0x327d8a, _0x589d38);
    }), removeCondition = curry((_0xc83fff, _0x278914) => {
        const _0x4196b3 = _0x39525a;
        return set(_0x4196b3(174), remove(eq(_0xc83fff), _0x278914[_0x4196b3(174)]), _0x278914);
    }), getProperty = curry((_0x2fe0ca, _0x2fbead) => get(_0x39525a(178) + _0x2fe0ca, _0x2fbead)), setProperty = (_0x11a945, _0x8d4881, _0x51142a) => {
        const _0x3b2242 = _0x39525a;
        return set(_0x3b2242(178) + _0x11a945, _0x8d4881, _0x51142a);
    }, deleteProperty = (_0x463f62, _0x42b5f3) => omit('properties.' + _0x463f62, _0x42b5f3), create = _0x31808f => {
        return pipe(pick(permissionFields), merge(getDefaultPermission()))(_0x31808f);
    }, sanitizeConditions = curry((_0x53b658, _0x239c95) => {
        const _0x39fdf5 = _0x39525a;
        if (!isArray(_0x239c95[_0x39fdf5(174)]))
            return _0x239c95;
        return _0x239c95[_0x39fdf5(174)][_0x39fdf5(179)](_0x21ba07 => !_0x53b658[_0x39fdf5(180)](_0x21ba07))[_0x39fdf5(181)]((_0x1aaa11, _0x17bd29) => removeCondition(_0x17bd29, _0x1aaa11), _0x239c95);
    }), toPermission = _0x570780 => isArray(_0x570780) ? map(create, _0x570780) : create(_0x570780);
module[_0x39525a(182)] = {
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