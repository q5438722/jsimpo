var _0x4411 = [
    'length',
    'mustCall',
    'number',
    '<anonymous>',
    'apply',
    '545726zqsMGx',
    '567784QkYbnw',
    '1kNRAED',
    '14983oYQFPN',
    '3tHIJOT',
    '107816diWuYt',
    '3MpwgEa',
    '920582byMLjp',
    '1LEmKai',
    '161215yPqJWD',
    '2VcfvOL',
    '331579WZhiUo',
    'path',
    'assert',
    'fixturesDir',
    'testDir',
    'fixtures',
    'tmpDir',
    'tmp',
    'platform',
    'win32',
    'PIPE',
    '\x5c\x5c.\x5cpipe\x5clibuv-test',
    '/test.sock',
    'util',
    '__proto__',
    'push',
    'constructor',
    'join',
    'indirectInstanceOf',
    'prototype',
    'slice',
    'ddCommand',
    'resolve',
    'create-file.js',
    'argv',
    '\x22\x20\x22',
    'dd\x20if=/dev/zero\x20of=\x22',
    '\x22\x20bs=1024\x20count=',
    'spawnPwd',
    'spawn',
    'pwd',
    'globalCheck',
    'exit',
    'setImmediate',
    'clearImmediate',
    'errno',
    'error',
    'filter',
    'actual',
    'Mismatched\x20%s\x20function\x20calls.\x20Expected\x20%d,\x20actual\x20%d.',
    'name',
    'expected',
    'stack'
];
var _0x136595 = _0x2700;
(function (_0x286eaa, _0x2b8ccb) {
    var _0x47a716 = _0x2700;
    while (!![]) {
        try {
            var _0x563700 = parseInt(_0x47a716(0x132)) + parseInt(_0x47a716(0x133)) * -parseInt(_0x47a716(0x134)) + -parseInt(_0x47a716(0x135)) * parseInt(_0x47a716(0x136)) + parseInt(_0x47a716(0x137)) * -parseInt(_0x47a716(0x138)) + -parseInt(_0x47a716(0x139)) * -parseInt(_0x47a716(0x13a)) + parseInt(_0x47a716(0x13b)) * parseInt(_0x47a716(0x13c)) + -parseInt(_0x47a716(0x13d));
            if (_0x563700 === _0x2b8ccb)
                break;
            else
                _0x286eaa['push'](_0x286eaa['shift']());
        } catch (_0x305e5d) {
            _0x286eaa['push'](_0x286eaa['shift']());
        }
    }
}(_0x4411, 0x7f312));
var path = require(_0x136595(0x13e)), assert = require(_0x136595(0x13f));
exports['testDir'] = path['dirname'](__filename), exports[_0x136595(0x140)] = path['join'](exports[_0x136595(0x141)], _0x136595(0x142)), exports['libDir'] = path['join'](exports[_0x136595(0x141)], '../lib'), exports[_0x136595(0x143)] = path['join'](exports[_0x136595(0x141)], _0x136595(0x144)), exports['PORT'] = 0x303a;
process[_0x136595(0x145)] === _0x136595(0x146) ? exports[_0x136595(0x147)] = _0x136595(0x148) : exports[_0x136595(0x147)] = exports['tmpDir'] + _0x136595(0x149);
var util = require(_0x136595(0x14a));
for (var i in util)
    exports[i] = util[i];
function _0x2700(_0x4f83ab, _0x46d686) {
    return _0x2700 = function (_0x441180, _0x270083) {
        _0x441180 = _0x441180 - 0x132;
        var _0x46076e = _0x4411[_0x441180];
        return _0x46076e;
    }, _0x2700(_0x4f83ab, _0x46d686);
}
function protoCtrChain(_0x2bdf6a) {
    var _0xdc2363 = _0x136595, _0x32d152 = [];
    for (; _0x2bdf6a; _0x2bdf6a = _0x2bdf6a[_0xdc2363(0x14b)]) {
        _0x32d152[_0xdc2363(0x14c)](_0x2bdf6a[_0xdc2363(0x14d)]);
    }
    return _0x32d152[_0xdc2363(0x14e)]();
}
exports[_0x136595(0x14f)] = function (_0x411d86, _0x462be0) {
    var _0xc009ef = _0x136595;
    if (_0x411d86 instanceof _0x462be0)
        return !![];
    var _0x3849c1 = protoCtrChain(_0x462be0[_0xc009ef(0x150)]), _0x1232e9 = protoCtrChain(_0x411d86);
    return _0x1232e9[_0xc009ef(0x151)](-_0x3849c1['length']) === _0x3849c1;
}, exports[_0x136595(0x152)] = function (_0x19902e, _0x1ebbfc) {
    var _0x2b4cb5 = _0x136595;
    if (process['platform'] === 'win32') {
        var _0x438635 = path[_0x2b4cb5(0x153)](exports[_0x2b4cb5(0x140)], _0x2b4cb5(0x154));
        return '\x22' + process[_0x2b4cb5(0x155)][0x0] + _0x2b4cb5(0x156) + _0x438635 + '\x22\x20\x22' + _0x19902e + '\x22\x20' + _0x1ebbfc * 0x400;
    } else
        return _0x2b4cb5(0x157) + _0x19902e + _0x2b4cb5(0x158) + _0x1ebbfc;
}, exports[_0x136595(0x159)] = function (_0x2e6dc2) {
    var _0xa84973 = _0x136595, _0x9120e0 = require('child_process')[_0xa84973(0x15a)];
    return process[_0xa84973(0x145)] === _0xa84973(0x146) ? _0x9120e0('cmd.exe', [
        '/c',
        'cd'
    ], _0x2e6dc2) : _0x9120e0(_0xa84973(0x15b), [], _0x2e6dc2);
}, exports[_0x136595(0x15c)] = !![], process['on'](_0x136595(0x15d), function () {
    var _0x63e64a = _0x136595;
    if (!exports[_0x63e64a(0x15c)])
        return;
    var _0x4eec4a = [
        setTimeout,
        setInterval,
        global[_0x63e64a(0x15e)],
        clearTimeout,
        clearInterval,
        global[_0x63e64a(0x15f)],
        console,
        Buffer,
        process,
        global
    ];
    global[_0x63e64a(0x160)] && _0x4eec4a['push'](errno);
    global['gc'] && _0x4eec4a[_0x63e64a(0x14c)](gc);
    global['DTRACE_HTTP_SERVER_RESPONSE'] && (_0x4eec4a[_0x63e64a(0x14c)](DTRACE_HTTP_SERVER_RESPONSE), _0x4eec4a['push'](DTRACE_HTTP_SERVER_REQUEST), _0x4eec4a['push'](DTRACE_HTTP_CLIENT_RESPONSE), _0x4eec4a[_0x63e64a(0x14c)](DTRACE_HTTP_CLIENT_REQUEST), _0x4eec4a[_0x63e64a(0x14c)](DTRACE_NET_STREAM_END), _0x4eec4a['push'](DTRACE_NET_SERVER_CONNECTION), _0x4eec4a[_0x63e64a(0x14c)](DTRACE_NET_SOCKET_READ), _0x4eec4a[_0x63e64a(0x14c)](DTRACE_NET_SOCKET_WRITE));
    global['COUNTER_NET_SERVER_CONNECTION'] && (_0x4eec4a[_0x63e64a(0x14c)](COUNTER_NET_SERVER_CONNECTION), _0x4eec4a[_0x63e64a(0x14c)](COUNTER_NET_SERVER_CONNECTION_CLOSE), _0x4eec4a[_0x63e64a(0x14c)](COUNTER_HTTP_SERVER_REQUEST), _0x4eec4a[_0x63e64a(0x14c)](COUNTER_HTTP_SERVER_RESPONSE), _0x4eec4a[_0x63e64a(0x14c)](COUNTER_HTTP_CLIENT_REQUEST), _0x4eec4a[_0x63e64a(0x14c)](COUNTER_HTTP_CLIENT_RESPONSE));
    global['ArrayBuffer'] && (_0x4eec4a['push'](ArrayBuffer), _0x4eec4a[_0x63e64a(0x14c)](Int8Array), _0x4eec4a['push'](Uint8Array), _0x4eec4a[_0x63e64a(0x14c)](Uint8ClampedArray), _0x4eec4a[_0x63e64a(0x14c)](Int16Array), _0x4eec4a['push'](Uint16Array), _0x4eec4a[_0x63e64a(0x14c)](Int32Array), _0x4eec4a['push'](Uint32Array), _0x4eec4a[_0x63e64a(0x14c)](Float32Array), _0x4eec4a[_0x63e64a(0x14c)](Float64Array), _0x4eec4a[_0x63e64a(0x14c)](DataView));
    for (var _0x57275b in global) {
        var _0x3e2a5c = ![];
        for (var _0x2d24a8 in _0x4eec4a) {
            if (global[_0x57275b] === _0x4eec4a[_0x2d24a8]) {
                _0x3e2a5c = !![];
                break;
            }
        }
        !_0x3e2a5c && (console[_0x63e64a(0x161)]('Unknown\x20global:\x20%s', _0x57275b), assert['ok'](![], 'Unknown\x20global\x20found'));
    }
});
var mustCallChecks = [];
function runCallChecks() {
    var _0x43cebc = _0x136595, _0x4c77a1 = mustCallChecks[_0x43cebc(0x162)](function (_0x151c8f) {
            var _0xe3f0b5 = _0x43cebc;
            return _0x151c8f[_0xe3f0b5(0x163)] !== _0x151c8f['expected'];
        });
    _0x4c77a1['forEach'](function (_0x83432e) {
        var _0x1abdcc = _0x43cebc;
        console['log'](_0x1abdcc(0x164), _0x83432e[_0x1abdcc(0x165)], _0x83432e[_0x1abdcc(0x166)], _0x83432e[_0x1abdcc(0x163)]), console['log'](_0x83432e[_0x1abdcc(0x167)]['split']('\x0a')[_0x1abdcc(0x151)](0x2)[_0x1abdcc(0x14e)]('\x0a'));
    });
    if (_0x4c77a1[_0x43cebc(0x168)])
        process['exit'](0x1);
}
exports[_0x136595(0x169)] = function (_0x594e6e, _0x55e361) {
    var _0x12cc62 = _0x136595;
    if (typeof _0x55e361 !== _0x12cc62(0x16a))
        _0x55e361 = 0x1;
    var _0x4068a0 = {
        'expected': _0x55e361,
        'actual': 0x0,
        'stack': new Error()[_0x12cc62(0x167)],
        'name': _0x594e6e[_0x12cc62(0x165)] || _0x12cc62(0x16b)
    };
    if (mustCallChecks[_0x12cc62(0x168)] === 0x0)
        process['on'](_0x12cc62(0x15d), runCallChecks);
    return mustCallChecks[_0x12cc62(0x14c)](_0x4068a0), function () {
        var _0x53ac49 = _0x12cc62;
        return _0x4068a0[_0x53ac49(0x163)]++, _0x594e6e[_0x53ac49(0x16c)](this, arguments);
    };
};
