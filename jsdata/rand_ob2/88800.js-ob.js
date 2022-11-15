const _0x1ac1 = [
    'keys',
    'isArray',
    'sort',
    'function',
    'cannot\x20hash\x20function\x20objects',
    'digest',
    'hex',
    '_writeFile',
    'writeFileSync',
    'renameSync',
    '_readFileOrNull',
    'readFileSync',
    'code',
    'ENOENT',
    'compileOneFile',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!',
    'processFilesForTarget',
    'getArch',
    'get',
    '_readCache',
    'Loaded\x20',
    'getDisplayPath',
    'push',
    'await',
    '_cache',
    'compileOneFileLater',
    'addCompileResult',
    'Ran\x20(#',
    'bad\x20cacheKey:\x20',
    'join',
    '.cache',
    '_cacheFilename',
    '_readAndParseCompileResultOrNull',
    'set',
    '_writeCacheAsync',
    '150792bSTuLj',
    '1007922sqbeIk',
    '933585nkdcQa',
    '1009639QAfJnD',
    '1176589lxFkKQ',
    '299514TlRYSN',
    '964tUxioj',
    '5417YAUKbm',
    'crypto',
    'require',
    'lru-cache',
    '_compilerName',
    '_maxParallelism',
    'toUpperCase',
    'replace',
    '_CACHE_',
    'DEBUG',
    'SIZE',
    '_cacheSize',
    'env',
    '_diskCache',
    '_callCount',
    '_afterLinkCallbacks',
    'getCacheKey',
    'CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!',
    'compileResultSize',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!',
    'stringifyCompileResult',
    'stringify',
    'parseCompileResult',
    '_parseJSONOrNull',
    '_cacheDebug',
    '_cacheDebugEnabled',
    'log',
    'CACHE(',
    'setDiskCacheDirectory',
    'sourceMapSize',
    'mappings',
    'length',
    'sourcesContent',
    'splice',
    'forEach',
    '_deepHash',
    'sha1',
    'update'
];
function _0x199f(_0x4d5458, _0xf2ffac) {
    return _0x199f = function (_0x1ac1ea, _0x199fcc) {
        _0x1ac1ea = _0x1ac1ea - 0x1eb;
        let _0x1d640e = _0x1ac1[_0x1ac1ea];
        return _0x1d640e;
    }, _0x199f(_0x4d5458, _0xf2ffac);
}
const _0x5c15ed = _0x199f;
(function (_0x495dad, _0xc5c289) {
    const _0x3a3d6a = _0x199f;
    while (!![]) {
        try {
            const _0x44b3b9 = -parseInt(_0x3a3d6a(0x1eb)) + -parseInt(_0x3a3d6a(0x1ec)) + -parseInt(_0x3a3d6a(0x1ed)) + -parseInt(_0x3a3d6a(0x1ee)) + -parseInt(_0x3a3d6a(0x1ef)) + -parseInt(_0x3a3d6a(0x1f0)) + -parseInt(_0x3a3d6a(0x1f1)) * -parseInt(_0x3a3d6a(0x1f2));
            if (_0x44b3b9 === _0xc5c289)
                break;
            else
                _0x495dad['push'](_0x495dad['shift']());
        } catch (_0x29275b) {
            _0x495dad['push'](_0x495dad['shift']());
        }
    }
}(_0x1ac1, 0x9d36b));
const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require'](_0x5c15ed(0x1f3))['createHash'], assert = Npm[_0x5c15ed(0x1f4)]('assert'), LRU = Npm[_0x5c15ed(0x1f4)](_0x5c15ed(0x1f5));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x34c289,
        defaultCacheSize: _0x19effa,
        maxParallelism: maxParallelism = 0x14
    }) {
        const _0xd5aa6 = _0x5c15ed;
        this[_0xd5aa6(0x1f6)] = _0x34c289, this[_0xd5aa6(0x1f7)] = maxParallelism;
        const _0x163724 = _0x34c289[_0xd5aa6(0x1f8)]()[_0xd5aa6(0x1f9)]('/-/g', '_')[_0xd5aa6(0x1f9)](/[^A-Z0-9_]/g, ''), _0x3a0252 = 'METEOR_' + _0x163724 + _0xd5aa6(0x1fa), _0x57fcad = _0x3a0252 + _0xd5aa6(0x1fb);
        this['_cacheDebugEnabled'] = !!process['env'][_0x57fcad];
        const _0x2213dd = _0x3a0252 + _0xd5aa6(0x1fc);
        this[_0xd5aa6(0x1fd)] = +process[_0xd5aa6(0x1fe)][_0x2213dd] || _0x19effa, this[_0xd5aa6(0x1ff)] = null, this[_0xd5aa6(0x200)] = 0x0, this[_0xd5aa6(0x201)] = [];
    }
    [_0x5c15ed(0x202)](_0x33fd0b) {
        const _0x3fad99 = _0x5c15ed;
        throw Error(_0x3fad99(0x203));
    }
    ['addCompileResult'](_0x241108, _0x5c9d2c) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!');
    }
    [_0x5c15ed(0x204)](_0x56a1a2) {
        const _0x1afc08 = _0x5c15ed;
        throw Error(_0x1afc08(0x205));
    }
    [_0x5c15ed(0x206)](_0x206612) {
        const _0x182dc7 = _0x5c15ed;
        return JSON[_0x182dc7(0x207)](_0x206612);
    }
    [_0x5c15ed(0x208)](_0x4a3822) {
        const _0x3fda04 = _0x5c15ed;
        return this[_0x3fda04(0x209)](_0x4a3822);
    }
    [_0x5c15ed(0x209)](_0x5b9980) {
        try {
            return JSON['parse'](_0x5b9980);
        } catch (_0x2f2b92) {
            if (_0x2f2b92 instanceof SyntaxError)
                return null;
            throw _0x2f2b92;
        }
    }
    [_0x5c15ed(0x20a)](_0x5cb448) {
        const _0x1cacd1 = _0x5c15ed;
        if (!this[_0x1cacd1(0x20b)])
            return;
        console[_0x1cacd1(0x20c)](_0x1cacd1(0x20d) + this[_0x1cacd1(0x1f6)] + '):\x20' + _0x5cb448);
    }
    [_0x5c15ed(0x20e)](_0x350bae) {
        const _0x4b7a06 = _0x5c15ed;
        if (this[_0x4b7a06(0x1ff)])
            throw Error('setDiskCacheDirectory\x20called\x20twice?');
        this[_0x4b7a06(0x1ff)] = _0x350bae;
    }
    [_0x5c15ed(0x20f)](_0x1821f6) {
        const _0x24b3c0 = _0x5c15ed;
        if (!_0x1821f6)
            return 0x0;
        return _0x1821f6[_0x24b3c0(0x210)][_0x24b3c0(0x211)] + (_0x1821f6[_0x24b3c0(0x212)] || [])['reduce'](function (_0x50624d, _0x5d5517) {
            const _0x31d576 = _0x24b3c0;
            return _0x50624d + (_0x5d5517 ? _0x5d5517[_0x31d576(0x211)] : 0x0);
        }, 0x0);
    }
    ['afterLink']() {
        const _0x5eb53b = _0x5c15ed;
        this[_0x5eb53b(0x201)][_0x5eb53b(0x213)](0x0)[_0x5eb53b(0x214)](_0x4427f4 => {
            _0x4427f4();
        });
    }
    [_0x5c15ed(0x215)](_0x848b5) {
        const _0x4a120f = _0x5c15ed, _0x3815d3 = createHash(_0x4a120f(0x216));
        let _0x4cfa3a = typeof _0x848b5;
        _0x848b5 === null && (_0x4cfa3a = 'null');
        _0x3815d3[_0x4a120f(0x217)](_0x4cfa3a + '\x00');
        switch (_0x4cfa3a) {
        case 'object':
            const _0x25ceb2 = Object[_0x4a120f(0x218)](_0x848b5);
            !Array[_0x4a120f(0x219)](_0x848b5) && _0x25ceb2[_0x4a120f(0x21a)]();
            _0x25ceb2[_0x4a120f(0x214)](_0x4766f2 => {
                const _0x225f06 = _0x4a120f;
                if (typeof _0x848b5[_0x4766f2] === _0x225f06(0x21b))
                    return;
                _0x3815d3[_0x225f06(0x217)](_0x4766f2 + '\x00')[_0x225f06(0x217)](this[_0x225f06(0x215)](_0x848b5[_0x4766f2]));
            });
            break;
        case _0x4a120f(0x21b):
            assert['ok'](![], _0x4a120f(0x21c));
            break;
        default:
            _0x3815d3[_0x4a120f(0x217)]('' + _0x848b5);
            break;
        }
        return _0x3815d3[_0x4a120f(0x21d)](_0x4a120f(0x21e));
    }
    [_0x5c15ed(0x21f)](_0x499a9e, _0x21d9bd) {
        const _0x8d11bf = _0x5c15ed, _0x558ecd = _0x499a9e + '.tmp.' + Random['id']();
        try {
            fs[_0x8d11bf(0x220)](_0x558ecd, _0x21d9bd), fs[_0x8d11bf(0x221)](_0x558ecd, _0x499a9e);
        } catch (_0x114fe3) {
            this[_0x8d11bf(0x20a)](_0x114fe3);
        }
    }
    [_0x5c15ed(0x222)](_0x1149bc) {
        const _0x4b709c = _0x5c15ed;
        try {
            return fs[_0x4b709c(0x223)](_0x1149bc, 'utf8');
        } catch (_0x4b1df5) {
            if (_0x4b1df5 && _0x4b1df5[_0x4b709c(0x224)] === _0x4b709c(0x225))
                return null;
            throw _0x4b1df5;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x427042,
        defaultCacheSize: _0x273228,
        maxParallelism: maxParallelism = 0x14
    }) {
        const _0xfbd2be = _0x5c15ed;
        super({
            'compilerName': _0x427042,
            'defaultCacheSize': _0x273228,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this['_cacheSize'],
            'length': _0x1232e1 => this[_0xfbd2be(0x204)](_0x1232e1)
        });
    }
    [_0x5c15ed(0x226)](_0x15845f) {
        const _0x15e823 = _0x5c15ed;
        throw Error(_0x15e823(0x227));
    }
    async [_0x5c15ed(0x228)](_0x5ca0f0) {
        const _0x587d26 = _0x5c15ed, _0x428d39 = [], _0x5942a2 = this[_0x587d26(0x20b)] && Object['create'](null);
        _0x5ca0f0[_0x587d26(0x214)](_0x53ed75 => {
            const _0x3a25b2 = _0x587d26;
            _0x5942a2 && (_0x5942a2[_0x53ed75[_0x3a25b2(0x229)]()] = 0x1);
            const _0x3b0235 = () => {
                const _0x5f4b42 = _0x3a25b2, _0x3d3e98 = this[_0x5f4b42(0x215)](this[_0x5f4b42(0x202)](_0x53ed75));
                let _0x4a92a8 = this['_cache'][_0x5f4b42(0x22a)](_0x3d3e98);
                !_0x4a92a8 && (_0x4a92a8 = this[_0x5f4b42(0x22b)](_0x3d3e98), _0x4a92a8 && this[_0x5f4b42(0x20a)](_0x5f4b42(0x22c) + _0x53ed75[_0x5f4b42(0x22d)]()));
                if (!_0x4a92a8) {
                    _0x428d39[_0x5f4b42(0x22e)](_0x53ed75[_0x5f4b42(0x22d)]()), _0x4a92a8 = Promise[_0x5f4b42(0x22f)](this[_0x5f4b42(0x226)](_0x53ed75));
                    if (!_0x4a92a8)
                        return;
                    this[_0x5f4b42(0x230)]['set'](_0x3d3e98, _0x4a92a8), this['_writeCacheAsync'](_0x3d3e98, _0x4a92a8);
                }
                return _0x4a92a8;
            };
            if (this['compileOneFileLater'] && _0x53ed75['supportsLazyCompilation'])
                this[_0x3a25b2(0x231)](_0x53ed75, _0x3b0235);
            else {
                const _0x2fc174 = _0x3b0235();
                _0x2fc174 && this[_0x3a25b2(0x232)](_0x53ed75, _0x2fc174);
            }
        }), this[_0x587d26(0x20b)] && this[_0x587d26(0x201)][_0x587d26(0x22e)](() => {
            const _0x204bbc = _0x587d26;
            _0x428d39['sort'](), this[_0x204bbc(0x20a)](_0x204bbc(0x233) + ++this[_0x204bbc(0x200)] + ')\x20on:\x20' + JSON[_0x204bbc(0x207)](_0x428d39) + '\x20' + JSON[_0x204bbc(0x207)](Object[_0x204bbc(0x218)](_0x5942a2)[_0x204bbc(0x21a)]()));
        });
    }
    ['_cacheFilename'](_0x5566ac) {
        const _0x3545fb = _0x5c15ed;
        if (!/^[a-f0-9]+$/['test'](_0x5566ac))
            throw Error(_0x3545fb(0x234) + _0x5566ac);
        return path[_0x3545fb(0x235)](this[_0x3545fb(0x1ff)], _0x5566ac + _0x3545fb(0x236));
    }
    [_0x5c15ed(0x22b)](_0x29ec50) {
        const _0xe4bb15 = _0x5c15ed;
        if (!this[_0xe4bb15(0x1ff)])
            return null;
        const _0x327ba3 = this[_0xe4bb15(0x237)](_0x29ec50), _0x903d6c = this[_0xe4bb15(0x238)](_0x327ba3);
        if (!_0x903d6c)
            return null;
        return this[_0xe4bb15(0x230)][_0xe4bb15(0x239)](_0x29ec50, _0x903d6c), _0x903d6c;
    }
    [_0x5c15ed(0x23a)](_0x175fad, _0xc3016b) {
        const _0x4cfbac = _0x5c15ed;
        if (!this[_0x4cfbac(0x1ff)])
            return;
        const _0x46c155 = this[_0x4cfbac(0x237)](_0x175fad), _0x5dc09e = this['stringifyCompileResult'](_0xc3016b);
        this[_0x4cfbac(0x21f)](_0x46c155, _0x5dc09e);
    }
    ['_readAndParseCompileResultOrNull'](_0x25b175) {
        const _0x270eae = _0x5c15ed, _0xe62e75 = this[_0x270eae(0x222)](_0x25b175);
        return this[_0x270eae(0x208)](_0xe62e75);
    }
};
