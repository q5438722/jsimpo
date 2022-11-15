const _ = require(_0x5dba7a(379)), ChildProcess = require(_0x5dba7a(380)), {Emitter} = require(_0x5dba7a(381)), path = require(_0x5dba7a(382));
function _0x48fe(_0x1a9496, _0x5227b) {
    return _0x48fe = function (_0x5bfbe0, _0x48fe03) {
        _0x5bfbe0 = _0x5bfbe0 - 369;
        let _0x54b107 = _0x5bfb[_0x5bfbe0];
        return _0x54b107;
    }, _0x48fe(_0x1a9496, _0x5227b);
}
module[_0x5dba7a(383)] = class BufferedProcess {
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
        this[_0x37d2e5(384)] = new Emitter(), this['command'] = _0x1d7b3c, this[_0x37d2e5(385)] = _0x4d7204, this['options'] = options, this[_0x37d2e5(386)] = _0x473fd9, this['stderr'] = _0x3f2394, this[_0x37d2e5(387)] = _0x498644, autoStart === !![] && this['start'](), this[_0x37d2e5(388)] = ![];
    }
    [_0x5dba7a(389)]() {
        const _0x51683f = _0x5dba7a;
        if (this['started'] === !![])
            return;
        this['started'] = !![], process[_0x51683f(390)] === _0x51683f(391) && this[_0x51683f(392)][_0x51683f(393)] === undefined ? this['spawnWithEscapedWindowsArgs'](this[_0x51683f(394)], this[_0x51683f(385)], this[_0x51683f(392)]) : this[_0x51683f(395)](this['command'], this['args'], this[_0x51683f(392)]), this[_0x51683f(396)](this[_0x51683f(386)], this[_0x51683f(397)], this[_0x51683f(387)]);
    }
    [_0x5dba7a(398)](_0x581b50, _0x316a69, _0x20c08d) {
        const _0x576a46 = _0x5dba7a;
        let _0x47dab3 = [];
        _0x316a69 && (_0x47dab3 = _0x316a69[_0x576a46(399)](_0x21f453 => _0x21f453 != null)[_0x576a46(400)](_0x2fae0e => {
            const _0xbe46e3 = _0x576a46;
            return this['isExplorerCommand'](_0x581b50) && /^\/[a-zA-Z]+,.*$/[_0xbe46e3(401)](_0x2fae0e) ? _0x2fae0e : '"' + _0x2fae0e[_0xbe46e3(402)]()['replace'](/"/g, '\\"') + '"';
        }));
        _0x47dab3[_0x576a46(403)](/\s|&|\^|\(|\)|\||#/[_0x576a46(401)](_0x581b50) ? '"' + _0x581b50 + '"' : _0x581b50);
        const _0x594f00 = _[_0x576a46(404)](_0x20c08d);
        _0x594f00[_0x576a46(405)] = !![], this[_0x576a46(395)](this[_0x576a46(406)](), [
            '/s',
            '/d',
            '/c',
            '"' + _0x47dab3['join'](' ') + '"'
        ], _0x594f00);
    }
    [_0x5dba7a(407)](_0x4ef474) {
        const _0x4d6bdf = _0x5dba7a;
        return this[_0x4d6bdf(384)]['on'](_0x4d6bdf(408), _0x4ef474);
    }
    ['bufferStream'](_0x549f2a, _0x2e03ed, _0x51087d) {
        const _0x4a8829 = _0x5dba7a;
        _0x549f2a['setEncoding']('utf8');
        let _0x3910a9 = '';
        _0x549f2a['on'](_0x4a8829(409), _0x56ca2c => {
            const _0x1cc3e4 = _0x4a8829;
            if (this[_0x1cc3e4(388)])
                return;
            let _0x5d902a = _0x3910a9[_0x1cc3e4(410)];
            _0x3910a9 += _0x56ca2c;
            let _0x107594 = _0x56ca2c[_0x1cc3e4(411)]('\n');
            if (_0x107594 !== -1) {
                let _0x1a2ecd = _0x107594 + _0x5d902a + 1;
                _0x2e03ed(_0x3910a9[_0x1cc3e4(412)](0, _0x1a2ecd)), _0x3910a9 = _0x3910a9['substring'](_0x1a2ecd);
            }
        }), _0x549f2a['on']('close', () => {
            const _0x551445 = _0x4a8829;
            if (this['killed'])
                return;
            if (_0x3910a9[_0x551445(410)] > 0)
                _0x2e03ed(_0x3910a9);
            _0x51087d();
        });
    }
    [_0x5dba7a(413)]() {
        const _0x282fb3 = _0x5dba7a;
        if (!this[_0x282fb3(414)])
            return;
        const _0xf965be = this['process']['pid'], _0x491e88 = _0x282fb3(415), _0x354d16 = [
                'process',
                _0x282fb3(416),
                '(ParentProcessId=' + _0xf965be + ')',
                _0x282fb3(417),
                'processid'
            ];
        let _0x16fc29;
        try {
            _0x16fc29 = ChildProcess['spawn'](_0x491e88, _0x354d16);
        } catch (_0x174ac6) {
            this[_0x282fb3(418)]();
            return;
        }
        _0x16fc29['on']('error', () => {
        });
        let _0xfde432 = '';
        _0x16fc29[_0x282fb3(386)]['on'](_0x282fb3(409), _0x443c4c => {
            _0xfde432 += _0x443c4c;
        }), _0x16fc29[_0x282fb3(386)]['on'](_0x282fb3(419), () => {
            const _0x2eb6e7 = _0x282fb3;
            for (let _0x28e1d9 of _0xfde432['split'](/\s+/)) {
                if (!/^\d{1,10}$/[_0x2eb6e7(401)](_0x28e1d9))
                    continue;
                _0x28e1d9 = parseInt(_0x28e1d9, 10);
                if (!_0x28e1d9 || _0x28e1d9 === _0xf965be)
                    continue;
                try {
                    process[_0x2eb6e7(420)](_0x28e1d9);
                } catch (_0x2e1f50) {
                }
            }
            this[_0x2eb6e7(418)]();
        });
    }
    [_0x5dba7a(418)]() {
        const _0x2d60f2 = _0x5dba7a;
        if (this[_0x2d60f2(414)])
            this['process'][_0x2d60f2(420)]();
        this[_0x2d60f2(414)] = null;
    }
    [_0x5dba7a(421)](_0x4ef4dd) {
        const _0x57629f = _0x5dba7a;
        if (_0x4ef4dd === 'explorer.exe' || _0x4ef4dd === _0x57629f(422))
            return !![];
        else
            return process[_0x57629f(423)][_0x57629f(424)] ? _0x4ef4dd === path[_0x57629f(425)](process[_0x57629f(423)]['SystemRoot'], _0x57629f(426)) || _0x4ef4dd === path[_0x57629f(425)](process[_0x57629f(423)]['SystemRoot'], _0x57629f(422)) : ![];
    }
    [_0x5dba7a(406)]() {
        const _0x1e917a = _0x5dba7a;
        if (process[_0x1e917a(423)]['comspec'])
            return process['env'][_0x1e917a(427)];
        else
            return process[_0x1e917a(423)]['SystemRoot'] ? path[_0x1e917a(425)](process['env']['SystemRoot'], _0x1e917a(428), _0x1e917a(429)) : _0x1e917a(429);
    }
    [_0x5dba7a(420)]() {
        const _0x4f9354 = _0x5dba7a;
        if (this[_0x4f9354(388)])
            return;
        this[_0x4f9354(388)] = !![], process[_0x4f9354(390)] === _0x4f9354(391) ? this[_0x4f9354(413)]() : this['killProcess']();
    }
    [_0x5dba7a(395)](_0x2598fd, _0x48fb15, _0x10dcd5) {
        const _0x5d0bef = _0x5dba7a;
        try {
            this['process'] = ChildProcess[_0x5d0bef(395)](_0x2598fd, _0x48fb15, _0x10dcd5);
        } catch (_0x586d2a) {
            process[_0x5d0bef(430)](() => this[_0x5d0bef(431)](_0x586d2a));
        }
    }
    ['handleEvents'](_0x51a1b1, _0x5494a7, _0x189b41) {
        const _0x5bd05c = _0x5dba7a;
        if (!this[_0x5bd05c(414)])
            return;
        const _0x2c1166 = () => {
            const _0x341653 = _0x5bd05c;
            if (this[_0x341653(388)])
                return;
            _0x35864a && _0x1db053 && _0x9e430f && typeof _0x189b41 === 'function' && _0x189b41(_0x469ada);
        };
        let _0x35864a = !![], _0x1db053 = !![], _0x9e430f = !![], _0x469ada = 0;
        _0x51a1b1 && (_0x35864a = ![], this[_0x5bd05c(432)](this[_0x5bd05c(414)][_0x5bd05c(386)], _0x51a1b1, () => {
            _0x35864a = !![], _0x2c1166();
        })), _0x5494a7 && (_0x1db053 = ![], this[_0x5bd05c(432)](this[_0x5bd05c(414)][_0x5bd05c(397)], _0x5494a7, () => {
            _0x1db053 = !![], _0x2c1166();
        })), _0x189b41 && (_0x9e430f = ![], this[_0x5bd05c(414)]['on'](_0x5bd05c(387), _0x58278e => {
            _0x469ada = _0x58278e, _0x9e430f = !![], _0x2c1166();
        })), this[_0x5bd05c(414)]['on']('error', _0x47fbd1 => {
            const _0x19ec46 = _0x5bd05c;
            this[_0x19ec46(431)](_0x47fbd1);
        });
    }
    [_0x5dba7a(431)](_0x1848cd) {
        const _0x5d84f2 = _0x5dba7a;
        let _0x1f0937 = ![];
        const _0x5d6cd8 = () => {
            _0x1f0937 = !![];
        };
        this[_0x5d84f2(384)][_0x5d84f2(433)](_0x5d84f2(408), {
            'error': _0x1848cd,
            'handle': _0x5d6cd8
        });
        _0x1848cd[_0x5d84f2(434)] === _0x5d84f2(435) && _0x1848cd['syscall']['indexOf'](_0x5d84f2(395)) === 0 && (_0x1848cd = new Error(_0x5d84f2(436) + this[_0x5d84f2(394)] + _0x5d84f2(437) + this[_0x5d84f2(394)] + _0x5d84f2(438), _0x1848cd[_0x5d84f2(382)]), _0x1848cd['name'] = _0x5d84f2(439));
        if (!_0x1f0937)
            throw _0x1848cd;
    }
};