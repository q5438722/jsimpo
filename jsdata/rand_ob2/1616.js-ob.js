const _0x3afe = [
    'error',
    'kill',
    'isExplorerCommand',
    'explorer.exe',
    'explorer',
    'SystemRoot',
    'join',
    'env',
    'getCmdPath',
    'comspec',
    'System32',
    'cmd.exe',
    'nextTick',
    'handleError',
    'emit',
    'code',
    'syscall',
    'indexOf',
    'Failed\x20to\x20spawn\x20command\x20`',
    '`\x20is\x20installed\x20and\x20on\x20your\x20PATH',
    'name',
    '537119ohExmJ',
    '809RHZBJT',
    '303QsnAbP',
    '500WxNiPH',
    '226LzhAvj',
    '1581530JCSodi',
    '912640kPoaLP',
    '1003888lxhkmE',
    '111847FeKqfM',
    '2xnahAV',
    'underscore-plus',
    'child_process',
    'event-kit',
    'path',
    'exports',
    'emitter',
    'command',
    'stdout',
    'stderr',
    'start',
    'killed',
    'started',
    'win32',
    'options',
    'spawnWithEscapedWindowsArgs',
    'spawn',
    'args',
    'handleEvents',
    'exit',
    'filter',
    'map',
    'toString',
    'unshift',
    'test',
    'clone',
    'windowsVerbatimArguments',
    'onWillThrowError',
    'will-throw-error',
    'bufferStream',
    'setEncoding',
    'utf8',
    'data',
    'length',
    'lastIndexOf',
    'substring',
    'close',
    'killOnWindows',
    'process',
    'pid',
    '(ParentProcessId=',
    'get',
    'processid',
    'killProcess'
];
function _0x2ac0(_0x959b98, _0x81396e) {
    return _0x2ac0 = function (_0x3afe55, _0x2ac0f3) {
        _0x3afe55 = _0x3afe55 - 0x93;
        let _0x34cf9d = _0x3afe[_0x3afe55];
        return _0x34cf9d;
    }, _0x2ac0(_0x959b98, _0x81396e);
}
const _0x35a596 = _0x2ac0;
(function (_0x3d34d3, _0x69c765) {
    const _0x33d0c7 = _0x2ac0;
    while (!![]) {
        try {
            const _0x3cb908 = -parseInt(_0x33d0c7(0x93)) + parseInt(_0x33d0c7(0x94)) * -parseInt(_0x33d0c7(0x95)) + -parseInt(_0x33d0c7(0x96)) * parseInt(_0x33d0c7(0x97)) + parseInt(_0x33d0c7(0x98)) + parseInt(_0x33d0c7(0x99)) + -parseInt(_0x33d0c7(0x9a)) + parseInt(_0x33d0c7(0x9b)) * parseInt(_0x33d0c7(0x9c));
            if (_0x3cb908 === _0x69c765)
                break;
            else
                _0x3d34d3['push'](_0x3d34d3['shift']());
        } catch (_0x58f31c) {
            _0x3d34d3['push'](_0x3d34d3['shift']());
        }
    }
}(_0x3afe, 0xc7e2a));
const _ = require(_0x35a596(0x9d)), ChildProcess = require(_0x35a596(0x9e)), {Emitter} = require(_0x35a596(0x9f)), path = require(_0x35a596(0xa0));
module[_0x35a596(0xa1)] = class BufferedProcess {
    constructor({
        command: _0x5055b9,
        args: _0xd7e1b9,
        options: options = {},
        stdout: _0x7afa62,
        stderr: _0x58a24b,
        exit: _0x2d594a,
        autoStart: autoStart = !![]
    } = {}) {
        const _0x258fe1 = _0x35a596;
        this[_0x258fe1(0xa2)] = new Emitter(), this[_0x258fe1(0xa3)] = _0x5055b9, this['args'] = _0xd7e1b9, this['options'] = options, this[_0x258fe1(0xa4)] = _0x7afa62, this[_0x258fe1(0xa5)] = _0x58a24b, this['exit'] = _0x2d594a, autoStart === !![] && this[_0x258fe1(0xa6)](), this[_0x258fe1(0xa7)] = ![];
    }
    [_0x35a596(0xa6)]() {
        const _0x560637 = _0x35a596;
        if (this['started'] === !![])
            return;
        this[_0x560637(0xa8)] = !![], process['platform'] === _0x560637(0xa9) && this[_0x560637(0xaa)]['shell'] === undefined ? this[_0x560637(0xab)](this[_0x560637(0xa3)], this['args'], this['options']) : this[_0x560637(0xac)](this[_0x560637(0xa3)], this[_0x560637(0xad)], this[_0x560637(0xaa)]), this[_0x560637(0xae)](this['stdout'], this[_0x560637(0xa5)], this[_0x560637(0xaf)]);
    }
    ['spawnWithEscapedWindowsArgs'](_0xc95150, _0x430719, _0x336fe5) {
        const _0x5133b6 = _0x35a596;
        let _0x22d9cc = [];
        _0x430719 && (_0x22d9cc = _0x430719[_0x5133b6(0xb0)](_0x26e2a2 => _0x26e2a2 != null)[_0x5133b6(0xb1)](_0x41ed78 => {
            const _0xa9b41a = _0x5133b6;
            return this['isExplorerCommand'](_0xc95150) && /^\/[a-zA-Z]+,.*$/['test'](_0x41ed78) ? _0x41ed78 : '\x22' + _0x41ed78[_0xa9b41a(0xb2)]()['replace'](/"/g, '\x5c\x22') + '\x22';
        }));
        _0x22d9cc[_0x5133b6(0xb3)](/\s|&|\^|\(|\)|\||#/[_0x5133b6(0xb4)](_0xc95150) ? '\x22' + _0xc95150 + '\x22' : _0xc95150);
        const _0x198939 = _[_0x5133b6(0xb5)](_0x336fe5);
        _0x198939[_0x5133b6(0xb6)] = !![], this[_0x5133b6(0xac)](this['getCmdPath'](), [
            '/s',
            '/d',
            '/c',
            '\x22' + _0x22d9cc['join']('\x20') + '\x22'
        ], _0x198939);
    }
    [_0x35a596(0xb7)](_0x460730) {
        const _0x818b93 = _0x35a596;
        return this['emitter']['on'](_0x818b93(0xb8), _0x460730);
    }
    [_0x35a596(0xb9)](_0x59246c, _0x1b828d, _0x57cc49) {
        const _0x42a399 = _0x35a596;
        _0x59246c[_0x42a399(0xba)](_0x42a399(0xbb));
        let _0x52bbab = '';
        _0x59246c['on'](_0x42a399(0xbc), _0x3d9d73 => {
            const _0x1a8d19 = _0x42a399;
            if (this[_0x1a8d19(0xa7)])
                return;
            let _0x137517 = _0x52bbab[_0x1a8d19(0xbd)];
            _0x52bbab += _0x3d9d73;
            let _0x36b5e0 = _0x3d9d73[_0x1a8d19(0xbe)]('\x0a');
            if (_0x36b5e0 !== -0x1) {
                let _0x377de0 = _0x36b5e0 + _0x137517 + 0x1;
                _0x1b828d(_0x52bbab[_0x1a8d19(0xbf)](0x0, _0x377de0)), _0x52bbab = _0x52bbab['substring'](_0x377de0);
            }
        }), _0x59246c['on'](_0x42a399(0xc0), () => {
            const _0x1f4a32 = _0x42a399;
            if (this[_0x1f4a32(0xa7)])
                return;
            if (_0x52bbab['length'] > 0x0)
                _0x1b828d(_0x52bbab);
            _0x57cc49();
        });
    }
    [_0x35a596(0xc1)]() {
        const _0x10281f = _0x35a596;
        if (!this[_0x10281f(0xc2)])
            return;
        const _0x2e2b49 = this[_0x10281f(0xc2)][_0x10281f(0xc3)], _0x32b99a = 'wmic', _0x122fae = [
                'process',
                'where',
                _0x10281f(0xc4) + _0x2e2b49 + ')',
                _0x10281f(0xc5),
                _0x10281f(0xc6)
            ];
        let _0x14b80a;
        try {
            _0x14b80a = ChildProcess[_0x10281f(0xac)](_0x32b99a, _0x122fae);
        } catch (_0x6f1d03) {
            this[_0x10281f(0xc7)]();
            return;
        }
        _0x14b80a['on'](_0x10281f(0xc8), () => {
        });
        let _0x29b05f = '';
        _0x14b80a['stdout']['on'](_0x10281f(0xbc), _0x3a031d => {
            _0x29b05f += _0x3a031d;
        }), _0x14b80a[_0x10281f(0xa4)]['on'](_0x10281f(0xc0), () => {
            const _0x4f446f = _0x10281f;
            for (let _0x2ff60f of _0x29b05f['split'](/\s+/)) {
                if (!/^\d{1,10}$/[_0x4f446f(0xb4)](_0x2ff60f))
                    continue;
                _0x2ff60f = parseInt(_0x2ff60f, 0xa);
                if (!_0x2ff60f || _0x2ff60f === _0x2e2b49)
                    continue;
                try {
                    process[_0x4f446f(0xc9)](_0x2ff60f);
                } catch (_0x439fe6) {
                }
            }
            this[_0x4f446f(0xc7)]();
        });
    }
    ['killProcess']() {
        const _0xccaf36 = _0x35a596;
        if (this[_0xccaf36(0xc2)])
            this['process']['kill']();
        this[_0xccaf36(0xc2)] = null;
    }
    [_0x35a596(0xca)](_0x387e71) {
        const _0x5e34da = _0x35a596;
        if (_0x387e71 === _0x5e34da(0xcb) || _0x387e71 === _0x5e34da(0xcc))
            return !![];
        else
            return process['env'][_0x5e34da(0xcd)] ? _0x387e71 === path[_0x5e34da(0xce)](process[_0x5e34da(0xcf)][_0x5e34da(0xcd)], _0x5e34da(0xcb)) || _0x387e71 === path[_0x5e34da(0xce)](process['env'][_0x5e34da(0xcd)], _0x5e34da(0xcc)) : ![];
    }
    [_0x35a596(0xd0)]() {
        const _0x33b19a = _0x35a596;
        if (process[_0x33b19a(0xcf)][_0x33b19a(0xd1)])
            return process[_0x33b19a(0xcf)][_0x33b19a(0xd1)];
        else
            return process[_0x33b19a(0xcf)]['SystemRoot'] ? path[_0x33b19a(0xce)](process[_0x33b19a(0xcf)][_0x33b19a(0xcd)], _0x33b19a(0xd2), 'cmd.exe') : _0x33b19a(0xd3);
    }
    [_0x35a596(0xc9)]() {
        const _0x53f89f = _0x35a596;
        if (this[_0x53f89f(0xa7)])
            return;
        this[_0x53f89f(0xa7)] = !![], process['platform'] === 'win32' ? this[_0x53f89f(0xc1)]() : this[_0x53f89f(0xc7)]();
    }
    [_0x35a596(0xac)](_0x4a2fc4, _0x5c4d68, _0x540fba) {
        const _0x71d4fd = _0x35a596;
        try {
            this[_0x71d4fd(0xc2)] = ChildProcess['spawn'](_0x4a2fc4, _0x5c4d68, _0x540fba);
        } catch (_0x5b8e7d) {
            process[_0x71d4fd(0xd4)](() => this[_0x71d4fd(0xd5)](_0x5b8e7d));
        }
    }
    [_0x35a596(0xae)](_0x14551e, _0x2c0610, _0x2073b2) {
        const _0xef9430 = _0x35a596;
        if (!this[_0xef9430(0xc2)])
            return;
        const _0x30c484 = () => {
            const _0x1d244a = _0xef9430;
            if (this[_0x1d244a(0xa7)])
                return;
            _0xb2f63 && _0x5008e4 && _0x1a58cf && typeof _0x2073b2 === 'function' && _0x2073b2(_0x37807d);
        };
        let _0xb2f63 = !![], _0x5008e4 = !![], _0x1a58cf = !![], _0x37807d = 0x0;
        _0x14551e && (_0xb2f63 = ![], this[_0xef9430(0xb9)](this[_0xef9430(0xc2)][_0xef9430(0xa4)], _0x14551e, () => {
            _0xb2f63 = !![], _0x30c484();
        })), _0x2c0610 && (_0x5008e4 = ![], this[_0xef9430(0xb9)](this['process'][_0xef9430(0xa5)], _0x2c0610, () => {
            _0x5008e4 = !![], _0x30c484();
        })), _0x2073b2 && (_0x1a58cf = ![], this[_0xef9430(0xc2)]['on'](_0xef9430(0xaf), _0x5e7396 => {
            _0x37807d = _0x5e7396, _0x1a58cf = !![], _0x30c484();
        })), this[_0xef9430(0xc2)]['on'](_0xef9430(0xc8), _0x12f6c5 => {
            const _0x134d7c = _0xef9430;
            this[_0x134d7c(0xd5)](_0x12f6c5);
        });
    }
    ['handleError'](_0x3873e2) {
        const _0xe2e270 = _0x35a596;
        let _0x4dfeb6 = ![];
        const _0x15e132 = () => {
            _0x4dfeb6 = !![];
        };
        this[_0xe2e270(0xa2)][_0xe2e270(0xd6)]('will-throw-error', {
            'error': _0x3873e2,
            'handle': _0x15e132
        });
        _0x3873e2[_0xe2e270(0xd7)] === 'ENOENT' && _0x3873e2[_0xe2e270(0xd8)][_0xe2e270(0xd9)](_0xe2e270(0xac)) === 0x0 && (_0x3873e2 = new Error(_0xe2e270(0xda) + this[_0xe2e270(0xa3)] + '`.\x20Make\x20sure\x20`' + this[_0xe2e270(0xa3)] + _0xe2e270(0xdb), _0x3873e2[_0xe2e270(0xa0)]), _0x3873e2[_0xe2e270(0xdc)] = 'BufferedProcessError');
        if (!_0x4dfeb6)
            throw _0x3873e2;
    }
};
