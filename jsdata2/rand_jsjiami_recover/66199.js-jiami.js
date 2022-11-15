'use strict';
const test = require('tap')['test'];
const path = require('path');
const findNodeDirectory = require('../lib/find-node-directory');
const platforms = [
    'darwin',
    'freebsd',
    'linux',
    'sunos',
    'win32',
    'aix'
];
test('test find-node-directory - node install', function (_0x28bec0) {
    _0x28bec0['plan'](platforms['length']);
    for (var _0x563534 = 0; _0x563534 < platforms['length']; _0x563534++) {
        if ('gIrXj' !== 'esgCz') {
            var _0x55d426 = { 'platform': platforms[_0x563534] };
            _0x28bec0['equal'](findNodeDirectory('/x/deps/npm/node_modules/node-gyp/lib', _0x55d426), path['join']('/x'));
        } else {
            var _0x5e55c9 = {
                'execPath': '/x/y/bin/node',
                'platform': platforms[_0x563534]
            };
            _0x28bec0['equal'](findNodeDirectory('/x/deps/npm/node_modules/node-gyp/lib', _0x5e55c9), path['join']('/x'));
        }
    }
});
test('test find-node-directory - node build', function (_0x14cc90) {
    _0x14cc90['plan'](platforms['length']);
    for (var _0x25bb4f = 0; _0x25bb4f < platforms['length']; _0x25bb4f++) {
        var _0x35787f = {
            'execPath': '/x/y/bin/node',
            'platform': platforms[_0x25bb4f]
        };
        if (platforms[_0x25bb4f] === 'win32') {
            _0x14cc90['equal'](findNodeDirectory('/y/node_modules/npm/node_modules/node-gyp/lib', _0x35787f), path['join']('/y'));
        } else {
            _0x14cc90['equal'](findNodeDirectory('/y/lib/node_modules/npm/node_modules/node-gyp/lib', _0x35787f), path['join']('/y'));
        }
    }
});
test('test find-node-directory - node in bin directory', function (_0x4d4f9b) {
    _0x4d4f9b['plan'](platforms['length']);
    for (var _0x29d078 = 0; _0x29d078 < platforms['length']; _0x29d078++) {
        var _0x49c286 = {
            'execPath': '/x/y/bin/node',
            'platform': platforms[_0x29d078]
        };
        _0x4d4f9b['equal'](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x49c286), path['join']('/x/y'));
    }
});
test('test find-node-directory - node in build release dir', function (_0x4dd0b5) {
    _0x4dd0b5['plan'](platforms['length']);
    for (var _0x1b1207 = 0; _0x1b1207 < platforms['length']; _0x1b1207++) {
        var _0x36c437;
        if (platforms[_0x1b1207] === 'win32') {
            if ('XGSKX' === 'XGSKX') {
                _0x36c437 = {
                    'execPath': '/x/y/Release/node',
                    'platform': platforms[_0x1b1207]
                };
            } else {
                var _0x2a8bbc = {
                    'execPath': '/x/y/bin/node',
                    'platform': platforms[_0x1b1207]
                };
                _0x4dd0b5['equal'](findNodeDirectory('/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib', _0x2a8bbc), path['join']('/x/y/z/a/b/c'));
            }
        } else {
            _0x36c437 = {
                'execPath': '/x/y/out/Release/node',
                'platform': platforms[_0x1b1207]
            };
        }
        _0x4dd0b5['equal'](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x36c437), path['join']('/x/y'));
    }
});
test('test find-node-directory - node in Debug release dir', function (_0x2925ba) {
    _0x2925ba['plan'](platforms['length']);
    for (var _0x28efd6 = 0; _0x28efd6 < platforms['length']; _0x28efd6++) {
        var _0x41ed6d;
        if (platforms[_0x28efd6] === 'win32') {
            if ('tXaoh' !== 'tXaoh') {
                _0x2925ba['plan'](platforms['length']);
                for (var _0x307788 = 0; _0x307788 < platforms['length']; _0x307788++) {
                    var _0x4ac021;
                    if (platforms[_0x307788] === 'win32') {
                        _0x4ac021 = {
                            'execPath': '/a/b/Debug/node',
                            'platform': platforms[_0x307788]
                        };
                    } else {
                        _0x4ac021 = {
                            'execPath': '/a/b/out/Debug/node',
                            'platform': platforms[_0x307788]
                        };
                    }
                    _0x2925ba['equal'](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x4ac021), path['join']('/a/b'));
                }
            } else {
                _0x41ed6d = {
                    'execPath': '/a/b/Debug/node',
                    'platform': platforms[_0x28efd6]
                };
            }
        } else {
            _0x41ed6d = {
                'execPath': '/a/b/out/Debug/node',
                'platform': platforms[_0x28efd6]
            };
        }
        _0x2925ba['equal'](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x41ed6d), path['join']('/a/b'));
    }
});
test('test find-node-directory - not found', function (_0x586ece) {
    _0x586ece['plan'](platforms['length']);
    for (var _0x49dd71 = 0; _0x49dd71 < platforms['length']; _0x49dd71++) {
        var _0x217968 = { 'platform': _0x49dd71 };
        _0x586ece['equal'](findNodeDirectory('/a/b/c/d', _0x217968), '');
    }
});
test('test find-node-directory - node install', function (_0x438975) {
    _0x438975['plan'](platforms['length']);
    for (var _0x7ebd08 = 0; _0x7ebd08 < platforms['length']; _0x7ebd08++) {
        var _0x23c69a = {
            'execPath': '/x/y/bin/node',
            'platform': platforms[_0x7ebd08]
        };
        _0x438975['equal'](findNodeDirectory('/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib', _0x23c69a), path['join']('/x/y/z/a/b/c'));
    }
});