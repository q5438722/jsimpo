const _0x1319 = ['jjDWw', 'sHeRr', 'emdxm', 'EakTO', 'XJeNs', 'concat', '168493bIOhiU', '1dPFErX', '205408YoRuuG', '56688ORnHRH', '2907dntOUL', '159OkOEta', '1103JBIHhV', '3voWrxQ', '46411yQPhIn', '3aHNDBV', '83849MjnfpA', 'should clone sources when `customizer` returns `undefined`', 'should overwrite primitives with source object clones', 'should pop the stack of sources for each sibling property', 'WPwyY', 'deepStrictEqual', 'ejABt', 'gXZxD', 'should defer to `customizer` for non `undefined` results', 'OaQha', 'isArray', 'yPTMC', 'xnoPl', 'constructor', 'name', 'Stack'];

function _0x1aff(_0x5a4a0d, _0x3dfbeb) {
    return _0x1aff = function (_0x23807f, _0x26238e) {
        _0x23807f = _0x23807f - 181;
        const _0x585b7a = _0x1319[_0x23807f];

        return _0x585b7a;
    }, _0x1aff(_0x5a4a0d, _0x3dfbeb);
}
(function (_0x588f6e, _0xfe5cd) {
    const _0x31b5bc = _0x1aff;

    while (true) {
        try {
            const _0x54cdd5 = parseInt(_0x31b5bc(0xb5)) * parseInt(_0x31b5bc(0xb6)) + parseInt(_0x31b5bc(0xb7)) + -parseInt(_0x31b5bc(0xb8)) + parseInt(_0x31b5bc(0xb9)) + -parseInt(_0x31b5bc(0xba)) * -parseInt(_0x31b5bc(0xbb)) + parseInt(_0x31b5bc(0xbc)) * -parseInt(_0x31b5bc(0xbd)) + parseInt(_0x31b5bc(0xbe)) * -parseInt(_0x31b5bc(0xbf));

            if (_0x54cdd5 === _0xfe5cd) break;else _0x588f6e.push(_0x588f6e.shift());
        } catch (_0x12855a) {
            _0x588f6e.push(_0x588f6e.shift());
        }
    }
})(_0x1319, 104717);
import _0x1aaaac from 'assert';
import _0x3b638c from 'lodash';
import { noop, identity, isNpm, mapCaches } from './utils.js';
import _0x310ac0 from '../mergeWith.js';
import _0x9ec2db from '../last.js';
describe('mergeWith', function () {
    const _0x3b80a4 = _0x1aff;
    const _0x5488e6 = {
        'WPwyY': function (_0x262bb7, _0x3edc92, _0x1bdd73, _0x7dfff5) {
            return _0x262bb7(_0x3edc92, _0x1bdd73, _0x7dfff5);
        },
        'ejABt': function (_0xf545cd, _0x9f661c, _0x270d2d, _0x8f51d1, _0x3e4e35) {
            return _0xf545cd(_0x9f661c, _0x270d2d, _0x8f51d1, _0x3e4e35);
        },
        'OaQha': function (_0x2fd587, _0x3e709d, _0x38a118, _0x5f06dd) {
            return _0x2fd587(_0x3e709d, _0x38a118, _0x5f06dd);
        },
        'xnoPl': function (_0xe92d8f, _0x1520af) {
            return _0xe92d8f == _0x1520af;
        },
        'jjDWw': function (_0x1c9ec3, _0x6a0f4b) {
            return _0x1c9ec3 instanceof _0x6a0f4b;
        },
        'XJeNs': function (_0xf97cf8, _0x31ccb8, _0x1257a6, _0x59ebae) {
            return _0xf97cf8(_0x31ccb8, _0x1257a6, _0x59ebae);
        },
        'TYUXb': 'should handle merging when `customizer` returns `undefined`',
        'fAnVT': _0x3b80a4(0xc0),
        'gXZxD': function (_0x5b348a, _0x45855d, _0x2ff402) {
            return _0x5b348a(_0x45855d, _0x2ff402);
        },
        'yPTMC': 'should provide `stack` to `customizer`',
        'sHeRr': function (_0x31eb33, _0x5708df, _0x21694c) {
            return _0x31eb33(_0x5708df, _0x21694c);
        },
        'emdxm': _0x3b80a4(0xc1),
        'EakTO': _0x3b80a4(0xc2)
    };

    it(_0x5488e6.TYUXb, function () {
        const _0x28ecfe = _0x3b80a4;

        var _0x2fbfd3 = _0x5488e6[_0x28ecfe(0xc3)](_0x310ac0, {
            'a': {
                'b': [1, 1]
            }
        }, { 'a': { 'b': [0] } }, noop);

        _0x1aaaac[_0x28ecfe(0xc4)](_0x2fbfd3, {
            'a': {
                'b': [0, 1]
            }
        }), _0x2fbfd3 = _0x310ac0([], [undefined], identity), _0x1aaaac.deepStrictEqual(_0x2fbfd3, [undefined]);
    }), it(_0x5488e6.fAnVT, function () {
        const _0x533a98 = _0x3b80a4;
        const _0x2495dc = { 'a': { 'b': { 'c': 0x1 } } };
        const _0x591a62 = { 'a': { 'b': { 'd': 0x2 } } };

        _0x5488e6[_0x533a98(0xc5)](_0x310ac0, {}, _0x2495dc, _0x591a62, noop), _0x1aaaac.deepStrictEqual(_0x2495dc.a.b, { 'c': 0x1 });
    }), _0x5488e6[_0x3b80a4(0xc6)](it, _0x3b80a4(0xc7), function () {
        const _0x215a5b = _0x3b80a4;

        const _0x2eb5a1 = _0x5488e6[_0x215a5b(0xc8)](_0x310ac0, {
            'a': {
                'b': [0, 1]
            }
        }, { 'a': { 'b': [2] } }, function (_0x27ee55, _0x3e6efc) {
            const _0x3decdd = _0x215a5b;

            return _0x3b638c[_0x3decdd(0xc9)](_0x27ee55) ? _0x27ee55.concat(_0x3e6efc) : undefined;
        });

        _0x1aaaac.deepStrictEqual(_0x2eb5a1, {
            'a': {
                'b': [0, 1, 2]
            }
        });
    }), _0x5488e6.gXZxD(it, _0x5488e6[_0x3b80a4(0xca)], function () {
        const _0x43a63a = _0x3b80a4;

        var _0x261967;

        _0x310ac0({}, { 'a': { 'b': 0x2 } }, function () {
            _0x261967 = _0x9ec2db(arguments);
        }), _0x1aaaac.ok(isNpm ? _0x5488e6[_0x43a63a(0xcb)](_0x261967[_0x43a63a(0xcc)][_0x43a63a(0xcd)], _0x43a63a(0xce)) : _0x5488e6[_0x43a63a(0xcf)](_0x261967, mapCaches[_0x43a63a(0xce)]));
    }), _0x5488e6[_0x3b80a4(0xd0)](it, _0x5488e6[_0x3b80a4(0xd1)], function () {
        const _0x46222f = _0x3b80a4;

        const _0x577156 = _0x5488e6.XJeNs(_0x310ac0, { 'a': 0x0 }, { 'a': { 'b': ['c'] } }, function (_0x4f25af, _0x2c2996) {
            const _0x29e67b = _0x1aff;

            return _0x3b638c[_0x29e67b(0xc9)](_0x4f25af) ? _0x4f25af.concat(_0x2c2996) : undefined;
        });

        _0x1aaaac[_0x46222f(0xc4)](_0x577156, { 'a': { 'b': ['c'] } });
    }), _0x5488e6[_0x3b80a4(0xd0)](it, _0x5488e6[_0x3b80a4(0xd2)], function () {
        const _0x4faf48 = _0x3b80a4;
        const _0x480400 = ['b', 'c'];
        const _0x59a2f0 = { 'a': ['a'] };
        const _0xbff480 = {
            'a': _0x480400,
            'b': _0x480400
        };

        const _0x3d9423 = _0x5488e6[_0x4faf48(0xd3)](_0x310ac0, _0x59a2f0, _0xbff480, function (_0x3ee422, _0x17f21c) {
            const _0x2e2cc8 = _0x4faf48;

            return _0x3b638c[_0x2e2cc8(0xc9)](_0x3ee422) ? _0x3ee422[_0x2e2cc8(0xd4)](_0x17f21c) : undefined;
        });

        _0x1aaaac.deepStrictEqual(_0x3d9423, {
            'a': ['a', 'b', 'c'],
            'b': ['b', 'c']
        });
    });
});
