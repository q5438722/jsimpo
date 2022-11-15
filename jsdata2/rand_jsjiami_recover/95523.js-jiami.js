var path = require('path');
var assert = require('assert');
exports['testDir'] = path['dirname'](__filename);
exports['fixturesDir'] = path['join'](exports['testDir'], 'fixtures');
exports['libDir'] = path['join'](exports['testDir'], '../lib');
exports['tmpDir'] = path['join'](exports['testDir'], 'tmp');
exports['PORT'] = 12346;
if (process['platform'] === 'win32') {
    exports['PIPE'] = '\\\\.\\pipe\\libuv-test';
} else {
    exports['PIPE'] = exports['tmpDir'] + '/test.sock';
}
var util = require('util');
for (var i in util)
    exports[i] = util[i];
function protoCtrChain(_0x498289) {
    var _0x4a1210 = [];
    for (; _0x498289; _0x498289 = _0x498289['__proto__']) {
        _0x4a1210['push'](_0x498289['constructor']);
    }
    return _0x4a1210['join']();
}
exports['indirectInstanceOf'] = function (_0x1af970, _0x32c84e) {
    if (_0x1af970 instanceof _0x32c84e) {
        if ('bioXx' === 'bioXx') {
            return !![];
        } else {
            var _0x20b53a = mustCallChecks['filter'](function (_0x11dfcd) {
                return _0x11dfcd['actual'] !== _0x11dfcd['expected'];
            });
            _0x20b53a['forEach'](function (_0xfa1724) {
                console['log']('Mismatched %s function calls. Expected %d, actual %d.', _0xfa1724['name'], _0xfa1724['expected'], _0xfa1724['actual']);
                console['log'](_0xfa1724['stack']['split']('\n')['slice'](2)['join']('\n'));
            });
            if (_0x20b53a['length'])
                process['exit'](1);
        }
    }
    var _0x8afad9 = protoCtrChain(_0x32c84e['prototype']);
    var _0x4a4d36 = protoCtrChain(_0x1af970);
    return _0x4a4d36['slice'](-_0x8afad9['length']) === _0x8afad9;
};
exports['ddCommand'] = function (_0x33d1d8, _0x33b483) {
    if (process['platform'] === 'win32') {
        if ('WXZOU' !== 'WXZOU') {
            var _0xeb3ded = require('child_process')['spawn'];
            if (process['platform'] === 'win32') {
                return _0xeb3ded('cmd.exe', [
                    '/c',
                    'cd'
                ], options);
            } else {
                return _0xeb3ded('pwd', [], options);
            }
        } else {
            var _0x51f990 = path['resolve'](exports['fixturesDir'], 'create-file.js');
            return '"' + process['argv'][0] + '" "' + _0x51f990 + '" "' + _0x33d1d8 + '" ' + _0x33b483 * 1024;
        }
    } else {
        return _0x2b3f87['rZWkB']('dd if=/dev/zero of="', _0x33d1d8) + '" bs=1024 count=' + _0x33b483;
    }
};
exports['spawnPwd'] = function (_0x3b9526) {
    var _0x33d66c = require('child_process')['spawn'];
    if (process['platform'] === 'win32') {
        return _0x33d66c('cmd.exe', [
            '/c',
            'cd'
        ], _0x3b9526);
    } else {
        return _0x33d66c('pwd', [], _0x3b9526);
    }
};
exports['globalCheck'] = !![];
process['on']('exit', function () {
    if (!exports['globalCheck'])
        return;
    var _0x289b3d = [
        setTimeout,
        setInterval,
        global['setImmediate'],
        clearTimeout,
        clearInterval,
        global['clearImmediate'],
        console,
        Buffer,
        process,
        global
    ];
    if (global['errno']) {
        _0x289b3d['push'](errno);
    }
    if (global['gc']) {
        if ('rJyyF' === 'rJyyF') {
            _0x289b3d['push'](gc);
        } else {
            result['push'](o['constructor']);
        }
    }
    if (global['DTRACE_HTTP_SERVER_RESPONSE']) {
        var _0x10a795 = '6|7|4|5|2|1|0|3'['split']('|'), _0x582b63 = 0;
        while (!![]) {
            switch (_0x10a795[_0x582b63++]) {
            case '0':
                _0x289b3d['push'](DTRACE_NET_SOCKET_READ);
                continue;
            case '1':
                _0x289b3d['push'](DTRACE_NET_SERVER_CONNECTION);
                continue;
            case '2':
                _0x289b3d['push'](DTRACE_NET_STREAM_END);
                continue;
            case '3':
                _0x289b3d['push'](DTRACE_NET_SOCKET_WRITE);
                continue;
            case '4':
                _0x289b3d['push'](DTRACE_HTTP_CLIENT_RESPONSE);
                continue;
            case '5':
                _0x289b3d['push'](DTRACE_HTTP_CLIENT_REQUEST);
                continue;
            case '6':
                _0x289b3d['push'](DTRACE_HTTP_SERVER_RESPONSE);
                continue;
            case '7':
                _0x289b3d['push'](DTRACE_HTTP_SERVER_REQUEST);
                continue;
            }
            break;
        }
    }
    if (global['COUNTER_NET_SERVER_CONNECTION']) {
        if ('pqQFU' === 'ayUVg') {
            console['log']('Mismatched %s function calls. Expected %d, actual %d.', context['name'], context['expected'], context['actual']);
            console['log'](context['stack']['split']('\n')['slice'](2)['join']('\n'));
        } else {
            var _0x1aef8e = '5|4|0|1|2|3'['split']('|'), _0x376612 = 0;
            while (!![]) {
                switch (_0x1aef8e[_0x376612++]) {
                case '0':
                    _0x289b3d['push'](COUNTER_HTTP_SERVER_REQUEST);
                    continue;
                case '1':
                    _0x289b3d['push'](COUNTER_HTTP_SERVER_RESPONSE);
                    continue;
                case '2':
                    _0x289b3d['push'](COUNTER_HTTP_CLIENT_REQUEST);
                    continue;
                case '3':
                    _0x289b3d['push'](COUNTER_HTTP_CLIENT_RESPONSE);
                    continue;
                case '4':
                    _0x289b3d['push'](COUNTER_NET_SERVER_CONNECTION_CLOSE);
                    continue;
                case '5':
                    _0x289b3d['push'](COUNTER_NET_SERVER_CONNECTION);
                    continue;
                }
                break;
            }
        }
    }
    if (global['ArrayBuffer']) {
        if ('TfTCo' !== 'ukLTX') {
            _0x289b3d['push'](ArrayBuffer);
            _0x289b3d['push'](Int8Array);
            _0x289b3d['push'](Uint8Array);
            _0x289b3d['push'](Uint8ClampedArray);
            _0x289b3d['push'](Int16Array);
            _0x289b3d['push'](Uint16Array);
            _0x289b3d['push'](Int32Array);
            _0x289b3d['push'](Uint32Array);
            _0x289b3d['push'](Float32Array);
            _0x289b3d['push'](Float64Array);
            _0x289b3d['push'](DataView);
        } else {
            var _0x3b1b44 = path['resolve'](exports['fixturesDir'], 'create-file.js');
            return _0x191ce5['ApkOc'](_0x191ce5['sUGZs']('"', process['argv'][0]) + '" "', _0x3b1b44) + '" "' + filename + '" ' + kilobytes * 1024;
        }
    }
    for (var _0x59f84e in global) {
        var _0x3d6eda = ![];
        for (var _0x479607 in _0x289b3d) {
            if ('dkXNO' === 'dkXNO') {
                if (global[_0x59f84e] === _0x289b3d[_0x479607]) {
                    if ('umrlW' !== 'umrlW') {
                        _0x289b3d['push'](errno);
                    } else {
                        _0x3d6eda = !![];
                        break;
                    }
                }
            } else {
                console['error']('Unknown global: %s', _0x59f84e);
                assert['ok'](![], 'Unknown global found');
            }
        }
        if (!_0x3d6eda) {
            if ('NZbun' === 'XPalu') {
                context['actual']++;
                return fn['apply'](this, arguments);
            } else {
                console['error']('Unknown global: %s', _0x59f84e);
                assert['ok'](![], 'Unknown global found');
            }
        }
    }
});
var mustCallChecks = [];
function runCallChecks() {
    var _0x5a8349 = mustCallChecks['filter'](function (_0x409f6b) {
        if ('XcFTT' === 'mEGxP') {
            exports['PIPE'] = '\\\\.\\pipe\\libuv-test';
        } else {
            return _0x409f6b['actual'] !== _0x409f6b['expected'];
        }
    });
    _0x5a8349['forEach'](function (_0x3504d4) {
        console['log']('Mismatched %s function calls. Expected %d, actual %d.', _0x3504d4['name'], _0x3504d4['expected'], _0x3504d4['actual']);
        console['log'](_0x3504d4['stack']['split']('\n')['slice'](2)['join']('\n'));
    });
    if (_0x5a8349['length'])
        process['exit'](1);
}
exports['mustCall'] = function (_0x5a9c46, _0x974dd9) {
    var _0x194775 = '2|0|1|3|4'['split']('|'), _0x199785 = 0;
    while (!![]) {
        switch (_0x194775[_0x199785++]) {
        case '0':
            var _0x19aac3 = {
                'expected': _0x974dd9,
                'stack': new Error()['stack'],
                'name': _0x5a9c46['name'] || '<anonymous>'
            };
            continue;
        case '1':
            if (mustCallChecks['length'] === 0)
                process['on']('exit', runCallChecks);
            continue;
        case '2':
            if (typeof _0x974dd9 !== 'number')
                _0x974dd9 = 1;
            continue;
        case '3':
            mustCallChecks['push'](_0x19aac3);
            continue;
        case '4':
            return function () {
                0++;
                return _0x5a9c46['apply'](this, arguments);
            };
        }
        break;
    }
};