function _0x1869(_0x30d3f8, _0x266a1d) {
    return _0x1869 = function (_0x161772, _0x186962) {
        _0x161772 = _0x161772 - 205;
        let _0x58cdef = _0x1617[_0x161772];
        return _0x58cdef;
    }, _0x1869(_0x30d3f8, _0x266a1d);
}
const {pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge} = require(_0x192dd4(216)), permissionFields = [
        'id',
        'action',
        _0x192dd4(217),
        _0x192dd4(218),
        _0x192dd4(219),
        _0x192dd4(220)
    ], sanitizedPermissionFields = [
        'id',
        _0x192dd4(221),
        _0x192dd4(217),
        'properties',
        _0x192dd4(219)
    ], sanitizePermissionFields = pick(sanitizedPermissionFields), getDefaultPermission = () => ({
        'conditions': [],
        'properties': {},
        'subject': null
    }), addCondition = curry((_0x5bc399, _0x10ee84) => {
        const _0x21a9c5 = _0x192dd4, {conditions: _0x252b49} = _0x10ee84, _0x4343f2 = Array[_0x21a9c5(222)](_0x252b49) ? uniq(_0x252b49[_0x21a9c5(223)](_0x5bc399)) : [_0x5bc399];
        return set(_0x21a9c5(219), _0x4343f2, _0x10ee84);
    }), removeCondition = curry((_0x3c6eea, _0x29d7cb) => {
        const _0x1dcee0 = _0x192dd4;
        return set(_0x1dcee0(219), remove(eq(_0x3c6eea), _0x29d7cb['conditions']), _0x29d7cb);
    }), getProperty = curry((_0x147c85, _0x9ab5d9) => get(_0x192dd4(224) + _0x147c85, _0x9ab5d9)), setProperty = (_0x426dcc, _0x3325ef, _0x11974c) => {
        return set('properties.' + _0x426dcc, _0x3325ef, _0x11974c);
    }, deleteProperty = (_0x46b219, _0x2f7965) => omit(_0x192dd4(224) + _0x46b219, _0x2f7965), create = _0x547b31 => {
        return pipe(pick(permissionFields), merge(getDefaultPermission()))(_0x547b31);
    }, sanitizeConditions = curry((_0x4cf57b, _0x246ae0) => {
        const _0xde71fd = _0x192dd4;
        if (!isArray(_0x246ae0[_0xde71fd(219)]))
            return _0x246ae0;
        return _0x246ae0[_0xde71fd(219)][_0xde71fd(225)](_0x3b2819 => !_0x4cf57b[_0xde71fd(226)](_0x3b2819))[_0xde71fd(227)]((_0x474863, _0xf0dca3) => removeCondition(_0xf0dca3, _0x474863), _0x246ae0);
    }), toPermission = _0x4173cd => isArray(_0x4173cd) ? map(create, _0x4173cd) : create(_0x4173cd);
module[_0x192dd4(228)] = {
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