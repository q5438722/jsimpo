require(_0x8fda20(160));
const stream = require('stream'), REPL = require(_0x8fda20(161)), assert = require('assert'), inspect = require(_0x8fda20(162))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require(_0x8fda20(163)), tests = [
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
            'env': { 'TERM': _0x8fda20(164) },
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
            'env': { 'NODE_REPL_MODE': _0x8fda20(165) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x8fda20(166) },
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
        }, _0x394df6 = _0x35aef0[_0x24fa2b(167)], _0xa522b0 = _0x35aef0['expected'], _0x5c632c = {
            'terminal': !![],
            'input': new stream[(_0x24fa2b(168))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x24fa2b(169))]({
                'write'() {
                }
            })
        };
    Object[_0x24fa2b(170)](process['env'], _0x394df6), REPL[_0x24fa2b(171)](process['env'], _0x5c632c, function (_0x28f7a3, _0x364be9) {
        const _0x2ac39d = _0x24fa2b;
        assert[_0x2ac39d(172)](_0x28f7a3), assert['strictEqual'](_0x364be9[_0x2ac39d(173)], _0xa522b0[_0x2ac39d(173)], _0x2ac39d(174) + inspect(_0xa522b0) + ' with ' + _0x5c60c1[_0x2ac39d(175)](inspect, _0x394df6)), assert[_0x2ac39d(176)](_0x364be9[_0x2ac39d(177)], _0xa522b0[_0x2ac39d(177)], _0x2ac39d(174) + _0x5c60c1[_0x2ac39d(178)](inspect, _0xa522b0) + _0x2ac39d(179) + _0x5c60c1['CikVD'](inspect, _0x394df6)), assert[_0x2ac39d(176)](_0x364be9['replMode'], _0xa522b0['replMode'] || REPL_MODE_SLOPPY, _0x2ac39d(174) + _0x5c60c1[_0x2ac39d(180)](inspect, _0xa522b0) + _0x2ac39d(179) + inspect(_0x394df6));
        for (const _0x5463cc of Object[_0x2ac39d(181)](_0x394df6)) {
            delete process[_0x2ac39d(167)][_0x5463cc];
        }
        _0x364be9[_0x2ac39d(182)]();
    });
}
tests[_0x8fda20(183)](run);