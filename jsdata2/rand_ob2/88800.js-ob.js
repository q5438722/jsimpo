const _0x5a18 = [
    '_maxParallelism',
    'toUpperCase',
    'replace',
    'DEBUG',
    'env',
    '_cacheSize',
    '_diskCache',
    '_afterLinkCallbacks',
    'getCacheKey',
    'CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!',
    'addCompileResult',
    'compileResultSize',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!',
    'stringifyCompileResult',
    'stringify',
    'parseCompileResult',
    '_parseJSONOrNull',
    'parse',
    '_cacheDebug',
    'log',
    'CACHE(',
    '_compilerName',
    '):\x20',
    'setDiskCacheDirectory',
    'mappings',
    'reduce',
    'length',
    'afterLink',
    'splice',
    'forEach',
    '_deepHash',
    'sha1',
    'null',
    'update',
    'object',
    'keys',
    'isArray',
    'function',
    'cannot\x20hash\x20function\x20objects',
    'digest',
    'hex',
    '_writeFile',
    '.tmp.',
    'writeFileSync',
    '_readFileOrNull',
    'readFileSync',
    'utf8',
    'code',
    '_cache',
    'compileOneFile',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!',
    'processFilesForTarget',
    '_cacheDebugEnabled',
    'create',
    'getArch',
    'get',
    '_readCache',
    'Loaded\x20',
    'getDisplayPath',
    'set',
    'compileOneFileLater',
    'supportsLazyCompilation',
    'push',
    'sort',
    'Ran\x20(#',
    '_callCount',
    ')\x20on:\x20',
    '_cacheFilename',
    'test',
    'bad\x20cacheKey:\x20',
    '_readAndParseCompileResultOrNull',
    '_writeCacheAsync',
    '10711pEuXMF',
    '64ddELuw',
    '96569oLDykF',
    '74533GzLWfL',
    '5STvXTW',
    '731656nKBvqH',
    '1PSUjHt',
    '22622Bqwyob',
    '384984ORuujN',
    '115YyRJEZ',
    '2558QEveAU',
    'path',
    'require',
    'crypto',
    'lru-cache'
];
const _0x1a825f = _0x4a42;
(function (_0x1df080, _0x21d187) {
    const _0x10dbff = _0x4a42;
    while (!![]) {
        try {
            const _0x334878 = parseInt(_0x10dbff(0x1be)) * -parseInt(_0x10dbff(0x1bf)) + parseInt(_0x10dbff(0x1c0)) + -parseInt(_0x10dbff(0x1c1)) * -parseInt(_0x10dbff(0x1c2)) + parseInt(_0x10dbff(0x1c3)) + parseInt(_0x10dbff(0x1c4)) * -parseInt(_0x10dbff(0x1c5)) + -parseInt(_0x10dbff(0x1c6)) + parseInt(_0x10dbff(0x1c7)) * parseInt(_0x10dbff(0x1c8));
            if (_0x334878 === _0x21d187)
                break;
            else
                _0x1df080['push'](_0x1df080['shift']());
        } catch (_0x21906e) {
            _0x1df080['push'](_0x1df080['shift']());
        }
    }
}(_0x5a18, 0x6221e));
const fs = Plugin['fs'], path = Plugin[_0x1a825f(0x1c9)], createHash = Npm[_0x1a825f(0x1ca)](_0x1a825f(0x1cb))['createHash'], assert = Npm['require']('assert'), LRU = Npm['require'](_0x1a825f(0x1cc));
function _0x4a42(_0x54ee7d, _0x5ecd0f) {
    return _0x4a42 = function (_0x5a18db, _0x4a421b) {
        _0x5a18db = _0x5a18db - 0x1be;
        let _0x552672 = _0x5a18[_0x5a18db];
        return _0x552672;
    }, _0x4a42(_0x54ee7d, _0x5ecd0f);
}
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x39360f,
        defaultCacheSize: _0x4d545d,
        maxParallelism: maxParallelism = 0x14
    }) {
        const _0x48cd89 = _0x1a825f;
        this['_compilerName'] = _0x39360f, this[_0x48cd89(0x1cd)] = maxParallelism;
        const _0x2744c5 = _0x39360f[_0x48cd89(0x1ce)]()[_0x48cd89(0x1cf)]('/-/g', '_')[_0x48cd89(0x1cf)](/[^A-Z0-9_]/g, ''), _0x3f5ab2 = 'METEOR_' + _0x2744c5 + '_CACHE_', _0x1c4e9f = _0x3f5ab2 + _0x48cd89(0x1d0);
        this['_cacheDebugEnabled'] = !!process[_0x48cd89(0x1d1)][_0x1c4e9f];
        const _0x3e2fe9 = _0x3f5ab2 + 'SIZE';
        this[_0x48cd89(0x1d2)] = +process[_0x48cd89(0x1d1)][_0x3e2fe9] || _0x4d545d, this[_0x48cd89(0x1d3)] = null, this['_callCount'] = 0x0, this[_0x48cd89(0x1d4)] = [];
    }
    [_0x1a825f(0x1d5)](_0x12cc8c) {
        const _0x4e2d95 = _0x1a825f;
        throw Error(_0x4e2d95(0x1d6));
    }
    [_0x1a825f(0x1d7)](_0x449fe5, _0x46009b) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!');
    }
    [_0x1a825f(0x1d8)](_0x4e6122) {
        const _0x2e1cf3 = _0x1a825f;
        throw Error(_0x2e1cf3(0x1d9));
    }
    [_0x1a825f(0x1da)](_0x36cb7d) {
        const _0x48b9b0 = _0x1a825f;
        return JSON[_0x48b9b0(0x1db)](_0x36cb7d);
    }
    [_0x1a825f(0x1dc)](_0xe6d46e) {
        const _0x34b598 = _0x1a825f;
        return this[_0x34b598(0x1dd)](_0xe6d46e);
    }
    [_0x1a825f(0x1dd)](_0x2096de) {
        const _0x35cf8b = _0x1a825f;
        try {
            return JSON[_0x35cf8b(0x1de)](_0x2096de);
        } catch (_0x230668) {
            if (_0x230668 instanceof SyntaxError)
                return null;
            throw _0x230668;
        }
    }
    [_0x1a825f(0x1df)](_0x3aab1f) {
        const _0x340edb = _0x1a825f;
        if (!this['_cacheDebugEnabled'])
            return;
        console[_0x340edb(0x1e0)](_0x340edb(0x1e1) + this[_0x340edb(0x1e2)] + _0x340edb(0x1e3) + _0x3aab1f);
    }
    [_0x1a825f(0x1e4)](_0x20f2f3) {
        const _0x27db94 = _0x1a825f;
        if (this[_0x27db94(0x1d3)])
            throw Error('setDiskCacheDirectory\x20called\x20twice?');
        this[_0x27db94(0x1d3)] = _0x20f2f3;
    }
    ['sourceMapSize'](_0xd9d044) {
        const _0x1a41c5 = _0x1a825f;
        if (!_0xd9d044)
            return 0x0;
        return _0xd9d044[_0x1a41c5(0x1e5)]['length'] + (_0xd9d044['sourcesContent'] || [])[_0x1a41c5(0x1e6)](function (_0x58593b, _0x9b4fbd) {
            const _0x1c7604 = _0x1a41c5;
            return _0x58593b + (_0x9b4fbd ? _0x9b4fbd[_0x1c7604(0x1e7)] : 0x0);
        }, 0x0);
    }
    [_0x1a825f(0x1e8)]() {
        const _0x46b2d8 = _0x1a825f;
        this[_0x46b2d8(0x1d4)][_0x46b2d8(0x1e9)](0x0)[_0x46b2d8(0x1ea)](_0x3304cb => {
            _0x3304cb();
        });
    }
    [_0x1a825f(0x1eb)](_0x215fd3) {
        const _0x568061 = _0x1a825f, _0x2b953b = createHash(_0x568061(0x1ec));
        let _0x34efae = typeof _0x215fd3;
        _0x215fd3 === null && (_0x34efae = _0x568061(0x1ed));
        _0x2b953b[_0x568061(0x1ee)](_0x34efae + '\x00');
        switch (_0x34efae) {
        case _0x568061(0x1ef):
            const _0x1a2e97 = Object[_0x568061(0x1f0)](_0x215fd3);
            !Array[_0x568061(0x1f1)](_0x215fd3) && _0x1a2e97['sort']();
            _0x1a2e97[_0x568061(0x1ea)](_0x222c07 => {
                const _0x2f4412 = _0x568061;
                if (typeof _0x215fd3[_0x222c07] === _0x2f4412(0x1f2))
                    return;
                _0x2b953b[_0x2f4412(0x1ee)](_0x222c07 + '\x00')[_0x2f4412(0x1ee)](this[_0x2f4412(0x1eb)](_0x215fd3[_0x222c07]));
            });
            break;
        case _0x568061(0x1f2):
            assert['ok'](![], _0x568061(0x1f3));
            break;
        default:
            _0x2b953b[_0x568061(0x1ee)]('' + _0x215fd3);
            break;
        }
        return _0x2b953b[_0x568061(0x1f4)](_0x568061(0x1f5));
    }
    [_0x1a825f(0x1f6)](_0x5639f2, _0x437edf) {
        const _0x3e6792 = _0x1a825f, _0x3a2d23 = _0x5639f2 + _0x3e6792(0x1f7) + Random['id']();
        try {
            fs[_0x3e6792(0x1f8)](_0x3a2d23, _0x437edf), fs['renameSync'](_0x3a2d23, _0x5639f2);
        } catch (_0x31754f) {
            this[_0x3e6792(0x1df)](_0x31754f);
        }
    }
    [_0x1a825f(0x1f9)](_0x5a24a4) {
        const _0x321d8a = _0x1a825f;
        try {
            return fs[_0x321d8a(0x1fa)](_0x5a24a4, _0x321d8a(0x1fb));
        } catch (_0x333843) {
            if (_0x333843 && _0x333843[_0x321d8a(0x1fc)] === 'ENOENT')
                return null;
            throw _0x333843;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x47ab58,
        defaultCacheSize: _0x182624,
        maxParallelism: maxParallelism = 0x14
    }) {
        const _0x9592cd = _0x1a825f;
        super({
            'compilerName': _0x47ab58,
            'defaultCacheSize': _0x182624,
            'maxParallelism': maxParallelism
        }), this[_0x9592cd(0x1fd)] = new LRU({
            'max': this[_0x9592cd(0x1d2)],
            'length': _0x261f9c => this[_0x9592cd(0x1d8)](_0x261f9c)
        });
    }
    [_0x1a825f(0x1fe)](_0x2ab1fc) {
        const _0x388575 = _0x1a825f;
        throw Error(_0x388575(0x1ff));
    }
    async [_0x1a825f(0x200)](_0x1da9ba) {
        const _0x50d776 = _0x1a825f, _0x3ba0b1 = [], _0x3ee51d = this[_0x50d776(0x201)] && Object[_0x50d776(0x202)](null);
        _0x1da9ba[_0x50d776(0x1ea)](_0x518a98 => {
            const _0x103e58 = _0x50d776;
            _0x3ee51d && (_0x3ee51d[_0x518a98[_0x103e58(0x203)]()] = 0x1);
            const _0x971820 = () => {
                const _0x3fa1a6 = _0x103e58, _0x8e2c34 = this[_0x3fa1a6(0x1eb)](this[_0x3fa1a6(0x1d5)](_0x518a98));
                let _0x48beb9 = this['_cache'][_0x3fa1a6(0x204)](_0x8e2c34);
                !_0x48beb9 && (_0x48beb9 = this[_0x3fa1a6(0x205)](_0x8e2c34), _0x48beb9 && this['_cacheDebug'](_0x3fa1a6(0x206) + _0x518a98[_0x3fa1a6(0x207)]()));
                if (!_0x48beb9) {
                    _0x3ba0b1['push'](_0x518a98[_0x3fa1a6(0x207)]()), _0x48beb9 = Promise['await'](this[_0x3fa1a6(0x1fe)](_0x518a98));
                    if (!_0x48beb9)
                        return;
                    this[_0x3fa1a6(0x1fd)][_0x3fa1a6(0x208)](_0x8e2c34, _0x48beb9), this['_writeCacheAsync'](_0x8e2c34, _0x48beb9);
                }
                return _0x48beb9;
            };
            if (this[_0x103e58(0x209)] && _0x518a98[_0x103e58(0x20a)])
                this[_0x103e58(0x209)](_0x518a98, _0x971820);
            else {
                const _0x2acc35 = _0x971820();
                _0x2acc35 && this[_0x103e58(0x1d7)](_0x518a98, _0x2acc35);
            }
        }), this[_0x50d776(0x201)] && this[_0x50d776(0x1d4)][_0x50d776(0x20b)](() => {
            const _0x3bf81b = _0x50d776;
            _0x3ba0b1[_0x3bf81b(0x20c)](), this[_0x3bf81b(0x1df)](_0x3bf81b(0x20d) + ++this[_0x3bf81b(0x20e)] + _0x3bf81b(0x20f) + JSON[_0x3bf81b(0x1db)](_0x3ba0b1) + '\x20' + JSON['stringify'](Object[_0x3bf81b(0x1f0)](_0x3ee51d)[_0x3bf81b(0x20c)]()));
        });
    }
    [_0x1a825f(0x210)](_0x166cb1) {
        const _0x4c108f = _0x1a825f;
        if (!/^[a-f0-9]+$/[_0x4c108f(0x211)](_0x166cb1))
            throw Error(_0x4c108f(0x212) + _0x166cb1);
        return path['join'](this[_0x4c108f(0x1d3)], _0x166cb1 + '.cache');
    }
    [_0x1a825f(0x205)](_0x4db9c8) {
        const _0x5ea0ff = _0x1a825f;
        if (!this['_diskCache'])
            return null;
        const _0xccd03b = this['_cacheFilename'](_0x4db9c8), _0x4aa04c = this[_0x5ea0ff(0x213)](_0xccd03b);
        if (!_0x4aa04c)
            return null;
        return this[_0x5ea0ff(0x1fd)][_0x5ea0ff(0x208)](_0x4db9c8, _0x4aa04c), _0x4aa04c;
    }
    [_0x1a825f(0x214)](_0x167fe0, _0x507d63) {
        const _0x384d76 = _0x1a825f;
        if (!this[_0x384d76(0x1d3)])
            return;
        const _0x48e8f4 = this[_0x384d76(0x210)](_0x167fe0), _0x1866e8 = this[_0x384d76(0x1da)](_0x507d63);
        this[_0x384d76(0x1f6)](_0x48e8f4, _0x1866e8);
    }
    ['_readAndParseCompileResultOrNull'](_0x56ad21) {
        const _0x3492e7 = _0x1a825f, _0x163a0f = this[_0x3492e7(0x1f9)](_0x56ad21);
        return this[_0x3492e7(0x1dc)](_0x163a0f);
    }
};
