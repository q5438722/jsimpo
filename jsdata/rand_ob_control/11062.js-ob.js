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
    }), addCondition = curry((_0x408e46, _0x359729) => {
        const _0x3a0460 = {
                'wmlpr': function (_0xf98325, _0x17b206) {
                    return _0xf98325(_0x17b206);
                },
                'rLMdM': function (_0x4cc6e4, _0x20a8b5, _0x1b86fa, _0x47336f) {
                    return _0x4cc6e4(_0x20a8b5, _0x1b86fa, _0x47336f);
                },
                'jCmdz': 'conditions'
            }, {conditions: _0x5ee9f1} = _0x359729, _0x5a70ee = Array['isArray'](_0x5ee9f1) ? _0x3a0460['wmlpr'](uniq, _0x5ee9f1['concat'](_0x408e46)) : [_0x408e46];
        return _0x3a0460['rLMdM'](set, _0x3a0460['jCmdz'], _0x5a70ee, _0x359729);
    }), removeCondition = curry((_0x46afb0, _0x4f478a) => {
        const _0x5af556 = {
            'QbRBL': function (_0x48e65a, _0x37d798, _0x3a3ada, _0x297eee) {
                return _0x48e65a(_0x37d798, _0x3a3ada, _0x297eee);
            },
            'HpbnZ': 'conditions',
            'dyrnI': function (_0x502c69, _0x18aaf7, _0x5a19a3) {
                return _0x502c69(_0x18aaf7, _0x5a19a3);
            },
            'ahKhh': function (_0x3d1cce, _0x41dfd0) {
                return _0x3d1cce(_0x41dfd0);
            }
        };
        return _0x5af556['QbRBL'](set, _0x5af556['HpbnZ'], _0x5af556['dyrnI'](remove, _0x5af556['ahKhh'](eq, _0x46afb0), _0x4f478a['conditions']), _0x4f478a);
    }), getProperty = curry((_0x32718b, _0x546385) => get('properties.' + _0x32718b, _0x546385)), setProperty = (_0xdf0936, _0x50653e, _0x4643cc) => {
        const _0xb8dc59 = {
            'LtLXR': function (_0x30294b, _0x120cfa, _0x403f63, _0x221214) {
                return _0x30294b(_0x120cfa, _0x403f63, _0x221214);
            }
        };
        return _0xb8dc59['LtLXR'](set, 'properties.' + _0xdf0936, _0x50653e, _0x4643cc);
    }, deleteProperty = (_0x5acc8a, _0x11ff75) => omit('properties.' + _0x5acc8a, _0x11ff75), create = _0xdab457 => {
        const _0x5cb8f1 = {
            'ODdMc': function (_0x39525b, _0x12671e, _0x5c0be1) {
                return _0x39525b(_0x12671e, _0x5c0be1);
            },
            'cpYdA': function (_0x18fac7, _0x4f75a8) {
                return _0x18fac7(_0x4f75a8);
            },
            'ZdacH': function (_0x245dc7) {
                return _0x245dc7();
            }
        };
        return _0x5cb8f1['ODdMc'](pipe, _0x5cb8f1['cpYdA'](pick, permissionFields), _0x5cb8f1['cpYdA'](merge, _0x5cb8f1['ZdacH'](getDefaultPermission)))(_0xdab457);
    }, sanitizeConditions = curry((_0x3edb81, _0x2c7cf3) => {
        const _0x2c8e62 = {
            'PEOiE': function (_0x1330a0, _0x53bc2e) {
                return _0x1330a0(_0x53bc2e);
            }
        };
        if (!_0x2c8e62['PEOiE'](isArray, _0x2c7cf3['conditions']))
            return _0x2c7cf3;
        return _0x2c7cf3['conditions']['filter'](_0x2123a5 => !_0x3edb81['has'](_0x2123a5))['reduce']((_0xa4b414, _0x50ee9d) => removeCondition(_0x50ee9d, _0xa4b414), _0x2c7cf3);
    }), toPermission = _0x364173 => isArray(_0x364173) ? map(create, _0x364173) : create(_0x364173);
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
