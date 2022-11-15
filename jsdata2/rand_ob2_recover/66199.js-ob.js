function _0x1c40(_0x4dde65, _0x27d6af) {
    return _0x1c40 = function (_0xfd3f7f, _0x1c40a3) {
        _0xfd3f7f = _0xfd3f7f - 117;
        var _0x407583 = _0xfd3f[_0xfd3f7f];
        return _0x407583;
    }, _0x1c40(_0x4dde65, _0x27d6af);
}
const test = require(_0x31b081(125))[_0x31b081(126)], path = require(_0x31b081(127)), findNodeDirectory = require(_0x31b081(128)), platforms = [
        _0x31b081(129),
        'freebsd',
        _0x31b081(130),
        _0x31b081(131),
        _0x31b081(132),
        _0x31b081(133)
    ];
test(_0x31b081(134), function (_0x2a44a3) {
    var _0x2986be = _0x31b081;
    _0x2a44a3[_0x2986be(135)](platforms[_0x2986be(136)]);
    for (var _0x2c194d = 0; _0x2c194d < platforms['length']; _0x2c194d++) {
        var _0x50f6d8 = {
            'execPath': '/x/y/bin/node',
            'platform': platforms[_0x2c194d]
        };
        _0x2a44a3[_0x2986be(137)](findNodeDirectory(_0x2986be(138), _0x50f6d8), path[_0x2986be(139)]('/x'));
    }
}), test(_0x31b081(140), function (_0x5045a6) {
    var _0x4e3771 = _0x31b081;
    _0x5045a6['plan'](platforms['length']);
    for (var _0x5c30eb = 0; _0x5c30eb < platforms[_0x4e3771(136)]; _0x5c30eb++) {
        var _0x31ae67 = {
            'execPath': _0x4e3771(141),
            'platform': platforms[_0x5c30eb]
        };
        platforms[_0x5c30eb] === _0x4e3771(132) ? _0x5045a6[_0x4e3771(137)](findNodeDirectory(_0x4e3771(142), _0x31ae67), path['join']('/y')) : _0x5045a6[_0x4e3771(137)](findNodeDirectory(_0x4e3771(143), _0x31ae67), path[_0x4e3771(139)]('/y'));
    }
}), test(_0x31b081(144), function (_0x16aa25) {
    var _0x4eb1c7 = _0x31b081;
    _0x16aa25[_0x4eb1c7(135)](platforms[_0x4eb1c7(136)]);
    for (var _0x1570bf = 0; _0x1570bf < platforms['length']; _0x1570bf++) {
        var _0x40ceeb = {
            'execPath': _0x4eb1c7(141),
            'platform': platforms[_0x1570bf]
        };
        _0x16aa25[_0x4eb1c7(137)](findNodeDirectory(_0x4eb1c7(145), _0x40ceeb), path['join'](_0x4eb1c7(146)));
    }
}), test(_0x31b081(147), function (_0x2ea455) {
    var _0x33a5d0 = _0x31b081;
    _0x2ea455['plan'](platforms[_0x33a5d0(136)]);
    for (var _0x1a8a5d = 0; _0x1a8a5d < platforms[_0x33a5d0(136)]; _0x1a8a5d++) {
        var _0x56e6b5;
        platforms[_0x1a8a5d] === _0x33a5d0(132) ? _0x56e6b5 = {
            'execPath': _0x33a5d0(148),
            'platform': platforms[_0x1a8a5d]
        } : _0x56e6b5 = {
            'execPath': '/x/y/out/Release/node',
            'platform': platforms[_0x1a8a5d]
        }, _0x2ea455[_0x33a5d0(137)](findNodeDirectory(_0x33a5d0(145), _0x56e6b5), path['join']('/x/y'));
    }
}), test('test find-node-directory - node in Debug release dir', function (_0x311c1b) {
    var _0x2efe2d = _0x31b081;
    _0x311c1b['plan'](platforms[_0x2efe2d(136)]);
    for (var _0x3a8aa5 = 0; _0x3a8aa5 < platforms['length']; _0x3a8aa5++) {
        var _0x3f8744;
        platforms[_0x3a8aa5] === _0x2efe2d(132) ? _0x3f8744 = {
            'execPath': '/a/b/Debug/node',
            'platform': platforms[_0x3a8aa5]
        } : _0x3f8744 = {
            'execPath': '/a/b/out/Debug/node',
            'platform': platforms[_0x3a8aa5]
        }, _0x311c1b[_0x2efe2d(137)](findNodeDirectory('/nothere/npm/node_modules/node-gyp/lib', _0x3f8744), path['join'](_0x2efe2d(149)));
    }
}), test('test find-node-directory - not found', function (_0x296603) {
    var _0x11d254 = _0x31b081;
    _0x296603[_0x11d254(135)](platforms[_0x11d254(136)]);
    for (var _0x3510d9 = 0; _0x3510d9 < platforms[_0x11d254(136)]; _0x3510d9++) {
        var _0x2d476b = {
            'execPath': _0x11d254(150),
            'platform': _0x3510d9
        };
        _0x296603[_0x11d254(137)](findNodeDirectory(_0x11d254(151), _0x2d476b), '');
    }
}), test(_0x31b081(134), function (_0x3eb261) {
    var _0xdc4871 = _0x31b081;
    _0x3eb261[_0xdc4871(135)](platforms[_0xdc4871(136)]);
    for (var _0x5ab42f = 0; _0x5ab42f < platforms[_0xdc4871(136)]; _0x5ab42f++) {
        var _0x21e733 = {
            'execPath': _0xdc4871(141),
            'platform': platforms[_0x5ab42f]
        };
        _0x3eb261[_0xdc4871(137)](findNodeDirectory('/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib', _0x21e733), path[_0xdc4871(139)](_0xdc4871(152)));
    }
});