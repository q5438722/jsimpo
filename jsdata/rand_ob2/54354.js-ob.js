'use strict';
const _0x9f6c = [
    'useColors',
    '\x20with\x20',
    'replMode',
    'keys',
    'close',
    'forEach',
    '141537KiVgoV',
    '232882BvAEDZ',
    '12153JEztnS',
    '39190LePSHN',
    '1qXVdLn',
    '71556OFPRwg',
    '147KjmoIq',
    '1042LjipHU',
    '433516IfHzgm',
    'internal/repl',
    'util',
    'sloppy',
    'strict',
    'expected',
    'Readable',
    'Writable',
    'env',
    'createInternalRepl',
    'ifError',
    'strictEqual',
    'terminal',
    'Expected\x20'
];
const _0x1df655 = _0x3c87;
(function (_0x20dee0, _0x505988) {
    const _0x580a43 = _0x3c87;
    while (!![]) {
        try {
            const _0x2c9360 = -parseInt(_0x580a43(0x1e9)) + -parseInt(_0x580a43(0x1ea)) + -parseInt(_0x580a43(0x1eb)) + -parseInt(_0x580a43(0x1ec)) * -parseInt(_0x580a43(0x1ed)) + -parseInt(_0x580a43(0x1ee)) + -parseInt(_0x580a43(0x1ef)) * -parseInt(_0x580a43(0x1f0)) + parseInt(_0x580a43(0x1f1));
            if (_0x2c9360 === _0x505988)
                break;
            else
                _0x20dee0['push'](_0x20dee0['shift']());
        } catch (_0xe647d0) {
            _0x20dee0['push'](_0x20dee0['shift']());
        }
    }
}(_0x9f6c, 0x28f48));
require('../common');
const stream = require('stream'), REPL = require(_0x1df655(0x1f2)), assert = require('assert'), inspect = require(_0x1df655(0x1f3))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require('repl'), tests = [
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
            'env': { 'TERM': 'dumb' },
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
            'env': { 'NODE_REPL_MODE': _0x1df655(0x1f4) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x1df655(0x1f5) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0x596536) {
    const _0x2320c1 = _0x1df655, _0x12ed98 = _0x596536['env'], _0x15ec6a = _0x596536[_0x2320c1(0x1f6)], _0x3de093 = {
            'terminal': !![],
            'input': new stream[(_0x2320c1(0x1f7))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x2320c1(0x1f8))]({
                'write'() {
                }
            })
        };
    Object['assign'](process[_0x2320c1(0x1f9)], _0x12ed98), REPL[_0x2320c1(0x1fa)](process[_0x2320c1(0x1f9)], _0x3de093, function (_0x497995, _0x4c489d) {
        const _0x4fde86 = _0x2320c1;
        assert[_0x4fde86(0x1fb)](_0x497995), assert[_0x4fde86(0x1fc)](_0x4c489d[_0x4fde86(0x1fd)], _0x15ec6a['terminal'], _0x4fde86(0x1fe) + inspect(_0x15ec6a) + '\x20with\x20' + inspect(_0x12ed98)), assert[_0x4fde86(0x1fc)](_0x4c489d[_0x4fde86(0x1ff)], _0x15ec6a[_0x4fde86(0x1ff)], _0x4fde86(0x1fe) + inspect(_0x15ec6a) + _0x4fde86(0x200) + inspect(_0x12ed98)), assert['strictEqual'](_0x4c489d[_0x4fde86(0x201)], _0x15ec6a[_0x4fde86(0x201)] || REPL_MODE_SLOPPY, _0x4fde86(0x1fe) + inspect(_0x15ec6a) + '\x20with\x20' + inspect(_0x12ed98));
        for (const _0x2096c3 of Object[_0x4fde86(0x202)](_0x12ed98)) {
            delete process[_0x4fde86(0x1f9)][_0x2096c3];
        }
        _0x4c489d[_0x4fde86(0x203)]();
    });
}
function _0x3c87(_0x5e7e1e, _0x5d73d5) {
    return _0x3c87 = function (_0x9f6c91, _0x3c8751) {
        _0x9f6c91 = _0x9f6c91 - 0x1e9;
        let _0x5d3708 = _0x9f6c[_0x9f6c91];
        return _0x5d3708;
    }, _0x3c87(_0x5e7e1e, _0x5d73d5);
}
tests[_0x1df655(0x204)](run);
