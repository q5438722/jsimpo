require(_0x2b3d56(247));
const stream = require(_0x2b3d56(248)), REPL = require(_0x2b3d56(249)), assert = require('assert'), inspect = require(_0x2b3d56(250))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require(_0x2b3d56(251)), tests = [
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
            'env': { 'TERM': _0x2b3d56(252) },
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
            'env': { 'NODE_REPL_MODE': 'sloppy' },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0x2b3d56(253) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0x49c69b) {
    const _0x585b97 = _0x2b3d56, _0x986c26 = {
            'sPMmn': function (_0x3d9892, _0x234aae) {
                return _0x3d9892(_0x234aae);
            },
            'iiKEY': function (_0x1149a5, _0x99e22e) {
                return _0x1149a5(_0x99e22e);
            }
        }, _0x3ae1f1 = _0x49c69b[_0x585b97(254)], _0x5431f2 = _0x49c69b[_0x585b97(255)], _0x49a90c = {
            'terminal': !![],
            'input': new stream[(_0x585b97(256))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x585b97(257))]({
                'write'() {
                }
            })
        };
    Object[_0x585b97(258)](process[_0x585b97(254)], _0x3ae1f1), REPL[_0x585b97(259)](process['env'], _0x49a90c, function (_0x3eb671, _0x2b8653) {
        const _0x44725b = _0x585b97;
        assert[_0x44725b(260)](_0x3eb671), assert[_0x44725b(261)](_0x2b8653[_0x44725b(262)], _0x5431f2[_0x44725b(262)], _0x44725b(263) + inspect(_0x5431f2) + _0x44725b(264) + inspect(_0x3ae1f1)), assert['strictEqual'](_0x2b8653[_0x44725b(265)], _0x5431f2[_0x44725b(265)], _0x44725b(263) + inspect(_0x5431f2) + _0x44725b(264) + _0x986c26[_0x44725b(266)](inspect, _0x3ae1f1)), assert['strictEqual'](_0x2b8653[_0x44725b(267)], _0x5431f2[_0x44725b(267)] || REPL_MODE_SLOPPY, _0x44725b(263) + _0x986c26['iiKEY'](inspect, _0x5431f2) + _0x44725b(264) + inspect(_0x3ae1f1));
        for (const _0x230d94 of Object[_0x44725b(268)](_0x3ae1f1)) {
            delete process[_0x44725b(254)][_0x230d94];
        }
        _0x2b8653[_0x44725b(269)]();
    });
}
function _0x2644(_0x3bffb6, _0x31b298) {
    return _0x2644 = function (_0x4aead7, _0x24df3c) {
        _0x4aead7 = _0x4aead7 - (-7970 + -9719 + -17923 * -1);
        let _0x2851fd = _0x1733[_0x4aead7];
        return _0x2851fd;
    }, _0x2644(_0x3bffb6, _0x31b298);
}
tests[_0x2b3d56(270)](run);