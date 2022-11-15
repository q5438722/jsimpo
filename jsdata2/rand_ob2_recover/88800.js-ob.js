const fs = Plugin['fs'], path = Plugin[_0x1a825f(457)], createHash = Npm[_0x1a825f(458)](_0x1a825f(459))['createHash'], assert = Npm['require']('assert'), LRU = Npm['require'](_0x1a825f(460));
function _0x4a42(_0x54ee7d, _0x5ecd0f) {
    return _0x4a42 = function (_0x5a18db, _0x4a421b) {
        _0x5a18db = _0x5a18db - 446;
        let _0x552672 = _0x5a18[_0x5a18db];
        return _0x552672;
    }, _0x4a42(_0x54ee7d, _0x5ecd0f);
}
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x39360f,
        defaultCacheSize: _0x4d545d,
        maxParallelism: maxParallelism = 20
    }) {
        const _0x48cd89 = _0x1a825f;
        this['_compilerName'] = _0x39360f, this[_0x48cd89(461)] = maxParallelism;
        const _0x2744c5 = _0x39360f[_0x48cd89(462)]()[_0x48cd89(463)]('/-/g', '_')[_0x48cd89(463)](/[^A-Z0-9_]/g, ''), _0x3f5ab2 = 'METEOR_' + _0x2744c5 + '_CACHE_', _0x1c4e9f = _0x3f5ab2 + _0x48cd89(464);
        this['_cacheDebugEnabled'] = !!process[_0x48cd89(465)][_0x1c4e9f];
        const _0x3e2fe9 = _0x3f5ab2 + 'SIZE';
        this[_0x48cd89(466)] = +process[_0x48cd89(465)][_0x3e2fe9] || _0x4d545d, this[_0x48cd89(467)] = null, this['_callCount'] = 0, this[_0x48cd89(468)] = [];
    }
    [_0x1a825f(469)](_0x12cc8c) {
        const _0x4e2d95 = _0x1a825f;
        throw Error(_0x4e2d95(470));
    }
    [_0x1a825f(471)](_0x449fe5, _0x46009b) {
        throw Error('CachingCompiler subclass should implement addCompileResult!');
    }
    [_0x1a825f(472)](_0x4e6122) {
        const _0x2e1cf3 = _0x1a825f;
        throw Error(_0x2e1cf3(473));
    }
    [_0x1a825f(474)](_0x36cb7d) {
        const _0x48b9b0 = _0x1a825f;
        return JSON[_0x48b9b0(475)](_0x36cb7d);
    }
    [_0x1a825f(476)](_0xe6d46e) {
        const _0x34b598 = _0x1a825f;
        return this[_0x34b598(477)](_0xe6d46e);
    }
    [_0x1a825f(477)](_0x2096de) {
        const _0x35cf8b = _0x1a825f;
        try {
            return JSON[_0x35cf8b(478)](_0x2096de);
        } catch (_0x230668) {
            if (_0x230668 instanceof SyntaxError)
                return null;
            throw _0x230668;
        }
    }
    [_0x1a825f(479)](_0x3aab1f) {
        const _0x340edb = _0x1a825f;
        if (!this['_cacheDebugEnabled'])
            return;
        console[_0x340edb(480)](_0x340edb(481) + this[_0x340edb(482)] + _0x340edb(483) + _0x3aab1f);
    }
    [_0x1a825f(484)](_0x20f2f3) {
        const _0x27db94 = _0x1a825f;
        if (this[_0x27db94(467)])
            throw Error('setDiskCacheDirectory called twice?');
        this[_0x27db94(467)] = _0x20f2f3;
    }
    ['sourceMapSize'](_0xd9d044) {
        const _0x1a41c5 = _0x1a825f;
        if (!_0xd9d044)
            return 0;
        return _0xd9d044[_0x1a41c5(485)]['length'] + (_0xd9d044['sourcesContent'] || [])[_0x1a41c5(486)](function (_0x58593b, _0x9b4fbd) {
            const _0x1c7604 = _0x1a41c5;
            return _0x58593b + (_0x9b4fbd ? _0x9b4fbd[_0x1c7604(487)] : 0);
        }, 0);
    }
    [_0x1a825f(488)]() {
        const _0x46b2d8 = _0x1a825f;
        this[_0x46b2d8(468)][_0x46b2d8(489)](0)[_0x46b2d8(490)](_0x3304cb => {
            _0x3304cb();
        });
    }
    [_0x1a825f(491)](_0x215fd3) {
        const _0x568061 = _0x1a825f, _0x2b953b = createHash(_0x568061(492));
        let _0x34efae = typeof _0x215fd3;
        _0x215fd3 === null && (_0x34efae = _0x568061(493));
        _0x2b953b[_0x568061(494)](_0x34efae + '\0');
        switch (_0x34efae) {
        case _0x568061(495):
            const _0x1a2e97 = Object[_0x568061(496)](_0x215fd3);
            !Array[_0x568061(497)](_0x215fd3) && _0x1a2e97['sort']();
            _0x1a2e97[_0x568061(490)](_0x222c07 => {
                const _0x2f4412 = _0x568061;
                if (typeof _0x215fd3[_0x222c07] === _0x2f4412(498))
                    return;
                _0x2b953b[_0x2f4412(494)](_0x222c07 + '\0')[_0x2f4412(494)](this[_0x2f4412(491)](_0x215fd3[_0x222c07]));
            });
            break;
        case _0x568061(498):
            assert['ok'](![], _0x568061(499));
            break;
        default:
            _0x2b953b[_0x568061(494)]('' + _0x215fd3);
            break;
        }
        return _0x2b953b[_0x568061(500)](_0x568061(501));
    }
    [_0x1a825f(502)](_0x5639f2, _0x437edf) {
        const _0x3e6792 = _0x1a825f, _0x3a2d23 = _0x5639f2 + _0x3e6792(503) + Random['id']();
        try {
            fs[_0x3e6792(504)](_0x3a2d23, _0x437edf), fs['renameSync'](_0x3a2d23, _0x5639f2);
        } catch (_0x31754f) {
            this[_0x3e6792(479)](_0x31754f);
        }
    }
    [_0x1a825f(505)](_0x5a24a4) {
        const _0x321d8a = _0x1a825f;
        try {
            return fs[_0x321d8a(506)](_0x5a24a4, _0x321d8a(507));
        } catch (_0x333843) {
            if (_0x333843 && _0x333843[_0x321d8a(508)] === 'ENOENT')
                return null;
            throw _0x333843;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x47ab58,
        defaultCacheSize: _0x182624,
        maxParallelism: maxParallelism = 20
    }) {
        const _0x9592cd = _0x1a825f;
        super({
            'compilerName': _0x47ab58,
            'defaultCacheSize': _0x182624,
            'maxParallelism': maxParallelism
        }), this[_0x9592cd(509)] = new LRU({
            'max': this[_0x9592cd(466)],
            'length': _0x261f9c => this[_0x9592cd(472)](_0x261f9c)
        });
    }
    [_0x1a825f(510)](_0x2ab1fc) {
        const _0x388575 = _0x1a825f;
        throw Error(_0x388575(511));
    }
    async _0x1a825f(512)(_0x1da9ba) {
        const _0x50d776 = _0x1a825f, _0x3ba0b1 = [], _0x3ee51d = this[_0x50d776(513)] && Object[_0x50d776(514)](null);
        _0x1da9ba[_0x50d776(490)](_0x518a98 => {
            const _0x103e58 = _0x50d776;
            _0x3ee51d && (_0x3ee51d[_0x518a98[_0x103e58(515)]()] = 1);
            const _0x971820 = () => {
                const _0x3fa1a6 = _0x103e58, _0x8e2c34 = this[_0x3fa1a6(491)](this[_0x3fa1a6(469)](_0x518a98));
                let _0x48beb9 = this['_cache'][_0x3fa1a6(516)](_0x8e2c34);
                !_0x48beb9 && (_0x48beb9 = this[_0x3fa1a6(517)](_0x8e2c34), _0x48beb9 && this['_cacheDebug'](_0x3fa1a6(518) + _0x518a98[_0x3fa1a6(519)]()));
                if (!_0x48beb9) {
                    _0x3ba0b1['push'](_0x518a98[_0x3fa1a6(519)]()), _0x48beb9 = Promise['await'](this[_0x3fa1a6(510)](_0x518a98));
                    if (!_0x48beb9)
                        return;
                    this[_0x3fa1a6(509)][_0x3fa1a6(520)](_0x8e2c34, _0x48beb9), this['_writeCacheAsync'](_0x8e2c34, _0x48beb9);
                }
                return _0x48beb9;
            };
            if (this[_0x103e58(521)] && _0x518a98[_0x103e58(522)])
                this[_0x103e58(521)](_0x518a98, _0x971820);
            else {
                const _0x2acc35 = _0x971820();
                _0x2acc35 && this[_0x103e58(471)](_0x518a98, _0x2acc35);
            }
        }), this[_0x50d776(513)] && this[_0x50d776(468)][_0x50d776(523)](() => {
            const _0x3bf81b = _0x50d776;
            _0x3ba0b1[_0x3bf81b(524)](), this[_0x3bf81b(479)](_0x3bf81b(525) + ++this[_0x3bf81b(526)] + _0x3bf81b(527) + JSON[_0x3bf81b(475)](_0x3ba0b1) + ' ' + JSON['stringify'](Object[_0x3bf81b(496)](_0x3ee51d)[_0x3bf81b(524)]()));
        });
    }
    [_0x1a825f(528)](_0x166cb1) {
        const _0x4c108f = _0x1a825f;
        if (!/^[a-f0-9]+$/[_0x4c108f(529)](_0x166cb1))
            throw Error(_0x4c108f(530) + _0x166cb1);
        return path['join'](this[_0x4c108f(467)], _0x166cb1 + '.cache');
    }
    [_0x1a825f(517)](_0x4db9c8) {
        const _0x5ea0ff = _0x1a825f;
        if (!this['_diskCache'])
            return null;
        const _0xccd03b = this['_cacheFilename'](_0x4db9c8), _0x4aa04c = this[_0x5ea0ff(531)](_0xccd03b);
        if (!_0x4aa04c)
            return null;
        return this[_0x5ea0ff(509)][_0x5ea0ff(520)](_0x4db9c8, _0x4aa04c), _0x4aa04c;
    }
    [_0x1a825f(532)](_0x167fe0, _0x507d63) {
        const _0x384d76 = _0x1a825f;
        if (!this[_0x384d76(467)])
            return;
        const _0x48e8f4 = this[_0x384d76(528)](_0x167fe0), _0x1866e8 = this[_0x384d76(474)](_0x507d63);
        this[_0x384d76(502)](_0x48e8f4, _0x1866e8);
    }
    ['_readAndParseCompileResultOrNull'](_0x56ad21) {
        const _0x3492e7 = _0x1a825f, _0x163a0f = this[_0x3492e7(505)](_0x56ad21);
        return this[_0x3492e7(476)](_0x163a0f);
    }
};