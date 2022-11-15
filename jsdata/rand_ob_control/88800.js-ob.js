const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm['require']('crypto')['createHash'], assert = Npm['require']('assert'), LRU = Npm['require']('lru-cache');
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x4f491d,
        defaultCacheSize: _0x19e45e,
        maxParallelism: maxParallelism = 0x14
    }) {
        const _0x14f52f = {
            'Qbefs': '/-/g',
            'jywmW': function (_0x497bf7, _0x3493fa) {
                return _0x497bf7 + _0x3493fa;
            },
            'QVKvx': function (_0x5ee004, _0x36b5f9) {
                return _0x5ee004 + _0x36b5f9;
            },
            'IqvVY': 'METEOR_',
            'OUHYg': '_CACHE_',
            'fIlkq': 'DEBUG',
            'FLNPR': function (_0x707201, _0x5dbb61) {
                return _0x707201 + _0x5dbb61;
            },
            'RNZJD': 'SIZE'
        };
        this['_compilerName'] = _0x4f491d, this['_maxParallelism'] = maxParallelism;
        const _0x44be67 = _0x4f491d['toUpperCase']()['replace'](_0x14f52f['Qbefs'], '_')['replace'](/[^A-Z0-9_]/g, ''), _0x43afb8 = _0x14f52f['jywmW'](_0x14f52f['QVKvx'](_0x14f52f['IqvVY'], _0x44be67), _0x14f52f['OUHYg']), _0x4e68fa = _0x14f52f['QVKvx'](_0x43afb8, _0x14f52f['fIlkq']);
        this['_cacheDebugEnabled'] = !!process['env'][_0x4e68fa];
        const _0x51b61a = _0x14f52f['FLNPR'](_0x43afb8, _0x14f52f['RNZJD']);
        this['_cacheSize'] = +process['env'][_0x51b61a] || _0x19e45e, this['_diskCache'] = null, this['_callCount'] = 0x0, this['_afterLinkCallbacks'] = [];
    }
    ['getCacheKey'](_0xbf04ea) {
        const _0x38b979 = {
            'nNrhj': function (_0x2ac6b4, _0x36848d) {
                return _0x2ac6b4(_0x36848d);
            },
            'hfREv': 'CachingCompiler\x20subclass\x20should\x20implement\x20getCacheKey!'
        };
        throw _0x38b979['nNrhj'](Error, _0x38b979['hfREv']);
    }
    ['addCompileResult'](_0x4b708d, _0x591f28) {
        const _0x3847f9 = {
            'rTUUl': function (_0x3acbe3, _0xcb3713) {
                return _0x3acbe3(_0xcb3713);
            },
            'MUyIR': 'CachingCompiler\x20subclass\x20should\x20implement\x20addCompileResult!'
        };
        throw _0x3847f9['rTUUl'](Error, _0x3847f9['MUyIR']);
    }
    ['compileResultSize'](_0x1c221e) {
        const _0x35046e = {
            'UxBsQ': function (_0x263206, _0x49f9d3) {
                return _0x263206(_0x49f9d3);
            },
            'maHWU': 'CachingCompiler\x20subclass\x20should\x20implement\x20compileResultSize!'
        };
        throw _0x35046e['UxBsQ'](Error, _0x35046e['maHWU']);
    }
    ['stringifyCompileResult'](_0x5d0bee) {
        return JSON['stringify'](_0x5d0bee);
    }
    ['parseCompileResult'](_0x24d1b5) {
        return this['_parseJSONOrNull'](_0x24d1b5);
    }
    ['_parseJSONOrNull'](_0x5f2b8a) {
        const _0x200c8e = {
            'vSymL': function (_0x26cc1e, _0xb77d9c) {
                return _0x26cc1e instanceof _0xb77d9c;
            }
        };
        try {
            return JSON['parse'](_0x5f2b8a);
        } catch (_0x37f864) {
            if (_0x200c8e['vSymL'](_0x37f864, SyntaxError))
                return null;
            throw _0x37f864;
        }
    }
    ['_cacheDebug'](_0x58a0c3) {
        if (!this['_cacheDebugEnabled'])
            return;
        console['log']('CACHE(' + this['_compilerName'] + '):\x20' + _0x58a0c3);
    }
    ['setDiskCacheDirectory'](_0x33d928) {
        const _0x221946 = {
            'lUgFn': function (_0x5b4f86, _0xd0ea83) {
                return _0x5b4f86(_0xd0ea83);
            },
            'wjCIu': 'setDiskCacheDirectory\x20called\x20twice?'
        };
        if (this['_diskCache'])
            throw _0x221946['lUgFn'](Error, _0x221946['wjCIu']);
        this['_diskCache'] = _0x33d928;
    }
    ['sourceMapSize'](_0x1fd839) {
        const _0x84c325 = {
            'skNKV': function (_0x3dc5a1, _0x56faa3) {
                return _0x3dc5a1 + _0x56faa3;
            }
        };
        if (!_0x1fd839)
            return 0x0;
        return _0x84c325['skNKV'](_0x1fd839['mappings']['length'], (_0x1fd839['sourcesContent'] || [])['reduce'](function (_0x4983c1, _0x5270ab) {
            return _0x84c325['skNKV'](_0x4983c1, _0x5270ab ? _0x5270ab['length'] : 0x0);
        }, 0x0));
    }
    ['afterLink']() {
        const _0x13b3af = {
            'xEMrC': function (_0x178403) {
                return _0x178403();
            }
        };
        this['_afterLinkCallbacks']['splice'](0x0)['forEach'](_0x38722a => {
            _0x13b3af['xEMrC'](_0x38722a);
        });
    }
    ['_deepHash'](_0x16d55f) {
        const _0x4947d3 = {
                'CNmUN': function (_0x20e473, _0x5b93e6) {
                    return _0x20e473 === _0x5b93e6;
                },
                'bunCk': 'function',
                'NDYtq': function (_0x1ca78a, _0x558afd) {
                    return _0x1ca78a + _0x558afd;
                },
                'MTxrz': function (_0x3c5bb1, _0x4202e3) {
                    return _0x3c5bb1(_0x4202e3);
                },
                'bxVrX': 'sha1',
                'VKmTd': 'null',
                'rsKmg': function (_0x25e23e, _0x216f97) {
                    return _0x25e23e + _0x216f97;
                },
                'qZtYk': 'object',
                'oTwTK': 'cannot\x20hash\x20function\x20objects',
                'QBjJP': function (_0x44dbc7, _0xec72a2) {
                    return _0x44dbc7 + _0xec72a2;
                },
                'XKPmx': 'hex'
            }, _0x28c658 = _0x4947d3['MTxrz'](createHash, _0x4947d3['bxVrX']);
        let _0x2f1076 = typeof _0x16d55f;
        _0x4947d3['CNmUN'](_0x16d55f, null) && (_0x2f1076 = _0x4947d3['VKmTd']);
        _0x28c658['update'](_0x4947d3['rsKmg'](_0x2f1076, '\x00'));
        switch (_0x2f1076) {
        case _0x4947d3['qZtYk']:
            const _0xce39e7 = Object['keys'](_0x16d55f);
            !Array['isArray'](_0x16d55f) && _0xce39e7['sort']();
            _0xce39e7['forEach'](_0x23d797 => {
                if (_0x4947d3['CNmUN'](typeof _0x16d55f[_0x23d797], _0x4947d3['bunCk']))
                    return;
                _0x28c658['update'](_0x4947d3['NDYtq'](_0x23d797, '\x00'))['update'](this['_deepHash'](_0x16d55f[_0x23d797]));
            });
            break;
        case _0x4947d3['bunCk']:
            assert['ok'](![], _0x4947d3['oTwTK']);
            break;
        default:
            _0x28c658['update'](_0x4947d3['QBjJP']('', _0x16d55f));
            break;
        }
        return _0x28c658['digest'](_0x4947d3['XKPmx']);
    }
    ['_writeFile'](_0x5c7267, _0x30d675) {
        const _0x3b36e1 = {
                'CnAhm': function (_0x1aff96, _0x50c544) {
                    return _0x1aff96 + _0x50c544;
                },
                'MLRbE': function (_0x43e3df, _0x13ffd5) {
                    return _0x43e3df + _0x13ffd5;
                },
                'ubJRL': '.tmp.'
            }, _0x54b223 = _0x3b36e1['CnAhm'](_0x3b36e1['MLRbE'](_0x5c7267, _0x3b36e1['ubJRL']), Random['id']());
        try {
            fs['writeFileSync'](_0x54b223, _0x30d675), fs['renameSync'](_0x54b223, _0x5c7267);
        } catch (_0x1916b6) {
            this['_cacheDebug'](_0x1916b6);
        }
    }
    ['_readFileOrNull'](_0x30d86e) {
        const _0x4bdc3e = {
            'qfJWt': 'utf8',
            'gabcP': function (_0x3c457a, _0x6b1150) {
                return _0x3c457a === _0x6b1150;
            },
            'HRQvH': 'ENOENT'
        };
        try {
            return fs['readFileSync'](_0x30d86e, _0x4bdc3e['qfJWt']);
        } catch (_0x3eb109) {
            if (_0x3eb109 && _0x4bdc3e['gabcP'](_0x3eb109['code'], _0x4bdc3e['HRQvH']))
                return null;
            throw _0x3eb109;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x480314,
        defaultCacheSize: _0x1aa702,
        maxParallelism: maxParallelism = 0x14
    }) {
        super({
            'compilerName': _0x480314,
            'defaultCacheSize': _0x1aa702,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this['_cacheSize'],
            'length': _0x10ffdb => this['compileResultSize'](_0x10ffdb)
        });
    }
    ['compileOneFile'](_0x5ac881) {
        const _0x5b916c = {
            'FegIv': function (_0x49c5ac, _0x424587) {
                return _0x49c5ac(_0x424587);
            },
            'bThSB': 'CachingCompiler\x20subclass\x20should\x20implement\x20compileOneFile!'
        };
        throw _0x5b916c['FegIv'](Error, _0x5b916c['bThSB']);
    }
    async ['processFilesForTarget'](_0x13babc) {
        const _0x1ebe04 = {
                'kUQrF': '4|3|0|2|1',
                'Hudkc': function (_0x25c655) {
                    return _0x25c655();
                }
            }, _0x5a3978 = [], _0x4840ff = this['_cacheDebugEnabled'] && Object['create'](null);
        _0x13babc['forEach'](_0x2839bc => {
            _0x4840ff && (_0x4840ff[_0x2839bc['getArch']()] = 0x1);
            const _0x14b2be = () => {
                const _0x1ecffe = this['_deepHash'](this['getCacheKey'](_0x2839bc));
                let _0x1b00c8 = this['_cache']['get'](_0x1ecffe);
                !_0x1b00c8 && (_0x1b00c8 = this['_readCache'](_0x1ecffe), _0x1b00c8 && this['_cacheDebug']('Loaded\x20' + _0x2839bc['getDisplayPath']()));
                if (!_0x1b00c8) {
                    const _0x5358d0 = _0x1ebe04['kUQrF']['split']('|');
                    let _0x550057 = 0x0;
                    while (!![]) {
                        switch (_0x5358d0[_0x550057++]) {
                        case '0':
                            if (!_0x1b00c8)
                                return;
                            continue;
                        case '1':
                            this['_writeCacheAsync'](_0x1ecffe, _0x1b00c8);
                            continue;
                        case '2':
                            this['_cache']['set'](_0x1ecffe, _0x1b00c8);
                            continue;
                        case '3':
                            _0x1b00c8 = Promise['await'](this['compileOneFile'](_0x2839bc));
                            continue;
                        case '4':
                            _0x5a3978['push'](_0x2839bc['getDisplayPath']());
                            continue;
                        }
                        break;
                    }
                }
                return _0x1b00c8;
            };
            if (this['compileOneFileLater'] && _0x2839bc['supportsLazyCompilation'])
                this['compileOneFileLater'](_0x2839bc, _0x14b2be);
            else {
                const _0x3432a3 = _0x1ebe04['Hudkc'](_0x14b2be);
                _0x3432a3 && this['addCompileResult'](_0x2839bc, _0x3432a3);
            }
        }), this['_cacheDebugEnabled'] && this['_afterLinkCallbacks']['push'](() => {
            _0x5a3978['sort'](), this['_cacheDebug']('Ran\x20(#' + ++this['_callCount'] + ')\x20on:\x20' + JSON['stringify'](_0x5a3978) + '\x20' + JSON['stringify'](Object['keys'](_0x4840ff)['sort']()));
        });
    }
    ['_cacheFilename'](_0x3d8137) {
        const _0x2ae55b = {
            'qgLoc': function (_0x3a0101, _0x8d5925) {
                return _0x3a0101(_0x8d5925);
            },
            'aLBLV': function (_0x50784b, _0x246921) {
                return _0x50784b + _0x246921;
            },
            'LxgyK': 'bad\x20cacheKey:\x20',
            'UfonT': '.cache'
        };
        if (!/^[a-f0-9]+$/['test'](_0x3d8137))
            throw _0x2ae55b['qgLoc'](Error, _0x2ae55b['aLBLV'](_0x2ae55b['LxgyK'], _0x3d8137));
        return path['join'](this['_diskCache'], _0x2ae55b['aLBLV'](_0x3d8137, _0x2ae55b['UfonT']));
    }
    ['_readCache'](_0x43f39f) {
        if (!this['_diskCache'])
            return null;
        const _0x17135a = this['_cacheFilename'](_0x43f39f), _0x435b98 = this['_readAndParseCompileResultOrNull'](_0x17135a);
        if (!_0x435b98)
            return null;
        return this['_cache']['set'](_0x43f39f, _0x435b98), _0x435b98;
    }
    ['_writeCacheAsync'](_0x52de76, _0x26b28e) {
        if (!this['_diskCache'])
            return;
        const _0x5b8db2 = this['_cacheFilename'](_0x52de76), _0x26bf56 = this['stringifyCompileResult'](_0x26b28e);
        this['_writeFile'](_0x5b8db2, _0x26bf56);
    }
    ['_readAndParseCompileResultOrNull'](_0x5c4c87) {
        const _0x493a12 = this['_readFileOrNull'](_0x5c4c87);
        return this['parseCompileResult'](_0x493a12);
    }
};
