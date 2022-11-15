'use strict';
const _0x1733 = [
    'strictEqual',
    'terminal',
    'Expected\x20',
    '\x20with\x20',
    'useColors',
    'sPMmn',
    'replMode',
    'keys',
    'close',
    'forEach',
    '1006605jZwTYE',
    '1lfHHsh',
    '1495021oInzuM',
    '5pkkwTg',
    '58009zKigce',
    '2UAKstm',
    '104722dLLENd',
    '54214RZMiKb',
    '29dmFVjN',
    '106dxYSGE',
    '7655Xpfhcr',
    '414905fZzGUZ',
    '5qvuWTI',
    '../common',
    'stream',
    'internal/repl',
    'util',
    'repl',
    'dumb',
    'strict',
    'env',
    'expected',
    'Readable',
    'Writable',
    'assign',
    'createInternalRepl',
    'ifError'
];
const _0x2b3d56 = _0x2644;
(function (_0x1b7508, _0x2741c8) {
    const _0x4f34d1 = _0x2644;
    while (!![]) {
        try {
            const _0x2b92b4 = -parseInt(_0x4f34d1(0xea)) * parseInt(_0x4f34d1(0xeb)) + -parseInt(_0x4f34d1(0xec)) + -parseInt(_0x4f34d1(0xed)) * -parseInt(_0x4f34d1(0xee)) + parseInt(_0x4f34d1(0xef)) * parseInt(_0x4f34d1(0xf0)) + parseInt(_0x4f34d1(0xf1)) * parseInt(_0x4f34d1(0xf2)) + -parseInt(_0x4f34d1(0xf3)) * parseInt(_0x4f34d1(0xf4)) + -parseInt(_0x4f34d1(0xf5)) * -parseInt(_0x4f34d1(0xf6));
            if (_0x2b92b4 === _0x2741c8)
                break;
            else
                _0x1b7508['push'](_0x1b7508['shift']());
        } catch (_0x33d362) {
            _0x1b7508['push'](_0x1b7508['shift']());
        }
    }
}(_0x1733, 0x18311f + -0xb3f5c + -0x3b37));
require(_0x2b3d56(0xf7));
const stream = require(_0x2b3d56(0xf8)), REPL = require(_0x2b3d56(0xf9)), assert = require('assert'), inspect = require(_0x2b3d56(0xfa))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require(_0x2b3d56(0xfb)), tests = [
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
            'env': { 'TERM': _0x2b3d56(0xfc) },
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
            'env': { 'NODE_REPL_MODE': _0x2b3d56(0xfd) },
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
        }, _0x3ae1f1 = _0x49c69b[_0x585b97(0xfe)], _0x5431f2 = _0x49c69b[_0x585b97(0xff)], _0x49a90c = {
            'terminal': !![],
            'input': new stream[(_0x585b97(0x100))]({
                'read'() {
                }
            }),
            'output': new stream[(_0x585b97(0x101))]({
                'write'() {
                }
            })
        };
    Object[_0x585b97(0x102)](process[_0x585b97(0xfe)], _0x3ae1f1), REPL[_0x585b97(0x103)](process['env'], _0x49a90c, function (_0x3eb671, _0x2b8653) {
        const _0x44725b = _0x585b97;
        assert[_0x44725b(0x104)](_0x3eb671), assert[_0x44725b(0x105)](_0x2b8653[_0x44725b(0x106)], _0x5431f2[_0x44725b(0x106)], _0x44725b(0x107) + inspect(_0x5431f2) + _0x44725b(0x108) + inspect(_0x3ae1f1)), assert['strictEqual'](_0x2b8653[_0x44725b(0x109)], _0x5431f2[_0x44725b(0x109)], _0x44725b(0x107) + inspect(_0x5431f2) + _0x44725b(0x108) + _0x986c26[_0x44725b(0x10a)](inspect, _0x3ae1f1)), assert['strictEqual'](_0x2b8653[_0x44725b(0x10b)], _0x5431f2[_0x44725b(0x10b)] || REPL_MODE_SLOPPY, _0x44725b(0x107) + _0x986c26['iiKEY'](inspect, _0x5431f2) + _0x44725b(0x108) + inspect(_0x3ae1f1));
        for (const _0x230d94 of Object[_0x44725b(0x10c)](_0x3ae1f1)) {
            delete process[_0x44725b(0xfe)][_0x230d94];
        }
        _0x2b8653[_0x44725b(0x10d)]();
    });
}
function _0x2644(_0x3bffb6, _0x31b298) {
    return _0x2644 = function (_0x4aead7, _0x24df3c) {
        _0x4aead7 = _0x4aead7 - (-0x1f22 + -0x25f7 + -0x4603 * -0x1);
        let _0x2851fd = _0x1733[_0x4aead7];
        return _0x2851fd;
    }, _0x2644(_0x3bffb6, _0x31b298);
}
tests[_0x2b3d56(0x10e)](run);
