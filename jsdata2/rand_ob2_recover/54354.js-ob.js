require(_0xfd5fe4(363));
function _0x16a0(_0xef97c1, _0x31246d) {
    return _0x16a0 = function (_0x53328a, _0x16a022) {
        _0x53328a = _0x53328a - 354;
        let _0x7552d9 = _0x5332[_0x53328a];
        return _0x7552d9;
    }, _0x16a0(_0xef97c1, _0x31246d);
}
const stream = require(_0xfd5fe4(364)), REPL = require(_0xfd5fe4(365)), assert = require(_0xfd5fe4(366)), inspect = require(_0xfd5fe4(367))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require('repl'), tests = [
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
            'env': { 'TERM': _0xfd5fe4(368) },
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
            'env': { 'NODE_REPL_MODE': _0xfd5fe4(369) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0xfd5fe4(370) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0xbe580e) {
    const _0x1e8694 = _0xfd5fe4, _0x562cb9 = _0xbe580e['env'], _0x1ea78b = _0xbe580e[_0x1e8694(371)], _0x39e1c2 = {
            'terminal': !![],
            'input': new stream[(_0x1e8694(372))]({
                'read'() {
                }
            }),
            'output': new stream['Writable']({
                'write'() {
                }
            })
        };
    Object['assign'](process[_0x1e8694(373)], _0x562cb9), REPL['createInternalRepl'](process[_0x1e8694(373)], _0x39e1c2, function (_0x255928, _0x37408b) {
        const _0x3dfd24 = _0x1e8694;
        assert['ifError'](_0x255928), assert[_0x3dfd24(374)](_0x37408b[_0x3dfd24(375)], _0x1ea78b[_0x3dfd24(375)], _0x3dfd24(376) + inspect(_0x1ea78b) + _0x3dfd24(377) + inspect(_0x562cb9)), assert[_0x3dfd24(374)](_0x37408b[_0x3dfd24(378)], _0x1ea78b['useColors'], _0x3dfd24(376) + inspect(_0x1ea78b) + _0x3dfd24(377) + inspect(_0x562cb9)), assert['strictEqual'](_0x37408b[_0x3dfd24(379)], _0x1ea78b['replMode'] || REPL_MODE_SLOPPY, _0x3dfd24(376) + inspect(_0x1ea78b) + ' with ' + inspect(_0x562cb9));
        for (const _0x2cdcc4 of Object[_0x3dfd24(380)](_0x562cb9)) {
            delete process[_0x3dfd24(373)][_0x2cdcc4];
        }
        _0x37408b[_0x3dfd24(381)]();
    });
}
tests[_0xfd5fe4(382)](run);