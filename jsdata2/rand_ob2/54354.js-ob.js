'use strict';
const _0x5332 = [
    'close',
    'forEach',
    '734567NxUXwo',
    '1681239dBaUiX',
    '283753EDpOox',
    '605361SDIaGT',
    '467598IPJHsm',
    '2191etdMbx',
    '307adTGAk',
    '71LqwLKS',
    '51420ojLwgz',
    '../common',
    'stream',
    'internal/repl',
    'assert',
    'util',
    'dumb',
    'sloppy',
    'strict',
    'expected',
    'Readable',
    'env',
    'strictEqual',
    'terminal',
    'Expected\x20',
    '\x20with\x20',
    'useColors',
    'replMode',
    'keys'
];
const _0xfd5fe4 = _0x16a0;
(function (_0x2436d6, _0x23d1a9) {
    const _0x7e0cf3 = _0x16a0;
    while (!![]) {
        try {
            const _0x28845d = -parseInt(_0x7e0cf3(0x162)) + -parseInt(_0x7e0cf3(0x163)) + parseInt(_0x7e0cf3(0x164)) + parseInt(_0x7e0cf3(0x165)) + -parseInt(_0x7e0cf3(0x166)) + -parseInt(_0x7e0cf3(0x167)) * parseInt(_0x7e0cf3(0x168)) + parseInt(_0x7e0cf3(0x169)) * parseInt(_0x7e0cf3(0x16a));
            if (_0x28845d === _0x23d1a9)
                break;
            else
                _0x2436d6['push'](_0x2436d6['shift']());
        } catch (_0x1320c2) {
            _0x2436d6['push'](_0x2436d6['shift']());
        }
    }
}(_0x5332, 0xf0355));
require(_0xfd5fe4(0x16b));
function _0x16a0(_0xef97c1, _0x31246d) {
    return _0x16a0 = function (_0x53328a, _0x16a022) {
        _0x53328a = _0x53328a - 0x162;
        let _0x7552d9 = _0x5332[_0x53328a];
        return _0x7552d9;
    }, _0x16a0(_0xef97c1, _0x31246d);
}
const stream = require(_0xfd5fe4(0x16c)), REPL = require(_0xfd5fe4(0x16d)), assert = require(_0xfd5fe4(0x16e)), inspect = require(_0xfd5fe4(0x16f))['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require('repl'), tests = [
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
            'env': { 'TERM': _0xfd5fe4(0x170) },
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
            'env': { 'NODE_REPL_MODE': _0xfd5fe4(0x171) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': _0xfd5fe4(0x172) },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0xbe580e) {
    const _0x1e8694 = _0xfd5fe4, _0x562cb9 = _0xbe580e['env'], _0x1ea78b = _0xbe580e[_0x1e8694(0x173)], _0x39e1c2 = {
            'terminal': !![],
            'input': new stream[(_0x1e8694(0x174))]({
                'read'() {
                }
            }),
            'output': new stream['Writable']({
                'write'() {
                }
            })
        };
    Object['assign'](process[_0x1e8694(0x175)], _0x562cb9), REPL['createInternalRepl'](process[_0x1e8694(0x175)], _0x39e1c2, function (_0x255928, _0x37408b) {
        const _0x3dfd24 = _0x1e8694;
        assert['ifError'](_0x255928), assert[_0x3dfd24(0x176)](_0x37408b[_0x3dfd24(0x177)], _0x1ea78b[_0x3dfd24(0x177)], _0x3dfd24(0x178) + inspect(_0x1ea78b) + _0x3dfd24(0x179) + inspect(_0x562cb9)), assert[_0x3dfd24(0x176)](_0x37408b[_0x3dfd24(0x17a)], _0x1ea78b['useColors'], _0x3dfd24(0x178) + inspect(_0x1ea78b) + _0x3dfd24(0x179) + inspect(_0x562cb9)), assert['strictEqual'](_0x37408b[_0x3dfd24(0x17b)], _0x1ea78b['replMode'] || REPL_MODE_SLOPPY, _0x3dfd24(0x178) + inspect(_0x1ea78b) + '\x20with\x20' + inspect(_0x562cb9));
        for (const _0x2cdcc4 of Object[_0x3dfd24(0x17c)](_0x562cb9)) {
            delete process[_0x3dfd24(0x175)][_0x2cdcc4];
        }
        _0x37408b[_0x3dfd24(0x17d)]();
    });
}
tests[_0xfd5fe4(0x17e)](run);
