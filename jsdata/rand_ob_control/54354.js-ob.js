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
function run(_0x22bc37) {
    const _0x5e4f2a = {
            'uOAhL': function (_0x551bdc, _0xd454e) {
                return _0x551bdc(_0xd454e);
            },
            'smmhW': function (_0x30094e, _0x5f156b) {
                return _0x30094e(_0x5f156b);
            }
        }, _0x31b6dd = _0x22bc37['env'], _0x36501f = _0x22bc37['expected'], _0x59abf8 = {
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
    Object['assign'](process['env'], _0x31b6dd), REPL['createInternalRepl'](process['env'], _0x59abf8, function (_0x33983d, _0x2fafdb) {
        assert['ifError'](_0x33983d), assert['strictEqual'](_0x2fafdb['terminal'], _0x36501f['terminal'], 'Expected\x20' + _0x5e4f2a['uOAhL'](inspect, _0x36501f) + '\x20with\x20' + _0x5e4f2a['smmhW'](inspect, _0x31b6dd)), assert['strictEqual'](_0x2fafdb['useColors'], _0x36501f['useColors'], 'Expected\x20' + _0x5e4f2a['smmhW'](inspect, _0x36501f) + '\x20with\x20' + _0x5e4f2a['smmhW'](inspect, _0x31b6dd)), assert['strictEqual'](_0x2fafdb['replMode'], _0x36501f['replMode'] || REPL_MODE_SLOPPY, 'Expected\x20' + _0x5e4f2a['smmhW'](inspect, _0x36501f) + '\x20with\x20' + _0x5e4f2a['smmhW'](inspect, _0x31b6dd));
        for (const _0x4d23c3 of Object['keys'](_0x31b6dd)) {
            delete process['env'][_0x4d23c3];
        }
        _0x2fafdb['close']();
    });
}
tests['forEach'](run);
