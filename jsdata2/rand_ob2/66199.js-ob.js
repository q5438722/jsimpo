'use strict';
var _0xfd3f = [
    '/x/y',
    'test\x20find-node-directory\x20-\x20node\x20in\x20build\x20release\x20dir',
    '/x/y/Release/node',
    '/a/b',
    '/x/y/z/y',
    '/a/b/c/d',
    '/x/y/z/a/b/c',
    '1312713AInUBz',
    '1321694HBfxkn',
    '463972HJIQNK',
    '3xNogTf',
    '929680cmNKjK',
    '337126VJZHDh',
    '1142951JZoLmu',
    '4685263SRjiqI',
    'tap',
    'test',
    'path',
    '../lib/find-node-directory',
    'darwin',
    'linux',
    'sunos',
    'win32',
    'aix',
    'test\x20find-node-directory\x20-\x20node\x20install',
    'plan',
    'length',
    'equal',
    '/x/deps/npm/node_modules/node-gyp/lib',
    'join',
    'test\x20find-node-directory\x20-\x20node\x20build',
    '/x/y/bin/node',
    '/y/node_modules/npm/node_modules/node-gyp/lib',
    '/y/lib/node_modules/npm/node_modules/node-gyp/lib',
    'test\x20find-node-directory\x20-\x20node\x20in\x20bin\x20directory',
    '/nothere/npm/node_modules/node-gyp/lib'
];
var _0x31b081 = _0x1c40;
(function (_0x8a6ccb, _0x9a4821) {
    var _0x16eb77 = _0x1c40;
    while (!![]) {
        try {
            var _0x373ec4 = -parseInt(_0x16eb77(0x75)) + -parseInt(_0x16eb77(0x76)) + -parseInt(_0x16eb77(0x77)) * parseInt(_0x16eb77(0x78)) + parseInt(_0x16eb77(0x79)) + parseInt(_0x16eb77(0x7a)) + -parseInt(_0x16eb77(0x7b)) + parseInt(_0x16eb77(0x7c));
            if (_0x373ec4 === _0x9a4821)
                break;
            else
                _0x8a6ccb['push'](_0x8a6ccb['shift']());
        } catch (_0x41c60e) {
            _0x8a6ccb['push'](_0x8a6ccb['shift']());
        }
    }
}(_0xfd3f, 0xbf1cb));
function _0x1c40(_0x4dde65, _0x27d6af) {
    return _0x1c40 = function (_0xfd3f7f, _0x1c40a3) {
        _0xfd3f7f = _0xfd3f7f - 0x75;
        var _0x407583 = _0xfd3f[_0xfd3f7f];
        return _0x407583;
    }, _0x1c40(_0x4dde65, _0x27d6af);
}
const test = require(_0x31b081(0x7d))[_0x31b081(0x7e)], path = require(_0x31b081(0x7f)), findNodeDirectory = require(_0x31b081(0x80)), platforms = [
        _0x31b081(0x81),
        'freebsd',
        _0x31b081(0x82),
        _0x31b081(0x83),
        _0x31b081(0x84),
        _0x31b081(0x85)
    ];
test(_0x31b081(0x86), function (_0x2a44a3) {
    var _0x2986be = _0x31b081;
    _0x2a44a3[_0x2986be(0x87)](platforms[_0x2986be(0x88)]);
    for (var _0x2c194d = 0x0; _0x2c194d < platforms['length']; _0x2c194d++) {
        var _0x50f6d8 = {
            'execPath': '/x/y/bin/node',
            'platform': platforms[_0x2c194d]
        };
        _0x2a44a3[_0x2986be(0x89)](findNodeDirectory(_0x2986be(0x8a), _0x50f6d8), path[_0x2986be(0x8b)]('/x'));
    }
}), test(_0x31b081(0x8c), function (_0x5045a6) {
    var _0x4e3771 = _0x31b081;
    _0x5045a6['plan'](platforms['length']);
    for (var _0x5c30eb = 0x0; _0x5c30eb < platforms[_0x4e3771(0x88)]; _0x5c30eb++) {
        var _0x31ae67 = {
            'execPath': _0x4e3771(0x8d),
            'platform': platforms[_0x5c30eb]
        };
        platforms[_0x5c30eb] === _0x4e3771(0x84) ? _0x5045a6[_0x4e3771(0x89)](findNodeDirectory(_0x4e3771(0x8e), _0x31ae67), path['join']('/y')) : _0x5045a6[_0x4e3771(0x89)](findNodeDirectory(_0x4e3771(0x8f), _0x31ae67), path[_0x4e3771(0x8b)]('/y'));
    }
}), test(_0x31b081(0x90), function (_0x16aa25) {
    var _0x4eb1c7 = _0x31b081;
    _0x16aa25[_0x4eb1c7(0x87)](platforms[_0x4eb1c7(0x88)]);
    for (var _0x1570bf = 0x0; _0x1570bf < platforms['length']; _0x1570bf++) {
        var _0x40ceeb = {
            'execPath': _0x4eb1c7(0x8d),
            'platform': platforms[_0x1570bf]
        };
        _0x16aa25[_0x4eb1c7(0x89)](findNodeDirectory(_0x4eb1c7(0x91), _0x40ceeb), path['join'](_0x4eb1c7(0x92)));
    }
}), test(_0x31b081(0x93), function (_0x2ea455) {
    var _0x33a5d0 = _0x31b081;
    _0x2ea455['plan'](platforms[_0x33a5d0(0x88)]);
    for (var _0x1a8a5d = 0x0; _0x1a8a5d < platforms[_0x33a5d0(0x88)]; _0x1a8a5d++) {
        var _0x56e6b5;
        platforms[_0x1a8a5d] === _0x33a5d0(0x84) ? _0x56e6b5 = {
            'execPath': _0x33a5d0(0x94),
            'platform': platforms[_0x1a8a5d]
        } : _0x56e6b5 = {
            'execPath': '/x/y/out/Release/node',
            'platform': platforms[_0x1a8a5d]
        }, _0x2ea455[_0x33a5d0(0x89)](findNodeDirectory(_0x33a5d0(0x91), _0x56e6b5), path['join']('/x/y'));
    }
}), test('test\x20find-node-directory\x20-\x20node\x20in\x20Debug\x20release\x20dir', function (_0x311c1b) {
    var _0x2efe2d = _0x31b081;
    _0x311c1b['plan'](platforms[_0x2efe2d(0x88)]);
    for (var _0x3a8aa5 = 0x0; _0x3a8aa5 < platforms['length']; _0x3a8aa5++) {
        var _0x3f8744;
        platforms[_0x3a8aa5] === _0x2efe2d(0x84) ? _0x3f8744 = {
            'execPath': '/a/b/Debug/node',
            'platform': platforms[_0x3a8aa5]
        } : _0x3f8744 = {
            'execPath': '/a/b/out/Debug/node',
            'platform': platforms[_0x3a8aa5]
        }, _0x311c1b[_0x2efe2d(0x89)](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x3f8744), path['join'](_0x2efe2d(0x95)));
    }
}), test('test\x20find-node-directory\x20-\x20not\x20found', function (_0x296603) {
    var _0x11d254 = _0x31b081;
    _0x296603[_0x11d254(0x87)](platforms[_0x11d254(0x88)]);
    for (var _0x3510d9 = 0x0; _0x3510d9 < platforms[_0x11d254(0x88)]; _0x3510d9++) {
        var _0x2d476b = {
            'execPath': _0x11d254(0x96),
            'platform': _0x3510d9
        };
        _0x296603[_0x11d254(0x89)](findNodeDirectory(_0x11d254(0x97), _0x2d476b), '');
    }
}), test(_0x31b081(0x86), function (_0x3eb261) {
    var _0xdc4871 = _0x31b081;
    _0x3eb261[_0xdc4871(0x87)](platforms[_0xdc4871(0x88)]);
    for (var _0x5ab42f = 0x0; _0x5ab42f < platforms[_0xdc4871(0x88)]; _0x5ab42f++) {
        var _0x21e733 = {
            'execPath': _0xdc4871(0x8d),
            'platform': platforms[_0x5ab42f]
        };
        _0x3eb261[_0xdc4871(0x89)](findNodeDirectory('/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib', _0x21e733), path[_0xdc4871(0x8b)](_0xdc4871(0x98)));
    }
});
