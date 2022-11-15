const _0x1fac = [
    '):\x20',
    'setDiskCacheDirectory',
    'SSYnq',
    'EuEFT',
    'sourceMapSize',
    'mappings',
    'length',
    'sourcesContent',
    'CVwkp',
    'splice',
    'function',
    'sha1',
    'null',
    'object',
    'cannot\x20hash\x20function\x20objects',
    'hex',
    'pDXHW',
    'pKZbU',
    'XKJop',
    'update',
    'cTIUs',
    'keys',
    'isArray',
    'sort',
    'DMXEj',
    'LMaEM',
    '_deepHash',
    'QbIym',
    'digest',
    '_writeFile',
    'AEmAo',
    'iRQXF',
    '.tmp.',
    'renameSync',
    '_cacheDebug',
    '_readFileOrNull',
    'ENOENT',
    'readFileSync',
    'NUmfS',
    'gJIgu',
    'compileOneFile',
    'Njuck',
    'DoWvC',
    'processFilesForTarget',
    '4|3|2|0|1',
    'create',
    'forEach',
    'eBjyQ',
    'getArch',
    '_cache',
    'get',
    '_readCache',
    'Loaded\x20',
    'getDisplayPath',
    'aJwSt',
    'split',
    'set',
    '_writeCacheAsync',
    'await',
    'push',
    'compileOneFileLater',
    'SKIPn',
    'Ran\x20(#',
    ')\x20on:\x20',
    'bad\x20cacheKey:\x20',
    'KHesb',
    'rKlio',
    'join',
    '.cache',
    '_cacheFilename',
    '_readAndParseCompileResultOrNull',
    'parseCompileResult',
    '1TDqCiV',
    '707932tUeMnw',
    '488glflDu',
    '524lhRJFr',
    '1272593MRKiRj',
    '161779rzJfJT',
    '8NrGIEo',
    '81737lwcBMY',
    '1bLEKCU',
    '228613kFPpkX',
    '1193448FmzoBF',
    'require',
    'crypto',
    'createHash',
    'assert',
    'lru-cache',
    '_CACHE_',
    'SIZE',
    '_maxParallelism',
    'toUpperCase',
    '/-/g',
    'replace',
    'yoLyW',
    'hrtRM',
    'xqSsq',
    'KFzGc',
    'DEBUG',
    '_cacheDebugEnabled',
    'env',
    'HUHVo',
    '_cacheSize',
    '_diskCache',
    '_callCount',
    '_afterLinkCallbacks',
    'getCacheKey',
    'CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!',
    'xOlxb',
    'addCompileResult',
    'ZYcPn',
    'compileResultSize',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!',
    'tdilp',
    'stringifyCompileResult',
    'stringify',
    '_parseJSONOrNull',
    'parse',
    'log',
    '_compilerName'
];
const _0x15a6b6 = _0x515b;
(function (_0x1f499c, _0x3f2299) {
    const _0x3fa1b2 = _0x515b;
    while (!![]) {
        try {
            const _0x3ed06a = parseInt(_0x3fa1b2(0x15b)) * parseInt(_0x3fa1b2(0x15c)) + parseInt(_0x3fa1b2(0x15d)) * parseInt(_0x3fa1b2(0x15e)) + parseInt(_0x3fa1b2(0x15f)) + parseInt(_0x3fa1b2(0x160)) + parseInt(_0x3fa1b2(0x161)) * -parseInt(_0x3fa1b2(0x162)) + -parseInt(_0x3fa1b2(0x163)) * -parseInt(_0x3fa1b2(0x164)) + -parseInt(_0x3fa1b2(0x165));
            if (_0x3ed06a === _0x3f2299)
                break;
            else
                _0x1f499c['push'](_0x1f499c['shift']());
        } catch (_0x2683b6) {
            _0x1f499c['push'](_0x1f499c['shift']());
        }
    }
}(_0x1fac, -0xff3f3 + -0x6de94 + 0x2a * 0xd396));
function _0x515b(_0x1de782, _0x130255) {
    return _0x515b = function (_0x3eca9e, _0x506c07) {
        _0x3eca9e = _0x3eca9e - (0x20db + -0x1053 * 0x1 + -0xf * 0x103);
        let _0x27078b = _0x1fac[_0x3eca9e];
        return _0x27078b;
    }, _0x515b(_0x1de782, _0x130255);
}
const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm[_0x15a6b6(0x166)](_0x15a6b6(0x167))[_0x15a6b6(0x168)], assert = Npm['require'](_0x15a6b6(0x169)), LRU = Npm[_0x15a6b6(0x166)](_0x15a6b6(0x16a));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x332d09,
        defaultCacheSize: _0x4a8724,
        maxParallelism: maxParallelism = 0x607 * -0x6 + 0x1bcb + 0x873
    }) {
        const _0x3d5bce = _0x15a6b6, _0x119da9 = {
                'yoLyW': function (_0x666085, _0x3fc1d0) {
                    return _0x666085 + _0x3fc1d0;
                },
                'hrtRM': 'METEOR_',
                'xqSsq': _0x3d5bce(0x16b),
                'KFzGc': function (_0x336e7d, _0x2db669) {
                    return _0x336e7d + _0x2db669;
                },
                'HUHVo': _0x3d5bce(0x16c)
            };
        this['_compilerName'] = _0x332d09, this[_0x3d5bce(0x16d)] = maxParallelism;
        const _0x572101 = _0x332d09[_0x3d5bce(0x16e)]()['replace'](_0x3d5bce(0x16f), '_')[_0x3d5bce(0x170)](/[^A-Z0-9_]/g, ''), _0x5d6c0a = _0x119da9[_0x3d5bce(0x171)](_0x119da9[_0x3d5bce(0x172)] + _0x572101, _0x119da9[_0x3d5bce(0x173)]), _0x5dc68c = _0x119da9[_0x3d5bce(0x174)](_0x5d6c0a, _0x3d5bce(0x175));
        this[_0x3d5bce(0x176)] = !!process[_0x3d5bce(0x177)][_0x5dc68c];
        const _0x54e573 = _0x5d6c0a + _0x119da9[_0x3d5bce(0x178)];
        this[_0x3d5bce(0x179)] = +process[_0x3d5bce(0x177)][_0x54e573] || _0x4a8724, this[_0x3d5bce(0x17a)] = null, this[_0x3d5bce(0x17b)] = 0x1c56 + 0x199 * 0x5 + -0x2453, this[_0x3d5bce(0x17c)] = [];
    }
    [_0x15a6b6(0x17d)](_0x2793e4) {
        const _0x34abc7 = _0x15a6b6, _0x136387 = {
                'EydIa': function (_0x41bc25, _0x5e6904) {
                    return _0x41bc25(_0x5e6904);
                },
                'xOlxb': _0x34abc7(0x17e)
            };
        throw _0x136387['EydIa'](Error, _0x136387[_0x34abc7(0x17f)]);
    }
    [_0x15a6b6(0x180)](_0x24a4d5, _0x2fbec3) {
        const _0x41ecb3 = _0x15a6b6, _0x428ec6 = {
                'sOBtW': function (_0x20f0f7, _0x3cc8be) {
                    return _0x20f0f7(_0x3cc8be);
                },
                'ZYcPn': 'CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!'
            };
        throw _0x428ec6['sOBtW'](Error, _0x428ec6[_0x41ecb3(0x181)]);
    }
    [_0x15a6b6(0x182)](_0x50a03a) {
        const _0x302e8d = _0x15a6b6, _0x2e0b2d = {
                'tdilp': function (_0x3685a6, _0x5c22ba) {
                    return _0x3685a6(_0x5c22ba);
                },
                'wJQxW': _0x302e8d(0x183)
            };
        throw _0x2e0b2d[_0x302e8d(0x184)](Error, _0x2e0b2d['wJQxW']);
    }
    [_0x15a6b6(0x185)](_0x438c92) {
        const _0x5a7cd6 = _0x15a6b6;
        return JSON[_0x5a7cd6(0x186)](_0x438c92);
    }
    ['parseCompileResult'](_0xa84b36) {
        return this['_parseJSONOrNull'](_0xa84b36);
    }
    [_0x15a6b6(0x187)](_0x588776) {
        const _0x17f853 = _0x15a6b6;
        try {
            return JSON[_0x17f853(0x188)](_0x588776);
        } catch (_0x295a2f) {
            if (_0x295a2f instanceof SyntaxError)
                return null;
            throw _0x295a2f;
        }
    }
    ['_cacheDebug'](_0x955edd) {
        const _0x4fe7b9 = _0x15a6b6;
        if (!this['_cacheDebugEnabled'])
            return;
        console[_0x4fe7b9(0x189)]('CACHE(' + this[_0x4fe7b9(0x18a)] + _0x4fe7b9(0x18b) + _0x955edd);
    }
    [_0x15a6b6(0x18c)](_0xb66b69) {
        const _0x425246 = _0x15a6b6, _0x2873b1 = {
                'SSYnq': function (_0x35c4c0, _0x41616b) {
                    return _0x35c4c0(_0x41616b);
                },
                'EuEFT': 'setDiskCacheDirectory\x20called\x20twice?'
            };
        if (this[_0x425246(0x17a)])
            throw _0x2873b1[_0x425246(0x18d)](Error, _0x2873b1[_0x425246(0x18e)]);
        this[_0x425246(0x17a)] = _0xb66b69;
    }
    [_0x15a6b6(0x18f)](_0x7599be) {
        const _0x20dd06 = _0x15a6b6, _0x567e35 = {
                'CVwkp': function (_0x147acf, _0x4a3259) {
                    return _0x147acf + _0x4a3259;
                },
                'ShdNl': function (_0x341ab1, _0xcd8b5c) {
                    return _0x341ab1 + _0xcd8b5c;
                }
            };
        if (!_0x7599be)
            return -0x1 * 0xea1 + 0x4 * 0x4b7 + -0x43b;
        return _0x567e35['ShdNl'](_0x7599be[_0x20dd06(0x190)][_0x20dd06(0x191)], (_0x7599be[_0x20dd06(0x192)] || [])['reduce'](function (_0x17a629, _0x458d0d) {
            const _0x24e6c1 = _0x20dd06;
            return _0x567e35[_0x24e6c1(0x193)](_0x17a629, _0x458d0d ? _0x458d0d[_0x24e6c1(0x191)] : 0x1724 + -0x1e9d + 0x779);
        }, 0x1fae * 0x1 + -0x1919 + -0x695));
    }
    ['afterLink']() {
        const _0x337d3f = _0x15a6b6;
        this[_0x337d3f(0x17c)][_0x337d3f(0x194)](-0x5 * 0x199 + 0x20b7 + -0x18ba)['forEach'](_0x444ce1 => {
            _0x444ce1();
        });
    }
    ['_deepHash'](_0x34d445) {
        const _0x5b1018 = _0x15a6b6, _0xe80da = {
                'DMXEj': function (_0x18c3c1, _0x1c12a7) {
                    return _0x18c3c1 === _0x1c12a7;
                },
                'McEeq': _0x5b1018(0x195),
                'LMaEM': function (_0x4a3d2e, _0x2dc29c) {
                    return _0x4a3d2e + _0x2dc29c;
                },
                'pDXHW': function (_0x430dbf, _0x5d5a86) {
                    return _0x430dbf(_0x5d5a86);
                },
                'pKZbU': _0x5b1018(0x196),
                'XKJop': _0x5b1018(0x197),
                'cTIUs': function (_0x190a74, _0x3acdcc) {
                    return _0x190a74 + _0x3acdcc;
                },
                'wvWdw': _0x5b1018(0x198),
                'bSbVs': _0x5b1018(0x199),
                'QbIym': function (_0x3caf7c, _0x1b01cb) {
                    return _0x3caf7c + _0x1b01cb;
                },
                'kufBd': _0x5b1018(0x19a)
            }, _0x3d05f6 = _0xe80da[_0x5b1018(0x19b)](createHash, _0xe80da[_0x5b1018(0x19c)]);
        let _0x4ab6c9 = typeof _0x34d445;
        _0x34d445 === null && (_0x4ab6c9 = _0xe80da[_0x5b1018(0x19d)]);
        _0x3d05f6[_0x5b1018(0x19e)](_0xe80da[_0x5b1018(0x19f)](_0x4ab6c9, '\x00'));
        switch (_0x4ab6c9) {
        case _0xe80da['wvWdw']:
            const _0x4d35ee = Object[_0x5b1018(0x1a0)](_0x34d445);
            !Array[_0x5b1018(0x1a1)](_0x34d445) && _0x4d35ee[_0x5b1018(0x1a2)]();
            _0x4d35ee['forEach'](_0x1d6995 => {
                const _0x21a077 = _0x5b1018;
                if (_0xe80da[_0x21a077(0x1a3)](typeof _0x34d445[_0x1d6995], _0xe80da['McEeq']))
                    return;
                _0x3d05f6[_0x21a077(0x19e)](_0xe80da[_0x21a077(0x1a4)](_0x1d6995, '\x00'))['update'](this[_0x21a077(0x1a5)](_0x34d445[_0x1d6995]));
            });
            break;
        case _0x5b1018(0x195):
            assert['ok'](![], _0xe80da['bSbVs']);
            break;
        default:
            _0x3d05f6['update'](_0xe80da[_0x5b1018(0x1a6)]('', _0x34d445));
            break;
        }
        return _0x3d05f6[_0x5b1018(0x1a7)](_0xe80da['kufBd']);
    }
    [_0x15a6b6(0x1a8)](_0x321c17, _0x20771b) {
        const _0x3fac25 = _0x15a6b6, _0x387eaa = {
                'AEmAo': function (_0x56fc2a, _0x44421d) {
                    return _0x56fc2a + _0x44421d;
                },
                'iRQXF': function (_0xd51e1e, _0xea5399) {
                    return _0xd51e1e + _0xea5399;
                }
            }, _0x677a9f = _0x387eaa[_0x3fac25(0x1a9)](_0x387eaa[_0x3fac25(0x1aa)](_0x321c17, _0x3fac25(0x1ab)), Random['id']());
        try {
            fs['writeFileSync'](_0x677a9f, _0x20771b), fs[_0x3fac25(0x1ac)](_0x677a9f, _0x321c17);
        } catch (_0x9d4171) {
            this[_0x3fac25(0x1ad)](_0x9d4171);
        }
    }
    [_0x15a6b6(0x1ae)](_0x590b7b) {
        const _0x23087b = _0x15a6b6, _0x1d1606 = {
                'NUmfS': 'utf8',
                'gJIgu': function (_0x35a956, _0x526789) {
                    return _0x35a956 === _0x526789;
                },
                'LYbsW': _0x23087b(0x1af)
            };
        try {
            return fs[_0x23087b(0x1b0)](_0x590b7b, _0x1d1606[_0x23087b(0x1b1)]);
        } catch (_0xde504b) {
            if (_0xde504b && _0x1d1606[_0x23087b(0x1b2)](_0xde504b['code'], _0x1d1606['LYbsW']))
                return null;
            throw _0xde504b;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x1a3360,
        defaultCacheSize: _0x3757b8,
        maxParallelism: maxParallelism = -0x1 * -0x211a + -0x1 * 0xf0b + -0x11fb
    }) {
        const _0x55eb21 = _0x15a6b6;
        super({
            'compilerName': _0x1a3360,
            'defaultCacheSize': _0x3757b8,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this[_0x55eb21(0x179)],
            'length': _0x5420b5 => this['compileResultSize'](_0x5420b5)
        });
    }
    [_0x15a6b6(0x1b3)](_0x41adaf) {
        const _0x2213bd = _0x15a6b6, _0xb2e3d5 = {
                'Njuck': function (_0x2d2507, _0x3bfdd2) {
                    return _0x2d2507(_0x3bfdd2);
                },
                'DoWvC': 'CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!'
            };
        throw _0xb2e3d5[_0x2213bd(0x1b4)](Error, _0xb2e3d5[_0x2213bd(0x1b5)]);
    }
    async [_0x15a6b6(0x1b6)](_0x27ca65) {
        const _0xed6912 = _0x15a6b6, _0x57c6d3 = {
                'eBjyQ': _0xed6912(0x1b7),
                'SKIPn': function (_0x658464) {
                    return _0x658464();
                }
            }, _0x512397 = [], _0x22104a = this[_0xed6912(0x176)] && Object[_0xed6912(0x1b8)](null);
        _0x27ca65[_0xed6912(0x1b9)](_0xefcce7 => {
            const _0x21f215 = _0xed6912, _0x463617 = { 'aJwSt': _0x57c6d3[_0x21f215(0x1ba)] };
            _0x22104a && (_0x22104a[_0xefcce7[_0x21f215(0x1bb)]()] = -0x1 * -0x1901 + 0x16d0 + 0x10 * -0x2fd);
            const _0x24ed62 = () => {
                const _0x4880bd = _0x21f215, _0x5f0361 = this[_0x4880bd(0x1a5)](this[_0x4880bd(0x17d)](_0xefcce7));
                let _0x36227a = this[_0x4880bd(0x1bc)][_0x4880bd(0x1bd)](_0x5f0361);
                !_0x36227a && (_0x36227a = this[_0x4880bd(0x1be)](_0x5f0361), _0x36227a && this['_cacheDebug'](_0x4880bd(0x1bf) + _0xefcce7[_0x4880bd(0x1c0)]()));
                if (!_0x36227a) {
                    const _0x5bb9a7 = _0x463617[_0x4880bd(0x1c1)][_0x4880bd(0x1c2)]('|');
                    let _0x59b2b4 = -0x936 + -0x1c * 0x127 + 0x297a;
                    while (!![]) {
                        switch (_0x5bb9a7[_0x59b2b4++]) {
                        case '0':
                            this[_0x4880bd(0x1bc)][_0x4880bd(0x1c3)](_0x5f0361, _0x36227a);
                            continue;
                        case '1':
                            this[_0x4880bd(0x1c4)](_0x5f0361, _0x36227a);
                            continue;
                        case '2':
                            if (!_0x36227a)
                                return;
                            continue;
                        case '3':
                            _0x36227a = Promise[_0x4880bd(0x1c5)](this[_0x4880bd(0x1b3)](_0xefcce7));
                            continue;
                        case '4':
                            _0x512397[_0x4880bd(0x1c6)](_0xefcce7[_0x4880bd(0x1c0)]());
                            continue;
                        }
                        break;
                    }
                }
                return _0x36227a;
            };
            if (this[_0x21f215(0x1c7)] && _0xefcce7['supportsLazyCompilation'])
                this[_0x21f215(0x1c7)](_0xefcce7, _0x24ed62);
            else {
                const _0x30c228 = _0x57c6d3[_0x21f215(0x1c8)](_0x24ed62);
                _0x30c228 && this[_0x21f215(0x180)](_0xefcce7, _0x30c228);
            }
        }), this[_0xed6912(0x176)] && this[_0xed6912(0x17c)][_0xed6912(0x1c6)](() => {
            const _0x568472 = _0xed6912;
            _0x512397[_0x568472(0x1a2)](), this[_0x568472(0x1ad)](_0x568472(0x1c9) + ++this[_0x568472(0x17b)] + _0x568472(0x1ca) + JSON['stringify'](_0x512397) + '\x20' + JSON['stringify'](Object[_0x568472(0x1a0)](_0x22104a)['sort']()));
        });
    }
    ['_cacheFilename'](_0x2e6b03) {
        const _0x284c83 = _0x15a6b6, _0x5cd037 = {
                'KHesb': function (_0x2274df, _0xb06295) {
                    return _0x2274df + _0xb06295;
                },
                'rKlio': _0x284c83(0x1cb)
            };
        if (!/^[a-f0-9]+$/['test'](_0x2e6b03))
            throw Error(_0x5cd037[_0x284c83(0x1cc)](_0x5cd037[_0x284c83(0x1cd)], _0x2e6b03));
        return path[_0x284c83(0x1ce)](this[_0x284c83(0x17a)], _0x2e6b03 + _0x284c83(0x1cf));
    }
    [_0x15a6b6(0x1be)](_0x4e2bd7) {
        const _0x2d288a = _0x15a6b6;
        if (!this[_0x2d288a(0x17a)])
            return null;
        const _0x550d14 = this[_0x2d288a(0x1d0)](_0x4e2bd7), _0x55da4a = this[_0x2d288a(0x1d1)](_0x550d14);
        if (!_0x55da4a)
            return null;
        return this['_cache'][_0x2d288a(0x1c3)](_0x4e2bd7, _0x55da4a), _0x55da4a;
    }
    [_0x15a6b6(0x1c4)](_0x205891, _0x17c000) {
        const _0x281aa7 = _0x15a6b6;
        if (!this['_diskCache'])
            return;
        const _0x3039c7 = this[_0x281aa7(0x1d0)](_0x205891), _0x42f2f3 = this['stringifyCompileResult'](_0x17c000);
        this[_0x281aa7(0x1a8)](_0x3039c7, _0x42f2f3);
    }
    [_0x15a6b6(0x1d1)](_0x5cc58c) {
        const _0x24ff9c = _0x15a6b6, _0x3fc8ee = this['_readFileOrNull'](_0x5cc58c);
        return this[_0x24ff9c(0x1d2)](_0x3fc8ee);
    }
};
