var path = require(_0x136595(318)), assert = require(_0x136595(319));
exports['testDir'] = path['dirname'](__filename), exports[_0x136595(320)] = path['join'](exports[_0x136595(321)], _0x136595(322)), exports['libDir'] = path['join'](exports[_0x136595(321)], '../lib'), exports[_0x136595(323)] = path['join'](exports[_0x136595(321)], _0x136595(324)), exports['PORT'] = 12346;
process[_0x136595(325)] === _0x136595(326) ? exports[_0x136595(327)] = _0x136595(328) : exports[_0x136595(327)] = exports['tmpDir'] + _0x136595(329);
var util = require(_0x136595(330));
for (var i in util)
    exports[i] = util[i];
function _0x2700(_0x4f83ab, _0x46d686) {
    return _0x2700 = function (_0x441180, _0x270083) {
        _0x441180 = _0x441180 - 306;
        var _0x46076e = _0x4411[_0x441180];
        return _0x46076e;
    }, _0x2700(_0x4f83ab, _0x46d686);
}
function protoCtrChain(_0x2bdf6a) {
    var _0xdc2363 = _0x136595, _0x32d152 = [];
    for (; _0x2bdf6a; _0x2bdf6a = _0x2bdf6a[_0xdc2363(331)]) {
        _0x32d152[_0xdc2363(332)](_0x2bdf6a[_0xdc2363(333)]);
    }
    return _0x32d152[_0xdc2363(334)]();
}
exports[_0x136595(335)] = function (_0x411d86, _0x462be0) {
    var _0xc009ef = _0x136595;
    if (_0x411d86 instanceof _0x462be0)
        return !![];
    var _0x3849c1 = protoCtrChain(_0x462be0[_0xc009ef(336)]), _0x1232e9 = protoCtrChain(_0x411d86);
    return _0x1232e9[_0xc009ef(337)](-_0x3849c1['length']) === _0x3849c1;
}, exports[_0x136595(338)] = function (_0x19902e, _0x1ebbfc) {
    var _0x2b4cb5 = _0x136595;
    if (process['platform'] === 'win32') {
        var _0x438635 = path[_0x2b4cb5(339)](exports[_0x2b4cb5(320)], _0x2b4cb5(340));
        return '"' + process[_0x2b4cb5(341)][0] + _0x2b4cb5(342) + _0x438635 + '" "' + _0x19902e + '" ' + _0x1ebbfc * 1024;
    } else
        return _0x2b4cb5(343) + _0x19902e + _0x2b4cb5(344) + _0x1ebbfc;
}, exports[_0x136595(345)] = function (_0x2e6dc2) {
    var _0xa84973 = _0x136595, _0x9120e0 = require('child_process')[_0xa84973(346)];
    return process[_0xa84973(325)] === _0xa84973(326) ? _0x9120e0('cmd.exe', [
        '/c',
        'cd'
    ], _0x2e6dc2) : _0x9120e0(_0xa84973(347), [], _0x2e6dc2);
}, exports[_0x136595(348)] = !![], process['on'](_0x136595(349), function () {
    var _0x63e64a = _0x136595;
    if (!exports[_0x63e64a(348)])
        return;
    var _0x4eec4a = [
        setTimeout,
        setInterval,
        global[_0x63e64a(350)],
        clearTimeout,
        clearInterval,
        global[_0x63e64a(351)],
        console,
        Buffer,
        process,
        global
    ];
    global[_0x63e64a(352)] && _0x4eec4a['push'](errno);
    global['gc'] && _0x4eec4a[_0x63e64a(332)](gc);
    global['DTRACE_HTTP_SERVER_RESPONSE'] && (_0x4eec4a[_0x63e64a(332)](DTRACE_HTTP_SERVER_RESPONSE), _0x4eec4a['push'](DTRACE_HTTP_SERVER_REQUEST), _0x4eec4a['push'](DTRACE_HTTP_CLIENT_RESPONSE), _0x4eec4a[_0x63e64a(332)](DTRACE_HTTP_CLIENT_REQUEST), _0x4eec4a[_0x63e64a(332)](DTRACE_NET_STREAM_END), _0x4eec4a['push'](DTRACE_NET_SERVER_CONNECTION), _0x4eec4a[_0x63e64a(332)](DTRACE_NET_SOCKET_READ), _0x4eec4a[_0x63e64a(332)](DTRACE_NET_SOCKET_WRITE));
    global['COUNTER_NET_SERVER_CONNECTION'] && (_0x4eec4a[_0x63e64a(332)](COUNTER_NET_SERVER_CONNECTION), _0x4eec4a[_0x63e64a(332)](COUNTER_NET_SERVER_CONNECTION_CLOSE), _0x4eec4a[_0x63e64a(332)](COUNTER_HTTP_SERVER_REQUEST), _0x4eec4a[_0x63e64a(332)](COUNTER_HTTP_SERVER_RESPONSE), _0x4eec4a[_0x63e64a(332)](COUNTER_HTTP_CLIENT_REQUEST), _0x4eec4a[_0x63e64a(332)](COUNTER_HTTP_CLIENT_RESPONSE));
    global['ArrayBuffer'] && (_0x4eec4a['push'](ArrayBuffer), _0x4eec4a[_0x63e64a(332)](Int8Array), _0x4eec4a['push'](Uint8Array), _0x4eec4a[_0x63e64a(332)](Uint8ClampedArray), _0x4eec4a[_0x63e64a(332)](Int16Array), _0x4eec4a['push'](Uint16Array), _0x4eec4a[_0x63e64a(332)](Int32Array), _0x4eec4a['push'](Uint32Array), _0x4eec4a[_0x63e64a(332)](Float32Array), _0x4eec4a[_0x63e64a(332)](Float64Array), _0x4eec4a[_0x63e64a(332)](DataView));
    for (var _0x57275b in global) {
        var _0x3e2a5c = ![];
        for (var _0x2d24a8 in _0x4eec4a) {
            if (global[_0x57275b] === _0x4eec4a[_0x2d24a8]) {
                _0x3e2a5c = !![];
                break;
            }
        }
        !_0x3e2a5c && (console[_0x63e64a(353)]('Unknown global: %s', _0x57275b), assert['ok'](![], 'Unknown global found'));
    }
});
var mustCallChecks = [];
function runCallChecks() {
    var _0x43cebc = _0x136595, _0x4c77a1 = mustCallChecks[_0x43cebc(354)](function (_0x151c8f) {
            var _0xe3f0b5 = _0x43cebc;
            return _0x151c8f[_0xe3f0b5(355)] !== _0x151c8f['expected'];
        });
    _0x4c77a1['forEach'](function (_0x83432e) {
        var _0x1abdcc = _0x43cebc;
        console['log'](_0x1abdcc(356), _0x83432e[_0x1abdcc(357)], _0x83432e[_0x1abdcc(358)], _0x83432e[_0x1abdcc(355)]), console['log'](_0x83432e[_0x1abdcc(359)]['split']('\n')[_0x1abdcc(337)](2)[_0x1abdcc(334)]('\n'));
    });
    if (_0x4c77a1[_0x43cebc(360)])
        process['exit'](1);
}
exports[_0x136595(361)] = function (_0x594e6e, _0x55e361) {
    var _0x12cc62 = _0x136595;
    if (typeof _0x55e361 !== _0x12cc62(362))
        _0x55e361 = 1;
    var _0x4068a0 = {
        'expected': _0x55e361,
        'actual': 0,
        'stack': new Error()[_0x12cc62(359)],
        'name': _0x594e6e[_0x12cc62(357)] || _0x12cc62(363)
    };
    if (mustCallChecks[_0x12cc62(360)] === 0)
        process['on'](_0x12cc62(349), runCallChecks);
    return mustCallChecks[_0x12cc62(332)](_0x4068a0), function () {
        var _0x53ac49 = _0x12cc62;
        return _0x4068a0[_0x53ac49(355)]++, _0x594e6e[_0x53ac49(364)](this, arguments);
    };
};