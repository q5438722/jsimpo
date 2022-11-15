'use strict';

const _0x66a4 = ['properties', 'conditions', 'isArray', 'oliUo', 'concat', 'PpgZa', 'mtYhl', 'IoWuT', 'rvRTF', 'properties.', 'UPWro', 'gPfEL', 'exports', '482817FfmUrr', '7wYerGu', '90719aUhrXc', '1533551hrDxqm', '914830BqcSWc', '858919imGoka', '1ZwELhB', '1383628wrlNZI', '449572skqvmn', 'lodash/fp', 'action', 'subject'];
const _0x3a2527 = _0x4613;

(function (_0x2d4d46, _0x4e6f14) {
    const _0x51f4bd = _0x4613;

    while (true) {
        try {
            const _0x46dc89 = -parseInt(_0x51f4bd(0xf5)) + -parseInt(_0x51f4bd(0xf6)) * -parseInt(_0x51f4bd(0xf7)) + parseInt(_0x51f4bd(0xf8)) + parseInt(_0x51f4bd(0xf9)) + parseInt(_0x51f4bd(0xfa)) * -parseInt(_0x51f4bd(0xfb)) + -parseInt(_0x51f4bd(0xfc)) + parseInt(_0x51f4bd(0xfd));

            if (_0x46dc89 === _0x4e6f14) break;else _0x2d4d46.push(_0x2d4d46.shift());
        } catch (_0x29c541) {
            _0x2d4d46.push(_0x2d4d46.shift());
        }
    }
})(_0x66a4, 807622);
function _0x4613(_0x2f2a4e, _0x24aa9d) {
    return _0x4613 = function (_0x414581, _0x1140f7) {
        _0x414581 = _0x414581 - 245;
        const _0x3c121e = _0x66a4[_0x414581];

        return _0x3c121e;
    }, _0x4613(_0x2f2a4e, _0x24aa9d);
}

var { pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge } = require(_0x3a2527(0xfe));

const permissionFields = ['id', _0x3a2527(0xff), _0x3a2527(0x100), _0x3a2527(0x101), _0x3a2527(0x102), 'role'];
const sanitizedPermissionFields = ['id', _0x3a2527(0xff), _0x3a2527(0x100), 'properties', _0x3a2527(0x102)];
const sanitizePermissionFields = pick(sanitizedPermissionFields);

const getDefaultPermission = () => ({
    'conditions': [],
    'properties': {},
    'subject': null
});

const addCondition = curry((_0x17c161, _0x1ad24e) => {
    const _0x3e3096 = _0x3a2527;
    const _0x4e1c95 = {
        'oliUo': function (_0x3af031, _0x5ce5d1) {
            return _0x3af031(_0x5ce5d1);
        },
        'chACf': function (_0x4ebab6, _0x27cd7d, _0x400f23, _0x2e7087) {
            return _0x4ebab6(_0x27cd7d, _0x400f23, _0x2e7087);
        },
        'PpgZa': 'conditions'
    };
    var { conditions: _0xc56219 } = _0x1ad24e;

    const _0x596810 = Array[_0x3e3096(0x103)](_0xc56219) ? _0x4e1c95[_0x3e3096(0x104)](uniq, _0xc56219[_0x3e3096(0x105)](_0x17c161)) : [_0x17c161];

    return _0x4e1c95.chACf(set, _0x4e1c95[_0x3e3096(0x106)], _0x596810, _0x1ad24e);
});
const removeCondition = curry((_0x255047, _0x2494dc) => {
    const _0x51a38e = _0x3a2527;
    const _0x2d31ef = {
        'mtYhl': function (_0x4c2bc6, _0x4cbadb, _0x1571ae, _0x1bfbc4) {
            return _0x4c2bc6(_0x4cbadb, _0x1571ae, _0x1bfbc4);
        },
        'IoWuT': _0x51a38e(0x102),
        'hSxVq': function (_0x1f0b25, _0x2ec080) {
            return _0x1f0b25(_0x2ec080);
        }
    };

    return _0x2d31ef[_0x51a38e(0x107)](set, _0x2d31ef[_0x51a38e(0x108)], remove(_0x2d31ef.hSxVq(eq, _0x255047), _0x2494dc[_0x51a38e(0x102)]), _0x2494dc);
});
const getProperty = curry((_0x187b14, _0x49634d) => get('properties.' + _0x187b14, _0x49634d));

const setProperty = (_0x25802e, _0x520480, _0x4fc63c) => {
    const _0x35312e = _0x3a2527;
    const _0xf360b8 = {
        'rvRTF': function (_0x13313e, _0x209fcc, _0x446f2d, _0x49b3c9) {
            return _0x13313e(_0x209fcc, _0x446f2d, _0x49b3c9);
        }
    };

    return _0xf360b8[_0x35312e(0x109)](set, _0x35312e(0x10a) + _0x25802e, _0x520480, _0x4fc63c);
};

const deleteProperty = (_0x23259a, _0x1e47d9) => omit(_0x3a2527(0x10a) + _0x23259a, _0x1e47d9);

const create = _0x168dfa => {
    const _0xce7708 = _0x3a2527;
    const _0x211c9f = {
        'UPWro': function (_0x5822b6, _0x120943, _0xaa4b79) {
            return _0x5822b6(_0x120943, _0xaa4b79);
        },
        'gPfEL': function (_0x115a32, _0x261b45) {
            return _0x115a32(_0x261b45);
        }
    };

    return _0x211c9f[_0xce7708(0x10b)](pipe, _0x211c9f[_0xce7708(0x10c)](pick, permissionFields), _0x211c9f[_0xce7708(0x10c)](merge, getDefaultPermission()))(_0x168dfa);
};

const sanitizeConditions = curry((_0x4fa3be, _0x2f42c4) => {
    const _0x4af502 = _0x3a2527;
    const _0x3d5e7d = {
        'GHIAU': function (_0x8c8863, _0x27ed72) {
            return _0x8c8863(_0x27ed72);
        }
    };

    if (!_0x3d5e7d.GHIAU(isArray, _0x2f42c4.conditions)) return _0x2f42c4;
    return _0x2f42c4[_0x4af502(0x102)].filter(_0x188745 => !_0x4fa3be.has(_0x188745)).reduce((_0x502400, _0x9b6939) => removeCondition(_0x9b6939, _0x502400), _0x2f42c4);
});

const toPermission = _0x294a64 => isArray(_0x294a64) ? map(create, _0x294a64) : create(_0x294a64);

module[_0x3a2527(0x10d)] = {
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
