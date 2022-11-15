require('../common');
const stream = require('stream'), REPL = require(_0x1df655(498)), assert = require('assert'), inspect = require(_0x1df655(499))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require('repl'), tests = [
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
            'env': { 'NODE_REPL_MODE': _0x1df655(500) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x1df655(501) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0x596536) {
    const _0x2320c1 = _0x1df655, _0x12ed98 = _0x596536['env'], _0x15ec6a = _0x596536[_0x2320c1(502)], _0x3de093 = {
            'terminal': !![],
            'input': new stream[(_0x2320c1(503))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x2320c1(504))]({
                'write'() {
                }
            })
        };
    Object['assign'](process[_0x2320c1(505)], _0x12ed98), REPL[_0x2320c1(506)](process[_0x2320c1(505)], _0x3de093, function (_0x497995, _0x4c489d) {
        const _0x4fde86 = _0x2320c1;
        assert[_0x4fde86(507)](_0x497995), assert[_0x4fde86(508)](_0x4c489d[_0x4fde86(509)], _0x15ec6a['terminal'], _0x4fde86(510) + inspect(_0x15ec6a) + ' with ' + inspect(_0x12ed98)), assert[_0x4fde86(508)](_0x4c489d[_0x4fde86(511)], _0x15ec6a[_0x4fde86(511)], _0x4fde86(510) + inspect(_0x15ec6a) + _0x4fde86(512) + inspect(_0x12ed98)), assert['strictEqual'](_0x4c489d[_0x4fde86(513)], _0x15ec6a[_0x4fde86(513)] || REPL_MODE_SLOPPY, _0x4fde86(510) + inspect(_0x15ec6a) + ' with ' + inspect(_0x12ed98));
        for (const _0x2096c3 of Object[_0x4fde86(514)](_0x12ed98)) {
            delete process[_0x4fde86(505)][_0x2096c3];
        }
        _0x4c489d[_0x4fde86(515)]();
    });
}
function _0x3c87(_0x5e7e1e, _0x5d73d5) {
    return _0x3c87 = function (_0x9f6c91, _0x3c8751) {
        _0x9f6c91 = _0x9f6c91 - 489;
        let _0x5d3708 = _0x9f6c[_0x9f6c91];
        return _0x5d3708;
    }, _0x3c87(_0x5e7e1e, _0x5d73d5);
}
tests[_0x1df655(516)](run);