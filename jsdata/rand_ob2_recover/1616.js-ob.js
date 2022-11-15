const _ = require(_0x35a596(157)), ChildProcess = require(_0x35a596(158)), {Emitter} = require(_0x35a596(159)), path = require(_0x35a596(160));
module[_0x35a596(161)] = class BufferedProcess {
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
        this[_0x258fe1(162)] = new Emitter(), this[_0x258fe1(163)] = _0x5055b9, this['args'] = _0xd7e1b9, this['options'] = options, this[_0x258fe1(164)] = _0x7afa62, this[_0x258fe1(165)] = _0x58a24b, this['exit'] = _0x2d594a, autoStart === !![] && this[_0x258fe1(166)](), this[_0x258fe1(167)] = ![];
    }
    [_0x35a596(166)]() {
        const _0x560637 = _0x35a596;
        if (this['started'] === !![])
            return;
        this[_0x560637(168)] = !![], process['platform'] === _0x560637(169) && this[_0x560637(170)]['shell'] === undefined ? this[_0x560637(171)](this[_0x560637(163)], this['args'], this['options']) : this[_0x560637(172)](this[_0x560637(163)], this[_0x560637(173)], this[_0x560637(170)]), this[_0x560637(174)](this['stdout'], this[_0x560637(165)], this[_0x560637(175)]);
    }
    ['spawnWithEscapedWindowsArgs'](_0xc95150, _0x430719, _0x336fe5) {
        const _0x5133b6 = _0x35a596;
        let _0x22d9cc = [];
        _0x430719 && (_0x22d9cc = _0x430719[_0x5133b6(176)](_0x26e2a2 => _0x26e2a2 != null)[_0x5133b6(177)](_0x41ed78 => {
            const _0xa9b41a = _0x5133b6;
            return this['isExplorerCommand'](_0xc95150) && /^\/[a-zA-Z]+,.*$/['test'](_0x41ed78) ? _0x41ed78 : '"' + _0x41ed78[_0xa9b41a(178)]()['replace'](/"/g, '\\"') + '"';
        }));
        _0x22d9cc[_0x5133b6(179)](/\s|&|\^|\(|\)|\||#/[_0x5133b6(180)](_0xc95150) ? '"' + _0xc95150 + '"' : _0xc95150);
        const _0x198939 = _[_0x5133b6(181)](_0x336fe5);
        _0x198939[_0x5133b6(182)] = !![], this[_0x5133b6(172)](this['getCmdPath'](), [
            '/s',
            '/d',
            '/c',
            '"' + _0x22d9cc['join'](' ') + '"'
        ], _0x198939);
    }
    [_0x35a596(183)](_0x460730) {
        const _0x818b93 = _0x35a596;
        return this['emitter']['on'](_0x818b93(184), _0x460730);
    }
    [_0x35a596(185)](_0x59246c, _0x1b828d, _0x57cc49) {
        const _0x42a399 = _0x35a596;
        _0x59246c[_0x42a399(186)](_0x42a399(187));
        let _0x52bbab = '';
        _0x59246c['on'](_0x42a399(188), _0x3d9d73 => {
            const _0x1a8d19 = _0x42a399;
            if (this[_0x1a8d19(167)])
                return;
            let _0x137517 = _0x52bbab[_0x1a8d19(189)];
            _0x52bbab += _0x3d9d73;
            let _0x36b5e0 = _0x3d9d73[_0x1a8d19(190)]('\n');
            if (_0x36b5e0 !== -1) {
                let _0x377de0 = _0x36b5e0 + _0x137517 + 1;
                _0x1b828d(_0x52bbab[_0x1a8d19(191)](0, _0x377de0)), _0x52bbab = _0x52bbab['substring'](_0x377de0);
            }
        }), _0x59246c['on'](_0x42a399(192), () => {
            const _0x1f4a32 = _0x42a399;
            if (this[_0x1f4a32(167)])
                return;
            if (_0x52bbab['length'] > 0)
                _0x1b828d(_0x52bbab);
            _0x57cc49();
        });
    }
    [_0x35a596(193)]() {
        const _0x10281f = _0x35a596;
        if (!this[_0x10281f(194)])
            return;
        const _0x2e2b49 = this[_0x10281f(194)][_0x10281f(195)], _0x32b99a = 'wmic', _0x122fae = [
                'process',
                'where',
                _0x10281f(196) + _0x2e2b49 + ')',
                _0x10281f(197),
                _0x10281f(198)
            ];
        let _0x14b80a;
        try {
            _0x14b80a = ChildProcess[_0x10281f(172)](_0x32b99a, _0x122fae);
        } catch (_0x6f1d03) {
            this[_0x10281f(199)]();
            return;
        }
        _0x14b80a['on'](_0x10281f(200), () => {
        });
        let _0x29b05f = '';
        _0x14b80a['stdout']['on'](_0x10281f(188), _0x3a031d => {
            _0x29b05f += _0x3a031d;
        }), _0x14b80a[_0x10281f(164)]['on'](_0x10281f(192), () => {
            const _0x4f446f = _0x10281f;
            for (let _0x2ff60f of _0x29b05f['split'](/\s+/)) {
                if (!/^\d{1,10}$/[_0x4f446f(180)](_0x2ff60f))
                    continue;
                _0x2ff60f = parseInt(_0x2ff60f, 10);
                if (!_0x2ff60f || _0x2ff60f === _0x2e2b49)
                    continue;
                try {
                    process[_0x4f446f(201)](_0x2ff60f);
                } catch (_0x439fe6) {
                }
            }
            this[_0x4f446f(199)]();
        });
    }
    ['killProcess']() {
        const _0xccaf36 = _0x35a596;
        if (this[_0xccaf36(194)])
            this['process']['kill']();
        this[_0xccaf36(194)] = null;
    }
    [_0x35a596(202)](_0x387e71) {
        const _0x5e34da = _0x35a596;
        if (_0x387e71 === _0x5e34da(203) || _0x387e71 === _0x5e34da(204))
            return !![];
        else
            return process['env'][_0x5e34da(205)] ? _0x387e71 === path[_0x5e34da(206)](process[_0x5e34da(207)][_0x5e34da(205)], _0x5e34da(203)) || _0x387e71 === path[_0x5e34da(206)](process['env'][_0x5e34da(205)], _0x5e34da(204)) : ![];
    }
    [_0x35a596(208)]() {
        const _0x33b19a = _0x35a596;
        if (process[_0x33b19a(207)][_0x33b19a(209)])
            return process[_0x33b19a(207)][_0x33b19a(209)];
        else
            return process[_0x33b19a(207)]['SystemRoot'] ? path[_0x33b19a(206)](process[_0x33b19a(207)][_0x33b19a(205)], _0x33b19a(210), 'cmd.exe') : _0x33b19a(211);
    }
    [_0x35a596(201)]() {
        const _0x53f89f = _0x35a596;
        if (this[_0x53f89f(167)])
            return;
        this[_0x53f89f(167)] = !![], process['platform'] === 'win32' ? this[_0x53f89f(193)]() : this[_0x53f89f(199)]();
    }
    [_0x35a596(172)](_0x4a2fc4, _0x5c4d68, _0x540fba) {
        const _0x71d4fd = _0x35a596;
        try {
            this[_0x71d4fd(194)] = ChildProcess['spawn'](_0x4a2fc4, _0x5c4d68, _0x540fba);
        } catch (_0x5b8e7d) {
            process[_0x71d4fd(212)](() => this[_0x71d4fd(213)](_0x5b8e7d));
        }
    }
    [_0x35a596(174)](_0x14551e, _0x2c0610, _0x2073b2) {
        const _0xef9430 = _0x35a596;
        if (!this[_0xef9430(194)])
            return;
        const _0x30c484 = () => {
            const _0x1d244a = _0xef9430;
            if (this[_0x1d244a(167)])
                return;
            _0xb2f63 && _0x5008e4 && _0x1a58cf && typeof _0x2073b2 === 'function' && _0x2073b2(_0x37807d);
        };
        let _0xb2f63 = !![], _0x5008e4 = !![], _0x1a58cf = !![], _0x37807d = 0;
        _0x14551e && (_0xb2f63 = ![], this[_0xef9430(185)](this[_0xef9430(194)][_0xef9430(164)], _0x14551e, () => {
            _0xb2f63 = !![], _0x30c484();
        })), _0x2c0610 && (_0x5008e4 = ![], this[_0xef9430(185)](this['process'][_0xef9430(165)], _0x2c0610, () => {
            _0x5008e4 = !![], _0x30c484();
        })), _0x2073b2 && (_0x1a58cf = ![], this[_0xef9430(194)]['on'](_0xef9430(175), _0x5e7396 => {
            _0x37807d = _0x5e7396, _0x1a58cf = !![], _0x30c484();
        })), this[_0xef9430(194)]['on'](_0xef9430(200), _0x12f6c5 => {
            const _0x134d7c = _0xef9430;
            this[_0x134d7c(213)](_0x12f6c5);
        });
    }
    ['handleError'](_0x3873e2) {
        const _0xe2e270 = _0x35a596;
        let _0x4dfeb6 = ![];
        const _0x15e132 = () => {
            _0x4dfeb6 = !![];
        };
        this[_0xe2e270(162)][_0xe2e270(214)]('will-throw-error', {
            'error': _0x3873e2,
            'handle': _0x15e132
        });
        _0x3873e2[_0xe2e270(215)] === 'ENOENT' && _0x3873e2[_0xe2e270(216)][_0xe2e270(217)](_0xe2e270(172)) === 0 && (_0x3873e2 = new Error(_0xe2e270(218) + this[_0xe2e270(163)] + '`. Make sure `' + this[_0xe2e270(163)] + _0xe2e270(219), _0x3873e2[_0xe2e270(160)]), _0x3873e2[_0xe2e270(220)] = 'BufferedProcessError');
        if (!_0x4dfeb6)
            throw _0x3873e2;
    }
};