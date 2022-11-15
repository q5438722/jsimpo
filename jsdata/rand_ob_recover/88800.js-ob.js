function _0x515b(_0x1de782, _0x130255) {
    return _0x515b = function (_0x3eca9e, _0x506c07) {
        _0x3eca9e = _0x3eca9e - (8411 + -4179 * 1 + -15 * 259);
        let _0x27078b = _0x1fac[_0x3eca9e];
        return _0x27078b;
    }, _0x515b(_0x1de782, _0x130255);
}
const fs = Plugin['fs'], path = Plugin['path'], createHash = Npm[_0x15a6b6(358)](_0x15a6b6(359))[_0x15a6b6(360)], assert = Npm['require'](_0x15a6b6(361)), LRU = Npm[_0x15a6b6(358)](_0x15a6b6(362));
CachingCompilerBase = class CachingCompilerBase {
    constructor({
        compilerName: _0x332d09,
        defaultCacheSize: _0x4a8724,
        maxParallelism: maxParallelism = 1543 * -6 + 7115 + 2163
    }) {
        const _0x3d5bce = _0x15a6b6, _0x119da9 = {
                'yoLyW': function (_0x666085, _0x3fc1d0) {
                    return _0x666085 + _0x3fc1d0;
                },
                'hrtRM': 'METEOR_',
                'xqSsq': _0x3d5bce(363),
                'KFzGc': function (_0x336e7d, _0x2db669) {
                    return _0x336e7d + _0x2db669;
                },
                'HUHVo': _0x3d5bce(364)
            };
        this['_compilerName'] = _0x332d09, this[_0x3d5bce(365)] = maxParallelism;
        const _0x572101 = _0x332d09[_0x3d5bce(366)]()['replace'](_0x3d5bce(367), '_')[_0x3d5bce(368)](/[^A-Z0-9_]/g, ''), _0x5d6c0a = _0x119da9[_0x3d5bce(369)](_0x119da9[_0x3d5bce(370)] + _0x572101, _0x119da9[_0x3d5bce(371)]), _0x5dc68c = _0x119da9[_0x3d5bce(372)](_0x5d6c0a, _0x3d5bce(373));
        this[_0x3d5bce(374)] = !!process[_0x3d5bce(375)][_0x5dc68c];
        const _0x54e573 = _0x5d6c0a + _0x119da9[_0x3d5bce(376)];
        this[_0x3d5bce(377)] = +process[_0x3d5bce(375)][_0x54e573] || _0x4a8724, this[_0x3d5bce(378)] = null, this[_0x3d5bce(379)] = 7254 + 409 * 5 + -9299, this[_0x3d5bce(380)] = [];
    }
    [_0x15a6b6(381)](_0x2793e4) {
        const _0x34abc7 = _0x15a6b6, _0x136387 = {
                'EydIa': function (_0x41bc25, _0x5e6904) {
                    return _0x41bc25(_0x5e6904);
                },
                'xOlxb': _0x34abc7(382)
            };
        throw _0x136387['EydIa'](Error, _0x136387[_0x34abc7(383)]);
    }
    [_0x15a6b6(384)](_0x24a4d5, _0x2fbec3) {
        const _0x41ecb3 = _0x15a6b6, _0x428ec6 = {
                'sOBtW': function (_0x20f0f7, _0x3cc8be) {
                    return _0x20f0f7(_0x3cc8be);
                },
                'ZYcPn': 'CachingCompiler subclass should implement addCompileResult!'
            };
        throw _0x428ec6['sOBtW'](Error, _0x428ec6[_0x41ecb3(385)]);
    }
    [_0x15a6b6(386)](_0x50a03a) {
        const _0x302e8d = _0x15a6b6, _0x2e0b2d = {
                'tdilp': function (_0x3685a6, _0x5c22ba) {
                    return _0x3685a6(_0x5c22ba);
                },
                'wJQxW': _0x302e8d(387)
            };
        throw _0x2e0b2d[_0x302e8d(388)](Error, _0x2e0b2d['wJQxW']);
    }
    [_0x15a6b6(389)](_0x438c92) {
        const _0x5a7cd6 = _0x15a6b6;
        return JSON[_0x5a7cd6(390)](_0x438c92);
    }
    ['parseCompileResult'](_0xa84b36) {
        return this['_parseJSONOrNull'](_0xa84b36);
    }
    [_0x15a6b6(391)](_0x588776) {
        const _0x17f853 = _0x15a6b6;
        try {
            return JSON[_0x17f853(392)](_0x588776);
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
        console[_0x4fe7b9(393)]('CACHE(' + this[_0x4fe7b9(394)] + _0x4fe7b9(395) + _0x955edd);
    }
    [_0x15a6b6(396)](_0xb66b69) {
        const _0x425246 = _0x15a6b6, _0x2873b1 = {
                'SSYnq': function (_0x35c4c0, _0x41616b) {
                    return _0x35c4c0(_0x41616b);
                },
                'EuEFT': 'setDiskCacheDirectory called twice?'
            };
        if (this[_0x425246(378)])
            throw _0x2873b1[_0x425246(397)](Error, _0x2873b1[_0x425246(398)]);
        this[_0x425246(378)] = _0xb66b69;
    }
    [_0x15a6b6(399)](_0x7599be) {
        const _0x20dd06 = _0x15a6b6, _0x567e35 = {
                'CVwkp': function (_0x147acf, _0x4a3259) {
                    return _0x147acf + _0x4a3259;
                },
                'ShdNl': function (_0x341ab1, _0xcd8b5c) {
                    return _0x341ab1 + _0xcd8b5c;
                }
            };
        if (!_0x7599be)
            return -1 * 3745 + 4 * 1207 + -1083;
        return _0x567e35['ShdNl'](_0x7599be[_0x20dd06(400)][_0x20dd06(401)], (_0x7599be[_0x20dd06(402)] || [])['reduce'](function (_0x17a629, _0x458d0d) {
            const _0x24e6c1 = _0x20dd06;
            return _0x567e35[_0x24e6c1(403)](_0x17a629, _0x458d0d ? _0x458d0d[_0x24e6c1(401)] : 5924 + -7837 + 1913);
        }, 8110 * 1 + -6425 + -1685));
    }
    ['afterLink']() {
        const _0x337d3f = _0x15a6b6;
        this[_0x337d3f(380)][_0x337d3f(404)](-5 * 409 + 8375 + -6330)['forEach'](_0x444ce1 => {
            _0x444ce1();
        });
    }
    ['_deepHash'](_0x34d445) {
        const _0x5b1018 = _0x15a6b6, _0xe80da = {
                'DMXEj': function (_0x18c3c1, _0x1c12a7) {
                    return _0x18c3c1 === _0x1c12a7;
                },
                'McEeq': _0x5b1018(405),
                'LMaEM': function (_0x4a3d2e, _0x2dc29c) {
                    return _0x4a3d2e + _0x2dc29c;
                },
                'pDXHW': function (_0x430dbf, _0x5d5a86) {
                    return _0x430dbf(_0x5d5a86);
                },
                'pKZbU': _0x5b1018(406),
                'XKJop': _0x5b1018(407),
                'cTIUs': function (_0x190a74, _0x3acdcc) {
                    return _0x190a74 + _0x3acdcc;
                },
                'wvWdw': _0x5b1018(408),
                'bSbVs': _0x5b1018(409),
                'QbIym': function (_0x3caf7c, _0x1b01cb) {
                    return _0x3caf7c + _0x1b01cb;
                },
                'kufBd': _0x5b1018(410)
            }, _0x3d05f6 = _0xe80da[_0x5b1018(411)](createHash, _0xe80da[_0x5b1018(412)]);
        let _0x4ab6c9 = typeof _0x34d445;
        _0x34d445 === null && (_0x4ab6c9 = _0xe80da[_0x5b1018(413)]);
        _0x3d05f6[_0x5b1018(414)](_0xe80da[_0x5b1018(415)](_0x4ab6c9, '\0'));
        switch (_0x4ab6c9) {
        case _0xe80da['wvWdw']:
            const _0x4d35ee = Object[_0x5b1018(416)](_0x34d445);
            !Array[_0x5b1018(417)](_0x34d445) && _0x4d35ee[_0x5b1018(418)]();
            _0x4d35ee['forEach'](_0x1d6995 => {
                const _0x21a077 = _0x5b1018;
                if (_0xe80da[_0x21a077(419)](typeof _0x34d445[_0x1d6995], _0xe80da['McEeq']))
                    return;
                _0x3d05f6[_0x21a077(414)](_0xe80da[_0x21a077(420)](_0x1d6995, '\0'))['update'](this[_0x21a077(421)](_0x34d445[_0x1d6995]));
            });
            break;
        case _0x5b1018(405):
            assert['ok'](![], _0xe80da['bSbVs']);
            break;
        default:
            _0x3d05f6['update'](_0xe80da[_0x5b1018(422)]('', _0x34d445));
            break;
        }
        return _0x3d05f6[_0x5b1018(423)](_0xe80da['kufBd']);
    }
    [_0x15a6b6(424)](_0x321c17, _0x20771b) {
        const _0x3fac25 = _0x15a6b6, _0x387eaa = {
                'AEmAo': function (_0x56fc2a, _0x44421d) {
                    return _0x56fc2a + _0x44421d;
                },
                'iRQXF': function (_0xd51e1e, _0xea5399) {
                    return _0xd51e1e + _0xea5399;
                }
            }, _0x677a9f = _0x387eaa[_0x3fac25(425)](_0x387eaa[_0x3fac25(426)](_0x321c17, _0x3fac25(427)), Random['id']());
        try {
            fs['writeFileSync'](_0x677a9f, _0x20771b), fs[_0x3fac25(428)](_0x677a9f, _0x321c17);
        } catch (_0x9d4171) {
            this[_0x3fac25(429)](_0x9d4171);
        }
    }
    [_0x15a6b6(430)](_0x590b7b) {
        const _0x23087b = _0x15a6b6, _0x1d1606 = {
                'NUmfS': 'utf8',
                'gJIgu': function (_0x35a956, _0x526789) {
                    return _0x35a956 === _0x526789;
                },
                'LYbsW': _0x23087b(431)
            };
        try {
            return fs[_0x23087b(432)](_0x590b7b, _0x1d1606[_0x23087b(433)]);
        } catch (_0xde504b) {
            if (_0xde504b && _0x1d1606[_0x23087b(434)](_0xde504b['code'], _0x1d1606['LYbsW']))
                return null;
            throw _0xde504b;
        }
    }
}, CachingCompiler = class CachingCompiler extends CachingCompilerBase {
    constructor({
        compilerName: _0x1a3360,
        defaultCacheSize: _0x3757b8,
        maxParallelism: maxParallelism = -1 * -8474 + -1 * 3851 + -4603
    }) {
        const _0x55eb21 = _0x15a6b6;
        super({
            'compilerName': _0x1a3360,
            'defaultCacheSize': _0x3757b8,
            'maxParallelism': maxParallelism
        }), this['_cache'] = new LRU({
            'max': this[_0x55eb21(377)],
            'length': _0x5420b5 => this['compileResultSize'](_0x5420b5)
        });
    }
    [_0x15a6b6(435)](_0x41adaf) {
        const _0x2213bd = _0x15a6b6, _0xb2e3d5 = {
                'Njuck': function (_0x2d2507, _0x3bfdd2) {
                    return _0x2d2507(_0x3bfdd2);
                },
                'DoWvC': 'CachingCompiler subclass should implement compileOneFile!'
            };
        throw _0xb2e3d5[_0x2213bd(436)](Error, _0xb2e3d5[_0x2213bd(437)]);
    }
    async _0x15a6b6(438)(_0x27ca65) {
        const _0xed6912 = _0x15a6b6, _0x57c6d3 = {
                'eBjyQ': _0xed6912(439),
                'SKIPn': function (_0x658464) {
                    return _0x658464();
                }
            }, _0x512397 = [], _0x22104a = this[_0xed6912(374)] && Object[_0xed6912(440)](null);
        _0x27ca65[_0xed6912(441)](_0xefcce7 => {
            const _0x21f215 = _0xed6912, _0x463617 = { 'aJwSt': _0x57c6d3[_0x21f215(442)] };
            _0x22104a && (_0x22104a[_0xefcce7[_0x21f215(443)]()] = -1 * -6401 + 5840 + 16 * -765);
            const _0x24ed62 = () => {
                const _0x4880bd = _0x21f215, _0x5f0361 = this[_0x4880bd(421)](this[_0x4880bd(381)](_0xefcce7));
                let _0x36227a = this[_0x4880bd(444)][_0x4880bd(445)](_0x5f0361);
                !_0x36227a && (_0x36227a = this[_0x4880bd(446)](_0x5f0361), _0x36227a && this['_cacheDebug'](_0x4880bd(447) + _0xefcce7[_0x4880bd(448)]()));
                if (!_0x36227a) {
                    const _0x5bb9a7 = _0x463617[_0x4880bd(449)][_0x4880bd(450)]('|');
                    let _0x59b2b4 = -2358 + -28 * 295 + 10618;
                    while (!![]) {
                        switch (_0x5bb9a7[_0x59b2b4++]) {
                        case '0':
                            this[_0x4880bd(444)][_0x4880bd(451)](_0x5f0361, _0x36227a);
                            continue;
                        case '1':
                            this[_0x4880bd(452)](_0x5f0361, _0x36227a);
                            continue;
                        case '2':
                            if (!_0x36227a)
                                return;
                            continue;
                        case '3':
                            _0x36227a = Promise[_0x4880bd(453)](this[_0x4880bd(435)](_0xefcce7));
                            continue;
                        case '4':
                            _0x512397[_0x4880bd(454)](_0xefcce7[_0x4880bd(448)]());
                            continue;
                        }
                        break;
                    }
                }
                return _0x36227a;
            };
            if (this[_0x21f215(455)] && _0xefcce7['supportsLazyCompilation'])
                this[_0x21f215(455)](_0xefcce7, _0x24ed62);
            else {
                const _0x30c228 = _0x57c6d3[_0x21f215(456)](_0x24ed62);
                _0x30c228 && this[_0x21f215(384)](_0xefcce7, _0x30c228);
            }
        }), this[_0xed6912(374)] && this[_0xed6912(380)][_0xed6912(454)](() => {
            const _0x568472 = _0xed6912;
            _0x512397[_0x568472(418)](), this[_0x568472(429)](_0x568472(457) + ++this[_0x568472(379)] + _0x568472(458) + JSON['stringify'](_0x512397) + ' ' + JSON['stringify'](Object[_0x568472(416)](_0x22104a)['sort']()));
        });
    }
    ['_cacheFilename'](_0x2e6b03) {
        const _0x284c83 = _0x15a6b6, _0x5cd037 = {
                'KHesb': function (_0x2274df, _0xb06295) {
                    return _0x2274df + _0xb06295;
                },
                'rKlio': _0x284c83(459)
            };
        if (!/^[a-f0-9]+$/['test'](_0x2e6b03))
            throw Error(_0x5cd037[_0x284c83(460)](_0x5cd037[_0x284c83(461)], _0x2e6b03));
        return path[_0x284c83(462)](this[_0x284c83(378)], _0x2e6b03 + _0x284c83(463));
    }
    [_0x15a6b6(446)](_0x4e2bd7) {
        const _0x2d288a = _0x15a6b6;
        if (!this[_0x2d288a(378)])
            return null;
        const _0x550d14 = this[_0x2d288a(464)](_0x4e2bd7), _0x55da4a = this[_0x2d288a(465)](_0x550d14);
        if (!_0x55da4a)
            return null;
        return this['_cache'][_0x2d288a(451)](_0x4e2bd7, _0x55da4a), _0x55da4a;
    }
    [_0x15a6b6(452)](_0x205891, _0x17c000) {
        const _0x281aa7 = _0x15a6b6;
        if (!this['_diskCache'])
            return;
        const _0x3039c7 = this[_0x281aa7(464)](_0x205891), _0x42f2f3 = this['stringifyCompileResult'](_0x17c000);
        this[_0x281aa7(424)](_0x3039c7, _0x42f2f3);
    }
    [_0x15a6b6(465)](_0x5cc58c) {
        const _0x24ff9c = _0x15a6b6, _0x3fc8ee = this['_readFileOrNull'](_0x5cc58c);
        return this[_0x24ff9c(466)](_0x3fc8ee);
    }
};