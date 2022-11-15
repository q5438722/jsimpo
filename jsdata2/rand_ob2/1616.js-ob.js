const _0x5bfb = [
    'data',
    'length',
    'lastIndexOf',
    'substring',
    'killOnWindows',
    'process',
    'wmic',
    'where',
    'get',
    'killProcess',
    'close',
    'kill',
    'isExplorerCommand',
    'explorer',
    'env',
    'SystemRoot',
    'join',
    'explorer.exe',
    'comspec',
    'System32',
    'cmd.exe',
    'nextTick',
    'handleError',
    'bufferStream',
    'emit',
    'code',
    'ENOENT',
    'Failed\x20to\x20spawn\x20command\x20`',
    '`.\x20Make\x20sure\x20`',
    '`\x20is\x20installed\x20and\x20on\x20your\x20PATH',
    'BufferedProcessError',
    '692170jmmUiW',
    '1413266TAxiak',
    '619354RXOrWS',
    '1112TwhGHw',
    '932QuYpsj',
    '1660589BVyjPh',
    '15OgWHXz',
    '72638lWNFfV',
    '3550489UkQEuX',
    '1yaZQik',
    'underscore-plus',
    'child_process',
    'event-kit',
    'path',
    'exports',
    'emitter',
    'args',
    'stdout',
    'exit',
    'killed',
    'start',
    'platform',
    'win32',
    'options',
    'shell',
    'command',
    'spawn',
    'handleEvents',
    'stderr',
    'spawnWithEscapedWindowsArgs',
    'filter',
    'map',
    'test',
    'toString',
    'unshift',
    'clone',
    'windowsVerbatimArguments',
    'getCmdPath',
    'onWillThrowError',
    'will-throw-error'
];
const _0x5dba7a = _0x48fe;
(function (_0x701b07, _0x190b04) {
    const _0x5969bd = _0x48fe;
    while (!![]) {
        try {
            const _0x29a256 = parseInt(_0x5969bd(0x171)) + parseInt(_0x5969bd(0x172)) + parseInt(_0x5969bd(0x173)) + -parseInt(_0x5969bd(0x174)) * parseInt(_0x5969bd(0x175)) + parseInt(_0x5969bd(0x176)) + -parseInt(_0x5969bd(0x177)) * -parseInt(_0x5969bd(0x178)) + -parseInt(_0x5969bd(0x179)) * parseInt(_0x5969bd(0x17a));
            if (_0x29a256 === _0x190b04)
                break;
            else
                _0x701b07['push'](_0x701b07['shift']());
        } catch (_0x49de39) {
            _0x701b07['push'](_0x701b07['shift']());
        }
    }
}(_0x5bfb, 0xd8d0c));
const _ = require(_0x5dba7a(0x17b)), ChildProcess = require(_0x5dba7a(0x17c)), {Emitter} = require(_0x5dba7a(0x17d)), path = require(_0x5dba7a(0x17e));
function _0x48fe(_0x1a9496, _0x5227b) {
    return _0x48fe = function (_0x5bfbe0, _0x48fe03) {
        _0x5bfbe0 = _0x5bfbe0 - 0x171;
        let _0x54b107 = _0x5bfb[_0x5bfbe0];
        return _0x54b107;
    }, _0x48fe(_0x1a9496, _0x5227b);
}
module[_0x5dba7a(0x17f)] = class BufferedProcess {
    constructor({
        command: _0x1d7b3c,
        args: _0x4d7204,
        options: options = {},
        stdout: _0x473fd9,
        stderr: _0x3f2394,
        exit: _0x498644,
        autoStart: autoStart = !![]
    } = {}) {
        const _0x37d2e5 = _0x5dba7a;
        this[_0x37d2e5(0x180)] = new Emitter(), this['command'] = _0x1d7b3c, this[_0x37d2e5(0x181)] = _0x4d7204, this['options'] = options, this[_0x37d2e5(0x182)] = _0x473fd9, this['stderr'] = _0x3f2394, this[_0x37d2e5(0x183)] = _0x498644, autoStart === !![] && this['start'](), this[_0x37d2e5(0x184)] = ![];
    }
    [_0x5dba7a(0x185)]() {
        const _0x51683f = _0x5dba7a;
        if (this['started'] === !![])
            return;
        this['started'] = !![], process[_0x51683f(0x186)] === _0x51683f(0x187) && this[_0x51683f(0x188)][_0x51683f(0x189)] === undefined ? this['spawnWithEscapedWindowsArgs'](this[_0x51683f(0x18a)], this[_0x51683f(0x181)], this[_0x51683f(0x188)]) : this[_0x51683f(0x18b)](this['command'], this['args'], this[_0x51683f(0x188)]), this[_0x51683f(0x18c)](this[_0x51683f(0x182)], this[_0x51683f(0x18d)], this[_0x51683f(0x183)]);
    }
    [_0x5dba7a(0x18e)](_0x581b50, _0x316a69, _0x20c08d) {
        const _0x576a46 = _0x5dba7a;
        let _0x47dab3 = [];
        _0x316a69 && (_0x47dab3 = _0x316a69[_0x576a46(0x18f)](_0x21f453 => _0x21f453 != null)[_0x576a46(0x190)](_0x2fae0e => {
            const _0xbe46e3 = _0x576a46;
            return this['isExplorerCommand'](_0x581b50) && /^\/[a-zA-Z]+,.*$/[_0xbe46e3(0x191)](_0x2fae0e) ? _0x2fae0e : '\x22' + _0x2fae0e[_0xbe46e3(0x192)]()['replace'](/"/g, '\x5c\x22') + '\x22';
        }));
        _0x47dab3[_0x576a46(0x193)](/\s|&|\^|\(|\)|\||#/[_0x576a46(0x191)](_0x581b50) ? '\x22' + _0x581b50 + '\x22' : _0x581b50);
        const _0x594f00 = _[_0x576a46(0x194)](_0x20c08d);
        _0x594f00[_0x576a46(0x195)] = !![], this[_0x576a46(0x18b)](this[_0x576a46(0x196)](), [
            '/s',
            '/d',
            '/c',
            '\x22' + _0x47dab3['join']('\x20') + '\x22'
        ], _0x594f00);
    }
    [_0x5dba7a(0x197)](_0x4ef474) {
        const _0x4d6bdf = _0x5dba7a;
        return this[_0x4d6bdf(0x180)]['on'](_0x4d6bdf(0x198), _0x4ef474);
    }
    ['bufferStream'](_0x549f2a, _0x2e03ed, _0x51087d) {
        const _0x4a8829 = _0x5dba7a;
        _0x549f2a['setEncoding']('utf8');
        let _0x3910a9 = '';
        _0x549f2a['on'](_0x4a8829(0x199), _0x56ca2c => {
            const _0x1cc3e4 = _0x4a8829;
            if (this[_0x1cc3e4(0x184)])
                return;
            let _0x5d902a = _0x3910a9[_0x1cc3e4(0x19a)];
            _0x3910a9 += _0x56ca2c;
            let _0x107594 = _0x56ca2c[_0x1cc3e4(0x19b)]('\x0a');
            if (_0x107594 !== -0x1) {
                let _0x1a2ecd = _0x107594 + _0x5d902a + 0x1;
                _0x2e03ed(_0x3910a9[_0x1cc3e4(0x19c)](0x0, _0x1a2ecd)), _0x3910a9 = _0x3910a9['substring'](_0x1a2ecd);
            }
        }), _0x549f2a['on']('close', () => {
            const _0x551445 = _0x4a8829;
            if (this['killed'])
                return;
            if (_0x3910a9[_0x551445(0x19a)] > 0x0)
                _0x2e03ed(_0x3910a9);
            _0x51087d();
        });
    }
    [_0x5dba7a(0x19d)]() {
        const _0x282fb3 = _0x5dba7a;
        if (!this[_0x282fb3(0x19e)])
            return;
        const _0xf965be = this['process']['pid'], _0x491e88 = _0x282fb3(0x19f), _0x354d16 = [
                'process',
                _0x282fb3(0x1a0),
                '(ParentProcessId=' + _0xf965be + ')',
                _0x282fb3(0x1a1),
                'processid'
            ];
        let _0x16fc29;
        try {
            _0x16fc29 = ChildProcess['spawn'](_0x491e88, _0x354d16);
        } catch (_0x174ac6) {
            this[_0x282fb3(0x1a2)]();
            return;
        }
        _0x16fc29['on']('error', () => {
        });
        let _0xfde432 = '';
        _0x16fc29[_0x282fb3(0x182)]['on'](_0x282fb3(0x199), _0x443c4c => {
            _0xfde432 += _0x443c4c;
        }), _0x16fc29[_0x282fb3(0x182)]['on'](_0x282fb3(0x1a3), () => {
            const _0x2eb6e7 = _0x282fb3;
            for (let _0x28e1d9 of _0xfde432['split'](/\s+/)) {
                if (!/^\d{1,10}$/[_0x2eb6e7(0x191)](_0x28e1d9))
                    continue;
                _0x28e1d9 = parseInt(_0x28e1d9, 0xa);
                if (!_0x28e1d9 || _0x28e1d9 === _0xf965be)
                    continue;
                try {
                    process[_0x2eb6e7(0x1a4)](_0x28e1d9);
                } catch (_0x2e1f50) {
                }
            }
            this[_0x2eb6e7(0x1a2)]();
        });
    }
    [_0x5dba7a(0x1a2)]() {
        const _0x2d60f2 = _0x5dba7a;
        if (this[_0x2d60f2(0x19e)])
            this['process'][_0x2d60f2(0x1a4)]();
        this[_0x2d60f2(0x19e)] = null;
    }
    [_0x5dba7a(0x1a5)](_0x4ef4dd) {
        const _0x57629f = _0x5dba7a;
        if (_0x4ef4dd === 'explorer.exe' || _0x4ef4dd === _0x57629f(0x1a6))
            return !![];
        else
            return process[_0x57629f(0x1a7)][_0x57629f(0x1a8)] ? _0x4ef4dd === path[_0x57629f(0x1a9)](process[_0x57629f(0x1a7)]['SystemRoot'], _0x57629f(0x1aa)) || _0x4ef4dd === path[_0x57629f(0x1a9)](process[_0x57629f(0x1a7)]['SystemRoot'], _0x57629f(0x1a6)) : ![];
    }
    [_0x5dba7a(0x196)]() {
        const _0x1e917a = _0x5dba7a;
        if (process[_0x1e917a(0x1a7)]['comspec'])
            return process['env'][_0x1e917a(0x1ab)];
        else
            return process[_0x1e917a(0x1a7)]['SystemRoot'] ? path[_0x1e917a(0x1a9)](process['env']['SystemRoot'], _0x1e917a(0x1ac), _0x1e917a(0x1ad)) : _0x1e917a(0x1ad);
    }
    [_0x5dba7a(0x1a4)]() {
        const _0x4f9354 = _0x5dba7a;
        if (this[_0x4f9354(0x184)])
            return;
        this[_0x4f9354(0x184)] = !![], process[_0x4f9354(0x186)] === _0x4f9354(0x187) ? this[_0x4f9354(0x19d)]() : this['killProcess']();
    }
    [_0x5dba7a(0x18b)](_0x2598fd, _0x48fb15, _0x10dcd5) {
        const _0x5d0bef = _0x5dba7a;
        try {
            this['process'] = ChildProcess[_0x5d0bef(0x18b)](_0x2598fd, _0x48fb15, _0x10dcd5);
        } catch (_0x586d2a) {
            process[_0x5d0bef(0x1ae)](() => this[_0x5d0bef(0x1af)](_0x586d2a));
        }
    }
    ['handleEvents'](_0x51a1b1, _0x5494a7, _0x189b41) {
        const _0x5bd05c = _0x5dba7a;
        if (!this[_0x5bd05c(0x19e)])
            return;
        const _0x2c1166 = () => {
            const _0x341653 = _0x5bd05c;
            if (this[_0x341653(0x184)])
                return;
            _0x35864a && _0x1db053 && _0x9e430f && typeof _0x189b41 === 'function' && _0x189b41(_0x469ada);
        };
        let _0x35864a = !![], _0x1db053 = !![], _0x9e430f = !![], _0x469ada = 0x0;
        _0x51a1b1 && (_0x35864a = ![], this[_0x5bd05c(0x1b0)](this[_0x5bd05c(0x19e)][_0x5bd05c(0x182)], _0x51a1b1, () => {
            _0x35864a = !![], _0x2c1166();
        })), _0x5494a7 && (_0x1db053 = ![], this[_0x5bd05c(0x1b0)](this[_0x5bd05c(0x19e)][_0x5bd05c(0x18d)], _0x5494a7, () => {
            _0x1db053 = !![], _0x2c1166();
        })), _0x189b41 && (_0x9e430f = ![], this[_0x5bd05c(0x19e)]['on'](_0x5bd05c(0x183), _0x58278e => {
            _0x469ada = _0x58278e, _0x9e430f = !![], _0x2c1166();
        })), this[_0x5bd05c(0x19e)]['on']('error', _0x47fbd1 => {
            const _0x19ec46 = _0x5bd05c;
            this[_0x19ec46(0x1af)](_0x47fbd1);
        });
    }
    [_0x5dba7a(0x1af)](_0x1848cd) {
        const _0x5d84f2 = _0x5dba7a;
        let _0x1f0937 = ![];
        const _0x5d6cd8 = () => {
            _0x1f0937 = !![];
        };
        this[_0x5d84f2(0x180)][_0x5d84f2(0x1b1)](_0x5d84f2(0x198), {
            'error': _0x1848cd,
            'handle': _0x5d6cd8
        });
        _0x1848cd[_0x5d84f2(0x1b2)] === _0x5d84f2(0x1b3) && _0x1848cd['syscall']['indexOf'](_0x5d84f2(0x18b)) === 0x0 && (_0x1848cd = new Error(_0x5d84f2(0x1b4) + this[_0x5d84f2(0x18a)] + _0x5d84f2(0x1b5) + this[_0x5d84f2(0x18a)] + _0x5d84f2(0x1b6), _0x1848cd[_0x5d84f2(0x17e)]), _0x1848cd['name'] = _0x5d84f2(0x1b7));
        if (!_0x1f0937)
            throw _0x1848cd;
    }
};
