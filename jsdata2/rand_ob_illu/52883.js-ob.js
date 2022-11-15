'use strict';

const _0xf2dc = ['3EEmSrA', '__esModule', 'dynamicRef', '../../compile/codegen', '../../compile/names', '../core/ref', '$dynamicRef', 'schema', 'valid', 'FuigL', '" only supports hash fragment reference', 'slice', 'allErrors', 'sPpfA', 'let', 'HDqND', 'dynamicAnchors', 'default', 'getProperty', 'wjFZl', 'eUryR', 'validateName', 'block', 'callRef', '143nezitC', '1371Qfrvwd', '157061FBgKzS', '4GgvPYQ', '331OfMjpG', '1321aTeEGr', '5FNyUUK', '1871QOLBqI', '712532tMSvOm', '7zagUeT', '48201uslHdO', '259248EAOMfK'];
const _0x5bd01a = _0x1563;

(function (_0x975912, _0x460a8e) {
    const _0x2d4dc6 = _0x1563;

    while (true) {
        try {
            const _0x560a4f = -parseInt(_0x2d4dc6(0x65)) * parseInt(_0x2d4dc6(0x66)) + -parseInt(_0x2d4dc6(0x67)) * -parseInt(_0x2d4dc6(0x68)) + parseInt(_0x2d4dc6(0x69)) * -parseInt(_0x2d4dc6(0x6a)) + -parseInt(_0x2d4dc6(0x6b)) * parseInt(_0x2d4dc6(0x6c)) + -parseInt(_0x2d4dc6(0x6d)) + -parseInt(_0x2d4dc6(0x6e)) * -parseInt(_0x2d4dc6(0x6f)) + -parseInt(_0x2d4dc6(0x70)) * -parseInt(_0x2d4dc6(0x71));

            if (_0x560a4f === _0x460a8e) break;else _0x975912.push(_0x975912.shift());
        } catch (_0x31ddff) {
            _0x975912.push(_0x975912.shift());
        }
    }
})(_0xf2dc, 388204);
function _0x1563(_0x2a3dca, _0x55bdee) {
    return _0x1563 = function (_0x5b1b86, _0x137eb4) {
        _0x5b1b86 = _0x5b1b86 - 101;
        const _0x55bb8f = _0xf2dc[_0x5b1b86];

        return _0x55bb8f;
    }, _0x1563(_0x2a3dca, _0x55bdee);
}
Object.defineProperty(exports, _0x5bd01a(0x72), { 'value': true }), exports[_0x5bd01a(0x73)] = void 0;

const codegen_1 = require(_0x5bd01a(0x74));

const names_1 = require(_0x5bd01a(0x75));

const ref_1 = require(_0x5bd01a(0x76));

const def = {
    'keyword': _0x5bd01a(0x77),
    'schemaType': 'string',
    'code': _0x1fbd66 => dynamicRef(_0x1fbd66, _0x1fbd66[_0x5bd01a(0x78)])
};

function dynamicRef(_0x4e8fc5, _0x442eab) {
    const _0x3a7793 = _0x5bd01a;
    const _0x198465 = {
        'wjFZl': function (_0x3e4fe9, _0x57066b, _0xe28040) {
            return _0x3e4fe9(_0x57066b, _0xe28040);
        },
        'eUryR': function (_0x342829, _0xe476c2, _0x4f4173) {
            return _0x342829(_0xe476c2, _0x4f4173);
        },
        'FuigL': function (_0x1a5b34, _0x135462) {
            return _0x1a5b34 !== _0x135462;
        },
        'sPpfA': function (_0x4cb384) {
            return _0x4cb384();
        },
        'HDqND': _0x3a7793(0x79)
    };
    var {
        gen: _0x778efc,
        keyword: _0x170e07,
        it: _0x498fac
    } = _0x4e8fc5;

    if (_0x198465[_0x3a7793(0x7a)](_0x442eab[0], '#')) throw new Error('"' + _0x170e07 + _0x3a7793(0x7b));

    const _0x2a937c = _0x442eab[_0x3a7793(0x7c)](1);

    if (_0x498fac[_0x3a7793(0x7d)]) _0x198465[_0x3a7793(0x7e)](_0x2ec4f2);else {
        const _0x13876d = _0x778efc[_0x3a7793(0x7f)](_0x198465[_0x3a7793(0x80)], false);

        _0x2ec4f2(_0x13876d), _0x4e8fc5.ok(_0x13876d);
    }
    function _0x2ec4f2(_0x4eeb0f) {
        const _0x596292 = _0x3a7793;

        if (_0x498fac.schemaEnv.root[_0x596292(0x81)][_0x2a937c]) {
            const _0x3e0979 = _0x778efc[_0x596292(0x7f)]('_v', codegen_1._`${names_1[_0x596292(0x82)][_0x596292(0x81)]}${codegen_1[_0x596292(0x83)](_0x2a937c)}`);

            _0x778efc.if(_0x3e0979, _0x198465[_0x596292(0x84)](_0x3aae55, _0x3e0979, _0x4eeb0f), _0x198465[_0x596292(0x85)](_0x3aae55, _0x498fac[_0x596292(0x86)], _0x4eeb0f));
        } else _0x198465.eUryR(_0x3aae55, _0x498fac.validateName, _0x4eeb0f)();
    }
    function _0x3aae55(_0x205231, _0x1cb974) {
        const _0x3b215f = _0x3a7793;

        return _0x1cb974 ? () => _0x778efc[_0x3b215f(0x87)](() => {
            const _0x168314 = _0x3b215f;

            ref_1[_0x168314(0x88)](_0x4e8fc5, _0x205231), _0x778efc[_0x168314(0x7f)](_0x1cb974, true);
        }) : () => ref_1[_0x3b215f(0x88)](_0x4e8fc5, _0x205231);
    }
}
exports[_0x5bd01a(0x73)] = dynamicRef, exports[_0x5bd01a(0x82)] = def;
