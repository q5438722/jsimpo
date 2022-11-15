const _0x7ab5 = [
    'set',
    'Ran\x20(#',
    ')\x20on:\x20',
    'keys',
    '_cacheFilename',
    'bad\x20cacheKey:\x20',
    'test',
    'HAQhj',
    'UckaB',
    'join',
    'ivrdJ',
    '_readAndParseCompileResultOrNull',
    'stringifyCompileResult',
    '_writeFile',
    '394439xGMRsD',
    '2761APpQtH',
    '221JlQtPd',
    '620779cBxucN',
    '1IDMeUi',
    '169274HOuETj',
    '473448lcnFPX',
    '54347NkRFXl',
    '1xIxBLv',
    '176305BlwYaG',
    'require',
    'assert',
    'lru-cache',
    '/-/g',
    '_CACHE_',
    '_compilerName',
    '_maxParallelism',
    'toUpperCase',
    'replace',
    'TjHQD',
    'PrdZJ',
    'fqifB',
    'NuTGh',
    'env',
    '_diskCache',
    '_callCount',
    'JSwXR',
    'addCompileResult',
    'CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!',
    'mQSYK',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!',
    'BYgRM',
    'stringify',
    'parseCompileResult',
    '_parseJSONOrNull',
    'parse',
    'MdcMp',
    'log',
    'CACHE(',
    'PsWRe',
    'setDiskCacheDirectory\x20called\x20twice?',
    'ndwTe',
    'sourcesContent',
    'afterLink',
    '_afterLinkCallbacks',
    'splice',
    'forEach',
    '_deepHash',
    'function',
    'sha1',
    'null',
    'object',
    'cannot\x20hash\x20function\x20objects',
    'VSpIV',
    'ronLh',
    'vVisQ',
    'update',
    'krerJ',
    'tjuxM',
    'isArray',
    'sort',
    'BWwPZ',
    'XDWVD',
    'EfKYK',
    'ncJMf',
    'digest',
    'KyJLV',
    'TKHtY',
    'writeFileSync',
    '_readFileOrNull',
    'utf8',
    'readFileSync',
    'kBEyf',
    'code',
    'ENOENT',
    '_cache',
    '_cacheSize',
    'CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!',
    'rLVVG',
    'processFilesForTarget',
    '_cacheDebugEnabled',
    'create',
    'getArch',
    'get',
    '_readCache',
    '_cacheDebug',
    'Loaded\x20',
    'getDisplayPath',
    '0|2|1|4|3',
    'split',
    'compileOneFile',
    '_writeCacheAsync'
];
const _0x5982e4 = _0xca03;
(function (_0x4ed098, _0x59af1f) {
    const _0x4f831d = _0xca03;
    while (!![]) {
        try {
            const _0x59c6cf = -parseInt(_0x4f831d(0x1da)) + -parseInt(_0x4f831d(0x1db)) * -parseInt(_0x4f831d(0x1dc)) + parseInt(_0x4f831d(0x1dd)) + parseInt(_0x4f831d(0x1de)) * -parseInt(_0x4f831d(0x1df)) + -parseInt(_0x4f831d(0x1e0)) + -parseInt(_0x4f831d(0x1e1)) * parseInt(_0x4f831d(0x1e2)) + parseInt(_0x4f831d(0x1e3));
            if (_0x59c6cf === _0x59af1f)
                break;
            else
                _0x4ed098['push'](_0x4ed098['shift']());
        } catch (_0x3dfdc6) {
            _0x4ed098['push'](_0x4ed098['shift']());
        }
    }
}(_0x7ab5, 0x2 * -0x3f443 + 0x1 * 0x431f5 + 0x887fe));
function _0xca03(_0x47cb6e, _0x56c6d1) {
    return _0xca03 = function (_0x184487, _0x160c9a) {
        _0x184487 = _0x184487 - (-0x109e + -0x11eb + 0x2463);
        let _0x3d10b5 = _0x7ab5[_0x184487];
        return _0x3d10b5;
    }, _0xca03(_0x47cb6e, _0x56c6d1);
}
const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require']('crypto')['createHash'], assert = Npm[_0x5982e4(0x1e4)](_0x5982e4(0x1e5)), LRU = Npm[_0x5982e4(0x1e4)](_0x5982e4(0x1e6));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x264dc2,
        defaultCacheSize: _0x467599,
        maxParallelism: maxParallelism = -0x4eb * -0x7 + -0x69b + -0x1bbe
    }) {
        const _0x33d1e9 = _0x5982e4, _0x420a25 = {
                'TjHQD': _0x33d1e9(0x1e7),
                'PrdZJ': 'METEOR_',
                'LZQOE': _0x33d1e9(0x1e8),
                'fqifB': function (_0x587375, _0x9d731a) {
                    return _0x587375 + _0x9d731a;
                },
                'NuTGh': 'DEBUG'
            };
        this[_0x33d1e9(0x1e9)] = _0x264dc2, this[_0x33d1e9(0x1ea)] = maxParallelism;
        const _0x5881c8 = _0x264dc2[_0x33d1e9(0x1eb)]()[_0x33d1e9(0x1ec)](_0x420a25[_0x33d1e9(0x1ed)], '_')['replace'](/[^A-Z0-9_]/g, ''), _0x1d3c2f = _0x420a25[_0x33d1e9(0x1ee)] + _0x5881c8 + _0x420a25['LZQOE'], _0x4b343c = _0x420a25[_0x33d1e9(0x1ef)](_0x1d3c2f, _0x420a25[_0x33d1e9(0x1f0)]);
        this['_cacheDebugEnabled'] = !!process[_0x33d1e9(0x1f1)][_0x4b343c];
        const _0x53250b = _0x420a25[_0x33d1e9(0x1ef)](_0x1d3c2f, 'SIZE');
        this['_cacheSize'] = +process['env'][_0x53250b] || _0x467599, this[_0x33d1e9(0x1f2)] = null, this[_0x33d1e9(0x1f3)] = 0x40d + 0x1e82 + -0x228f, this['_afterLinkCallbacks'] = [];
    }
    ['getCacheKey'](_0x301387) {
        const _0x219b01 = _0x5982e4, _0x19e9fd = {
                'JSwXR': function (_0x5c20e2, _0x313799) {
                    return _0x5c20e2(_0x313799);
                },
                'qNOTt': 'CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!'
            };
        throw _0x19e9fd[_0x219b01(0x1f4)](Error, _0x19e9fd['qNOTt']);
    }
    [_0x5982e4(0x1f5)](_0x405181, _0xd039f8) {
        const _0x5117bb = _0x5982e4, _0x4872c2 = { 'mQSYK': _0x5117bb(0x1f6) };
        throw Error(_0x4872c2[_0x5117bb(0x1f7)]);
    }
    ['compileResultSize'](_0x103608) {
        const _0x233082 = _0x5982e4, _0x11a27c = { 'BYgRM': _0x233082(0x1f8) };
        throw Error(_0x11a27c[_0x233082(0x1f9)]);
    }
    ['stringifyCompileResult'](_0xf1f153) {
        const _0x52dfe7 = _0x5982e4;
        return JSON[_0x52dfe7(0x1fa)](_0xf1f153);
    }
    [_0x5982e4(0x1fb)](_0x459001) {
        return this['_parseJSONOrNull'](_0x459001);
    }
    [_0x5982e4(0x1fc)](_0x503a8d) {
        const _0x284a44 = _0x5982e4, _0x251ed0 = {
                'MdcMp': function (_0x582a71, _0x14aaf9) {
                    return _0x582a71 instanceof _0x14aaf9;
                }
            };
        try {
            return JSON[_0x284a44(0x1fd)](_0x503a8d);
        } catch (_0x1ee16e) {
            if (_0x251ed0[_0x284a44(0x1fe)](_0x1ee16e, SyntaxError))
                return null;
            throw _0x1ee16e;
        }
    }
    ['_cacheDebug'](_0x6e4ed2) {
        const _0x256e65 = _0x5982e4;
        if (!this['_cacheDebugEnabled'])
            return;
        console[_0x256e65(0x1ff)](_0x256e65(0x200) + this[_0x256e65(0x1e9)] + '):\x20' + _0x6e4ed2);
    }
    ['setDiskCacheDirectory'](_0x557815) {
        const _0x9136b5 = _0x5982e4, _0x4272c7 = {
                'PsWRe': function (_0x2ce368, _0x192607) {
                    return _0x2ce368(_0x192607);
                }
            };
        if (this[_0x9136b5(0x1f2)])
            throw _0x4272c7[_0x9136b5(0x201)](Error, _0x9136b5(0x202));
        this[_0x9136b5(0x1f2)] = _0x557815;
    }
    ['sourceMapSize'](_0xf7c2e9) {
        const _0x1e67ea = _0x5982e4, _0x1415b3 = {
                'ndwTe': function (_0x7cb675, _0xd6c308) {
                    return _0x7cb675 + _0xd6c308;
                }
            };
        if (!_0xf7c2e9)
            return -0xa50 + -0x7 * -0x283 + 0x745 * -0x1;
        return _0x1415b3[_0x1e67ea(0x203)](_0xf7c2e9['mappings']['length'], (_0xf7c2e9[_0x1e67ea(0x204)] || [])['reduce'](function (_0x10c49f, _0x3ae86d) {
            const _0x4e6477 = _0x1e67ea;
            return _0x1415b3[_0x4e6477(0x203)](_0x10c49f, _0x3ae86d ? _0x3ae86d['length'] : 0x1 * -0x1313 + 0x2 * -0x951 + -0xc5 * -0x31);
        }, -0x3df * -0x1 + -0x1441 * -0x1 + -0x20 * 0xc1));
    }
    [_0x5982e4(0x205)]() {
        const _0x1a581c = _0x5982e4, _0x10297a = {
                'PPHOY': function (_0xc40e3) {
                    return _0xc40e3();
                }
            };
        this[_0x1a581c(0x206)][_0x1a581c(0x207)](0x2526 + -0x232e + -0x1f8)[_0x1a581c(0x208)](_0x43ab6c => {
            _0x10297a['PPHOY'](_0x43ab6c);
        });
    }
    [_0x5982e4(0x209)](_0x26a064) {
        const _0x2bf32e = _0x5982e4, _0x4ee5ac = {
                'BWwPZ': _0x2bf32e(0x20a),
                'XDWVD': function (_0x19d161, _0x16b37) {
                    return _0x19d161 + _0x16b37;
                },
                'VSpIV': _0x2bf32e(0x20b),
                'ronLh': function (_0x3bc036, _0xdc5426) {
                    return _0x3bc036 === _0xdc5426;
                },
                'vVisQ': _0x2bf32e(0x20c),
                'krerJ': function (_0x24fe46, _0x2eeea8) {
                    return _0x24fe46 + _0x2eeea8;
                },
                'tjuxM': _0x2bf32e(0x20d),
                'EfKYK': _0x2bf32e(0x20e),
                'ncJMf': function (_0x52dcfe, _0x2b60b6) {
                    return _0x52dcfe + _0x2b60b6;
                },
                'KyJLV': 'hex'
            }, _0xac9d13 = createHash(_0x4ee5ac[_0x2bf32e(0x20f)]);
        let _0xb547b3 = typeof _0x26a064;
        _0x4ee5ac[_0x2bf32e(0x210)](_0x26a064, null) && (_0xb547b3 = _0x4ee5ac[_0x2bf32e(0x211)]);
        _0xac9d13[_0x2bf32e(0x212)](_0x4ee5ac[_0x2bf32e(0x213)](_0xb547b3, '\x00'));
        switch (_0xb547b3) {
        case _0x4ee5ac[_0x2bf32e(0x214)]:
            const _0x57d577 = Object['keys'](_0x26a064);
            !Array[_0x2bf32e(0x215)](_0x26a064) && _0x57d577[_0x2bf32e(0x216)]();
            _0x57d577[_0x2bf32e(0x208)](_0x150439 => {
                const _0xa64bcd = _0x2bf32e;
                if (typeof _0x26a064[_0x150439] === _0x4ee5ac[_0xa64bcd(0x217)])
                    return;
                _0xac9d13[_0xa64bcd(0x212)](_0x4ee5ac[_0xa64bcd(0x218)](_0x150439, '\x00'))[_0xa64bcd(0x212)](this[_0xa64bcd(0x209)](_0x26a064[_0x150439]));
            });
            break;
        case _0x4ee5ac[_0x2bf32e(0x217)]:
            assert['ok'](![], _0x4ee5ac[_0x2bf32e(0x219)]);
            break;
        default:
            _0xac9d13[_0x2bf32e(0x212)](_0x4ee5ac[_0x2bf32e(0x21a)]('', _0x26a064));
            break;
        }
        return _0xac9d13[_0x2bf32e(0x21b)](_0x4ee5ac[_0x2bf32e(0x21c)]);
    }
    ['_writeFile'](_0x29183a, _0x52aa62) {
        const _0x34b545 = _0x5982e4, _0x5d95bb = {
                'TKHtY': function (_0x37e1b4, _0x342cab) {
                    return _0x37e1b4 + _0x342cab;
                },
                'qIbDO': '.tmp.'
            }, _0x39cf9f = _0x5d95bb[_0x34b545(0x21d)](_0x29183a + _0x5d95bb['qIbDO'], Random['id']());
        try {
            fs[_0x34b545(0x21e)](_0x39cf9f, _0x52aa62), fs['renameSync'](_0x39cf9f, _0x29183a);
        } catch (_0x423e16) {
            this['_cacheDebug'](_0x423e16);
        }
    }
    [_0x5982e4(0x21f)](_0x12425a) {
        const _0x642ba0 = _0x5982e4, _0x2538a5 = {
                'kBEyf': _0x642ba0(0x220),
                'WuCOh': function (_0x3f42bb, _0x4bdc14) {
                    return _0x3f42bb === _0x4bdc14;
                }
            };
        try {
            return fs[_0x642ba0(0x221)](_0x12425a, _0x2538a5[_0x642ba0(0x222)]);
        } catch (_0x1aff63) {
            if (_0x1aff63 && _0x2538a5['WuCOh'](_0x1aff63[_0x642ba0(0x223)], _0x642ba0(0x224)))
                return null;
            throw _0x1aff63;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x29861d,
        defaultCacheSize: _0x590ff0,
        maxParallelism: maxParallelism = -0x6f * 0x19 + -0xfc3 + 0x1aae
    }) {
        const _0x310d0e = _0x5982e4;
        super({
            'compilerName': _0x29861d,
            'defaultCacheSize': _0x590ff0,
            'maxParallelism': maxParallelism
        }), this[_0x310d0e(0x225)] = new LRU({
            'max': this[_0x310d0e(0x226)],
            'length': _0x472662 => this['compileResultSize'](_0x472662)
        });
    }
    ['compileOneFile'](_0x3f5443) {
        const _0x42a172 = _0x5982e4, _0x4ea6dd = { 'rLVVG': _0x42a172(0x227) };
        throw Error(_0x4ea6dd[_0x42a172(0x228)]);
    }
    async [_0x5982e4(0x229)](_0x93185d) {
        const _0x29c4de = _0x5982e4, _0x4ab697 = {
                'rUYyr': function (_0x2d037e) {
                    return _0x2d037e();
                }
            }, _0x48190e = [], _0x477558 = this[_0x29c4de(0x22a)] && Object[_0x29c4de(0x22b)](null);
        _0x93185d['forEach'](_0x4462a3 => {
            const _0x241320 = _0x29c4de;
            _0x477558 && (_0x477558[_0x4462a3[_0x241320(0x22c)]()] = 0x281 * -0x2 + -0x15c5 + 0x2 * 0xd64);
            const _0x23a60a = () => {
                const _0x4de8e6 = _0x241320, _0x2107bf = this[_0x4de8e6(0x209)](this['getCacheKey'](_0x4462a3));
                let _0x306dcd = this[_0x4de8e6(0x225)][_0x4de8e6(0x22d)](_0x2107bf);
                !_0x306dcd && (_0x306dcd = this[_0x4de8e6(0x22e)](_0x2107bf), _0x306dcd && this[_0x4de8e6(0x22f)](_0x4de8e6(0x230) + _0x4462a3[_0x4de8e6(0x231)]()));
                if (!_0x306dcd) {
                    const _0x852898 = _0x4de8e6(0x232)[_0x4de8e6(0x233)]('|');
                    let _0x24e520 = 0x1bfb + 0x12e + -0x1d29 * 0x1;
                    while (!![]) {
                        switch (_0x852898[_0x24e520++]) {
                        case '0':
                            _0x48190e['push'](_0x4462a3['getDisplayPath']());
                            continue;
                        case '1':
                            if (!_0x306dcd)
                                return;
                            continue;
                        case '2':
                            _0x306dcd = Promise['await'](this[_0x4de8e6(0x234)](_0x4462a3));
                            continue;
                        case '3':
                            this[_0x4de8e6(0x235)](_0x2107bf, _0x306dcd);
                            continue;
                        case '4':
                            this['_cache'][_0x4de8e6(0x236)](_0x2107bf, _0x306dcd);
                            continue;
                        }
                        break;
                    }
                }
                return _0x306dcd;
            };
            if (this['compileOneFileLater'] && _0x4462a3['supportsLazyCompilation'])
                this['compileOneFileLater'](_0x4462a3, _0x23a60a);
            else {
                const _0x2cac20 = _0x4ab697['rUYyr'](_0x23a60a);
                _0x2cac20 && this[_0x241320(0x1f5)](_0x4462a3, _0x2cac20);
            }
        }), this[_0x29c4de(0x22a)] && this[_0x29c4de(0x206)]['push'](() => {
            const _0x51ca03 = _0x29c4de;
            _0x48190e[_0x51ca03(0x216)](), this[_0x51ca03(0x22f)](_0x51ca03(0x237) + ++this['_callCount'] + _0x51ca03(0x238) + JSON[_0x51ca03(0x1fa)](_0x48190e) + '\x20' + JSON[_0x51ca03(0x1fa)](Object[_0x51ca03(0x239)](_0x477558)['sort']()));
        });
    }
    [_0x5982e4(0x23a)](_0x25bcf9) {
        const _0x244ac0 = _0x5982e4, _0x3e2663 = {
                'HAQhj': function (_0xf8fa83, _0x1b418e) {
                    return _0xf8fa83 + _0x1b418e;
                },
                'UckaB': _0x244ac0(0x23b),
                'ivrdJ': '.cache'
            };
        if (!/^[a-f0-9]+$/[_0x244ac0(0x23c)](_0x25bcf9))
            throw Error(_0x3e2663[_0x244ac0(0x23d)](_0x3e2663[_0x244ac0(0x23e)], _0x25bcf9));
        return path[_0x244ac0(0x23f)](this['_diskCache'], _0x3e2663[_0x244ac0(0x23d)](_0x25bcf9, _0x3e2663[_0x244ac0(0x240)]));
    }
    [_0x5982e4(0x22e)](_0x34881a) {
        const _0x4025e2 = _0x5982e4;
        if (!this[_0x4025e2(0x1f2)])
            return null;
        const _0x6b1118 = this['_cacheFilename'](_0x34881a), _0x3109a2 = this[_0x4025e2(0x241)](_0x6b1118);
        if (!_0x3109a2)
            return null;
        return this[_0x4025e2(0x225)]['set'](_0x34881a, _0x3109a2), _0x3109a2;
    }
    [_0x5982e4(0x235)](_0x243e85, _0x4c3c54) {
        const _0x43c221 = _0x5982e4;
        if (!this[_0x43c221(0x1f2)])
            return;
        const _0x259950 = this[_0x43c221(0x23a)](_0x243e85), _0x236e2b = this[_0x43c221(0x242)](_0x4c3c54);
        this[_0x43c221(0x243)](_0x259950, _0x236e2b);
    }
    [_0x5982e4(0x241)](_0x4d1cd8) {
        const _0x59c671 = _0x5982e4, _0x8071ec = this['_readFileOrNull'](_0x4d1cd8);
        return this[_0x59c671(0x1fb)](_0x8071ec);
    }
};
