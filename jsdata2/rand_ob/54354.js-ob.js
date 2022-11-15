'use strict';
const _0x9440 = [
    'strict',
    'env',
    'Readable',
    'Writable',
    'assign',
    'createInternalRepl',
    'ifError',
    'terminal',
    'Expected\x20',
    'GPmSk',
    'strictEqual',
    'useColors',
    'kAbpr',
    '\x20with\x20',
    'CikVD',
    'keys',
    'close',
    'forEach',
    '43954IBXeCp',
    '207890TwAEXQ',
    '242842hyvvuR',
    '159193IzJfPz',
    '1zdDYao',
    '1KFeHqh',
    '93257TCPDBT',
    '812gcOfng',
    '18923rUtKen',
    '11bCckjJ',
    '../common',
    'internal/repl',
    'util',
    'repl',
    'dumb',
    'sloppy'
];
const _0x8fda20 = _0x4c35;
function _0x4c35(_0x1572b6, _0x6e6093) {
    return _0x4c35 = function (_0x3a50b8, _0x213302) {
        _0x3a50b8 = _0x3a50b8 - (-0x18f4 + 0x1 * -0x1edd + 0x3867);
        let _0x16fa6e = _0x9440[_0x3a50b8];
        return _0x16fa6e;
    }, _0x4c35(_0x1572b6, _0x6e6093);
}
(function (_0x375544, _0x347d6c) {
    const _0x170a96 = _0x4c35;
    while (!![]) {
        try {
            const _0x199a3e = -parseInt(_0x170a96(0x96)) + parseInt(_0x170a96(0x97)) + parseInt(_0x170a96(0x98)) + parseInt(_0x170a96(0x99)) * -parseInt(_0x170a96(0x9a)) + parseInt(_0x170a96(0x9b)) * parseInt(_0x170a96(0x9c)) + -parseInt(_0x170a96(0x9d)) + -parseInt(_0x170a96(0x9e)) * parseInt(_0x170a96(0x9f));
            if (_0x199a3e === _0x347d6c)
                break;
            else
                _0x375544['push'](_0x375544['shift']());
        } catch (_0x4193ec) {
            _0x375544['push'](_0x375544['shift']());
        }
    }
}(_0x9440, -0x1452d * 0x3 + -0x6d7 * -0x94 + 0x1de60));
require(_0x8fda20(0xa0));
const stream = require('stream'), REPL = require(_0x8fda20(0xa1)), assert = require('assert'), inspect = require(_0x8fda20(0xa2))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require(_0x8fda20(0xa3)), tests = [
        {
            'env': {},
            'expected': {
                'terminal': !![],
                'useColors': !![]
            }
        },
        {
            'env': { 'NODE_DISABLE_COLORS': '1' },
            'expected': {
                'terminal': !![],
                'useColors': ![]
            }
        },
        {
            'env': { 'NODE_NO_READLINE': '1' },
            'expected': {
                'terminal': ![],
                'useColors': ![]
            }
        },
        {
            'env': { 'TERM': _0x8fda20(0xa4) },
            'expected': {
                'terminal': !![],
                'useColors': ![]
            }
        },
        {
            'env': {
                'NODE_NO_READLINE': '1',
                'NODE_DISABLE_COLORS': '1'
            },
            'expected': {
                'terminal': ![],
                'useColors': ![]
            }
        },
        {
            'env': { 'NODE_NO_READLINE': '0' },
            'expected': {
                'terminal': !![],
                'useColors': !![]
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x8fda20(0xa5) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x8fda20(0xa6) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0x35aef0) {
    const _0x24fa2b = _0x8fda20, _0x5c60c1 = {
            'GPmSk': function (_0x1f7e54, _0x1ccd9b) {
                return _0x1f7e54(_0x1ccd9b);
            },
            'kAbpr': function (_0x856284, _0x395ccc) {
                return _0x856284(_0x395ccc);
            },
            'CikVD': function (_0x1550d6, _0x2594f3) {
                return _0x1550d6(_0x2594f3);
            }
        }, _0x394df6 = _0x35aef0[_0x24fa2b(0xa7)], _0xa522b0 = _0x35aef0['expected'], _0x5c632c = {
            'terminal': !![],
            'input': new stream[(_0x24fa2b(0xa8))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x24fa2b(0xa9))]({
                'write'() {
                }
            })
        };
    Object[_0x24fa2b(0xaa)](process['env'], _0x394df6), REPL[_0x24fa2b(0xab)](process['env'], _0x5c632c, function (_0x28f7a3, _0x364be9) {
        const _0x2ac39d = _0x24fa2b;
        assert[_0x2ac39d(0xac)](_0x28f7a3), assert['strictEqual'](_0x364be9[_0x2ac39d(0xad)], _0xa522b0[_0x2ac39d(0xad)], _0x2ac39d(0xae) + inspect(_0xa522b0) + '\x20with\x20' + _0x5c60c1[_0x2ac39d(0xaf)](inspect, _0x394df6)), assert[_0x2ac39d(0xb0)](_0x364be9[_0x2ac39d(0xb1)], _0xa522b0[_0x2ac39d(0xb1)], _0x2ac39d(0xae) + _0x5c60c1[_0x2ac39d(0xb2)](inspect, _0xa522b0) + _0x2ac39d(0xb3) + _0x5c60c1['CikVD'](inspect, _0x394df6)), assert[_0x2ac39d(0xb0)](_0x364be9['replMode'], _0xa522b0['replMode'] || REPL_MODE_SLOPPY, _0x2ac39d(0xae) + _0x5c60c1[_0x2ac39d(0xb4)](inspect, _0xa522b0) + _0x2ac39d(0xb3) + inspect(_0x394df6));
        for (const _0x5463cc of Object[_0x2ac39d(0xb5)](_0x394df6)) {
            delete process[_0x2ac39d(0xa7)][_0x5463cc];
        }
        _0x364be9[_0x2ac39d(0xb6)]();
    });
}
tests[_0x8fda20(0xb7)](run);
