'use strict';
require('../common');
const stream = require('stream'), REPL = require('internal/repl'), assert = require('assert'), inspect = require('util')['inspect'], {REPL_MODE_SLOPPY, REPL_MODE_STRICT} = require('repl'), tests = [
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
            'env': { 'NODE_REPL_MODE': 'sloppy' },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_SLOPPY
            }
        },
        {
            'env': { 'NODE_REPL_MODE': 'strict' },
            'expected': {
                'terminal': !![],
                'useColors': !![],
                'replMode': REPL_MODE_STRICT
            }
        }
    ];
function run(_0x44faeb) {
    const _0xdcb95b = _0x44faeb['env'], _0x4ce27c = _0x44faeb['expected'], _0x4c11ab = {
            'terminal': !![],
            'input': new stream['Readable']({
                'read'() {
                }
            }),
            'output': new stream['Writable']({
                'write'() {
                }
            })
        };
    Object['assign'](process['env'], _0xdcb95b), REPL['createInternalRepl'](process['env'], _0x4c11ab, function (_0x3b736d, _0xa691a9) {
        assert['ifError'](_0x3b736d), assert['strictEqual'](_0xa691a9['terminal'], _0x4ce27c['terminal'], 'Expected\x20' + inspect(_0x4ce27c) + '\x20with\x20' + inspect(_0xdcb95b)), assert['strictEqual'](_0xa691a9['useColors'], _0x4ce27c['useColors'], 'Expected\x20' + inspect(_0x4ce27c) + '\x20with\x20' + inspect(_0xdcb95b)), assert['strictEqual'](_0xa691a9['replMode'], _0x4ce27c['replMode'] || REPL_MODE_SLOPPY, 'Expected\x20' + inspect(_0x4ce27c) + '\x20with\x20' + inspect(_0xdcb95b));
        for (const _0x4f9bab of Object['keys'](_0xdcb95b)) {
            delete process['env'][_0x4f9bab];
        }
        _0xa691a9['close']();
    });
}
tests['forEach'](run);
