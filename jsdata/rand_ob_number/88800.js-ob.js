const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require']('crypto')['createHash'], assert = Npm['require']('assert'), LRU = Npm['require']('lru-cache');
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x3850cc,
        defaultCacheSize: _0x5152d6,
        maxParallelism: maxParallelism = 0x49a * 0x8 + -0x1 * -0xe18 + -0x32d4
    }) {
        this['_compilerName'] = _0x3850cc, this['_maxParallelism'] = maxParallelism;
        const _0x476797 = _0x3850cc['toUpperCase']()['replace']('/-/g', '_')['replace'](/[^A-Z0-9_]/g, ''), _0x2b9cdf = 'METEOR_' + _0x476797 + '_CACHE_', _0x197716 = _0x2b9cdf + 'DEBUG';
        this['_cacheDebugEnabled'] = !!process['env'][_0x197716];
        const _0x1dc829 = _0x2b9cdf + 'SIZE';
        this['_cacheSize'] = +process['env'][_0x1dc829] || _0x5152d6, this['_diskCache'] = null, this['_callCount'] = -0xe3b + 0x1 * 0x134d + -0x16 * 0x3b, this['_afterLinkCallbacks'] = [];
    }
    ['getCacheKey'](_0x1ebcab) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!');
    }
    ['addCompileResult'](_0x22fadf, _0x37a88e) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!');
    }
    ['compileResultSize'](_0x668104) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!');
    }
    ['stringifyCompileResult'](_0x58e9ff) {
        return JSON['stringify'](_0x58e9ff);
    }
    ['parseCompileResult'](_0x5ac092) {
        return this['_parseJSONOrNull'](_0x5ac092);
    }
    ['_parseJSONOrNull'](_0x3b66e3) {
        try {
            return JSON['parse'](_0x3b66e3);
        } catch (_0x3e0a16) {
            if (_0x3e0a16 instanceof SyntaxError)
                return null;
            throw _0x3e0a16;
        }
    }
    ['_cacheDebug'](_0xf11843) {
        if (!this['_cacheDebugEnabled'])
            return;
        console['log']('CACHE(' + this['_compilerName'] + '):\x20' + _0xf11843);
    }
    ['setDiskCacheDirectory'](_0x12a4b0) {
        if (this['_diskCache'])
            throw Error('setDiskCacheDirectory\x20called\x20twice?');
        this['_diskCache'] = _0x12a4b0;
    }
    ['sourceMapSize'](_0x2c9d06) {
        if (!_0x2c9d06)
            return -0x13bd + 0x132 + 0x128b;
        return _0x2c9d06['mappings']['length'] + (_0x2c9d06['sourcesContent'] || [])['reduce'](function (_0x687be6, _0x51844d) {
            return _0x687be6 + (_0x51844d ? _0x51844d['length'] : 0x15eb + 0x3 * -0x141 + -0xa6 * 0x1c);
        }, -0x7 * -0x461 + 0x43 * 0x3d + -0x2e9e);
    }
    ['afterLink']() {
        this['_afterLinkCallbacks']['splice'](-0x2 * 0xe88 + -0x2089 * 0x1 + 0x3d99)['forEach'](_0x53a06c => {
            _0x53a06c();
        });
    }
    ['_deepHash'](_0x15d0b3) {
        const _0x18db39 = createHash('sha1');
        let _0x385606 = typeof _0x15d0b3;
        _0x15d0b3 === null && (_0x385606 = 'null');
        _0x18db39['update'](_0x385606 + '\x00');
        switch (_0x385606) {
        case 'object':
            const _0x38644e = Object['keys'](_0x15d0b3);
            !Array['isArray'](_0x15d0b3) && _0x38644e['sort']();
            _0x38644e['forEach'](_0x254aeb => {
                if (typeof _0x15d0b3[_0x254aeb] === 'function')
                    return;
                _0x18db39['update'](_0x254aeb + '\x00')['update'](this['_deepHash'](_0x15d0b3[_0x254aeb]));
            });
            break;
        case 'function':
            assert['ok'](![], 'cannot\x20hash\x20function\x20objects');
            break;
        default:
            _0x18db39['update']('' + _0x15d0b3);
            break;
        }
        return _0x18db39['digest']('hex');
    }
    ['_writeFile'](_0x4df808, _0x3ac36a) {
        const _0x5612a6 = _0x4df808 + '.tmp.' + Random['id']();
        try {
            fs['writeFileSync'](_0x5612a6, _0x3ac36a), fs['renameSync'](_0x5612a6, _0x4df808);
        } catch (_0x380be0) {
            this['_cacheDebug'](_0x380be0);
        }
    }
    ['_readFileOrNull'](_0x46c573) {
        try {
            return fs['readFileSync'](_0x46c573, 'utf8');
        } catch (_0xa37269) {
            if (_0xa37269 && _0xa37269['code'] === 'ENOENT')
                return null;
            throw _0xa37269;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x18d858,
        defaultCacheSize: _0x439476,
        maxParallelism: maxParallelism = -0x4 * 0x971 + 0x4c1 * 0x1 + -0x1 * -0x2117
    }) {
        super({
            'compilerName': _0x18d858,
            'defaultCacheSize': _0x439476,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this['_cacheSize'],
            'length': _0x386ad2 => this['compileResultSize'](_0x386ad2)
        });
    }
    ['compileOneFile'](_0x25b335) {
        throw Error('CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!');
    }
    async ['processFilesForTarget'](_0x4e06ed) {
        const _0xc6ed89 = [], _0x4c3d68 = this['_cacheDebugEnabled'] && Object['create'](null);
        _0x4e06ed['forEach'](_0x1d2aeb => {
            _0x4c3d68 && (_0x4c3d68[_0x1d2aeb['getArch']()] = 0x138b + -0x4 * -0x271 + 0x79 * -0x3e);
            const _0x580146 = () => {
                const _0x2b3b06 = this['_deepHash'](this['getCacheKey'](_0x1d2aeb));
                let _0x1afbfb = this['_cache']['get'](_0x2b3b06);
                !_0x1afbfb && (_0x1afbfb = this['_readCache'](_0x2b3b06), _0x1afbfb && this['_cacheDebug']('Loaded\x20' + _0x1d2aeb['getDisplayPath']()));
                if (!_0x1afbfb) {
                    _0xc6ed89['push'](_0x1d2aeb['getDisplayPath']()), _0x1afbfb = Promise['await'](this['compileOneFile'](_0x1d2aeb));
                    if (!_0x1afbfb)
                        return;
                    this['_cache']['set'](_0x2b3b06, _0x1afbfb), this['_writeCacheAsync'](_0x2b3b06, _0x1afbfb);
                }
                return _0x1afbfb;
            };
            if (this['compileOneFileLater'] && _0x1d2aeb['supportsLazyCompilation'])
                this['compileOneFileLater'](_0x1d2aeb, _0x580146);
            else {
                const _0xa18018 = _0x580146();
                _0xa18018 && this['addCompileResult'](_0x1d2aeb, _0xa18018);
            }
        }), this['_cacheDebugEnabled'] && this['_afterLinkCallbacks']['push'](() => {
            _0xc6ed89['sort'](), this['_cacheDebug']('Ran\x20(#' + ++this['_callCount'] + ')\x20on:\x20' + JSON['stringify'](_0xc6ed89) + '\x20' + JSON['stringify'](Object['keys'](_0x4c3d68)['sort']()));
        });
    }
    ['_cacheFilename'](_0x2d4cdc) {
        if (!/^[a-f0-9]+$/['test'](_0x2d4cdc))
            throw Error('bad\x20cacheKey:\x20' + _0x2d4cdc);
        return path['join'](this['_diskCache'], _0x2d4cdc + '.cache');
    }
    ['_readCache'](_0x53769c) {
        if (!this['_diskCache'])
            return null;
        const _0x1d3d3a = this['_cacheFilename'](_0x53769c), _0x36d173 = this['_readAndParseCompileResultOrNull'](_0x1d3d3a);
        if (!_0x36d173)
            return null;
        return this['_cache']['set'](_0x53769c, _0x36d173), _0x36d173;
    }
    ['_writeCacheAsync'](_0x531710, _0x56ea1a) {
        if (!this['_diskCache'])
            return;
        const _0x1af07b = this['_cacheFilename'](_0x531710), _0x2b515d = this['stringifyCompileResult'](_0x56ea1a);
        this['_writeFile'](_0x1af07b, _0x2b515d);
    }
    ['_readAndParseCompileResultOrNull'](_0x10b20c) {
        const _0x2eb604 = this['_readFileOrNull'](_0x10b20c);
        return this['parseCompileResult'](_0x2eb604);
    }
};
