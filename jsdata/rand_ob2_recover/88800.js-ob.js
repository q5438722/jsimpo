const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require'](_0x5c15ed(499))['createHash'], assert = Npm[_0x5c15ed(500)]('assert'), LRU = Npm[_0x5c15ed(500)](_0x5c15ed(501));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x34c289,
        defaultCacheSize: _0x19effa,
        maxParallelism: maxParallelism = 20
    }) {
        const _0xd5aa6 = _0x5c15ed;
        this[_0xd5aa6(502)] = _0x34c289, this[_0xd5aa6(503)] = maxParallelism;
        const _0x163724 = _0x34c289[_0xd5aa6(504)]()[_0xd5aa6(505)]('/-/g', '_')[_0xd5aa6(505)](/[^A-Z0-9_]/g, ''), _0x3a0252 = 'METEOR_' + _0x163724 + _0xd5aa6(506), _0x57fcad = _0x3a0252 + _0xd5aa6(507);
        this['_cacheDebugEnabled'] = !!process['env'][_0x57fcad];
        const _0x2213dd = _0x3a0252 + _0xd5aa6(508);
        this[_0xd5aa6(509)] = +process[_0xd5aa6(510)][_0x2213dd] || _0x19effa, this[_0xd5aa6(511)] = null, this[_0xd5aa6(512)] = 0, this[_0xd5aa6(513)] = [];
    }
    [_0x5c15ed(514)](_0x33fd0b) {
        const _0x3fad99 = _0x5c15ed;
        throw Error(_0x3fad99(515));
    }
    ['addCompileResult'](_0x241108, _0x5c9d2c) {
        throw Error('CachingCompiler subclass should implement addCompileResult!');
    }
    [_0x5c15ed(516)](_0x56a1a2) {
        const _0x1afc08 = _0x5c15ed;
        throw Error(_0x1afc08(517));
    }
    [_0x5c15ed(518)](_0x206612) {
        const _0x182dc7 = _0x5c15ed;
        return JSON[_0x182dc7(519)](_0x206612);
    }
    [_0x5c15ed(520)](_0x4a3822) {
        const _0x3fda04 = _0x5c15ed;
        return this[_0x3fda04(521)](_0x4a3822);
    }
    [_0x5c15ed(521)](_0x5b9980) {
        try {
            return JSON['parse'](_0x5b9980);
        } catch (_0x2f2b92) {
            if (_0x2f2b92 instanceof SyntaxError)
                return null;
            throw _0x2f2b92;
        }
    }
    [_0x5c15ed(522)](_0x5cb448) {
        const _0x1cacd1 = _0x5c15ed;
        if (!this[_0x1cacd1(523)])
            return;
        console[_0x1cacd1(524)](_0x1cacd1(525) + this[_0x1cacd1(502)] + '): ' + _0x5cb448);
    }
    [_0x5c15ed(526)](_0x350bae) {
        const _0x4b7a06 = _0x5c15ed;
        if (this[_0x4b7a06(511)])
            throw Error('setDiskCacheDirectory called twice?');
        this[_0x4b7a06(511)] = _0x350bae;
    }
    [_0x5c15ed(527)](_0x1821f6) {
        const _0x24b3c0 = _0x5c15ed;
        if (!_0x1821f6)
            return 0;
        return _0x1821f6[_0x24b3c0(528)][_0x24b3c0(529)] + (_0x1821f6[_0x24b3c0(530)] || [])['reduce'](function (_0x50624d, _0x5d5517) {
            const _0x31d576 = _0x24b3c0;
            return _0x50624d + (_0x5d5517 ? _0x5d5517[_0x31d576(529)] : 0);
        }, 0);
    }
    ['afterLink']() {
        const _0x5eb53b = _0x5c15ed;
        this[_0x5eb53b(513)][_0x5eb53b(531)](0)[_0x5eb53b(532)](_0x4427f4 => {
            _0x4427f4();
        });
    }
    [_0x5c15ed(533)](_0x848b5) {
        const _0x4a120f = _0x5c15ed, _0x3815d3 = createHash(_0x4a120f(534));
        let _0x4cfa3a = typeof _0x848b5;
        _0x848b5 === null && (_0x4cfa3a = 'null');
        _0x3815d3[_0x4a120f(535)](_0x4cfa3a + '\0');
        switch (_0x4cfa3a) {
        case 'object':
            const _0x25ceb2 = Object[_0x4a120f(536)](_0x848b5);
            !Array[_0x4a120f(537)](_0x848b5) && _0x25ceb2[_0x4a120f(538)]();
            _0x25ceb2[_0x4a120f(532)](_0x4766f2 => {
                const _0x225f06 = _0x4a120f;
                if (typeof _0x848b5[_0x4766f2] === _0x225f06(539))
                    return;
                _0x3815d3[_0x225f06(535)](_0x4766f2 + '\0')[_0x225f06(535)](this[_0x225f06(533)](_0x848b5[_0x4766f2]));
            });
            break;
        case _0x4a120f(539):
            assert['ok'](![], _0x4a120f(540));
            break;
        default:
            _0x3815d3[_0x4a120f(535)]('' + _0x848b5);
            break;
        }
        return _0x3815d3[_0x4a120f(541)](_0x4a120f(542));
    }
    [_0x5c15ed(543)](_0x499a9e, _0x21d9bd) {
        const _0x8d11bf = _0x5c15ed, _0x558ecd = _0x499a9e + '.tmp.' + Random['id']();
        try {
            fs[_0x8d11bf(544)](_0x558ecd, _0x21d9bd), fs[_0x8d11bf(545)](_0x558ecd, _0x499a9e);
        } catch (_0x114fe3) {
            this[_0x8d11bf(522)](_0x114fe3);
        }
    }
    [_0x5c15ed(546)](_0x1149bc) {
        const _0x4b709c = _0x5c15ed;
        try {
            return fs[_0x4b709c(547)](_0x1149bc, 'utf8');
        } catch (_0x4b1df5) {
            if (_0x4b1df5 && _0x4b1df5[_0x4b709c(548)] === _0x4b709c(549))
                return null;
            throw _0x4b1df5;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x427042,
        defaultCacheSize: _0x273228,
        maxParallelism: maxParallelism = 20
    }) {
        const _0xfbd2be = _0x5c15ed;
        super({
            'compilerName': _0x427042,
            'defaultCacheSize': _0x273228,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this['_cacheSize'],
            'length': _0x1232e1 => this[_0xfbd2be(516)](_0x1232e1)
        });
    }
    [_0x5c15ed(550)](_0x15845f) {
        const _0x15e823 = _0x5c15ed;
        throw Error(_0x15e823(551));
    }
    async _0x5c15ed(552)(_0x5ca0f0) {
        const _0x587d26 = _0x5c15ed, _0x428d39 = [], _0x5942a2 = this[_0x587d26(523)] && Object['create'](null);
        _0x5ca0f0[_0x587d26(532)](_0x53ed75 => {
            const _0x3a25b2 = _0x587d26;
            _0x5942a2 && (_0x5942a2[_0x53ed75[_0x3a25b2(553)]()] = 1);
            const _0x3b0235 = () => {
                const _0x5f4b42 = _0x3a25b2, _0x3d3e98 = this[_0x5f4b42(533)](this[_0x5f4b42(514)](_0x53ed75));
                let _0x4a92a8 = this['_cache'][_0x5f4b42(554)](_0x3d3e98);
                !_0x4a92a8 && (_0x4a92a8 = this[_0x5f4b42(555)](_0x3d3e98), _0x4a92a8 && this[_0x5f4b42(522)](_0x5f4b42(556) + _0x53ed75[_0x5f4b42(557)]()));
                if (!_0x4a92a8) {
                    _0x428d39[_0x5f4b42(558)](_0x53ed75[_0x5f4b42(557)]()), _0x4a92a8 = Promise[_0x5f4b42(559)](this[_0x5f4b42(550)](_0x53ed75));
                    if (!_0x4a92a8)
                        return;
                    this[_0x5f4b42(560)]['set'](_0x3d3e98, _0x4a92a8), this['_writeCacheAsync'](_0x3d3e98, _0x4a92a8);
                }
                return _0x4a92a8;
            };
            if (this['compileOneFileLater'] && _0x53ed75['supportsLazyCompilation'])
                this[_0x3a25b2(561)](_0x53ed75, _0x3b0235);
            else {
                const _0x2fc174 = _0x3b0235();
                _0x2fc174 && this[_0x3a25b2(562)](_0x53ed75, _0x2fc174);
            }
        }), this[_0x587d26(523)] && this[_0x587d26(513)][_0x587d26(558)](() => {
            const _0x204bbc = _0x587d26;
            _0x428d39['sort'](), this[_0x204bbc(522)](_0x204bbc(563) + ++this[_0x204bbc(512)] + ') on: ' + JSON[_0x204bbc(519)](_0x428d39) + ' ' + JSON[_0x204bbc(519)](Object[_0x204bbc(536)](_0x5942a2)[_0x204bbc(538)]()));
        });
    }
    ['_cacheFilename'](_0x5566ac) {
        const _0x3545fb = _0x5c15ed;
        if (!/^[a-f0-9]+$/['test'](_0x5566ac))
            throw Error(_0x3545fb(564) + _0x5566ac);
        return path[_0x3545fb(565)](this[_0x3545fb(511)], _0x5566ac + _0x3545fb(566));
    }
    [_0x5c15ed(555)](_0x29ec50) {
        const _0xe4bb15 = _0x5c15ed;
        if (!this[_0xe4bb15(511)])
            return null;
        const _0x327ba3 = this[_0xe4bb15(567)](_0x29ec50), _0x903d6c = this[_0xe4bb15(568)](_0x327ba3);
        if (!_0x903d6c)
            return null;
        return this[_0xe4bb15(560)][_0xe4bb15(569)](_0x29ec50, _0x903d6c), _0x903d6c;
    }
    [_0x5c15ed(570)](_0x175fad, _0xc3016b) {
        const _0x4cfbac = _0x5c15ed;
        if (!this[_0x4cfbac(511)])
            return;
        const _0x46c155 = this[_0x4cfbac(567)](_0x175fad), _0x5dc09e = this['stringifyCompileResult'](_0xc3016b);
        this[_0x4cfbac(543)](_0x46c155, _0x5dc09e);
    }
    ['_readAndParseCompileResultOrNull'](_0x25b175) {
        const _0x270eae = _0x5c15ed, _0xe62e75 = this[_0x270eae(546)](_0x25b175);
        return this[_0x270eae(520)](_0xe62e75);
    }
};